// AI image/video generator — talks to the Django backend's dedicated media
// generation endpoints (NOT the /solutions/extension endpoint aiGenerator.js
// uses). Mirrors aiGenerator.js's auth/refresh handling and error surfacing
// so the two features feel identical from the UI's perspective, but this
// backend returns plain JSON envelopes (no SSE), so the body handling here
// is simpler.
//
// Backend contract (see ImageGenerationAPIView / VideoGenerationAPIView /
// VideoGenerationStatusAPIView / AIGenerationHistoryAPIView in views.py):
//
//   POST /api/v1/ai/image/generate      { prompt, selectedVal? }
//   POST /api/v1/ai/video/generate      { prompt, selectedVal? }
//   GET  /api/v1/ai/video/status/:id
//   GET  /api/v1/ai/history?type=IMAGE|VIDEO&page=&pageSize=
//
// Success envelope:  { status: true,  message, statusCode, data: {...} }
// Error envelope:    { status: false, message, statusCode, error: { code, message, details, ... } }
// Bad/expired token: { status: false, message: 'Bad token', statusCode: 401 }  (no `error` key)
//
// A "generation" object always looks like:
//   { id, generationType: 'IMAGE'|'VIDEO', prompt, modelName, status: 'PROCESSING'|'SUCCESS'|'FAILED',
//     resultUrl, creditsCharged, dateCreated }

import { domain, refreshTokens, getUserState, AuthError } from '../menu/authfetch'

const IMAGE_GENERATE_ENDPOINT = `${domain}/api/v1/ai/image/generate`
const VIDEO_GENERATE_ENDPOINT = `${domain}/api/v1/ai/video/generate`
const VIDEO_STATUS_ENDPOINT = (id) => `${domain}/api/v1/ai/video/status/${id}`
const HISTORY_ENDPOINT = `${domain}/api/v1/ai/history`

// Must match constants.py — shown to the user before they spend credits.
// If the backend's pricing changes, update both places.
export const CREDITS_PER_IMAGE_GENERATION = 40
export const CREDITS_PER_VIDEO_GENERATION = 250

// How often to poll an in-flight video job, and how long to keep trying
// before giving up client-side (the job may still finish server-side —
// the user can just reopen History later to check).
const VIDEO_POLL_INTERVAL_MS = 6000
const VIDEO_POLL_TIMEOUT_MS = 6 * 60 * 1000 // 6 minutes

function extractErrorMessage(parsed, fallback) {
  if (!parsed || typeof parsed !== 'object') return fallback
  return parsed.error?.details || parsed.error?.message || parsed.message || fallback
}

