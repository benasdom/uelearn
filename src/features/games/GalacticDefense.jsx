import { useEffect, useRef, useState } from 'react'
import { Rocket, Plane, Shield, Pause, Play, Eye, Volume2, Zap, Snowflake, Lightbulb, SkipForward } from 'lucide-react'
import { loadState, saveState } from '../../lib/localStore'
import { shuffle } from '../../lib/gameQuestions'
import { Stat } from './gameKit'

// Galactic Defense — a canvas shooter. Each question sends one drone per option
// down the screen; shoot the drone carrying the CORRECT answer before it reaches
// the defense line. Wrong drones cost a shield. Questions use the shared MCQ
// schema ({ q, options, correct, explanation }).

const SHIPS = [
  { key: 'apex', name: 'Apex Interceptor', note: 'Standard balance · 3 shields', color: '#22d3ee', speed: 520, cooldown: 0.26, lives: 3 },
  { key: 'phantom', name: 'Phantom Speeder', note: 'High thrusters · rapid fire', color: '#f472b6', speed: 820, cooldown: 0.17, lives: 3 },
  { key: 'aegis', name: 'Aegis Juggernaut', note: '+1 extra shield · slower', color: '#fbbf24', speed: 430, cooldown: 0.32, lives: 4 },
]
const SHIP_ICONS = [Rocket, Plane, Shield]
const SHIP_KEY = 'game-galactic-ship'
const START_CHARGES = { emp: 1, freeze: 1, hint: 2 }
const clamp = (v, a, b) => Math.min(b, Math.max(a, v))

function wrapText(ctx, text, maxW, maxLines) {
  const words = String(text).split(/\s+/).filter(Boolean)
  const lines = []
  let cur = ''
  for (const w of words) {
    let word = w
    while (ctx.measureText(word).width > maxW && word.length > 2) {
      let cut = word.length - 1
      while (cut > 1 && ctx.measureText(`${word.slice(0, cut)}-`).width > maxW) cut--
      if (cur) { lines.push(cur); cur = '' }
      lines.push(`${word.slice(0, cut)}-`)
      word = word.slice(cut)
    }
    const test = cur ? `${cur} ${word}` : word
    if (ctx.measureText(test).width <= maxW) cur = test
    else { lines.push(cur); cur = word }
  }
  if (cur) lines.push(cur)
  if (lines.length > maxLines) {
    const kept = lines.slice(0, maxLines)
    let last = kept[maxLines - 1]
    while (last.length > 1 && ctx.measureText(`${last}…`).width > maxW) last = last.slice(0, -1)
    kept[maxLines - 1] = `${last}…`
    return kept
  }
  return lines.length ? lines : ['']
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
}

export default function GalacticDefense({ questions, active, sfx, onComplete, best = 0 }) {
  const [phase, setPhase] = useState('brief')
  const [shipIdx, setShipIdx] = useState(() => {
    const v = loadState(SHIP_KEY, 0)
    return Number.isInteger(v) && SHIPS[v] ? v : 0
  })

  const pickShip = (i) => { setShipIdx(i); saveState(SHIP_KEY, i) }

  if (phase === 'brief') return <Briefing shipIdx={shipIdx} onShip={pickShip} onLaunch={() => setPhase('play')} best={best} count={questions.length} />
  return <Battle questions={questions} ship={SHIPS[shipIdx]} active={active} sfx={sfx} onComplete={onComplete} best={best} />
}

// ─── Briefing ────────────────────────────────────────────────────────────────

