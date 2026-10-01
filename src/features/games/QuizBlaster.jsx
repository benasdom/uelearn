import { useRef, useState } from 'react'
import { QuestionCard, Feedback, Stat, useAnswerKeys, REVEALED } from './gameKit'

const MAX_LIVES = 3

// Classic run: 3 lives, streaks raise the points per correct answer.
export default function QuizBlaster({ questions, active, sfx, onComplete }) {
  const [i, setI] = useState(0)
  const [lives, setLives] = useState(MAX_LIVES)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [picked, setPicked] = useState(null)
  const [gained, setGained] = useState(0)
  const missedRef = useRef([])

  const q = questions[i]
  const answered = picked !== null
  const isLast = i >= questions.length - 1
  const finishing = answered && (lives <= 0 || isLast)

  const pick = (idx) => {
    if (answered) return
    setPicked(idx)
    if (idx === q.correct) {
      const pts = 100 + Math.min(streak, 10) * 20
      setGained(pts)
      setScore((s) => s + pts)
      setStreak((s) => s + 1)
      setCorrectCount((c) => c + 1)
      sfx('correct')
    } else {
      setGained(0)
      setLives((l) => l - 1)
      setStreak(0)
      missedRef.current.push(q)
      sfx('wrong')
    }
  }

  // Revealing forfeits the question: no points, streak resets, but no life lost.
  const reveal = () => {
    if (answered) return
    setPicked(REVEALED)
    setGained(0)
    setStreak(0)
    missedRef.current.push(q)
    sfx('select')
  }

  const next = () => {
    if (!answered) return
    if (finishing) {
      onComplete({ won: lives > 0, score, correct: correctCount, total: i + 1, missed: missedRef.current })
      return
    }
    setI((n) => n + 1)
    setPicked(null)
    setGained(0)
  }

  useAnswerKeys({ onPick: pick, onNext: next, onReveal: reveal, count: q.options.length, enabled: active })

  return (
    <div>
      <div className="gm-stats">
        <span className="gm-hearts" aria-label={`${lives} of ${MAX_LIVES} lives left`}>
          {Array.from({ length: MAX_LIVES }, (_, n) => (
            <span key={n} className={n < lives ? 'is-on' : 'is-off'}>{n < lives ? '❤️' : '🖤'}</span>
          ))}
        </span>
        <Stat label="Score" value={score} tone="gold" />
        {streak > 1 && <Stat label="Streak" value={`🔥 ${streak}`} tone="hot" />}
        <Stat label="Question" value={`${i + 1}/${questions.length}`} />
      </div>

      <div className="hub-card gm-play">
        <QuestionCard question={q} picked={picked} onPick={pick} onReveal={reveal} />
        <Feedback question={q} picked={picked} gained={gained} />
      </div>

      <div className="gm-actions">
        <button type="button" className="hub-btn" disabled={!answered} onClick={next}>
          {finishing ? 'See results' : 'Next →'}
        </button>
      </div>
    </div>
  )
}
