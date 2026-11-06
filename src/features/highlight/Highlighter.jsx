// Highlighter for the solutions studio.
//
// Wrap a region in <HighlightProvider> and everything inside it that renders
// text through <HText> (quiz cards, game questions, review lists) or <HlHtml>
// (the solution prose) becomes highlightable:
//
//   • select text            → a small toolbar appears: pick a colour
//   • click a highlight      → recolour it, change its text colour, or remove it
//   • highlights persist     → they're keyed by the *content*, so they come back
//                              on the next visit and across games/rounds
//
// Outside a provider (e.g. the general Learning Hub) HText renders plain text
// and OptionButton renders an ordinary <button>, so nothing changes there.

import {
  Fragment, createContext, useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState,
} from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import './highlight.css'
import {
  HL_COLORS, TEXT_MODES, addHighlight, eraseRange, highlightHtml, loadHighlights, loadPrefs,
  overlapsAny, readableText, recolor, removeById, saveHighlights, savePrefs, segmentText,
  selectionTargets,
} from './highlightStore'

const HighlightCtx = createContext(null)

/** Non-null when rendered inside a <HighlightProvider>. */
export const useHighlightCtx = () => useContext(HighlightCtx)

const toRect = (r) => ({ top: r.top, left: r.left, width: r.width, height: r.height, bottom: r.bottom })

function toolbarPosition(rect) {
  const vw = window.innerWidth
  const vh = window.innerHeight
  const W = Math.min(330, vw - 16)
  const H = 96
  const cx = rect.left + rect.width / 2
  const left = Math.min(Math.max(cx, W / 2 + 8), vw - W / 2 - 8)
  // On touch screens the OS selection menu sits above the text, so go below.
  const coarse = typeof window.matchMedia === 'function' && window.matchMedia('(pointer: coarse)').matches
  let top = coarse ? rect.bottom + 14 : rect.top - H - 8
  if (top < 8) top = rect.bottom + 10
  if (top + H > vh - 8) top = Math.max(8, rect.top - H - 8)
  return { top, left, width: W }
}

// A native fullscreen element hides everything outside its own subtree, so the
// toolbar has to be portalled *into* it while a game is fullscreen.
function portalHost() {
  const fs = typeof document !== 'undefined' ? document.fullscreenElement : null
  return fs && fs.isConnected ? fs : document.body
}

