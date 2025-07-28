import React, { useState } from "react";
import "./LoginSignup.css";

export default function LoginSignup({ onLogin, darkMode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) return;
    onLogin(email.trim());  // call the passed callback here!
  };

  return (
    <section className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          required
        />
        <button type="submit" className="btn btn--primary">
          Log In
        </button>
      </form>
    </section>
  );
}
