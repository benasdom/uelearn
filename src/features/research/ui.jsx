import { useState } from 'react'
// Tiny shared bits for the Research Lab panels.
export const lines = (s) => s.split('\n').map((x) => x.trim()).filter(Boolean)

export function Field({ label, children }) {
  return <label className="rs-field">{label}{children}</label>
}

/** Textarea that stores one item per line but only commits on blur (so typing never fights state). */
export function LinesField({ label, value, onChange, placeholder }) {
  const [draft, setDraft] = useState(null)
  return (
    <Field label={label}>
      <textarea className="hub-textarea" rows={3} placeholder={placeholder}
        value={draft ?? value.join('\n')} onChange={(e) => setDraft(e.target.value)}
        onBlur={() => { if (draft !== null) onChange(lines(draft)); setDraft(null) }} />
    </Field>
  )
}

export const Bar = ({ pct }) => <div className="rs-bar"><i style={{ width: `${Math.max(0, Math.min(100, pct))}%` }} /></div>
export const Metric = ({ label, pct }) => (
  <div className="rs-metric"><span>{label}</span><Bar pct={pct} /><b>{Math.round(pct)}%</b></div>
)

export function Ring({ pct }) {
  const r = 44, c = 2 * Math.PI * r
  return (
    <svg viewBox="0 0 108 108" className="rs-ring" role="img" aria-label={`${pct}% complete`}>
      <defs><linearGradient id="rs-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#22d3ee" /><stop offset="1" stopColor="#a78bfa" /></linearGradient></defs>
      <circle cx="54" cy="54" r={r} fill="none" stroke="rgba(128,128,128,.2)" strokeWidth="9" />
      <circle cx="54" cy="54" r={r} fill="none" stroke="url(#rs-g)" strokeWidth="9" strokeLinecap="round"
        strokeDasharray={c} strokeDashoffset={c - (c * pct) / 100} transform="rotate(-90 54 54)" />
      <text x="54" y="62" textAnchor="middle">{pct}%</text>
    </svg>
  )
}

export async function copy(text) {
  try { await navigator.clipboard.writeText(text); return true } catch { return false }
}
