import { fetchWithAuth, domain } from '../menu/authfetch'

// ─── course-folder search cache + background prefetch ───────────────────────
// Searching course codes hits a slow endpoint. Two things make it feel instant:
//
//  1. PREFETCH — right after login we quietly warm the most common course
//     prefixes (PSYC, DCIT …) so the first search for them is a cache hit.
//  2. CACHE — every search result is remembered (memory + sessionStorage), so
//     repeating or revisiting a search never waits on the network again.
//     Identical in-flight requests are shared, so a prefetch that is still
//     running when the user types the same thing is simply joined, not repeated.

export const PREFETCH_QUERIES = ['psyc', 'dcit']
export const PAGE_SIZE = 30

const TTL_MS = 10 * 60 * 1000          // results considered fresh for 10 min
const STORAGE_KEY = 'uel:folderSearchCache:v1'
const MAX_ENTRIES = 40

const mem = new Map()                   // key -> { at, folders }
const inflight = new Map()              // key -> Promise<folders>

const norm = (q) => String(q || '').trim().toLowerCase()

// The folders endpoint has returned several shapes over time — accept all.
export function extractFolders(res) {
  const list =
    (Array.isArray(res) && res) ||
    res?.folders ||
    res?.data?.folders ||
    (Array.isArray(res?.data) && res.data) ||
    []
  return Array.isArray(list) ? list : []
}

function extractTotal(res) {
  const t = res?.total ?? res?.data?.total
  return Number.isFinite(Number(t)) ? Number(t) : null
}

// ── sessionStorage persistence (survives a refresh, not a new tab) ──────────
let hydrated = false
function hydrate() {
  if (hydrated) return
  hydrated = true
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return
    const obj = JSON.parse(raw)
    Object.entries(obj).forEach(([k, v]) => {
      if (v && Array.isArray(v.folders)) mem.set(k, v)
    })
  } catch { /* storage unavailable / corrupt — just start cold */ }
}

function persist() {
  try {
    // keep only the newest MAX_ENTRIES
    const entries = [...mem.entries()].sort((a, b) => b[1].at - a[1].at).slice(0, MAX_ENTRIES)
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(Object.fromEntries(entries)))
  } catch { /* quota — cache stays in memory only */ }
}

/** Fresh cached results for this exact query, or null. */
export function getCachedFolders(query) {
  hydrate()
  const hit = mem.get(norm(query))
  if (!hit) return null
  return { folders: hit.folders, complete: !!hit.complete, fresh: Date.now() - hit.at < TTL_MS }
}

const squash = (v) => String(v || '').toLowerCase().replace(/\s+/g, '')
const matches = (f, q) => squash(`${f.courseName ?? ''} ${f.folderPath ?? ''}`).includes(q)

/**
 * Answer a search from memory. If we hold a COMPLETE list for a shorter prefix
 * ("psyc") then "psyc 101" is just a filter of it — no network at all.
 * `complete` tells the caller whether this can be trusted as the full answer
 * (it is still revalidated in the background either way).
 */
export function localMatch(query) {
  hydrate()
  const q = squash(query)
  if (q.length < 2) return null
  let best = null
  for (const [key, val] of mem) {
    const k = squash(key)
    if (q.startsWith(k) && (!best || k.length > best.k.length || (k.length === best.k.length && val.complete))) {
      best = { k, val }
    }
  }
  if (!best) return null
  const folders = best.val.folders.filter((f) => matches(f, q))
  return folders.length ? { folders, complete: !!best.val.complete } : null
}

/** Network fetch (deduped) that also fills the cache. */
export function fetchFolders(query) {
  hydrate()
  const key = norm(query)
  if (inflight.has(key)) return inflight.get(key)

  const p = fetchWithAuth(
    `${domain}/api/v1/papers/folders?search=${encodeURIComponent(query.trim())}&pageSize=${PAGE_SIZE}`,
    { method: 'GET' }
  )
    .then((res) => {
      const folders = extractFolders(res)
      const prev = mem.get(key)
      if (!prev?.complete) mem.set(key, { at: Date.now(), folders })
      persist()
      return folders
    })
    .finally(() => inflight.delete(key))

  inflight.set(key, p)
  return p
}

const FULL_PAGE = 100
const MAX_PAGES = 12

/**
 * Pull EVERY folder for a prefix (paging by offset), so any longer search that
 * starts with it ("psyc 101", "psyc2") can be answered locally. If the server
 * ignores `offset` (a page adds nothing new) we stop and keep what we have,
 * marked incomplete, so nothing wrong is ever shown as the full list.
 */
export async function fetchAllFolders(prefix) {
  hydrate()
  const key = norm(prefix)
  const seen = new Set()
  const all = []
  let total = null
  let complete = false

  for (let page = 0; page < MAX_PAGES; page++) {
    const offset = page * FULL_PAGE
    const res = await fetchWithAuth(
      `${domain}/api/v1/papers/folders?search=${encodeURIComponent(prefix.trim())}&pageSize=${FULL_PAGE}&offset=${offset}`,
      { method: 'GET' }
    )
    const batch = extractFolders(res)
    if (total == null) total = extractTotal(res)
    const before = all.length
    batch.forEach((f) => {
      const id = f.folderPath ?? f.driveFolderId ?? f.courseName
      if (!seen.has(id)) { seen.add(id); all.push(f) }
    })
    if (all.length === before) { complete = total != null && all.length >= total; break } // nothing new
    if (total != null ? all.length >= total : batch.length < FULL_PAGE) { complete = true; break }
  }

  mem.set(key, { at: Date.now(), folders: all, complete })
  persist()
  return all
}

/**
 * Warm the cache without disturbing anything: runs when the browser is idle,
 * one query at a time, and swallows every error (a failed prefetch is simply
 * a cache miss later).
 */
let prefetched = false
export function prefetchCourseSearches(queries = PREFETCH_QUERIES) {
  if (prefetched) return
  prefetched = true

  const idle = typeof requestIdleCallback === 'function'
    ? (fn) => requestIdleCallback(fn, { timeout: 500 })
    : (fn) => setTimeout(fn, 300)

  idle(async () => {
    for (const q of queries) {
      const cached = getCachedFolders(q)
      if (cached?.fresh && cached.complete) continue
      try { await fetchAllFolders(q) } catch { /* ignore */ }
    }
  })
}

/** Call on logout / auth failure so one user's results never reach another. */
export function clearSearchCache() {
  mem.clear()
  inflight.clear()
  prefetched = false
  hydrated = true
  try { sessionStorage.removeItem(STORAGE_KEY) } catch { /* noop */ }
}
