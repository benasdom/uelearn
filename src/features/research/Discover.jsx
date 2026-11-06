import { useEffect, useRef, useState } from 'react'
import { searchWorks, lookupDoi } from '../../lib/research/scholar'
import { STYLES, studyLabel } from '../../lib/research/citations'
import { copy } from './ui'

export const addPaper = (x, paper) => (x.papers.some((q) => (q.doi && q.doi === paper.doi) || q.title.toLowerCase() === paper.title.toLowerCase()) ? x : { ...x, papers: [paper, ...x.papers] })

export default function Discover({ project: p, update, toast, seed }) {
  const [q, setQ] = useState(seed || '')
  const [oaOnly, setOa] = useState(false)
  const [from, setFrom] = useState('')
  const [state, setState] = useState({ status: 'idle', papers: [], total: 0, cached: false, error: null })
  const [open, setOpen] = useState(null)
  const ctl = useRef(null)
  const doSearch = async (query = q) => {
    const text = query.trim(); if (!text) return
    ctl.current?.abort(); ctl.current = new AbortController()
    setState((s) => ({ ...s, status: 'loading', error: null }))
    try {
      if (/^(https?:\/\/(dx\.)?doi\.org\/)?10\.\d{4,9}\/\S+$/i.test(text)) {
        const paper = await lookupDoi(text)
        setState({ status: 'done', papers: [paper], total: 1, cached: false, error: null })
      } else {
        const r = await searchWorks(text, { oaOnly, fromYear: from, signal: ctl.current.signal })
        setState({ status: 'done', ...r, error: null })
      }
    } catch (e) { if (e.name !== 'AbortError') setState((s) => ({ ...s, status: 'error', error: e.message })) }
  }
  useEffect(() => { if (seed) doSearch(seed); return () => ctl.current?.abort() }, []) // eslint-disable-line react-hooks/exhaustive-deps
  const have = (paper) => p.papers.some((x) => (x.doi && x.doi === paper.doi) || x.title === paper.title)
  const add = (paper) => { update((x) => addPaper(x, paper), { xp: 2 }); toast('Added to your literature matrix') }

  return (
    <>
      <div className="rs-card rs-stack">
        <h3>Evidence-backed discovery</h3>
        <p className="rs-mute">Search millions of scholarly works (OpenAlex) by question, keywords or DOI. Free — no credits. Open-access status and retractions are shown on every result.</p>
        <div className="rs-row"><input className="hub-input" style={{ flex: 1 }} placeholder="e.g. fear of negative evaluation social anxiety adolescents Ghana" value={q}
          onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && doSearch()} />
          <button className="hub-btn" disabled={state.status === 'loading'} onClick={() => doSearch()}>{state.status === 'loading' ? 'Searching…' : 'Search'}</button></div>
        <div className="rs-row">
          <label className="rs-row"><input type="checkbox" checked={oaOnly} onChange={(e) => setOa(e.target.checked)} /> Open access only</label>
          <label className="rs-row">Since <input className="hub-input" style={{ width: 80 }} inputMode="numeric" placeholder="2018" value={from} onChange={(e) => setFrom(e.target.value.replace(/\D/g, '').slice(0, 4))} /></label>
          {p.rq[0] && <button className="hub-btn hub-btn-ghost rs-btn-sm" onClick={() => { setQ(p.rq[0]); doSearch(p.rq[0]) }}>Use my research question</button>}
        </div>
      </div>
      {state.error && <div className="hub-error">{state.error}</div>}
      {state.cached && <p className="rs-mute" style={{ margin: '10px 0' }}>📴 Showing a saved copy of this search (offline or service unavailable).</p>}
      {state.status === 'done' && <p className="rs-mute" style={{ margin: '10px 0' }}>{state.total.toLocaleString()} result{state.total === 1 ? '' : 's'} · showing {state.papers.length}</p>}
      <div className="rs-list">
        {state.papers.map((r) => (
          <div key={r.id} className="rs-card">
            <div className="rs-row sb"><b style={{ fontSize: 14 }}>{r.title}</b>
              <button className="hub-btn rs-btn-sm" disabled={have(r)} onClick={() => add(r)}>{have(r) ? 'In matrix ✓' : '+ Add to matrix'}</button></div>
            <p className="rs-mute">{studyLabel(r)} · {r.venue || 'unknown venue'} · cited {r.cited}×</p>
            <div className="rs-row">
              {r.retracted && <span className="rs-chip bad">⚠ Retracted</span>}
              {r.oa.isOa ? <a className="rs-chip ok" href={r.oa.url || (r.doi && `https://doi.org/${r.doi}`)} target="_blank" rel="noreferrer">🟢 Open access ({r.oa.status})</a> : <span className="rs-chip warn">🔴 Paywalled — check your library or repository</span>}
              {r.region !== 'Unknown' && <span className="rs-chip info">{r.region}</span>}
              {r.doi && <a className="rs-chip" href={`https://doi.org/${r.doi}`} target="_blank" rel="noreferrer">DOI</a>}
              <button className="hub-btn hub-btn-ghost rs-btn-sm" onClick={() => setOpen(open === r.id ? null : r.id)}>{open === r.id ? 'Hide' : 'Abstract & cite'}</button>
            </div>
            {open === r.id && (
              <div className="rs-stack" style={{ marginTop: 8 }}>
                <p className="rs-quote">{r.abstract || 'No abstract available.'}</p>
                {Object.entries(STYLES).map(([name, fn]) => (
                  <div key={name} className="rs-row sb"><small><b>{name}</b> {fn(r)}</small>
                    <button className="hub-btn hub-btn-ghost rs-btn-sm" onClick={async () => toast((await copy(fn(r))) ? `${name} reference copied` : 'Copy failed')}>Copy</button></div>))}
              </div>)}
          </div>))}
      </div>
    </>
  )
}
