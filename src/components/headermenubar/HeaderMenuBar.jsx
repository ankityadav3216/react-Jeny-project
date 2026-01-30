// src/components/HeaderMenuBar.jsx
import React from "react";
import { Drawer } from "antd";
import {
  RightOutlined,
  SearchOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./HeaderMenuBar.css";

const HeaderMenuBar = ({ open, onClose, isLoggedIn = false, userName = "" }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    onClose(); // close drawer
    navigate("/login"); // go to login page
  };

  const handleRegisterClick = () => {
    onClose(); // close drawer
    navigate("/property-registration"); // go to property registration
  };

  return (
    <Drawer
      placement="right"
      open={open}
      closable={false}
      width={320}
      className="header-menu-drawer"
    >
      {/* TOP BAR */}
      <div className="menu-top">
        <div className="user-section">
          <div className="avatar">
            {isLoggedIn ? userName.charAt(0) : "👤"}
          </div>

          {!isLoggedIn ? (
            <div className="login-register-buttons">
              <button className="login-btn" onClick={handleLoginClick}>
                LOGIN
              </button>
              <button className="register-btn" onClick={handleRegisterClick}>
                REGISTER
              </button>
            </div>
          ) : (
            <div className="username">{userName}</div>
          )}
        </div>

        <CloseOutlined className="close-icon" onClick={onClose} />
      </div>

      {/* PROMO CARD */}
      <div className="promo-card">
        <div>
          <h3>Sell or rent faster at the right price!</h3>
          <button className="post-btn">Post Property</button>
        </div>
      </div>

      {/* MENU LIST */}
      <div className="menu-list">
        <p className="section-title">Jeny Plans and Services</p>

        <div className="menu-item">
          Owner Plans <span className="new-badge">NEW</span>
        </div>
        <div className="menu-item">Dealer Plans</div>

        <div className="divider" />

        <div className="menu-item arrow">
          For Buyers <RightOutlined />
        </div>
        <div className="menu-item arrow">
          For Tenants <RightOutlined />
        </div>
        <div className="menu-item arrow">
          For Owners <RightOutlined />
        </div>
        <div className="menu-item arrow">
          For Dealers / Builders <RightOutlined />
        </div>

        <div className="divider" />

        <div className="menu-item">Home Loans</div>

        <div className="menu-item arrow">
          Insights <span className="new-badge">NEW</span> <RightOutlined />
        </div>

        <div className="menu-item arrow">
          Articles & News <RightOutlined />
        </div>

        <div className="divider" />

        <div className="menu-item">About Us</div>
        <div className="menu-item arrow">
          Get Help <RightOutlined />
        </div>
        <div className="menu-item">Download App</div>
      </div>

      {/* SEARCH */}
      <div className="search-box">
        <input placeholder="Search by Property Code" />
        <SearchOutlined />
      </div>

      {/* FOOTER */}
      <div className="menu-footer">
        <p>Toll Free Number: 1800 41 99099</p>
        <p>
          For international numbers <span>click here</span>
        </p>
      </div>
    </Drawer>
  );
};

export default HeaderMenuBar;
