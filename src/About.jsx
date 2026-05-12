import { MoneyCollectOutlined, SmileFilled, TeamOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import mainlogo from '/imgs/titled.png';

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
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 65%);
    top: -180px; left: -180px;
    animation: orbDrift 14s ease-in-out infinite alternate;
  }
  .amb-orb-2 {
    width: 480px; height: 480px;
    background: radial-gradient(circle, rgba(236,72,153,0.16) 0%, transparent 65%);
    bottom: 60px; right: -140px;
    animation: orbDrift 11s ease-in-out infinite alternate-reverse;
  }
  .amb-orb-3 {
    width: 360px; height: 360px;
    background: radial-gradient(circle, rgba(6,182,212,0.13) 0%, transparent 65%);
    top: 55%; left: 40%;
    animation: orbDrift 18s ease-in-out infinite alternate;
  }
  @keyframes orbDrift {
    from { transform: translate(0,0) scale(1); }
    to   { transform: translate(28px,18px) scale(1.1); }
  }

  .amb-card {
    position: relative;
    z-index: 1;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.09);
    backdrop-filter: blur(28px);
    -webkit-backdrop-filter: blur(28px);
    border-radius: 28px;
    padding: 56px 52px;
    max-width: 720px;
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
    background: rgba(139,92,246,0.15);
    border: 1px solid rgba(139,92,246,0.3);
    color: #c4b5fd;
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
    background: #a78bfa;
    animation: pulse 2s ease-in-out infinite;
  }
  @keyframes pulse {
    0%,100% { opacity:1; transform:scale(1); }
    50%      { opacity:0.5; transform:scale(0.8); }
  }

  .amb-headline {
    font-family: 'Michroma', sans-serif;
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 800;
    color: #ffffff;
    line-height: 1.1;
    margin: 0 0 20px;
    letter-spacing: -0.02em;
  }
  .amb-headline span {
    background: linear-gradient(135deg, #a78bfa, #ec4899, #22d3ee);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .amb-desc {
    font-size: clamp(1rem, 2.5vw, 1.1rem);
    font-weight: 300;
    color: rgba(255,255,255,0.55);
    line-height: 1.75;
    margin: 0 0 36px;
  }

  .amb-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 40px;
  }
  .amb-pill {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    color: rgba(255,255,255,0.65);
    font-size: 13px;
    padding: 7px 16px;
    border-radius: 100px;
    transition: all 0.2s ease;
    cursor: default;
  }
  .amb-pill:hover {
    background: rgba(139,92,246,0.15);
    border-color: rgba(139,92,246,0.35);
    color: #c4b5fd;
  }

  .amb-divider {
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
    margin: 36px 0;
  }

  .amb-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, rgba(139,92,246,0.2), rgba(236,72,153,0.15));
    border: 1px solid rgba(139,92,246,0.3);
    color: #e0d7ff;
    font-size: 15px;
    font-weight: 500;
    padding: 14px 26px;
    border-radius: 14px;
    text-decoration: none;
    transition: all 0.25s ease;
  }
  .amb-cta:hover {
    background: linear-gradient(135deg, rgba(139,92,246,0.35), rgba(236,72,153,0.25));
    border-color: rgba(139,92,246,0.5);
    transform: translateY(-1px);
    box-shadow: 0 8px 32px rgba(139,92,246,0.2);
  }
  .amb-cta-arrow { transition: transform 0.2s ease; }
  .amb-cta:hover .amb-cta-arrow { transform: translateX(3px); }

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
  .amb-nav-item.active { color: #c4b5fd; background: rgba(139,92,246,0.15); }
  .amb-nav-icon { font-size: 18px; line-height: 1; display: flex; align-items: center; justify-content: center; }
  .amb-nav-logo { width: 20px; height: 20px; object-fit: contain; opacity: 0.5; transition: opacity 0.2s; }
  .amb-nav-item:hover .amb-nav-logo, .amb-nav-item.active .amb-nav-logo { opacity: 1; }

  @media (max-width: 600px) {
    .amb-card { padding: 32px 24px; border-radius: 20px; }
    .amb-nav-item { padding: 8px 10px; min-width: 44px; }
    .amb-nav-label { display: none; }
  }
`;

const services = [
  'Web Development','Mobile Apps','Frontend','Backend',
  'Ecommerce','Sales Systems','Advertising','UI/UX Design',
];

export default function About() {
  return (
    <>
      <style>{styles}</style>
      <div className="amb-root">
        <div className="amb-orb amb-orb-1" />
        <div className="amb-orb amb-orb-2" />
        <div className="amb-orb amb-orb-3" />

        <Link to="/uelearn/" className="amb-back">
          <i className="fa fa-arrow-left" />
        </Link>

        <div className="amb-card">
          <div className="amb-badge">
            <div className="amb-badge-dot" />
            Who we are
          </div>
          <h1 className="amb-headline">
            We build <span>digital experiences</span> that matter.
          </h1>
          <p className="amb-desc">
            Unity Elites is a team of developers crafting elegant, high-performance
            digital products — from sleek frontends to robust backend systems and
            everything in between.
          </p>
          <div className="amb-pills">
            {services.map(s => <div key={s} className="amb-pill">{s}</div>)}
          </div>
          <div className="amb-divider" />
          <a className="amb-cta" href="https://benasdom.github.io/ue" target="_blank" rel="noopener noreferrer">
            Visit Unity Elites <span className="amb-cta-arrow">→</span>
          </a>
        </div>

        <nav className="amb-nav">
          <Link to="/uelearn/" className="amb-nav-item">
            <span className="amb-nav-icon"><img className="amb-nav-logo" src={mainlogo} alt="" /></span>
            <span className="amb-nav-label">Home</span>
          </Link>
          <Link to="/uelearn/about" className="amb-nav-item active">
            <span className="amb-nav-icon"><SmileFilled /></span>
            <span className="amb-nav-label">About</span>
          </Link>
          <Link to="/uelearn/contact" className="amb-nav-item">
            <span className="amb-nav-icon"><TeamOutlined /></span>
            <span className="amb-nav-label">Contact</span>
          </Link>
          <Link to="/uelearn/payment" className="amb-nav-item" target="_blank" rel="noopener noreferrer">
            <span className="amb-nav-icon"><MoneyCollectOutlined /></span>
            <span className="amb-nav-label">Upgrade</span>
          </Link>
        </nav>
      </div>
    </>
  );
}