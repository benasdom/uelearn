import { useState, useEffect, useRef } from "react";
import { MessageOutlined, PhoneOutlined, CheckCircleOutlined, ClockCircleOutlined, InfoCircleFilled } from "@ant-design/icons";
import { domain } from "./authfetch"; // adjust path as needed

export default function VerifyOTP({ onSuccess, onClose }) {
  const [msisdn, setMsisdn] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [phase, setPhase] = useState("phone"); // "phone" | "otp"
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" }); // type: "success" | "error"
  const [counter, setCounter] = useState(0);
  const [skipotp, setSkipotp] = useState(false);
  const inputRefs = useRef([]);

  const getToken = () => {
    try {
      const info = JSON.parse(localStorage.getItem("userInfo") || "{}");
      return info.accessToken || "";
    } catch {
      return "";
    }
  };

  const showMsg = (text, type = "error") => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: "", type: "" }), 5000);
  };

  const startCounter = () => {
    setCounter(15);
    const interval = setInterval(() => {
      setCounter((c) => {
        if (c <= 1) {
          clearInterval(interval);
          return 0;
        }
        return c - 1;
      });
    }, 1000);
  };

  const sendOtp = async () => {
    if (msisdn.trim().length < 10) {
      showMsg("Enter a valid phone number");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(domain + "/api/v1/send/sms/otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify({ msisdn }),
      });
      if (res.status === 200) {
        showMsg("OTP sent successfully!", "success");
        setPhase("otp");
        startCounter();
        setSkipotp(true);
      } else {
        showMsg("Failed to send OTP, please try again");
      }
    } catch {
      showMsg("Network error, please retry");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    const code = otp.join("");
    if (code.length !== 6) {
      showMsg("Enter the complete 6-digit OTP");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(domain + "/api/v1/verification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify({ path: "msisdn", otp: code }),
      });
      if (res.status === 200) {
        showMsg("Phone verified successfully!", "success");
        setTimeout(() => onSuccess && onSuccess(), 1200);
      } else {
        const data = await res.json().catch(() => ({}));
        showMsg(data?.message || "Verification failed, please retry");
      }
    } catch {
      showMsg("Verification failed, please retry");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpInput = (val, idx) => {
    const digit = val.replace(/\D/, "").slice(-1);
    const next = [...otp];
    next[idx] = digit;
    setOtp(next);
    if (digit && idx < 5) inputRefs.current[idx + 1]?.focus();
  };

  const handleOtpKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      inputRefs.current[idx - 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (pasted.length === 6) {
      setOtp(pasted.split(""));
      inputRefs.current[5]?.focus();
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.iconRing}>
            <PhoneOutlined style={{ fontSize: 22, color: "#fff" }} />
          </div>
          <h2 style={styles.title}>Verify Phone Number</h2>
          <p style={styles.subtitle}>
            {phase === "phone"
              ? "Enter your phone number to receive an OTP"
              : `OTP sent to ${msisdn}`}
          </p>
          {onClose && (
            <button class="closeme" onClick={onClose} aria-label="Close">
              <i className="fa fa-close"></i>
            </button>
          )}
        </div>

        {/* Message Banner */}
        {message.text && (
          <div style={{ ...styles.banner, ...(message.type === "success" ? styles.bannerSuccess : styles.bannerError) }}>
            {message.type === "success" ? "✅ " : "🔴 "}
            {message.text}
          </div>
        )}

        <div style={styles.body}>
          {/* Phase: Phone Input */}
          {phase === "phone" && (
            <>
              <label style={styles.label}>Phone Number</label>
              <div style={styles.inputWrap}>
                <PhoneOutlined style={styles.inputIcon} />
                <input
                  style={styles.input}
                  type="tel"
                  placeholder="+233 XX XXX XXXX"
                  value={msisdn}
                  onChange={(e) => setMsisdn(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendOtp()}
                />
              </div>

              <button
                style={{ ...styles.primaryBtn, opacity: loading ? 0.7 : 1 }}
                onClick={sendOtp}
                disabled={loading}
              >
                {loading ? (
                  <span style={styles.dots}>
                    <span />
                    <span />
                    <span />
                  </span>
                ) : (
                  <>
                    <MessageOutlined style={{ marginRight: 8 }} />
                    Send OTP
                  </>
                )}
              </button>
            </>
          )}

          {/* Phase: OTP Entry */}
          {phase === "otp" && (
            <>
              <label style={styles.label}>Enter 6-digit code</label>
              <div style={styles.otpRow} onPaste={handleOtpPaste}>
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    ref={(el) => (inputRefs.current[i] = el)}
                    style={{
                      ...styles.otpBox,
                      borderColor: digit ? "#1a1a2e" : "#d1d5db",
                      background: digit ? "#f0f4ff" : "#fff",
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpInput(e.target.value, i)}
                    onKeyDown={(e) => handleOtpKeyDown(e, i)}
                  />
                ))}
              </div>

              {/* Resend row */}
              <div style={styles.resendRow}>
                <ClockCircleOutlined style={{ color: "#6b7280", marginRight: 6 }} />
                {counter > 0 ? (
                  <span style={styles.counterText}>Resend in {counter}s</span>
                ) : (
                  <button
                    style={styles.resendBtn}
                    onClick={() => {
                      sendOtp();
                    }}
                    disabled={loading}
                  >
                    Resend OTP
                  </button>
                )}
              </div>

              <button
                style={{ ...styles.primaryBtn, opacity: loading ? 0.7 : 1 }}
                onClick={verifyOtp}
                disabled={loading}
              >
                {loading ? (
                  <span style={styles.dots}>
                    <span />
                    <span />
                    <span />
                  </span>
                ) : (
                  <>
                    <CheckCircleOutlined style={{ marginRight: 8 }} />
                    Verify & Confirm
                  </>
                )}
              </button>

              <button style={styles.backBtn} onClick={() => setPhase("phone")}>
                ← Change number
              </button>

              {skipotp && (
                <div style={styles.skipWrap}>
                  <InfoCircleFilled style={{ color: "#9ca3af", marginRight: 6 }} />
                  <span style={styles.skipNote}>Didn't receive OTP?</span>
                  <button style={styles.skipBtn} onClick={() => onClose && onClose()}>
                    Skip for now →
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Dot animation keyframes */}
      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.45)",
    backdropFilter: "blur(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: "16px",
  },
  card: {
    background: "#fff",
    borderRadius: "20px",
    width: "100%",
    maxWidth: "420px",
    boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
    overflow: "hidden",
    fontFamily: "'Segoe UI', sans-serif",
    position: "relative",
  },
  header: {
    background: "linear-gradient(135deg, #332639 0%, #16213e 100%)",
    padding: "32px 28px 24px",
    textAlign: "center",
    position: "relative",
  },
  iconRing: {
    width: 52,
    height: 52,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 14px",
    border: "2px solid rgba(255,255,255,0.25)",
  },
  title: {
    margin: 0,
    color: "#fff",
    fontSize: "20px",
    fontWeight: 700,
    letterSpacing: "-0.3px",
  },
  subtitle: {
    margin: "6px 0 0",
    color: "rgba(255,255,255,0.6)",
    fontSize: "13px",
  },
  closeBtn: {
    position: "absolute",
    top: 14,
    right: 16,
    background: "none",
    border: "none",
    color: "rgba(255,255,255,0.6)",
    fontSize: "22px",
    cursor: "pointer",
    lineHeight: 1,
    padding: "2px 6px",
  },
  banner: {
    padding: "10px 20px",
    fontSize: "13px",
    fontWeight: 500,
    textAlign: "center",
  },
  bannerSuccess: {
    background: "#f0fdf4",
    color: "#15803d",
    borderBottom: "1px solid #bbf7d0",
  },
  bannerError: {
    background: "#fff1f2",
    color: "#be123c",
    borderBottom: "1px solid #fecdd3",
  },
  body: {
    padding: "28px",
  },
  label: {
    display: "block",
    fontSize: "12px",
    fontWeight: 600,
    color: "#374151",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: "10px",
  },
  inputWrap: {
    display: "flex",
    alignItems: "center",
    border: "1.5px solid #e5e7eb",
    borderRadius: "10px",
    padding: "0 14px",
    marginBottom: "20px",
    transition: "border-color 0.2s",
  },
  inputIcon: {
    color: "#9ca3af",
    fontSize: "16px",
    marginRight: "10px",
    flexShrink: 0,
  },
  input: {
    flex: 1,
    border: "none",
    outline: "none",
    fontSize: "15px",
    padding: "13px 0",
    background: "transparent",
    color: "#111827",
  },
  otpRow: {
    display: "flex",
    gap: "8px",
    justifyContent: "center",
    marginBottom: "20px",
  },
  otpBox: {
    width: "46px",
    height: "54px",
    textAlign: "center",
    fontSize: "22px",
    fontWeight: 700,
    border: "2px solid #d1d5db",
    borderRadius: "10px",
    outline: "none",
    transition: "all 0.15s",
    color: "#1a1a2e",
    caretColor: "transparent",
  },
  resendRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },
  counterText: {
    fontSize: "13px",
    color: "#6b7280",
  },
  resendBtn: {
    background: "none",
    border: "none",
    color: "#1a1a2e",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "underline",
    padding: 0,
  },
  primaryBtn: {
    width: "100%",
    padding: "14px",
    background: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    letterSpacing: "0.02em",
    transition: "opacity 0.2s",
  },
  backBtn: {
    width: "100%",
    marginTop: "10px",
    padding: "10px",
    background: "none",
    border: "1.5px solid #e5e7eb",
    borderRadius: "10px",
    fontSize: "13px",
    color: "#6b7280",
    cursor: "pointer",
    fontWeight: 500,
  },
  skipWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "16px",
    flexWrap: "wrap",
    gap: "4px",
  },
  skipNote: {
    fontSize: "12px",
    color: "#9ca3af",
  },
  skipBtn: {
    background: "none",
    border: "none",
    color: "#1a1a2e",
    fontSize: "12px",
    fontWeight: 600,
    cursor: "pointer",
    padding: 0,
  },
  dots: {
    display: "flex",
    gap: "4px",
    alignItems: "center",
    "& span": {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "#fff",
      animation: "bounce 1.2s infinite",
    },
  },
};