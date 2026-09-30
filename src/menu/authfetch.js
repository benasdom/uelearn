export const LocalApiPath = import.meta.env.VITE_AI_API_BASE_URL
export const domain = import.meta.env.VITE_BACKEND_API_ENDPOINT
// ─── safe localStorage helpers ────────────────────────────────────────────────
// Never access localStorage at module scope — it can be unavailable (SSR, private
// browsing with storage blocked, browser extensions sandboxing, etc.)

function readUserInfo() {
  try {
    const raw = localStorage.getItem("userInfo");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeUserInfo(data) {
  try {
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch {
    // Storage quota exceeded or access denied — fail silently
  }
}

// Lazily-evaluated export so callers always get the current snapshot
export function getUserState() {
  return readUserInfo() ?? {};
}

// ─── session helpers ──────────────────────────────────────────────────────────

// A custom error class so callers can distinguish auth failures from other
// errors and react accordingly (e.g. show a "please sign in again" screen).
export class AuthError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuthError";
  }
}

// ─── response envelope ────────────────────────────────────────────────────────
// Every backend response uses one envelope (see API_RESPONSES_README.md):
//   { status, statusCode, message, data, error, meta }
// Success puts the payload in `data`; failure sets `data: null` and fills
// `error: { code, message, details, suggestion }`. Branch on `error.code`,
// never on message text.

export function isEnvelope(body) {
  return !!body && typeof body === "object" && typeof body.status === "boolean" && "data" in body;
}

export async function safeJson(response) {
  try {
    return await response.json();
  } catch {
    return null; // empty body, or a proxy/gateway HTML page
  }
}

export function getErrorCode(body) {
  return body?.error?.code ?? null;
}

// First validation message per field: { password: "This password is too common." }
export function fieldErrorsFrom(body) {
  const d = body?.error?.details;
  if (getErrorCode(body) !== "VALIDATION_ERROR" || !d || typeof d !== "object") return {};
  return Object.fromEntries(
    Object.entries(d).map(([field, msgs]) => [field, Array.isArray(msgs) ? msgs[0] : String(msgs)])
  );
}

const GENERIC_MESSAGE = "Something went wrong. Please try again.";

// The one place that decides which server text a person gets to read.
//  • `message` is written to be shown to users, so it's what we show.
//  • `error.details` is NEVER shown for 5xx / SERVER_ERROR (it can hold
//    technical text). For validation errors we append the first field
//    message, and for a suspended account the admin's reason, because those
//    are meant for the person.
export function friendlyErrorMessage(body, httpStatus = 0, fallback = GENERIC_MESSAGE) {
  const code = getErrorCode(body);
  const isServerSide = httpStatus >= 500 || code === "SERVER_ERROR";
  const base =
    (typeof body?.message === "string" && body.message.trim()) ||
    (typeof body?.error?.message === "string" && body.error.message.trim()) ||
    "";

  if (isServerSide) return base || fallback;
  if (code === "VALIDATION_ERROR") {
    const first = Object.values(fieldErrorsFrom(body))[0];
    return first ? (base ? `${base}: ${first}` : first) : base || fallback;
  }
  if (code === "ACCOUNT_SUSPENDED" && typeof body?.error?.details === "string" && body.error.details) {
    return `${base || "Your account has been suspended"}: ${body.error.details}`;
  }
  return base || fallback;
}

// Error thrown for every non-2xx response that isn't a dead session.
// `code` / `meta` / `suggestion` come from the envelope; `details` is
// deliberately withheld on 5xx so it can't reach the UI by accident.
export class ApiError extends Error {
  constructor(message, status, body) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.body = body;
    this.code = getErrorCode(body);
    this.meta = body?.meta ?? null;
    this.suggestion = body?.error?.suggestion ?? null;
    this.details = status >= 500 ? undefined : body?.error?.details;
  }
  get isValidation() { return this.code === "VALIDATION_ERROR"; }
  get isTransient() { return this.status >= 500 || this.status === 0; }
  get fieldErrors() { return fieldErrorsFrom(this.body); }
}

