import "./Sidebar.css";

const DAYS = Array.from({ length: 9 }, (_, i) => i + 1);

function GreenCheck() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="11" fill="#22c55e"/>
      <path d="M6 11.5L9.5 15L16 8" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
      <rect x="2" y="9" width="14" height="11" rx="2.5" fill="#5a6478"/>
      <path d="M5 9V6a4 4 0 0 1 8 0v3" stroke="#5a6478" strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
  );
}

export default function Sidebar({ selectedDay, onDaySelect, isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
      <div className="sidebar-avatar-wrap">
        <div className="sidebar-avatar">
          <img src="https://i.pravatar.cc/58?img=11" alt="Profile" width="58" height="58"/>
        </div>
      </div>
      <nav className="sidebar-nav">
        {DAYS.map((day) => {
          const isSelected = day === selectedDay;
          const isCompleted = day < selectedDay;
          const isLocked = day > selectedDay;

          return (
            <button
              key={day}
              className={`sidebar-day-item${isSelected ? " selected" : ""}${isCompleted ? " completed" : ""}${isLocked ? " locked" : ""}`}
              onClick={() => onDaySelect(day)}
            >
              <span className="day-label">Day - {day}</span>
              <span className="day-icon">
                {isCompleted || isSelected ? <GreenCheck /> : isLocked ? <LockIcon /> : null}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}