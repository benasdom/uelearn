import { useMemo, useState } from 'react'
import * as S from '../../lib/research/stats'
import { download } from '../../lib/research/store'
import { copy } from './ui'

const TESTS = {
  pearson: { label: 'Pearson correlation', need: ['num', 'num'], run: (a) => S.pearson(a[0], a[1]) },
  regression: { label: 'Linear regression (predictor → outcome)', need: ['num', 'num'], run: (a) => S.regression(a[0], a[1]) },
  welch: { label: 'Independent t-test (outcome by 2 groups)', need: ['num', 'cat'], run: (a) => S.welch(a[0], a[1]) },
  anova: { label: 'One-way ANOVA (outcome by 3+ groups)', need: ['num', 'cat'], run: (a) => S.anova(a[0], a[1]) },
  chi: { label: 'Chi-square (two categorical)', need: ['cat', 'cat'], run: (a) => S.chiSquare(a[0], a[1]) },
  alpha: { label: 'Reliability — Cronbach’s α (pick items)', need: ['items'], run: (a) => S.cronbach(a) },
}
const md = (s) => s.replace(/\*([^*]+)\*/g, '$1')
const Plot = ({ r }) => {
  const W = 360, H = 220, pad = 28
  if (r.kind === 'scatter') {
    const xs = r.x, ys = r.y, [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)]
    const X = (v) => pad + ((v - x0) / (x1 - x0 || 1)) * (W - 2 * pad), Y = (v) => H - pad - ((v - y0) / (y1 - y0 || 1)) * (H - 2 * pad)
    return <svg viewBox={`0 0 ${W} ${H}`} className="rs-svg" role="img" aria-label="Scatterplot with fitted line">
      <line x1={pad} y1={H - pad} x2={W - pad} y2={H - pad} stroke="currentColor" opacity=".3" /><line x1={pad} y1={pad} x2={pad} y2={H - pad} stroke="currentColor" opacity=".3" />
      {xs.map((v, i) => <circle key={i} cx={X(v)} cy={Y(ys[i])} r="3.5" fill="#22d3ee" opacity=".75" />)}
      <line x1={X(x0)} y1={Y(r.line.a + r.line.b * x0)} x2={X(x1)} y2={Y(r.line.a + r.line.b * x1)} stroke="#a78bfa" strokeWidth="2" /></svg>
  }
  if (r.kind === 'groups') {
    const hi = Math.max(...r.groups.map((g) => g.d.mean + g.d.sd)), lo = Math.min(0, ...r.groups.map((g) => g.d.mean - g.d.sd)), bw = (W - 2 * pad) / r.groups.length
    const Y = (v) => H - pad - ((v - lo) / (hi - lo || 1)) * (H - 2 * pad)
    return <svg viewBox={`0 0 ${W} ${H}`} className="rs-svg" role="img" aria-label="Group means with standard deviation">{r.groups.map((g, i) => { const cx = pad + bw * i + bw / 2; return (<g key={g.label}>
      <rect x={cx - bw / 3} y={Y(g.d.mean)} width={(2 * bw) / 3} height={Math.max(1, H - pad - Y(g.d.mean))} fill="#22d3ee" opacity=".7" />
      <line x1={cx} y1={Y(g.d.mean + g.d.sd)} x2={cx} y2={Y(g.d.mean - g.d.sd)} stroke="#a78bfa" strokeWidth="2" />
      <text x={cx} y={H - 8} textAnchor="middle" fontSize="10" fill="currentColor">{String(g.label).slice(0, 12)}</text></g>) })}</svg>
  }
  return null
}

