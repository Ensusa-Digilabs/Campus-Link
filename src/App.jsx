import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/signup';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './dashboard/Dashboard';

function App() {
  const [userEmail, setUserEmail] = useState(null);

  const handleLoginSuccess = (email) => {
    setUserEmail(email);
  };

  const handleLogout = () => {
    setUserEmail(null);
  };

  return (
    <Router>
      <Routes>
        {!userEmail ? (
          <>
            <Route path="/" element={<Login onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/signup" element={<Signup onSignupSuccess={handleLoginSuccess} />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            {/* Redirect all unknown routes to login */}
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route
              path="/dashboard"
              element={<Dashboard userEmail={userEmail} onLogout={handleLogout} />}
            />
            {/* Redirect root and unknown routes to dashboard when logged in */}
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
