import React, { useState } from "react";

import Buy from "../Megamenu/Buy";
import Tenants from "../Megamenu/tenants";
import Sellers from "../Megamenu/sellers";
import Services from "../Megamenu/services";
import Guide from "../Megamenu/guide";

import HeaderMenuBar from "../headermenubar/HeaderMenuBar";
import HeaderProfileBar from "../headerprofilebar/HeaderProfileBar";

import "./Header.css";

import { Layout, Menu, Select, Button } from "antd";
import {
  MenuOutlined,
  UserOutlined,
  BellOutlined,
  DownOutlined,
} from "@ant-design/icons";

const { Header: AntHeader } = Layout;
const { Option } = Select;

const Header = () => {
  const [activeMega, setActiveMega] = useState(null);
  const [menuBarOpen, setMenuBarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleMega = (name) => {
    setActiveMega((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <AntHeader className="main-header">
        <div className="header-container">

          {/* LEFT */}
          <div className="left-section">

            {/* LOGO */}
            <div className="brand-logo">
              <svg
                className="logo-icon"
                width="34"
                height="34"
                viewBox="0 0 64 64"
                fill="none"
              >
                <defs>
                  <linearGradient id="houseGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#1e40af" />
                  </linearGradient>
                </defs>
                <path
                  d="M8 30L32 10L56 30"
                  stroke="url(#houseGrad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="16"
                  y="30"
                  width="32"
                  height="22"
                  rx="4"
                  fill="url(#houseGrad)"
                />
                <rect
                  x="29"
                  y="38"
                  width="6"
                  height="14"
                  rx="2"
                  fill="#0b2d4d"
                />
              </svg>

              <div className="logo-text">
                <span className="logo-main">JENY</span>
                <span className="logo-sub">Jeny</span>
              </div>
            </div>

            {/* LOCATION */}
            <div className="location-select">
              <span className="buy-in">Buy in</span>
              <Select defaultValue="Mumbai" bordered={false}>
                <Option value="Navi Mumbai">Navi Mumbai</Option>
                <Option value="Mumbai">Mumbai</Option>
              </Select>
              <DownOutlined style={{ fontSize: 10 }} />
            </div>
          </div>

          {/* CENTER MENU */}
          <Menu
            mode="horizontal"
            selectable={false}
            overflowedIndicator={null}
            className="desktop-menu"
          >
            <Menu.Item onClick={() => toggleMega("buy")}>
              For Buyers
            </Menu.Item>

            <Menu.Item onClick={() => toggleMega("tenants")}>
              For Tenants
            </Menu.Item>

            <Menu.Item onClick={() => toggleMega("sellers")}>
              For Owners
            </Menu.Item>

            <Menu.Item onClick={() => toggleMega("services")}>
              For Services
            </Menu.Item>

            <Menu.Item onClick={() => toggleMega("guide")}>
              Insights
            </Menu.Item>
          </Menu>

          {/* RIGHT */}
          <div className="right-section">
            <Button className="post-btn">
              Post property <span className="free-badge">FREE</span>
            </Button>

            <BellOutlined className="icon-btn" />
            <UserOutlined
              className="icon-btn"
              onClick={() => setProfileOpen(true)}
            />
            <MenuOutlined
              className="icon-btn"
              onClick={() => setMenuBarOpen(true)}
            />
          </div>
        </div>
      </AntHeader>

      {/* MEGA MENUS */}
      <Buy open={activeMega === "buy"} />
      <Tenants open={activeMega === "tenants"} />
      <Sellers open={activeMega === "sellers"} />
      <Services open={activeMega === "services"} />
      <Guide open={activeMega === "guide"} />

      {/* MOBILE DRAWERS */}
      <HeaderMenuBar
        open={menuBarOpen}
        onClose={() => setMenuBarOpen(false)}
      />
      <HeaderProfileBar
        open={profileOpen}
        onClose={() => setProfileOpen(false)}
      />
    </>
  );
};

export default Header;
