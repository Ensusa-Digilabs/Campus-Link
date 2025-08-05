import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-logo">
        <span className="campus">Campus</span><span className="link">Link</span>
      </div>

      <form className="login-form">
        <h2>Login</h2>
        <input type="email" placeholder="Email" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button className="btn--primary">Login</button>

        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <Link to="/signup" style={{ marginRight: '10px' }}>Create account</Link>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
