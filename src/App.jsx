import React, { useEffect, useState } from "react";
import LoginSignup from "./LoginSignup";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <button
        style={{
          position: "fixed",
          top: 15,
          right: 15,
          padding: "8px 12px",
          cursor: "pointer",
          borderRadius: "8px",
          border: "none",
          backgroundColor: darkMode ? "#7f5fcf" : "#4a90e2",
          color: "white",
          fontWeight: "600",
          zIndex: 9999,
        }}
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle dark mode"
      >
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
      <LoginSignup />
    </>
  );
}
