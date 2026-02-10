// Infobar.jsx
import React from "react";
import { Alert } from "antd";
import "./Infobar.css";

const Infobar = () => {
  return (
    <div className="infobar-container">
      <Alert
        message="🔥 Special Offer: Get 20% off on all products! | 📧 Contact: info@example.com"
        type="info"
        showIcon
        closable
      />
    </div>
  );
};

export default Infobar;
