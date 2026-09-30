import {
  CloseCircleOutlined,
  MoneyCollectOutlined,
  ArrowDownOutlined,
  SolutionOutlined,
  CheckCircleOutlined,
  CodeOutlined,
  ReloadOutlined,
  CloseOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  RobotOutlined,
  DownOutlined,
  CheckOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { marked } from 'marked'
import { Link } from 'react-router-dom'
import {
  GraduationCap, FolderOpen, LayoutGrid, Sparkles, Trophy,
  Wallet, Megaphone, BookOpen, Briefcase,
} from 'lucide-react'
import { domain, fetchWithAuth, fetchWithAuthEnvelope, LocalApiPath } from './menu/authfetch'
import racoon_learn from '/imgs/racoon_learn.jpg'
import racoon_save from '/imgs/save.jpg'
import PdfViewer from './menu/PdfViewer'
import SolutionAIPanel, { AI_TOOLS, solutionToPlainText } from './features/SolutionAITools'
import { onCredits } from './lib/creditsBus'

// ─── Constants ────────────────────────────────────────────────────────────────

const MAX_RECENTS = 5
const FETCH_TIMEOUT_MS = 8000
const SEARCH_DEBOUNCE_MS = 400
// /api/v1/solutions/queries is paginated server-side — a fixed page size
// keeps "Load more" pages predictable instead of relying on the backend's
// own default.
const QUERIES_PAGE_SIZE = 20

// ─── localStorage helpers ─────────────────────────────────────────────────────

const saveToRecents = (courseName, extract) => {
  try {
    const stored = JSON.parse(localStorage.getItem('recentSolutions') || '[]')
    const filtered = stored.filter((x) => x.course !== courseName)
    const updated = [
      { course: courseName, solution: extract, savedAt: Date.now() },
      ...filtered,
    ]
      .slice(0, MAX_RECENTS)
      .filter((x) => !/aierror/gim.test(x.solution) || x.solution.length > 15)
      .sort((a, b) => b.savedAt - a.savedAt)
    localStorage.setItem('recentSolutions', JSON.stringify(updated))
  } catch {
    // localStorage unavailable — fail silently
  }
}

const getRecents = () => {
  try {
    return JSON.parse(localStorage.getItem('recentSolutions') || '[]')
  } catch {
    return []
  }
}

// ─── Auth helper ──────────────────────────────────────────────────────────────

const getAuthTokens = () => {
  try {
    const stored = JSON.parse(localStorage.getItem('userInfo') || '{}')
    if (!stored?.accessToken) throw new Error('Missing access token. Please login again.')
    // NOTE: assumes the stored user object's id field is `id` (matches the
    // Django UserModel pk exposed by the serializer). If your login
    // response stores it under a different key, adjust this line.
    return { accessToken: stored.accessToken, refreshToken: stored.refreshToken, userId: stored.id }
  } catch (e) {
    throw new Error(e.message || 'Auth error. Please login again.')
  }
}

// ─── Quick-nav (jump to any other feature without losing this solution) ───────
// Showfiles renders as a fullscreen overlay above the dashboard's own side
// menu, so without this strip the rest of the app is unreachable while a
// solution is open. Each link simply changes route — the AI answer stays
// cached, so coming back re-opens instantly from local storage.
const QUICKNAV_ITEMS = [
  { to: '/dashboard/hub',         label: 'Learning Hub', Icon: GraduationCap },
  { to: '/dashboard/solutions',   label: 'Solutions',    Icon: FolderOpen },
  { to: '/dashboard/general',     label: 'General',      Icon: LayoutGrid },
  { to: '/dashboard/products',    label: 'Solve with AI', Icon: Sparkles },
  { to: '/dashboard/leaderboard', label: 'Leaderboard',  Icon: Trophy },
  { to: '/dashboard/earn',        label: 'Earn',         Icon: Wallet },
  { to: '/dashboard/nss',         label: 'NSS Guide',    Icon: BookOpen },
  { to: '/dashboard/job',         label: 'Job Guide',    Icon: Briefcase },
  { to: '/dashboard/advert',      label: 'Advertise',    Icon: Megaphone },
]

const QuickNav = () => (
  <div className="sf-quicknav" role="navigation" style={{display:"none"}} aria-label="Other features">
    {QUICKNAV_ITEMS.map(({ to, label, Icon }) => (
      <Link key={to} to={to} className="sf-quicknav__item" title={label}>
        <Icon size={16} strokeWidth={1.8} />
      </Link>
    ))}
  </div>
)

// Plain outline SVG spark — replaces the emoji glyph on the "Solutions" pill.
const SparkIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 2.5c.6 3.4 1.7 5.6 3.2 7.1 1.5 1.5 3.7 2.6 7.1 3.2-3.4.6-5.6 1.7-7.1 3.2-1.5 1.5-2.6 3.7-3.2 7.1-.6-3.4-1.7-5.6-3.2-7.1-1.5-1.5-3.7-2.6-7.1-3.2 3.4-.6 5.6-1.7 7.1-3.2 1.5-1.5 2.6-3.7 3.2-7.1Z"
      stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"
    />
  </svg>
)

// ─── Toast ────────────────────────────────────────────────────────────────────

const Toast = ({ message, type = 'error', onDismiss }) => {
  useEffect(() => {
    const t = setTimeout(onDismiss, 3000)
    return () => clearTimeout(t)
  }, [onDismiss])
  return (
    <div className={`sf-toast sf-toast--${type}`}>
      <span className={type === 'error' ? 'sf-toast__dot sf-toast__dot--error' : 'sf-toast__dot sf-toast__dot--success'} />
      <span>{message}</span>
    </div>
  )
}

// ─── Save modal ───────────────────────────────────────────────────────────────

