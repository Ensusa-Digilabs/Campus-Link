import React, { useState, useEffect } from "react";
import LoginSignup from "./components/LoginSignup";
import Dashboard from "./dashboard/Dashboard";
import "./index.css";
import "./styles/ui.css";
import "./dashboard/dashboard.css";

export default function App() {
  const [userEmail, setUserEmail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleLogin = (email) => {
    setLoading(true);
    setTimeout(() => {
      setUserEmail(email);
      setLoading(false);
    }, 900);
  };

  const handleLogout = () => {
    setUserEmail(null);
  };

  return (
    <>
      <button
        onClick={() => setDarkMode((d) => !d)}
        className="btn btn--ghost"
        style={{
          position: "fixed",
          top: 18,
          right: 18,
          zIndex: 9999,
          backdropFilter: "blur(10px)",
        }}
        aria-label="Toggle dark mode"
      >
        {darkMode ? "🌞 Light" : "🌙 Dark"}
      </button>

      {loading && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.8rem",
            fontWeight: 800,
            color: "#7f5af0",
            background: darkMode ? "#12121a" : "#f0f2f8",
            zIndex: 9998,
          }}
        >
          Loading…
        </div>
      )}

      {!userEmail && !loading && (
        <LoginSignup
          onLogin={handleLogin}  // Pass this callback to LoginSignup
          darkMode={darkMode}
        />
      )}

      {userEmail && !loading && (
        <Dashboard
          userEmail={userEmail}
          onLogout={handleLogout}
          darkMode={darkMode}
        />
      )}
    </>
  );
}
