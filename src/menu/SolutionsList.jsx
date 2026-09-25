import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllCachedSolutions } from '../Searchlist'

const styles = `
.sl-wrap {
  padding:  24px;
  padding-bottom:150px;
  color: #eef2ff;
}
.sl-head {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 4px;
}
.sl-head-icon {
  width: 34px; height: 34px; flex: none;
  filter: drop-shadow(0 0 6px rgba(34,211,238,0.55));
}
.sl-eyebrow {
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 700;
  background: linear-gradient(90deg, #22d3ee, #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;
}
.sl-title { margin: 2px 0 18px; font-size: 22px; font-weight: 800; }
.sl-search {
  display: flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(148,163,255,0.18);
  border-radius: 14px;
  padding: 10px 14px;
  margin-bottom: 16px;
}
.sl-search input {
  background: transparent; border: none; outline: none;
  color: #eef2ff; font-size: 13px; width: 100%;
}
.sl-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 12px;
}
.sl-card {
  position: relative;
  cursor: pointer;
  border-radius: 16px;
  padding: 16px;
  background: linear-gradient(160deg, rgba(34,211,238,0.07), rgba(167,139,250,0.07));
  border: 1px solid rgba(148,163,255,0.16);
  overflow: hidden;
  transition: transform .18s ease, border-color .18s ease, box-shadow .18s ease;
}
.sl-card:hover {
  transform: translateY(-3px);
  border-color: rgba(103,232,249,0.55);
  box-shadow: 0 10px 30px rgba(34,211,238,0.15);
}
.sl-card::before {
  content: "";
  position: absolute; inset: 0;
  border-radius: 16px;
  padding: 1px;
  background: linear-gradient(120deg, #22d3ee, #a78bfa, #22d3ee);
  background-size: 220% 220%;
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity .18s ease;
  animation: sl-flow 4s linear infinite;
}
.sl-card:hover::before { opacity: 1; }
@keyframes sl-flow { to { background-position: 220% 50%; } }
.sl-card-top { display: flex; align-items: flex-start; gap: 10px; }
.sl-card-icon { width: 22px; height: 22px; flex: none; margin-top: 2px; color: #67e8f9; }
.sl-card-name {
  font-weight: 700; font-size: 14px; line-height: 1.3;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
}
.sl-card-meta { margin-top: 10px; font-size: 11px; color: rgba(238,242,255,0.55); display: flex; justify-content: space-between; }
.sl-empty {
  text-align: center; padding: 60px 20px; color: rgba(238,242,255,0.6);
}
.sl-empty svg { width: 64px; height: 64px; margin-bottom: 14px; opacity: 0.8; }
`

function timeAgo(ts) {
  if (!ts) return ''
  const s = Math.floor((Date.now() - ts) / 1000)
  if (s < 60) return 'just now'
  if (s < 3600) return `${Math.floor(s / 60)}m ago`
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`
  return `${Math.floor(s / 86400)}d ago`
}

export default function SolutionsList() {
  const [items, setItems] = useState([])
  const [term, setTerm] = useState('')
  const navigate = useNavigate()

  // Reading from localStorage is synchronous and never network-bound, so
  // this list — and every click in it — is available immediately, even
  // while some other part of the app is mid-fetch behind the global loader.
  useEffect(() => {
    setItems(getAllCachedSolutions())
  }, [])

  const filtered = useMemo(() => {
    const q = term.trim().toLowerCase()
    if (!q) return items
    return items.filter((it) => (it.courseName || '').toLowerCase().includes(q))
  }, [items, term])

  return (
    <div className="sl-wrap">
      <style>{styles}</style>
      <div className="sl-head">
        <svg className="sl-head-icon" viewBox="0 0 24 24" fill="none">
          <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H15l5 5v13.5A2.5 2.5 0 0 1 17.5 23h-11A2.5 2.5 0 0 1 4 20.5v-16Z"
            stroke="#22d3ee" strokeWidth="1.4" />
          <path d="M15 2v4.5A1.5 1.5 0 0 0 16.5 8H20" stroke="#a78bfa" strokeWidth="1.4" />
          <path d="M8 13h8M8 17h5" stroke="#a78bfa" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <div>
          <p className="sl-eyebrow">Locally saved</p>
        </div>
      </div>
      <h2 className="sl-title">Your solutions</h2>

      <div className="sl-search">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.6, flex: 'none' }}>
          <circle cx="11" cy="11" r="7" stroke="#eef2ff" strokeWidth="1.6" />
          <path d="m20 20-3.2-3.2" stroke="#eef2ff" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <input
          placeholder="Filter your saved solutions by course…"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="sl-empty">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H15l5 5v13.5A2.5 2.5 0 0 1 17.5 23h-11A2.5 2.5 0 0 1 4 20.5v-16Z"
              stroke="#a78bfa" strokeWidth="1.2" />
            <path d="M15 2v4.5A1.5 1.5 0 0 0 16.5 8H20" stroke="#22d3ee" strokeWidth="1.2" />
          </svg>
          <div>
            {items.length === 0
              ? "You haven't opened a solution yet — once you do, it'll be saved here for instant, offline access."
              : 'No saved solutions match that search.'}
          </div>
        </div>
      ) : (
        <div className="sl-grid">
          {filtered.map((it) => (
            <div
              key={it.namedfile}
              className="sl-card"
              onClick={() => navigate(`/dashboard/solution/${it.namedfile}`)}
            >
              <div className="sl-card-top">
                <svg className="sl-card-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H15l5 5v13.5A2.5 2.5 0 0 1 17.5 23h-11A2.5 2.5 0 0 1 4 20.5v-16Z"
                    stroke="currentColor" strokeWidth="1.4" />
                  <path d="M15 2v4.5A1.5 1.5 0 0 0 16.5 8H20" stroke="currentColor" strokeWidth="1.4" />
                </svg>
                <div className="sl-card-name">{it.courseName || 'Untitled solution'}</div>
              </div>
              <div className="sl-card-meta">
                <span>{it.dataerror ? 'Had an issue' : 'Ready to view'}</span>
                <span>{timeAgo(it.savedAt)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
