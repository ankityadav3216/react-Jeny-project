import React from "react";
import { Input, Button, Divider } from "antd";
import {
  GoogleOutlined,
  FacebookOutlined,
  AppleFilled,
  ArrowRightOutlined,
} from "@ant-design/icons";
import "./Login.css";

const Login = () => {
  return (
    <div className="page">

      {/* HEADER */}
      <header className="login-header">
        <div className="logo">tract.</div>

        <div className="header-right">
          <span>En</span>
          <span>Sign In</span>
          <button className="get-started">Get Started</button>
        </div>
      </header>

      {/* CENTER WRAPPER */}
      <div className="center-wrapper">

        {/* 🔥 MAIN CONTAINER */}
        <div className="main-container">

          {/* CENTER TEXT */}
          <div className="center-text">
            <div className="top-badge">
              Are you a Brand? Explore how to use Tract for growth.
              <span className="badge-arrow">→</span>
            </div>

            <h1>
              <span className="highlight">Login</span> to Your <br /> Account
            </h1>

            <p className="subtitle">
              Uncover the Untapped Potential of Your Growth to Connect with Clients
            </p>
          </div>

          {/* FORM + SOCIAL */}
          <div className="login-box-wrapper">
            {/* LEFT FORM */}
            <div className="login-form">
              <Input
                size="middle"
                placeholder="Phone / Email / ArtistID"
                className="input"
              />
              <Input.Password
                size="middle"
                placeholder="Passcode"
                className="input"
              />

              <Button className="login-btn">
                Login to Your Account <ArrowRightOutlined />
              </Button>
            </div>

            <Divider type="vertical" className="divider">
              /
            </Divider>

            {/* RIGHT SOCIAL */}
            <div className="social-login">
              <Button icon={<GoogleOutlined />} className="social-btn">
                Sign in with Gmail Account
              </Button>

              <Button icon={<FacebookOutlined />} className="social-btn">
                Sign in Facebook Account
              </Button>

              <Button icon={<AppleFilled />} className="social-btn">
                Sign in Apple Secure ID
              </Button>
            </div>
          </div>

          <div className="forgot">Forgot Passcode?</div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="login-footer">
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
        <span>Copyrights @tract.group 2023</span>
      </footer>
    </div>
  );
};

export default Login;
