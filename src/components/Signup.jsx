import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

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
    // proceed with signup logic
    alert("Signup submitted!");
  };

  return (
    <div className="login-container">
      <div className="login-logo">
        <span className="campus">Campus</span><span className="link">Link</span>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input
          type="email"
          placeholder="School Email (.edu)"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
        />
        {error && <small style={{ color: 'red', marginTop: '-10px' }}>{error}</small>}

        <input type="password" placeholder="Password" className="login-input" />
        <input type="password" placeholder="Confirm Password" className="login-input" />

        <button className="btn--primary">Sign Up</button>

        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <Link to="/">Already have an account?</Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
