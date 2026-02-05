import React from "react";
import { Button, Divider } from "antd";
import {
  MobileOutlined,
  MenuOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./EMIheader.css";

const EMIheader = () => {
  return (
    <header className="emi-header">
      <div className="emi-header-container">

        {/* LEFT LOGO */}
        <div className="emi-header-left">
          <div className="emi-logo-box">
            <span className="emi-logo-icon">P</span>
            <span className="emi-logo-text">
             PrimeAcres<span></span>
            </span>
          </div>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="emi-header-right">

          <Button
            type="text"
            icon={<MobileOutlined />}
            className="emi-header-btn"
          >
            Download App
          </Button>

          <Divider type="vertical" className="emi-divider" />

          {/* POST PROPERTY */}
          <Button className="emi-list-btn">
            Post Property <span className="emi-free">FREE</span>
          </Button>

          <Divider type="vertical" className="emi-divider" />

          {/* SAVED SIMPLE TEXT */}
          <span className="emi-simple-text">Saved</span>

          <Divider type="vertical" className="emi-divider" />

          {/* NEW TEXT */}
          <span className="emi-simple-text">New</span>

          {/* MENU + PROFILE WRAPPER */}
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
      </div>
    </header>
  );
};

export default EMIheader;
