import {
  createContext, useContext, useState, useEffect, useRef, useCallback,
} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getFromLocalStorage } from './menu/fromlocal';
import { fetchWithAuth, domain, AuthError } from './menu/authfetch';

// Minimum characters typed before firing a folder search — avoids a
// near-unfiltered (and near-useless) result set on the first keystroke.
const MIN_SEARCH_LENGTH = 2;
// Wait this long after the user stops typing before actually searching —
// normal typing speed shouldn't fire a request per keystroke.
const SEARCH_DEBOUNCE_MS = 350;

// ─── animated icons (replace the ⚾ and ☝🏼 emojis in the search hint) ───────────

// Soft pulsing ring standing in for the baseball emoji, mid-word in "code".
const AnimatedO = ({ size = 15 }) => (
  <svg
    width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="3"
    className="anim-o" aria-hidden="true"
    style={{opacity:.3,margin:"0px 3px "}}
  >
    <circle cx="12" cy="12" r="8" />
  </svg>
);

// Just the chevron (^) — rounded caps/joins, no stem/tail — bouncing upward
// to point at the search bar above the hint text, standing in for ☝🏼.
const AnimatedUpArrow = ({ size = 18 }) => (
  <svg
    width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="3"
    strokeLinecap="round" strokeLinejoin="round"
    className="anim-up-arrow" aria-hidden="true"
    style={{opacity:.3}}
  >
    <polyline points="6 15 12 9 18 15" />
  </svg>
);

// Wiggling unplugged plug, standing in for 🔌 in the "check your connection"
// fallback message below.
const AnimatedPlug = ({ size = 15 }) => (
  <svg
    width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2.2"
    strokeLinecap="round" strokeLinejoin="round"
    className="anim-plug" aria-hidden="true"
    style={{opacity:.3}}
  >
    <path d="M9 7V3M15 7V3" />
    <path d="M7 7h10v4a5 5 0 0 1-10 0V7Z" />
    <path d="M12 16v5" />
  </svg>
);

// Laptop with a blinking "no signal" dot, standing in for 💻.
const AnimatedComputer = ({ size = 15 }) => (
  <svg
    width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2.2"
    strokeLinecap="round" strokeLinejoin="round"
    className="anim-computer" aria-hidden="true"
    style={{opacity:.3}}
  >
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M2 20h20" />
    <circle className="anim-computer-dot" cx="12" cy="10" r="1.6" fill="currentColor" stroke="none" />
  </svg>
);

// Gently bobbing worried face, standing in for 🥺.
const AnimatedPleadingFace = ({ size = 16 }) => (
  <svg
    width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2.2"
    strokeLinecap="round" strokeLinejoin="round"
    className="anim-pleading" aria-hidden="true"
    style={{opacity:.3}}
  >
    <circle cx="12" cy="12" r="9" />
    <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
    <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
    <path d="M8.5 16c1-1.2 2.2-1.8 3.5-1.8s2.5.6 3.5 1.8" />
  </svg>
);

// Injected once from AppProvider below, since NetworkError is consumed by
// whatever component renders it (e.g. SearchList.jsx's empty state) and
// that component has no idea it needs these keyframes.
const ANIMATED_ICON_STYLES = `
  @keyframes anim-o-pulse {
    0%, 100% { transform: scale(1);    opacity: 1;  }
    50%      { transform: scale(1.18); opacity: .55; }
  }
  .anim-o {
    display: inline-block;
    vertical-align: -2px;
    color: #fbbf24;
    animation: anim-o-pulse 1.3s ease-in-out infinite;
  }

  @keyframes anim-up-bounce {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-5px); }
  }
  .anim-up-arrow {
    display: inline-block;
    vertical-align: -3px;
    color: #a5b4fc;
    animation: anim-up-bounce 0.9s ease-in-out infinite;
  }

  @keyframes anim-plug-shake {
    0%, 100% { transform: rotate(0deg); }
    25%      { transform: rotate(-8deg); }
    75%      { transform: rotate(8deg); }
  }
  .anim-plug {
    display: inline-block;
    vertical-align: -2px;
    color: #f87171;
    transform-origin: 50% 15%;
    animation: anim-plug-shake 1s ease-in-out infinite;
  }

  .anim-computer {
    display: inline-block;
    vertical-align: -2px;
    color: #93c5fd;
  }
  @keyframes anim-computer-blink {
    0%, 100% { opacity: 1; }
    50%      { opacity: .2; }
  }
  .anim-computer-dot {
    animation: anim-computer-blink 1s ease-in-out infinite;
  }

  @keyframes anim-pleading-bounce {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-3px); }
  }
  .anim-pleading {
    display: inline-block;
    vertical-align: -3px;
    color: #fbbf24;
    animation: anim-pleading-bounce 1.1s ease-in-out infinite;
  }
`;

