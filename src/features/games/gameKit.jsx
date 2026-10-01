import { useCallback, useEffect, useRef } from 'react'

export const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

// `picked` sentinels: -1 = ran out of time, -2 = player revealed the answer.
export const TIMED_OUT = -1
export const REVEALED = -2

// ─── Sound ────────────────────────────────────────────────────────────────────
// Tiny Web Audio synth — no assets to ship. Created lazily on the first sound
// (browsers require a user gesture) and closed when the game unmounts.

function beep(ctx, { type = 'triangle', from, to, at = 0, dur = 0.15, vol = 0.2 }) {
  const t0 = ctx.currentTime + at
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.type = type
  osc.frequency.setValueAtTime(from, t0)
  if (to) osc.frequency.exponentialRampToValueAtTime(to, t0 + dur)
  gain.gain.setValueAtTime(vol, t0)
  gain.gain.linearRampToValueAtTime(0, t0 + dur)
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.start(t0)
  osc.stop(t0 + dur)
}

const SOUNDS = {
  correct: (c) => [523.25, 659.25, 783.99].forEach((f, i) => beep(c, { from: f, at: i * 0.09, dur: 0.12, vol: 0.25 })),
  wrong: (c) => beep(c, { type: 'sawtooth', from: 180, to: 60, dur: 0.3, vol: 0.3 }),
  tick: (c) => beep(c, { type: 'sine', from: 880, dur: 0.06, vol: 0.12 }),
  select: (c) => beep(c, { type: 'sine', from: 600, dur: 0.05, vol: 0.1 }),
  laser: (c) => beep(c, { type: 'square', from: 900, to: 300, dur: 0.12, vol: 0.07 }),
  explode: (c) => beep(c, { type: 'sawtooth', from: 220, to: 40, dur: 0.35, vol: 0.2 }),
  power: (c) => beep(c, { type: 'sine', from: 300, to: 1200, dur: 0.35, vol: 0.2 }),
  win: (c) => [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => beep(c, { from: f, at: i * 0.12, dur: 0.18, vol: 0.25 })),
  lose: (c) => [392, 329.63, 261.63].forEach((f, i) => beep(c, { type: 'sawtooth', from: f, at: i * 0.15, dur: 0.2, vol: 0.2 })),
}

export function useSfx(enabled) {
  const ctxRef = useRef(null)

  useEffect(
    () => () => {
      ctxRef.current?.close?.().catch(() => {})
      ctxRef.current = null
    },
    []
  )

  return useCallback(
    (name) => {
      if (!enabled || !SOUNDS[name]) return
      try {
        if (!ctxRef.current) ctxRef.current = new (window.AudioContext || window.webkitAudioContext)()
        const ctx = ctxRef.current
        if (ctx.state === 'suspended') ctx.resume()
        SOUNDS[name](ctx)
      } catch (err) {
        console.warn('[games] Web Audio unavailable', err)
      }
    },
    [enabled]
  )
}

// ─── Keyboard ─────────────────────────────────────────────────────────────────
// Window-level shortcuts, with the guards a keep-alive panel needs: never fire
// while typing in another tool's input, and never while this panel is hidden.

export function useGameKeys(onKey, enabled) {
  const handlerRef = useRef(onKey)
  useEffect(() => {
    handlerRef.current = onKey
  })

  useEffect(() => {
    if (!enabled) return undefined
    const listener = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const el = e.target
      if (el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName))) return
      handlerRef.current(e)
    }
    window.addEventListener('keydown', listener)
    return () => window.removeEventListener('keydown', listener)
  }, [enabled])
}

/** 1-6 / A-F pick an option, R reveals the answer, Enter advances (unless a button already has focus). */
export function useAnswerKeys({ onPick, onNext, onReveal, count, enabled }) {
  useGameKeys((e) => {
    const k = e.key.toLowerCase()
    if (k === 'enter') {
      if (e.target?.tagName === 'BUTTON') return
      onNext?.()
      return
    }
    if (k === 'r' && onReveal) {
      e.preventDefault()
      onReveal()
      return
    }
    if (k.length !== 1) return
    let i = '123456'.indexOf(k)
    if (i < 0) i = 'abcdef'.indexOf(k)
    if (i >= 0 && i < count) {
      e.preventDefault()
      onPick(i)
    }
  }, enabled)
}

// ─── Shared UI ────────────────────────────────────────────────────────────────

/**
 * Question + options. `picked` is the chosen index, -1 for "ran out of time",
 * or null while unanswered. Once `picked !== null` the answer is revealed.
 */
export function QuestionCard({ question, picked, onPick, onReveal }) {
  const revealed = picked !== null
  return (
    <>
      <p className="gm-question">{question.q}</p>
      <div className="gm-options" role="group" aria-label="Answer options">
        {question.options.map((opt, i) => {
          let cls = 'gm-option'
          if (revealed) {
            if (i === question.correct) cls += ' is-correct'
            else if (i === picked) cls += ' is-wrong'
            else cls += ' is-dim'
          }
          return (
            <button key={i} type="button" className={cls} disabled={revealed} onClick={() => onPick(i)}>
              <span className="gm-option__key" aria-hidden="true">{LETTERS[i]}</span>
              <span className="gm-option__text">{opt}</span>
            </button>
          )
        })}
      </div>
      {!revealed && onReveal && (
        <button type="button" className="gm-reveal" onClick={onReveal}>
          👁 Reveal answer <kbd>R</kbd>
        </button>
      )}
    </>
  )
}

export function Feedback({ question, picked, gained, timedOut }) {
  if (picked === null) return null
  const ok = picked === question.correct
  const head = ok ? '✅ Correct' : picked === REVEALED ? '👁 Answer revealed' : picked === TIMED_OUT || timedOut ? '⏱️ Time’s up' : '❌ Not quite'
  return (
    <div className={`gm-feedback ${ok ? 'is-correct' : 'is-wrong'}`} role="status">
      <div className="gm-feedback__head">
        {head}
        {ok && gained > 0 && <span className="gm-feedback__gain">+{gained}</span>}
      </div>
      {!ok && (
        <div className="gm-feedback__answer">
          Answer: <strong>{question.options[question.correct]}</strong>
        </div>
      )}
      {question.explanation && <div className="gm-feedback__why">{question.explanation}</div>}
    </div>
  )
}

export function Stat({ label, value, tone }) {
  return (
    <span className={`gm-stat ${tone ? `gm-stat--${tone}` : ''}`}>
      <span className="gm-stat__label">{label}</span>
      <span className="gm-stat__value">{value}</span>
    </span>
  )
}
