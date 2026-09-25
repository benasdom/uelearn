import { useEffect, useState } from 'react'
import {
  Sparkles, Clapperboard, Layers, Timer, Bookmark, CalendarDays,
  MessagesSquare, Flame, X,
} from 'lucide-react'
import { getFromLocalStorage } from '../menu/fromlocal'
import { getActivity } from '../lib/activity'
import { tierForStreak, nextTier, computeXp, levelForXp, xpForNextLevel } from '../lib/gamification'
import Flashcards from './Flashcards'
import MockTest from './MockTest'
import Library from './Library'
import Planner from './Planner'
import Discussions from './Discussions'
import ThemeToggle from './ThemeToggle'
import GeneratorStudio from './GeneratorStudio'
import MediaStudio from './MediaStudio'
import Achievements from './Achievements'
import './styles/hub.css'

const TILES = [
  { key: 'ai-generator', Icon: Sparkles,        label: 'Generator Studio', desc: 'Quizzes, tutor, podcast, chat & video' },
  { key: 'media-studio', Icon: Clapperboard,     label: 'AI Studio',        desc: 'Image & video generation' },
  { key: 'flashcards',   Icon: Layers,           label: 'Flashcards',       desc: 'Spaced-repetition decks' },
  { key: 'mocktest',     Icon: Timer,            label: 'Mock Tests',       desc: 'Timed practice runs' },
  { key: 'library',      Icon: Bookmark,         label: 'Library',          desc: 'Saved notes & bookmarks' },
  { key: 'planner',      Icon: CalendarDays,     label: 'Planner',          desc: 'Plan your study time' },
  { key: 'discussions',  Icon: MessagesSquare,   label: 'Discussions',      desc: 'Talk it through' },
]

// A ring of soft, slowly-drifting cyan/violet glow blobs behind the hero —
// pure decoration, GPU-cheap (opacity + transform only).
const AuroraBackdrop = () => (
  <svg className="hub-aurora" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
    <defs>
      <radialGradient id="hub-aurora-cyan" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="hub-aurora-violet" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle className="hub-aurora__blob hub-aurora__blob--a" cx="18" cy="20" r="26" fill="url(#hub-aurora-cyan)" />
    <circle className="hub-aurora__blob hub-aurora__blob--b" cx="85" cy="15" r="30" fill="url(#hub-aurora-violet)" />
    <circle className="hub-aurora__blob hub-aurora__blob--c" cx="60" cy="90" r="34" fill="url(#hub-aurora-cyan)" />
  </svg>
)

// Animated dual-tone progress ring for the level/XP summary — the stroke
// itself shimmers between cyan and violet via the gradient + a slow dash
// animation, instead of a flat fill bar.
const XpRing = ({ pct }) => {
  const r = 42
  const circ = 2 * Math.PI * r
  return (
    <svg viewBox="0 0 100 100" className="hub-xp-ring">
      <defs>
        <linearGradient id="hub-xp-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="7" />
      <circle
        cx="50" cy="50" r={r} fill="none"
        stroke="url(#hub-xp-grad)" strokeWidth="7" strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={circ - (circ * pct) / 100}
        transform="rotate(-90 50 50)"
        className="hub-xp-ring__arc"
      />
    </svg>
  )
}

