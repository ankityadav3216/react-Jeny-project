import React from "react";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./PVCheader.css";

const PVCheader = () => {
  return (
    <header className="pvc-header">
      {/* NET PATTERN Background */}
      <div className="net-pattern"></div>

      <div className="header-content">
        {/* Logo */}
        <div className="logo-section">
          <h1 className="logo-text">PrimeAcres</h1>
        </div>

        {/* Right Icon Buttons */}
        <div className="emi-icon-wrapper">
          <Button shape="circle" icon={<MenuOutlined />} className="emi-icon-btn" />
          <Button shape="circle" icon={<UserOutlined />} className="emi-icon-btn" />
        </div>
      </div>

      {/* Villa Objects Background */}
      <div className="villa-bg">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`villa-object villa-${i + 1}`}>
            <div className="villa-window"></div>
            <div className="villa-window"></div>
            <div className="villa-window"></div>
            <div className="villa-window"></div>
          </div>
        ))}
      </div>
    </header>
  );
};

export default PVCheader;
