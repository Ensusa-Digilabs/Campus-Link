import React from "react";

const ICONS = {
  home: (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 12l9-9 9 9v9a3 3 0 0 1-3 3h-4v-6H10v6H6a3 3 0 0 1-3-3v-9z" />
    </svg>
  ),
  search: (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21 21l-4.35-4.35m0 0a7 7 0 1 0-9.9-9.9 7 7 0 0 0 9.9 9.9z" />
    </svg>
  ),
  marketplace: (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4 6h16v2H4zM6 8v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />
    </svg>
  ),
  dating: (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z" />
    </svg>
  ),
  profile: (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="7" r="5" />
      <path d="M5 21v-2a5 5 0 0 1 10 0v2" />
    </svg>
  ),
  dm: (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
    </svg>
  ),
};

export default function Sidebar({ activeTab, setActiveTab }) {
  const tabs = [
    { key: "home", label: "Home", icon: ICONS.home },
    { key: "search", label: "Search", icon: ICONS.search },
    { key: "marketplace", label: "Marketplace", icon: ICONS.marketplace },
    { key: "dating", label: "Dating", icon: ICONS.dating },
    { key: "dm", label: "Messages", icon: ICONS.dm },
    { key: "profile", label: "Profile", icon: ICONS.profile },
  ];

  return (
    <nav className="sidebar" aria-label="Primary navigation">
      <ul>
        {tabs.map(({ key, label, icon }) => (
          <li key={key}>
            <button
              className={`sidebar-btn ${activeTab === key ? "active" : ""}`}
              onClick={() => setActiveTab(key)}
              aria-current={activeTab === key ? "page" : undefined}
              aria-label={label}
              title={label}
            >
              {icon}
              <span className="sidebar-label">{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
