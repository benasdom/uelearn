import {
  createContext, useContext, useState, useEffect, useRef, useCallback,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { getFromLocalStorage } from './menu/fromlocal';
import { fetchWithAuth, domain, AuthError } from './menu/authfetch';

const PASCO_API_URL = "https://benasdom.github.io/ugpascoapi/ugpasco.json";

// ─── helpers ─────────────────────────────────────────────────────────────────

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

export function AppProvider({ children }) {
  // NOTE: this must render *inside* <BrowserRouter>, since it calls useNavigate.
  const navigate = useNavigate();

  const [loader,       setloader]       = useState(true);
  const [NetworkError, setNetworkError] = useState(
    "Type the course c⚾de in the search bar above ... ☝🏼"
  );
  const [Refreshing,   setRefreshing]   = useState(false);
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
    const stored = readStoredUser();
    if (stored && Object.keys(stored).length > 0) {
      setusername(stored.firstName ?? "");
      setmaxscore(stored.highestStreakScore ?? 0);
      setcredits(stored.credits ?? 0);
    } else {
      navigate('/login');
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

        if (firstName) {
          writeStoredUser(data);
          setusername(firstName);
          setmaxscore(streak);
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── fetch question bank — only once ──
  useEffect(() => {
    fetch(PASCO_API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Status ${res.status}`);
        return res.json();
      })
      .then((res) => setpayload(res.data ?? []))
      .catch((err) => {
        setNetworkError(
          `Oops! Kindly check your internet connection 🔌💻🥺 (${err.message})`
        );
        setRefreshing(false);
      });
  }, []);

  const value = {
    loader, setloader,
    NetworkError, setNetworkError,
    Refreshing, setRefreshing,
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

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useAppContext must be used within an <AppProvider>');
  }
  return ctx;
}