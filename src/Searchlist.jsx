import React, { useState, useRef, useEffect, useCallback } from 'react'
import Search from './Search'
import Showfiles from './Showfiles'
import pdfpic from '/imgs/pdf.png'
import {
  ExportOutlined, ArrowLeftOutlined, FileProtectOutlined,
  MoneyCollectOutlined, AppstoreOutlined, GoldFilled, DollarOutlined,
  SolutionOutlined, ScheduleOutlined, LogoutOutlined, TeamOutlined,
} from '@ant-design/icons'
import spinner from '/imgs/loader.svg'
import { Link } from 'react-router-dom'
import mainlogo from '/imgs/titled.png'
import racoon from '/imgs/racoon_job.jpg'
import Overview from './menu/Overview'
import LoadComponent from './Loadcomponent'
import ModelComponent from './ModelComponent'
import { domain, fetchWithAuth, logout, LocalApiPath, getUserState } from './menu/authfetch'

// ─── helpers ─────────────────────────────────────────────────────────────────

/** Returns null if localStorage is unavailable or the value is missing/malformed. */
function readStoredUser() {
  try {
    const raw = localStorage.getItem("userInfo");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeStoredUser(patch) {
  try {
    const current = readStoredUser() ?? {};
    localStorage.setItem("userInfo", JSON.stringify({ ...current, ...patch }));
  } catch { /* quota exceeded — ignore */ }
}

/**
 * The AI response contains HTML when valid (includes <h3> tags).
 * Returns the cleaned string, or null if the response signals an error.
 */
function parseAIResponse(response) {
  if (typeof response !== "string" || !response.includes("h3")) return null;
  return response;
}

// ─── Toaster ─────────────────────────────────────────────────────────────────

const Toaster = ({ errorMessage, setfetchError }) => {
  // Side-effects belong in useEffect, never in the render body
  useEffect(() => {
    const id = setTimeout(() => setfetchError(false), 4000);
    return () => clearTimeout(id);
  }, [setfetchError]);

  return (
    <div className="toast">
      <div className="successmessage">
        🔴 Sorry: 🔌 {errorMessage.toLowerCase()}
      </div>
    </div>
  );
};

// ─── Menu panel ──────────────────────────────────────────────────────────────

const Menucompt = ({ currentView, setcurrentView }) => (
  <div className="menucomp">
    <div className="menuhead">
      <Overview currentView={currentView} setcurrentView={setcurrentView} />
    </div>
  </div>
);

// ─── SearchList ───────────────────────────────────────────────────────────────

const SearchList = ({
  setsearching, selectedVal, setselectedVal,
  payload, find, setcourseName, setfind, bar,
  setRefreshing, pdf, NetworkError,
  setdataerror, setcredits,
  pdflink, courseName,
  actualDlink, credits, dataerror,
  setpdflink, setactualDlink,
}) => {
  const [spin,         setspin]         = useState(false)
  const [fetchError,   setfetchError]   = useState(false)
  const [currentView,  setcurrentView]  = useState("")
  const [errorMessage, seterrorMessage] = useState("")
  const [selectModel,  setselectModel]  = useState(false)
  const [selectlink,   setselectlink]   = useState("")
  const [showpdf,      setshowpdf]      = useState(false)
  const [extract,      setextract]      = useState("loading...")
  const [raw,          setraw]          = useState("")
  // Controls whether the side-menu panel is open
  const [menuOpen,     setmenuOpen]     = useState(false)

  const logoutUser=()=>{
    if(confirm("Confirm to Leave")){
      logout();
    }
  }
  // ── open model selector ──
  const fix = (res, name) => {
    setcourseName(name);
    setselectModel(true);
    setselectlink(res);
  };

  // ── fetch PDF + AI solution ──
  const getpayload = useCallback(async (res) => {
    const storedUser   = readStoredUser();
    const premiumstatus = storedUser?.pStatus ?? null;

    setselectModel(false);
    setextract("loading...");
    setdataerror("");
    setspin(true);
    setfetchError(false);
    seterrorMessage("");

    const namedfile = res.split("=")[1];

    try {
      // 1. Fetch the PDF preview / download links
      const pdfResponse = await fetch(`${LocalApiPath}/api/files/${namedfile}`);
      if (!pdfResponse.ok) {
        throw new Error(`Failed to fetch PDF (${pdfResponse.status})`);
      }
      const pdfData = await pdfResponse.json();
      setpdflink(pdfData.previewLink);
      setraw(pdfData.raw);
      setactualDlink(pdfData.directDownload);
      setshowpdf(true);
      setspin(false);

      // 2. Fetch AI solutions
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          filename:      namedfile,
          selectedVal,
          premiumstatus: premiumstatus ?? "premiumstatus",
        }),
      };

      const solutionResponse = await fetchWithAuth(
        `${domain}/api/v1/request/solutions`,
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

      if (solutionData.error) {
        setdataerror(solutionData.error);
      } else {
        if (solutionData.raw) setraw(solutionData.raw);

        const cleaned = parseAIResponse(solutionData.extractedText ?? "");
        if (cleaned) {
          setextract(cleaned);
        } else {
          // Server returned something, but it's not valid HTML — surface the raw message
          setdataerror(solutionData.extractedText ?? "Unexpected response format.");
          setextract("");
        }
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      setdataerror("Extraction failed: " + message);
      setfetchError(true);
      seterrorMessage(message);
      setextract(""); // Never show raw error strings in the solution viewer
    } finally {
      setspin(false);
    }
  }, [selectedVal, setcredits, setdataerror, setpdflink, setactualDlink]);

  // ── filter + sort the payload list ──
  const filteredPayload =
    find !== "" && payload.length > 0
      ? [...new Set(payload)] // deduplicate by reference
          .filter((a) => a.description.toLowerCase().includes(find.toLowerCase()))
          .sort((a, b) => (b.createdOn?.slice(0, 4) ?? 0) - (a.createdOn?.slice(0, 4) ?? 0))
          .slice(0, 30)
      : [];

  const showEmptyState = find === "" || filteredPayload.length === 0;

  return (
    <div className="searchlist">
      {showpdf ? (
        <Showfiles
          actualDlink={actualDlink}
          raw={raw}
          pdflink={pdflink}
          mainlogo={mainlogo}
          setshowpdf={setshowpdf}
          dataerror={dataerror}
          credits={credits}
          courseName={courseName}
          extract={extract}
          selectedVal={selectedVal}
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
              handleMenu={() => setmenuOpen(true)}
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
            <div className="sidemenubar">
              <div
                className="mymenubox"
                onClick={() => setmenuOpen(true)}
                // Expose menu-open state via a data attribute so CSS can handle
                // the clip-path transition without imperative DOM writes
                data-open={menuOpen}
              >
                <div className="rbackdrop" />
                <img className="racoonp" src={racoon} alt="" />

                <div className="firstitem">
                  <div className="abs" />
                  <Link to="/payment" target="_blank" rel="noopener noreferrer">
                    <div className="paid">
                      <div className="fnav">✨</div>
                      <MoneyCollectOutlined style={{ marginRight: 4 }} />
                      Upgrade
                      <div className="fnav">✨</div>
                    </div>
                  </Link>
                </div>

                <div className="mymenu">
                  {[
                    { view: "dashboard",  icon: <AppstoreOutlined className="micon" />,    label: "General" },
                    { view: "solve",      icon: <FileProtectOutlined className="micon" />,  label: "Our Products", badge: "✨" },
                    { view: "leaderboard",icon: <GoldFilled className="micon" />,           label: "Leaderboard" },
                    { view: "referal",    icon: <i style={{ fontSize: 10 }} className="fa fa-users micon" />, label: "Referal Details" },
                    { view: "earn",       icon: <DollarOutlined className="micon" />,       label: "Earn", badge: "💰" },
                    { view: "advert",     icon: <ScheduleOutlined className="micon" />,     label: "Advertise your business", badge: "📢" },
                    { view: "nss",        icon: <SolutionOutlined className="micon" />,     label: "NSS Guide" },
                    { view: "job",        icon: <TeamOutlined className="micon" />,         label: "Job Application Guide" },
                  ].map(({ view, icon, label, badge }) => (
                    <div
                      key={view}
                      className="menuitems"
                      onClick={() => { setcurrentView(view); setmenuOpen(false); }}
                    >
                      <div className="inmenu">
                        {icon}{label}{badge && <div className="fnav">{badge}</div>}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="menuitems logout" style={{ padding: 20 }} onClick={logoutUser}>
                  <div className="inmenu"><LogoutOutlined className="micon" />Logout</div>
                </div>
              </div>
            </div>

            {/* ── main content ── */}
            <div className="mcontent">
              {/* Overlay menu panel — close when clicking backdrop */}
              <div
                className="menucomp"
                style={menuOpen
                  ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", pointerEvents: "all" }
                  : { clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", pointerEvents: "none" }
                }
                onClick={() => setmenuOpen(false)}
              >
                <div className="menuhead" onClick={(e) => e.stopPropagation()}>
                  <Overview currentView={currentView} setcurrentView={setcurrentView} />
                </div>
              </div>

              <div className="listcontent">
                {selectModel && (
                  <ModelComponent
                    setselectedVal={setselectedVal}
                    selectedVal={selectedVal}
                    setselectModel={setselectModel}
                    getpayload={getpayload}
                    selectlink={selectlink}
                  />
                )}

                {/* ── results list ── */}
                {!showEmptyState ? (
                  filteredPayload.map((item) => (
                    <div
                      className="filtered"
                      // Use a stable unique key from the data, not the array index
                      key={item.downloadLink ?? item.description}
                      title={item.description.replace("-", ",")}
                      data-ptext="title..."
                      data-texts="details..."
                    >
                      <img src={pdfpic} alt="" className="imgthumb" />
                      <div className="pinfo">
                        <div className="titles">
                          {item.description.replace(/o/gi, "🧿")}
                        </div>
                        <div className="describe">{item.createdOn}</div>
                      </div>
                      <div
                        className="download"
                        onClick={() => fix(item.downloadLink, item.description)}
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
                      <div className="big">🔎</div>
                      <div className="rbackdrop" />
                      <div className="desc err4">
                        <div className="fnav2" style={{ padding: 2 }}>
                          <img className="reglate" src={mainlogo} alt="" />
                        </div>
                        <span className="nerror">{NetworkError}</span>
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