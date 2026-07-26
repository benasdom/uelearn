import React, { useEffect, useMemo, useState } from "react";
import { ArrowLeftOutlined, LockOutlined, EyeOutlined, EyeInvisibleOutlined, CheckCircleFilled } from '@ant-design/icons'
import { domain, LocalApiPath } from './authfetch'
import mainlogo from '/imgs/titled.png'

import LoadComponent from "../Loadcomponent";
import './styles/Reset.css'

/*
  ────────────────────────────────────────────────────────────────────────
  BACKEND CONTRACT — please confirm/adjust to match your real endpoint.
  ────────────────────────────────────────────────────────────────────────
  You mentioned this endpoint exists but hadn't named it yet, so I've
  followed your auth/update/forget-password convention. Update the path,
  method, and body keys below to whatever you actually build.

  Expected call: PUT { token, newPassword } -> resets the password.
  Expected failure modes I handle explicitly: 400/401 = invalid or
  expired token (shows a dedicated "link expired" screen).
  ────────────────────────────────────────────────────────────────────────
*/
const CONFIRM_RESET_ENDPOINT = {domain} + "/api/v1/auth/reset-password";

const MIN_PASSWORD_LENGTH = 8;

const Reset = ({ onBack, onResetSuccess }) => {
  // The token comes from the link the user clicked in their email,
  // e.g. https://yourapp.com/reset?token=xxxxx
  const token = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("token") || "";
  }, []);

  const [loadme, setloadme] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message }

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [resetDone, setResetDone] = useState(false);
  const [tokenInvalid, setTokenInvalid] = useState(!token); // no token at all -> treat as invalid link

  const showToast = (type, message) => setToast({ type, message });

  const passwordChecks = {
    length: newPassword.length >= MIN_PASSWORD_LENGTH,
    letter: /[a-zA-Z]/.test(newPassword),
    number: /\d/.test(newPassword),
    match: newPassword.length > 0 && newPassword === confirmPassword,
  };
  const passwordValid = passwordChecks.length && passwordChecks.letter && passwordChecks.number;

  const handleConfirmReset = async (e) => {
    e.preventDefault();
    if (!passwordValid) {
      showToast("error", "Password doesn't meet the requirements below.");
      return;
    }
    if (newPassword !== confirmPassword) {
      showToast("error", "Passwords do not match.");
      return;
    }

    setloadme(true);
    try {
      const response = await fetch(CONFIRM_RESET_ENDPOINT, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword }),
      });

      let data = {};
      try { data = await response.json(); } catch (_) { /* empty body is fine */ }

      if (response.status === 400 || response.status === 401) {
        setTokenInvalid(true);
        throw new Error(data?.message || "This reset link is invalid or has expired.");
      }
      if (!response.ok) {
        throw new Error(data?.message || "Couldn't reset your password. Please try again.");
      }

      setResetDone(true);
      showToast("success", "🟢 Password updated successfully!");
      onResetSuccess && onResetSuccess(data);
    } catch (err) {
      showToast("error", `🔴 ${err.message}`);
    } finally {
      setloadme(false);
    }
  };

  const goBack = () => {
    if (onBack) return onBack();
    if (window.history.length > 1) window.history.back();
    else window.location.href = "/";
  };

  return (
    <div className="reset-page">
      {toast && <Toaster type={toast.type} message={toast.message} onDone={() => setToast(null)} />}

      <div className="reset-card">
        <div className="reset-dotgrid" aria-hidden="true" />
        <div className="reset-glow" aria-hidden="true" />

        <button type="button" className="reset-return" onClick={goBack} aria-label="Go back">
          <ArrowLeftOutlined />
        </button>

        {tokenInvalid ? (
          <div className="reset-header">
            <h2 className="reset-title">Link expired</h2>
            <p className="reset-subtitle">
              This password reset link is invalid or has expired. Please request a new one.
            </p>
            <button type="button" className="reset-cta" onClick={goBack}>
              Back to login
            </button>
          </div>
        ) : resetDone ? (
          <div className="reset-header">
            <div className="reset-success-icon"><CheckCircleFilled /></div>
            <h2 className="reset-title">Password updated</h2>
            <p className="reset-subtitle">Your password has been changed successfully.</p>
            <button type="button" className="reset-cta" onClick={goBack}>Back to login</button>
          </div>
        ) : (
          <>
            <div className="reset-header">
              <h2 className="reset-title">Set a new password</h2>
              <p className="reset-subtitle">Choose a strong password you haven't used before.</p>
            </div>

            <form className="reset-form" onSubmit={handleConfirmReset}>
              <label className="reset-label" htmlFor="reset-new-password">New password</label>
              <div className="reset-input-wrap">
                <LockOutlined className="reset-input-icon" />
                <input
                  id="reset-new-password"
                  type={showPassword ? "text" : "password"}
                  className="reset-input"
                  placeholder="••••••••"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  autoComplete="new-password"
                  required
                />
                <button
                  type="button"
                  className="reset-input-toggle"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                </button>
              </div>

              <label className="reset-label" htmlFor="reset-confirm-password">Confirm password</label>
              <div className="reset-input-wrap">
                <LockOutlined className="reset-input-icon" />
                <input
                  id="reset-confirm-password"
                  type={showPassword ? "text" : "password"}
                  className="reset-input"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  autoComplete="new-password"
                  required
                />
              </div>

              <ul className="reset-requirements">
                <li className={passwordChecks.length ? "reset-req-met" : ""}>At least {MIN_PASSWORD_LENGTH} characters</li>
                <li className={passwordChecks.letter ? "reset-req-met" : ""}>Contains a letter</li>
                <li className={passwordChecks.number ? "reset-req-met" : ""}>Contains a number</li>
                <li className={passwordChecks.match ? "reset-req-met" : ""}>Passwords match</li>
              </ul>

              <button type="submit" className="reset-cta">Update password</button>
            </form>
          </>
        )}
      </div>

      {loadme ? <LoadComponent opacity={1} indexed={100} mainlogo={mainlogo} /> : <LoadComponent opacity={0} indexed={-100} />}
    </div>
  );
};

const Toaster = ({ type, message, onDone }) => {
  useEffect(() => {
    const t = setTimeout(() => onDone(), 3000);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className={`reset-toast${type === "error" ? " reset-toast-error" : ""}`}>
      <span className="reset-toast-text">{message}</span>
    </div>
  );
};

export default Reset;