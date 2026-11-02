// Local cache of every solution a student has opened, plus the small bits of
// "where was I" state that make the AI studio feel like one continuous place:
//
//   • solutionCache:<fileId>   the finished solution (so a refresh / revisit is
//                              instant and never re-spends a credit)
//   • studio-last              the solution the student was last looking at —
//                              what "Solutions" opens straight into
//   • studio-ui:<fileId|home>  that solution's UI state (drawer open, AI tool,
//                              raw/solved view, sidebar tab, …)
//
// Lives in its own module (rather than inside Searchlist.jsx) because both
// Searchlist and Showfiles need it, and Searchlist imports Showfiles.
//
// The cache itself keeps its original unscoped localStorage keys (changing
// them would orphan every existing student's cached solutions and force paid
// re-fetches). The new pointers below ARE per-user, via localStore, so on a
// shared phone one student's "last opened" never becomes another's.

import { loadState, saveState } from './localStore'

const SOLUTION_CACHE_PREFIX = 'solutionCache:'
const LAST_KEY = 'studio-last'
const UI_PREFIX = 'studio-ui:'
// Cached solutions carry full HTML, so cap how many we keep. Oldest go first.
const MAX_CACHED = 60

export function cacheSolution(namedfile, data) {
  try {
    localStorage.setItem(
      SOLUTION_CACHE_PREFIX + namedfile,
      JSON.stringify({ ...data, savedAt: Date.now() })
    )
  } catch {
    // Quota exceeded — drop the oldest entries and try once more.
    try {
      pruneCache(Math.max(5, Math.floor(MAX_CACHED / 2)))
      localStorage.setItem(
        SOLUTION_CACHE_PREFIX + namedfile,
        JSON.stringify({ ...data, savedAt: Date.now() })
      )
    } catch {
      // Still no room — it's only a cache, so fail silently.
    }
    return
  }
  pruneCache(MAX_CACHED)
}

export function getCachedSolution(namedfile) {
  try {
    const raw = localStorage.getItem(SOLUTION_CACHE_PREFIX + namedfile)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

/** Every solution cached locally, newest first. Never touches the network. */
export function getAllCachedSolutions() {
  try {
    const all = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (!key || !key.startsWith(SOLUTION_CACHE_PREFIX)) continue
      let data = null
      try { data = JSON.parse(localStorage.getItem(key)) } catch { /* skip corrupt entry */ }
      if (!data) continue
      all.push({ ...data, namedfile: key.slice(SOLUTION_CACHE_PREFIX.length) })
    }
    return all.sort((a, b) => (b.savedAt ?? 0) - (a.savedAt ?? 0))
  } catch {
    return []
  }
}

/** Most recently cached solution, or null. */
export function getLastSolution() {
  const all = getAllCachedSolutions()
  return all.length ? all[0] : null
}

function pruneCache(max) {
  try {
    const all = getAllCachedSolutions()
    all.slice(max).forEach((it) => localStorage.removeItem(SOLUTION_CACHE_PREFIX + it.namedfile))
  } catch {
    // ignore
  }
}

// ─── "Where was I" pointers ──────────────────────────────────────────────────

export function setLastStudioFile(namedfile) {
  if (namedfile) saveState(LAST_KEY, namedfile)
}

/**
 * The solution "Solutions" should reopen: the one last viewed if it's still
 * cached, otherwise the newest cached one, otherwise null (→ empty studio).
 * Only ever returns a cached file, so reopening can never trigger a paid fetch.
 */
export function getLastStudioFile() {
  const last = loadState(LAST_KEY, null)
  if (typeof last === 'string' && last && getCachedSolution(last)) return last
  return getLastSolution()?.namedfile ?? null
}

// ─── Per-solution studio UI state ────────────────────────────────────────────

export function readStudioUi(id) {
  const v = loadState(UI_PREFIX + (id || 'home'), null)
  return v && typeof v === 'object' && !Array.isArray(v) ? v : {}
}

export function writeStudioUi(id, patch) {
  saveState(UI_PREFIX + (id || 'home'), { ...readStudioUi(id), ...patch })
}
