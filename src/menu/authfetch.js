// export const domain       = "https://ue-past-questions-back.vercel.app";
export const LocalApiPath = "https://pasco-lovat.vercel.app";
export const domain = "https://api.uelearn.unityelites.com";

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

// A custom error class so callers can distinguish auth failures from other errors
// and react accordingly (e.g. show the login modal) without triggering a page reload.
export class AuthError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuthError";
  }
}

// Clears the session from storage. Does NOT reload the page — the React tree
// handles the "logged out" state by watching for AuthError and showing the modal.
//
// This is the "silent" clear — used internally when we already know the
// session is dead (e.g. the refresh token itself was rejected in
// refreshTokens() below). There's no backend call here on purpose: if the
// refresh token was already invalid, there's nothing left to invalidate.
export function leave() {
  try {
    localStorage.removeItem("userInfo");
  } catch {
    // ignore
  }
}

// User-initiated logout (e.g. a "Log out" button). Unlike leave(), this
// actively tells the backend to invalidate the refresh token — important
// because the user's session is otherwise still valid and could be reused
// (e.g. a stolen refresh token) until it naturally expires.
//
// Always clears local state in the end, even if the network call fails —
// from the user's point of view, clicking "Log out" must always work.
export async function logout() {
  const stored = readUserInfo();

  try {
    if (stored?.refreshToken) {
      await fetchWithAuth(`${domain}/api/v1/auth/logout`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ refreshToken: stored.refreshToken }),
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

export async function refreshTokens(
  refreshUrl = `${domain}/api/v1/auth/refresh`
) {
  const stored = readUserInfo();

  if (!stored?.refreshToken) {
    leave(); // clear storage
    throw new AuthError("No refresh token — session ended.");
  }

  const response = await fetch(refreshUrl, {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify({ refreshToken: stored.refreshToken }),
  });

  if (!response.ok) {
    if (response.status === 400 || response.status === 401) {
      // Refresh token invalid / expired — clear session and signal to the UI
      leave();
      throw new AuthError("Session expired. Please sign in again.");
    }
    throw new Error(`Token refresh failed (${response.status})`);
  }

  const data            = await response.json();
  const newAccessToken  = data?.data?.token;

  if (!newAccessToken) {
    throw new Error("Refresh response did not include a new token.");
  }

  // Persist the updated token
  const latest = readUserInfo();
  if (latest) {
    latest.accessToken = newAccessToken;
    writeUserInfo(latest);
  }

  return newAccessToken;
}

// ─── authenticated fetch ──────────────────────────────────────────────────────
// Automatically retries once after a 401 by refreshing the access token.
// Throws on every error so callers can handle failures explicitly.

export async function fetchWithAuth(urlPath, option, _retryCount = 0) {
  const stored = readUserInfo();

  if (!stored?.accessToken) {
    leave();
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

  // Retry once on 401 with a fresh token
  if (response.status === 401 && _retryCount === 0) {
    await refreshTokens();
    return fetchWithAuth(urlPath, option, 1); // _retryCount = 1 prevents infinite loop
  }

  if (!response.ok) {
    // Try to surface the server's error message
    let serverMessage = `Request failed (${response.status})`;
    try {
      const body = await response.json();
      if (body?.message) serverMessage = body.message;
      // Return the parsed error body so callers can inspect it
      return body;
    } catch {
      throw new Error(serverMessage);
    }
  }

  const data = await response.json();
  return data?.data ?? data;
}