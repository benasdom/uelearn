import { useState } from 'react';
import './styles/nss-bundle.css';

/* ---------- icons (feather-style, inherit color via currentColor) ---------- */
const FileIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);
const MapPinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const CardIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);
const RefreshIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);
const LockIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const AwardIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);
const ChevronIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const CheckIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const BulbIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2a7 7 0 0 0-4 12.9V17h8v-2.1A7 7 0 0 0 12 2z" />
  </svg>
);
const HelpIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const CompassIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

/* ---------- static content ---------- */
const TOPICS = [
  {
    icon: FileIcon,
    tone: 'cyan',
    title: 'Registration & PIN',
    blurb: 'What you need before you enrol, and how the PIN code + payment step works.',
  },
  {
    icon: MapPinIcon,
    tone: 'blue',
    title: 'Posting & Deployment',
    blurb: 'How postings are assigned, checking your placement, and reporting to post.',
  },
  {
    icon: CardIcon,
    tone: 'pink',
    title: 'Allowance & Pay',
    blurb: 'Setting up your payment account and what to do if a monthly allowance is late.',
  },
  {
    icon: RefreshIcon,
    tone: 'cyan',
    title: 'Change of Posting',
    blurb: 'Valid reasons for a transfer request and how the appeal process generally works.',
  },
  {
    icon: LockIcon,
    tone: 'blue',
    title: 'Portal & Login Help',
    blurb: 'Common login issues, resetting credentials, and keeping your account secure.',
  },
  {
    icon: AwardIcon,
    tone: 'pink',
    title: 'Finishing Service',
    blurb: 'Monthly evaluations, your logbook, and what happens at the end of the service year.',
  },
];

const CHECKLIST = [
  { id: 'c1', text: 'Confirm you\u2019re eligible (graduated from an accredited tertiary institution)' },
  { id: 'c2', text: 'Gather your ID, passport picture, and academic documents ahead of time' },
  { id: 'c3', text: 'Get your PIN code and complete payment through an approved channel' },
  { id: 'c4', text: 'Fill out the online registration/enrolment form carefully' },
  { id: 'c5', text: 'Check your posting once it\u2019s released and note the reporting date' },
  { id: 'c6', text: 'Print your appointment letter and get it endorsed at your post' },
  { id: 'c7', text: 'Open or confirm the bank account your allowance will be paid into' },
  { id: 'c8', text: 'Save your login details somewhere safe — you\u2019ll need them all year' },
];

const FAQS = [
  {
    q: 'What documents do I actually need to get started?',
    a: 'Typically a valid ID (national ID, voter\u2019s card, passport, or driver\u2019s license), your academic index number, and a recent passport-sized photo. Requirements can vary by year, so always check the current list on your official registration portal before you begin.',
  },
  {
    q: 'I can\u2019t remember my PIN or login — what do I do?',
    a: 'Look for a "Forgot Password" or "Retrieve PIN" option on the login page first. If that doesn\u2019t work, your institution\u2019s NSS coordinator or the scheme\u2019s support desk can usually help you recover access — avoid third-party sites that ask for payment to "recover" an account.',
  },
  {
    q: 'Can I request a change of posting?',
    a: 'Most schemes allow a transfer request for a genuine reason (health, security, family circumstances), submitted through official channels within a set window after posting. Start the request as early as possible, since these windows tend to close quickly.',
  },
  {
    q: 'When should I expect my first allowance?',
    a: 'This varies a lot by cohort and year, so don\u2019t rely on rumors. Confirm your payment account is set up correctly first — that\u2019s the most common reason for a delayed first payment — and follow up with your regional office if it\u2019s significantly late.',
  },
  {
    q: 'What if the registration portal is down or acting up?',
    a: 'Portal downtime happens, especially close to deadlines. Try again at an off-peak time, clear your browser cache, and check official social media/news channels for outage updates rather than assuming your application failed.',
  },
];

const TIPS = [
  { icon: CompassIcon, text: 'Start the registration process as early as you can — last-minute rushes are where most mistakes happen.' },
  { icon: LockIcon, text: 'Write down your PIN, portal login, and posting details somewhere safe. You\u2019ll need them repeatedly.' },
  { icon: FileIcon, text: 'Keep physical and digital copies of your appointment letter — you\u2019ll need it endorsed and referenced often.' },
  { icon: CardIcon, text: 'Sort out your allowance payment account before reporting to post, not after.' },
  { icon: AwardIcon, text: 'Take monthly evaluations and logbook entries seriously — they matter for your service certificate.' },
  { icon: HelpIcon, text: 'When in doubt, ask your school\u2019s NSS coordinator or regional office directly instead of relying on forum rumors.' },
];