// ===== AUTHENTICATED REQUEST =====
// Not routed through a generic fetchWithAuth helper, mirroring aiGenerator.js's
// reasoning: we want full control over how the 401/refresh retry and the
// backend's specific envelope shapes are handled for this feature.
async function authedRequest(url, { method = 'GET', body, signal, _retryCount = 0 } = {}) {
  const stored = getUserState()
  if (!stored?.accessToken) {
    throw new AuthError('No access token found — please sign in.')
  }

  const response = await fetch(url, {
    method,
    signal,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${stored.accessToken}`,
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  if (response.status === 401 && _retryCount === 0) {
    await refreshTokens()
    return authedRequest(url, { method, body, signal, _retryCount: 1 })
  }

  let parsed = null
  try {
    parsed = await response.json()
  } catch {
    // fall through — parsed stays null, handled below
  }

  if (!response.ok || parsed?.status === false) {
    throw new Error(extractErrorMessage(parsed, `Request failed (${response.status}): ${response.statusText}`))
  }

  if (!parsed) {
    throw new Error('The server returned an unexpected empty response. Please try again.')
  }

  return parsed
}

// ===== PUBLIC API =====

/**
 * Generates an image from a text prompt. Synchronous — resolves once the
 * image is ready (or throws). Credits are only deducted server-side on
 * confirmed success, so a thrown error here means the user was NOT charged.
 * @param {string} prompt
 * @param {{ selectedVal?: string, signal?: AbortSignal }} [opts]
 * @returns {Promise<{ generation: object, remainingCredits: number }>}
 */
export async function generateImage(prompt, opts = {}) {
  const trimmed = (prompt || '').trim()
  if (!trimmed) throw new Error('Please describe the image you want to generate.')

  const body = { prompt: trimmed }
  if (opts.selectedVal) body.selectedVal = opts.selectedVal

  const parsed = await authedRequest(IMAGE_GENERATE_ENDPOINT, { method: 'POST', body, signal: opts.signal })
  const generation = parsed?.data?.generation
  if (!generation) throw new Error('Unexpected response shape from server — no generation returned.')

  return { generation, remainingCredits: parsed?.data?.remaining_credits }
}

/**
 * Starts a video generation job. Resolves as soon as the job is queued
 * (status: PROCESSING) — call pollVideoUntilDone() or checkVideoStatus()
 * to find out when it finishes. Credits are NOT deducted at this point.
 * @param {string} prompt
 * @param {{ selectedVal?: string, signal?: AbortSignal }} [opts]
 * @returns {Promise<{ generation: object }>}
 */
export async function startVideoGeneration(prompt, opts = {}) {
  const trimmed = (prompt || '').trim()
  if (!trimmed) throw new Error('Please describe the video you want to generate.')

  const body = { prompt: trimmed }
  if (opts.selectedVal) body.selectedVal = opts.selectedVal

  const parsed = await authedRequest(VIDEO_GENERATE_ENDPOINT, { method: 'POST', body, signal: opts.signal })
  const generation = parsed?.data?.generation
  if (!generation) throw new Error('Unexpected response shape from server — no generation returned.')

  return { generation }
}

/**
 * Single status check for a video job. Safe to call repeatedly — once the
 * job resolves server-side, this just returns the stored record without
 * re-contacting the AI backend or re-charging credits.
 * @param {string|number} generationId
 * @returns {Promise<{ generation: object, remainingCredits?: number }>}
 */
export async function checkVideoStatus(generationId, opts = {}) {
  const parsed = await authedRequest(VIDEO_STATUS_ENDPOINT(generationId), { signal: opts.signal })
  const generation = parsed?.data?.generation
  if (!generation) throw new Error('Unexpected response shape from server — no generation returned.')

  return { generation, remainingCredits: parsed?.data?.remaining_credits }
}

/**
 * Polls a video job until it resolves (SUCCESS/FAILED) or the client-side
 * timeout is hit. Calls onTick with each intermediate status so the UI can
 * show "still processing" feedback.
 * @param {string|number} generationId
 * @param {{ onTick?: (generation: object) => void, signal?: AbortSignal }} [opts]
 * @returns {Promise<{ generation: object, remainingCredits?: number }>}
 */
export async function pollVideoUntilDone(generationId, opts = {}) {
  const startedAt = Date.now()

  while (true) {
    if (opts.signal?.aborted) throw new DOMException('Polling cancelled', 'AbortError')

    const { generation, remainingCredits } = await checkVideoStatus(generationId, { signal: opts.signal })
    opts.onTick?.(generation)

    if (generation.status !== 'PROCESSING') {
      return { generation, remainingCredits }
    }

    if (Date.now() - startedAt > VIDEO_POLL_TIMEOUT_MS) {
      throw new Error(
        'This is taking longer than usual. The video may still finish — check History in a few minutes.'
      )
    }

    await new Promise((resolve) => setTimeout(resolve, VIDEO_POLL_INTERVAL_MS))
  }
}

/**
 * Fetches the user's own generation history (successful + in-flight only —
 * failed attempts are never written server-side in the first place).
 * @param {{ type?: 'IMAGE'|'VIDEO', page?: number, pageSize?: number, signal?: AbortSignal }} [opts]
 * @returns {Promise<{ items: object[], pagination: object }>}
 */
export async function fetchGenerationHistory(opts = {}) {
  const params = new URLSearchParams()
  if (opts.type) params.set('type', opts.type)
  if (opts.page) params.set('page', String(opts.page))
  if (opts.pageSize) params.set('pageSize', String(opts.pageSize))

  const url = params.toString() ? `${HISTORY_ENDPOINT}?${params}` : HISTORY_ENDPOINT
  const parsed = await authedRequest(url, { signal: opts.signal })

  return {
    items: Array.isArray(parsed?.data) ? parsed.data : [],
    pagination: parsed?.pagination || null,
  }
}
