import rbadge from '../../public/imgs/leader.png'
import racoonleaderboard from '../../public/imgs/racoon_leaderboard.jpg'
import racoonrun from '../../public/imgs/racoon_goldmedal.jpg'
import { ThunderboltFilled } from '@ant-design/icons'
import { useState } from 'react'
import './styles/Leaderboard.css'

const Leaderboard = () => {
  const [position, setposition] = useState(0)

  return (
    <div className="lb-card">
      <div className="lb-dotgrid" aria-hidden="true" />
      <div className="lb-glow" aria-hidden="true" />

      <div className="lb-banner">
        <img src={racoonleaderboard} className="lb-banner-img" alt="" />
        <div className="lb-banner-overlay" aria-hidden="true" />
        <img src={rbadge} className="lb-badge" alt="" />
        <div className="lb-title">🏁 Leaderboard</div>
      </div>

      <div className="lb-position">
        You came{' '}
        <span className="lb-position-value">
          {position || '—'}
          <sup>
            {position
              ? position > 3
                ? 'th'
                : position > 2
                ? 'rd'
                : position > 1
                ? 'nd'
                : 'st'
              : ''}
          </sup>
        </span>
      </div>

      <div className="lb-list">
        {Array(10)
          .fill('')
          .map((_, b) => {
            const rank = b + 1
            const isTop3 = rank <= 3

            return (
              <div
                className={`lb-row${isTop3 ? ` lb-row-top lb-row-top-${rank}` : ''}`}
                key={'' + b}
              >
                <div className="lb-row-rank">
                  {rank === 1 ? (
                    <img src={racoonrun} className="lb-row-medal" alt="1st place" />
                  ) : (
                    <span className="lb-row-rank-number">{rank}</span>
                  )}
                </div>

                <div className="lb-row-body">
                  <div className="lb-row-name">Benjamin</div>
                  <div className="lb-row-date">{new Date().toISOString().slice(0, 10)}</div>
                </div>

                <div className="lb-row-end">
                  <span className="lb-icon-chip">
                    <ThunderboltFilled />
                  </span>
                  <span className="lb-rank-chip">{rank}</span>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Leaderboard