import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Replace with real authentication API call
    if (email && password) {
      onLoginSuccess(email);
      navigate('/dashboard');
    } else {
      alert('Please enter valid credentials');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn--primary" type="submit">
          Login
        </button>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <Link to="/signup" style={{ marginRight: '10px' }}>
            Create account
          </Link>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