export function HighlightProvider({ children }) {
  const rootRef = useRef(null)
  const toolbarRef = useRef(null)
  const colorInputRef = useRef(null)
  const cacheRef = useRef({}) // key → highlight list (lazy-loaded from storage)
  const [version, bump] = useReducer((n) => n + 1, 0)
  const [prefs, setPrefsState] = useState(loadPrefs)
  const [ui, setUi] = useState(null) // null | { mode:'select'|'edit', rect, targets?, edit? }
  const uiRef = useRef(null)
  uiRef.current = ui

  const get = useCallback((key) => {
    const cache = cacheRef.current
    if (!(key in cache)) cache[key] = loadHighlights(key)
    return cache[key]
  }, [])

  const set = useCallback((key, list) => {
    cacheRef.current[key] = list
    saveHighlights(key, list)
    bump()
  }, [])

  // ── Listen for selections and clicks on highlights ─────────────────────────
  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined

    let pointerDown = false
    let timer = null
    let raf = 0

    const inToolbar = (t) => !!(toolbarRef.current && t && toolbarRef.current.contains(t))

    const evaluate = () => {
      if (pointerDown) return
      const res = selectionTargets(root)
      if (res) {
        setUi({ mode: 'select', rect: toRect(res.range.getBoundingClientRect()), targets: res.targets })
      } else {
        setUi((prev) => (prev && prev.mode === 'select' ? null : prev))
      }
    }
    const schedule = (ms = 160) => {
      clearTimeout(timer)
      timer = setTimeout(evaluate, ms)
    }

    const onDown = (e) => {
      if (inToolbar(e.target)) return
      pointerDown = true
      // Pressing anywhere that isn't a highlight dismisses the edit popover.
      const onMark = e.target && e.target.closest && e.target.closest('mark[data-hl-id]')
      setUi((prev) => (prev && prev.mode === 'edit' && !onMark ? null : prev))
    }
    const onUp = (e) => {
      if (inToolbar(e.target)) return
      pointerDown = false
      schedule(30)
    }
    const onCancel = () => {
      pointerDown = false
      schedule(250) // touch: the browser took over for its own selection handles
    }

    const onClick = (e) => {
      const mark = e.target && e.target.closest && e.target.closest('mark[data-hl-id]')
      if (!mark || !root.contains(mark)) return
      const sel = window.getSelection && window.getSelection()
      if (sel && !sel.isCollapsed) return
      // An answer option that's still waiting for a tap answers; it doesn't edit.
      if (mark.closest('[data-hl-interactive="true"]')) return
      const host = mark.closest('[data-hl-key]')
      if (!host) return
      setUi({
        mode: 'edit',
        rect: toRect(mark.getBoundingClientRect()),
        edit: { key: host.getAttribute('data-hl-key'), id: mark.getAttribute('data-hl-id') },
      })
    }

    const onSel = () => schedule(160)
    const onKey = (e) => { if (e.key === 'Escape' && uiRef.current) setUi(null) }

    // Keep the toolbar glued to what it's pointing at while the page scrolls.
    const reposition = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const cur = uiRef.current
        if (!cur) return
        if (cur.mode === 'select') {
          const res = selectionTargets(root)
          if (res) setUi({ ...cur, rect: toRect(res.range.getBoundingClientRect()) })
        } else if (cur.edit) {
          const m = root.querySelector(`mark[data-hl-id="${cur.edit.id}"]`)
          if (m) setUi({ ...cur, rect: toRect(m.getBoundingClientRect()) })
        }
      })
    }

    document.addEventListener('selectionchange', onSel)
    document.addEventListener('pointerdown', onDown, true)
    document.addEventListener('pointerup', onUp, true)
    document.addEventListener('pointercancel', onCancel, true)
    document.addEventListener('keydown', onKey)
    root.addEventListener('click', onClick)
    window.addEventListener('scroll', reposition, true)
    window.addEventListener('resize', reposition)
    return () => {
      clearTimeout(timer)
      if (raf) cancelAnimationFrame(raf)
      document.removeEventListener('selectionchange', onSel)
      document.removeEventListener('pointerdown', onDown, true)
      document.removeEventListener('pointerup', onUp, true)
      document.removeEventListener('pointercancel', onCancel, true)
      document.removeEventListener('keydown', onKey)
      root.removeEventListener('click', onClick)
      window.removeEventListener('scroll', reposition, true)
      window.removeEventListener('resize', reposition)
    }
  }, [])

  // ── Toolbar actions ────────────────────────────────────────────────────────
  const clearSelection = () => {
    const sel = window.getSelection && window.getSelection()
    if (sel) sel.removeAllRanges()
  }
  const close = () => { clearSelection(); setUi(null) }

  const updatePrefs = (patch) => {
    const next = { ...prefs, ...patch }
    setPrefsState(next)
    savePrefs(next)
    return next
  }

  // After a recolour the edited piece can merge into a same-coloured
  // neighbour (taking its id), so re-find it by the range it covered.
  const refindEdit = (key, before) => {
    const after = get(key)
    const hit = after.find((h) => h.s <= before.s && h.e >= before.e)
    setUi((prev) => (prev && prev.edit ? (hit ? { ...prev, edit: { key, id: hit.id } } : null) : prev))
  }

  const editPatch = (patch) => {
    const { key, id } = uiRef.current.edit
    const cur = get(key).find((h) => h.id === id)
    if (!cur) { setUi(null); return }
    set(key, recolor(get(key), id, patch))
    refindEdit(key, cur)
  }

  const pickColor = (c) => {
    const cur = uiRef.current
    if (!cur) return
    const next = updatePrefs({ c })
    if (cur.mode === 'select') {
      cur.targets.forEach(({ key, s, e }) => set(key, addHighlight(get(key), { s, e, c, t: next.t })))
      close()
    } else {
      editPatch({ c })
    }
  }

  const pickTextMode = (t) => {
    updatePrefs({ t })
    if (uiRef.current && uiRef.current.mode === 'edit') editPatch({ t })
  }

  const removeCurrent = () => {
    const cur = uiRef.current
    if (!cur) return
    if (cur.mode === 'edit') {
      set(cur.edit.key, removeById(get(cur.edit.key), cur.edit.id))
    } else {
      cur.targets.forEach(({ key, s, e }) => {
        const list = get(key)
        if (overlapsAny(list, s, e)) set(key, eraseRange(list, s, e))
      })
    }
    close()
  }

  // The native colour input commits on `change` (when its picker closes);
  // React's onChange would fire on every drag step and apply a highlight each time.
  useEffect(() => {
    const el = colorInputRef.current
    if (!el) return undefined
    const onChange = (e) => pickColor(e.target.value)
    el.addEventListener('change', onChange)
    return () => el.removeEventListener('change', onChange)
  })

  const value = useMemo(() => ({ get, set, version }), [get, set, version])

  // ── Toolbar render ─────────────────────────────────────────────────────────
  let toolbar = null
  if (ui && typeof document !== 'undefined') {
    const editing = ui.mode === 'edit'
    const current = editing ? get(ui.edit.key).find((h) => h.id === ui.edit.id) : null
    const canErase = !editing && ui.targets.some(({ key, s, e }) => overlapsAny(get(key), s, e))
    const activeColor = (current ? current.c : prefs.c || '').toLowerCase()
    const activeText = current ? current.t : prefs.t
    const pos = toolbarPosition(ui.rect)

    if (!editing || current) {
      toolbar = createPortal(
        <div
          ref={toolbarRef}
          className="hl-toolbar"
          role="toolbar"
          aria-label={editing ? 'Edit highlight' : 'Highlight selected text'}
          style={{ top: pos.top, left: pos.left, width: pos.width }}
          // Keep the text selection alive while the toolbar is used.
          onPointerDown={(e) => { if (e.target.tagName !== 'INPUT') e.preventDefault() }}
          onMouseDown={(e) => { if (e.target.tagName !== 'INPUT') e.preventDefault() }}
        >
          <div className="hl-row" role="group" aria-label="Highlight colour">
            {HL_COLORS.map((c) => (
              <button
                key={c.value}
                type="button"
                className={`hl-swatch${activeColor === c.value ? ' is-active' : ''}`}
                style={{ background: c.value }}
                aria-label={`${c.name} highlight`}
                aria-pressed={activeColor === c.value}
                title={c.name}
                onClick={() => pickColor(c.value)}
              />
            ))}
            <label
              className={`hl-swatch hl-swatch--custom${activeColor && !HL_COLORS.some((c) => c.value === activeColor) ? ' is-active' : ''}`}
              title="Pick any colour"
            >
              <input
                ref={colorInputRef}
                type="color"
                aria-label="Custom highlight colour"
                defaultValue={current ? current.c : prefs.c}
              />
              <span aria-hidden="true">+</span>
            </label>
          </div>

          <div className="hl-row hl-row--meta">
            <span className="hl-label" id="hl-text-label">Text</span>
            <div className="hl-seg" role="group" aria-labelledby="hl-text-label">
              {TEXT_MODES.map((m) => (
                <button
                  key={m.key}
                  type="button"
                  className={activeText === m.key ? 'is-active' : ''}
                  aria-pressed={activeText === m.key}
                  onClick={() => pickTextMode(m.key)}
                >
                  {m.label}
                </button>
              ))}
            </div>
            {(editing || canErase) && (
              <button type="button" className="hl-btn hl-btn--danger" onClick={removeCurrent}>
                {editing ? 'Remove' : 'Erase'}
              </button>
            )}
            <button type="button" className="hl-btn hl-btn--ghost" aria-label="Close highlighter" onClick={close}>
              <X size={14} />
            </button>
          </div>
        </div>,
        portalHost()
      )
    }
  }

  return (
    <HighlightCtx.Provider value={value}>
      <div ref={rootRef} style={{ display: 'contents' }}>{children}</div>
      {toolbar}
    </HighlightCtx.Provider>
  )
}

