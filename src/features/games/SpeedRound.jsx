import { useEffect, useRef, useState } from 'react'
import { QuestionCard, Feedback, Stat, useAnswerKeys, TIMED_OUT, REVEALED } from './gameKit'

const SECONDS = 15
const START_TENTHS = SECONDS * 10

// Beat the clock on every question — faster answers earn a bigger bonus.
export default function SpeedRound({ questions, active, sfx, onComplete }) {
  const [i, setI] = useState(0)
  const [tenths, setTenths] = useState(START_TENTHS)
  const [score, setScore] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [picked, setPicked] = useState(null) // index | -1 (timed out) | null
  const [gained, setGained] = useState(0)
  const missedRef = useRef([])
  const activeRef = useRef(active)
  useEffect(() => { activeRef.current = active }, [active])

  const q = questions[i]
  const answered = picked !== null
  const isLast = i >= questions.length - 1

  // Countdown. Pauses while answered or while the panel is hidden/backgrounded.
  useEffect(() => {
    if (answered) return undefined
    const id = setInterval(() => {
      if (!activeRef.current) return
      setTenths((t) => Math.max(0, t - 1))
    }, 100)
    return () => clearInterval(id)
  }, [answered, i])

  const resolve = (idx) => {
    if (answered) return
    setPicked(idx)
    if (idx === q.correct) {
      const pts = 100 + Math.floor(tenths / 10) * 10
      setGained(pts)
      setScore((s) => s + pts)
      setCorrectCount((c) => c + 1)
      sfx('correct')
    } else {
      setGained(0)
      missedRef.current.push(q)
      sfx('wrong')
    }
  }

  // Out of time → counts as a miss.
  useEffect(() => {
    if (tenths <= 0 && picked === null) resolve(TIMED_OUT)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tenths])

  // Quiet countdown ticks for the last three seconds.
  const secondsLeft = Math.ceil(tenths / 10)
  useEffect(() => {
    if (!answered && tenths > 0 && tenths % 10 === 0 && secondsLeft <= 3) sfx('tick')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft])

  const next = () => {
    if (!answered) return
    if (isLast) {
      onComplete({ won: true, score, correct: correctCount, total: questions.length, missed: missedRef.current })
      return
    }
    setI((n) => n + 1)
    setPicked(null)
    setGained(0)
    setTenths(START_TENTHS)
  }

  useAnswerKeys({ onPick: resolve, onNext: next, onReveal: () => resolve(REVEALED), count: q.options.length, enabled: active })

  const pct = (tenths / START_TENTHS) * 100
  const urgent = pct <= 30

  return (
    <div>
      <div className="gm-stats">
        <Stat label="Score" value={score} tone="gold" />
        <Stat label="Question" value={`${i + 1}/${questions.length}`} />
        <Stat label="Time" value={`${secondsLeft}s`} tone={urgent ? 'hot' : undefined} />
      </div>

      <div className={`gm-timer ${urgent ? 'is-urgent' : ''}`} role="timer" aria-label={`${secondsLeft} seconds left`}>
        <div className="gm-timer__fill" style={{ width: `${pct}%` }} />
      </div>

      <div className="hub-card gm-play">
        <QuestionCard question={q} picked={picked} onPick={resolve} onReveal={() => resolve(REVEALED)} />
        <Feedback question={q} picked={picked} gained={gained} timedOut={picked === TIMED_OUT} />
      </div>

      <div className="gm-actions">
        <button type="button" className="hub-btn" disabled={!answered} onClick={next}>
          {isLast ? 'See results' : 'Next →'}
        </button>
      </div>
    </div>
  )
}
