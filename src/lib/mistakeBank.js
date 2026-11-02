// The mistake bank: every question a student got wrong in the solutions studio,
// saved so they can come back to it — and so the next quiz or game round can
// put those questions FIRST.
//
// • Keyed per source (the studio uses the course), not per generated pool — so
//   regenerating a solution, or opening its saved copy, doesn't make mistakes
//   vanish.
// • Stores the whole question, so "practise my mistakes" works even when the
//   game's question pool is gone and costs no credits.
// • Written per ANSWER (not per finished round), so quitting a game halfway
//   still keeps what was missed so far.
// • A mistake is cleared by answering it correctly in a LATER round. Getting
//   it right in the same round you missed it (e.g. the last pairing in Match
//   Pairs, or a replay after a checkpoint) doesn't count.

import { loadState, saveState } from './localStore'
import { buildGameQuestions, shuffle, shuffleOptions } from './gameQuestions'

const KEY = 'mistake-bank'
const MAX_SOURCES = 60
const MAX_ITEMS_PER_SOURCE = 300

const clean = (v) => (typeof v === 'string' ? v.trim() : v == null ? '' : String(v).trim())
const norm = (s) => clean(s).toLowerCase().replace(/\s+/g, ' ')
const stemOf = (q) => norm(q && (q.q ?? q.question ?? q.front))

function hash(str) {
  let h = 5381
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0
  return (h >>> 0).toString(36)
}

/** Stable id from the question's wording (not its option order or _id). */
export function questionId(q) {
  return `m${hash(stemOf(q))}`
}

/** Source key for a course name; falls back to a content hash when unnamed. */
export function courseSourceKey(courseName, fallbackText = '') {
  const c = norm(courseName)
  if (c) return `course:${c}`
  const t = norm(fallbackText)
  return t ? `text:${hash(t)}` : 'scratch'
}

// ─── canonical question shape ─────────────────────────────────────────────────

function canonical(q) {
  if (!q || typeof q !== 'object') return null
  const kind = q.kind || q.type
  const text = clean(q.q ?? q.question ?? q.front)
  if (!text) return null

  if (kind === 'fillIn') {
    const answer = clean(q.correctAnswer ?? q.answer)
    if (!answer) return null
    return {
      kind: 'fillIn',
      q: text,
      correctAnswer: answer,
      hints: Array.isArray(q.hints) ? q.hints.map(clean).filter(Boolean) : [],
      explanation: clean(q.explanation) || null,
    }
  }

  const opts = Array.isArray(q.options) ? q.options.map(clean) : []
  const idx = Number.isInteger(q.correct) ? q.correct : q.correctIndex
  if (opts.filter(Boolean).length < 2 || !Number.isInteger(idx) || !opts[idx]) return null
  return { kind: 'mcq', q: text, options: opts, correct: idx, explanation: clean(q.explanation) || null }
}

// ─── storage ──────────────────────────────────────────────────────────────────

const listeners = new Set()
const notify = () => listeners.forEach((fn) => { try { fn() } catch { /* a bad listener mustn't break saving */ } })

/** Call `fn` whenever the bank changes. Returns an unsubscribe function. */
export function subscribeMistakes(fn) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

function read() {
  const v = loadState(KEY, {})
  return v && typeof v === 'object' && !Array.isArray(v) ? v : {}
}

function prune(bank) {
  const keys = Object.keys(bank)
  if (keys.length > MAX_SOURCES) {
    keys
      .sort((a, b) => (bank[a].u ?? 0) - (bank[b].u ?? 0))
      .slice(0, keys.length - MAX_SOURCES)
      .forEach((k) => delete bank[k])
  }
  for (const k of Object.keys(bank)) {
    const ids = Object.keys(bank[k].items || {})
    if (ids.length <= MAX_ITEMS_PER_SOURCE) continue
    // Forget already-fixed questions first, then the least recently seen.
    const items = bank[k].items
    ids
      .sort((a, b) => (items[a].open === items[b].open ? (items[a].lastSeen ?? 0) - (items[b].lastSeen ?? 0) : items[a].open ? 1 : -1))
      .slice(0, ids.length - MAX_ITEMS_PER_SOURCE)
      .forEach((id) => delete items[id])
  }
}

function write(bank) {
  prune(bank)
  saveState(KEY, bank)
  notify()
}

// ─── recording ────────────────────────────────────────────────────────────────

/**
 * Record one answer.
 * @param {{ key: string, label?: string }} source
 * @param {object} question  mcq or fillIn, in any of the app's shapes
 * @param {boolean} ok       whether it was answered correctly
 * @param {string} [roundId] one id per quiz/game round (see header comment)
 * @returns {{ opened: boolean, cleared: boolean }|null}
 *   opened  — this answer put the question on the mistakes list (was not there before)
 *   cleared — this answer took it off
 */