// Default empty-state hint. Kept as a constant so it can be restored after a
// failed request — otherwise the "check your connection" message sticks
// around even after later searches succeed.
const SEARCH_HINT = (
  <>
    Type the course c<AnimatedO />de in the search bar above <AnimatedUpArrow />
  </>
);

// ─── helpers ─────────────────────────────────────────────────────────────────

// The folders endpoint has returned several shapes over time. Accept all:
//   [...]                                          (bare array)
//   { folders: [...] }                             (Node scraper directly)
//   { data: [...] } / { data: { folders: [...] } } (Django proxy)
function extractFolders(res) {
  const list =
    (Array.isArray(res) && res) ||
    res?.folders ||
    res?.data?.folders ||
    (Array.isArray(res?.data) && res.data) ||
    [];
  return Array.isArray(list) ? list : [];
}

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
  } catch { /* quota exceeded */ }
}

// ─── context ─────────────────────────────────────────────────────────────────

const AppContext = createContext(null);

// Public routes that don't require authentication
const PUBLIC_ROUTES = ['/contact', '/about', '/policy_and_terms', '/login', '/reset-password'];

export function AppProvider({ children }) {
  // NOTE: this must render *inside* <BrowserRouter>, since it calls useNavigate.
  const navigate = useNavigate();
  const location = useLocation();

  const [loader,       setloader]       = useState(true);
  const [NetworkError, setNetworkError] = useState(SEARCH_HINT);
  const [refreshing,   setRefreshing]   = useState(false);
  const [payload,      setpayload]      = useState([]);
  const [credits,      setcredits]      = useState(0);
  const [dataerror,    setdataerror]    = useState("");
  const [pdflink,      setpdflink]      = useState("https://notfound.com");
  const [actualDlink,  setactualDlink]  = useState("https://notfound.com");
  const [username,     setusername]     = useState("");
  const [maxscore,     setmaxscore]     = useState(0);
  const [courseName,   setcourseName]   = useState("");
  const [selectedVal,  setselectedVal]  = useState("");
  const [find,         setfind]         = useState("");

  const bar = useRef(null);

  // Drop-in replacement for the old `setsearching(bool)` local-state toggle —
  // Search.jsx and SearchList.jsx can keep calling setsearching(true/false)
  // exactly as before; it now navigates instead of flipping a boolean.
  const setsearching = useCallback((goToSearch) => {
    navigate(goToSearch ? '/dashboard' : '/');
  }, [navigate]);

  // ── bootstrap from localStorage — redirect to /login if nothing cached ──
  useEffect(() => {
    const isPublicRoute = PUBLIC_ROUTES.includes(location.pathname);

    if (isPublicRoute) {
      setloader(false);
      return;
    }

    const stored = readStoredUser();
    if (stored && Object.keys(stored).length > 0) {
      setusername(stored.firstName ?? "");
      setmaxscore(stored.highestStreakScore ?? 0);
      setcredits(stored.credits ?? 0);
    } else {
      navigate('/login');
    }
  }, [location.pathname, navigate]);

  // ── cross-tab credit sync (e.g. from the Payment page) ──
  useEffect(() => {
    const handleStorageChange = () => {
      const stored = getFromLocalStorage("userInfo");
      if (stored?.credits !== undefined) setcredits(stored.credits);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // ── fetch user profile ──
  useEffect(() => {
    let cancelled = false;

    async function loadProfile() {
      const isPublicRoute = PUBLIC_ROUTES.includes(location.pathname);
      if (isPublicRoute) {
        setloader(false);
        return;
      }

      try {
        const profiledata = await fetchWithAuth(`${domain}/api/v1/user/profile`, {
          method:  "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (cancelled) return;

        const data =
          profiledata?.api_response?.data ??
          profiledata?.data             ??
          profiledata                   ?? {};

        const firstName = data.firstName ?? "";
        const streak    = data.highestStreakScore ?? 0;

        // Persist and apply whatever the profile endpoint gave us, even if
        // firstName happens to be missing on this response.
        if (Object.keys(data).length > 0) {
          writeStoredUser(data);
          setmaxscore(streak);
          if (firstName) setusername(firstName);
        }
      } catch (err) {
        if (cancelled) return;
        if (err instanceof AuthError) {
          // Token is gone or expired — send them to /login, no reload
          navigate('/login');
        }
        // Non-auth errors (network down etc.) are silent — cached
        // localStorage data is already applied and browsing still works
      } finally {
        if (!cancelled) setloader(false);
      }
    }

    loadProfile();
    return () => { cancelled = true; };
  }, [location.pathname, navigate]);

  // ── search: course folders, driven by `find` ──────────────────────────────
  // `payload` is always a plain ARRAY of folder objects (courseName,
  // folderPath, department, paperCount, examYears, driveFolderId).
  // Searchlist.jsx maps over it directly.
  //
  // Debounced so normal typing speed fires one request per pause, not one
  // per keystroke; below MIN_SEARCH_LENGTH we just clear results locally
  // instead of hitting the network with a near-unfiltered query.
  useEffect(() => {
    const query = find.trim();
    console.log("[search] effect run, find =", JSON.stringify(find));

    if (query.length < MIN_SEARCH_LENGTH) {
      console.log("[search] query too short -> clearing payload");
      setpayload([]);
      setRefreshing(false);
      return;
    }

    let cancelled = false;
    setRefreshing(true);

    const timer = setTimeout(async () => {
      try {
        console.log("[search] firing request for:", query);
        const res = await fetchWithAuth(
          `${domain}/api/v1/papers/folders?search=${encodeURIComponent(query)}&pageSize=30`,
          { method: "GET" }
        );
        console.log("[search] raw res:", res);
        console.log("[search] extracted count:", extractFolders(res).length);
        if (cancelled) {
          console.warn("[search] result DISCARDED: effect was cancelled (find changed or component re-ran)");
          return;
        }
        // The Node server returns { total, count, offset, folders: [...] },
        // not a bare array — normalize whatever shape arrives.
        setpayload(extractFolders(res));
        // Clear any stale "check your connection" message from a prior failure.
        setNetworkError(SEARCH_HINT);
      } catch (err) {
        console.error("[search] request failed:", err);
        if (cancelled) return;
        setpayload([]);
        if (err instanceof AuthError) {
          navigate('/login');
        } else {
          setNetworkError(
            <>
              Oops! Kindly check your internet connection <AnimatedPlug /><AnimatedComputer /><AnimatedPleadingFace /> ({err.message})
            </>
          );
        }
      } finally {
        if (!cancelled) setRefreshing(false);
      }
    }, SEARCH_DEBOUNCE_MS);

    return () => {
      console.log("[search] cleanup (cancelling) for:", query);
      cancelled = true;
      clearTimeout(timer);
    };
  }, [find, navigate]);

  // DEBUG: log every time payload changes
  useEffect(() => {
    console.log("[search] payload now has", payload.length, "items");
  }, [payload]);

  const value = {
    loader, setloader,
    NetworkError, setNetworkError,
    refreshing, setRefreshing,
    payload, setpayload,
    credits, setcredits,
    dataerror, setdataerror,
    pdflink, setpdflink,
    actualDlink, setactualDlink,
    username, setusername,
    maxscore, setmaxscore,
    courseName, setcourseName,
    selectedVal, setselectedVal,
    find, setfind,
    bar,
    setsearching,
    writeStoredUser,
  };

  return (
    <AppContext.Provider value={value}>
      <style>{ANIMATED_ICON_STYLES}</style>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useAppContext must be used within an <AppProvider>');
  }
  return ctx;
}