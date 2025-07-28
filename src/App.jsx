import React, { useState } from "react";
import LoginSignup from "./components/LoginSignup";
import Dashboard from "./dashboard/Dashboard";
import "./index.css";
import "./styles/ui.css";
import "./dashboard/dashboard.css";

export default function App() {
  const [userEmail, setUserEmail] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = (email) => {
    setLoading(true);
    // Simulate async login operation
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
            background: "#f0f2f8", // You can toggle this based on dark mode if needed
            zIndex: 9998,
          }}
        >
          Loading…
        </div>
      )}

      {!userEmail && !loading && (
        <LoginSignup onLogin={handleLogin} />
      )}

      {userEmail && !loading && (
        <Dashboard userEmail={userEmail} onLogout={handleLogout} />
      )}
    </>
  );
}
