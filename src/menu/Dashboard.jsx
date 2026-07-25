import React, { useEffect, useState } from 'react'
import { domain, fetchWithAuth } from './authfetch'
import coins from '/imgs/coin.png'
import { getFromLocalStorage, setToLocalStorage } from './fromlocal'
import VerifyOTP from './reverfifyotp'
import './styles/Dashboard.css'

const Dashboard = () => {
  const [userscore, setuserscore] = useState(null)
  const [maxscore, setmaxscore] = useState(0)
  const [earning, setearning] = useState(null)
  const [storedval, setstoredval] = useState(null)
  const [showprofile, setshowprofile] = useState(false)
  const [showVerify, setShowVerify] = useState(false)

  const streakUrl = domain + '/api/v1/user/streak'
  const walletUrl = domain + '/api/v1/user/wallet'

  useEffect(() => {
    const storeddata = getFromLocalStorage('userInfo', {})
    setstoredval(storeddata)

    // Show cached values immediately while fetching
    setuserscore(storeddata?.streakScore ?? 0)
    setmaxscore(storeddata?.highestStreakScore ?? 0)

    const accessToken = storeddata?.accessToken
    const refreshToken = storeddata?.refreshToken

    if (!accessToken || !refreshToken) return

    // POST to record today's visit.
    // Backend is idempotent — safe to call on every app load.
    // No body needed; backend derives everything from the user's lastActiveDate.
    fetchWithAuth(
      streakUrl,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      },
      refreshToken
    )
      .then((data) => {
        const score = data?.streakScore ?? 0
        const highest = data?.highestStreakScore ?? 0

        setuserscore(score)
        setmaxscore(highest)

        // Sync localStorage with authoritative server values
        const updated = {
          ...storeddata,
          streakScore: score,
          highestStreakScore: highest,
          lastActiveDate: data?.lastActiveDate ?? storeddata.lastActiveDate,
        }
        setToLocalStorage('userInfo', updated)
        setstoredval(updated)
      })
      .catch((err) => {
        // Network failure — cached values already shown above, just log the error
        console.error('Streak update failed:', err)
      })

    // Fetch wallet balance independently
    fetchWithAuth(walletUrl, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((data) => setearning(data?.balance ?? null))
      .catch((err) => {
        console.error('Error fetching wallet:', err)
        setearning(null)
      })
  }, []) // Runs once on mount

  const initials = [storedval?.firstName?.[0], storedval?.lastName?.[0]]
    .filter(Boolean)
    .join('')
    .toUpperCase()

  return (
    <div className="db-card">
      {showVerify && (
        <VerifyOTP
          onSuccess={() => {
            setShowVerify(false)
            const updated = {
              ...getFromLocalStorage('userInfo', {}),
              isVerified: true,
            }
            setToLocalStorage('userInfo', updated)
            setstoredval(updated)
          }}
          onClose={() => setShowVerify(false)}
        />
      )}

      <div className="db-dotgrid" aria-hidden="true" />
      <div className="db-glow" aria-hidden="true" />

      <button
        type="button"
        className="db-trigger"
        onClick={() => setshowprofile((v) => !v)}
      >
        <span className="db-avatar">
          {initials || <i className="fa fa-user" />}
        </span>
        <span className="db-trigger-text">
          {showprofile ? 'Back to overview' : 'Wallet & streak'}
        </span>
        <i
          className={`fa fa-chevron-${showprofile ? 'left' : 'right'} db-trigger-chevron`}
          aria-hidden="true"
        />
      </button>

      {!showprofile ? (
        <div className="db-overview db-fade-in-up" key="overview">
          <div className="db-level-row">
            <div className="db-level-col">
              <span className="db-eyebrow">Level</span>
              <span className="db-level-name">Rookie level</span>
            </div>
            <div className="db-level-col db-level-col-end">
              <span className="db-eyebrow">Badge</span>
              <span className="db-badge">🥈</span>
            </div>
          </div>

          <div className="db-streak-card">
            <div className="db-streak-title">⚡ Streak</div>
            <div className="db-streak-stats">
              <div className="db-stat">
                <span className="db-stat-label">Streak score</span>
                <span className="db-stat-value">{userscore ?? 0}</span>
              </div>
              <div className="db-stat-divider" />
              <div className="db-stat">
                <span className="db-stat-label">Highest streak</span>
                <span className="db-stat-value">{maxscore ?? 0}</span>
              </div>
            </div>
            <div className="db-stars" aria-hidden="true">
              {'⭐'.repeat(10)}
            </div>
          </div>

          <div className="db-wallet-card">
            <img src={coins} className="db-wallet-backdrop" alt="" aria-hidden="true" />
            <div className="db-wallet-label">
              <span className="db-icon-chip db-icon-chip-light">💰</span>
              Earned
            </div>
            <div className="db-wallet-value">
              GHS {earning == null ? '—' : earning}
            </div>
          </div>
        </div>
      ) : (
        <div className="db-profile db-fade-in-up" key="profile">
          <div className="db-panel">
            <div className="db-panel-title">
              <span className="db-icon-chip">
                <i className="fa fa-plus" />
              </span>
              Extras
            </div>

            <div className="db-field">
              <span className="db-field-icon">
                <i className="fa fa-check" />
              </span>
              <div className="db-field-body">
                <span className="db-field-label">User status</span>
                <div className="db-status-row">
                  {storedval?.isVerified ? (
                    <span className="db-status db-status-success">OTP Verified</span>
                  ) : (
                    <span className="db-status db-status-danger">Not verified</span>
                  )}
                  {!storedval?.isVerified && (
                    <button
                      type="button"
                      className="db-verify-btn"
                      onClick={() => setShowVerify(true)}
                    >
                      Verify
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="db-field">
              <span className="db-field-icon">
                <i className="fa fa-calendar-check" />
              </span>
              <div className="db-field-body">
                <span className="db-field-label">Last active</span>
                <span className="db-field-value">
                  {storedval?.lastActiveDate
                    ? new Date(storedval.lastActiveDate).toLocaleDateString()
                    : 'N/A'}
                </span>
              </div>
            </div>

            <div className="db-field">
              <span className="db-field-icon">
                <i className="fa fa-calendar" />
              </span>
              <div className="db-field-body">
                <span className="db-field-label">Date created</span>
                <span className="db-field-value">
                  {storedval?.dateCreated
                    ? new Date(storedval.dateCreated).toLocaleDateString()
                    : 'N/A'}
                </span>
              </div>
            </div>
          </div>

          <div className="db-panel">
            <div className="db-panel-title">
              <span className="db-icon-chip">
                <i className="fa fa-user" />
              </span>
              Profile details
            </div>

            <div className="db-grid-2">
              <div className="db-field">
                <span className="db-field-icon">
                  <i className="fa fa-person" />
                </span>
                <div className="db-field-body">
                  <span className="db-field-label">First name</span>
                  <span className="db-field-value">{storedval?.firstName ?? ''}</span>
                </div>
              </div>
              <div className="db-field">
                <span className="db-field-icon">
                  <i className="fa fa-person" />
                </span>
                <div className="db-field-body">
                  <span className="db-field-label">Last name</span>
                  <span className="db-field-value">{storedval?.lastName ?? ''}</span>
                </div>
              </div>
            </div>

            <div className="db-field db-field-wide">
              <span className="db-field-icon">
                <i className="fa fa-envelope" />
              </span>
              <div className="db-field-body">
                <span className="db-field-label">Email</span>
                <span className="db-field-value">{storedval?.email ?? ''}</span>
              </div>
            </div>

            <div className="db-panel-title db-panel-title-sub">
              <span className="db-icon-chip">
                <i className="fa fa-zap" />
              </span>
              User credits
            </div>
            <div className="db-field db-field-wide">
              <span className="db-field-icon">
                <i className="fa fa-zap" />
              </span>
              <div className="db-field-body">
                <span className="db-field-label">Remaining credits</span>
                <span className="db-field-value">{storedval?.credits ?? 0}</span>
              </div>
            </div>

            <div className="db-panel-title db-panel-title-sub">
              <span className="db-icon-chip">
                <i className="fa fa-phone" />
              </span>
              Phone
            </div>
            <div className="db-field db-field-wide">
              <span className="db-field-icon">
                <i className="fa fa-phone" />
              </span>
              <div className="db-field-body">
                <span className="db-field-label">Contact number</span>
                <span className="db-field-value">{storedval?.msisdn ?? ''}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard