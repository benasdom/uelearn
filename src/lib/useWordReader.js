import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

// Drives "read aloud, one word at a time".
//
// Two clocks, one display:
//   • MUTED  → a timer paces the words at `wpm` (this is the default, and it is
//              the speed-reading mode: words pop up with no audio at all).
//   • SOUND  → speechSynthesis reads the text a sentence at a time and the
//              word on screen follows the voice via `boundary` events. Some
//              browsers/voices never fire those events, so if none arrive we
//              fall back to the timer for that sentence instead of freezing.
//
// Changing speed or toggling sound mid-read restarts from the CURRENT word, so
// nothing is skipped or repeated.

const VOICE_BASE_WPM = 165          // wpm of a voice at rate 1.0
const MAX_VOICE_RATE = 10           // the speech API's own ceiling; the speed bar is never capped below it
const MAX_CHUNK_WORDS = 28

export const speechSupported = () =>
  typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window

export function tokenize(text) {
  return (text || '').replace(/\s+/g, ' ').trim().match(/\S+/g) || []
}

// Sentence-sized chunks so speech stays in sync and never hits the ~15 s
// utterance cut-off some browsers have.
function buildChunks(words) {
  const chunks = []
  let start = 0
  words.forEach((w, i) => {
    const sentenceEnd = /[.!?…]["')\]]*$/.test(w)
    if (sentenceEnd || i - start + 1 >= MAX_CHUNK_WORDS || i === words.length - 1) {
      chunks.push({ start, end: i })
      start = i + 1
    }
  })
  return chunks
}

// How long a word stays up in timer mode: longer words and punctuation get a beat.
function delayFor(word, wpm) {
  const base = 60000 / wpm
  let f = 1
  if (word.length > 8) f += 0.25
  if (word.length > 12) f += 0.25
  if (/[,;:]["')\]]*$/.test(word)) f += 0.6
  if (/[.!?…]["')\]]*$/.test(word)) f += 1.2
  return base * f
}

export function useWordReader(text, { wpm, muted }) {
  const words = useMemo(() => tokenize(text), [text])
  const chunks = useMemo(() => buildChunks(words), [words])

  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [finished, setFinished] = useState(false)

  const ref = useRef({ index: 0, playing: false, run: 0, timer: 0, fallback: 0 })
  const live = useRef({ words, chunks, wpm, muted })
  live.current = { words, chunks, wpm, muted }

  const cancelAll = useCallback(() => {
    const r = ref.current
    clearTimeout(r.timer)
    clearTimeout(r.fallback)
    r.run++
    if (speechSupported()) window.speechSynthesis.cancel()
  }, [])

  const show = useCallback((i) => {
    ref.current.index = i
    setIndex(i)
  }, [])

  const finish = useCallback(() => {
    ref.current.playing = false
    setPlaying(false)
    setFinished(true)
  }, [])

  // timer clock ──────────────────────────────────────────────────────────────
  const timerFrom = useCallback((i, run, stopAt) => {
    const { words: w, wpm: speed } = live.current
    const tick = (n) => {
      if (ref.current.run !== run) return
      if (n >= w.length) return finish()
      show(n)
      if (stopAt != null && n >= stopAt) return // speech `onend` takes over
      ref.current.timer = setTimeout(() => tick(n + 1), delayFor(w[n], speed))
    }
    tick(i)
  }, [finish, show])

  // speech clock ─────────────────────────────────────────────────────────────
  const speakFrom = useCallback((i, run) => {
    const { words: w, chunks: cs, wpm: speed } = live.current
    if (i >= w.length) return finish()
    const chunk = cs.find((c) => i >= c.start && i <= c.end) || { start: i, end: w.length - 1 }
    const slice = w.slice(i, chunk.end + 1)

    // char offset of every word inside the utterance text
    const offsets = []
    let pos = 0
    slice.forEach((word) => { offsets.push(pos); pos += word.length + 1 })

    const u = new SpeechSynthesisUtterance(slice.join(' '))
    u.rate = Math.min(MAX_VOICE_RATE, Math.max(0.5, speed / VOICE_BASE_WPM))
    let gotBoundary = false

    u.onboundary = (e) => {
      if (ref.current.run !== run) return
      if (e.name && e.name !== 'word') return
      gotBoundary = true
      clearTimeout(ref.current.fallback)
      let k = 0
      for (let j = 0; j < offsets.length; j++) if (offsets[j] <= e.charIndex) k = j
      show(i + k)
    }
    u.onend = () => { if (ref.current.run === run) speakFrom(chunk.end + 1, run) }
    u.onerror = (e) => {
      if (ref.current.run !== run) return
      if (e?.error === 'canceled' || e?.error === 'interrupted') return
      timerFrom(ref.current.index, run) // voice unavailable → keep going silently
    }

    show(i)
    window.speechSynthesis.speak(u)

    // No boundary events? Pace the words ourselves for this sentence.
    ref.current.fallback = setTimeout(() => {
      if (gotBoundary || ref.current.run !== run) return
      const step = (n) => {
        if (gotBoundary || ref.current.run !== run || n > chunk.end) return
        show(n)
        ref.current.timer = setTimeout(() => step(n + 1), delayFor(w[n], speed))
      }
      step(Math.max(ref.current.index, i))
    }, 900)
  }, [finish, show, timerFrom])

  const startAt = useCallback((i) => {
    cancelAll()
    const run = ref.current.run
    ref.current.playing = true
    setPlaying(true)
    setFinished(false)
    const { muted: m } = live.current
    if (m || !speechSupported()) timerFrom(i, run)
    else speakFrom(i, run)
  }, [cancelAll, speakFrom, timerFrom])

  const play = useCallback(() => {
    const at = finished || ref.current.index >= live.current.words.length - 1 ? 0 : ref.current.index
    startAt(at)
  }, [finished, startAt])

  const pause = useCallback(() => {
    cancelAll()
    ref.current.playing = false
    setPlaying(false)
  }, [cancelAll])

  const toggle = useCallback(() => (ref.current.playing ? pause() : play()), [pause, play])

  const seek = useCallback((i) => {
    const n = Math.max(0, Math.min(live.current.words.length - 1, i))
    setFinished(false)
    if (ref.current.playing) startAt(n)
    else show(n)
  }, [show, startAt])

  const skip = useCallback((delta) => seek(ref.current.index + delta), [seek])

  // Speed or sound toggled while playing → carry on from the current word.
  useEffect(() => {
    if (ref.current.playing) startAt(ref.current.index)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wpm, muted])

  // New text → back to the start, silent.
  useEffect(() => {
    cancelAll()
    ref.current.playing = false
    ref.current.index = 0
    setPlaying(false)
    setFinished(false)
    setIndex(0)
  }, [text, cancelAll])

  useEffect(() => cancelAll, [cancelAll])

  return { words, index, playing, finished, play, pause, toggle, seek, skip }
}
