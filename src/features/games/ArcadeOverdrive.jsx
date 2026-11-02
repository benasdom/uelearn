import { useEffect, useRef, useState } from 'react'
import {
  Rocket, Plane, Shield, Pause, Play, Eye, Zap, Snowflake, Lightbulb, SkipForward,
  Pin, PinOff, Trash2, Crosshair, Volume2,
} from 'lucide-react'
import { loadState, saveState } from '../../lib/localStore'
import { shuffle, saveQuestionsAsMockTest } from '../../lib/gameQuestions'
import { Stat, useGameKeys, LETTERS } from './gameKit'
import { HText } from '../highlight/Highlighter'
import { hlKeys } from '../highlight/highlightStore'
import '../styles/arcade.css'

// Arcade Overdrive — sector-based target shooter on the shared MCQ schema
// ({ q, options, correct, explanation, _id? }). Every option is a target; arm
// one (tap / 1-6), tap again to fire. Runs are split into sectors of SECTOR
// questions with a boss target, checkpoint (30%), extra life (50%), speed
// bonus, streak multiplier, lifelines and a persistent pinned-notes deck.
// Finishes via onComplete({ won, score, correct, total, missed, review, bestStreak }).

const SECTOR = 10
const TIME_LIMIT = 15
const START_CHARGES = { emp: 1, freeze: 1, hint: 2 }
const SHIP_KEY = 'game-overdrive-ship'
const NOTES_KEY = 'game-overdrive-notes'

const SHIPS = [
  { key: 'apex', name: 'Apex Interceptor', note: 'Balanced · 3 shields · lock, then fire', color: '#22d3ee', lives: 3, mult: 1, quick: false },
  { key: 'phantom', name: 'Phantom Speeder', note: 'One-tap fire · ×1.25 score · 2 shields', color: '#f472b6', lives: 2, mult: 1.25, quick: true },
  { key: 'aegis', name: 'Aegis Juggernaut', note: '4 shields · ×0.9 score', color: '#fbbf24', lives: 4, mult: 0.9, quick: false },
]
const SHIP_ICONS = [Rocket, Plane, Shield]
const TIPS = [
  'The last target of every sector is a BOSS — double points.',
  'Answer fast: the speed bonus drains over 15 seconds.',
  'Lifelines halve a question’s points. Freeze stops the speed clock.',
  'A checkpoint saves at 30%; an extra life is earned at 50%.',
  'Pin tricky questions — they are kept between runs.',
  'Clean sectors refill your lifelines.',
]

const clamp = (v, a, b) => Math.min(b, Math.max(a, v))
const hashStr = (str) => {
  let h = 5381
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0
  return `q${(h >>> 0).toString(36)}`
}
// Stable across option shuffles, so a pinned question is recognised next run.
const questionKey = (q) => (q._id ? String(q._id) : hashStr(`${q.q}|${[...q.options].sort().join('|')}`))
const snapshot = (q, key) => ({ _id: key, q: q.q, options: [...q.options], correct: q.correct, explanation: q.explanation || '' })

export default function ArcadeOverdrive({ questions, active, sfx, onComplete, onAnswer, best = 0 }) {
  const [phase, setPhase] = useState('brief')
  const [shipIdx, setShipIdx] = useState(() => {
    const v = loadState(SHIP_KEY, 0)
    return Number.isInteger(v) && SHIPS[v] ? v : 0
  })
  const [notes, setNotes] = useState(() => loadState(NOTES_KEY, {}))
  const notesRef = useRef(notes)

  const updateNotes = (fn) => {
    const next = fn(notesRef.current)
    notesRef.current = next
    setNotes(next)
    saveState(NOTES_KEY, next)
  }
  const pickShip = (i) => { setShipIdx(i); saveState(SHIP_KEY, i) }

  if (phase === 'brief') {
    return <Briefing shipIdx={shipIdx} onShip={pickShip} onLaunch={() => setPhase('play')} best={best} count={questions.length} notes={notes} updateNotes={updateNotes} />
  }
  return <Battle questions={questions} ship={SHIPS[shipIdx]} active={active} sfx={sfx} onComplete={onComplete} onAnswer={onAnswer} best={best} notes={notes} updateNotes={updateNotes} />
}

// ─── Briefing ────────────────────────────────────────────────────────────────