const Nss = () => {
  const [checked, setChecked] = useState(() => new Set());
  const [openFaq, setOpenFaq] = useState(0);

  const toggleCheck = (id) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const doneCount = checked.size;
  const progressPct = Math.round((doneCount / CHECKLIST.length) * 100);

  return (
    <div className="nss-page">
      {/* ---------- hero ---------- */}
      <div className="hero-card-wrap">
        <div className="hero-card nss-hero">
          <div className="hero-left">
            <span className="awaiting-tag">
              <CompassIcon width="13" height="13" />
              For Tertiary Students
            </span>

      

            <div className="content-title-wrap">
              <div className="content-title filled">
                Your national service guide
              </div>
            </div>
          </div>

          <div className="hero-right nss-progress-panel">
            <div className="nss-progress-card">
              <div className="nss-progress-label">Getting-started checklist</div>
              <div className="nss-progress-count">
                {doneCount}<span>/{CHECKLIST.length}</span>
              </div>
              <div className="nss-progress-track">
                <div className="nss-progress-fill" style={{ width: `${progressPct}%` }} />
              </div>
              <div className="nss-progress-hint">
                {doneCount === 0 && 'Tick off steps as you go'}
                {doneCount > 0 && doneCount < CHECKLIST.length && 'Nice progress — keep going'}
                {doneCount === CHECKLIST.length && 'All set for a smooth start 🎉'}
              </div>
            </div>
          </div>
        </div>

        <div className="meta-bar">
          <div className="meta-cell">Registration</div>
          <div className="meta-cell">Posting &amp; Deployment</div>
          <div className="meta-cell">Allowance</div>
          <div className="meta-cell">Support</div>
        </div>
      </div>

      {/* ---------- topics grid ---------- */}
      <div className="nss-section">
        <div className="nss-section-header">Explore by topic</div>
        <div className="nss-topics-grid">
          {TOPICS.map((t, i) => (
            <div className="nss-topic-card" key={i}>
              <div className={`nss-topic-icon tone-${t.tone}`}>
                <t.icon width="18" height="18" />
              </div>
              <div className="nss-topic-title">{t.title}</div>
              <div className="nss-topic-blurb">{t.blurb}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- checklist ---------- */}
      <div className="nss-section">
        <div className="ref-list-section">
          <div className="ref-list-header">
            <CheckIcon width="15" height="15" />
            Beginner checklist
          </div>
          <div className="nss-checklist">
            {CHECKLIST.map((item) => {
              const isChecked = checked.has(item.id);
              return (
                <button
                  key={item.id}
                  className={`checklist-row${isChecked ? ' is-checked' : ''}`}
                  onClick={() => toggleCheck(item.id)}
                  type="button"
                >
                  <span className="checklist-box">{isChecked && <CheckIcon width="12" height="12" />}</span>
                  <span className="checklist-text">{item.text}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ---------- tips ---------- */}
      <div className="nss-section">
        <div className="nss-section-header">
          <BulbIcon width="15" height="15" />
          Beginner advice
        </div>
        <div className="nss-tips-grid">
          {TIPS.map((tip, i) => (
            <div className="tip-row" key={i}>
              <div className="tip-icon">
                <tip.icon width="16" height="16" />
              </div>
              <div className="tip-text">{tip.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- FAQ ---------- */}
      <div className="nss-section">
        <div className="ref-list-section">
          <div className="ref-list-header">
            <HelpIcon width="15" height="15" />
            Common questions
          </div>
          <div className="faq-list">
            {FAQS.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div className="faq-item" key={i}>
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span>{f.q}</span>
                    <ChevronIcon className={`faq-chevron${isOpen ? ' is-open' : ''}`} width="16" height="16" />
                  </button>
                  <div className={`faq-answer${isOpen ? ' is-open' : ''}`}>
                    <p>{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="nss-disclaimer">
        Procedures, portals, fees, and dates change from year to year — always confirm the current details with
        your institution&rsquo;s NSS coordinator or the official scheme website before acting on them.
      </div>
    </div>
  );
};

export default Nss;