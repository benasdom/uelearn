import { useEffect, useState } from 'react'
import { getFromLocalStorage } from '../menu/fromlocal'
import { getActivity } from '../lib/activity'
import { computeAchievements } from '../lib/achievements'

const TIER_COLORS = {
  gold: ['#fde68a', '#f59e0b', '#fff7cc'],
  silver: ['#e2e8f0', '#94a3b8', '#f8fafc'],
  bronze: ['#22d3ee', '#a78bfa', '#e0f2fe'], // cyan → violet, per house style
}

const RADIUS = 30
const CIRC = 2 * Math.PI * RADIUS

function Badge({ achievement, index }) {
  const { unlocked, tier, pct, name, description, progress, goal } = achievement
  const gid = `ach-grad-${index}`
  const glowId = `ach-glow-${index}`
  const [stops1, stops2] = TIER_COLORS[tier] || TIER_COLORS.bronze

  return (
    <div className={`ach-badge ${unlocked ? 'is-unlocked' : 'is-locked'}`} title={description}>
      <svg viewBox="0 0 80 80" className="ach-badge__svg">
        <defs>
          <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={stops1} />
            <stop offset="100%" stopColor={stops2} />
          </linearGradient>
          <filter id={glowId} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* progress / unlocked ring */}
        <circle
          cx="40" cy="40" r={RADIUS}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="4"
        />
        <circle
          className={unlocked ? 'ach-badge__ring ach-badge__ring--spin' : 'ach-badge__ring'}
          cx="40" cy="40" r={RADIUS}
          fill="none"
          stroke={`url(#${gid})`}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={CIRC}
          strokeDashoffset={CIRC - (CIRC * pct) / 100}
          transform="rotate(-90 40 40)"
          filter={unlocked ? `url(#${glowId})` : undefined}
        />

        {/* medallion face */}
        <circle cx="40" cy="40" r={RADIUS - 8} fill="#0b0d14" stroke="rgba(255,255,255,0.06)" />

        {unlocked ? (
          <path
            className="ach-badge__spark"
            d="M40 17c1.4 7 3.7 11.6 7.2 15.1S54.8 37.6 61 39c-6.2 1.4-10.3 3.5-13.8 7S41 55.1 40 62c-1-6.9-3.7-11.6-7.2-15.1S25.2 40.4 19 39c6.2-1.4 10.3-3.5 13.8-7S39 24 40 17Z"
            fill={`url(#${gid})`}
          />
        ) : (
          <path
            d="M40 30a7 7 0 0 0-7 7v3h-1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V42a2 2 0 0 0-2-2h-1v-3a7 7 0 0 0-7-7Zm0 3.4a3.6 3.6 0 0 1 3.6 3.6v3h-7.2v-3A3.6 3.6 0 0 1 40 33.4Z"
            fill="rgba(255,255,255,0.28)"
          />
        )}
      </svg>

      <div className="ach-badge__name">{name}</div>
      <div className="ach-badge__meta">
        {unlocked ? 'Unlocked' : `${progress}/${goal}`}
      </div>
    </div>
  )
}

export default function Achievements() {
  const [stats, setStats] = useState({ highestStreak: 0, cardsReviewed: 0, mockTestsTaken: 0, generations: 0 })

  useEffect(() => {
    const userInfo = getFromLocalStorage('userInfo', {})
    const activity = getActivity()
    setStats({
      highestStreak: userInfo?.highestStreakScore ?? 0,
      cardsReviewed: activity.cardsReviewed || 0,
      mockTestsTaken: activity.mockTestsTaken || 0,
      generations: activity.generations || 0,
    })
  }, [])

  const achievements = computeAchievements(stats)
  const unlockedCount = achievements.filter((a) => a.unlocked).length

  return (
    <div className="ach-wrap">
      <div className="ach-head">
        <div>
          <p className="hub-eyebrow">Milestones</p>
          <h3 className="ach-title">Achievements</h3>
        </div>
        <div className="ach-count">{unlockedCount}<span>/{achievements.length}</span></div>
      </div>
      <div className="ach-grid">
        {achievements.map((a, i) => <Badge key={a.key} achievement={a} index={i} />)}
      </div>
    </div>
  )
}
