// src/components/Logo.jsx
import React from "react";

export default function Logo() {
  return (
    <h1
      style={{
        fontFamily: "'Billabong', cursive",
        fontWeight: "normal",
        margin: 0,
        fontSize: "1.8rem",
        userSelect: "none",
        lineHeight: 1,
      }}
    >
      <span style={{ color: "#7f5af0" }}>Campus</span>
      <span style={{ color: "#f47ebf" }}>Link</span>
    </h1>
  );
}
