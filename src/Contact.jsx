import { useState } from 'react';
import { Link } from 'react-router-dom';
import spinner from '/imgs/loader.svg';
import mainlogo from '/imgs/titled.png';
import { MoneyCollectOutlined, SmileOutlined, TeamOutlined } from '@ant-design/icons';
import { fetchWithAuth, domain, AuthError } from './menu/authfetch'; // adjust this path if authfetch.js lives elsewhere relative to this file

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Outfit:wght@300;400;500&display=swap');

  .amb-root {
    min-height: 100vh;
    background: #07091a;
    font-family: 'Outfit', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 24px 16px 100px;
    box-sizing: border-box;
  }

  .amb-orb {
    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
  }
  .amb-orb-1 {
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 65%);
    top: -140px; right: -100px;
    animation: orbDrift 13s ease-in-out infinite alternate;
  }
  .amb-orb-2 {
    width: 520px; height: 520px;
    background: radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 65%);
    bottom: 80px; left: -160px;
    animation: orbDrift 10s ease-in-out infinite alternate-reverse;
  }
  .amb-orb-3 {
    width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 65%);
    top: 45%; left: 55%;
    animation: orbDrift 16s ease-in-out infinite alternate;
  }
  @keyframes orbDrift {
    from { transform: translate(0,0) scale(1); }
    to   { transform: translate(24px,16px) scale(1.1); }
  }

  .amb-card {
    position: relative;
    z-index: 1;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.09);
    backdrop-filter: blur(28px);
    -webkit-backdrop-filter: blur(28px);
    border-radius: 28px;
    padding: 52px 52px;
    max-width: 680px;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.04) inset, 0 32px 80px rgba(0,0,0,0.55);
    animation: fadeSlideUp 0.9s cubic-bezier(0.16,1,0.3,1) both;
  }
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(36px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .amb-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(6,182,212,0.12);
    border: 1px solid rgba(6,182,212,0.28);
    color: #67e8f9;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 6px 14px;
    border-radius: 100px;
    margin-bottom: 24px;
  }
  .amb-badge-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #22d3ee;
    animation: pulse 2s ease-in-out infinite;
  }
  @keyframes pulse {
    0%,100% { opacity:1; transform:scale(1); }
    50%      { opacity:0.5; transform:scale(0.8); }
  }

  .amb-headline {
    font-family: 'michroma', sans-serif;
    font-size: clamp(1.8rem, 4.5vw, 2.8rem);
    font-weight: 800;
    color: #fff;
    line-height: 1.1;
    margin: 0 0 12px;
    letter-spacing: -0.02em;
  }
  .amb-headline span {
    background: linear-gradient(135deg, #22d3ee, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .amb-subtext {
    font-size: 15px;
    font-weight: 300;
    color: rgba(255,255,255,0.45);
    margin: 0 0 40px;
    line-height: 1.6;
  }

  /* Fields */
  .amb-fields {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 24px;
  }

  .amb-field {
    display: flex;
    align-items: center;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.09);
    border-radius: 14px;
    overflow: hidden;
    transition: border-color 0.2s ease, background 0.2s ease;
  }
  .amb-field:focus-within {
    border-color: rgba(34,211,238,0.35);
    background: rgba(34,211,238,0.04);
  }

  .amb-field-prefix {
    padding: 0 14px;
    color: rgba(255,255,255,0.25);
    font-size: 15px;
    flex-shrink: 0;
    user-select: none;
  }

  .amb-input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: rgba(255,255,255,0.85);
    font-family: 'Outfit', sans-serif;
    font-size: 15px;
    font-weight: 400;
    padding: 16px 16px 16px 0;
    width: 100%;
    box-sizing: border-box;
  }
  .amb-input::placeholder { color: rgba(255,255,255,0.25); }

  .amb-textarea-wrap {
    align-items: flex-start;
    min-height: 120px;
  }
  .amb-textarea-wrap .amb-field-prefix { padding-top: 16px; }
  .amb-textarea {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: rgba(255,255,255,0.85);
    font-family: 'Outfit', sans-serif;
    font-size: 15px;
    font-weight: 400;
    padding: 16px 16px 16px 0;
    resize: vertical;
    min-height: 110px;
    width: 100%;
    box-sizing: border-box;
  }
  .amb-textarea::placeholder { color: rgba(255,255,255,0.25); }

  /* Submit */
  .amb-submit {
    width: 100%;
    padding: 17px;
    background: linear-gradient(135deg, rgba(34,211,238,0.18), rgba(139,92,246,0.18));
    border: 1px solid rgba(34,211,238,0.28);
    border-radius: 14px;
    color: #e0fffe;
    font-family: 'Outfit', sans-serif;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.03em;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.25s ease;
  }
  .amb-submit:hover:not(:disabled) {
    background: linear-gradient(135deg, rgba(34,211,238,0.28), rgba(139,92,246,0.28));
    border-color: rgba(34,211,238,0.45);
    transform: translateY(-1px);
    box-shadow: 0 8px 32px rgba(34,211,238,0.15);
  }
  .amb-submit:active:not(:disabled) { transform: translateY(0); }
  .amb-submit:disabled { opacity: 0.6; cursor: not-allowed; }

  .amb-spinner { width: 22px; height: 22px; }

  /* Back */
  .amb-back {
    position: fixed;
    top: 20px; left: 20px;
    z-index: 10;
    width: 40px; height: 40px;
    display: flex; align-items: center; justify-content: center;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 50%;
    color: rgba(255,255,255,0.7);
    font-size: 16px;
    text-decoration: none;
    backdrop-filter: blur(10px);
    transition: all 0.2s ease;
  }
  .amb-back:hover { background: rgba(255,255,255,0.1); color: #fff; }

  /* Nav */
  .amb-nav {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 4px;
    background: rgba(10,12,28,0.8);
    border: 1px solid rgba(255,255,255,0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 24px;
    padding: 8px 12px;
    box-shadow: 0 8px 40px rgba(0,0,0,0.5);
    white-space: nowrap;
  }
  .amb-nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 8px 14px;
    border-radius: 16px;
    color: rgba(255,255,255,0.4);
    font-size: 10px;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transition: all 0.2s ease;
    min-width: 52px;
  }
  .amb-nav-item:hover { color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.06); }
  .amb-nav-item.active { color: #67e8f9; background: rgba(6,182,212,0.12); }
  .amb-nav-icon { font-size: 18px; line-height: 1; display: flex; align-items: center; justify-content: center; }
  .amb-nav-logo { width: 20px; height: 20px; object-fit: contain; opacity: 0.5; transition: opacity 0.2s; }
  .amb-nav-item:hover .amb-nav-logo { opacity: 1; }

  /* Toast */
  .amb-toast {
    position: fixed;
    top: 24px;
    left: 50%;
    transform: translateX(-50%) translateY(-80px);
    background: rgba(10,12,28,0.9);
    border: 1px solid rgba(34,211,238,0.3);
    color: #67e8f9;
    padding: 12px 24px;
    border-radius: 100px;
    font-size: 14px;
    font-weight: 500;
    backdrop-filter: blur(20px);
    z-index: 100;
    transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
    pointer-events: none;
  }
  .amb-toast.show { transform: translateX(-50%) translateY(0); }

  @media (max-width: 600px) {
    .amb-card { padding: 32px 22px; border-radius: 20px; }
    .amb-nav-item { padding: 8px 10px; min-width: 44px; }
    .amb-nav-label { display: none; }
  }
`;

export default function Contact() {
  const [spin, setSpin] = useState(false);
  const [toast, setToast] = useState(false);
  const [fields, setFields] = useState({ name: '', email: '', phone: '', message: '' });

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(false), 3000);
  };

  const handleSubmit = async () => {
    if (Object.values(fields).some(v => !v.trim())) {
      showToast('Please fill in all fields.');
      return;
    }
    setSpin(true);
    try {
      // The backend's /test-telegram/ endpoint only forwards the `message`
      // field on to the Telegram bot, so we fold name/email/phone into one
      // nicely formatted message string here on the frontend. Telegram
      // renders this with Markdown (bold via *text*, line breaks via \n).
      const formattedMessage =
        `📩 *New Contact Form Submission*\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `👤 *Name:* ${fields.name}\n` +
        `✉️ *Email:* ${fields.email}\n` +
        `📞 *Phone:* ${fields.phone}\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `💬 *Message:*\n${fields.message}`;

      // Sends the form through our own backend, which relays it to Telegram —
      // requires the visitor to be signed in (fetchWithAuth attaches their
      // access token and refreshes it automatically on a 401).
      await fetchWithAuth(`${domain}/api/v1/test-telegram/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: formattedMessage,
        }),
      });
      showToast('Message sent successfully!');
      setFields({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      if (err instanceof AuthError) {
        showToast('Please sign in to send a message.');
      } else {
        showToast('Failed to send. Please try again.');
      }
    }
    setSpin(false);
  };

  const set = (key) => (e) => setFields(f => ({ ...f, [key]: e.target.value }));

  return (
    <>
      <style>{styles}</style>
      <div className="amb-root">
        <div className="amb-orb amb-orb-1" />
        <div className="amb-orb amb-orb-2" />
        <div className="amb-orb amb-orb-3" />

        {/* Toast */}
        <div className={`amb-toast${toast ? ' show' : ''}`}>{toast}</div>

        <Link to="/" className="amb-back">
          <i className="fa fa-arrow-left" />
        </Link>

        <div className="amb-card">
          <div className="amb-badge">
            <div className="amb-badge-dot" />
            Get in touch
          </div>
          <h1 className="amb-headline">
            Let's <span>work together.</span>
          </h1>
          <p className="amb-subtext">
            Have a project in mind? Drop us a message and we'll get back to you shortly.
          </p>

          <div className="amb-fields">
            <div className="amb-field">
              <span className="amb-field-prefix">✦</span>
              <input
                className="amb-input"
                placeholder="Your name"
                value={fields.name}
                onChange={set('name')}
              />
            </div>
            <div className="amb-field">
              <span className="amb-field-prefix">@</span>
              <input
                className="amb-input"
                placeholder="Email address"
                type="email"
                value={fields.email}
                onChange={set('email')}
              />
            </div>
            <div className="amb-field">
              <span className="amb-field-prefix">#</span>
              <input
                className="amb-input"
                placeholder="Phone number"
                type="tel"
                value={fields.phone}
                onChange={set('phone')}
              />
            </div>
            <div className="amb-field amb-textarea-wrap">
              <span className="amb-field-prefix">✉</span>
              <textarea
                className="amb-textarea"
                placeholder="Your message..."
                value={fields.message}
                onChange={set('message')}
              />
            </div>
          </div>

          <button
            className="amb-submit"
            onClick={handleSubmit}
            disabled={spin}
          >
            {spin
              ? <img src={spinner} className="amb-spinner" alt="sending" />
              : <>Send Message &nbsp;→</>
            }
          </button>
        </div>

        <nav className="amb-nav">
          <Link to="/" className="amb-nav-item">
            <span className="amb-nav-icon"><img className="amb-nav-logo" src={mainlogo} alt="" /></span>
            <span className="amb-nav-label">Home</span>
          </Link>
          <Link to="/about" className="amb-nav-item">
            <span className="amb-nav-icon"><SmileOutlined /></span>
            <span className="amb-nav-label">About</span>
          </Link>
          <Link to="/contact" className="amb-nav-item active">
            <span className="amb-nav-icon"><TeamOutlined /></span>
            <span className="amb-nav-label">Contact</span>
          </Link>
          <Link to="/payment" className="amb-nav-item" target="_blank" rel="noopener noreferrer">
            <span className="amb-nav-icon"><MoneyCollectOutlined /></span>
            <span className="amb-nav-label">Upgrade</span>
          </Link>
        </nav>
      </div>
    </>
  );
}