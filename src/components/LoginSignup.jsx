import React, { useState } from "react";
import "./LoginSignup.css";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate email/password if you want here

    // Call onLogin prop to notify parent that login succeeded
    onLogin(email);
  };

  return (
    <section className="login-container">
      <div className="login-logo">
        <span className="campus">Campus</span><span className="link">Link</span>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
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