function Briefing({ shipIdx, onShip, onLaunch, best, count, notes, updateNotes }) {
  const [showNotes, setShowNotes] = useState(false)
  const [msg, setMsg] = useState(null)
  const list = Object.values(notes).sort((a, b) => b.pinnedAt - a.pinnedAt)
  const sectors = Math.ceil(count / SECTOR)

  const practise = () => {
    try {
      saveQuestionsAsMockTest('Arcade Overdrive — pinned review', list.map((n) => n.q))
      setMsg('Saved to Mock Tests')
    } catch (err) {
      setMsg(err.message || 'Could not save')
    }
  }

  return (
    <div className="hub-card ao-brief">
      <p className="ao-label">1 · Select fighter craft</p>
      <div className="ao-ships" role="radiogroup" aria-label="Fighter craft">
        {SHIPS.map((s, i) => {
          const Icon = SHIP_ICONS[i]
          return (
            <button key={s.key} type="button" role="radio" aria-checked={shipIdx === i}
              className={`ao-shipopt ${shipIdx === i ? 'is-on' : ''}`} style={{ '--ship': s.color }} onClick={() => onShip(i)}>
              <Icon size={26} strokeWidth={1.8} />
              <span className="ao-shipopt__name">{s.name}</span>
              <span className="ao-shipopt__note">{s.note}</span>
            </button>
          )
        })}
      </div>

      <p className="ao-label">2 · Mission</p>
      <ul className="ao-list">
        <li>{count} targets in {sectors} sector{sectors === 1 ? '' : 's'} of up to {SECTOR}. Each answer is a target — <strong>lock on</strong>, then <strong>fire</strong>.</li>
        <li>A wrong shot costs a shield. Chain correct shots for up to ×5, and shoot fast for a speed bonus.</li>
        <li>The last target in a sector is a <strong>boss</strong> (×2). Checkpoint at 30%, extra life at 50%.</li>
        <li><strong>EMP</strong> removes two wrong targets, <strong>Freeze</strong> stops the speed clock, <strong>Hint</strong> marks the answer — each halves that question’s points. <strong>Reveal</strong> costs no shield.</li>
      </ul>
      <p className="ao-keys">
        <kbd>1</kbd>–<kbd>6</kbd> lock · <kbd>Space</kbd> fire / next · <kbd>←</kbd><kbd>→</kbd> cycle · <kbd>E</kbd> EMP · <kbd>F</kbd> Freeze · <kbd>H</kbd> Hint · <kbd>R</kbd> Reveal · <kbd>N</kbd> Pin · <kbd>P</kbd> Pause
      </p>

      <div className="ao-row">
        <button type="button" className="hub-btn ao-launch" onClick={onLaunch}>Initialise sector 1{best > 0 ? ` · best ${best}` : ''}</button>
        <button type="button" className="hub-btn hub-btn-ghost" onClick={() => setShowNotes((v) => !v)}>
          <Pin size={14} /> Pinned notes ({list.length})
        </button>
      </div>

      {showNotes && (
        <div className="ao-notes">
          {list.length === 0 && <div className="hub-empty">Nothing pinned yet. Miss a target or tap the pin during a run to save it here.</div>}
          {list.map((n) => (
            <div key={n.key} className="ao-note">
              <p className="ao-note__q">{n.q.q}</p>
              <p className="ao-note__ok">✓ {n.answer}</p>
              {n.userAnswer && n.userAnswer !== n.answer && <p className="ao-note__bad">✗ You shot: {n.userAnswer}</p>}
              {n.q.explanation && <p className="ao-note__why">{n.q.explanation}</p>}
              <textarea className="hub-textarea ao-note__input" rows={2} placeholder="Your note…" defaultValue={n.note}
                onBlur={(e) => updateNotes((all) => (all[n.key] ? { ...all, [n.key]: { ...all[n.key], note: e.target.value.trim() } } : all))} />
              <div className="ao-note__meta">
                <span>{n.missCount ? `Missed ${n.missCount}×` : 'Pinned manually'}</span>
                <button type="button" className="hub-btn hub-btn-danger" style={{ padding: '4px 8px' }} aria-label="Unpin"
                  onClick={() => updateNotes((all) => { const { [n.key]: _drop, ...rest } = all; return rest })}><Trash2 size={13} /></button>
              </div>
            </div>
          ))}
          {list.length >= 2 && (
            <button type="button" className="hub-btn hub-btn-ghost" disabled={!!msg} onClick={practise}>{msg || 'Practise pinned in Mock Tests'}</button>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Battle ──────────────────────────────────────────────────────────────────

function Battle({ questions, ship, active, sfx, onComplete, onAnswer, best, notes, updateNotes }) {
  const total = questions.length
  const sectors = Math.ceil(total / SECTOR)
  const bounds = (sec) => [sec * SECTOR, Math.min(total, (sec + 1) * SECTOR)]
  const isBoss = (qi) => { const [a, b] = bounds(Math.floor(qi / SECTOR)); return b - a >= 3 && qi === b - 1 }

  const stageRef = useRef(null)
  const fxRef = useRef(null)
  const boltRef = useRef(null)
  const shipRef = useRef(null)
  const targetRefs = useRef([])
  const reviewRef = useRef([])
  const timerRef = useRef(null)
  const finishedRef = useRef(false)
  const sfxRef = useRef(sfx)
  const doneRef = useRef(onComplete)
  const answerRef = useRef(onAnswer)
  const notesRef = useRef(notes)
  const [paused, setPaused] = useState(false)
  const [draft, setDraft] = useState('')
  const [toast, setToast] = useState(null)

  // Pure transition into question `qi`, including checkpoint / extra-life milestones.
  const enterQuestion = (p, qi) => {
    const sec = Math.floor(qi / SECTOR)
    const [a, b] = bounds(sec)
    const pct = (qi - a) / (b - a)
    let { cp, revive, elSector, lives } = p
    const overlays = [...p.overlays]
    if ((!cp || cp.sector !== sec) && qi > a && pct >= 0.3) {
      cp = { sector: sec, qi, score: p.score, streak: p.streak }
      overlays.push('cp')
    }
    if (elSector !== sec && qi > a && pct >= 0.5) {
      elSector = sec
      revive = true
      lives = Math.min(ship.lives, lives + 1)
      overlays.push('el')
    }
    return {
      ...p, phase: 'aim', sector: sec, qi, cp, revive, elSector, lives, overlays,
      order: shuffle(questions[qi].options.map((_, i) => i)),
      armed: null, angle: 0, removed: [], hint: false, frozen: false, assisted: false,
      time: TIME_LIMIT, feedback: null, editor: null,
    }
  }

  const [s, setS] = useState(() => ({
    phase: 'intro', sector: 0, qi: 0, lives: ship.lives, score: 0, streak: 0, bestStreak: 0,
    charges: { ...START_CHARGES }, order: [], armed: null, angle: 0, removed: [], hint: false,
    frozen: false, assisted: false, time: TIME_LIMIT, feedback: null, cp: null, revive: false,
    elSector: -1, overlays: [], editor: null, sectorScore: 0, sectorCharges: { ...START_CHARGES },
    summary: null, count: 3,
  }))
  const sRef = useRef(s)
  useEffect(() => { sRef.current = s; sfxRef.current = sfx; doneRef.current = onComplete; answerRef.current = onAnswer; notesRef.current = notes })
  useEffect(() => () => clearTimeout(timerRef.current), [])

  const say = (n) => sfxRef.current?.(n)
  const showToast = (t) => { setToast(t); setTimeout(() => setToast((c) => (c === t ? null : c)), 1400) }
  const launch = (p) => enterQuestion({ ...p, sectorScore: p.score, sectorCharges: { ...p.charges } }, p.sector * SECTOR)

  // Sector countdown.
  useEffect(() => {
    if (s.phase !== 'intro' || !active) return undefined
    const id = setInterval(() => setS((p) => (p.phase !== 'intro' ? p : p.count <= 1 ? launch(p) : { ...p, count: p.count - 1 })), 1000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [s.phase, s.sector, active])

  // Speed-bonus clock.
  const clockOn = s.phase === 'aim' && !paused && !s.frozen && active && !s.overlays.length && !s.editor
  useEffect(() => {
    if (!clockOn) return undefined
    const id = setInterval(() => setS((p) => (p.phase === 'aim' ? { ...p, time: Math.max(0, p.time - 0.1) } : p)), 100)
    return () => clearInterval(id)
  }, [clockOn])

  useEffect(() => { if (s.overlays[0]) say('power') }, [s.overlays[0]]) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    const onVis = () => { if (document.hidden) setPaused(true) }
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])
  useEffect(() => { try { window.speechSynthesis?.cancel() } catch { /* unsupported */ } }, [s.qi])

  const q = questions[Math.min(s.qi, total - 1)]
  const qk = questionKey(q)
  const pinned = !!notes[qk]
  const [secA, secB] = bounds(s.sector)
  const boss = isBoss(s.qi)
  const correctPos = s.order.indexOf(q.correct)
  const fb = s.feedback

  // ── fx ──
  const burst = (x, y, color) => {
    const host = fxRef.current
    if (!host) return
    for (let i = 0; i < 22; i++) {
      const p = document.createElement('i')
      const size = 3 + Math.random() * 6
      p.className = 'ao-part'
      p.style.cssText = `left:${x}px;top:${y}px;width:${size}px;height:${size}px;background:${color};box-shadow:0 0 ${size * 2}px ${color}`
      host.appendChild(p)
      const a = Math.random() * 6.283
      const d = 40 + Math.random() * 100
      p.animate(
        [{ transform: 'translate(0,0) scale(1)', opacity: 1 }, { transform: `translate(${Math.cos(a) * d}px,${Math.sin(a) * d}px) scale(0)`, opacity: 0 }],
        { duration: 500 + Math.random() * 400, easing: 'cubic-bezier(.1,.9,.2,1)' },
      ).onfinish = () => p.remove()
    }
  }
  const shake = () => stageRef.current?.animate(
    [{ transform: 'translate(0,0)' }, { transform: 'translate(-8px,4px)' }, { transform: 'translate(8px,-5px)' }, { transform: 'translate(-4px,4px)' }, { transform: 'translate(0,0)' }],
    { duration: 380 },
  )
  const geometry = (pos) => {
    const sr = stageRef.current.getBoundingClientRect()
    const tr = targetRefs.current[pos].getBoundingClientRect()
    const hr = shipRef.current.getBoundingClientRect()
    const x1 = hr.left + hr.width / 2 - sr.left
    const y1 = hr.top + hr.height / 2 - sr.top
    const x2 = tr.left + tr.width / 2 - sr.left
    const y2 = tr.top + tr.height / 2 - sr.top
    return { x1, y1, x2, y2, deg: (Math.atan2(x2 - x1, -(y2 - y1)) * 180) / Math.PI }
  }

  // ── notes ──
  const bumpMiss = (qq, answerText) => {
    const key = questionKey(qq)
    updateNotes((all) => (all[key] ? { ...all, [key]: { ...all[key], missCount: (all[key].missCount || 0) + 1, userAnswer: answerText } } : all))
  }
  const openEditor = () => {
    const st = sRef.current
    if (st.phase !== 'aim' && st.phase !== 'feedback') return
    const wrong = st.feedback?.status === 'wrong' ? q.options[st.feedback.picked] : null
    setDraft(notesRef.current[qk]?.note || '')
    setS((p) => ({ ...p, editor: { userAnswer: wrong } }))
  }
  const saveNote = () => {
    const ua = s.editor?.userAnswer
    updateNotes((all) => {
      const ex = all[qk]
      return { ...all, [qk]: { key: qk, q: snapshot(q, qk), answer: q.options[q.correct], userAnswer: ua ?? ex?.userAnswer ?? null, note: draft.trim(), pinnedAt: ex?.pinnedAt || Date.now(), missCount: ex?.missCount || (ua ? 1 : 0) } }
    })
    setS((p) => ({ ...p, editor: null }))
  }
  const unpin = () => {
    updateNotes((all) => { const { [qk]: _drop, ...rest } = all; return rest })
    setS((p) => ({ ...p, editor: null }))
  }

  // ── actions ──
  const fire = (pos) => {
    const st = sRef.current
    if (st.phase !== 'aim' || paused || st.overlays.length || st.editor) return
    const { x1, y1, x2, y2, deg } = geometry(pos)
    const len = Math.hypot(x2 - x1, y2 - y1)
    const bolt = boltRef.current
    bolt.style.display = 'block'
    bolt.animate(
      [{ transform: `translate(${x1}px,${y1}px) rotate(${deg}deg) translateY(0)` }, { transform: `translate(${x1}px,${y1}px) rotate(${deg}deg) translateY(${-len}px)` }],
      { duration: 240, easing: 'ease-in' },
    ).onfinish = () => { bolt.style.display = 'none' }
    say('laser')
    setS((p) => ({ ...p, phase: 'firing', armed: pos, angle: clamp(deg, -55, 55) }))
    timerRef.current = setTimeout(() => resolveShot(pos, x2, y2), 250)
  }

  const resolveShot = (pos, x, y) => {
    const st = sRef.current
    const qq = questions[st.qi]
    const idx = st.order[pos]
    if (idx === qq.correct) {
      const mult = Math.min(5, 1 + Math.floor(st.streak / 3))
      const speed = Math.round((100 * st.time) / TIME_LIMIT)
      const bossHit = isBoss(st.qi)
      const pts = Math.round((100 + speed) * mult * ship.mult * (bossHit ? 2 : 1) * (st.assisted ? 0.5 : 1))
      reviewRef.current[st.qi] = { q: qq, status: 'correct', picked: idx, points: pts }
      answerRef.current?.(qq, true)
      say('correct'); say('explode'); burst(x, y, '#34d399')
      setS((p) => ({ ...p, phase: 'feedback', score: p.score + pts, streak: p.streak + 1, bestStreak: Math.max(p.bestStreak, p.streak + 1), feedback: { status: 'correct', pts, speed, mult, boss: bossHit, picked: idx } }))
    } else {
      reviewRef.current[st.qi] = { q: qq, status: 'wrong', picked: idx, points: 0 }
      answerRef.current?.(qq, false)
      say('wrong'); burst(x, y, '#f87171'); shake()
      bumpMiss(qq, qq.options[idx])
      setS((p) => ({ ...p, phase: 'feedback', lives: Math.max(0, p.lives - 1), streak: 0, feedback: { status: 'wrong', pts: 0, picked: idx } }))
    }
  }

  const tap = (pos) => {
    const st = sRef.current
    if (st.phase !== 'aim' || paused || st.overlays.length || st.editor || st.removed.includes(pos)) return
    if (st.armed === pos || ship.quick) { fire(pos); return }
    say('select')
    setS((p) => ({ ...p, armed: pos, angle: clamp(geometry(pos).deg, -55, 55) }))
  }
  const cycle = (dir) => {
    const st = sRef.current
    const live = st.order.map((_, i) => i).filter((i) => !st.removed.includes(i))
    if (st.phase !== 'aim' || !live.length) return
    const at = live.indexOf(st.armed)
    const next = live[(at + dir + live.length) % live.length]
    say('select')
    setS((p) => ({ ...p, armed: next, angle: clamp(geometry(next).deg, -55, 55) }))
  }

  const canAct = () => { const st = sRef.current; return st.phase === 'aim' && !paused && !st.overlays.length && !st.editor }
  const emp = () => {
    const st = sRef.current
    if (!canAct() || st.charges.emp < 1) return
    const wrong = shuffle(st.order.map((_, i) => i).filter((i) => st.order[i] !== q.correct && !st.removed.includes(i))).slice(0, 2)
    if (!wrong.length) return
    say('power'); showToast('EMP — two wrong targets disabled')
    setS((p) => ({ ...p, removed: [...p.removed, ...wrong], armed: wrong.includes(p.armed) ? null : p.armed, charges: { ...p.charges, emp: p.charges.emp - 1 }, assisted: true }))
  }
  const freeze = () => {
    const st = sRef.current
    if (!canAct() || st.charges.freeze < 1 || st.frozen) return
    say('power'); showToast('Freeze — speed clock halted')
    setS((p) => ({ ...p, frozen: true, charges: { ...p.charges, freeze: p.charges.freeze - 1 }, assisted: true }))
  }
  const hint = () => {
    const st = sRef.current
    if (!canAct() || st.charges.hint < 1 || st.hint) return
    say('power')
    setS((p) => ({ ...p, hint: true, charges: { ...p.charges, hint: p.charges.hint - 1 }, assisted: true }))
  }
  const reveal = () => {
    const st = sRef.current
    if (!canAct()) return
    reviewRef.current[st.qi] = { q: questions[st.qi], status: 'revealed', picked: null, points: 0 }
    answerRef.current?.(questions[st.qi], false, 'revealed')
    say('select')
    setS((p) => ({ ...p, phase: 'feedback', streak: 0, feedback: { status: 'revealed', pts: 0, picked: null } }))
  }

  const finish = (won, finalScore) => {
    if (finishedRef.current) return
    finishedRef.current = true
    const st = sRef.current
    const review = questions.map((qq, i) => reviewRef.current[i] || { q: qq, status: 'unseen', picked: null, points: 0 })
    const resolved = review.filter((r) => r.status !== 'unseen')
    doneRef.current({
      won,
      score: finalScore,
      correct: resolved.filter((r) => r.status === 'correct').length,
      total: Math.max(1, resolved.length),
      missed: resolved.filter((r) => r.status !== 'correct').map((r) => r.q),
      review,
      bestStreak: st.bestStreak,
    })
  }

  const sectorBonus = (st) => {
    const [a, b] = bounds(st.sector)
    let perfect = true
    for (let i = a; i < b; i++) if (reviewRef.current[i]?.status !== 'correct') perfect = false
    return { bonus: st.lives >= ship.lives ? 500 : 250, perfect }
  }

  const advance = () => {
    const st = sRef.current
    if (st.phase !== 'feedback' || st.editor || st.overlays.length) return
    if (st.lives <= 0) { say('lose'); setS((p) => ({ ...p, phase: 'over' })); return }
    if (st.qi + 1 < bounds(st.sector)[1]) { setS((p) => enterQuestion(p, p.qi + 1)); return }
    const { bonus, perfect } = sectorBonus(st)
    if (st.sector >= sectors - 1) { finish(true, st.score + bonus); return }
    say('win')
    setS((p) => ({
      ...p, phase: 'complete', score: p.score + bonus, summary: { bonus, perfect },
      charges: { ...p.charges, hint: p.charges.hint + 1, emp: p.charges.emp + (perfect ? 1 : 0) },
    }))
  }
  const nextSector = () => setS((p) => ({ ...p, phase: 'intro', sector: p.sector + 1, qi: (p.sector + 1) * SECTOR, lives: Math.min(ship.lives, p.lives + 1), cp: null, count: 3, summary: null }))
  const dropReviews = (from) => { reviewRef.current.length = Math.min(reviewRef.current.length, from) }
  const revive = () => {
    const st = sRef.current
    if (!st.revive) return
    dropReviews(st.qi)
    setS((p) => enterQuestion({ ...p, revive: false, lives: ship.lives, overlays: [] }, p.qi))
  }
  const resumeCheckpoint = () => {
    const st = sRef.current
    if (!st.cp || st.cp.sector !== st.sector) return
    dropReviews(st.cp.qi)
    setS((p) => enterQuestion({ ...p, score: p.cp.score, streak: p.cp.streak, lives: ship.lives, overlays: [] }, p.cp.qi))
  }
  const restartSector = () => {
    const a = sRef.current.sector * SECTOR
    dropReviews(a)
    setS((p) => enterQuestion({ ...p, score: p.sectorScore, streak: 0, lives: ship.lives, charges: { ...p.sectorCharges }, cp: null, elSector: -1, revive: false, overlays: [] }, a))
  }
  const dismissOverlay = () => setS((p) => ({ ...p, overlays: p.overlays.slice(1) }))

  const readAloud = () => {
    if (!('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(`${q.q}. ${q.options.map((o, i) => `Option ${i + 1}: ${o}`).join('. ')}`))
  }

  // ── keyboard ──
  useGameKeys((e) => {
    const k = e.key.toLowerCase()
    const st = sRef.current
    if (k === 'p') { if (st.phase !== 'firing') setPaused((v) => !v); return }
    if (st.editor) return
    if (k === 'enter' || k === ' ') {
      if (e.target?.tagName === 'BUTTON') return
      e.preventDefault()
      if (paused) return
      if (st.overlays.length) dismissOverlay()
      else if (st.phase === 'aim' && st.armed !== null) fire(st.armed)
      else if (st.phase === 'feedback') advance()
      else if (st.phase === 'intro') setS((p) => launch(p))
      return
    }
    if (paused || st.overlays.length) return
    if (k === 'arrowleft' || k === 'a') { e.preventDefault(); cycle(-1) }
    else if (k === 'arrowright' || k === 'd') { e.preventDefault(); cycle(1) }
    else if (k === 'e') emp()
    else if (k === 'f') freeze()
    else if (k === 'h') hint()
    else if (k === 'r') reveal()
    else if (k === 'n') openEditor()
    else if (k.length === 1 && '123456'.includes(k) && Number(k) <= st.order.length) tap(Number(k) - 1)
  }, active)

  // ── render ──
  const mult = Math.min(5, 1 + Math.floor(s.streak / 3))
  const canPlay = s.phase === 'aim' && !paused && !s.overlays.length && !s.editor
  const secPct = ((s.qi - secA) / Math.max(1, secB - secA)) * 100
  const lastQ = s.qi + 1 >= total
  const hasSpeech = typeof window !== 'undefined' && 'speechSynthesis' in window
  const overlay = s.overlays[0]
  const cpOk = s.cp && s.cp.sector === s.sector

  return (
    <div className="ao">
      <div className="gm-stats">
        <span className="gm-hearts" aria-label={`${s.lives} shields left`}>
          {Array.from({ length: Math.max(ship.lives, s.lives) }, (_, i) => (
            <span key={i} className={i < s.lives ? 'is-on' : 'is-off'}>{i < s.lives ? '🛡️' : '▫️'}</span>
          ))}
        </span>
        <Stat label="Score" value={s.score} tone="gold" />
        {s.streak > 1 && <Stat label="Streak" value={`🔥 ${s.streak} · ×${mult}`} tone="hot" />}
        {best > 0 && <Stat label="Best" value={best} />}
        <Stat label="Sector" value={`${s.sector + 1}/${sectors}`} />
        <Stat label="Target" value={`${Math.min(s.qi + 1, total)}/${total}`} />
        <button type="button" className="gm-icon-btn" disabled={s.phase === 'firing'} onClick={() => setPaused((v) => !v)} aria-label={paused ? 'Resume' : 'Pause'} title="Pause (P)">
          {paused ? <Play size={16} /> : <Pause size={16} />}
        </button>
      </div>

      <div className="ao-stage" ref={stageRef}>
        <div className="ao-bars">
          <div className="ao-sectorbar" title="Sector progress">
            <i style={{ width: `${secPct}%` }} />
            <b className={cpOk ? 'is-hit' : ''} style={{ left: '30%' }} />
            <b className={s.elSector === s.sector ? 'is-hit' : ''} style={{ left: '50%' }} />
          </div>
          <div className={`ao-timebar ${s.time < 4 ? 'is-low' : ''} ${s.frozen ? 'is-frozen' : ''}`} title="Speed bonus">
            <i style={{ width: `${(s.time / TIME_LIMIT) * 100}%` }} />
          </div>
        </div>

        <div className="ao-targets" role="group" aria-label="Answer targets">
          {s.order.map((oi, pos) => {
            const removed = s.removed.includes(pos)
            let cls = 'ao-target'
            if (s.armed === pos) cls += ' is-armed'
            if (s.hint && s.phase === 'aim' && oi === q.correct) cls += ' is-hint'
            if (removed) cls += ' is-removed'
            if (fb) {
              if (oi === q.correct) cls += fb.status === 'correct' ? ' is-hit' : ' is-reveal'
              else if (oi === fb.picked) cls += ' is-wrong'
              else cls += ' is-dim'
            }
            return (
              <button key={`${s.qi}-${pos}`} type="button" className={cls} ref={(el) => { targetRefs.current[pos] = el }}
                disabled={removed || s.phase !== 'aim'} style={{ animationDelay: `${pos * 0.09}s` }} onClick={() => tap(pos)}>
                <span className="ao-target__key">{LETTERS[pos]}</span>
                <span className="ao-target__text">{q.options[oi]}</span>
                {s.armed === pos && s.phase === 'aim' && !ship.quick && <span className="ao-target__hint">tap again to fire</span>}
              </button>
            )
          })}
        </div>

        <div className="ao-shipzone">
          <svg ref={shipRef} className="ao-ship" viewBox="-30 -34 60 70" style={{ '--ship': ship.color, transform: `rotate(${s.angle}deg)` }} aria-hidden="true">
            <path className="ao-flame" d="M-6 14 L6 14 L0 30 Z" />
            <polygon points="0,-26 10,-4 22,16 8,12 0,18 -8,12 -22,16 -10,-4" fill={ship.color} />
            <circle cx="0" cy="-4" r="3.5" fill="#fff" />
            {s.lives > 3 && <circle cx="0" cy="0" r="30" fill="none" stroke="rgba(251,191,36,.45)" strokeWidth="2" />}
          </svg>
        </div>

        <div className={`ao-qbox ${boss && !fb ? 'is-boss' : ''}`}>
          {!fb ? (
            <>
              {boss && <span className="ao-bosstag">⚠ Boss target · ×2</span>}
              <HText as="p" className="ao-qtext" k={hlKeys.question(q)} text={q.q} />
              <div className="ao-tools">
                {hasSpeech && <button type="button" className="gm-reveal" onClick={readAloud}><Volume2 size={13} /> Read aloud</button>}
                <button type="button" className="gm-reveal" disabled={!canPlay} onClick={reveal}><Eye size={13} /> Reveal <kbd>R</kbd></button>
                <button type="button" className={`gm-reveal ${pinned ? 'is-pinned' : ''}`} disabled={!canPlay} onClick={openEditor}>
                  {pinned ? <PinOff size={13} /> : <Pin size={13} />} {pinned ? 'Pinned' : 'Pin'} <kbd>N</kbd>
                </button>
              </div>
            </>
          ) : (
            <div className={`ao-fb is-${fb.status}`} role="status">
              <div className="ao-fb__title">
                {fb.status === 'correct' ? `✅ Target destroyed +${fb.pts}` : fb.status === 'revealed' ? '👁 Answer revealed' : s.lives <= 0 ? '❌ Shields down' : '❌ Direct hit on you — −1 shield'}
              </div>
              {fb.status === 'correct' && (
                <div className="ao-fb__calc">{100} base + {fb.speed} speed · ×{fb.mult} streak{fb.boss ? ' · ×2 boss' : ''}{ship.mult !== 1 ? ` · ×${ship.mult} craft` : ''}{s.assisted ? ' · ½ lifeline' : ''}</div>
              )}
              {fb.status !== 'correct' && <div className="ao-fb__ans">Correct answer: <HText as="strong" k={hlKeys.answer(q)} text={q.options[q.correct]} /></div>}
              {q.explanation && <HText as="div" className="ao-fb__why" k={hlKeys.explanation(q)} text={q.explanation} />}
              <div className="ao-row">
                <button type="button" className={`hub-btn hub-btn-ghost ${fb.status !== 'correct' && !pinned ? 'ao-suggest' : ''}`} onClick={openEditor}>
                  {pinned ? <PinOff size={14} /> : <Pin size={14} />} {pinned ? 'Edit pin' : fb.status === 'correct' ? 'Pin' : 'Pin for review'}
                </button>
                <button type="button" className="hub-btn" onClick={advance}>
                  <SkipForward size={14} /> {s.lives <= 0 ? 'Continue' : lastQ ? 'Finish' : 'Next'}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="ao-fx" ref={fxRef} />
        <div className="ao-bolt" ref={boltRef} />
        {toast && <div className="ao-toast">{toast}</div>}

        {/* ── overlays ── */}
        {paused && (
          <div className="ao-modal"><div className="ao-card"><h3>Paused</h3><button type="button" className="hub-btn" onClick={() => setPaused(false)}><Play size={14} /> Resume</button></div></div>
        )}

        {!paused && s.editor && (
          <div className="ao-modal">
            <div className="ao-card ao-card--note">
              <h3>{pinned ? 'Edit pinned note' : 'Pin for review'}</h3>
              <p className="ao-note__q">{q.q}</p>
              <p className="ao-note__ok">✓ {q.options[q.correct]}</p>
              {s.editor.userAnswer && <p className="ao-note__bad">✗ You shot: {s.editor.userAnswer}</p>}
              <textarea className="hub-textarea" rows={3} autoFocus placeholder="Add a note (optional) — e.g. mixed up the two similar options…" value={draft} onChange={(e) => setDraft(e.target.value)} />
              <div className="ao-row">
                <button type="button" className="hub-btn" onClick={saveNote}><Pin size={14} /> {pinned ? 'Save note' : 'Pin question'}</button>
                {pinned && <button type="button" className="hub-btn hub-btn-danger" onClick={unpin}><Trash2 size={14} /> Unpin</button>}
                <button type="button" className="hub-btn hub-btn-ghost" onClick={() => setS((p) => ({ ...p, editor: null }))}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {!paused && !s.editor && overlay && (
          <div className="ao-modal">
            <div className={`ao-card ${overlay === 'cp' ? 'is-amber' : 'is-green'}`}>
              <h3>{overlay === 'cp' ? '⚑ Checkpoint saved' : '💚 Extra life earned'}</h3>
              <p>{overlay === 'cp' ? 'Sector locked at 30%. If your shields fail you can resume from here.' : 'Shields restored and a one-time revive is ready.'}</p>
              <button type="button" className="hub-btn" onClick={dismissOverlay}>{overlay === 'cp' ? 'Acknowledged' : 'Power up!'}</button>
            </div>
          </div>
        )}

        {!paused && !s.editor && !overlay && s.phase === 'intro' && (
          <div className="ao-modal">
            <div className="ao-card">
              <p className="ao-card__eyebrow">Initialising</p>
              <h2>Sector {s.sector + 1} <span>/ {sectors}</span></h2>
              <p>{secB - secA} target{secB - secA === 1 ? '' : 's'} to destroy</p>
              <p className="ao-card__tip">{TIPS[(s.sector + total) % TIPS.length]}</p>
              <button type="button" className="hub-btn" onClick={() => setS((p) => launch(p))}>Launching in {s.count}… tap to skip</button>
            </div>
          </div>
        )}

        {!paused && !s.editor && !overlay && s.phase === 'complete' && s.summary && (
          <div className="ao-modal">
            <div className="ao-card is-green">
              <h2>Sector {s.sector + 1} cleared!</h2>
              <p>Score {s.score}</p>
              <p className="ao-card__tip">{s.lives >= ship.lives ? 'Perfect shields' : 'Shields bonus'} +{s.summary.bonus} · +1 Hint{s.summary.perfect ? ' · flawless: +1 EMP' : ''}</p>
              <p>Next: sector {s.sector + 2} — {bounds(s.sector + 1)[1] - bounds(s.sector + 1)[0]} targets</p>
              <button type="button" className="hub-btn" onClick={nextSector}>Next sector</button>
            </div>
          </div>
        )}

        {!paused && !s.editor && !overlay && s.phase === 'over' && (
          <div className="ao-modal">
            <div className="ao-card is-red">
              <h2>Shields down</h2>
              <p>Sector {s.sector + 1} · target {s.qi + 1 - secA}/{secB - secA} · score {s.score}</p>
              <p className="ao-card__tip">{cpOk ? `Checkpoint available at target ${s.cp.qi - secA + 1}.` : 'No checkpoint reached.'}{s.revive ? ' Extra life ready.' : ''}</p>
              <div className="ao-row ao-row--center">
                {s.revive && <button type="button" className="hub-btn" onClick={revive}>Revive</button>}
                {cpOk && <button type="button" className="hub-btn" onClick={resumeCheckpoint}>Checkpoint</button>}
                <button type="button" className="hub-btn hub-btn-ghost" onClick={restartSector}>Restart sector</button>
                <button type="button" className="hub-btn hub-btn-danger" onClick={() => finish(false, s.score)}>End run</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="ao-lifelines" role="group" aria-label="Lifelines">
        <button type="button" className="ao-life" disabled={!canPlay || s.charges.emp < 1} onClick={emp} title="Disable two wrong targets (E)"><Zap size={15} /> EMP <span>{s.charges.emp}</span></button>
        <button type="button" className="ao-life" disabled={!canPlay || s.charges.freeze < 1 || s.frozen} onClick={freeze} title="Stop the speed clock (F)"><Snowflake size={15} /> Freeze <span>{s.charges.freeze}</span></button>
        <button type="button" className="ao-life" disabled={!canPlay || s.charges.hint < 1 || s.hint} onClick={hint} title="Mark the correct target (H)"><Lightbulb size={15} /> Hint <span>{s.charges.hint}</span></button>
      </div>
      <p className="gm-hint">
        <Crosshair size={12} style={{ verticalAlign: '-2px' }} /> {ship.quick ? 'Tap a target to fire.' : 'Tap a target to lock on, tap again to fire.'} Lifelines halve that target’s points.
      </p>
    </div>
  )
}