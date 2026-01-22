// src/authentication/loginmodel/login.jsx
import React from "react";
import "./login.css";

const Login = ({ onSignup, onClose }) => {
  return (
    <div className="login-page horizontal-layout">
      
      {/* LEFT SIDE - BRAND */}
      <div className="login-left">
        <div className="logo-container">
          <div className="house-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
          </div>
          <h1 className="website-name">Jeny</h1>
          <p className="website-tagline">Your Perfect Home Awaits</p>
        </div>
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="login-right">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Please sign in to your account</p>

        <form className="login-form">
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button className="login-button">Sign In</button>

          <div className="divider"><span>Or continue with</span></div>

          <button className="social-button google-button">
            Sign in with Google
          </button>

          <button className="social-button facebook-button">
            Sign in with Facebook
          </button>
        </form>

        <p className="signup-link">
          Don't have an account?
          <span onClick={onSignup}> Sign Up Now</span>
        </p>
      </div>

    </div>
  );
};

export default Login;
