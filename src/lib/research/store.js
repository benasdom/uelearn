// Research Lab project store — local-first (works offline, nothing leaves the device).
// One active project at a time; every mutation goes through update() so touchedAt
// (used for the research-health signal) and XP stay consistent.
import { useCallback, useState } from 'react'
import { loadState, saveState, makeId } from '../localStore'
import { bumpResearch } from '../activity'

const KEY = 'research-projects'
const ACTIVE = 'research-active'
export const CHAPTERS = ['Introduction', 'Literature review', 'Methodology', 'Results', 'Discussion', 'Conclusion']
export const REGIONS = ['Africa', 'Europe', 'North America', 'Latin America', 'Asia', 'Oceania', 'Unknown']

export const blankProject = (title) => ({
  id: makeId(), title, field: '', design: '', sampleSize: '', deadline: '', targetRegion: 'Africa',
  createdAt: Date.now(), touchedAt: Date.now(),
  rq: [], objectives: [], hypotheses: [],
  policy: { brainstorm: true, grammar: true, summarise: true, draft: false },
  papers: [], columns: [], claims: [],
  chapters: CHAPTERS.map((name) => ({ id: makeId(), name, status: 'todo', text: '' })),
  feedback: [], decisions: [], meetings: [], ideas: [], aiLog: [], phasesDone: [],
})

export function useResearch() {
  const [projects, setProjects] = useState(() => loadState(KEY, []))
  const [activeId, setActiveId] = useState(() => loadState(ACTIVE, null))
  const project = projects.find((p) => p.id === activeId) || projects[0] || null

  const commit = useCallback((next) => { setProjects(next); saveState(KEY, next) }, [])
  const setActive = (id) => { setActiveId(id); saveState(ACTIVE, id) }
  const create = (title) => {
    const p = blankProject(title.trim() || 'Untitled project')
    commit([p, ...projects]); setActive(p.id); bumpResearch(5)
  }
  const update = (fn, { xp = 0 } = {}) => {
    if (!project) return
    setProjects((prev) => {
      const next = prev.map((p) => (p.id === project.id ? { ...fn(p), touchedAt: Date.now() } : p))
      saveState(KEY, next)
      return next
    })
    if (xp) bumpResearch(xp)
  }
  const remove = (id) => { const next = projects.filter((p) => p.id !== id); commit(next); setActive(next[0]?.id || null) }
  const importAll = (json) => {
    const data = JSON.parse(json)
    const list = Array.isArray(data) ? data : [data]
    const ok = list.filter((p) => p && p.id && Array.isArray(p.papers))
    if (!ok.length) throw new Error('That file is not a Research Lab backup.')
    const ids = new Set(projects.map((p) => p.id))
    commit([...ok.filter((p) => !ids.has(p.id)), ...projects])
    return ok.length
  }
  return { projects, project, setActive, create, update, remove, importAll, exportAll: () => JSON.stringify(projects, null, 2) }
}

export const logAi = (p, tool, action, status = 'used') => ({
  ...p, aiLog: [{ id: makeId(), at: Date.now(), tool, action, status }, ...p.aiLog].slice(0, 200),
})

export function download(name, text, mime = 'text/plain') {
  const url = URL.createObjectURL(new Blob([text], { type: mime }))
  const a = Object.assign(document.createElement('a'), { href: url, download: name })
  document.body.appendChild(a); a.click(); a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
