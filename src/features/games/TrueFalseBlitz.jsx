import { useEffect, useRef, useState } from 'react'
import { shuffle } from '../../lib/gameQuestions'
import { Stat, useGameKeys } from './gameKit'

const START_TENTHS = 450 // 45s
const PENALTY_TENTHS = 50 // a wrong answer costs 5s

// A statement pairs a question with ONE option — either the right answer or a
// distractor. Judge it true or false before the clock runs out.
export default function TrueFalseBlitz({ questions, active, sfx, onComplete }) {
  const queueRef = useRef([])
  const makeCard = () => {
    if (queueRef.current.length === 0) queueRef.current = shuffle(questions)
    const q = queueRef.current.pop()
    const wrongOnes = q.options.filter((_, k) => k !== q.correct)
    const isTrue = wrongOnes.length === 0 || Math.random() < 0.5
    const shown = isTrue ? q.options[q.correct] : wrongOnes[Math.floor(Math.random() * wrongOnes.length)]
    return { q, shown, isTrue }
  }

  const [card, setCard] = useState(makeCard)
  const [tenths, setTenths] = useState(START_TENTHS)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [answered, setAnswered] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [flash, setFlash] = useState(null) // 'good' | 'bad'
  const missedRef = useRef(new Map())
  const finishedRef = useRef(false)
  const lockRef = useRef(false)
  const flashTimer = useRef(null)
  const activeRef = useRef(active)
  useEffect(() => { activeRef.current = active }, [active])
  useEffect(() => () => clearTimeout(flashTimer.current), [])

  useEffect(() => {
    const id = setInterval(() => {
      if (activeRef.current) setTenths((t) => Math.max(0, t - 1))
    }, 100)
    return () => clearInterval(id)
  }, [])

  const finish = (finalScore, finalCorrect, finalAnswered) => {
    if (finishedRef.current) return
    finishedRef.current = true
    sfx(finalCorrect > 0 ? 'win' : 'lose')
    onComplete({
      won: true,
      score: finalScore,
      correct: finalCorrect,
      total: finalAnswered,
      missed: [...missedRef.current.values()],
    })
  }

  useEffect(() => {
    if (tenths <= 0) finish(score, correctCount, answered)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tenths])

  const answer = (saysTrue) => {
    if (lockRef.current || finishedRef.current || tenths <= 0) return
    lockRef.current = true
    const ok = saysTrue === card.isTrue
    setAnswered((n) => n + 1)
    if (ok) {
      setScore((s) => s + 100 + Math.min(streak, 10) * 10)
      setStreak((s) => s + 1)
      setCorrectCount((c) => c + 1)
      sfx('correct')
    } else {
      setStreak(0)
      setTenths((t) => Math.max(0, t - PENALTY_TENTHS))
      missedRef.current.set(card.q._id, card.q)
      sfx('wrong')
    }
    setFlash(ok ? 'good' : 'bad')
    // A miss lingers so the correct answer can be read.
    flashTimer.current = setTimeout(() => {
      setFlash(null)
      setCard(makeCard())
      lockRef.current = false
    }, ok ? 380 : 1600)
  }

  useGameKeys((e) => {
    const k = e.key.toLowerCase()
    if (k === 't' || k === 'arrowleft') { e.preventDefault(); answer(true) }
    else if (k === 'f' || k === 'arrowright') { e.preventDefault(); answer(false) }
  }, active)

  const pct = (tenths / START_TENTHS) * 100
  const urgent = pct <= 25

  return (
    <div>
      <div className="gm-stats">
        <Stat label="Score" value={score} tone="gold" />
        {streak > 1 && <Stat label="Streak" value={`🔥 ${streak}`} tone="hot" />}
        <Stat label="Time" value={`${Math.ceil(tenths / 10)}s`} tone={urgent ? 'hot' : undefined} />
      </div>

      <div className={`gm-timer ${urgent ? 'is-urgent' : ''}`} role="timer" aria-label={`${Math.ceil(tenths / 10)} seconds left`}>
        <div className="gm-timer__fill" style={{ width: `${pct}%` }} />
      </div>

      <div className={`hub-card gm-play gm-tf ${flash ? `is-${flash}` : ''}`}>
        <p className="gm-tf__q">{card.q.q}</p>
        <div className="gm-tf__claim">
          <span className="gm-tf__label">Is this the answer?</span>
          {card.shown}
        </div>
        {flash === 'bad' && (
          <div className="gm-feedback is-wrong" role="status">
            <div className="gm-feedback__head">❌ {card.isTrue ? 'That was the right answer' : 'That was a wrong answer'}</div>
            {!card.isTrue && <div className="gm-feedback__answer">Correct answer: <strong>{card.q.options[card.q.correct]}</strong></div>}
            {card.q.explanation && <div className="gm-feedback__why">{card.q.explanation}</div>}
          </div>
        )}
        <div className="gm-tf__btns">
          <button type="button" className="gm-tf__btn gm-tf__btn--true" onClick={() => answer(true)}>✓ True <kbd>T</kbd></button>
          <button type="button" className="gm-tf__btn gm-tf__btn--false" onClick={() => answer(false)}>✕ False <kbd>F</kbd></button>
        </div>
      </div>

      <p className="gm-hint">Wrong answers cost 5 seconds and show you the correct answer.</p>
    </div>
  )
}
