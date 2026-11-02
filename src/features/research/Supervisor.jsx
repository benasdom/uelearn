import { useState } from 'react'
import { makeId } from '../../lib/localStore'
import { download } from '../../lib/research/store'
import { health } from '../../lib/research/planner'
import { copy } from './ui'

const today = () => new Date().toISOString().slice(0, 10)

export default function Supervisor({ project: p, update, toast }) {
  const [fb, setFb] = useState({ text: '', chapter: '' })
  const [dc, setDc] = useState({ decision: '', reason: '', by: '' })
  const [mt, setMt] = useState({ date: today(), notes: '' })
  const [act, setAct] = useState({})
  const lastMeeting = p.meetings[0]
  const carry = p.meetings.flatMap((m) => m.actions.filter((a) => !a.done))
  const open = p.feedback.filter((f) => !f.resolved)

  const packet = () => {
    const h = health(p), since = lastMeeting ? new Date(lastMeeting.date).getTime() : 0
    return `Supervision packet — ${p.title}\nProgress ${h.overall}% · chapters: ${p.chapters.map((c) => `${c.name} (${c.status})`).join(', ')}\n\nSince last meeting${lastMeeting ? ` (${lastMeeting.date})` : ''}:\n- ${p.papers.filter((x) => x.addedAt > since).length} papers added, ${p.claims.length} claims tracked\n- Open comments: ${open.length}\n\nOutstanding actions:\n${carry.map((a) => `- [ ] ${a.text}`).join('\n') || '- none'}\n\nQuestions for you:\n${open.slice(0, 5).map((f) => `- ${f.chapter ? f.chapter + ': ' : ''}${f.text}`).join('\n') || '- none'}\n\nDecisions on record:\n${p.decisions.slice(0, 5).map((d) => `- ${d.date} ${d.decision} (${d.reason})`).join('\n') || '- none'}\n`
  }

  return (
    <>
      <div className="rs-card rs-row sb"><span><b>Supervision hub</b><p className="rs-mute" style={{ margin: 0 }}>Everything your supervisor said, decided and asked — remembered. Share a packet before each meeting.</p></span>
        <span className="rs-row"><button className="hub-btn rs-btn-sm" onClick={async () => toast((await copy(packet())) ? 'Packet copied — paste into email/WhatsApp' : 'Copy failed')}>Copy meeting packet</button>
          <button className="hub-btn hub-btn-ghost rs-btn-sm" onClick={() => download(`${p.title}-supervision.md`, packet())}>Download</button></span></div>

      <div className="rs-grid" style={{ marginTop: 12 }}>
        <div className="rs-card rs-stack"><h3>Feedback tracker · {open.length} open</h3>
          <div className="rs-row"><input className="hub-input" style={{ flex: 1 }} placeholder="Paste a supervisor comment…" value={fb.text} onChange={(e) => setFb({ ...fb, text: e.target.value })} />
            <select className="hub-select" style={{ width: 'auto' }} value={fb.chapter} onChange={(e) => setFb({ ...fb, chapter: e.target.value })}><option value="">Any chapter</option>{p.chapters.map((c) => <option key={c.id}>{c.name}</option>)}</select>
            <button className="hub-btn rs-btn-sm" disabled={!fb.text.trim()} onClick={() => { update((x) => ({ ...x, feedback: [{ id: makeId(), date: today(), text: fb.text.trim(), chapter: fb.chapter, resolved: false }, ...x.feedback] })); setFb({ text: '', chapter: '' }) }}>Add</button></div>
          <div className="rs-list">{p.feedback.map((f) => (
            <div key={f.id} className={`rs-item rs-row sb ${f.resolved ? 'done' : ''}`}>
              <label><input type="checkbox" checked={f.resolved} onChange={() => update((x) => ({ ...x, feedback: x.feedback.map((q) => (q.id === f.id ? { ...q, resolved: !q.resolved } : q)) }), { xp: f.resolved ? 0 : 3 })} /> {f.chapter && <span className="rs-chip">{f.chapter}</span>} {f.text}<small> · {f.date}</small></label>
              <span className="rs-row"><button className="hub-btn hub-btn-ghost rs-btn-sm" title="Record as a research decision" onClick={() => { setDc({ decision: f.text, reason: '', by: 'Supervisor' }); toast('Moved to the decision log — add the reason') }}>→ Decision</button>
                <button className="hub-btn hub-btn-ghost rs-btn-sm" aria-label="Delete" onClick={() => update((x) => ({ ...x, feedback: x.feedback.filter((q) => q.id !== f.id) }))}>✕</button></span></div>))}</div>
        </div>

        <div className="rs-card rs-stack"><h3>Research decision log</h3>
          <p className="rs-mute">Why did we choose X and reject Y? Written once, defensible forever (and gold for your viva).</p>
          <input className="hub-input" placeholder="Decision (e.g. Do not use Instrument X)" value={dc.decision} onChange={(e) => setDc({ ...dc, decision: e.target.value })} />
          <input className="hub-input" placeholder="Reason" value={dc.reason} onChange={(e) => setDc({ ...dc, reason: e.target.value })} />
          <div className="rs-row"><input className="hub-input" style={{ flex: 1 }} placeholder="Decided by" value={dc.by} onChange={(e) => setDc({ ...dc, by: e.target.value })} />
            <button className="hub-btn rs-btn-sm" disabled={!dc.decision.trim()} onClick={() => { update((x) => ({ ...x, decisions: [{ id: makeId(), date: today(), ...dc }, ...x.decisions] }), { xp: 2 }); setDc({ decision: '', reason: '', by: '' }) }}>Log</button></div>
          <div className="rs-list">{p.decisions.map((d) => <div key={d.id} className="rs-item rs-row sb"><span><b>{d.decision}</b><div className="rs-mute">{d.reason || 'No reason recorded'} · {d.by || '—'} · {d.date}</div></span>
            <button className="hub-btn hub-btn-ghost rs-btn-sm" aria-label="Delete" onClick={() => update((x) => ({ ...x, decisions: x.decisions.filter((q) => q.id !== d.id) }))}>✕</button></div>)}</div>
        </div>

        <div className="rs-card rs-stack span"><h3>Meetings &amp; action items</h3>
          {carry.length > 0 && <div className="rs-item"><b>Carried over from earlier meetings</b>{carry.map((a) => <div key={a.id}>☐ {a.text}</div>)}</div>}
          <div className="rs-row"><input className="hub-input" type="date" style={{ width: 150 }} value={mt.date} onChange={(e) => setMt({ ...mt, date: e.target.value })} />
            <input className="hub-input" style={{ flex: 1 }} placeholder="What was discussed / decided?" value={mt.notes} onChange={(e) => setMt({ ...mt, notes: e.target.value })} />
            <button className="hub-btn rs-btn-sm" disabled={!mt.notes.trim()} onClick={() => { update((x) => ({ ...x, meetings: [{ id: makeId(), ...mt, actions: [] }, ...x.meetings] }), { xp: 2 }); setMt({ date: today(), notes: '' }) }}>Save meeting</button></div>
          {p.meetings.map((m) => (
            <div key={m.id} className="rs-item rs-stack"><div className="rs-row sb"><b>{m.date}</b><button className="hub-btn hub-btn-ghost rs-btn-sm" aria-label="Delete meeting" onClick={() => update((x) => ({ ...x, meetings: x.meetings.filter((q) => q.id !== m.id) }))}>✕</button></div>
              <div>{m.notes}</div>
              {m.actions.map((a) => <label key={a.id} className={a.done ? 'rs-mute' : ''}><input type="checkbox" checked={a.done} onChange={() => update((x) => ({ ...x, meetings: x.meetings.map((q) => (q.id === m.id ? { ...q, actions: q.actions.map((z) => (z.id === a.id ? { ...z, done: !z.done } : z)) } : q)) }), { xp: 1 })} /> {a.text}</label>)}
              <div className="rs-row"><input className="hub-input" style={{ flex: 1 }} placeholder="+ action item" value={act[m.id] || ''} onChange={(e) => setAct({ ...act, [m.id]: e.target.value })}
                onKeyDown={(e) => { if (e.key === 'Enter' && (act[m.id] || '').trim()) { update((x) => ({ ...x, meetings: x.meetings.map((q) => (q.id === m.id ? { ...q, actions: [...q.actions, { id: makeId(), text: act[m.id].trim(), done: false }] } : q)) })); setAct({ ...act, [m.id]: '' }) } }} /></div></div>))}
        </div>
      </div>
    </>
  )
}
