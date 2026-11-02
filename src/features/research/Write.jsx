import { useMemo, useState } from 'react'
import { critique, examinerChallenges } from '../../lib/research/critic'
import { auditCitations, STYLES } from '../../lib/research/citations'
import { download } from '../../lib/research/store'
import { Metric, copy } from './ui'

const MODES = [['learn', 'Learn — explain why'], ['critic', 'Critic — attack my argument'], ['examiner', 'Examiner — what will they ask?']]
const STAT = ['todo', 'draft', 'review', 'done']

export default function Write({ project: p, update, toast }) {
  const [cid, setCid] = useState(p.chapters[0].id)
  const [mode, setMode] = useState('learn')
  const [style, setStyle] = useState('APA')
  const ch = p.chapters.find((c) => c.id === cid) || p.chapters[0]
  const setCh = (patch, xp = 0) => update((x) => ({ ...x, chapters: x.chapters.map((c) => (c.id === ch.id ? { ...c, ...patch } : c)) }), { xp })
  const { issues, metrics } = useMemo(() => critique(ch.text, { design: p.design }), [ch.text, p.design])
  const audit = useMemo(() => auditCitations(ch.text, p.papers), [ch.text, p.papers])
  const challenges = useMemo(() => (mode === 'examiner' ? examinerChallenges(p, ch.text) : []), [mode, p, ch.text])
  const allText = p.chapters.map((c) => c.text).join('\n')
  const refs = useMemo(() => auditCitations(allText, p.papers).cited.map(STYLES[style]).sort(), [allText, p.papers, style])

  return (
    <>
      <div className="rs-row" style={{ marginBottom: 10 }}>
        <select className="hub-select" style={{ width: 'auto' }} value={ch.id} onChange={(e) => setCid(e.target.value)}>{p.chapters.map((c) => <option key={c.id} value={c.id}>{c.name} ({c.status})</option>)}</select>
        <select className="hub-select" style={{ width: 'auto' }} value={ch.status} onChange={(e) => setCh({ status: e.target.value }, e.target.value === 'done' ? 5 : 0)}>{STAT.map((s) => <option key={s}>{s}</option>)}</select>
        <select className="hub-select" style={{ width: 'auto' }} value={mode} onChange={(e) => setMode(e.target.value)}>{MODES.map(([k, l]) => <option key={k} value={k}>{l}</option>)}</select>
        <span className="rs-mute">{metrics.words} words · saved automatically</span>
      </div>
      <div className="rs-grid">
        <div className="rs-card span"><textarea className="hub-textarea rs-write" placeholder={`Write ${ch.name} here. Cite as (Mensah, 2019) or Mensah (2019) so the Lab can audit your citations.`}
          value={ch.text} onChange={(e) => setCh({ text: e.target.value, status: ch.status === 'todo' && e.target.value.length > 40 ? 'draft' : ch.status })} /></div>

        <div className="rs-card"><h3>Writing health</h3>
          <Metric label="Analytical depth" pct={metrics.depth} />
          <p className="rs-mute">{metrics.sentences} sentences · avg {metrics.avgSentence} words · {metrics.citations} citations ({metrics.per1000}/1000 words) · {metrics.synthesis} comparison/contrast markers</p>
          <h3 style={{ marginTop: 12 }}>Citation audit</h3>
          {audit.missing.length > 0 && <p><span className="rs-chip bad">Not in your library</span> {audit.missing.join(', ')}</p>}
          {audit.total > 0 && audit.missing.length === 0 && <p><span className="rs-chip ok">✓ All {audit.total} in-text citations match your library</span></p>}
          {audit.total === 0 && <p className="rs-mute">No in-text citations detected yet.</p>}
          {p.papers.length > 0 && audit.uncited.length > 0 && audit.total > 0 && <p className="rs-mute">In library, not cited here: {audit.uncited.slice(0, 5).map((x) => x.authors[0]?.family).join(', ')}{audit.uncited.length > 5 ? '…' : ''}</p>}
        </div>

        <div className="rs-card"><h3>{mode === 'examiner' ? 'Questions an examiner could ask' : `Feedback (${issues.length})`}</h3>
          <div className="rs-list">
            {mode === 'examiner' ? (challenges.length ? challenges.map((c) => <div key={c.q} className="rs-item"><span className="rs-chip info">{c.cat}</span> {c.q}</div>) : <p className="rs-mute">Fill in your design, sample size and hypotheses to get tailored challenges.</p>)
              : issues.length === 0 ? <p className="rs-mute">{ch.text.trim() ? '✓ Nothing flagged. Run Critic mode again after you add more.' : 'Start writing to get feedback.'}</p>
              : issues.slice(0, 12).map((x, i) => (
                <div key={i} className={`rs-issue ${x.severity}`}><b>{x.type}</b><div className="rs-quote">{x.s.slice(0, 140)}</div>
                  {mode === 'learn' ? <><div>{x.why}</div><div className="rs-mute">💡 {x.tip}</div></> : <div>{x.why}</div>}</div>))}
          </div>
          <p className="rs-mute" style={{ marginTop: 8 }}>Rule-based and private — runs on your device, uses no credits, and never rewrites your text.</p>
        </div>
      </div>

      <div className="rs-card rs-stack"><div className="rs-row sb"><h3>Reference list ({refs.length} cited across all chapters)</h3>
        <span className="rs-row"><select className="hub-select" style={{ width: 'auto' }} value={style} onChange={(e) => setStyle(e.target.value)}>{Object.keys(STYLES).map((s) => <option key={s}>{s}</option>)}</select>
          <button className="hub-btn hub-btn-ghost rs-btn-sm" disabled={!refs.length} onClick={async () => toast((await copy(refs.join('\n\n'))) ? 'References copied' : 'Copy failed')}>Copy</button></span></div>
        {refs.length ? <div className="rs-pre">{refs.join('\n\n')}</div> : <p className="rs-mute">Only papers you actually cite in the text appear here — the bibliography builds itself.</p>}
        <button className="hub-btn hub-btn-ghost rs-btn-sm" style={{ justifySelf: 'start' }} onClick={() => download(`${p.title}-thesis.md`, p.chapters.map((c) => `# ${c.name}\n\n${c.text}`).join('\n\n') + `\n\n# References\n\n${refs.join('\n\n')}`)}>Export thesis draft (.md)</button>
      </div>
    </>
  )
}
