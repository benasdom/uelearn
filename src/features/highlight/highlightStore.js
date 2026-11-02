// Highlighter core — no React in here so it can be tested on its own.
//
// A highlight is a character range inside ONE piece of text:
//
//   { id, s, e, c, t }   s/e = start/end offset, c = background colour (#hex),
//                        t = text colour mode: 'auto' | 'dark' | 'light'
//
// "One piece of text" is anything carrying a `data-hl-key` attribute: a
// question stem, one answer option, an explanation, or the whole solution
// body. Offsets are counted over the element's concatenated text nodes, which
// is stable no matter how many <mark> wrappers we add around them — so the
// same offsets work for React-rendered text (HText) and for injected HTML
// (the solution prose).

import { loadState, saveState } from '../../lib/localStore'

const STORE_KEY = 'highlights'
const PREFS_KEY = 'highlight-prefs'
const MAX_KEYS = 400 // least-recently-touched pieces of text are forgotten first

export const HL_COLORS = [
  { name: 'Yellow', value: '#fde047' },
  { name: 'Green', value: '#86efac' },
  { name: 'Blue', value: '#93c5fd' },
  { name: 'Pink', value: '#f9a8d4' },
  { name: 'Orange', value: '#fdba74' },
  { name: 'Purple', value: '#c4b5fd' },
]

export const TEXT_MODES = [
  { key: 'auto', label: 'Auto' },
  { key: 'dark', label: 'Dark' },
  { key: 'light', label: 'Light' },
]

export const DEFAULT_PREFS = { c: HL_COLORS[0].value, t: 'auto' }

const DARK = '#111827'
const LIGHT = '#ffffff'

// ─── ids / hashing ────────────────────────────────────────────────────────────

let idSeq = 0
const newId = () => `h${Date.now().toString(36)}${(++idSeq).toString(36)}`

/** Short, stable hash — used to key highlights by the *content* they sit on. */
export function hashKey(input) {
  const str = String(input ?? '')
  let h = 5381
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0
  return (h >>> 0).toString(36)
}

// ─── colour maths ─────────────────────────────────────────────────────────────

export function isValidColor(c) {
  return typeof c === 'string' && /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(c)
}

export function hexToRgb(hex) {
  if (!isValidColor(hex)) return null
  let h = hex.slice(1)
  if (h.length === 3) h = h.split('').map((ch) => ch + ch).join('')
  const n = parseInt(h, 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

function relLuminance([r, g, b]) {
  const lin = (v) => {
    const s = v / 255
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
  }
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b)
}

/** WCAG contrast ratio between two #hex colours (1 – 21). */
export function contrastRatio(a, b) {
  const ra = hexToRgb(a)
  const rb = hexToRgb(b)
  if (!ra || !rb) return 1
  const la = relLuminance(ra)
  const lb = relLuminance(rb)
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05)
}

/**
 * The text colour to draw on a highlight. 'dark' / 'light' are explicit
 * overrides; 'auto' picks whichever of the two reads better on `bg` — which
 * is what keeps a yellow highlight legible in dark mode (where the page's own
 * text colour is near-white) and a deep-blue one legible in light mode.
 */
export function readableText(bg, mode = 'auto') {
  if (mode === 'dark') return DARK
  if (mode === 'light') return LIGHT
  if (!isValidColor(bg)) return DARK
  return contrastRatio(bg, DARK) >= contrastRatio(bg, LIGHT) ? DARK : LIGHT
}

export function markStyle(h) {
  return `background:${h.c};color:${readableText(h.c, h.t)}`
}

// ─── range operations (pure) ──────────────────────────────────────────────────

const byStart = (a, b) => a.s - b.s || a.e - b.e

/** Drops empty/invalid ranges, clamps to the text length, sorts by start. */
export function clampList(list, len = Infinity) {
  if (!Array.isArray(list)) return []
  return list
    .filter((h) => h && Number.isFinite(h.s) && Number.isFinite(h.e) && h.id && isValidColor(h.c))
    .map((h) => ({ ...h, s: Math.max(0, h.s), e: Math.min(len, h.e) }))
    .filter((h) => h.e > h.s)
    .sort(byStart)
}

