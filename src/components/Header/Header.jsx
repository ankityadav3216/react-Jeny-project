import React, { useState } from "react";

import Buy from "../Megamenu/Buy";
import Tenants from "../Megamenu/tenants";
import Sellers from "../Megamenu/sellers";
import Services from "../Megamenu/services";
import Guide from "../Megamenu/guide";

// ✅ IMPORT HeaderMenuBar & HeaderProfileBar
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

  // ✅ New state for Profile Drawer
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
            <span className="brand-text">Jeny</span>

            <div className="location-select">
              <span>Buy in</span>
              <Select defaultValue="Navi Mumbai" bordered={false}>
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
            <Menu.Item onClick={() => toggleMega("buy")}>For Buyers</Menu.Item>
            <Menu.Item onClick={() => toggleMega("tenants")}>For Tenants</Menu.Item>
            <Menu.Item onClick={() => toggleMega("sellers")}>For Owners</Menu.Item>
            <Menu.Item>For Dealers / Builders</Menu.Item>
            <Menu.Item>
              Insights <span className="new-badge">NEW</span>
            </Menu.Item>
          </Menu>

          {/* RIGHT */}
          <div className="right-section">
            <Button className="post-btn">
              Post property <span className="free-badge">FREE</span>
            </Button>

            {/* 🔔 Notification */}
            <BellOutlined className="icon-btn" />

            {/* 👤 User icon → OPENS HeaderProfileBar */}
            <UserOutlined
              className="icon-btn"
              onClick={() => setProfileOpen(true)}
            />

            {/* ☰ MENU ICON → OPENS HeaderMenuBar */}
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

      {/* ✅ HEADER MENU BAR */}
      <HeaderMenuBar
        open={menuBarOpen}
        onClose={() => setMenuBarOpen(false)}
      />

      {/* ✅ HEADER PROFILE BAR */}
      <HeaderProfileBar
        open={profileOpen}
        onClose={() => setProfileOpen(false)}
      />
    </>
  );
};

export default Header;