function Briefing({ shipIdx, onShip, onLaunch, best, count }) {
  return (
    <div className="hub-card gd-brief">
      <p className="gd-brief__label">1 · Select fighter craft</p>
      <div className="gd-ships" role="radiogroup" aria-label="Fighter craft">
        {SHIPS.map((s, i) => {
          const Icon = SHIP_ICONS[i]
          return (
            <button key={s.key} type="button" role="radio" aria-checked={shipIdx === i}
              className={`gd-ship ${shipIdx === i ? 'is-on' : ''}`} style={{ '--ship': s.color }} onClick={() => onShip(i)}>
              <Icon size={26} strokeWidth={1.8} />
              <span className="gd-ship__name">{s.name}</span>
              <span className="gd-ship__note">{s.note}</span>
            </button>
          )
        })}
      </div>

      <p className="gd-brief__label">2 · Mission</p>
      <ul className="gd-brief__list">
        <li>{count} questions. Each sends one drone per answer down the screen.</li>
        <li>Shoot the drone carrying the <strong>correct</strong> answer. A wrong drone costs a shield; so does the right one reaching the defense line.</li>
        <li>Chain correct answers for a score multiplier (up to ×5).</li>
        <li><strong>EMP</strong> removes two wrong drones, <strong>Freeze</strong> stops them, <strong>Hint</strong> marks the target. Using one halves that question’s points.</li>
        <li><strong>Reveal answer</strong> shows the correct answer any time (no points, no shield lost).</li>
      </ul>
      <p className="gd-brief__keys">
        Move: mouse / touch or <kbd>A</kbd><kbd>D</kbd> / <kbd>←</kbd><kbd>→</kbd> · Fire: click or <kbd>Space</kbd> · Auto-target: <kbd>1</kbd>–<kbd>4</kbd> · <kbd>E</kbd> EMP · <kbd>F</kbd> Freeze · <kbd>H</kbd> Hint · <kbd>R</kbd> Reveal · <kbd>P</kbd> Pause
      </p>

      <button type="button" className="hub-btn gd-launch" onClick={onLaunch}>Engage orbital battle{best > 0 ? ` · best ${best}` : ''}</button>
    </div>
  )
}

// ─── Battle ──────────────────────────────────────────────────────────────────