/** Removes the part of every highlight that falls inside [s, e), splitting if needed. */
function carve(list, s, e) {
  const out = []
  for (const h of list) {
    if (h.e <= s || h.s >= e) {
      out.push(h)
      continue
    }
    if (h.s < s) out.push({ ...h, e: s })
    if (h.e > e) out.push({ ...h, id: newId(), s: e })
  }
  return out
}

/** Touching ranges with the same colour + text mode become one highlight. */
function mergeAdjacent(sorted) {
  const out = []
  for (const h of sorted) {
    const prev = out[out.length - 1]
    if (prev && prev.e === h.s && prev.c === h.c && prev.t === h.t) prev.e = h.e
    else out.push({ ...h })
  }
  return out
}

/** Adds a highlight; where it overlaps older ones, the newer colour wins. */
export function addHighlight(list, { s, e, c, t = 'auto' }) {
  if (!(e > s) || !isValidColor(c)) return list
  const base = carve(list, s, e)
  base.push({ id: newId(), s, e, c, t })
  return mergeAdjacent(base.sort(byStart))
}

/** Clears highlighting from [s, e) (like an eraser). */
export function eraseRange(list, s, e) {
  if (!(e > s)) return list
  return carve(list, s, e).sort(byStart)
}

export function recolor(list, id, patch) {
  const next = list.map((h) => {
    if (h.id !== id) return h
    const out = { ...h }
    if (patch.c !== undefined && isValidColor(patch.c)) out.c = patch.c
    if (patch.t !== undefined && TEXT_MODES.some((m) => m.key === patch.t)) out.t = patch.t
    return out
  })
  return mergeAdjacent(next.sort(byStart))
}

export function removeById(list, id) {
  return list.filter((h) => h.id !== id)
}

export function overlapsAny(list, s, e) {
  return list.some((h) => h.s < e && h.e > s)
}

/** Splits `text` into plain / highlighted pieces for rendering. */
export function segmentText(text, list) {
  const str = String(text ?? '')
  const ranges = clampList(list, str.length)
  if (!ranges.length) return [{ text: str, start: 0, end: str.length, h: null }]
  const out = []
  let pos = 0
  for (const h of ranges) {
    const s = Math.max(h.s, pos) // guard against overlap in corrupt data
    if (h.e <= s) continue
    if (s > pos) out.push({ text: str.slice(pos, s), start: pos, end: s, h: null })
    out.push({ text: str.slice(s, h.e), start: s, end: h.e, h })
    pos = h.e
  }
  if (pos < str.length) out.push({ text: str.slice(pos), start: pos, end: str.length, h: null })
  return out
}

// ─── persistence ──────────────────────────────────────────────────────────────

function readAll() {
  const v = loadState(STORE_KEY, {})
  return v && typeof v === 'object' && !Array.isArray(v) ? v : {}
}

export function loadHighlights(key) {
  const entry = readAll()[key]
  return entry && Array.isArray(entry.l) ? entry.l : []
}

export function saveHighlights(key, list) {
  const all = readAll()
  if (!list.length) delete all[key]
  else all[key] = { l: list, u: Date.now() }

  const keys = Object.keys(all)
  if (keys.length > MAX_KEYS) {
    keys
      .sort((a, b) => (all[a].u ?? 0) - (all[b].u ?? 0))
      .slice(0, keys.length - MAX_KEYS)
      .forEach((k) => delete all[k])
  }
  return saveState(STORE_KEY, all)
}

export function loadPrefs() {
  const p = loadState(PREFS_KEY, null)
  return {
    c: p && isValidColor(p.c) ? p.c : DEFAULT_PREFS.c,
    t: p && TEXT_MODES.some((m) => m.key === p.t) ? p.t : DEFAULT_PREFS.t,
  }
}

export function savePrefs(prefs) {
  saveState(PREFS_KEY, { c: prefs.c, t: prefs.t })
}

// ─── DOM: selection → offsets ─────────────────────────────────────────────────

function offsetWithin(el, node, off) {
  const r = document.createRange()
  r.selectNodeContents(el)
  r.setEnd(node, off)
  return r.toString().length
}

/**
 * Maps the current text selection onto every `[data-hl-key]` element it
 * touches inside `root`. A selection that spans several pieces (e.g. a
 * question and its explanation) yields one target per piece.
 *
 * @returns {{ range: Range, targets: {key:string, s:number, e:number}[] } | null}
 */
