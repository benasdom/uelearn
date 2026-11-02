import { useState } from 'react'
import { claimLabel, whyDiffer } from '../../lib/research/insights'
import { studyLabel, inText } from '../../lib/research/citations'
import { makeId } from '../../lib/localStore'
import { copy } from './ui'

const LABELS = ['Verified', 'Contextual', 'Inference', 'Unverified', 'Conflict']
const TONE = { Verified: 'ok', Contextual: 'info', Inference: 'warn', Unverified: 'bad', Conflict: 'bad' }
const MEANING = { Verified: 'Directly supported by 2+ sources', Contextual: 'Supported under specific conditions', Inference: 'Your reasoning across sources', Unverified: 'No source evidence yet', Conflict: 'Sources disagree' }

export default function Evidence({ project: p, update, toast }) {
  const [text, setText] = useState('')
  const [draft, setDraft] = useState({})
  const setClaim = (id, fn, xp = 0) => update((x) => ({ ...x, claims: x.claims.map((c) => (c.id === id ? fn(c) : c)) }), { xp })
  const paper = (id) => p.papers.find((x) => x.id === id)

  const addEv = (c) => {
    const d = draft[c.id] || {}
    if (!d.paperId) return toast('Pick a paper first.')
    setClaim(c.id, (x) => ({ ...x, evidence: [...x.evidence, { id: makeId(), paperId: d.paperId, stance: d.stance || 'supports', passage: (d.passage || '').trim() }] }), 3)
    setDraft({ ...draft, [c.id]: { stance: d.stance } })
  }

  return (
    <>
      <div className="rs-card rs-stack"><h3>Claim → evidence → citation</h3>
        <p className="rs-mute">Write each important claim, attach the papers (and passages) that support, contradict or qualify it. The Lab labels how well-evidenced it is and explains why studies disagree.</p>
        <div className="rs-row"><input className="hub-input" style={{ flex: 1 }} placeholder="e.g. Social anxiety is associated with fear of negative evaluation." value={text} onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && text.trim()) { update((x) => ({ ...x, claims: [{ id: makeId(), text: text.trim(), label: '', evidence: [] }, ...x.claims] }), { xp: 1 }); setText('') } }} />
          <button className="hub-btn" disabled={!text.trim()} onClick={() => { update((x) => ({ ...x, claims: [{ id: makeId(), text: text.trim(), label: '', evidence: [] }, ...x.claims] }), { xp: 1 }); setText('') }}>Add claim</button></div>
      </div>
      {!p.claims.length && <div className="hub-empty">No claims yet.</div>}
      <div className="rs-list" style={{ marginTop: 12 }}>
        {p.claims.map((c) => {
          const auto = claimLabel(c), label = c.label || auto
          const by = (s) => c.evidence.filter((e) => e.stance === s)
          const diffs = whyDiffer(by('supports').map((e) => paper(e.paperId)).filter(Boolean), by('contradicts').map((e) => paper(e.paperId)).filter(Boolean))
          const d = draft[c.id] || {}
          return (
            <div key={c.id} className="rs-card rs-stack">
              <div className="rs-row sb"><b>{c.text}</b><button className="hub-btn hub-btn-ghost rs-btn-sm" aria-label="Delete claim" onClick={() => update((x) => ({ ...x, claims: x.claims.filter((q) => q.id !== c.id) }))}>✕</button></div>
              <div className="rs-row">
                <select className="hub-select" style={{ width: 'auto' }} value={label} onChange={(e) => setClaim(c.id, (x) => ({ ...x, label: e.target.value === auto ? '' : e.target.value }))}>{LABELS.map((l) => <option key={l}>{l}</option>)}</select>
                <span className={`rs-chip ${TONE[label]}`}>{MEANING[label]}</span>
                <span className="rs-chip ok">{by('supports').length} support</span><span className="rs-chip bad">{by('contradicts').length} contradict</span><span className="rs-chip info">{by('qualifies').length} qualify</span>
              </div>
              {['supports', 'contradicts', 'qualifies'].map((s) => by(s).length > 0 && (
                <div key={s} className="rs-stack">{by(s).map((e) => { const pp = paper(e.paperId); return (
                  <div key={e.id} className="rs-item rs-row sb"><span><b>{s}</b> · {pp ? studyLabel(pp) : 'removed paper'}{e.passage && <div className="rs-quote">“{e.passage}”</div>}</span>
                    <button className="hub-btn hub-btn-ghost rs-btn-sm" onClick={() => setClaim(c.id, (x) => ({ ...x, evidence: x.evidence.filter((q) => q.id !== e.id) }))}>✕</button></div>) })}</div>))}
              {diffs.length > 0 && <div className="rs-item"><b>Why results may differ</b>{diffs.map((x) => <p key={x} className="rs-mute" style={{ margin: '4px 0 0' }}>• {x}</p>)}</div>}
              <div className="rs-row">
                <select className="hub-select" style={{ flex: '1 1 180px', width: 'auto' }} value={d.paperId || ''} onChange={(e) => setDraft({ ...draft, [c.id]: { ...d, paperId: e.target.value } })}><option value="">Attach a paper…</option>{p.papers.map((x) => <option key={x.id} value={x.id}>{studyLabel(x)} — {x.title.slice(0, 40)}</option>)}</select>
                <select className="hub-select" style={{ width: 'auto' }} value={d.stance || 'supports'} onChange={(e) => setDraft({ ...draft, [c.id]: { ...d, stance: e.target.value } })}><option>supports</option><option>contradicts</option><option>qualifies</option></select>
              </div>
              <input className="hub-input" placeholder="Exact passage from the paper (optional but powerful)" value={d.passage || ''} onChange={(e) => setDraft({ ...draft, [c.id]: { ...d, passage: e.target.value } })} />
              <div className="rs-row"><button className="hub-btn rs-btn-sm" onClick={() => addEv(c)}>Attach evidence</button>
                <button className="hub-btn hub-btn-ghost rs-btn-sm" disabled={!by('supports').length} onClick={async () => { const cites = by('supports').map((e) => paper(e.paperId)).filter(Boolean).map(inText).join(' ').replace(/\) \(/g, '; ').replace(/[()]/g, ''); toast((await copy(`${c.text.replace(/\.$/, '')} (${cites}).`)) ? 'Cited sentence copied' : 'Copy failed') }}>Copy cited sentence</button></div>
            </div>)
        })}
      </div>
    </>
  )
}
