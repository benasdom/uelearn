// Evidence-backed discovery on OpenAlex (free, open, CORS-enabled — no key, no credits).
// Results are cached locally so a search can be re-read offline.
import { loadState, saveState, makeId } from '../localStore'
import { nameToAuthor, normDoi } from './citations'

const API = 'https://api.openalex.org/works'
const SELECT = 'id,doi,title,publication_year,authorships,primary_location,open_access,cited_by_count,type,is_retracted,abstract_inverted_index,biblio'
const R = {
  Africa: 'DZ AO BJ BW BF BI CM CV CF TD KM CG CD CI DJ EG GQ ER SZ ET GA GM GH GN GW KE LS LR LY MG MW ML MR MU MA MZ NA NE NG RW ST SN SC SL SO ZA SS SD TZ TG TN UG ZM ZW',
  Europe: 'AL AD AT BY BE BA BG HR CY CZ DK EE FI FR DE GR HU IS IE IT XK LV LI LT LU MT MD MC ME NL MK NO PL PT RO RU SM RS SK SI ES SE CH UA GB VA',
  'North America': 'US CA',
  'Latin America': 'MX BZ CR SV GT HN NI PA CU DO HT JM PR TT BS BB AR BO BR CL CO EC GY PY PE SR UY VE',
  Asia: 'AF AM AZ BH BD BT BN KH CN GE IN ID IR IQ IL JP JO KZ KW KG LA LB MY MV MN MM NP KP OM PK PS PH QA SA SG KR LK SY TW TJ TH TL TR TM AE UZ VN YE HK MO',
  Oceania: 'AU NZ FJ PG WS TO VU SB',
}
const REGION_OF = Object.fromEntries(Object.entries(R).flatMap(([r, cs]) => cs.split(' ').map((c) => [c, r])))
export const regionOf = (cc) => REGION_OF[cc] || 'Unknown'

const abstractOf = (inv) => {
  if (!inv) return ''
  const words = []
  Object.entries(inv).forEach(([w, idx]) => idx.forEach((i) => { words[i] = w }))
  return words.join(' ')
}

export function workToPaper(w) {
  const countries = (w.authorships || []).flatMap((a) => (a.institutions || []).map((i) => i.country_code)).filter(Boolean)
  const tally = {}
  countries.forEach((c) => { const r = regionOf(c); tally[r] = (tally[r] || 0) + 1 })
  const region = Object.entries(tally).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Unknown'
  const b = w.biblio || {}
  return {
    id: makeId(), title: (w.title || 'Untitled').replace(/<[^>]+>/g, ''),
    authors: (w.authorships || []).map((a) => nameToAuthor(a.author?.display_name)),
    year: w.publication_year || '', doi: normDoi(w.doi || ''), venue: w.primary_location?.source?.display_name || '',
    volume: b.volume || '', issue: b.issue || '', pages: [b.first_page, b.last_page].filter(Boolean).join('–'),
    type: w.type || '', cited: w.cited_by_count || 0, retracted: !!w.is_retracted,
    oa: { isOa: !!w.open_access?.is_oa, status: w.open_access?.oa_status || '', url: w.open_access?.oa_url || '' },
    abstract: abstractOf(w.abstract_inverted_index), authorCountries: [...new Set(countries)],
    region, country: '', design: '', sample: '', method: '', finding: '', limitation: '', relevance: 3,
    status: 'to-read', notes: '', custom: {}, addedAt: Date.now(),
  }
}

const get = async (url, signal) => {
  let res
  try { res = await fetch(url, { signal }) } catch (e) {
    if (e.name === 'AbortError') throw e
    throw new Error('You appear to be offline. Cached searches are still available.')
  }
  if (!res.ok) throw new Error(res.status === 404 ? 'Nothing found for that.' : `Search service error (${res.status}).`)
  return res.json()
}

export async function searchWorks(query, { oaOnly = false, fromYear = '', signal } = {}) {
  const filters = [oaOnly && 'open_access.is_oa:true', fromYear && `from_publication_date:${fromYear}-01-01`].filter(Boolean).join(',')
  const url = `${API}?search=${encodeURIComponent(query)}&per-page=15&select=${SELECT}${filters ? `&filter=${filters}` : ''}`
  const cacheKey = `${query}|${oaOnly}|${fromYear}`
  try {
    const data = await get(url, signal)
    const papers = data.results.map(workToPaper)
    const cache = loadState('research-search-cache', {})
    cache[cacheKey] = { at: Date.now(), papers, total: data.meta?.count || papers.length }
    const keys = Object.keys(cache).sort((a, b) => cache[b].at - cache[a].at).slice(0, 12)
    saveState('research-search-cache', Object.fromEntries(keys.map((k) => [k, cache[k]])))
    return { papers, total: data.meta?.count || papers.length, cached: false }
  } catch (e) {
    const hit = loadState('research-search-cache', {})[cacheKey]
    if (hit && e.name !== 'AbortError') return { ...hit, cached: true }
    throw e
  }
}

export async function lookupDoi(doi) {
  const d = normDoi(doi)
  if (!/^10\.\d{4,9}\/\S+$/.test(d)) throw new Error('That does not look like a DOI (it should start with 10.).')
  return workToPaper(await get(`${API}/https://doi.org/${encodeURIComponent(d)}?select=${SELECT}`))
}

/** Re-check retraction status for papers that have DOIs. Returns the set of retracted DOIs. */
export async function checkRetractions(papers) {
  const dois = papers.map((p) => p.doi).filter(Boolean)
  const bad = new Set()
  for (let i = 0; i < dois.length; i += 40) {
    const batch = dois.slice(i, i + 40).map((d) => `https://doi.org/${d}`).join('|')
    const data = await get(`${API}?filter=doi:${batch}&per-page=50&select=doi,is_retracted`)
    data.results.filter((w) => w.is_retracted).forEach((w) => bad.add(normDoi(w.doi)))
  }
  return bad
}