/**
 * Highlightable text. `k` is the content key (see hlKeys in highlightStore) —
 * keyed by what the text *says*, so highlights survive option shuffling and
 * reappear in every round that shows the same question.
 */
export function HText({ k, text, as: Tag = 'span', className, ...rest }) {
  const ctx = useContext(HighlightCtx)
  const str = String(text ?? '')
  if (!ctx || !k) return <Tag className={className} {...rest}>{str}</Tag>

  const segs = segmentText(str, ctx.get(k))
  return (
    <Tag className={className} data-hl-key={k} {...rest}>
      {segs.map((sg) =>
        sg.h ? (
          <mark
            key={sg.start}
            className="hl-mark"
            data-hl-id={sg.h.id}
            style={{ background: sg.h.c, color: readableText(sg.h.c, sg.h.t) }}
          >
            {sg.text}
          </mark>
        ) : (
          <Fragment key={sg.start}>{sg.text}</Fragment>
        )
      )}
    </Tag>
  )
}

/**
 * Highlightable HTML (the solution body). Same idea as HText, but the marks
 * are injected into the HTML string before it's handed to React.
 */
export function HlHtml({ html, k, as: Tag = 'div', className, ...rest }) {
  const ctx = useContext(HighlightCtx)
  const list = ctx && k ? ctx.get(k) : null
  const out = useMemo(() => (list && list.length ? highlightHtml(html, list) : html), [html, list])
  return (
    <Tag
      className={className}
      data-hl-key={ctx && k ? k : undefined}
      dangerouslySetInnerHTML={{ __html: out }}
      {...rest}
    />
  )
}

/**
 * An answer option. Plain <button> normally. Inside a provider it becomes a
 * role="button" <div> — text inside a real <button> can't be drag-selected
 * reliably across browsers, and the option text needs to be highlightable.
 * A tap still answers; finishing a text selection on the option does not.
 */
export function OptionButton({ className, disabled, onActivate, children, ...rest }) {
  const ctx = useContext(HighlightCtx)
  if (!ctx) {
    return (
      <button type="button" className={className} disabled={disabled} onClick={onActivate} {...rest}>
        {children}
      </button>
    )
  }

  const hasSelection = () => {
    const sel = window.getSelection && window.getSelection()
    return !!(sel && !sel.isCollapsed && sel.toString().trim())
  }

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      className={className}
      aria-disabled={disabled ? 'true' : undefined}
      data-hl-interactive={disabled ? 'false' : 'true'}
      onClick={(e) => {
        if (disabled || hasSelection()) return
        onActivate?.(e)
      }}
      onKeyDown={(e) => {
        if (disabled) return
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          e.stopPropagation() // stop the games' window-level Enter shortcut firing too
          onActivate?.(e)
        }
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
