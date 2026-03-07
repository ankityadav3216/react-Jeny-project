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
  const [openSection, setOpenSection] = React.useState(null);

  const buyerItems = [
    "Properties for sale in Mumbai",
    "Properties for sale in Bangalore",
    "Properties for sale in New Delhi",
    "Properties for sale in Hyderabad",
    "Properties for sale in Chennai",
    "Top Developers in India",
  ];

  const serviceItems = [
    { label: "EMI Calculator", route: "/emi" },
    { label: "Property Value Calculator", route: "/pvc" },
    { label: "Rent Receipt Generator", route: "/RRG" },
  ];

  const handleLoginClick = () => {
    onClose(); // close drawer
    navigate("/login"); // go to login page
  };

  const handleRegisterClick = () => {
    onClose(); // close drawer
    navigate("/property-registration"); // go to property registration
  };

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
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

      {/* SEARCH */}
      <div className="search-box top-search-box">
        <input placeholder="Search by Property Code" />
        <SearchOutlined />
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
        <div className="menu-item arrow" onClick={() => toggleSection("buyers")}>
          For Buyers
          <RightOutlined className={openSection === "buyers" ? "open-arrow" : ""} />
        </div>
        {openSection === "buyers" && (
          <div className="submenu-list">
            {buyerItems.map((item) => (
              <div key={item} className="submenu-item">
                {item}
              </div>
            ))}
          </div>
        )}

        <div className="menu-item arrow" onClick={() => toggleSection("services")}>
          For Services
          <RightOutlined className={openSection === "services" ? "open-arrow" : ""} />
        </div>
        {openSection === "services" && (
          <div className="submenu-list">
            {serviceItems.map((item) => (
              <div
                key={item.label}
                className="submenu-item submenu-link"
                onClick={() => {
                  onClose();
                  navigate(item.route);
                }}
              >
                {item.label}
              </div>
            ))}
          </div>
        )}

        <div className="divider" />

        <div className="menu-item">About Us</div>
        <div className="menu-item arrow">Get Help</div>
        <div className="menu-item">Download App</div>
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