const SaveModal = ({ setstoreme, extract, courseName, selectedVal }) => {
  const [noteMessage, setNoteMessage] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [toast, setToast] = useState(null)

  const saveme = async () => {
    if (noteMessage !== 'Dont save bad responses') {
      setToast({ message: 'Please type the note correctly to proceed', type: 'error' })
      return
    }
    let accessToken, refreshToken
    try {
      ;({ accessToken, refreshToken } = getAuthTokens())
    } catch (e) {
      setToast({ message: e.message, type: 'error' })
      return
    }
    setIsSaving(true)
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)
    try {
      await fetchWithAuth(domain + '/api/v1/solutions/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` },
        body: JSON.stringify({ courseName, solution: extract, validated: false, modelName: selectedVal }),
        signal: controller.signal,
      })
      setToast({ message: 'Saved successfully!', type: 'success' })
      setTimeout(() => setstoreme(false), 1600)
    } catch (err) {
      setToast({
        message: err.name === 'AbortError' ? 'Request timed out.' : 'Error: ' + (err.message || err),
        type: 'error',
      })
    } finally {
      clearTimeout(timeout)
      setIsSaving(false)
    }
  }

  return (
    <div className="sf-modal-overlay">
      {toast && <Toast message={toast.message} type={toast.type} onDismiss={() => setToast(null)} />}
      <div className="sf-modal">
        <button className="sf-modal__close" onClick={() => setstoreme(false)}>
          <CloseCircleOutlined />
        </button>
        <div className="sf-modal__art">
          <img src={racoon_save} alt="save" />
          <div className="sf-modal__art-fade" />
        </div>
        <div className="sf-modal__body">
          <h3 className="sf-modal__title">Save Response</h3>
          <div className="sf-modal__notice">
            <i className="fa fa-exclamation-triangle sf-modal__notice-icon" />
            <p>Only save <strong>good responses</strong>. This helps you avoid spending credits on the same topic twice.</p>
          </div>
          <div className="sf-modal__field">
            <label>Type to confirm:</label>
            <div className="sf-modal__confirm-phrase">Dont save bad responses</div>
            <input
              type="text"
              value={noteMessage}
              onChange={(e) => setNoteMessage(e.target.value)}
              placeholder="Type the phrase above…"
              className={noteMessage && noteMessage !== 'Dont save bad responses' ? 'sf-modal__input--invalid' : ''}
            />
          </div>
          <button
            className="sf-modal__save-btn"
            onClick={saveme}
            disabled={isSaving}
          >
            {isSaving ? (
              <span className="sf-modal__spinner" />
            ) : (
              <>
                <i className="fa fa-save" /> Save
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Model catalog ────────────────────────────────────────────────────────────
// Same endpoint ModelComponent uses ({ "Display name": "api-value", ... }).
// Fetched once per page load and shared, so opening/closing the viewer or the
// picker never re-requests it; a failed attempt isn't cached, so Retry works.

let modelsCache = null
let modelsInflight = null

const loadModels = () => {
  if (modelsCache) return Promise.resolve(modelsCache)
  if (!modelsInflight) {
    modelsInflight = fetch(`${LocalApiPath}/api/files/models`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (!data || typeof data !== 'object' || Array.isArray(data) || Object.keys(data).length === 0) {
          throw new Error('No models available')
        }
        modelsCache = data
        return data
      })
      .finally(() => { modelsInflight = null })
  }
  return modelsInflight
}

// api value → friendly name, falling back to the raw value until the catalog loads.
const labelForModel = (val) => {
  if (!val) return ''
  const hit = Object.entries(modelsCache || {}).find(([, v]) => v === val)
  return hit?.[0] || val
}

// ─── Model picker ─────────────────────────────────────────────────────────────
// Sits next to the credits pill. Choosing a model does NOT touch the solution
// on screen — it only decides which model the next "Regenerate" uses, so the
// current result stays correctly attributed (and correctly saved).

const ModelPicker = ({ currentVal, pendingVal, onPick, disabled }) => {
  const [models, setModels] = useState(modelsCache || {})
  const [status, setStatus] = useState(modelsCache ? 'ready' : 'loading') // loading | ready | error
  const [open, setOpen] = useState(false)
  const [term, setTerm] = useState('')
  const rootRef = useRef(null)
  const searchRef = useRef(null)

  const fetchModels = useCallback(() => {
    setStatus('loading')
    loadModels()
      .then((data) => { setModels(data); setStatus('ready') })
      .catch(() => setStatus('error'))
  }, [])

  useEffect(() => {
    if (!modelsCache) fetchModels()
  }, [fetchModels])

  useEffect(() => {
    if (!open) return
    const onDown = (e) => { if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false) }
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    searchRef.current?.focus()
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const activeVal = pendingVal || currentVal
  const entries = useMemo(() => {
    const t = term.trim().toLowerCase()
    return Object.entries(models).filter(([name]) => !t || name.toLowerCase().includes(t))
  }, [models, term])

  const pick = (val) => {
    onPick(val === currentVal ? null : val)
    setOpen(false)
    setTerm('')
  }

  return (
    <div className="sf-model" ref={rootRef}>
      <button
        type="button"
        className={`sf-model__btn ${pendingVal ? 'sf-model__btn--pending' : ''}`}
        onClick={() => setOpen((v) => !v)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        title={pendingVal ? 'Next regenerate will use this model' : 'Choose the AI model for the next regenerate'}
      >
        <RobotOutlined />
        <span className="sf-model__name">{labelForModel(activeVal) || 'Model'}</span>
        <DownOutlined className="sf-model__caret" />
      </button>

      {open && (
        <div className="sf-model__pop" role="dialog" aria-label="Choose AI model">
          <div className="sf-model__search">
            <SearchOutlined />
            <input
              ref={searchRef}
              type="text"
              placeholder="Search models…"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              aria-label="Search models"
            />
          </div>

          <div className="sf-model__list" role="listbox">
            {status === 'loading' && [1, 2, 3].map((i) => (
              <div key={i} className="sf-model__row"><Skeleton height={12} width="60%" /></div>
            ))}
            {status === 'error' && (
              <div className="sf-model__empty">
                Couldn’t load models.{' '}
                <button type="button" className="sf-model__retry" onClick={fetchModels}>Retry</button>
              </div>
            )}
            {status === 'ready' && entries.length === 0 && (
              <div className="sf-model__empty">No models match “{term.trim()}”</div>
            )}
            {status === 'ready' && entries.map(([name, val]) => (
              <button
                type="button"
                key={val}
                role="option"
                aria-selected={val === activeVal}
                className={`sf-model__row sf-model__row--btn ${val === activeVal ? 'sf-model__row--active' : ''}`}
                onClick={() => pick(val)}
              >
                <RobotOutlined className="sf-model__row-icon" />
                <span className="sf-model__row-name">{name}</span>
                {val === currentVal && <span className="sf-model__tag">Current</span>}
                {val === activeVal && <CheckOutlined className="sf-model__check" />}
              </button>
            ))}
          </div>

          <div className="sf-model__foot">
            Takes effect the next time you press <strong>Regenerate</strong>.
            {pendingVal && (
              <button type="button" className="sf-model__retry" onClick={() => pick(currentVal)}>
                Keep {labelForModel(currentVal) || 'current'}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Skeleton loader ──────────────────────────────────────────────────────────

const Skeleton = ({ width = '100%', height = 14, style = {} }) => (
  <div className="sf-skeleton" style={{ width, height, borderRadius: 6, ...style }} />
)

// ─── Main component ───────────────────────────────────────────────────────────

const Showfiles = ({
  pdflink,
  courseName,
  selectedVal,
  setshowpdf,
  mainlogo,
  actualDlink,
  credits,
  extract,
  dataerror,
  raw,
  onRegenerate, // ← re-runs the original fetch (PDF + AI solution); called with an optional model override
  onCreditsChange, // ← lets the parent persist a new balance when an AI tool reports one
}) => {
  const [solnsOpen, setSolnsOpen] = useState(false)
  const [recentItems, setRecentItems] = useState(getRecents)
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const [saveOpen, setSaveOpen] = useState(false)
  const [rawView, setRawView] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [savedquery, setSavedquery] = useState(null)
  const [founditems, setFounditems] = useState([])
  const [loadingQueries, setLoadingQueries] = useState(false)
  const [queryError, setQueryError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [queriesPage, setQueriesPage] = useState(1)
  const [hasMoreQueries, setHasMoreQueries] = useState(false)
  const [isLoadingMoreQueries, setIsLoadingMoreQueries] = useState(false)
  const [activeTab, setActiveTab] = useState('saved') // 'saved' | 'recent'
  const [isRegenerating, setIsRegenerating] = useState(false)
  const [expanded, setExpanded] = useState(false) // solutions drawer: half-screen vs. full-width
  const [pickedModel, setPickedModel] = useState(null) // model chosen for the NEXT regenerate (null = keep current)
  const [aiTool, setAiTool] = useState(null) // key from AI_TOOLS while a tool is showing, else null
  const [aiMounted, setAiMounted] = useState(false) // once opened, the panel stays mounted (hidden) to keep paid results
  const [creditsOverride, setCreditsOverride] = useState(null) // fresher balance reported by an AI tool

  const controllerRef = useRef(null)
  const searchDebounceRef = useRef(null)
  const lastFetchedTermRef = useRef('') // term the saved list currently reflects

  // ── Fetch solutions (all or filtered) ───────────────────────────────────

  // `page` defaults to 1 (a fresh search/filter/initial load, replacing the
  // list); pass `{ append: true, page: n }` for "Load more", which appends
  // instead of replacing and drives its own loading flag so the existing
  // list stays visible underneath the in-progress fetch.
  const fetchSolutions = useCallback(async (term = '', { page = 1, append = false } = {}) => {
    controllerRef.current?.abort()
    controllerRef.current = new AbortController()

    const isTerm = term.trim().length > 0
    if (!append) lastFetchedTermRef.current = term.trim()
    if (append) {
      setIsLoadingMoreQueries(true)
    } else {
      isTerm ? setIsSearching(true) : setLoadingQueries(true)
    }
    setQueryError('')

    let accessToken, refreshToken, userId
    try {
      ;({ accessToken, refreshToken, userId } = getAuthTokens())
    } catch (e) {
      setQueryError(e.message)
      if (append) setIsLoadingMoreQueries(false)
      else isTerm ? setIsSearching(false) : setLoadingQueries(false)
      return
    }

    const params = new URLSearchParams({ page: String(page), pageSize: String(QUERIES_PAGE_SIZE) })
    if (userId) params.set('userId', userId)
    if (isTerm) params.set('courseName', term.trim())
    const url = `${domain}/api/v1/solutions/queries?${params.toString()}`

    const timeout = setTimeout(() => controllerRef.current?.abort(), FETCH_TIMEOUT_MS)

    try {
      // Response envelope: `data` is the array of solutions for this page and
      // the paging info is in `meta.pagination` (page, pageSize, totalCount,
      // totalPages, hasNext, hasPrevious). Newest first — don't re-sort.
      const { data, meta } = await fetchWithAuthEnvelope(url, {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` },
        signal: controllerRef.current.signal,
      })
      // `data.solutions` is the pre-envelope shape; tolerated so a frontend
      // that ships a moment before the backend doesn't show an empty list.
      const newSolutions = Array.isArray(data) ? data : Array.isArray(data?.solutions) ? data.solutions : []
      const paging = meta?.pagination ?? (data && !Array.isArray(data) ? data : null)
      const normalised = {
        solutions: newSolutions,
        solutions_count: paging?.totalCount ?? paging?.solutions_count ?? newSolutions.length,
      }
      // No pagination info at all → treat as "no more pages" rather than
      // showing a Load more button forever.
      const nextHasMore = paging?.hasNext ?? false

      setFounditems((prev) =>
        append
          ? { ...normalised, solutions: [...(prev?.solutions ?? []), ...newSolutions] }
          : normalised
      )
      setHasMoreQueries(nextHasMore)
      setQueriesPage(page)
    } catch (err) {
      if (err.name !== 'AbortError') {
        setQueryError(isTerm ? 'Search failed. Try again.' : 'Could not load saved queries.')
      }
    } finally {
      clearTimeout(timeout)
      if (append) setIsLoadingMoreQueries(false)
      else isTerm ? setIsSearching(false) : setLoadingQueries(false)
    }
  }, [])

  useEffect(() => {
    fetchSolutions()
    return () => {
      controllerRef.current?.abort()
      clearTimeout(searchDebounceRef.current)
    }
  }, [fetchSolutions])

  // The one search box serves both tabs. Saved queries live on the server, so
  // typing there is debounced into a server search; Recents live in
  // localStorage, so they're filtered instantly on the client (see
  // `filteredRecents`) and typing there never hits the network.
  const handleSearchChange = useCallback((e) => {
    const val = e.target.value
    setSearchTerm(val)
    clearTimeout(searchDebounceRef.current)
    if (activeTab !== 'saved') return
    searchDebounceRef.current = setTimeout(() => fetchSolutions(val), SEARCH_DEBOUNCE_MS)
  }, [fetchSolutions, activeTab])

  const switchTab = useCallback((tab) => {
    setActiveTab(tab)
    clearTimeout(searchDebounceRef.current)
    // Coming back to Saved after typing while on Recents: the list still
    // reflects the old term, so bring it in line with what's in the box.
    if (tab === 'saved' && lastFetchedTermRef.current !== searchTerm.trim()) {
      fetchSolutions(searchTerm)
    }
  }, [fetchSolutions, searchTerm])

  const handleLoadMoreQueries = useCallback(() => {
    if (!hasMoreQueries || isLoadingMoreQueries) return
    fetchSolutions(searchTerm, { page: queriesPage + 1, append: true })
  }, [fetchSolutions, hasMoreQueries, isLoadingMoreQueries, queriesPage, searchTerm])

  // Save to recents when extract resolves
  useEffect(() => {
    if (extract && extract !== 'loading...' && !dataerror?.length) {
      saveToRecents(courseName, extract)
      setRecentItems(getRecents())
    }
  }, [extract, courseName, dataerror])

  // ── Derived ──────────────────────────────────────────────────────────────

  const isLoading = extract === 'loading...'
  const hasError = dataerror?.length > 0 || !extract || extract === 'loading...'
  const hasDownload = /download/gi.test(actualDlink)

  const filteredRecents = useMemo(() => {
    const t = searchTerm.trim().toLowerCase()
    if (!t) return recentItems
    return recentItems.filter((x) => (x.course || '').toLowerCase().includes(t))
  }, [recentItems, searchTerm])

  // Credits: prefer a fresher balance an AI tool just reported; fall back to
  // whatever the parent passes. A new value from the parent wins again.
  useEffect(() => { setCreditsOverride(null) }, [credits])
  useEffect(() => onCredits((n) => {
    setCreditsOverride(n)
    onCreditsChange?.(n)
  }), [onCreditsChange])
  const shownCredits = creditsOverride ?? credits ?? '0'

  // A finished regenerate (or a different model in play) clears the pending pick.
  useEffect(() => { setPickedModel(null) }, [selectedVal])

  // The AI tools work on whatever solution is on screen (live, saved or recent).
  const shownSolution = savedquery?.solution || (hasError ? '' : extract) || ''
  const aiSourceText = useMemo(
    () => solutionToPlainText(shownSolution ? marked(shownSolution) : ''),
    [shownSolution]
  )
  const aiCourse = savedquery?.course || courseName
  // A different solution (or a regenerate) means any open tool was working on
  // stale material, so reset them rather than quietly mixing sources.
  const aiSourceKey = `${savedquery?.id ?? savedquery?.course ?? 'live'}|${aiSourceText.length}|${aiSourceText.slice(0, 40)}`
  useEffect(() => { setAiTool(null); setAiMounted(false) }, [aiSourceKey])

  const toggleAiTool = (key) => {
    setAiMounted(true)
    setAiTool((prev) => (prev === key ? null : key))
  }
  const selectAiTool = (key) => { setAiMounted(true); setAiTool(key) }

  // Once a fresh load starts coming in (isLoading flips true again), drop the
  // local "regenerating" flag so the button re-appears whatever the outcome.
  useEffect(() => {
    if (isLoading) setIsRegenerating(false)
  }, [isLoading])

  // Regenerating a successful result still spends a credit (getpayload hits the
  // paid /solutions endpoint every time), so confirm before doing that. A failed
  // result costs nothing extra to retry, so no prompt needed there.
  const handleRegenerate = () => {
    if (!onRegenerate || isRegenerating) return
    const modelName = labelForModel(pickedModel || selectedVal)
    const withModel = modelName ? ` with ${modelName}` : ''
    if (!hasError && !confirm(`Regenerate${withModel}? This uses another credit for a fresh solution.`)) return
    setIsRegenerating(true)
    setAiTool(null)
    onRegenerate(pickedModel || undefined)
  }

  const renderedContent = () => {
    if (hasError && !savedquery) return `<div class='sf-ai-error'>${dataerror}</div>`
    if (rawView) return marked(savedquery?.solution || extract || dataerror || '')
    return raw?.replace(/(university.?of.?ghana)|(all.?rights.?reserved)/gim, '') || ''
  }

  return (
    <>
      <style>{STYLES}</style>

      <div className="sf-root">
        {/* ── PDF pane ── */}
        <div className="sf-pdf-pane">
          <div className="sf-pdf-topbar">
            <button className="sf-icon-btn" onClick={() => setshowpdf(false)} title="Close">
              <i className="fa fa-times" />
            </button>
            <img src={mainlogo} className="sf-logo" alt="logo" />
            <QuickNav />
            <div className="sf-pdf-topbar__actions">
              {(iframeLoaded || raw) ? (
                <>
                  {hasDownload && (
                    <a
                      href={LocalApiPath + actualDlink}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sf-pill-btn"
                    >
                      <ArrowDownOutlined /> Download
                    </a>
                  )}
                  <Link
                    to="/payment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sf-pill-btn sf-pill-btn--topup"
                  >
                    <MoneyCollectOutlined /> Top up
                  </Link>
                  <div className="sf-pill-btn sf-pill-btn--accent" onClick={() => setSolnsOpen(true)}>
                    <SparkIcon /> Solutions
                  </div>
                </>
              ) : (
                <>
                  <div className="sf-skeleton" style={{ width: 90, height: 30, borderRadius: 20 }} />
                  <div className="sf-skeleton" style={{ width: 100, height: 30, borderRadius: 20 }} />
                </>
              )}
            </div>
          </div>

          <div className="sf-pdf-body">
            <PdfViewer
              url={`${LocalApiPath}${pdflink}&embedded=true`}
              setIframeLoaded={setIframeLoaded}
            />
          </div>
        </div>

        {/* ── Solutions drawer ── */}
        {solnsOpen && (
          <div className={`sf-drawer ${expanded ? 'sf-drawer--expanded' : ''}`}>
            {/* Drawer topbar */}
            <div className="sf-drawer__topbar">
              <button
                className="sf-icon-btn"
                onClick={() => { setSolnsOpen(false); setSavedquery(null); setExpanded(false) }}
                title="Close solutions"
              >
                <CloseOutlined />
              </button>
              <span className="sf-drawer__title">
                {savedquery ? (
                  <span className="sf-drawer__title-course">
                    {savedquery.course || courseName}
                  </span>
                ) : (
                  'Solutions'
                )}
              </span>
              <button
                className="sf-icon-btn"
                onClick={() => setExpanded((v) => !v)}
                title={expanded ? 'Collapse' : 'Expand to full screen'}
              >
                {expanded ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
              </button>
              <div className="sf-drawer__credits">
                <ModelPicker
                  currentVal={selectedVal}
                  pendingVal={pickedModel}
                  onPick={setPickedModel}
                  disabled={isLoading || isRegenerating}
                />
                <Link to="/Payment" target="_blank" rel="noopener noreferrer" className="sf-credits-pill">
                  <i className="fa fa-bolt sf-credits-pill__icon" />
                  <strong>{shownCredits}</strong>
                  <span className="sf-credits-pill__topup"><MoneyCollectOutlined /> Top up</span>
                </Link>
              </div>
            </div>

            {/* Status banner */}
            {!isLoading && (
              <div className={`sf-banner ${hasError ? 'sf-banner--error' : 'sf-banner--success'}`}>
                {hasError ? 'Extraction failed' : 'Extraction successful'}
              </div>
            )}

            {/* Main body: sidebar + content */}
            <div className="sf-drawer__body">

              {/* Sidebar */}
              <div className={`sf-sidebar ${sidebarOpen ? 'sf-sidebar--open' : ''}`}>
                <div className="sf-sidebar__inner">
                  <div className="sf-sidebar__art">
                    <img src={racoon_learn} alt="" />
                  </div>

                  {/* Search */}
                  <div className="sf-search-wrap">
                    <i className="fa fa-search sf-search-wrap__icon" />
                    <input
                      type="search"
                      className="sf-search"
                      placeholder={activeTab === 'recent' ? 'Filter recents…' : 'Search saved queries…'}
                      aria-label={activeTab === 'recent' ? 'Filter recent solutions' : 'Search saved queries'}
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                    {isSearching && <span className="sf-search-wrap__spin sf-search-wrap__spin--anim" />}
                  </div>

                  {/* Tabs */}
                  <div className="sf-tabs">
                    <button
                      className={`sf-tab ${activeTab === 'saved' ? 'sf-tab--active' : ''}`}
                      onClick={() => switchTab('saved')}
                    >
                      <SolutionOutlined /> Saved
                    </button>
                    <button
                      className={`sf-tab ${activeTab === 'recent' ? 'sf-tab--active' : ''}`}
                      onClick={() => switchTab('recent')}
                    >
                      Recent
                    </button>
                  </div>

                  {/* List */}
                  <div className="sf-list">
                    {activeTab === 'saved' ? (
                      loadingQueries || isSearching ? (
                        [1,2,3].map(i => (
                          <div className="sf-list-item" key={i}>
                            <Skeleton height={12} width="70%" />
                          </div>
                        ))
                      ) : queryError ? (
                        <div className="sf-list-empty sf-list-empty--error">{queryError}</div>
                      ) : founditems?.solutions?.length > 0 ? (
                        <>
                          {founditems.solutions.map((x, y) => (
                            <div
                              className={`sf-list-item ${savedquery?.id != null && savedquery.id === x.id ? 'sf-list-item--active' : ''}`}
                              onClick={() => { setSavedquery(x); setRawView(true) }}
                              key={x.id ?? y}
                            >
                              <span className="sf-list-item__initial">{(x.course||'?')[0].toUpperCase()}</span>
                              <div className="sf-list-item__info">
                                <span className="sf-list-item__label">{x.course}</span>
                                <span className="sf-list-item__meta">Saved query</span>
                              </div>
                              <i className="fa fa-chevron-right sf-list-item__arrow" />
                            </div>
                          ))}
                          {hasMoreQueries && (
                            <button
                              type="button"
                              className="sf-load-more"
                              onClick={handleLoadMoreQueries}
                              disabled={isLoadingMoreQueries}
                            >
                              {isLoadingMoreQueries ? 'Loading…' : 'Load more'}
                            </button>
                          )}
                        </>
                      ) : (
                        <div className="sf-list-empty">
                          {searchTerm.trim() ? `No results for "${searchTerm.trim()}"` : 'No saved queries yet'}
                        </div>
                      )
                    ) : (
                      filteredRecents.length > 0 ? (
                        filteredRecents.map((x) => (
                          <div
                            className={`sf-list-item ${savedquery?.course === x.course && savedquery?.id == null ? 'sf-list-item--active sf-list-item--recent' : ''}`}
                            onClick={() => { setSavedquery(x); setRawView(true) }}
                            key={'r' + x.course}
                          >
                            <span className="sf-list-item__initial sf-list-item__initial--recent">{(x.course||'?')[0].toUpperCase()}</span>
                            <div className="sf-list-item__info">
                              <span className="sf-list-item__label">{x.course}</span>
                              <span className="sf-list-item__meta">Recent</span>
                            </div>
                            <i className="fa fa-chevron-right sf-list-item__arrow" />
                          </div>
                        ))
                      ) : (
                        <div className="sf-list-empty">
                          {searchTerm.trim() ? `No recents match "${searchTerm.trim()}"` : 'No recent activity'}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Content area */}
              <div className="sf-content">
                {/* Content toolbar */}
                <div className="sf-content__toolbar">
                  <button
                    className="sf-icon-btn sf-sidebar-toggle"
                    onClick={() => setSidebarOpen(v => !v)}
                    title="Toggle sidebar"
                  >
                    <i className={`fa fa-${sidebarOpen ? 'indent' : 'dedent'}`} />
                  </button>

                  {!isLoading && (
                    <div className="sf-view-toggle">
                      <button
                        className={`sf-view-toggle__btn ${rawView && !aiTool ? 'sf-view-toggle__btn--active' : ''}`}
                        onClick={() => { setRawView(true); setAiTool(null) }}
                      >
                        <CheckCircleOutlined style={{marginRight:5}}/>{" Solved"}
                      </button>
                      <button
                        className={`sf-view-toggle__btn ${!rawView && !aiTool ? 'sf-view-toggle__btn--active' : ''}`}
                        onClick={() => { setRawView(false); setAiTool(null) }}
                      >
                        <CodeOutlined style={{marginRight:5}}/> Raw
                      </button>
                    </div>
                  )}

                  <div className="sf-content__toolbar-right">
                    {savedquery && (
                      <button
                        className="sf-pill-btn sf-pill-btn--active"
                        onClick={() => { setSavedquery(null); setRawView(true) }}
                        title="Back to current result"
                      >
                        Live result
                      </button>
                    )}
                    {/* Regenerate: shown for the live (not saved/recent) result whether it
                        succeeded or failed. Red-tinted on failure, neutral on success. */}
                    {!isLoading && !savedquery && (
                      <button
                        className={`sf-pill-btn sf-pill-btn--regenerate ${hasError ? '' : 'sf-pill-btn--regenerate-ok'}`}
                        onClick={handleRegenerate}
                        disabled={!onRegenerate || isRegenerating}
                        title={
                          pickedModel
                            ? `Regenerate with ${labelForModel(pickedModel)} (uses a credit)`
                            : hasError ? 'Try generating the solution again' : 'Generate a fresh solution (uses a credit)'
                        }
                      >
                        {isRegenerating ? (
                          <span className="sf-modal__spinner sf-modal__spinner--small" />
                        ) : (
                          <>
                            <ReloadOutlined /> Regenerate
                            {pickedModel && <span className="sf-pill-btn__model">· {labelForModel(pickedModel)}</span>}
                          </>
                        )}
                      </button>
                    )}
                    {!isLoading && !hasError && (
                      <button className="sf-pill-btn" onClick={() => setSaveOpen(true)}>
                        <i className="fa fa-bookmark" /> Save
                      </button>
                    )}
                  </div>
                </div>

                {/* AI tools — the Learning Hub's generators, working on this solution */}
                {!isLoading && (
                  <div className="sf-aistrip" role="toolbar" aria-label="AI study tools">
                    <span className="sf-aistrip__label"><SparkIcon size={12} /> AI tools</span>
                    <div className="sf-aistrip__scroll">
                      {AI_TOOLS.map((t, i) => (
                        <React.Fragment key={t.key}>
                          {i > 0 && AI_TOOLS[i - 1].group !== t.group && <span className="sf-aistrip__sep" aria-hidden="true" />}
                          <button
                            type="button"
                            className={`sf-ai-chip ${aiTool === t.key ? 'sf-ai-chip--active' : ''}`}
                            onClick={() => toggleAiTool(t.key)}
                            aria-pressed={aiTool === t.key}
                            title={t.blurb}
                          >
                            <t.Icon size={14} strokeWidth={1.8} /> {t.label}
                          </button>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}

                {aiMounted && !isLoading && (
                  <SolutionAIPanel
                    activeTool={aiTool}
                    onSelectTool={selectAiTool}
                    onClose={() => setAiTool(null)}
                    sourceText={aiSourceText}
                    courseName={aiCourse}
                  />
                )}

                {/* Content body */}
                <div className="sf-content__body" hidden={!!aiTool && !isLoading}>
                  {isLoading ? (
                    <div className="sf-content__loading">
                      {[90,75,85,60,80].map((w,i) => (
                        <Skeleton key={i} width={`${w}%`} height={13} style={{ marginBottom: 10 }} />
                      ))}
                    </div>
                  ) : (
                    <div
                      className="sf-prose"
                      dangerouslySetInnerHTML={{ __html: renderedContent() }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {saveOpen && (
        <SaveModal
          selectedVal={selectedVal}
          courseName={courseName}
          setstoreme={setSaveOpen}
          extract={extract}
        />
      )}
    </>
  )
}

export default Showfiles

// ─── Styles ───────────────────────────────────────────────────────────────────

const STYLES = `
  .sf-root {
    position: fixed;
    inset: 0;
    display: flex;
    background: #0d0d0f;
    color: #e8e8e8;
    font-family: 'Segoe UI', system-ui, sans-serif;
    z-index: 1000;
    overflow: hidden;
  }

  /* ── PDF pane ── */
  .sf-pdf-pane {
    display: flex;
    flex-direction: column;
    flex: 1 1 0;
    min-width: 0;
    width: 0; /* prevents flex child from overflowing on mobile */
    border-right: 1px solid #1e1e24;
    box-sizing: border-box;
  }
  .sf-pdf-topbar {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    background: #111115;
    border-bottom: 1px solid #1e1e24;
    flex-shrink: 0;
  }
  .sf-pdf-topbar__actions { display: flex; align-items: center; gap: 8px; margin-left: auto; }
  .sf-logo { height: 28px; object-fit: contain; }

  /* ── Quick-nav strip: jump to any other feature without losing this solution ── */
  .sf-quicknav {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 6px;
    border-radius: 999px;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(148,163,255,0.14);
    overflow-x: auto;
    scrollbar-width: none;
    max-width: 320px;
  }
  .sf-quicknav::-webkit-scrollbar { display: none; }
  .sf-quicknav__item {
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    color: rgba(232,232,232,0.65);
    transition: color .15s ease, background .15s ease, box-shadow .15s ease;
  }
  .sf-quicknav__item:hover {
    color: #0d0d0f;
    background: linear-gradient(135deg, #22d3ee, #a78bfa);
    box-shadow: 0 0 12px rgba(34,211,238,0.45);
  }
  @media (max-width: 900px) {
    .sf-quicknav { max-width: 140px; }
  }
  .sf-pdf-body {
    flex: 1;
    overflow: hidden;
    position: relative;
    min-height: 0;
  }
  .sf-pdf-body > * {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
  }

  /* ── Drawer ── */
  .sf-drawer {
    width: 52vw;
    min-width: 340px;
    max-width: 780px;
    display: flex;
    flex-direction: column;
    background: #111115;
    border-left: 1px solid #1e1e24;
    overflow: hidden;
    transition: width .22s ease, max-width .22s ease;
  }
  /* Extend button toggles this — drawer covers the full window edge to edge,
     overlaying the PDF pane instead of sharing space with it. */
  .sf-drawer--expanded {
    position: fixed;
    inset: 0;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    border-left: none;
    z-index: 1150;
    animation: sf-slide-up .22s ease;
  }
  .sf-drawer__topbar {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    background: #0d0d0f;
    border-bottom: 1px solid #1e1e24;
    flex-shrink: 0;
  }
  .sf-drawer__title {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: .02em;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #c8c8d0;
  }
  .sf-drawer__title-course { color: #7dd3fc; }
  .sf-drawer__credits { margin-left: auto; flex-shrink: 0; display: flex; align-items: center; gap: 8px; min-width: 0; }
  .sf-credits-pill__icon { font-size: 11px; }
  .sf-credits-pill {
    display: flex;
    align-items: center;
    gap: 5px;
    background: #1e1e2a;
    border: 1px solid #2e2e3a;
    border-radius: 20px;
    padding: 4px 10px;
    font-size: 12px;
    color: #fbbf24;
    text-decoration: none;
    transition: background .15s;
  }
  .sf-credits-pill:hover { background: #25253a; }
  .sf-credits-pill__topup {
    color: #94a3b8;
    border-left: 1px solid #2e2e3a;
    padding-left: 8px;
    margin-left: 4px;
  }

  /* ── Banner ── */
  .sf-banner {
    padding: 6px 16px;
    font-size: 12px;
    font-weight: 500;
    flex-shrink: 0;
  }
  .sf-banner--success { background: #0d2b1e; color: #4ade80; border-bottom: 1px solid #14532d; }
  .sf-banner--error   { background: #2b0d0d; color: #f87171; border-bottom: 1px solid #7f1d1d; }

  /* ── Drawer body ── */
  .sf-drawer__body {
    flex: 1;
    display: flex;
    overflow: hidden;
  }

  /* ── Sidebar ── */
  .sf-sidebar {
    width: 0;
    overflow: hidden;
    transition: width .22s ease;
    background: #0d0d0f;
    border-right: 1px solid #1e1e24;
    flex-shrink: 0;
  }
  .sf-sidebar--open { width: 220px; }
  .sf-sidebar__inner {
    width: 220px;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .sf-sidebar__art {
    flex-shrink: 0;
    height: 80px;
    overflow: hidden;
    position: relative;
  }
  .sf-sidebar__art img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: .55;
  }
  .sf-sidebar__art::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 40%, #0d0d0f);
  }

  /* Search */
  .sf-search-wrap {
    position: relative;
    padding: 10px 10px 6px;
    flex-shrink: 0;
  }
  .sf-search-wrap__icon {
    position: absolute;
    left: 18px;
    top: 50%;
    transform: translateY(-30%);
    font-size: 11px;
    color: #555;
    pointer-events: none;
  }
  .sf-search-wrap__spin--anim {
    width: 12px;
    height: 12px;
    border: 2px solid #2a2a38;
    border-top-color: #6366f1;
    border-radius: 50%;
    animation: sf-spin .7s linear infinite;
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-30%);
    display: inline-block;
  }
  .sf-search-wrap__spin {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-30%);
    font-size: 11px;
  }
  .sf-search {
    width: 100%;
    background: #1a1a20;
    border: 1px solid #2a2a34;
    border-radius: 8px;
    padding: 6px 28px 6px 28px;
    font-size: 12px;
    color: #d0d0da;
    outline: none;
    box-sizing: border-box;
  }
  .sf-search:focus { border-color: #4f46e5; }

  /* Tabs */
  .sf-tabs {
    display: flex;
    padding: 0 10px;
    gap: 4px;
    flex-shrink: 0;
    border-bottom: 1px solid #1e1e24;
    margin-bottom: 4px;
  }
  .sf-tab {
    flex: 1;
    padding: 7px 4px;
    font-size: 11px;
    background: transparent;
    border: none;
    color: #666;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: color .15s, border-color .15s;
  }
  .sf-tab--active { color: #a5b4fc; border-bottom-color: #6366f1; }

  /* List */
  .sf-list {
    flex: 1;
    overflow-y: auto;
    padding: 4px 8px 8px;
  }
  .sf-list::-webkit-scrollbar { width: 4px; }
  .sf-list::-webkit-scrollbar-thumb { background: #2a2a36; border-radius: 4px; }
  .sf-list-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: background .12s, border-color .12s;
    margin-bottom: 3px;
    border: 1px solid transparent;
    position: relative;
  }
  .sf-list-item:hover { background: #16161e; border-color: #2a2a38; }
  .sf-list-item--active {
    background: #12122a !important;
    border-color: #4338ca !important;
  }
  .sf-list-item--recent.sf-list-item--active {
    background: #1a1408 !important;
    border-color: #92400e !important;
  }

  /* Coloured initial avatar */
  .sf-list-item__initial {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: linear-gradient(135deg, #3730a3, #6366f1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 700;
    color: #fff;
    letter-spacing: 0;
  }
  .sf-list-item__initial--recent {
    background: linear-gradient(135deg, #92400e, #d97706);
  }
  .sf-list-item--active .sf-list-item__initial {
    box-shadow: 0 0 0 2px #6366f1;
  }
  .sf-list-item--recent.sf-list-item--active .sf-list-item__initial {
    box-shadow: 0 0 0 2px #d97706;
  }

  /* Text block */
  .sf-list-item__info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .sf-list-item__label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    font-weight: 500;
    color: #c0c0cc;
    line-height: 1.3;
  }
  .sf-list-item--active .sf-list-item__label { color: #a5b4fc; }
  .sf-list-item--recent.sf-list-item--active .sf-list-item__label { color: #fcd34d; }
  .sf-list-item__meta {
    font-size: 10px;
    color: #444;
    text-transform: uppercase;
    letter-spacing: .04em;
  }

  /* Chevron */
  .sf-list-item__arrow {
    flex-shrink: 0;
    font-size: 9px;
    color: #333;
    transition: color .12s, transform .12s;
  }
  .sf-list-item:hover .sf-list-item__arrow { color: #666; transform: translateX(1px); }
  .sf-list-item--active .sf-list-item__arrow { color: #6366f1; transform: translateX(2px); }

  .sf-list-empty {
    padding: 20px 12px;
    font-size: 12px;
    color: #383840;
    text-align: center;
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }
  .sf-list-empty--error { color: #f87171; }

  .sf-load-more {
    display: block;
    width: 100%;
    margin-top: 6px;
    padding: 9px 10px;
    border-radius: 10px;
    border: 1px solid #2a2a38;
    background: transparent;
    color: #a5b4fc;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: background .12s, border-color .12s;
  }
  .sf-load-more:hover:not(:disabled) { background: #16161e; border-color: #4338ca; }
  .sf-load-more:disabled { color: #444; cursor: default; }

  /* ── Content area ── */
  .sf-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .sf-content__toolbar {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-bottom: 1px solid #1e1e24;
    flex-shrink: 0;
    background: #0f0f13;
  }
  .sf-content__toolbar-right { display: flex; align-items: center; gap: 6px; margin-left: auto; }

  .sf-view-toggle {
    display: flex;
    background: #1a1a20;
    border-radius: 8px;
    padding: 2px;
    gap: 2px;
  }
  .sf-view-toggle__btn {
    padding: 4px 12px;
    border-radius: 6px;
    border: none;
    background: transparent;
    color: #666;
    font-size: 12px;
    cursor: pointer;
    transition: background .12s, color .12s;
  }
  .sf-view-toggle__btn--active { background: #2a2a38; color: #a5b4fc; }

  .sf-content__body {
    flex: 1;
    overflow-y: auto;
    padding: 20px 24px;
  }
  .sf-content__body::-webkit-scrollbar { width: 5px; }
  .sf-content__body::-webkit-scrollbar-thumb { background: #2a2a36; border-radius: 4px; }

  .sf-content__loading { display: flex; flex-direction: column; padding-top: 8px; }

  /* Prose styles */
  .sf-prose { font-size: 14px; line-height: 1.75; color: #ccd0da; }
  .sf-prose h1,.sf-prose h2,.sf-prose h3 { color: #e8e8f0; margin: 1.2em 0 .4em; font-weight: 600; }
  .sf-prose h3 { font-size: 15px; color: #a5b4fc; }
  .sf-prose p { margin: 0 0 .9em; }
  .sf-prose code {
    background: #1e1e2a;
    border: 1px solid #2a2a38;
    border-radius: 4px;
    padding: 1px 5px;
    font-size: 12px;
    color: #7dd3fc;
  }
  .sf-prose pre {
    background: #141418;
    border: 1px solid #1e1e28;
    border-radius: 8px;
    padding: 14px;
    overflow-x: auto;
    margin: 1em 0;
  }
  .sf-prose pre code { background: transparent; border: none; padding: 0; color: #c8d3f0; }
  .sf-prose ul,.sf-prose ol { padding-left: 1.4em; margin: .6em 0; }
  .sf-prose li { margin-bottom: .3em; }
  .sf-prose strong { color: #e2e8f0; }
  .sf-prose a { color: #7dd3fc; text-decoration: none; }
  .sf-prose a:hover { text-decoration: underline; }
  .sf-ai-error {
    background: #2b0d0d;
    border: 1px solid #7f1d1d;
    border-radius: 8px;
    padding: 16px;
    color: #f87171;
    font-size: 13px;
  }

  /* ── Buttons ── */
  .sf-icon-btn {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 1px solid #1e1e28;
    background: #1a1a20;
    color: #aaa;
    cursor: pointer;
    transition: background .12s, color .12s;
    flex-shrink: 0;
  }
  .sf-icon-btn:hover { background: #22222e; color: #e0e0e8; }

  .sf-pill-btn {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 12px;
    border-radius: 20px;
    border: 1px solid #2a2a38;
    background: #1a1a22;
    color: #a0a0b8;
    font-size: 12px;
    cursor: pointer;
    text-decoration: none;
    transition: background .12s, color .12s;
    white-space: nowrap;
  }
  .sf-pill-btn:hover { background: #22222e; color: #e0e0e8; }
  .sf-pill-btn--accent { background: #1e1b4b; border-color: #4338ca; color: #a5b4fc; }
  .sf-pill-btn--accent:hover { background: #25224f; }
  .sf-pill-btn--active { background: #1c2a14; border-color: #4d7c0f; color: #a3e635; }

  /* Top-up pill next to Download/Solutions in the PDF topbar */
  .sf-pill-btn--topup { background: #1c1a0e; border-color: #92400e; color: #fbbf24; }
  .sf-pill-btn--topup:hover { background: #241d0a; color: #fde68a; }

  /* Regenerate pill in the solutions toolbar (red-tinted on failure) */
  .sf-pill-btn--regenerate { background: #2b0d0d; border-color: #7f1d1d; color: #f87171; }
  .sf-pill-btn--regenerate:hover:not(:disabled) { background: #3a1010; color: #fca5a5; }
  .sf-pill-btn--regenerate:disabled { opacity: .6; cursor: not-allowed; }

  /* Regenerate pill when shown on a successful result — neutral, not alarming */
  .sf-pill-btn--regenerate-ok { background: #1a1a22; border-color: #2a2a38; color: #a0a0b8; }
  .sf-pill-btn--regenerate-ok:hover:not(:disabled) { background: #22222e; color: #e0e0e8; }

  .sf-sidebar-toggle { flex-shrink: 0; }

  /* ── Skeleton ── */
  .sf-skeleton {
    background: linear-gradient(90deg, #1a1a22 25%, #22222e 50%, #1a1a22 75%);
    background-size: 200% 100%;
    animation: sf-shimmer 1.4s infinite;
    display: block;
  }
  @keyframes sf-shimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  /* ── Toast ── */
  .sf-toast {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    border-radius: 10px;
    font-size: 13px;
    z-index: 9999;
    animation: sf-fadein .2s ease;
    box-shadow: 0 4px 20px rgba(0,0,0,.5);
  }
  .sf-toast--error   { background: #2b0d0d; border: 1px solid #7f1d1d; color: #f87171; }
  .sf-toast__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .sf-toast__dot--error   { background: #f87171; }
  .sf-toast__dot--success { background: #4ade80; }
  .sf-toast--success { background: #0d2b1e; border: 1px solid #14532d; color: #4ade80; }
  @keyframes sf-fadein { from { opacity:0; transform: translateX(-50%) translateY(8px); } to { opacity:1; transform: translateX(-50%) translateY(0); } }

  /* ── Save modal ── */
  .sf-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    backdrop-filter: blur(4px);
  }
  .sf-modal {
    width: 420px;
    max-width: 94vw;
    background: #111115;
    border: 1px solid #1e1e28;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 24px 60px rgba(0,0,0,.6);
    animation: sf-fadein .2s ease;
  }
  .sf-modal__close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(0,0,0,.4);
    border: none;
    color: #aaa;
    font-size: 16px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sf-modal__close:hover { color: #fff; }
  .sf-modal__art { height: 140px; overflow: hidden; position: relative; }
  .sf-modal__art img { width: 100%; height: 100%; object-fit: cover; opacity: .6; }
  .sf-modal__art-fade {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 30%, #111115);
  }
  .sf-modal__body { padding: 20px 22px 24px; }
  .sf-modal__title { margin: 0 0 14px; font-size: 16px; font-weight: 700; color: #e8e8f0; }
  .sf-modal__notice {
    display: flex;
    gap: 10px;
    background: #1c1a0e;
    border: 1px solid #3d3200;
    border-radius: 8px;
    padding: 10px 12px;
    margin-bottom: 16px;
    font-size: 12px;
    color: #d4b84a;
    line-height: 1.5;
  }
  .sf-modal__notice-icon { font-size: 14px; flex-shrink: 0; color: #d97706; margin-top: 1px; }
  .sf-modal__notice strong { color: #fbbf24; }
  .sf-modal__field { margin-bottom: 16px; }
  .sf-modal__field label { display: block; font-size: 11px; color: #666; margin-bottom: 6px; text-transform: uppercase; letter-spacing: .05em; }
  .sf-modal__confirm-phrase {
    display: inline-block;
    background: #1a1a22;
    border: 1px dashed #3a3a48;
    border-radius: 6px;
    padding: 4px 10px;
    font-size: 12px;
    color: #a5b4fc;
    margin-bottom: 8px;
    font-style: italic;
  }
  .sf-modal__field input {
    width: 100%;
    background: #1a1a22;
    border: 1px solid #2a2a38;
    border-radius: 8px;
    padding: 9px 12px;
    font-size: 13px;
    color: #d0d0da;
    outline: none;
    box-sizing: border-box;
    transition: border-color .15s;
  }
  .sf-modal__field input:focus { border-color: #6366f1; }
  .sf-modal__input--invalid { border-color: #f87171 !important; }
  .sf-modal__save-btn {
    width: 100%;
    padding: 11px;
    background: #4f46e5;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background .15s, opacity .15s;
  }
  .sf-modal__save-btn:hover:not(:disabled) { background: #4338ca; }
  .sf-modal__save-btn:disabled { opacity: .55; cursor: not-allowed; }
  .sf-modal__spinner {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255,255,255,.25);
    border-top-color: #fff;
    border-radius: 50%;
    animation: sf-spin .6s linear infinite;
    display: inline-block;
  }
  .sf-modal__spinner--small { width: 12px; height: 12px; border-width: 2px; }
  @keyframes sf-spin { to { transform: rotate(360deg); } }


  /* ── Model picker (next to the credits pill) ── */
  .sf-model { position: relative; min-width: 0; }
  .sf-model__btn {
    display: flex;
    align-items: center;
    gap: 6px;
    max-width: 170px;
    padding: 4px 10px;
    border-radius: 20px;
    background: #1e1e2a;
    border: 1px solid #2e2e3a;
    color: #a5b4fc;
    font-size: 12px;
    cursor: pointer;
    transition: background .15s, border-color .15s;
  }
  .sf-model__btn:hover:not(:disabled) { background: #25253a; }
  .sf-model__btn:disabled { opacity: .55; cursor: not-allowed; }
  .sf-model__btn--pending { border-color: #4338ca; box-shadow: 0 0 0 1px rgba(99,102,241,.3); }
  .sf-model__name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; min-width: 0; }
  .sf-model__caret { font-size: 9px; color: #666; flex-shrink: 0; }
  .sf-model__pop {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    width: 280px;
    max-width: calc(100vw - 24px);
    background: #111115;
    border: 1px solid #2a2a38;
    border-radius: 12px;
    box-shadow: 0 16px 40px rgba(0,0,0,.6);
    z-index: 30;
    overflow: hidden;
    animation: sf-fadeup .15s ease;
  }
  @keyframes sf-fadeup { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
  .sf-model__search {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    border-bottom: 1px solid #1e1e24;
    color: #555;
    font-size: 12px;
  }
  .sf-model__search input {
    flex: 1;
    min-width: 0;
    background: #1a1a20;
    border: 1px solid #2a2a34;
    border-radius: 8px;
    padding: 6px 10px;
    font-size: 12px;
    color: #d0d0da;
    outline: none;
  }
  .sf-model__search input:focus { border-color: #4f46e5; }
  .sf-model__list { max-height: 260px; overflow-y: auto; padding: 6px; }
  .sf-model__list::-webkit-scrollbar { width: 4px; }
  .sf-model__list::-webkit-scrollbar-thumb { background: #2a2a36; border-radius: 4px; }
  .sf-model__row {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 8px 10px;
    border-radius: 8px;
    border: 1px solid transparent;
    background: transparent;
    color: #c0c0cc;
    font-size: 12px;
    text-align: left;
  }
  .sf-model__row--btn { cursor: pointer; transition: background .12s, border-color .12s; }
  .sf-model__row--btn:hover { background: #16161e; border-color: #2a2a38; }
  .sf-model__row--active { background: #12122a; border-color: #4338ca; color: #a5b4fc; }
  .sf-model__row-icon { color: #555; font-size: 12px; flex-shrink: 0; }
  .sf-model__row--active .sf-model__row-icon { color: #6366f1; }
  .sf-model__row-name { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .sf-model__tag {
    flex-shrink: 0;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: .05em;
    padding: 1px 6px;
    border-radius: 10px;
    background: #1c2a14;
    color: #a3e635;
    border: 1px solid #365314;
  }
  .sf-model__check { color: #6366f1; font-size: 11px; flex-shrink: 0; }
  .sf-model__empty { padding: 16px 10px; text-align: center; font-size: 12px; color: #666; }
  .sf-model__foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    flex-wrap: wrap;
    padding: 9px 12px;
    border-top: 1px solid #1e1e24;
    font-size: 11px;
    color: #666;
    line-height: 1.4;
  }
  .sf-model__foot strong { color: #94a3b8; font-weight: 600; }
  .sf-model__retry {
    background: none;
    border: none;
    padding: 0;
    color: #a5b4fc;
    font-size: 11px;
    cursor: pointer;
    text-decoration: underline;
  }
  .sf-pill-btn__model { opacity: .8; max-width: 110px; overflow: hidden; text-overflow: ellipsis; }

  /* ── AI tools strip (lives under the Solved/Raw toolbar) ── */
  .sf-aistrip {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 12px;
    border-bottom: 1px solid #1e1e24;
    background: #0d0d10;
    flex-shrink: 0;
    min-width: 0;
  }
  .sf-aistrip__label {
    display: flex;
    align-items: center;
    gap: 5px;
    flex-shrink: 0;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .08em;
    color: #6366f1;
  }
  .sf-aistrip__scroll {
    display: flex;
    align-items: center;
    gap: 6px;
    flex: 1;
    min-width: 0;
    overflow-x: auto;
    scrollbar-width: none;
    padding: 2px 14px 2px 0;
    -webkit-mask-image: linear-gradient(to right, #000 calc(100% - 20px), transparent);
            mask-image: linear-gradient(to right, #000 calc(100% - 20px), transparent);
  }
  .sf-aistrip__scroll::-webkit-scrollbar { display: none; }
  .sf-aistrip__sep { flex: none; width: 1px; height: 16px; background: #2a2a38; margin: 0 2px; }
  .sf-ai-chip {
    flex: none;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 5px 11px;
    border-radius: 20px;
    border: 1px solid #2a2a38;
    background: #1a1a22;
    color: #a0a0b8;
    font-size: 12px;
    cursor: pointer;
    white-space: nowrap;
    transition: background .12s, color .12s, border-color .12s;
  }
  .sf-ai-chip:hover { background: #22222e; color: #e0e0e8; }
  .sf-ai-chip--active {
    background: #1e1b4b;
    border-color: #4338ca;
    color: #a5b4fc;
    box-shadow: 0 0 0 1px rgba(99,102,241,.25);
  }
  .sf-ai-chip:focus-visible,
  .sf-model__btn:focus-visible,
  .sf-model__row--btn:focus-visible { outline: 2px solid #6366f1; outline-offset: 2px; }

  /* ── AI tool panel ──
     The tools are the Learning Hub's own components, which theme themselves
     through --hub-* variables. Re-pointing those variables here (always dark,
     indigo accent) makes them match this page instead of the Hub's theme. */
  .sf-ai {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    --hub-bg: #0d0d0f;
    --hub-surface-1: #111115;
    --hub-surface-2: #1a1a22;
    --hub-border: #2a2a38;
    --hub-text: #e8e8f0;
    --hub-text-muted: #8b8ba0;
    --hub-accent: #4f46e5;
    --hub-accent-2: #7dd3fc;
    --hub-danger: #f87171;
    --hub-success: #4ade80;
    color: var(--hub-text);
  }
  .sf-ai[hidden], .sf-ai__pane[hidden] { display: none !important; }
  .sf-ai__head {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 16px;
    border-bottom: 1px solid #1e1e24;
    flex-shrink: 0;
  }
  .sf-ai__head-text { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
  .sf-ai__title { display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: #c8c8d0; }
  .sf-ai__blurb { font-size: 11px; color: #666; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .sf-ai__notice {
    margin: 12px 16px 0;
    padding: 8px 12px;
    border-radius: 8px;
    background: #1c1a0e;
    border: 1px solid #3d3200;
    color: #d4b84a;
    font-size: 12px;
    line-height: 1.5;
    flex-shrink: 0;
  }
  .sf-ai__body { flex: 1; min-height: 0; overflow-y: auto; padding: 16px 20px 28px; }
  .sf-ai__body::-webkit-scrollbar { width: 5px; }
  .sf-ai__body::-webkit-scrollbar-thumb { background: #2a2a36; border-radius: 4px; }
  .sf-ai__loading { display: flex; flex-direction: column; gap: 10px; padding-top: 8px; }
  .sf-ai__fallback {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 28px 16px;
    text-align: center;
    color: #f87171;
    font-size: 13px;
  }
  .sf-ai__fallback p { margin: 0; }
  .sf-ai .hub-page { max-width: 720px; margin: 0 auto; padding: 0; }
  .sf-ai .hub-page > .hub-eyebrow { display: none; }
  .sf-ai .hub-page--chat { min-height: 50vh; }
  .sf-ai .hub-title { font-size: 20px; margin: 0 0 14px; }

  /* ── Responsive ── */
  @media (max-width: 700px) {
    /* PDF pane fills the whole screen normally */
    .sf-root { flex-direction: column; }
    .sf-pdf-pane {
      flex: 1;
      width: 100vw !important;
      min-width: 0 !important;
      border-right: none;
    }

    /* Drawer slides up as a full-screen fixed overlay — never competes with PDF pane */
    .sf-drawer {
      position: fixed;
      inset: 0;
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;
      border-left: none;
      z-index: 1100;
      animation: sf-slide-up .22s ease;
    }

    /* Sidebar narrows slightly on small screens */
    .sf-sidebar--open { width: 180px; }

    /* Tighten topbar on small screens */
    .sf-drawer__topbar { padding: 10px 12px; }

    /* Hide the Top up label to save space — icon + credits number is enough */
    .sf-credits-pill__topup { display: none; }

    /* Model picker: shrink the chip, and let the menu span the screen width
       (anchoring it to the chip would push it off the left edge on phones). */
    .sf-drawer__credits { gap: 6px; }
    .sf-model__btn { max-width: 104px; padding: 4px 8px; }
    .sf-model__pop { position: fixed; top: 56px; left: 12px; right: 12px; width: auto; max-width: none; }

    /* AI tools: drop the label, give the chips the whole row */
    .sf-aistrip__label { display: none; }
    .sf-ai__body { padding: 14px 14px 24px; }
    .sf-ai__head { padding: 8px 12px; }
  }

  @keyframes sf-slide-up {
    from { transform: translateY(100%); opacity: 0; }
    to   { transform: translateY(0);    opacity: 1; }
  }
`