import { Link, useLocation } from 'react-router-dom';
import './menu/styles/NotFound.css';

const NotFound = () => {
  const location = useLocation();
  const attemptedPath = location?.pathname || '/unknown';

  return (
    <div className="nf-page">
      <div className="nf-card">
        <div className="nf-dotgrid" aria-hidden="true" />
        <div className="nf-glow" aria-hidden="true" />

        <p className="nf-eyebrow">GET {attemptedPath} <span className="nf-eyebrow-status">→ 404</span></p>

        <div className="nf-diagram" role="img" aria-label={`No route found from your current position to ${attemptedPath}`}>
          <svg viewBox="0 0 640 140" className="nf-diagram-svg" preserveAspectRatio="xMidYMid meet">
            <line x1="80" y1="70" x2="258" y2="70" className="nf-line nf-line-active" />
            <line x1="382" y1="70" x2="560" y2="70" className="nf-line nf-line-dim" />
            <circle cx="50" cy="70" r="7" className="nf-node nf-node-active" />
            <circle cx="590" cy="70" r="7" className="nf-node nf-node-dim" />
            <text x="50" y="102" className="nf-node-label nf-node-label-active">YOU</text>
            <text x="590" y="102" className="nf-node-label nf-node-label-dim">HOME</text>
          </svg>
          <div className="nf-badge">
            <span className="nf-badge-ring" aria-hidden="true" />
            404
          </div>
        </div>

        <h1 className="nf-heading">This route doesn't exist</h1>
        <p className="nf-subtitle">
          We couldn't find a path to that page. It may have been moved, renamed, or never existed.
        </p>

        <div className="nf-actions">
          <Link to="/" className="nf-cta">Take me home</Link>
          <button type="button" className="nf-ghost-btn" onClick={() => window.history.back()}>
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;