import { Bell, Sun, Moon, PanelLeft } from "lucide-react";
import "./Navbar.css";

export default function Navbar({ theme, toggleTheme, onOpenSidebar }) {
  return (
    <header className="navbar">
      {/* ── Row 1: Brand left, icons right ── */}
      <div className="navbar-row navbar-row--top">
        <div className="navbar-left">
          <button
            className="icon-btn sidebar-toggle"
            onClick={onOpenSidebar}
            aria-label="Open sidebar"
          >
            <PanelLeft size={17} strokeWidth={1.9} />
          </button>
          <div className="navbar-brand">
            <span className="brand-icon">
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
                <circle cx="12" cy="10" r="2.6" fill="var(--accent)" />
                <path d="M7 4.5 A7.2 7.2 0 0 0 7 15.5" stroke="var(--accent)" strokeWidth="1.9" strokeLinecap="round" fill="none"/>
                <path d="M17 4.5 A7.2 7.2 0 0 1 17 15.5" stroke="var(--accent)" strokeWidth="1.9" strokeLinecap="round" fill="none"/>
                <path d="M3.5 1.5 A11.5 11.5 0 0 0 3.5 18.5" stroke="var(--accent)" strokeWidth="1.9" strokeLinecap="round" fill="none" opacity="0.45"/>
                <path d="M20.5 1.5 A11.5 11.5 0 0 1 20.5 18.5" stroke="var(--accent)" strokeWidth="1.9" strokeLinecap="round" fill="none" opacity="0.45"/>
              </svg>
            </span>
            <span className="brand-text">
              <span className="brand-backstage">Backstage</span>
              <span className="brand-pass">Pass</span>
            </span>
          </div>
        </div>

        <div className="navbar-right">
          <div className="streak-badge">
            <span className="streak-fire">🔥</span>
            <span className="streak-count">30</span>
          </div>
          <button className="icon-btn bell-btn" aria-label="Notifications">
            <Bell size={17} strokeWidth={1.7} />
          </button>
          <button
            className="icon-btn theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
          </button>
          <div className="avatar">
            <img
              src="https://i.pravatar.cc/36?img=11"
              alt="User avatar"
              width="36"
              height="36"
            />
          </div>
        </div>
      </div>

      {/* ── Row 2: Back | Day left, Challenge title + info right ── */}
      <div className="navbar-row navbar-row--bottom">
        <nav className="breadcrumb">
          <button className="back-btn">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M8.5 10.5L4.5 6.5l4-4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back
          </button>
          <span className="breadcrumb-divider">|</span>
          <span className="breadcrumb-current">Day 1 of 9</span>
        </nav>

        <div className="challenge-info">
          <span className="challenge-title">9-Day Fitness Challenge</span>
          <button className="icon-btn info-btn" aria-label="Info">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4" />
              <path d="M8 7v4M8 5.2v.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
