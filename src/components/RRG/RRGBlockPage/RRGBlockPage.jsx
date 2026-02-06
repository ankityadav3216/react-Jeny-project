import React from "react";
import "./RRGBlockPage.css";

const RRGBlockPage = () => {
  return (
    <div className="rrg-page">
      <div className="rrg-card alert-card">
        <div className="rrg-alert-badge">ALERT</div>
        <h2>Request Blocked</h2>
        <p>
          Our security system detected suspicious activity. Your request was
          temporarily blocked to protect users and system integrity. We
          apologize for any inconvenience.
        </p>
      </div>

      <div className="rrg-card">
        <h3>Block Reference ID</h3>
        <div className="rrg-box">0.14822c31.1770357841.16ffeef</div>
        <span>Save this ID when contacting support.</span>
      </div>

      <div className="rrg-card">
        <h3>Real Client IP</h3>
        <div className="rrg-box">152.58.44.29</div>
        <span>Save this IP when contacting support.</span>
      </div>

      <h3 className="rrg-section-title">Need Help?</h3>

      <div className="rrg-grid">
        <div className="rrg-card">
          <h3>Contact Support</h3>
          <p>
            If you believe this is an error, contact our support team with your
            Reference ID and details.
          </p>
          <button className="rrg-btn">Contact Support</button>
        </div>

        <div className="rrg-card">
          <h3>Common Causes</h3>
          <ul>
            <li>Unusual network activity</li>
            <li>Rapid browsing</li>
            <li>Use of bots or scrapers</li>
            <li>Suspicious VPNs/proxies</li>
            <li>Failed login attempts</li>
            <li>Accessing restricted areas</li>
          </ul>
        </div>
      </div>

      <div className="rrg-card">
        <h3>Next Steps</h3>
        <ul>
          <li>Wait a few minutes (usually 10 minutes)</li>
          <li>Clear cookies and cache</li>
          <li>Use another browser or device</li>
          <li>Disable browser extensions</li>
          <li>Disconnect VPN</li>
        </ul>
      </div>
    </div>
  );
};

export default RRGBlockPage;
