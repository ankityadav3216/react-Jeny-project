import React from "react";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./PVCheader.css";

const PVCheader = () => {
  return (
    <header className="pvc-header">
      <div className="header-content">
        {/* Logo */}
        <div className="logo-section">
          <h1 className="logo-text">PrimeAcres</h1>
        </div>

        {/* Right Icon Buttons */}
        <div className="emi-icon-wrapper">
          <Button
            shape="circle"
            icon={<MenuOutlined />}
            className="emi-icon-btn"
          />
          <Button
            shape="circle"
            icon={<UserOutlined />}
            className="emi-icon-btn"
          />
        </div>
      </div>

      {/* Calculator Cartoon Background */}
      <div className="calculator-bg">
        <div className="calc-item calc-1">
          <div className="calc-screen"></div>
          <div className="calc-buttons">
            <div className="calc-row"></div>
            <div className="calc-row"></div>
            <div className="calc-row"></div>
          </div>
        </div>

        <div className="calc-item calc-2">
          <div className="calc-screen"></div>
          <div className="calc-buttons">
            <div className="calc-row"></div>
            <div className="calc-row"></div>
          </div>
        </div>

        <div className="calc-item calc-3">
          <div className="calc-screen"></div>
          <div className="calc-buttons">
            <div className="calc-row"></div>
            <div className="calc-row"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PVCheader;
