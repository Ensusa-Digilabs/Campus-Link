import React, { useState } from "react";
import Home from "./tabs/Home";
import Search from "./tabs/Search";
import Marketplace from "./tabs/Marketplace";
import Dating from "./tabs/Dating";
import DMs from "./tabs/DMs";
import Profile from "./tabs/Profile";

export default function Dashboard({ userEmail, onLogout, darkMode }) {
  const [activeTab, setActiveTab] = useState("home");

  const renderTab = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "search":
        return <Search />;
      case "marketplace":
        return <Marketplace />;
      case "dating":
        return <Dating />;
      case "dms":
        return <DMs />;
      case "profile":
        return <Profile userEmail={userEmail} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className={`dashboard-container ${darkMode ? "dark" : ""}`}>
      <aside className="sidebar float-card">
        <div className="brand">Campus Link</div>
        <nav className="side-links">
          <button
            className={`btn btn--ghost sidebar-btn ${activeTab === "home" ? "active" : ""}`}
            onClick={() => setActiveTab("home")}
          >
            🏠 Home
          </button>
          <button
            className={`btn btn--ghost sidebar-btn ${activeTab === "search" ? "active" : ""}`}
            onClick={() => setActiveTab("search")}
          >
            🔍 Search
          </button>
          <button
            className={`btn btn--ghost sidebar-btn ${activeTab === "marketplace" ? "active" : ""}`}
            onClick={() => setActiveTab("marketplace")}
          >
            🛒 Marketplace
          </button>
          <button
            className={`btn btn--ghost sidebar-btn ${activeTab === "dating" ? "active" : ""}`}
            onClick={() => setActiveTab("dating")}
          >
            ❤️ Dating
          </button>
          <button
            className={`btn btn--ghost sidebar-btn ${activeTab === "dms" ? "active" : ""}`}
            onClick={() => setActiveTab("dms")}
          >
            💬 DMs
          </button>
          <button
            className={`btn btn--ghost sidebar-btn ${activeTab === "profile" ? "active" : ""}`}
            onClick={() => setActiveTab("profile")}
          >
            👤 Profile
          </button>
        </nav>

        <button className="logout-cta" onClick={onLogout}>
          Log out
        </button>
      </aside>

      <main className="dashboard-main">{renderTab()}</main>
    </div>
  );
}