export function selectionTargets(root) {
  if (!root || typeof window === 'undefined' || !window.getSelection) return null
  const sel = window.getSelection()
  if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return null
  const range = sel.getRangeAt(0)
  if (!root.contains(range.commonAncestorContainer)) return null
  if (!range.toString().trim()) return null

  const targets = []
  root.querySelectorAll('[data-hl-key]').forEach((el) => {
    if (!range.intersectsNode(el)) return
    const total = el.textContent.length
    let s = 0
    let e = total
    if (el.contains(range.startContainer)) s = offsetWithin(el, range.startContainer, range.startOffset)
    if (el.contains(range.endContainer)) e = offsetWithin(el, range.endContainer, range.endOffset)
    // Trim whitespace at the edges so a stray trailing space isn't painted.
    const txt = el.textContent.slice(s, e)
    const lead = txt.length - txt.trimStart().length
    const trail = txt.length - txt.trimEnd().length
    s += lead
    e -= trail
    if (e > s) targets.push({ key: el.getAttribute('data-hl-key'), s, e })
  })

  return targets.length ? { range, targets } : null
}

// ─── DOM: injecting highlights into an HTML string (solution prose) ───────────

/**
 * Wraps highlighted character ranges of `html` in <mark> elements and returns
 * the new HTML. Offsets are over the document's text nodes in order, matching
 * what selectionTargets() measures on the live element. With no highlights the
 * input string is returned untouched (no re-serialisation side effects).
 */
export function highlightHtml(html, list) {
  if (!html || !Array.isArray(list) || !list.length) return html
  if (typeof DOMParser === 'undefined') return html

  const doc = new DOMParser().parseFromString(`<body>${html}</body>`, 'text/html')
  const walker = doc.createTreeWalker(doc.body, 4 /* NodeFilter.SHOW_TEXT */)
  const nodes = []
  for (let n = walker.nextNode(); n; n = walker.nextNode()) nodes.push(n)

  const total = nodes.reduce((sum, n) => sum + n.data.length, 0)
  const ranges = clampList(list, total)
  if (!ranges.length) return html

  let pos = 0
  for (const node of nodes) {
    const start = pos
    const end = pos + node.data.length
    pos = end
    const tag = node.parentNode && node.parentNode.nodeName
    if (tag === 'SCRIPT' || tag === 'STYLE') continue

    const hits = ranges.filter((h) => h.s < end && h.e > start)
    if (!hits.length) continue

    const frag = doc.createDocumentFragment()
    let cursor = 0
    for (const h of hits) {
      const a = Math.max(h.s, start) - start
      const b = Math.min(h.e, end) - start
      if (b <= cursor) continue
      const from = Math.max(a, cursor)
      if (from > cursor) frag.appendChild(doc.createTextNode(node.data.slice(cursor, from)))
      const mark = doc.createElement('mark')
      mark.className = 'hl-mark'
      mark.setAttribute('data-hl-id', h.id)
      mark.setAttribute('style', markStyle(h))
      mark.textContent = node.data.slice(from, b)
      frag.appendChild(mark)
      cursor = b
    }
    if (cursor < node.data.length) frag.appendChild(doc.createTextNode(node.data.slice(cursor)))
    node.parentNode.replaceChild(frag, node)
  }
  return doc.body.innerHTML
}

// ─── content keys ─────────────────────────────────────────────────────────────
// Highlights are keyed by what the text SAYS, not by position — games shuffle
// answer options every round, so an index-based key would paint the wrong
// option on the next play.

const norm = (s) => String(s ?? '').toLowerCase().replace(/\s+/g, ' ').trim()
const stem = (q) => norm(q && (q.q ?? q.question ?? q.front))

export const hlKeys = {
  question: (q) => `q:${hashKey(stem(q))}`,
  option: (q, optionText) => `o:${hashKey(stem(q))}:${hashKey(norm(optionText))}`,
  answer: (q) => `a:${hashKey(stem(q))}`,
  explanation: (q) => `e:${hashKey(stem(q))}`,
  /** Free text that isn't a question: the solution body, a chat answer, … */
  text: (scope, text) => `t:${scope}:${hashKey(norm(text))}`,
}
