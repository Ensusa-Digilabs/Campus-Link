import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Signup({ onSignupSuccess }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const validateEmail = () => {
    if (!email.endsWith('.edu')) {
      setError('Only .edu email addresses are allowed');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail()) return;
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!password || !confirmPassword) {
      setError('Please fill all password fields');
      return;
    }

    // TODO: Replace with real signup API call
    alert('Signup successful!');

    onSignupSuccess(email);
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input
          type="email"
          placeholder="School Email (.edu)"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
          required
        />
        {error && <small style={{ color: 'red', marginTop: '-10px' }}>{error}</small>}

        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="login-input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button className="btn--primary" type="submit">
          Sign Up
        </button>

        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <Link to="/">Already have an account?</Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