// Pull the payload out of a parsed body. Envelope → `data` (even when it is
// null, e.g. logout / verify-OTP — returning the whole envelope there would
// leak `status`/`meta` into callers that spread the result into state).
// Non-envelope bodies keep the old `data ?? body` behaviour.
function unwrap(body) {
  if (isEnvelope(body)) return body.data;
  if (body && typeof body === "object" && body.data != null) return body.data;
  return body;
}

// 401 codes that mean "your access token is no good" (refresh and retry).
// INVALID_CREDENTIALS / SSO_LOGIN_REQUIRED are also 401s but must NOT trigger
// a refresh. A 401 with no envelope code (gateway, legacy route) is given the
// benefit of the doubt and tried once.
const REFRESHABLE_401 = new Set(["INVALID_TOKEN", "UNAUTHORIZED", null]);
const DEAD_SESSION_401 = new Set(["INVALID_TOKEN", "UNAUTHORIZED", "INVALID_REFRESH_TOKEN", null]);

// Shared by the feature libs that do their own fetch (AI generator, media
// studio): should this 401 be answered with a token refresh + one retry?
export async function shouldRefreshAfter401(response) {
  if (response.status !== 401) return false;
  const body = await safeJson(response.clone());
  return REFRESHABLE_401.has(getErrorCode(body));
}

// Tell the app the account is suspended so it can show a blocking notice.
function announceSuspended(reason) {
  try {
    window.dispatchEvent(new CustomEvent("auth:account-suspended", { detail: { reason } }));
  } catch { /* non-browser */ }
}

// Broadcast that the session has died so any part of the app — a top-level
// layout, a router guard, a login modal — can react without authfetch.js
// needing to know about React. Components can do:
//
//   useEffect(() => {
//     const onExpired = (e) => showLoginModal(e.detail?.reason)
//     window.addEventListener('auth:session-expired', onExpired)
//     return () => window.removeEventListener('auth:session-expired', onExpired)
//   }, [])
//
function announceSessionExpired(reason) {
  try {
    window.dispatchEvent(
      new CustomEvent("auth:session-expired", { detail: { reason } })
    );
  } catch {
    // Non-browser environment (SSR, tests) — ignore.
  }
}

// Clears the session from storage. Does NOT reload the page and does NOT
// announce a session-expired event — this is the "quiet" clear used by
// intentional, user-initiated logout, where no "please sign back in" prompt
// should appear.
export function leave() {
  try {
    localStorage.removeItem("userInfo");
  } catch {
    // ignore
  }
}

// Clears the session AND tells the rest of the app the session died
// unexpectedly (refresh token invalid/expired, no token at all, etc.) so a
// login modal / redirect can be shown automatically instead of the user
// just seeing broken UI and console 401s.
function expireSession(reason) {
  leave();
  announceSessionExpired(reason);
}

