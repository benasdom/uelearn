// Blocking notice shown when any authenticated request comes back
// 403 ACCOUNT_SUSPENDED. authfetch.js dispatches `auth:account-suspended`
// ({ detail: { reason } }); this listens once, app-wide, and covers the screen
// so a suspended user isn't left clicking around a half-working app.

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { logout } from './menu/authfetch'

export default function SuspendedNotice() {
  const [state, setState] = useState(null) // { reason } | null

  useEffect(() => {
    const onSuspended = (e) => setState({ reason: e.detail?.reason || '' })
    window.addEventListener('auth:account-suspended', onSuspended)
    return () => window.removeEventListener('auth:account-suspended', onSuspended)
  }, [])

  if (!state) return null

  const signOut = async () => {
    await logout() // always clears local state, even if the network call fails
    window.location.assign('/login')
  }

  return (
    <div role="alertdialog" aria-modal="true" aria-labelledby="suspended-title" style={S.backdrop}>
      <div style={S.card}>
        <div style={S.icon} aria-hidden="true">⛔</div>
        <h2 id="suspended-title" style={S.title}>Your account has been suspended</h2>
        {state.reason && (
          <p style={S.reason}>
            <span style={S.reasonLabel}>Reason</span>
            {state.reason}
          </p>
        )}
        <p style={S.body}>Contact support if you believe this is a mistake.</p>
        <div style={S.actions}>
          <Link to="/contact" style={S.primary} onClick={() => setState(null)}>Contact support</Link>
          <button type="button" style={S.secondary} onClick={signOut}>Log out</button>
        </div>
      </div>
    </div>
  )
}

const S = {
  backdrop: { position: 'fixed', inset: 0, zIndex: 100000, background: 'rgba(8,8,12,.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 },
  card: { width: '100%', maxWidth: 420, background: '#111115', border: '1px solid #2a2a38', borderRadius: 16, padding: '28px 24px', textAlign: 'center', color: '#e8e8f0', boxShadow: '0 24px 60px rgba(0,0,0,.6)' },
  icon: { fontSize: 34, marginBottom: 8 },
  title: { margin: '0 0 12px', fontSize: 20, fontWeight: 600 },
  reason: { margin: '0 0 12px', padding: '10px 12px', borderRadius: 10, background: '#1c1014', border: '1px solid #4c1d24', color: '#fca5a5', fontSize: 13, lineHeight: 1.5, textAlign: 'left' },
  reasonLabel: { display: 'block', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.08em', color: '#f87171', marginBottom: 3 },
  body: { margin: '0 0 20px', fontSize: 13, color: '#8b8ba0' },
  actions: { display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' },
  primary: { padding: '9px 18px', borderRadius: 10, background: '#4f46e5', color: '#fff', fontSize: 13, textDecoration: 'none' },
  secondary: { padding: '9px 18px', borderRadius: 10, background: 'transparent', border: '1px solid #2a2a38', color: '#c0c0cc', fontSize: 13, cursor: 'pointer' },
}
