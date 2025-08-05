import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './ForgotPassword.css';


function ForgotPassword() {
  const handleReset = (e) => {
    e.preventDefault();
    alert('If your email exists, reset instructions will be sent.');
  };

  return (
    <div className="login-container">
      <div className="login-logo">
        <Logo />
      </div>

      <form className="login-form" onSubmit={handleReset}>
        <h2>Reset Password</h2>
        <input type="email" placeholder="Enter your email" className="login-input" />
        <button className="btn--primary">Send Reset Link</button>

        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <Link to="/">Back to Login</Link>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
