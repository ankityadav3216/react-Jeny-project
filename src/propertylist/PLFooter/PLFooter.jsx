import React from "react";
import "./PLFooter.css";

const PLFooter = () => {
  return (
    <footer className="pl-footer">
      <div className="pl-footer-container">

        {/* LEFT SECTION */}
        <div className="pl-footer-left">
          <div className="pl-logo">
            <span className="logo-box">🏠</span>
            <span className="logo-text">jeny<span>.com</span></span>
          </div>

          <div className="pl-badges">
            <img
              src="https://dummyimage.com/180x80/ffffff/000000&text=Best+Companies+Award"
              alt="award"
            />
            <img
              src="https://dummyimage.com/120x120/1e40af/ffffff&text=Best+Workplaces+Asia+2024"
              alt="award"
            />
          </div>

          <div className="pl-follow">
            <p>FOLLOW</p>
            <div className="social-icons">
              <span>📘</span>
              <span>📸</span>
              <span>🐦</span>
              <span>💼</span>
              <span>▶️</span>
            </div>
          </div>

          <p className="copyright">
            ©2012-26 Jeny Solutions Pvt. Ltd
          </p>
        </div>

        {/* COMPANY */}
        <div className="pl-footer-column">
          <h4>COMPANY</h4>
          <a href="#">Careers</a>
          <a href="#">About Us</a>
          <a href="#">For Partners</a>
          <a href="#">Terms</a>
          <a href="#">Annual Return</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
          <a href="#">Unsubscribe</a>
        </div>

        {/* PARTNER SITES */}
        <div className="pl-footer-column">
          <h4>PARTNER SITES</h4>
          <a href="#">realestate.com.au</a>
          <a href="#">realtor.com</a>
          <a href="#">99.co</a>
          <a href="#">collinsdictionary.com</a>
        </div>

        {/* EXPLORE */}
        <div className="pl-footer-column">
          <h4>EXPLORE</h4>
          <a href="#">News</a>
          <a href="#">Home Loans</a>
          <a href="#">Sitemap</a>
          <a href="#">International</a>
        </div>

        {/* APP SECTION */}
        <div className="pl-footer-app">
          <h4>EXPERIENCE JENY APP ON MOBILE</h4>

          <div className="app-buttons">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="appstore"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="playstore"
            />
          </div>

          <div className="qr-box">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=jeny.com"
              alt="qr"
            />
            <p>Open camera & scan the QR code to download the App</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default PLFooter;