export function recordAnswer(source, question, ok, roundId) {
  const key = source && source.key
  if (!key) return null
  const c = canonical(question)
  if (!c) return null

  const id = questionId(c)
  const bank = read()
  const entry = bank[key] || (bank[key] = { label: '', u: 0, items: {} })
  if (source.label) entry.label = source.label
  const now = Date.now()
  const result = { opened: false, cleared: false }
  let it = entry.items[id]

  if (!ok) {
    result.opened = !(it && it.open)
    it = it || { id, wrong: 0, right: 0, fixed: 0, firstWrong: now }
    it.q = c // keep the latest wording
    it.wrong += 1
    it.lastWrong = now
    it.open = true
    it.wrongRound = roundId || null
    entry.items[id] = it
  } else if (it) {
    it.right += 1
    if (it.open && (!roundId || it.wrongRound !== roundId)) {
      it.open = false
      it.fixed += 1
      it.fixedAt = now
      result.cleared = true
    }
  } else {
    return result // right first time, never missed — nothing to remember
  }

  it.lastSeen = now
  entry.u = now
  write(bank)
  return result
}

// ─── reading ──────────────────────────────────────────────────────────────────

/** Open mistakes for a source: most-missed first, then most recent. */
export function listOpen(sourceKey) {
  const entry = read()[sourceKey]
  if (!entry || !entry.items) return []
  return Object.values(entry.items)
    .filter((it) => it.open)
    .sort((a, b) => b.wrong - a.wrong || (b.lastWrong ?? 0) - (a.lastWrong ?? 0))
}

export function countOpen(sourceKey) {
  return listOpen(sourceKey).length
}

export function fixedCount(sourceKey) {
  const entry = read()[sourceKey]
  if (!entry || !entry.items) return 0
  return Object.values(entry.items).filter((it) => !it.open && it.fixed > 0).length
}

/** Every source that still has open mistakes, most recently active first. */
export function listSources() {
  const bank = read()
  return Object.keys(bank)
    .map((key) => ({ key, label: bank[key].label || '', u: bank[key].u ?? 0, open: listOpen(key).length }))
    .filter((s) => s.open > 0)
    .sort((a, b) => b.u - a.u)
}

export function totalOpen() {
  return listSources().reduce((n, s) => n + s.open, 0)
}

export function removeMistake(sourceKey, id) {
  const bank = read()
  if (bank[sourceKey] && bank[sourceKey].items && bank[sourceKey].items[id]) {
    delete bank[sourceKey].items[id]
    write(bank)
  }
}

/** Forgets every open mistake for a source (keeps nothing it hadn't missed anyway). */
export function clearMistakes(sourceKey) {
  const bank = read()
  const entry = bank[sourceKey]
  if (!entry || !entry.items) return
  for (const id of Object.keys(entry.items)) if (entry.items[id].open) delete entry.items[id]
  write(bank)
}

// ─── turning mistakes back into something playable ────────────────────────────

/** Open mistakes as quiz exercises (mcq + fillIn), most-missed first. */
export function mistakesAsExercises(sourceKey) {
  return listOpen(sourceKey).map((it) => ({ ...it.q, _id: it.id }))
}

/**
 * Open mistakes as playable game MCQs, most-missed first. Fill-in mistakes
 * become MCQs with distractors borrowed from other answers: the rest of the
 * bank, plus `extra` (typically the game's current question pool) — which is
 * what lets a single fill-in mistake still be playable.
 */
export function mistakesAsGameQuestions(sourceKey, extra = []) {
  const open = listOpen(sourceKey)
  if (!open.length) return []
  const order = new Map(open.map((it, i) => [stemOf(it.q), i]))
  const mine = open.map((it) => ({ ...it.q, _id: it.id }))
  // Mistakes go first so they win any wording clash with `extra`; only the
  // mistakes themselves are returned.
  const built = buildGameQuestions([...mine, ...(Array.isArray(extra) ? extra : [])])
  return built
    .filter((q) => order.has(stemOf(q)))
    .sort((a, b) => order.get(stemOf(a)) - order.get(stemOf(b)))
}

/**
 * Builds one game round.
 *
 *   mode 'first' — missed questions lead (most-missed first), the rest of the
 *                  pool follows shuffled.
 *   mode 'only'  — just the missed questions, topped up with pool questions
 *                  only if there are fewer than the game's minimum.
 *   mode 'mix'   — the original behaviour: a shuffled pool, mistakes ignored.
 *
 * `size` 0 means "every question". Options are re-shuffled for every question.
 */
export function buildRound({ pool, mistakes = [], mode = 'mix', size = 0, minQuestions = 0 }) {
  const mistakeKeys = new Set(mistakes.map(stemOf))
  const rest = shuffle(pool.filter((q) => !mistakeKeys.has(stemOf(q))))

  let ordered
  if (mode === 'only' && mistakes.length) {
    ordered = [...mistakes]
    if (ordered.length < minQuestions) ordered = [...ordered, ...rest.slice(0, minQuestions - ordered.length)]
  } else if (mode === 'first' && mistakes.length) {
    ordered = [...mistakes, ...rest]
  } else {
    ordered = shuffle(pool)
  }

  return (size > 0 ? ordered.slice(0, size) : ordered).map(shuffleOptions)
}