export default function Hub({ onNavigate }) {
  const [view, setView] = useState(null)
  const [streakInfo, setStreakInfo] = useState({ highestStreakScore: 0 })
  const [activity, setActivity] = useState({ cardsReviewed: 0, mockTestsTaken: 0, generations: 0 })
  const [genSeed, setGenSeed] = useState(null) // { text, label } prefill when jumping in from a note

  useEffect(() => {
    setStreakInfo(getFromLocalStorage('userInfo', {}))
    setActivity(getActivity())
  }, [view]) // refresh summary whenever user returns to the hub

  const openGeneratorFromNote = (note) => {
    setGenSeed({ text: note.body, label: note.title })
    setView('ai-generator')
  }

  if (view === 'ai-generator') {
    return (
      <BackWrap onBack={() => { setGenSeed(null); setView(null) }}>
        <GeneratorStudio
          initialText={genSeed?.text || ''}
          initialSourceLabel={genSeed?.label || ''}
          onNavigate={(target) => { setGenSeed(null); setView(target) }}
        />
      </BackWrap>
    )
  }
  if (view === 'media-studio') return <BackWrap onBack={() => setView(null)}><MediaStudio /></BackWrap>
  if (view === 'flashcards') return <BackWrap onBack={() => setView(null)}><Flashcards /></BackWrap>
  if (view === 'mocktest') return <BackWrap onBack={() => setView(null)}><MockTest /></BackWrap>
  if (view === 'library') return <BackWrap onBack={() => setView(null)}><Library onGenerateFromNote={openGeneratorFromNote} /></BackWrap>
  if (view === 'planner') return <BackWrap onBack={() => setView(null)}><Planner /></BackWrap>
  if (view === 'discussions') return <BackWrap onBack={() => setView(null)}><Discussions /></BackWrap>

  const highestStreak = streakInfo?.highestStreakScore ?? 0
  const tier = tierForStreak(highestStreak)
  const upcoming = nextTier(highestStreak)
  const xp = computeXp({ highestStreak, ...activity })
  const level = levelForXp(xp)
  const xpFloor = xpForNextLevel(level - 1)
  const xpCeil = xpForNextLevel(level)
  const progressPct = Math.min(100, Math.round(((xp - xpFloor) / (xpCeil - xpFloor)) * 100))

  return (
    <div className="hub-page hub-page--full">

     

      <div className="hub-hero">
        <p className="hub-eyebrow">LEARNING HUB</p>
        <h2 className="hub-title hub-title--hero">Your progress</h2>

        <div className="hub-hero-grid">
          <div className="hub-card hub-card--glow hub-hero-main">
            <div className="hub-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div className="hub-xp-ring-wrap">
                  <XpRing pct={progressPct} />
                  <div className="hub-xp-ring-label">Lv {level}</div>
                </div>
                <div>
                  <div className="hub-tier-name">{tier.name}</div>
                  <div className="hub-tier-xp">{xp} XP</div>
                </div>
              </div>
              <div className="hub-badge-pill hub-badge-pill--flame">
                <Flame size={13} strokeWidth={2.4} /> {highestStreak}d best streak
              </div>
            </div>
            {upcoming && (
              <div className="hub-tier-next">
                {upcoming.min - highestStreak} more streak day{upcoming.min - highestStreak === 1 ? '' : 's'} to reach <strong>{upcoming.name}</strong>
              </div>
            )}
          </div>

          <div className="hub-card hub-card--glow hub-stat-card">
            <div className="hub-stat-num">{activity.cardsReviewed}</div>
            <div className="hub-stat-label">Cards reviewed</div>
          </div>
          <div className="hub-card hub-card--glow hub-stat-card">
            <div className="hub-stat-num">{activity.mockTestsTaken}</div>
            <div className="hub-stat-label">Mock tests taken</div>
          </div>
        </div>
      </div>

      <p className="hub-eyebrow hub-section-label">EXPLORE</p>
      <div className="hub-nav-grid hub-nav-grid--full">
        {TILES.map(({ key, Icon, label, desc }) => (
          <button key={key} className="hub-nav-tile hub-nav-tile--full" onClick={() => setView(key)}>
            <span className="hub-nav-tile-icon hub-nav-tile-icon--full">
              <Icon size={22} strokeWidth={1.7} />
            </span>
            <span className="hub-nav-tile-label">{label}</span>
            <span className="hub-nav-tile-desc">{desc}</span>
          </button>
        ))}
      </div>

      <Achievements />
    </div>
  )
}

function BackWrap({ children, onBack }) {
  return (
    <div className="hub-backwrap">
      <div className="hub-backwrap__bar">
        <button className="hub-btn hub-btn-ghost" onClick={onBack}>← Hub</button>
      </div>
      {children}
    </div>
  )
}
