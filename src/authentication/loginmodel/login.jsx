// src/authentication/loginmodel/Login.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Navigate to property registration page
    navigate("/property-registration");
  };

  return (
    <div className="login-page horizontal-layout">

      {/* LEFT SIDE */}
      <div className="login-left">
        <div className="logo-container">
          <div className="house-icon">
            {/* Add your SVG icon here if needed */}
          </div>
          <h1 className="website-name">Jeny</h1>
          <p className="website-tagline">Your Perfect Home Awaits</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">
        <h2 className="login-title">Welcome Back</h2>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" className="login-input" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" className="login-input" />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <p className="signup-link">
          Don't have an account?
          <span onClick={() => navigate("/property-registration")}> Registration</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