export default function StatsLab({ update, toast }) {
  const [table, setTable] = useState(null)
  const [paste, setPaste] = useState('')
  const [err, setErr] = useState(null)
  const [t, setT] = useState('pearson')
  const [sel, setSel] = useState([0, 1])
  const [items, setItems] = useState([])
  const [res, setRes] = useState(null)
  const [w, setW] = useState({ goal: 'relationship', outcome: 'continuous', predictor: 'continuous', groups: 2, paired: false })
  const advice = useMemo(() => S.adviseTest(w), [w])
  const load = (text) => { try { setTable(S.parseTable(text)); setErr(null); setRes(null); setSel([0, Math.min(1, S.parseTable(text).cols.length - 1)]) } catch (e) { setErr(e.message) } }
  const run = () => {
    try {
      const cols = table.cols, test = TESTS[t]
      const args = t === 'alpha' ? items.map((i) => cols[i]) : sel.slice(0, test.need.length).map((i) => cols[i])
      if (t !== 'alpha') args.forEach((c, i) => { if (test.need[i] === 'num' && c.type !== 'numeric') throw new Error(`“${c.name}” is not numeric.`) })
      const out = test.run(args)
      setRes(out); setErr(null); update((x) => x, { xp: 3 })
    } catch (e) { setErr(e.message); setRes(null) }
  }
  const need = TESTS[t].need

  return (
    <>
      <div className="rs-grid">
        <div className="rs-card rs-stack"><h3>1 · Bring your data</h3>
          <p className="rs-mute">CSV / TSV only. Data is analysed in your browser and never uploaded.</p>
          <input type="file" accept=".csv,.tsv,.txt" onChange={async (e) => { const f = e.target.files?.[0]; if (f) load(await f.text()) }} />
          <textarea className="hub-textarea" rows={3} placeholder="…or paste rows here (first row = headers)" value={paste} onChange={(e) => setPaste(e.target.value)} />
          <button className="hub-btn rs-btn-sm" style={{ justifySelf: 'start' }} disabled={!paste.trim()} onClick={() => load(paste)}>Load pasted data</button>
        </div>
        <div className="rs-card rs-stack"><h3>Not sure which test? Ask the advisor</h3>
          <div className="rs-row">
            <select className="hub-select" style={{ width: 'auto' }} value={w.goal} onChange={(e) => setW({ ...w, goal: e.target.value })}><option value="relationship">Relationship</option><option value="difference">Difference between groups</option><option value="prediction">Prediction</option><option value="reliability">Scale reliability</option></select>
            <select className="hub-select" style={{ width: 'auto' }} value={w.outcome} onChange={(e) => setW({ ...w, outcome: e.target.value })}><option value="continuous">Outcome: numeric</option><option value="categorical">Outcome: categories</option></select>
            <select className="hub-select" style={{ width: 'auto' }} value={w.predictor} onChange={(e) => setW({ ...w, predictor: e.target.value })}><option value="continuous">Predictor: numeric</option><option value="categorical">Predictor: groups</option></select>
            <select className="hub-select" style={{ width: 'auto' }} value={w.groups} onChange={(e) => setW({ ...w, groups: +e.target.value })}><option value={2}>2 groups</option><option value={3}>3+ groups</option></select>
            <label className="rs-row"><input type="checkbox" checked={w.paired} onChange={(e) => setW({ ...w, paired: e.target.checked })} /> Same people measured twice</label>
          </div>
          <div className="rs-item"><b>→ {advice.test}</b><p className="rs-mute" style={{ margin: '4px 0 0' }}>{advice.why}</p></div>
        </div>
      </div>

      {table && (
        <div className="rs-card rs-stack"><h3>2 · Your data ({table.n} rows)</h3>
          <div className="rs-scroll"><table style={{ minWidth: 0 }}><thead><tr><th>Column</th><th>Type</th><th>Missing</th><th>Levels</th></tr></thead>
            <tbody>{table.cols.map((c) => <tr key={c.name}><td style={{ padding: 6 }}>{c.name}</td><td>{c.type}</td><td>{c.missing}</td><td>{c.type === 'categorical' ? c.levels : ''}</td></tr>)}</tbody></table></div>
          <h3>3 · Run an analysis</h3>
          <div className="rs-row">
            <select className="hub-select" style={{ width: 'auto' }} value={t} onChange={(e) => { setT(e.target.value); setRes(null) }}>{Object.entries(TESTS).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}</select>
            {t !== 'alpha' && need.map((n, i) => (
              <select key={i} className="hub-select" style={{ width: 'auto' }} value={sel[i] ?? 0} onChange={(e) => setSel((s) => { const c = [...s]; c[i] = +e.target.value; return c })} aria-label={i === 0 ? 'First variable' : 'Second variable'}>
                {table.cols.map((c, j) => <option key={c.name} value={j}>{i === 0 && need[0] === 'num' && need.length === 2 && t !== 'pearson' && t !== 'regression' ? 'Outcome: ' : i === 0 ? 'X: ' : (t === 'welch' || t === 'anova') ? 'Group: ' : 'Y: '}{c.name}</option>)}</select>))}
            <button className="hub-btn" onClick={run}>Run</button>
          </div>
          {t === 'alpha' && <div className="rs-row">{table.cols.map((c, j) => c.type === 'numeric' && <label key={j} className="rs-chip"><input type="checkbox" checked={items.includes(j)} onChange={(e) => setItems((s) => (e.target.checked ? [...s, j] : s.filter((x) => x !== j)))} /> {c.name}</label>)}</div>}
          {(t === 'pearson' || t === 'regression') && <p className="rs-mute">First = X (predictor), second = Y (outcome).</p>}
        </div>)}
      {err && <div className="hub-error">{err}</div>}

      {res && (
        <div className="rs-card rs-stack" style={{ marginTop: 12 }}>
          <div className="rs-row sb"><h3>{res.name}</h3><span className="rs-row">
            <button className="hub-btn hub-btn-ghost rs-btn-sm" onClick={async () => toast((await copy(md(res.apa))) ? 'APA result copied' : 'Copy failed')}>Copy APA</button>
            <button className="hub-btn hub-btn-ghost rs-btn-sm" onClick={() => download('analysis.txt', `${res.name}\n${md(res.apa)}\n\n${res.interpretation}\n\nWhy: ${res.why}\n\nAssumptions:\n${res.assumptions.map((a) => `${a.ok ? '✓' : '⚠'} ${a.text}`).join('\n')}`)}>Download</button></span></div>
          <div className="rs-pre">{md(res.apa)}</div>
          <p>{res.interpretation}</p>
          <Plot r={res} />
          {res.kind === 'table' && <div className="rs-scroll"><table style={{ minWidth: 0 }}><thead><tr><th />{res.cols.map((c) => <th key={c}>{c}</th>)}</tr></thead><tbody>{res.obs.map((r, i) => <tr key={i}><td style={{ padding: 6 }}><b>{res.rows[i]}</b></td>{r.map((v, j) => <td key={j} style={{ padding: 6 }}>{v}</td>)}</tr>)}</tbody></table></div>}
          {res.groups && <div className="rs-scroll"><table style={{ minWidth: 0 }}><thead><tr><th>Group</th><th>n</th><th>M</th><th>SD</th></tr></thead><tbody>{res.groups.map((g) => <tr key={g.label}><td style={{ padding: 6 }}>{g.label}</td><td>{g.d.n}</td><td>{g.d.mean.toFixed(2)}</td><td>{g.d.sd.toFixed(2)}</td></tr>)}</tbody></table></div>}
          <div className="rs-item"><b>Why this test?</b><p className="rs-mute" style={{ margin: '4px 0 0' }}>{res.why}</p></div>
          <div className="rs-list">{res.assumptions.map((a, i) => <div key={i} className="rs-item">{a.ok ? '✓' : '⚠'} {a.text}</div>)}</div>
        </div>)}
    </>
  )
}