function Battle({ questions, ship, active, sfx, onComplete, best }) {
  const canvasRef = useRef(null)
  const stageRef = useRef(null)
  const actions = useRef({})
  const sfxRef = useRef(sfx)
  const doneRef = useRef(onComplete)
  const activeRef = useRef(active)
  useEffect(() => { sfxRef.current = sfx; doneRef.current = onComplete; activeRef.current = active })

  const [hud, setHud] = useState({ lives: ship.lives, score: 0, streak: 0, qi: 0, charges: START_CHARGES, mode: 'fly', frozen: false })
  const [flash, setFlash] = useState(null)
  const [toast, setToast] = useState(null)
  const [paused, setPaused] = useState(false)
  const [speaking, setSpeaking] = useState(false)

  const total = questions.length
  const q = questions[Math.min(hud.qi, total - 1)]

  // Stop reading aloud when the question changes or the game closes.
  useEffect(() => {
    setSpeaking(false)
    try { window.speechSynthesis?.cancel() } catch { /* unsupported */ }
  }, [hud.qi])
  useEffect(() => () => { try { window.speechSynthesis?.cancel() } catch { /* unsupported */ } }, [])

  const readAloud = () => {
    if (!('speechSynthesis' in window)) return
    if (speaking) { window.speechSynthesis.cancel(); setSpeaking(false); return }
    const u = new SpeechSynthesisUtterance(`${q.q}. ${q.options.map((o, i) => `Option ${i + 1}: ${o}`).join('. ')}`)
    u.onend = () => setSpeaking(false)
    u.onerror = () => setSpeaking(false)
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(u)
    setSpeaking(true)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const stage = stageRef.current
    const ctx = canvas.getContext('2d')
    const n = questions.length

    const g = {
      W: 0, H: 0, started: false, finished: false, paused: false,
      shipX: 0, targetX: 0, keys: { l: false, r: false }, cd: 0, pending: false, pendingT: 0, aim: null,
      drones: [], bullets: [], parts: [],
      stars: Array.from({ length: 90 }, () => ({ x: Math.random(), y: Math.random(), z: Math.random() })),
      qi: 0, mode: 'fly', holdT: 0, endAfter: false, showCorrect: false,
      freezeT: 0, hintT: 0, shake: 0, t: 0,
      lives: ship.lives, score: 0, streak: 0, bestStreak: 0,
      charges: { ...START_CHARGES }, assisted: false, wrongHits: 0, pickedWrong: null,
      review: [],
    }
    let toastTimer = null
    const say = (name) => sfxRef.current?.(name)
    const lethalY = () => g.H - 86
    const shipY = () => g.H - 42

    const sync = () => setHud({
      lives: g.lives, score: g.score, streak: g.streak, qi: g.qi,
      charges: { ...g.charges }, mode: g.mode, frozen: g.freezeT > 0,
    })
    const showToast = (text) => {
      setToast(text)
      clearTimeout(toastTimer)
      toastTimer = setTimeout(() => setToast(null), 1100)
    }

    // ── layout ──
    const layout = (d) => {
      const opts = questions[g.qi].options.length
      const laneW = g.W / opts
      d.w = Math.min(laneW - 10, 230)
      d.fs = clamp(laneW / 16, 10.5, 13)
      ctx.font = `600 ${d.fs}px system-ui, sans-serif`
      d.lines = wrapText(ctx, d.text, d.w - 20, g.W < 520 ? 7 : 4)
      d.h = 30 + d.lines.length * (d.fs + 4) + 6
    }

    const spawn = (qi) => {
      const qq = questions[qi]
      g.qi = qi
      g.drones = qq.options.map((text, i) => ({
        id: i, lane: i, text, correct: i === qq.correct, alive: true,
        x: 0, y: 0, w: 0, h: 0, fs: 12, lines: [], sway: Math.random() * 6.28, mul: 0.94 + Math.random() * 0.12,
      }))
      g.drones.forEach((d) => { layout(d); d.y = -d.h - Math.random() * g.H * 0.06 })
      g.mode = 'fly'
      g.showCorrect = false
      g.wrongHits = 0
      g.pickedWrong = null
      g.assisted = false
      g.hintT = 0
      g.freezeT = 0
      g.bullets = []
      g.aim = null
      g.pending = false
      setFlash(null)
      sync()
    }

    const resize = () => {
      const r = stage.getBoundingClientRect()
      if (r.width < 50 || r.height < 50) return // hidden by a keep-alive host
      const W = Math.round(r.width)
      const H = Math.round(r.height)
      const dpr = Math.min(2, window.devicePixelRatio || 1)
      if (g.started && W === g.W && H === g.H) return
      const rx = g.W ? W / g.W : 1
      const ry = g.H ? H / g.H : 1
      g.shipX *= rx
      g.targetX *= rx
      g.drones.forEach((d) => { d.y *= ry })
      g.W = W
      g.H = H
      canvas.width = W * dpr
      canvas.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (!g.started) {
        g.started = true
        g.shipX = g.targetX = W / 2
        spawn(0)
      } else {
        g.drones.forEach(layout)
      }
    }

    // ── effects ──
    const boom = (x, y, color, count = 24) => {
      for (let i = 0; i < count; i++) {
        const a = Math.random() * Math.PI * 2
        const sp = 40 + Math.random() * 220
        g.parts.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 0.5 + Math.random() * 0.5, max: 1, color, size: 1.5 + Math.random() * 2.5 })
      }
    }

    // ── actions ──
    const fire = () => {
      if (g.mode !== 'fly' || g.cd > 0 || g.paused) return
      g.bullets.push({ x: g.shipX, y: shipY() - 26, prev: shipY() - 26 })
      g.cd = ship.cooldown
      say('laser')
    }

    const resolve = (status, d, pts = 0) => {
      if (g.mode !== 'fly') return
      const qq = questions[g.qi]
      g.mode = 'between'
      if (status === 'missed') {
        g.lives -= 1
        g.streak = 0
        g.shake = 10
        boom(d.x, d.y + d.h, '#f87171', 30)
        say('wrong')
      } else if (status === 'revealed') {
        g.streak = 0
        say('select')
      }
      g.showCorrect = status !== 'correct'
      g.review[g.qi] = { q: qq, status, picked: g.pickedWrong, points: pts }
      g.endAfter = g.lives <= 0 || g.qi >= n - 1
      g.holdT = status === 'correct' ? (qq.explanation ? 2 : 1) : 3.2
      const titles = {
        correct: `Target destroyed +${pts}`,
        wrong: g.lives <= 0 ? 'Shields down' : 'Right target, but a shield was lost',
        missed: 'Defense line breached  −1 shield',
        revealed: 'Answer revealed',
      }
      setFlash({ tone: status === 'correct' ? 'good' : 'bad', status, title: titles[status], answer: qq.options[qq.correct], explanation: qq.explanation, last: g.endAfter })
      sync()
    }

    const hitDrone = (d) => {
      d.alive = false
      if (d.correct) {
        const clean = g.wrongHits === 0
        let pts = 25
        let status = 'wrong'
        if (clean) {
          const alt = 1 - clamp((d.y + d.h) / lethalY(), 0, 1)
          const mult = Math.min(5, 1 + Math.floor(g.streak / 3))
          pts = Math.round((100 + alt * 80) * mult * (g.assisted ? 0.5 : 1))
          g.streak += 1
          g.bestStreak = Math.max(g.bestStreak, g.streak)
          status = 'correct'
        }
        g.score += pts
        boom(d.x, d.y + d.h / 2, '#34d399', 34)
        say(clean ? 'correct' : 'explode')
        resolve(status, d, pts)
      } else {
        g.wrongHits += 1
        if (g.pickedWrong === null) g.pickedWrong = d.id
        g.lives -= 1
        g.streak = 0
        g.shake = 8
        boom(d.x, d.y + d.h / 2, '#f87171', 22)
        say('wrong')
        if (g.lives <= 0) resolve('wrong', d, 0)
        else { showToast('Wrong target  −1 shield'); sync() }
      }
    }

    const advance = () => {
      if (g.mode !== 'between') return
      if (g.endAfter) finish()
      else spawn(g.qi + 1)
    }

    const finish = () => {
      if (g.finished) return
      g.finished = true
      g.mode = 'over'
      const review = questions.map((qq, i) => g.review[i] || { q: qq, status: 'unseen', picked: null, points: 0 })
      const resolved = review.filter((r) => r.status !== 'unseen')
      doneRef.current({
        won: g.lives > 0,
        score: g.score,
        correct: resolved.filter((r) => r.status === 'correct').length,
        total: Math.max(1, resolved.length),
        missed: resolved.filter((r) => r.status !== 'correct').map((r) => r.q),
        review,
        bestStreak: g.bestStreak,
      })
    }

    const emp = () => {
      if (g.mode !== 'fly' || g.charges.emp < 1) return
      const wrong = shuffle(g.drones.filter((d) => d.alive && !d.correct)).slice(0, 2)
      if (!wrong.length) return
      wrong.forEach((d) => { d.alive = false; boom(d.x, d.y + d.h / 2, '#a78bfa', 26) })
      g.charges.emp -= 1
      g.assisted = true
      say('power')
      showToast('EMP — two wrong drones disabled')
      sync()
    }
    const freeze = () => {
      if (g.mode !== 'fly' || g.charges.freeze < 1 || g.freezeT > 0) return
      g.charges.freeze -= 1
      g.freezeT = 6
      g.assisted = true
      say('power')
      showToast('Freeze — drones halted for 6s')
      sync()
    }
    const hint = () => {
      if (g.mode !== 'fly' || g.charges.hint < 1) return
      g.charges.hint -= 1
      g.hintT = 5
      g.assisted = true
      say('power')
      sync()
    }
    const reveal = () => {
      if (g.mode !== 'fly') return
      const d = g.drones.find((x) => x.correct && x.alive)
      if (d) resolve('revealed', d, 0)
    }
    const togglePause = () => {
      if (g.finished) return
      g.paused = !g.paused
      setPaused(g.paused)
    }
    const aimAt = (clientX) => {
      const r = canvas.getBoundingClientRect()
      g.targetX = clamp(((clientX - r.left) * g.W) / r.width, 24, g.W - 24)
      g.aim = null
    }
    actions.current = {
      emp, freeze, hint, reveal, next: advance, pause: togglePause,
      move: (e) => { if (!g.keys.l && !g.keys.r) aimAt(e.clientX) },
      shoot: (e) => {
        if (g.paused) return
        aimAt(e.clientX)
        g.pending = true
        g.pendingT = 1.2
      },
    }

    // ── input ──
    const typing = (el) => el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName))
    const onKeyDown = (e) => {
      if (!activeRef.current || g.finished) return
      if (e.metaKey || e.ctrlKey || e.altKey || typing(e.target)) return
      const k = e.key.toLowerCase()
      if (k === 'p' || (k === 'escape' && !document.fullscreenElement)) { togglePause(); return }
      if (g.paused) return
      if (k === 'arrowleft' || k === 'a') { g.keys.l = true; g.aim = null; e.preventDefault() }
      else if (k === 'arrowright' || k === 'd') { g.keys.r = true; g.aim = null; e.preventDefault() }
      else if (k === ' ' || k === 'enter') {
        if (e.target?.tagName === 'BUTTON') return
        e.preventDefault()
        if (g.mode === 'fly' && k === ' ') fire()
        else if (g.mode === 'between') advance()
      }
      else if (k === 'e') emp()
      else if (k === 'f') freeze()
      else if (k === 'h') hint()
      else if (k === 'r') reveal()
      else if (k.length === 1 && '123456'.includes(k)) {
        const d = g.drones.find((x) => x.lane === Number(k) - 1 && x.alive)
        if (d && g.mode === 'fly') { g.aim = d.lane; g.pending = true; g.pendingT = 3 }
      }
    }
    const onKeyUp = (e) => {
      const k = e.key.toLowerCase()
      if (k === 'arrowleft' || k === 'a') g.keys.l = false
      if (k === 'arrowright' || k === 'd') g.keys.r = false
    }
    const onVisibility = () => { if (document.hidden && !g.paused && !g.finished) togglePause() }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    document.addEventListener('visibilitychange', onVisibility)
    const ro = new ResizeObserver(resize)
    ro.observe(stage)
    resize()

    // ── update ──
    const update = (dt) => {
      g.t += dt
      const slow = g.freezeT > 0 ? 0.2 : 1
      g.stars.forEach((s) => { s.y += (0.01 + s.z * 0.04) * dt * slow; if (s.y > 1) { s.y = 0; s.x = Math.random() } })
      g.cd = Math.max(0, g.cd - dt)
      g.shake = Math.max(0, g.shake - dt * 30)
      g.freezeT = Math.max(0, g.freezeT - dt)
      g.hintT = Math.max(0, g.hintT - dt)

      // ship
      const dir = (g.keys.r ? 1 : 0) - (g.keys.l ? 1 : 0)
      if (dir) {
        g.shipX += dir * ship.speed * dt
        g.targetX = g.shipX
      } else {
        if (g.aim !== null) {
          const d = g.drones.find((x) => x.lane === g.aim && x.alive)
          if (d) g.targetX = d.x
          else g.aim = null
        }
        const dx = g.targetX - g.shipX
        const step = ship.speed * 2.5 * dt
        g.shipX += Math.abs(dx) <= step ? dx : Math.sign(dx) * step
      }
      g.shipX = clamp(g.shipX, 24, g.W - 24)
      g.targetX = clamp(g.targetX, 24, g.W - 24)

      if (g.pending) {
        g.pendingT -= dt
        if (g.pendingT <= 0) g.pending = false
        else if (Math.abs(g.shipX - g.targetX) < 10 && g.mode === 'fly' && g.cd <= 0) { fire(); g.pending = false }
      }

      // drones
      const opts = questions[g.qi].options.length
      const laneW = g.W / opts
      const v = g.H * (0.055 + Math.min(g.qi, 14) * 0.0033) * (g.freezeT > 0 ? 0 : 1)
      for (const d of g.drones) {
        if (!d.alive) continue
        d.x = laneW * (d.lane + 0.5) + Math.sin(g.t * 1.1 + d.sway) * Math.min(10, laneW * 0.06)
        if (g.mode === 'fly') d.y += v * d.mul * dt
      }
      if (g.mode === 'fly') {
        for (const d of g.drones) {
          if (!d.alive || d.y + d.h < lethalY()) continue
          if (d.correct) { d.alive = false; resolve('missed', d) ; break }
          d.alive = false
          boom(d.x, d.y + d.h, '#64748b', 10)
        }
      }

      // bullets
      for (const b of g.bullets) { b.prev = b.y; b.y -= 1100 * dt }
      if (g.mode === 'fly') {
        for (const b of g.bullets) {
          if (g.mode !== 'fly') break
          let hit = null
          for (const d of g.drones) {
            if (!d.alive || Math.abs(b.x - d.x) > d.w / 2) continue
            if (b.y <= d.y + d.h && b.prev >= d.y && (!hit || d.y + d.h > hit.y + hit.h)) hit = d
          }
          if (hit) { b.dead = true; hitDrone(hit) }
        }
      }
      g.bullets = g.bullets.filter((b) => !b.dead && b.y > -30)

      // particles
      for (const p of g.parts) { p.x += p.vx * dt; p.y += p.vy * dt; p.vx *= 0.98; p.vy *= 0.98; p.life -= dt }
      g.parts = g.parts.filter((p) => p.life > 0)

      if (g.mode === 'between') {
        g.holdT -= dt
        if (g.holdT <= 0) advance()
      }
    }

    // ── draw ──
    const drawDrone = (d) => {
      const x = d.x - d.w / 2
      let stroke = '#22d3ee'
      let fill = 'rgba(10,20,45,0.93)'
      let alpha = 1
      let glow = 0
      if (g.freezeT > 0) stroke = '#93c5fd'
      if (g.mode === 'between') {
        if (d.correct && g.showCorrect) { stroke = '#34d399'; fill = 'rgba(6,64,44,0.96)'; glow = 18 }
        else if (!d.correct) alpha = 0.3
      } else if (g.hintT > 0 && d.correct) {
        stroke = '#fbbf24'
        glow = 12 + Math.sin(g.t * 8) * 8
      }
      ctx.save()
      ctx.globalAlpha = alpha
      // thruster
      ctx.fillStyle = 'rgba(251,146,60,0.8)'
      ctx.beginPath()
      ctx.moveTo(d.x - 8, d.y)
      ctx.lineTo(d.x + 8, d.y)
      ctx.lineTo(d.x, d.y - 8 - Math.random() * 6)
      ctx.fill()
      ctx.shadowColor = stroke
      ctx.shadowBlur = glow
      roundRect(ctx, x, d.y, d.w, d.h, 10)
      ctx.fillStyle = fill
      ctx.fill()
      ctx.lineWidth = glow ? 2.5 : 1.5
      ctx.strokeStyle = stroke
      ctx.stroke()
      ctx.shadowBlur = 0
      // number badge
      ctx.fillStyle = stroke
      ctx.beginPath()
      ctx.arc(x + 14, d.y + 14, 9, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = '#04060f'
      ctx.font = '700 11px system-ui, sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText(String(d.lane + 1), x + 14, d.y + 18)
      // text
      ctx.fillStyle = '#e2e8f0'
      ctx.font = `600 ${d.fs}px system-ui, sans-serif`
      d.lines.forEach((line, i) => ctx.fillText(line, d.x, d.y + 38 + i * (d.fs + 4)))
      ctx.restore()
    }

    const drawShip = () => {
      const x = g.shipX
      const y = shipY()
      ctx.save()
      if (g.mode === 'fly') {
        ctx.setLineDash([4, 8])
        ctx.strokeStyle = 'rgba(148,163,184,0.15)'
        ctx.beginPath()
        ctx.moveTo(x, y - 30)
        ctx.lineTo(x, 0)
        ctx.stroke()
        ctx.setLineDash([])
      }
      ctx.translate(x, y)
      ctx.fillStyle = 'rgba(251,146,60,0.85)'
      ctx.beginPath()
      ctx.moveTo(-6, 14)
      ctx.lineTo(6, 14)
      ctx.lineTo(0, 24 + Math.random() * 8)
      ctx.fill()
      ctx.shadowColor = ship.color
      ctx.shadowBlur = 14
      ctx.fillStyle = ship.color
      ctx.beginPath()
      ctx.moveTo(0, -26)
      ctx.lineTo(10, -4)
      ctx.lineTo(22, 16)
      ctx.lineTo(8, 12)
      ctx.lineTo(0, 18)
      ctx.lineTo(-8, 12)
      ctx.lineTo(-22, 16)
      ctx.lineTo(-10, -4)
      ctx.closePath()
      ctx.fill()
      ctx.shadowBlur = 0
      ctx.fillStyle = '#fff'
      ctx.beginPath()
      ctx.arc(0, -4, 3.5, 0, Math.PI * 2)
      ctx.fill()
      if (g.lives > 3) {
        ctx.strokeStyle = 'rgba(251,191,36,0.4)'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(0, 0, 34, 0, Math.PI * 2)
        ctx.stroke()
      }
      ctx.restore()
    }

    const draw = () => {
      const { W, H } = g
      if (!W) return
      ctx.save()
      if (g.shake > 0) ctx.translate((Math.random() - 0.5) * g.shake, (Math.random() - 0.5) * g.shake)
      const bg = ctx.createLinearGradient(0, 0, 0, H)
      bg.addColorStop(0, '#04060f')
      bg.addColorStop(1, '#101a3a')
      ctx.fillStyle = bg
      ctx.fillRect(-20, -20, W + 40, H + 40)
      g.stars.forEach((s) => {
        ctx.globalAlpha = 0.25 + s.z * 0.6
        ctx.fillStyle = '#fff'
        ctx.fillRect(s.x * W, s.y * H, 1 + s.z * 1.5, 1 + s.z * 1.5)
      })
      ctx.globalAlpha = 1
      // defense line
      ctx.setLineDash([8, 8])
      ctx.strokeStyle = 'rgba(248,113,113,0.3)'
      ctx.beginPath()
      ctx.moveTo(0, lethalY())
      ctx.lineTo(W, lethalY())
      ctx.stroke()
      ctx.setLineDash([])
      ctx.textAlign = 'center'
      g.drones.forEach((d) => { if (d.alive) drawDrone(d) })
      ctx.fillStyle = '#fef08a'
      g.bullets.forEach((b) => { ctx.shadowColor = '#fde047'; ctx.shadowBlur = 8; ctx.fillRect(b.x - 1.5, b.y, 3, 14) })
      ctx.shadowBlur = 0
      g.parts.forEach((p) => { ctx.globalAlpha = clamp(p.life / p.max, 0, 1); ctx.fillStyle = p.color; ctx.fillRect(p.x, p.y, p.size, p.size) })
      ctx.globalAlpha = 1
      drawShip()
      if (g.freezeT > 0) { ctx.fillStyle = 'rgba(125,211,252,0.08)'; ctx.fillRect(0, 0, W, H) }
      ctx.restore()
    }

    let raf
    let last = performance.now()
    const frame = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      if (activeRef.current && g.started) {
        if (!g.paused && !g.finished) update(dt)
        draw()
      }
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
      document.removeEventListener('visibilitychange', onVisibility)
      ro.disconnect()
      clearTimeout(toastTimer)
    }
    // The round is fixed for the lifetime of this component (McqGame remounts per run).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const mult = Math.min(5, 1 + Math.floor(hud.streak / 3))
  const canAct = hud.mode === 'fly' && !paused
  const hasSpeech = typeof window !== 'undefined' && 'speechSynthesis' in window

  return (
    <div className="gd">
      <div className="gm-stats">
        <span className="gm-hearts" aria-label={`${hud.lives} shields left`}>
          {Array.from({ length: Math.max(ship.lives, hud.lives) }, (_, i) => (
            <span key={i} className={i < hud.lives ? 'is-on' : 'is-off'}>{i < hud.lives ? '🛡️' : '▫️'}</span>
          ))}
        </span>
        <Stat label="Score" value={hud.score} tone="gold" />
        {hud.streak > 1 && <Stat label="Streak" value={`🔥 ${hud.streak} · ×${mult}`} tone="hot" />}
        {best > 0 && <Stat label="Best" value={best} />}
        <Stat label="Question" value={`${Math.min(hud.qi + 1, total)}/${total}`} />
        <button type="button" className="gm-icon-btn" onClick={() => actions.current.pause?.()} aria-label={paused ? 'Resume' : 'Pause'} title="Pause (P)">
          {paused ? <Play size={16} /> : <Pause size={16} />}
        </button>
      </div>

      <div className="hub-card gd-q">
        <p className="gd-q__text">{q.q}</p>
        <div className="gd-q__tools">
          {hasSpeech && (
            <button type="button" className="gm-reveal" onClick={readAloud} aria-pressed={speaking}>
              <Volume2 size={13} /> {speaking ? 'Stop reading' : 'Read aloud'}
            </button>
          )}
          <button type="button" className="gm-reveal gd-reveal" disabled={!canAct} onClick={() => actions.current.reveal?.()}>
            <Eye size={13} /> Reveal answer <kbd>R</kbd>
          </button>
        </div>
      </div>

      <div className="gd-stage" ref={stageRef}>
        <canvas
          ref={canvasRef}
          aria-label="Galactic Defense play field"
          onPointerMove={(e) => actions.current.move?.(e)}
          onPointerDown={(e) => actions.current.shoot?.(e)}
        />
        {toast && <div className="gd-toast">{toast}</div>}
        {hud.frozen && <div className="gd-chip">❄️ Frozen</div>}

        {flash && (
          <div className={`gd-flash is-${flash.tone}`} role="status">
            <div className="gd-flash__title">{flash.tone === 'good' ? '✅' : flash.status === 'revealed' ? '👁' : '❌'} {flash.title}</div>
            {flash.status !== 'correct' && <div className="gd-flash__ans">Correct answer: <strong>{flash.answer}</strong></div>}
            {flash.explanation && <div className="gd-flash__why">{flash.explanation}</div>}
            <button type="button" className="hub-btn gd-flash__next" onClick={() => actions.current.next?.()}>
              <SkipForward size={14} /> {flash.last ? 'Finish' : 'Next'}
            </button>
          </div>
        )}

        {paused && (
          <div className="gd-pause">
            <p>Paused</p>
            <button type="button" className="hub-btn" onClick={() => actions.current.pause?.()}><Play size={14} /> Resume</button>
          </div>
        )}
      </div>

      <div className="gd-lifelines" role="group" aria-label="Lifelines">
        <button type="button" className="gd-life" disabled={!canAct || hud.charges.emp < 1} onClick={() => actions.current.emp?.()} title="Disable two wrong drones (E)">
          <Zap size={15} /> EMP <span>{hud.charges.emp}</span>
        </button>
        <button type="button" className="gd-life" disabled={!canAct || hud.charges.freeze < 1 || hud.frozen} onClick={() => actions.current.freeze?.()} title="Halt all drones for 6 seconds (F)">
          <Snowflake size={15} /> Freeze <span>{hud.charges.freeze}</span>
        </button>
        <button type="button" className="gd-life" disabled={!canAct || hud.charges.hint < 1} onClick={() => actions.current.hint?.()} title="Mark the correct drone for 5 seconds (H)">
          <Lightbulb size={15} /> Hint <span>{hud.charges.hint}</span>
        </button>
      </div>
      <p className="gm-hint">Aim with mouse/touch or A·D, fire with click or Space, 1–{q.options.length} auto-targets a drone. Lifelines halve that question’s points.</p>
    </div>
  )
}
