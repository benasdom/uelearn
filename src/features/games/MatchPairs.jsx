import { useEffect, useMemo, useRef, useState } from 'react'
import { shuffle } from '../../lib/gameQuestions'
import { Stat } from './gameKit'

// Pair each question (left) with its correct answer (right). First-try matches
// score best; every wrong pairing costs points.
export default function MatchPairs({ questions, sfx, onComplete }) {
  const total = questions.length
  const right = useMemo(
    () => shuffle(questions.map((q, n) => ({ n, text: q.options[q.correct] }))),
    [questions]
  )

  const [selL, setSelL] = useState(null)
  const [selR, setSelR] = useState(null)
  const [doneL, setDoneL] = useState(() => new Set())
  const [doneR, setDoneR] = useState(() => new Set())
  const [bad, setBad] = useState(null) // { l, r } while the shake plays
  const [score, setScore] = useState(0)
  const [mistakes, setMistakes] = useState(0)
  const missedRef = useRef(new Set())
  const timers = useRef([])

  useEffect(() => () => timers.current.forEach(clearTimeout), [])
  const later = (fn, ms) => timers.current.push(setTimeout(fn, ms))

  const evaluate = (l, r) => {
    const target = questions[l].options[questions[l].correct]
    if (right[r].text === target) {
      const nextDone = doneL.size + 1
      setDoneL((s) => new Set(s).add(l))
      setDoneR((s) => new Set(s).add(r))
      setScore((s) => s + 100)
      setSelL(null)
      setSelR(null)
      sfx('correct')
      if (nextDone === total) {
        const missed = [...missedRef.current].map((n) => questions[n])
        later(
          () => onComplete({ won: true, score: score + 100, correct: total - missed.length, total, missed }),
          700
        )
      }
    } else {
      setBad({ l, r })
      setMistakes((m) => m + 1)
      setScore((s) => Math.max(0, s - 20))
      missedRef.current.add(l)
      sfx('wrong')
      later(() => {
        setBad(null)
        setSelL(null)
        setSelR(null)
      }, 520)
    }
  }

  // Reveal the partner of the selected question. It still counts as missed and
  // scores nothing, so the hint has a cost.
  const reveal = () => {
    if (bad || selL === null || doneL.has(selL)) return
    const target = questions[selL].options[questions[selL].correct]
    const r = right.findIndex((a, k) => !doneR.has(k) && a.text === target)
    if (r < 0) return
    missedRef.current.add(selL)
    const nextDone = doneL.size + 1
    setDoneL((d) => new Set(d).add(selL))
    setDoneR((d) => new Set(d).add(r))
    setSelL(null)
    setSelR(null)
    sfx('select')
    if (nextDone === total) {
      const missed = [...missedRef.current].map((n) => questions[n])
      later(() => onComplete({ won: true, score, correct: total - missed.length, total, missed }), 700)
    }
  }

  const chooseLeft = (l) => {
    if (bad || doneL.has(l)) return
    sfx('select')
    setSelL(l === selL ? null : l)
    if (l !== selL && selR !== null) evaluate(l, selR)
  }

  const chooseRight = (r) => {
    if (bad || doneR.has(r)) return
    sfx('select')
    setSelR(r === selR ? null : r)
    if (r !== selR && selL !== null) evaluate(selL, r)
  }

  return (
    <div>
      <div className="gm-stats">
        <Stat label="Score" value={score} tone="gold" />
        <Stat label="Matched" value={`${doneL.size}/${total}`} />
        <Stat label="Misses" value={mistakes} tone={mistakes ? 'hot' : undefined} />
      </div>

      <p className="gm-hint">Tap a question, then tap the answer that belongs to it.</p>

      <div className="gm-actions gm-actions--left">
        <button type="button" className="gm-reveal" disabled={selL === null || !!bad} onClick={reveal}>
          👁 Reveal match for selected question
        </button>
      </div>

      <div className="gm-match">
        <div className="gm-match__col" aria-label="Questions">
          {questions.map((q, l) => {
            let cls = 'gm-tile'
            if (doneL.has(l)) cls += ' is-done'
            else if (bad?.l === l) cls += ' is-bad'
            else if (selL === l) cls += ' is-selected'
            return (
              <button key={l} type="button" className={cls} disabled={doneL.has(l)} onClick={() => chooseLeft(l)} title={q.q}>
                {q.q}
              </button>
            )
          })}
        </div>
        <div className="gm-match__col" aria-label="Answers">
          {right.map((a, r) => {
            let cls = 'gm-tile gm-tile--answer'
            if (doneR.has(r)) cls += ' is-done'
            else if (bad?.r === r) cls += ' is-bad'
            else if (selR === r) cls += ' is-selected'
            return (
              <button key={r} type="button" className={cls} disabled={doneR.has(r)} onClick={() => chooseRight(r)} title={a.text}>
                {a.text}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
