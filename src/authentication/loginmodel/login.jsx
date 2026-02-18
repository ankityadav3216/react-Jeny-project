import React, { useState } from "react";
import { Input, Button, Divider } from "antd";
import {
  GoogleOutlined,
  FacebookOutlined,
  AppleFilled,
  ArrowRightOutlined,
} from "@ant-design/icons";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/api";
import { setLoginID } from "../../redux/authSlice";

import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [values, setValues] = useState({ Username: "", password: "" });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    if (!values.Username || !values.password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      // ✅ Convert frontend keys to backend expected keys
      const result = await loginUser({
        username: values.Username,
        password: values.password,
      }).unwrap();

      // ✅ Dispatch to Redux store
      dispatch(
        setLoginID({
          token: result.ResponseData.Token,
          userName: result.ResponseData.Username,
        })
      );

      // ✅ Redirect after login
      navigate("/");
    } catch (err) {
      console.error("Login error:", err);
      alert("Login failed. Please check credentials.");
    }
  };

  return (
    <div className="page">

      {/* HEADER */}
      <header className="login-header">
        <div className="logo">PrimeAcres.</div>
        <div className="header-right">
          <span>En</span>
          <span>Sign In</span>
          <button className="get-started">Get Started</button>
        </div>
      </header>

      {/* CENTER WRAPPER */}
      <div className="center-wrapper">
        <div className="main-container">

          {/* CENTER TEXT */}
          <div className="center-text">
            <div className="top-badge">
              Are you a Brand? Explore how to use PrimeAcres for growth.
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
                name="Username"
                value={values.Username}
                onChange={handleChange}
              />
              <Input.Password
                size="middle"
                placeholder="Passcode"
                className="input"
                name="password"
                value={values.password}
                onChange={handleChange}
              />

              <Button
                className="login-btn"
                onClick={handleLogin}
                loading={isLoading}
              >
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
        <span>Copyrights @PrimeAcres.group 2023</span>
      </footer>
    </div>
  );
};

export default Login;
