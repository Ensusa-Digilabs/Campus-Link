import React, { useState } from "react";
import Select from "react-select";

const campusOptions = [
  { value: "harvard", label: "Harvard University" },
  { value: "mit", label: "Massachusetts Institute of Technology" },
  { value: "stanford", label: "Stanford University" },
  { value: "caltech", label: "California Institute of Technology" },
  { value: "yale", label: "Yale University" },
  { value: "princeton", label: "Princeton University" },
  { value: "columbia", label: "Columbia University" },
  { value: "uchicago", label: "University of Chicago" },
  { value: "upenn", label: "University of Pennsylvania" },
  { value: "berkeley", label: "University of California, Berkeley" },
  { value: "ucla", label: "University of California, Los Angeles" },
  { value: "nyu", label: "New York University" },
  { value: "duke", label: "Duke University" },
  { value: "northwestern", label: "Northwestern University" },
  { value: "johnshopkins", label: "Johns Hopkins University" },
  { value: "cornell", label: "Cornell University" },
  { value: "umich", label: "University of Michigan" },
  { value: "umd", label: "University of Maryland" },
  { value: "uwashington", label: "University of Washington" },
  { value: "utexas", label: "University of Texas at Austin" },
  { value: "pennstate", label: "Pennsylvania State University" },
  { value: "uwisconsin", label: "University of Wisconsin-Madison" },
  { value: "uva", label: "University of Virginia" },
  { value: "umass", label: "University of Massachusetts Amherst" },
  { value: "rutgers", label: "Rutgers University" },
  { value: "indiana", label: "Indiana University Bloomington" },
  { value: "osu", label: "Ohio State University" },
  { value: "ucsd", label: "University of California, San Diego" },
  { value: "ucsf", label: "University of California, San Francisco" }
];

const yearOptions = [
  { value: "freshman", label: "Freshman" },
  { value: "sophomore", label: "Sophomore" },
  { value: "junior", label: "Junior" },
  { value: "senior", label: "Senior" },
  { value: "graduate", label: "Graduate" }
];

// Custom styles for react-select dropdown
const customStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: document.body.classList.contains("dark")
      ? "rgba(255,255,255,0.05)"
      : "rgba(255,255,255,0.9)",
    borderColor: state.isFocused
      ? document.body.classList.contains("dark")
        ? "#a078f0"
        : "#4a90e2"
      : "#ccc",
    boxShadow: state.isFocused
      ? `0 0 6px ${
          document.body.classList.contains("dark") ? "#a078f0" : "#4a90e2"
        }`
      : "none",
    fontSize: "1rem",
    padding: "2px 4px",
    borderRadius: "12px",
    color: document.body.classList.contains("dark") ? "#f0f0f0" : "#222",
    transition: "all 0.3s ease-in-out"
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: document.body.classList.contains("dark")
      ? "#2a1e3e"
      : "#fff",
    borderRadius: "12px",
    zIndex: 9999
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? document.body.classList.contains("dark")
        ? "#3c2c58"
        : "#d6e4ff"
      : state.isFocused
      ? document.body.classList.contains("dark")
        ? "#4d3a6a"
        : "#f0f4ff"
      : document.body.classList.contains("dark")
      ? "#2a1e3e"
      : "#fff",
    color: document.body.classList.contains("dark") ? "#f0f0f0" : "#222",
    cursor: "pointer",
    padding: "10px 15px"
  }),
  singleValue: (base) => ({
    ...base,
    color: document.body.classList.contains("dark") ? "#f0f0f0" : "#222"
  })
};

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [studentId, setStudentId] = useState("");
  const [campus, setCampus] = useState(null);
  const [year, setYear] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.endsWith(".edu")) {
      setError("Only .edu email addresses are allowed.");
      return;
    }

    if (!isLogin) {
      if (!studentId.trim()) {
        setError("Please enter your Student ID.");
        return;
      }
      if (!campus) {
        setError("Please select your Campus.");
        return;
      }
      if (!year) {
        setError("Please select your Year in college.");
        return;
      }
      if (!password) {
        setError("Please enter a password.");
        return;
      }
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
    } else {
      if (!password) {
        setError("Please enter your password.");
        return;
      }
    }

    setError("");
    if (isLogin) {
      alert(`Logging in with ${email}`);
    } else {
      alert(
        `Signing up:\nEmail: ${email}\nStudent ID: ${studentId}\nCampus: ${campus.label}\nYear: ${year.label}`
      );
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <h1>Campus Link</h1>
        <p>
          {isLogin
            ? "Welcome back! Please login."
            : "Create an account and join your campus!"}
        </p>
      </div>
      <div className="right-panel">
        <form onSubmit={handleSubmit} noValidate>
          <div className="floating-label-group">
            <input
              id="email"
              type="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">.edu Email Address</label>
          </div>

          <div className="floating-label-group">
            <input
              id="password"
              type="password"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
          </div>

          {!isLogin && (
            <>
              <div className="floating-label-group">
                <input
                  id="confirm-password"
                  type="password"
                  placeholder=" "
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <label htmlFor="confirm-password">Confirm Password</label>
              </div>

              <div className="floating-label-group">
                <input
                  id="student-id"
                  type="text"
                  placeholder=" "
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  required
                />
                <label htmlFor="student-id">Student ID</label>
              </div>

              <div style={{ marginBottom: "25px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "6px",
                    color: "var(--text)"
                  }}
                >
                  Select Campus
                </label>
                <Select
                  options={campusOptions}
                  value={campus}
                  onChange={setCampus}
                  placeholder="Search your college/university"
                  isClearable
                  styles={customStyles}
                />
              </div>

              <div className="floating-label-group">
                <select
                  id="year"
                  value={year ? year.value : ""}
                  onChange={(e) => {
                    const selected = yearOptions.find(
                      (opt) => opt.value === e.target.value
                    );
                    setYear(selected);
                  }}
                  required
                  style={{
                    width: "100%",
                    padding: "14px 10px",
                    fontSize: "1.1rem",
                    border: "none",
                    background: "transparent",
                    color: "var(--text)",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                    borderRadius: "12px",
                    marginTop: "10px",
                    marginBottom: "20px",
                    appearance: "none",
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    cursor: "pointer"
                  }}
                >
                  <option value="" disabled>
                    Select Year
                  </option>
                  {yearOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}

          {error && <p className="error">{error}</p>}

          <button type="submit">{isLogin ? "Login" : "Create Account"}</button>
        </form>

        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => {
              setError("");
              setIsLogin(!isLogin);
            }}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