// User-initiated logout (e.g. a "Log out" button). Unlike leave() on its
// own, this actively tells the backend to invalidate the refresh token —
// important because the user's session is otherwise still valid and could
// be reused (e.g. a stolen refresh token) until it naturally expires.
//
// Always clears local state in the end, even if the network call fails —
// from the user's point of view, clicking "Log out" must always work. This
// does not fire the session-expired event: it's an expected, deliberate
// exit, not a broken session.
export async function logout() {
  const stored = readUserInfo();

  try {
    if (stored?.refreshToken) {
      await fetchWithAuth(`${domain}/api/v1/auth/logout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken: stored.refreshToken }),
      });
    }
  } catch {
    // Already logged out, session already expired, network error, etc. —
    // doesn't matter. We still clear local state below regardless.
  } finally {
    leave();
  }
}

// ─── token refresh ────────────────────────────────────────────────────────────

// Multiple requests can 401 at nearly the same time (e.g. streak + wallet +
// profile all firing on mount). Without de-duping, each one independently
// calls refreshTokens(); if the backend rotates the refresh token on every
// call, the second request reads a refresh token that the first request
// already invalidated, and fails. This in-flight promise ensures only one
// refresh happens at a time — every concurrent caller awaits the same result.
let inFlightRefresh = null;

async function refreshTokensDeduped(refreshUrl) {
  if (!inFlightRefresh) {
    inFlightRefresh = doRefreshTokens(refreshUrl).finally(() => {
      inFlightRefresh = null;
    });
  }
  return inFlightRefresh;
}

async function doRefreshTokens(refreshUrl = `${domain}/api/v1/auth/refresh`) {
  const stored = readUserInfo();

  if (!stored?.refreshToken) {
    expireSession("No refresh token — session ended.");
    throw new AuthError("No refresh token — session ended.");
  }

  const response = await fetch(refreshUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken: stored.refreshToken }),
  });

  if (!response.ok) {
    const errBody = await safeJson(response);
    // ONLY 401 + INVALID_REFRESH_TOKEN means the session is dead. Anything
    // else — a 500, a 400, a dropped connection, a gateway page — is a failed
    // attempt, not a logout: fail this request and keep the session.
    if (response.status === 401 && getErrorCode(errBody) === "INVALID_REFRESH_TOKEN") {
      expireSession("Session expired. Please sign in again.");
      throw new AuthError("Session expired. Please sign in again.");
    }
    throw new ApiError(friendlyErrorMessage(errBody, response.status), response.status, errBody);
  }

  const data = await safeJson(response);
  const newAccessToken = data?.data?.token;

  if (!newAccessToken) {
    throw new Error("Refresh response did not include a new token.");
  }

  // Persist the updated token. Re-read fresh in case something else in the
  // app wrote to storage while this refresh was in flight.
  const latest = readUserInfo();
  if (latest) {
    latest.accessToken = newAccessToken;
    writeUserInfo(latest);
  }

  return newAccessToken;
}

// Public entry point kept for backwards compatibility with any external
// caller — routes through the de-duped refresh internally.
export async function refreshTokens(refreshUrl) {
  return refreshTokensDeduped(refreshUrl);
}

// ─── authenticated fetch ──────────────────────────────────────────────────────
// Refreshes the access token and retries once when the server says the token
// is bad (401 INVALID_TOKEN). Always throws on failure (AuthError for dead
// sessions, ApiError for any other non-2xx / `status:false` response) so
// callers' try/catch blocks behave — nothing here silently "succeeds" with an
// error body.

async function authedRequest(urlPath, option = {}, _retryCount = 0) {
  const stored = readUserInfo();

  if (!stored?.accessToken) {
    expireSession("No access token found — please sign in.");
    throw new AuthError("No access token found — please sign in.");
  }

  const opts = {
    ...option,
    headers: {
      ...option.headers,
      Authorization: `Bearer ${stored.accessToken}`,
    },
  };

  const response = await fetch(urlPath, opts);

  if (response.ok) {
    const body = await safeJson(response);
    // HTTP and envelope `status` are meant to agree; trust a `false` anyway.
    if (isEnvelope(body) && body.status === false) {
      throw new ApiError(friendlyErrorMessage(body, response.status), response.status, body);
    }
    return body;
  }

  const body = await safeJson(response);
  const code = getErrorCode(body);

  if (response.status === 401) {
    if (_retryCount === 0 && REFRESHABLE_401.has(code)) {
      // refreshTokensDeduped clears the session and announces it when the
      // refresh token itself is dead — just propagate that.
      await refreshTokensDeduped();
      return authedRequest(urlPath, option, 1); // _retryCount = 1 prevents infinite loop
    }
    if (DEAD_SESSION_401.has(code)) {
      expireSession("Session expired. Please sign in again.");
      throw new AuthError(friendlyErrorMessage(body, 401, "Session expired. Please sign in again."));
    }
    // Some other 401 (e.g. INVALID_CREDENTIALS): a real error, not a dead session.
  }

  if (response.status === 403 && code === "ACCOUNT_SUSPENDED") {
    announceSuspended(typeof body?.error?.details === "string" ? body.error.details : "");
  }

  throw new ApiError(friendlyErrorMessage(body, response.status, `Request failed (${response.status})`), response.status, body);
}

// Returns the payload (`data`). Most callers want this.
export async function fetchWithAuth(urlPath, option = {}) {
  return unwrap(await authedRequest(urlPath, option));
}

// Returns { data, meta, message } for callers that need more than the payload
// — chiefly paginated lists, whose paging lives in `meta.pagination`.
export async function fetchWithAuthEnvelope(urlPath, option = {}) {
  const body = await authedRequest(urlPath, option);
  return {
    data: unwrap(body),
    meta: (isEnvelope(body) && body.meta) || {},
    message: (isEnvelope(body) && body.message) || "",
  };
}
