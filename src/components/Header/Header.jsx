import React, { useState, useRef, useEffect } from "react";
import Buy from "../Megamenu/Buy";
import Services from "../Megamenu/services";
import HeaderMenuBar from "../headermenubar/HeaderMenuBar";
import HeaderProfileBar from "../headerprofilebar/HeaderProfileBar";

import "./Header.css";

import { Layout, Menu, Button } from "antd";
import {
  MenuOutlined,
  UserOutlined,
  BellOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";

const { Header: AntHeader } = Layout;

const Header = () => {
  const [activeMega, setActiveMega] = useState(null);
  const [menuBarOpen, setMenuBarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [servicesAnchorX, setServicesAnchorX] = useState(null);

  const megaRef = useRef(null);

  const toggleMega = (name) => {
    setActiveMega((prev) => (prev === name ? null : name));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target)) {
        setActiveMega(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <AntHeader className="main-header">
        <div className="header-container">
          {/* LEFT */}
          <div className="left-section">
            <h2 className="header-logo">PrimeAcres</h2>
          </div>

          {/* CENTER MENU */}
          <div className="center-menu-wrapper">
            <Menu
              mode="horizontal"
              selectable={false}
              disabledOverflow={true}   // 🔥 prevents auto hiding
              className="desktop-menu"
            >
              <Menu.Item onClick={() => toggleMega("buy")}>
                For Buyers
              </Menu.Item>
              <Menu.Item
                onClick={(info) => {
                  const rect = info?.domEvent?.currentTarget?.getBoundingClientRect?.();
                  if (rect) {
                    setServicesAnchorX(rect.left + rect.width / 2);
                  }
                  toggleMega("services");
                }}
              >
                For Services
              </Menu.Item>
              <Menu.Item>News & Guide</Menu.Item>
              <Menu.Item>Download App</Menu.Item>
              <Menu.Item>
                <Button type="primary" className="post-property-btn">
                  Post Property
                  <span className="free-label">Free</span>
                </Button>
              </Menu.Item>
            </Menu>
          </div>

          {/* RIGHT */}
          <div className="right-section">
            <Button className="reels-btn" icon={<PlayCircleOutlined />}>
              Reels
            </Button>

            <Button className="icon-circle-btn">
              <BellOutlined />
            </Button>

            <div className="user-pill">
              <button
                className="pill-btn"
                onClick={() => setMenuBarOpen(true)}
              >
                <MenuOutlined />
              </button>

              <button
                className="pill-btn"
                onClick={() => setProfileOpen(true)}
              >
                <UserOutlined />
              </button>
            </div>
          </div>
        </div>
      </AntHeader>

      {/* MEGA MENUS */}
      <div ref={megaRef}>
        <Buy open={activeMega === "buy"} />
        <Services open={activeMega === "services"} anchorX={servicesAnchorX} />
      </div>

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
