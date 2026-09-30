import React, { useState, useEffect, useCallback, useRef } from 'react'
import Search from './Search'
import Showfiles from './Showfiles'
import pdfpic from '/imgs/pdf.png'
import {
  ExportOutlined, ArrowLeftOutlined, FileProtectOutlined,
  MoneyCollectOutlined, AppstoreOutlined, GoldFilled, DollarOutlined,
  SolutionOutlined, ScheduleOutlined, LogoutOutlined, TeamOutlined,MenuFoldOutlined,MenuUnfoldOutlined,
  TrophyOutlined, CloseCircleFilled, DisconnectOutlined,
  SoundOutlined, AimOutlined, SearchOutlined, EyeOutlined, LoadingOutlined,
} from '@ant-design/icons'
import { Link, useParams, useNavigate } from 'react-router-dom'
import mainlogo from '/imgs/titled.png'
import racoon from '/imgs/racoon_job.jpg'
import Overview from './menu/Overview'
import LoadComponent from './Loadcomponent'
import ModelComponent from './ModelComponent'
import { domain, fetchWithAuth, logout, LocalApiPath } from './menu/authfetch'
import { useAppContext } from './Appcontext'

// ─── helpers ─────────────────────────────────────────────────────────────────

function readStoredUser() {
  try {
    const raw = localStorage.getItem("userInfo");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

// ─── solution cache (localStorage) ─────────────────────────────────────────
// Lets /dashboard/solution/:filename survive a refresh without re-hitting
// the API, and lets App.jsx offer a "last solution" shortcut from the home
// page. Keyed by the same `namedfile` the API calls use.

const SOLUTION_CACHE_PREFIX = "solutionCache:";

function cacheSolution(namedfile, data) {
  try {
    localStorage.setItem(
      SOLUTION_CACHE_PREFIX + namedfile,
      JSON.stringify({ ...data, savedAt: Date.now() })
    );
  } catch {
    // quota exceeded — fail silently, it's just a cache
  }
}

function getCachedSolution(namedfile) {
  try {
    const raw = localStorage.getItem(SOLUTION_CACHE_PREFIX + namedfile);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/** Every solution cached locally, newest first. Reading this list — and
 *  opening any item in it — never touches the network, so it stays usable
 *  even while a different solution is mid-fetch elsewhere in the app. */
export function getAllCachedSolutions() {
  try {
    const all = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith(SOLUTION_CACHE_PREFIX)) continue;
      const data = JSON.parse(localStorage.getItem(key));
      if (!data) continue;
      const namedfile = key.slice(SOLUTION_CACHE_PREFIX.length);
      all.push({ ...data, namedfile });
    }
    return all.sort((a, b) => (b.savedAt ?? 0) - (a.savedAt ?? 0));
  } catch {
    return [];
  }
}

/** Most recently viewed solution across all cached files, or null. */
export function getLastSolution() {
  const all = getAllCachedSolutions();
  return all.length ? all[0] : null;
}

/**
 * The AI response contains HTML when valid (includes <h3> tags).
 * Returns the cleaned string, or null if the response signals an error.
 */
function parseAIResponse(response) {
  if (typeof response !== "string" || !response.includes("h3")) return null;
  return response;
}

// Renders a title with every "o"/"O" swapped for an eye icon — same playful
// effect as the old `.replace(/o/gi, "🧿")`, but as real inline SVGs instead
// of an emoji glyph baked into the string.
function renderTitleWithIcon(text) {
  return text.split(/([oO])/g).map((part, i) =>
    /^[oO]$/.test(part)
      ? "🔮"
      : part
  );
}

// Plain SVG star with a gold stroke and no fill, so it reads as a proper
// outline rather than an icon-font glyph colored gold.
const GoldStar = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fbbf24"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// Stack of cash / gold bills, same hand-drawn gold-outline treatment as
// GoldStar, used for the "Earn" badge instead of an icon-font wallet glyph.
const GoldCashStack = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fbbf24"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="15" width="20" height="5" rx="1" />
    <rect x="3.5" y="10.5" width="17" height="5" rx="1" />
    <rect x="5" y="6" width="14" height="5" rx="1" />
    <circle cx="12" cy="8.5" r="1.4" />
  </svg>
);

// ─── Toaster ─────────────────────────────────────────────────────────────────

const Toaster = ({ errorMessage, setfetchError }) => {
  React.useEffect(() => {
    const id = setTimeout(() => setfetchError(false), 4000);
    return () => clearTimeout(id);
  }, [setfetchError]);

  return (
    <div className="toast">
      <div className="successmessage">
        <CloseCircleFilled style={{ color: "#ff4d4f", marginRight: 6 }} />
        Sorry: <DisconnectOutlined style={{ margin: "0 4px" }} />
        {errorMessage.toLowerCase()}
      </div>
    </div>
  );
};

// ─── SearchList ───────────────────────────────────────────────────────────────

const SearchList = () => {
  const {
    find, setfind, payload, bar,
    courseName, setcourseName,
    credits, setcredits,
    pdflink, setpdflink,
    actualDlink, setactualDlink,
    dataerror, setdataerror,
    selectedVal, setselectedVal,
    setRefreshing,
    refreshing,
    NetworkError,
    setsearching,
    writeStoredUser,
  } = useAppContext();

  // currentView now lives in the URL (/dashboard/:view) instead of local
  // state, so refreshing the page keeps you on the same panel. Same idea
  // for the solutions area: /dashboard/solution/:filename instead of a
  // local `showpdf` boolean, so a refresh (or a shared/bookmarked link)
  // reopens the same solution instead of dropping back to the list.
  const { view, filename } = useParams();
  const navigate = useNavigate();
  const currentView = view ?? "";
  const setcurrentView = (v) => navigate(`/dashboard/${v}`);
  const [spin,         setspin]         = useState(false)
  const [fetchError,   setfetchError]   = useState(false)
  const [errorMessage, seterrorMessage] = useState("")
  const [selectModel,  setselectModel]  = useState(false)
  const [selectlink,   setselectlink]   = useState("")
  // showpdf is now derived from the URL rather than owned locally.
  const showpdf = !!filename
  const [extract,      setextract]      = useState("loading...")
  const [raw,          setraw]          = useState("")
  const [collapsed,    setCollapsed]    = useState(true);
  // Controls whether the side-menu panel is open. Defaults open when landing
  // directly on /dashboard/:view (e.g. a refresh or shared link) — otherwise
  // the panel stays clipped shut even though currentView is already correct.
  const [menuOpen,     setmenuOpen]     = useState(!!view)
  // Keep it open any time the URL's :view changes (covers in-app nav too,
  // not just the initial load)
  useEffect(() => {
    if (view) setmenuOpen(true);
  }, [view]);
  // ── course folder browsing (search → folders → papers) ──────────────────
  // `payload` (from context) is now the list of matching course FOLDERS, not
  // individual files — a search can match several years/semesters of the
  // same course, all filed under one folder. Opening a folder fetches the
  // papers inside it; picking a specific paper is what finally calls fix().
  const [openFolder,   setOpenFolder]   = useState(null); // the folder object, or null
  const [folderPapers, setFolderPapers] = useState([]);
  const [papersLoading, setPapersLoading] = useState(false);
  const [papersError,  setPapersError]  = useState("");

  const openFolderContents = async (folder) => {
    setOpenFolder(folder);
    setFolderPapers([]);
    setPapersError("");
    setPapersLoading(true);
    try {
      const data = await fetchWithAuth(
        `${domain}/api/v1/papers/folder-contents?folderPath=${encodeURIComponent(folder.folderPath)}`,
        { method: "GET" }
      );
      setFolderPapers(Array.isArray(data) ? data : data?.papers ?? data?.data?.papers ?? []);
    } catch (err) {
      setPapersError(err.message || "Couldn't load papers for this course.");
    } finally {
      setPapersLoading(false);
    }
  };

  const closeFolderContents = () => {
    setOpenFolder(null);
    setFolderPapers([]);
    setPapersError("");
  };

  // Starting a fresh top-level search should drop back out of whatever
  // folder was open — otherwise stale papers from a previous course would
  // linger behind the new search results.
  useEffect(() => {
    setOpenFolder(null);
    setFolderPapers([]);
    setPapersError("");
  }, [find]);

  const logoutUser = () => {
    if (confirm("Confirm to Leave")) {
      logout();
      location.reload();
    }
  }

  // ── open model selector ──
  // `fileId` is the paper's driveFileId (from /papers/folder-contents), not
  // a filename — the old flow stashed a URL like "...?x=<filename>" here
  // and getpayload() split it back out; now we carry the id straight
  // through, no encoding/decoding needed.
  const fix = (fileId, name) => {
    setcourseName(name);
    setselectModel(true);
    setselectlink(fileId);
  };

  // Filenames we've already kicked off a load for this session — prevents
  // the restore-on-URL-change effect below from firing a second, parallel
  // fetch for the same file right after loadSolution's own navigate()
  // changes :filename (that race was overwriting good responses with a
  // stray "Unexpected response format" from the duplicate call).
  const loadedFilesRef = useRef(new Set());

  // ── fetch AI solution for a given driveFileId, then navigate to its own
  //    route (/dashboard/solution/:fileId) so a refresh keeps it.
  //    `name` is the course name to remember/cache alongside it; pass null
  //    when restoring (courseName is already set from cache).
  const loadSolution = useCallback(async (fileId, modelVal, name) => {
    loadedFilesRef.current.add(fileId);
    const storedUser   = readStoredUser();
    const premiumstatus = storedUser?.pStatus ?? null;

    setextract("loading...");
    setdataerror("");
    setspin(true);
    setfetchError(false);
    seterrorMessage("");
    if (name) setcourseName(name);

    // The Node backend's download proxy (/api/files/download/:fileId) works
    // for any driveFileId regardless of how it was found, so the preview
    // and download links can be built straight from the id — no separate
    // "look this file up by name" round trip needed the way the old
    // filename-based flow required. We already HAVE the id, courtesy of
    // /papers/folder-contents.
    const previewLink    = `/api/files/download/${fileId}?preview=true`;
    const directDownload = `/api/files/download/${fileId}`;
    setpdflink(previewLink);
    setactualDlink(directDownload);
    setspin(false);

    // Move to the solution's own route now that we have the PDF links,
    // even before the AI solution itself comes back — the drawer shows
    // its own loading state for `extract`.
    navigate(`/dashboard/solution/${fileId}`);

    try {
      // Fetch the AI solution by driveFileId — replaces the old
      // filename-based /request/solutions call, which can't reliably
      // resolve a file in the current Drive layout (same-named papers,
      // scraper-generated filenames that don't match what a user would
      // type). courseName is passed through so the backend's auto-saved
      // SolutionModel row is categorized correctly instead of falling back
      // to "uncategorized".
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileId,
          selectedVal:   modelVal,
          premiumstatus: premiumstatus ?? "premiumstatus",
          courseName:    name ?? courseName,
        }),
      };

      const solutionResponse = await fetchWithAuth(
        `${domain}/api/v1/request/solutions/by-id`,
        options
      );

      if (!solutionResponse) {
        throw new Error("No response from solutions API");
      }
      if (solutionResponse?.error) {
        const detail =
          solutionResponse.error.details ??
          solutionResponse.error.message ??
          "Failed to fetch solution";
        throw new Error(detail);
      }

      // fetchWithAuth already unwraps data.data, so pull nested fields directly
      const solutionData     = solutionResponse.api_response?.data ?? solutionResponse;
      const remainingCredits = solutionResponse.remaining_credits ?? 0;

      setcredits(remainingCredits);
      writeStoredUser({ credits: remainingCredits });

      if (solutionData.directDownload) {
        setactualDlink(solutionData.directDownload);
      }

      let cleanedExtract = "";
      let extractError = "";

      if (solutionData.error) {
        extractError = solutionData.error;
        setdataerror(extractError);
      } else {
        if (solutionData.raw) setraw(solutionData.raw);

        const cleaned = parseAIResponse(solutionData.extractedText ?? "");
        if (cleaned) {
          cleanedExtract = cleaned;
          setextract(cleaned);
        } else {
          // Server returned something, but it's not valid HTML — surface the raw message
          extractError = solutionData.extractedText ?? "Unexpected response format.";
          setdataerror(extractError);
          setextract("");
        }
      }

      // Cache the finished solution so /dashboard/solution/:fileId can
      // restore it instantly on refresh instead of refetching.
      cacheSolution(fileId, {
        courseName: name ?? courseName,
        extract: cleanedExtract,
        dataerror: extractError,
        raw: solutionData.raw ?? "",
        pdflink: previewLink,
        actualDlink: solutionData.directDownload ?? directDownload,
        selectedVal: modelVal,
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      setdataerror("Extraction failed: " + message);
      setfetchError(true);
      seterrorMessage(message);
      setextract(""); // Never show raw error strings in the solution viewer
    } finally {
      setspin(false);
    }
  }, [navigate, courseName, setcredits, setdataerror, setpdflink, setactualDlink, writeStoredUser]);

  // Wrapper matching the old getpayload(selectlink) signature used by
  // ModelComponent's "continue" button and Showfiles' onRegenerate.
  // `res` is now the raw driveFileId (see fix() above) — no more
  // res.split("=")[1] parsing, since there's no encoded URL to unpack.
  const getpayload = useCallback((res) => {
    setselectModel(false);
    loadSolution(res, selectedVal, courseName);
  }, [loadSolution, selectedVal, courseName]);

  // ── restore or refetch the solution when landing directly on
  //    /dashboard/solution/:filename (fresh load, refresh, shared link) ──
  useEffect(() => {
    if (!filename) return;

    // Already loading/loaded this file this session (including the case
    // where loadSolution's own navigate() just changed :filename to this
    // value)? Nothing to do — avoids a duplicate parallel fetch.
    if (loadedFilesRef.current.has(filename)) return;

    const cached = getCachedSolution(filename);
    if (cached) {
      loadedFilesRef.current.add(filename);
      setcourseName(cached.courseName || "");
      setextract(cached.extract || "");
      setdataerror(cached.dataerror || "");
      setraw(cached.raw || "");
      setpdflink(cached.pdflink || "https://notfound.com");
      setactualDlink(cached.actualDlink || "https://notfound.com");
      if (cached.selectedVal) setselectedVal(cached.selectedVal);
      return;
    }

    // No cache (e.g. cleared storage, different device) — refetch using
    // whatever model is currently selected as a best-effort default.
    loadSolution(filename, selectedVal, null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filename]);

  // Search is now server-side (see Appcontext.jsx's debounced call to
  // /api/v1/papers/folders) — `payload` already IS this search's results,
  // scoped and capped by the backend. No client-side filtering/sorting
  // needed here anymore.
  const showEmptyState = find.trim() === "" || payload.length === 0;

  return (
    <div className="searchlist">
      {showpdf ? (
        <Showfiles
          actualDlink={actualDlink}
          raw={raw}
          pdflink={pdflink}
          mainlogo={mainlogo}
          // "Close" now means leaving the solution route entirely.
          setshowpdf={() => navigate("/dashboard")}
          dataerror={dataerror}
          credits={credits}
          courseName={courseName}
          extract={extract}
          selectedVal={selectedVal}
          // Lets Showfiles re-trigger the same fetch (PDF link + AI solution)
          // that originally populated this view, so a failed extraction can
          // be retried without leaving the solutions drawer. Falls back to
          // reloading the current filename from the URL when there's no
          // `selectlink` in memory (e.g. after a refresh).
          //
          // `modelOverride` is set when the user picked a different model in
          // the viewer's picker. It's passed straight to loadSolution (state
          // set below wouldn't be visible to this render's closures yet) and
          // also stored, so the new result — and anything saved from it — is
          // attributed to the model that actually produced it.
          onRegenerate={(modelOverride) => {
            const model = modelOverride || selectedVal
            if (modelOverride) setselectedVal(modelOverride)
            setselectModel(false)
            loadSolution(selectlink || filename, model, courseName)
          }}
          // AI tools inside the viewer report fresh balances; keep the app's
          // copy (context + stored user) in step so other screens agree.
          onCreditsChange={(n) => {
            setcredits(n)
            writeStoredUser({ credits: n })
          }}
        />
      ) : (
        <div>
          {/* ── nav bar ── */}
          <div className="searchnav">
            <div
              className="closesearch"
              onClick={() => { setsearching(false); bar.current.value = ""; }}
            >
              <div className="bbtn">
                <div className="ba"><ArrowLeftOutlined /><span className="prem3" /></div>
              </div>
            </div>
            <Search
              handleMenu={(aim) => setmenuOpen(aim)}
              eprop="all"
              setsearching={setsearching}
              bar={bar}
              find={find}
              setRefreshing={setRefreshing}
              setfind={setfind}
            />
          </div>

          <div className="bothsides">
            {/* ── side menu ── */}

            <div className={`sidemenubar ${collapsed ? "collapsed" : ""}`}>
              <div
                className="mymenubox"
                onClick={() => setmenuOpen(true)}
                data-open={menuOpen}
              >
                <div className="rbackdrop" />
                <img className="racoonp" src={racoon} alt="" />

                {/* Collapse toggle */}
                <div
                  className="collapse-toggle"
                  onClick={(e) => { e.stopPropagation(); setCollapsed((c) => !c); }}
                >
                  {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </div>

                <div className="firstitem">
                  <Link to="/payment" target="_blank" rel="noopener noreferrer">
                    <div className="paid">
                      <div className="fnav"><GoldStar /></div>
                      <MoneyCollectOutlined class="fnav-money" />
                      <span className="menu-label">Upgrade</span>
                      <div className="fnav"><GoldStar /></div>
                    </div>
                  </Link>
                </div>

                <div className="mymenu">
                  {[
                    // Learning Hub leads the menu — it's the most-used surface now.
                    { view: "hub",         icon: <TrophyOutlined className="micon" />,      label: "Learning Hub", badge: <AimOutlined /> },
                    { view: "solutions",   icon: <SolutionOutlined className="micon" />,    label: "Solutions" },
                    { view: "general",   icon: <AppstoreOutlined className="micon" />,    label: "General" },
                    { view: "products",       icon: <FileProtectOutlined className="micon" />, label: "Our Products", badge: <GoldStar size={14} /> },
                    { view: "leaderboard", icon: <GoldFilled className="micon" />,          label: "Leaderboard" },
                    { view: "referal",     icon: <i style={{ fontSize: 10 }} className="fa fa-users micon" />, label: "Referal Details" },
                    { view: "earn",        icon: <DollarOutlined className="micon" />,      label: "Earn", badge: <GoldCashStack size={14} /> },
                    { view: "advert",      icon: <ScheduleOutlined className="micon" />,    label: "Advertise your business", badge: <SoundOutlined /> },
                    { view: "nss",         icon: <i className="fa fa-book micon" />,        label: "NSS Guide" },
                    { view: "job",         icon: <TeamOutlined className="micon" />,        label: "Job Application Guide" },
                  ].map(({ view, icon, label, badge }) => (
                    <div
                      key={view}
                      className={`menuitems ${view==currentView?'active':''}`}
                      onClick={() => { setcurrentView(view); setmenuOpen(false); }}
                      title={collapsed ? label : undefined}
                    >
                      <div className="inmenu">
                        <span>{icon}</span>
                        <small className="menu-label">{label}</small>
                        {badge && <div className="fnav">{badge}</div>}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="menuitems logout" style={{ padding: 20 }} onClick={logoutUser}>
                  <div className="inmenu">
                    <LogoutOutlined className="micon" />
                    <span className="menu-label">Logout</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── main content ── */}
            <div className="mcontent">
              {selectModel && (
                <ModelComponent
                  setselectedVal={setselectedVal}
                  selectedVal={selectedVal}
                  setselectModel={setselectModel}
                  getpayload={getpayload}
                  selectlink={selectlink}
                  credits={credits}
                />
              )}

              <div
                className={`menucomp${currentView === "hub" ? " menucomp--hub" : ""}`}
                style={menuOpen
                  ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", pointerEvents: "all" }
                  : { clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)", pointerEvents: "none" }
                }
              >
                <div className="menuhead" onClick={(e) => e.stopPropagation()}>
                  <Overview currentView={currentView} setcurrentView={setcurrentView} />
                </div>
              </div>

              <div className="listcontent">

                {/* ── results list: course folders, or papers inside an opened one ── */}
                {openFolder ? (
                  <>
                    <div
                      className="filtered mn4"
                      style={{ margin: "0 0 10px", width: "100%", cursor: "pointer" }}
                      onClick={closeFolderContents}
                    >
                      <ArrowLeftOutlined style={{ marginRight: 8 }} />
                      Back to results — <strong style={{ marginLeft: 4 }}>{openFolder.courseName}</strong>
                    </div>

                    {papersLoading ? (
                      <div className="filtered mn4" style={{ margin: 0, width: "100%" }}>
                        <div className="ready">
                          <div className="big"><LoadingOutlined spin /></div>
                          <div className="desc err4"><span className="nerror">Loading papers…</span></div>
                        </div>
                      </div>
                    ) : papersError ? (
                      <div className="filtered mn4" style={{ margin: 0, width: "100%" }}>
                        <div className="ready">
                          <div className="big"><DisconnectOutlined style={{ opacity: .3 }} /></div>
                          <div className="desc err4"><span className="nerror">{papersError}</span></div>
                        </div>
                      </div>
                    ) : folderPapers.length > 0 ? (
                      folderPapers.map((paper, i) => (
                        <div
                          className="filtered"
                          key={paper.driveFileId ?? i}
                          title={`${openFolder.courseName} — ${paper.examYear ?? ""} ${paper.semester ?? ""}`}
                          data-ptext="title..."
                          data-texts="details..."
                        >
                          <img src={pdfpic} alt="" className="imgthumb" />
                          <div className="pinfo">
                            <div className="titles">{renderTitleWithIcon(openFolder.courseName)}</div>
                            <div className="describe">
                              {[paper.examYear, paper.semester, paper.campus].filter(Boolean).join(" · ")}
                            </div>
                          </div>
                          <div
                            className="download"
                            onClick={() => fix(paper.driveFileId, openFolder.courseName)}
                          >
                            <ExportOutlined style={{ marginRight: "5px" }} /> open
                            <span className="prema" />
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="filtered mn4" style={{ margin: 0, width: "100%" }}>
                        <div className="ready">
                          <div className="big"><SearchOutlined style={{ opacity: ".1" }} /></div>
                          <div className="desc err4"><span className="nerror">No papers found for this course.</span></div>
                        </div>
                      </div>
                    )}
                  </>
                ) : !showEmptyState && payload.length > 0 ? (
                  payload.map((folder, b) => (
                    <div
                      className="filtered"
                      key={folder.folderPath ?? b}
                      title={folder.courseName}
                      data-ptext="title..."
                      data-texts="details..."
                    >
                      <img src={pdfpic} alt="" className="imgthumb" />
                      <div className="pinfo">
                        <div className="titles">
                          {renderTitleWithIcon(folder.courseName)}
                        </div>
                        <div className="describe">
                          {folder.department ? `${folder.department} · ` : ""}
                          {folder.paperCount} paper{folder.paperCount === 1 ? "" : "s"}
                          {folder.examYears?.length ? ` (${folder.examYears.join(", ")})` : ""}
                        </div>
                      </div>
                      <div
                        className="download"
                        onClick={() => openFolderContents(folder)}
                      >
                        <ExportOutlined style={{ marginRight: "5px" }} /> open
                        <span className="prema" />
                      </div>
                    </div>
                  ))
                ) : (
                  /* ── empty / error state ── */
                  <div
                    className="filtered mn4"
                    style={{ margin: 0, width: "100%" }}
                    data-ptext="title..."
                    data-texts="details..."
                  >
                    <div className="ready">
                      <div className="big">
                        {refreshing ? <LoadingOutlined spin /> : <SearchOutlined style={{opacity:".1"}}/>}
                      </div>
                      <div/>
                      <div className="desc err4">
                        <div className="fnav2" style={{ padding:5 }}>
                        </div>
                        <span className="nerror">
                          {refreshing ? "Searching…" : NetworkError}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {fetchError && (
        <Toaster setfetchError={setfetchError} errorMessage={errorMessage} />
      )}

      <LoadComponent opacity={spin ? 1 : 0} indexed={spin ? 100 : -100} mainlogo={mainlogo} />
    </div>
  );
};

export default SearchList;