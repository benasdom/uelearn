// Citation formatting, duplicate detection and in-text citation audit.
const initials = (g = '') => g.split(/[\s.-]+/).filter(Boolean).map((s) => `${s[0].toUpperCase()}.`)
export const nameToAuthor = (full = '') => {
  const parts = full.trim().split(/\s+/)
  if (parts.length < 2) return { family: parts[0] || '', given: '' }
  return { family: parts[parts.length - 1], given: parts.slice(0, -1).join(' ') }
}
export const normDoi = (d = '') => d.replace(/^https?:\/\/(dx\.)?doi\.org\//i, '').replace(/^doi:\s*/i, '').trim().toLowerCase()
const pages = (p) => p.pages || ''
const tail = (p) => [p.volume && (p.issue ? `${p.volume}(${p.issue})` : p.volume), pages(p)].filter(Boolean)
const doiUrl = (p) => (p.doi ? `https://doi.org/${p.doi}` : '')

const apaName = (a) => `${a.family}, ${initials(a.given).join(' ')}`.trim().replace(/,$/, '')
const joinAnd = (arr, last = '&', oxford = true) => {
  if (arr.length <= 1) return arr[0] || ''
  if (arr.length === 2) return last === '&' ? `${arr[0]}, & ${arr[1]}` : `${arr[0]} ${last} ${arr[1]}`
  return `${arr.slice(0, -1).join(', ')}${oxford ? ',' : ''} ${last} ${arr[arr.length - 1]}`
}

export const STYLES = {
  APA: (p) => {
    const au = p.authors.length > 20 ? `${p.authors.slice(0, 19).map(apaName).join(', ')}, … ${apaName(p.authors.at(-1))}` : joinAnd(p.authors.map(apaName), '&')
    return `${au || 'Anonymous'} (${p.year || 'n.d.'}). ${p.title}. ${p.venue ? `${p.venue}${tail(p).length ? `, ${tail(p).join(', ')}` : ''}.` : ''} ${doiUrl(p)}`.replace(/\s+/g, ' ').trim()
  },
  Harvard: (p) => {
    const au = joinAnd(p.authors.map((a) => `${a.family}, ${initials(a.given).join('')}`), 'and', false)
    return `${au || 'Anonymous'} (${p.year || 'n.d.'}) '${p.title}', ${p.venue || ''}${tail(p).length ? `, ${tail(p).join(', ')}` : ''}.${p.doi ? ` doi:${p.doi}` : ''}`.replace(/\s+/g, ' ').trim()
  },
  MLA: (p) => {
    const [f, ...rest] = p.authors
    const au = !f ? '' : p.authors.length > 2 ? `${f.family}, ${f.given}, et al.` : [`${f.family}, ${f.given}`, ...rest.map((a) => `${a.given} ${a.family}`)].join(', and ')
    return `${au}${au ? '.' : ''} "${p.title}." ${p.venue || ''}${p.volume ? `, vol. ${p.volume}` : ''}${p.issue ? `, no. ${p.issue}` : ''}, ${p.year || 'n.d.'}${p.pages ? `, pp. ${p.pages}` : ''}${p.doi ? `, ${doiUrl(p)}` : ''}.`.replace(/\s+/g, ' ').trim()
  },
  IEEE: (p) => {
    const au = joinAnd(p.authors.map((a) => `${initials(a.given).join(' ')} ${a.family}`.trim()), 'and')
    return `${au}, "${p.title}," ${p.venue || ''}${p.volume ? `, vol. ${p.volume}` : ''}${p.issue ? `, no. ${p.issue}` : ''}${p.pages ? `, pp. ${p.pages}` : ''}, ${p.year || ''}${p.doi ? `, doi: ${p.doi}` : ''}.`.replace(/\s+/g, ' ').trim()
  },
}

export const inText = (p) => {
  const f = p.authors[0]?.family || 'Anonymous'
  const who = p.authors.length > 2 ? `${f} et al.` : p.authors.length === 2 ? `${f} & ${p.authors[1].family}` : f
  return `(${who}, ${p.year || 'n.d.'})`
}
export const studyLabel = (p) => inText(p).slice(1, -1)

const slug = (t = '') => t.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()
export function findDuplicates(papers) {
  const out = []
  for (let i = 0; i < papers.length; i++) for (let j = i + 1; j < papers.length; j++) {
    const a = papers[i], b = papers[j]
    if ((a.doi && a.doi === b.doi) || (slug(a.title) && slug(a.title) === slug(b.title))) out.push([a, b])
  }
  return out
}

// Compare citations written in the text — "Mensah (2019)", "(Mensah & Boateng, 2019)",
// "(Mensah et al., 2019)" — with the library.
export function auditCitations(text, papers) {
  const re = /([A-Z][A-Za-z'’-]+)(?:\s+(?:et al\.?|&|and)\s*(?:[A-Z][A-Za-z'’-]+)?)?\s*[,(]?\s*\(?((?:19|20)\d{2})[a-z]?\)?/g
  const found = new Map()
  for (const m of text.matchAll(re)) found.set(`${m[1].toLowerCase()}|${m[2]}`, `${m[1]} ${m[2]}`)
  const lib = new Map(papers.map((p) => [`${(p.authors[0]?.family || '').toLowerCase()}|${p.year}`, p]))
  const missing = [...found].filter(([k]) => !lib.has(k)).map(([, v]) => v)
  const cited = papers.filter((p) => found.has(`${(p.authors[0]?.family || '').toLowerCase()}|${p.year}`))
  return { missing, cited, uncited: papers.filter((p) => !cited.includes(p)), total: found.size }
}
