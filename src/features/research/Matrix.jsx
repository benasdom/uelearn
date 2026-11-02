import { useMemo, useState } from 'react'
import { REGIONS, logAi } from '../../lib/research/store'
import { blindSpots, dist, } from '../../lib/research/insights'
import { findDuplicates, studyLabel, STYLES } from '../../lib/research/citations'
import { checkRetractions } from '../../lib/research/scholar'
import { askTutor } from '../../lib/aiConversation'
import { loadState, saveState, makeId } from '../../lib/localStore'
import { initialCardState } from '../../lib/spacedRepetition'
import { Bar, copy } from './ui'

const STATUS = ['to-read', 'reading', 'analysed']
const COLS = [['country', 'Country'], ['design', 'Design'], ['sample', 'Sample'], ['method', 'Instrument / method'], ['finding', 'Key finding'], ['limitation', 'Limitation']]

export default function Matrix({ project: p, update, toast }) {
  const [f, setF] = useState({ text: '', status: '', region: '' })
  const [open, setOpen] = useState(null)
  const [ai, setAi] = useState({ id: null, busy: false, text: '', err: null })
  const [newCol, setNewCol] = useState('')
  const rows = useMemo(() => p.papers.filter((x) => {
    const hay = [x.title, x.finding, x.method, x.country, x.design, studyLabel(x)].join(' ').toLowerCase()
    return (!f.text || hay.includes(f.text.toLowerCase())) && (!f.status || x.status === f.status) && (!f.region || x.region === f.region)
  }), [p.papers, f])
  const gaps = useMemo(() => blindSpots(p.papers, p.targetRegion), [p.papers, p.targetRegion])
  const dups = useMemo(() => findDuplicates(p.papers), [p.papers])
  const edit = (id, patch) => update((x) => ({ ...x, papers: x.papers.map((q) => (q.id === id ? { ...q, ...patch } : q)) }))
  const editCustom = (id, k, v) => update((x) => ({ ...x, papers: x.papers.map((q) => (q.id === id ? { ...q, custom: { ...q.custom, [k]: v } } : q)) }))
  const setStatus = (id, status) => update((x) => ({ ...x, papers: x.papers.map((q) => (q.id === id ? { ...q, status } : q)) }), { xp: status === 'analysed' ? 3 : 0 })

  const retractions = async () => {
    try {
      const bad = await checkRetractions(p.papers)
      update((x) => ({ ...x, papers: x.papers.map((q) => ({ ...q, retracted: q.retracted || bad.has(q.doi) })) }))
      toast(bad.size ? `⚠ ${bad.size} retracted paper(s) found` : '✓ No retractions found')
    } catch (e) { toast(e.message) }
  }
  const flashcards = () => {
    const cards = p.papers.filter((x) => x.finding).map((x) => ({ id: makeId(), front: `What did ${studyLabel(x)} find?`, back: `${x.finding}${x.limitation ? `\nLimitation: ${x.limitation}` : ''}`, srs: initialCardState() }))
    if (!cards.length) return toast('Fill in “Key finding” for some papers first.')
    saveState('flashcard-decks', [{ id: makeId(), name: `${p.title} — literature`, cards }, ...loadState('flashcard-decks', [])])
    toast(`Created a flashcard deck with ${cards.length} cards`)
  }
  const explain = async (r) => {
    if (!p.policy.summarise && !window.confirm('Your course AI policy does not allow AI summarising. Continue anyway?')) return
    setAi({ id: r.id, busy: true, text: '', err: null })
    try {
      const { qa } = await askTutor(`Explain this research paper simply for a first-year student, then say what it contributes: "${r.title}". ${r.abstract.slice(0, 900)}`)
      update((x) => logAi(x, 'AI Tutor', `Explained “${r.title.slice(0, 50)}”`, 'requested'))
      setAi({ id: r.id, busy: false, text: qa.map((x) => x.a).join('\n\n'), err: null })
    } catch (e) { setAi({ id: r.id, busy: false, text: '', err: e.message }) }
  }
  const decide = (r, keep) => {
    update((x) => logAi({ ...x, papers: x.papers.map((q) => (q.id === r.id && keep ? { ...q, notes: `${q.notes}\n[AI explanation — verify against the paper]\n${ai.text}`.trim() } : q)) }, 'AI Tutor', `Explanation of “${r.title.slice(0, 50)}”`, keep ? 'accepted' : 'rejected'))
    setAi({ id: null, busy: false, text: '', err: null })
  }

  if (!p.papers.length) return <div className="hub-empty">Your matrix is empty. Use <b>Discover</b> to find papers, or capture a DOI in the Overview inbox.</div>
  const regions = dist(p.papers, (x) => x.region)

  return (
    <>
      <div className="rs-grid">
        <div className="rs-card"><h3>Evidence base · {p.papers.length} papers</h3>
          {regions.map((r) => <div key={r.label} className="rs-metric"><span>{r.label}</span><Bar pct={(r.n / p.papers.length) * 100} /><b>{r.n}</b></div>)}
          <label className="rs-row">Target context <select className="hub-select" style={{ width: 'auto' }} value={p.targetRegion} onChange={(e) => update((x) => ({ ...x, targetRegion: e.target.value }))}>{REGIONS.slice(0, -1).map((r) => <option key={r}>{r}</option>)}</select></label>
        </div>
        <div className="rs-card"><h3>Research gap finder</h3>
          {gaps.note && <p className="rs-mute">{gaps.note}</p>}
          {gaps.spots.length === 0 && !gaps.note && <p className="rs-mute">No major blind spots detected across {gaps.N} papers.</p>}
          {gaps.spots.map((s) => (
            <details key={s.title} className="rs-item" style={{ marginBottom: 6 }}>
              <summary><b>{s.title}</b> <span className="rs-chip">Confidence: {s.confidence}</span></summary>
              <p className="rs-mute" style={{ marginTop: 6 }}>{s.why}</p>
              <small>Based on: {s.papers.slice(0, 8).map(studyLabel).join('; ') || 'no matching studies'}{s.papers.length > 8 ? '…' : ''}</small>
            </details>))}
          <p className="rs-mute">Auditable: each flag lists the papers it came from. Gaps are leads to verify, not conclusions.</p>
        </div>
      </div>

      <div className="rs-row" style={{ marginBottom: 10 }}>
        <input className="hub-input" style={{ flex: '1 1 180px' }} placeholder="Filter: e.g. adolescents, regression…" value={f.text} onChange={(e) => setF({ ...f, text: e.target.value })} />
        <select className="hub-select" style={{ width: 'auto' }} value={f.status} onChange={(e) => setF({ ...f, status: e.target.value })}><option value="">All status</option>{STATUS.map((s) => <option key={s}>{s}</option>)}</select>
        <select className="hub-select" style={{ width: 'auto' }} value={f.region} onChange={(e) => setF({ ...f, region: e.target.value })}><option value="">All regions</option>{REGIONS.map((s) => <option key={s}>{s}</option>)}</select>
        <button className="hub-btn hub-btn-ghost rs-btn-sm" onClick={retractions}>Check retractions</button>
        <button className="hub-btn hub-btn-ghost rs-btn-sm" onClick={flashcards}>→ Flashcards</button>
        <input className="hub-input" style={{ width: 130 }} placeholder="+ custom column" value={newCol} onChange={(e) => setNewCol(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && newCol.trim()) { update((x) => ({ ...x, columns: [...x.columns, { key: makeId(), label: newCol.trim() }] })); setNewCol('') } }} />
      </div>
      {dups.length > 0 && <div className="hub-error">⚠ {dups.length} possible duplicate(s): {dups.slice(0, 3).map(([a, b]) => `${studyLabel(a)} ≈ ${studyLabel(b)}`).join('; ')}</div>}

      <div className="rs-scroll"><table>
        <thead><tr><th>Study</th><th>Region</th>{COLS.map(([, l]) => <th key={l}>{l}</th>)}{p.columns.map((c) => <th key={c.key}>{c.label}</th>)}<th>Rel.</th><th>Status</th><th /></tr></thead>
        <tbody>{rows.map((r) => (
          <tr key={r.id}>
            <td style={{ minWidth: 190 }}><b>{studyLabel(r)}</b> {r.retracted && <span className="rs-chip bad">retracted</span>} {r.oa?.isOa && '🟢'}<div className="rs-mute" style={{ fontSize: 11 }}>{r.title.slice(0, 70)}</div></td>
            <td><select value={r.region} onChange={(e) => edit(r.id, { region: e.target.value })}>{REGIONS.map((x) => <option key={x}>{x}</option>)}</select></td>
            {COLS.map(([k]) => <td key={k}><input value={r[k]} onChange={(e) => edit(r.id, { [k]: e.target.value })} /></td>)}
            {p.columns.map((c) => <td key={c.key}><input value={r.custom?.[c.key] || ''} onChange={(e) => editCustom(r.id, c.key, e.target.value)} /></td>)}
            <td style={{ width: 60 }}><select value={r.relevance} onChange={(e) => edit(r.id, { relevance: +e.target.value })}>{[1, 2, 3, 4, 5].map((n) => <option key={n}>{n}</option>)}</select></td>
            <td><select value={r.status} onChange={(e) => setStatus(r.id, e.target.value)}>{STATUS.map((s) => <option key={s}>{s}</option>)}</select></td>
            <td><button className="hub-btn hub-btn-ghost rs-btn-sm" onClick={() => setOpen(open === r.id ? null : r.id)}>⋯</button></td>
          </tr>))}</tbody>
      </table></div>

      {rows.filter((r) => r.id === open).map((r) => (
        <div key={r.id} className="rs-card rs-stack" style={{ marginTop: 12 }}>
          <h3>{r.title}</h3>
          <p className="rs-quote">{r.abstract || 'No abstract stored.'}</p>
          <textarea className="hub-textarea" placeholder="Your notes on this paper…" value={r.notes} onChange={(e) => edit(r.id, { notes: e.target.value })} />
          <div className="rs-row">
            <button className="hub-btn rs-btn-sm" disabled={ai.busy || !r.abstract} onClick={() => explain(r)}>{ai.busy && ai.id === r.id ? 'Thinking…' : '✨ Explain simply (uses credits)'}</button>
            <button className="hub-btn hub-btn-ghost rs-btn-sm" onClick={async () => toast((await copy(STYLES.APA(r))) ? 'APA copied' : 'Copy failed')}>Copy APA</button>
            <button className="hub-btn hub-btn-danger rs-btn-sm" onClick={() => { update((x) => ({ ...x, papers: x.papers.filter((q) => q.id !== r.id), claims: x.claims.map((c) => ({ ...c, evidence: c.evidence.filter((e) => e.paperId !== r.id) })) })); setOpen(null) }}>Remove</button>
          </div>
          {ai.err && ai.id === r.id && <div className="hub-error">{ai.err}</div>}
          {ai.text && ai.id === r.id && (<><div className="rs-pre">{ai.text}</div><small className="rs-mute">AI inference — not what the paper says. Verify before relying on it.</small>
            <div className="rs-row"><button className="hub-btn rs-btn-sm" onClick={() => decide(r, true)}>Keep in my notes</button><button className="hub-btn hub-btn-ghost rs-btn-sm" onClick={() => decide(r, false)}>Discard</button></div></>)}
        </div>))}
    </>
  )
}
