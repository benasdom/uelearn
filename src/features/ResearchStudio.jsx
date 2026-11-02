import { useEffect, useMemo, useState } from 'react'
import { useResearch } from '../lib/research/store'
import Overview from './research/Overview'
import Discover from './research/Discover'
import Matrix from './research/Matrix'
import Evidence from './research/Evidence'
import Write from './research/Write'
import StatsLab from './research/StatsLab'
import Supervisor from './research/Supervisor'
import Defense from './research/Defense'
import './styles/hub.css'
import './styles/research.css'

const TABS = [['overview', 'Command center'], ['discover', 'Discover'], ['matrix', 'Literature matrix'], ['evidence', 'Evidence'], ['write', 'Write'], ['stats', 'Stats lab'], ['supervisor', 'Supervisor'], ['defense', 'Defence & ethics']]

export default function ResearchStudio() {
  const store = useResearch()
  const { project: p, projects } = store
  const [tab, setTab] = useState('overview')
  const [seed, setSeed] = useState('')
  const [title, setTitle] = useState('')
  const [toastMsg, setToastMsg] = useState(null)
  const [cmd, setCmd] = useState(null) // null = closed, string = query

  const toast = (m) => { setToastMsg(m); setTimeout(() => setToastMsg((c) => (c === m ? null : c)), 2600) }
  useEffect(() => {
    const onKey = (e) => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setCmd((c) => (c === null ? '' : null)) } else if (e.key === 'Escape') setCmd(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const commands = useMemo(() => {
    const base = TABS.map(([k, l]) => ({ label: `Go to ${l}`, run: () => setTab(k) }))
    if (p) {
      base.push({ label: 'Show unresolved supervisor feedback', run: () => setTab('supervisor') })
      base.push({ label: 'Find papers contradicting my claims', run: () => setTab('evidence') })
      base.push({ label: 'Practise a viva question', run: () => setTab('defense') })
    }
    return base
  }, [p])
  const q = (cmd || '').toLowerCase()
  const shown = commands.filter((c) => c.label.toLowerCase().includes(q)).slice(0, 7)
  const runCmd = (c) => { c.run(); setCmd(null) }
  const searchLit = () => { setSeed(cmd.trim()); setTab('discover'); setCmd(null) }

  if (!p) {
    return (
      <div className="rs">
        <p className="hub-eyebrow">RESEARCH LAB</p>
        <h2 className="hub-title">From research idea to defence — in one place</h2>
        <div className="rs-card rs-stack" style={{ maxWidth: 520 }}>
          <p>Discover papers, build a literature matrix, track claims against evidence, write with an examiner’s eye, analyse data, manage your supervisor, and prepare your viva. Works offline; your data stays on this device.</p>
          <input className="hub-input" placeholder="Working title, e.g. Social media and anxiety among university students" value={title} onChange={(e) => setTitle(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && title.trim() && store.create(title)} />
          <button className="hub-btn" disabled={!title.trim()} onClick={() => store.create(title)}>Start project</button>
          <label className="hub-btn hub-btn-ghost" style={{ cursor: 'pointer', textAlign: 'center' }}>Restore from backup
            <input type="file" accept=".json" hidden onChange={async (e) => { const f = e.target.files?.[0]; if (f) { try { toast(`Imported ${store.importAll(await f.text())} project(s)`) } catch (err) { toast(err.message) } } }} /></label>
        </div>
        {toastMsg && <div className="rs-toast" role="status">{toastMsg}</div>}
      </div>
    )
  }

  const panel = { project: p, update: store.update, go: setTab, toast, store }
  return (
    <div className="rs">
      <div className="rs-top">
        <select className="hub-select" value={p.id} onChange={(e) => store.setActive(e.target.value)} aria-label="Project">{projects.map((x) => <option key={x.id} value={x.id}>{x.title}</option>)}</select>
        <button className="hub-btn hub-btn-ghost rs-btn-sm" onClick={() => { const t = window.prompt('New project title:'); if (t?.trim()) { store.create(t); setTab('overview') } }}>+ New</button>
        <button className="hub-btn hub-btn-ghost rs-btn-sm" onClick={() => setCmd('')}>⌘K <kbd>Ctrl K</kbd></button>
      </div>
      <div className="rs-tabs" role="tablist">{TABS.map(([k, l]) => <button key={k} role="tab" aria-selected={tab === k} className={`rs-tab ${tab === k ? 'active' : ''}`} onClick={() => setTab(k)}>{l}</button>)}</div>

      {tab === 'overview' && <Overview {...panel} />}
      {tab === 'discover' && <Discover key={seed} {...panel} seed={seed} />}
      {tab === 'matrix' && <Matrix {...panel} />}
      {tab === 'evidence' && <Evidence {...panel} />}
      {tab === 'write' && <Write {...panel} />}
      {tab === 'stats' && <StatsLab {...panel} />}
      {tab === 'supervisor' && <Supervisor {...panel} />}
      {tab === 'defense' && <Defense {...panel} />}

      {cmd !== null && (
        <div className="rs-cmd" onClick={() => setCmd(null)} role="dialog" aria-label="Command bar">
          <div onClick={(e) => e.stopPropagation()}>
            <input autoFocus placeholder="What do you want to do? Type to jump, or search the literature…" value={cmd} onChange={(e) => setCmd(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') (shown[0] && q.length < 3) ? runCmd(shown[0]) : cmd.trim() ? searchLit() : shown[0] && runCmd(shown[0]) }} />
            {shown.map((c) => <button key={c.label} onClick={() => runCmd(c)}>{c.label}</button>)}
            {cmd.trim().length >= 3 && <button onClick={searchLit}>🔎 Search the literature for “{cmd.trim()}”</button>}
          </div>
        </div>)}
      {toastMsg && <div className="rs-toast" role="status">{toastMsg}</div>}
    </div>
  )
}
