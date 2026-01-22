// src/components/Header/Header.jsx
import React, { useState } from "react";
import { Home } from "lucide-react";

import Login from "../../authentication/loginmodel/login";
import SignUp from "../../authentication/registration/sign-up";

import Buy from "../Megamenu/Buy";
import Tenants from "../Megamenu/tenants";
import Sellers from "../Megamenu/sellers";
import Services from "../Megamenu/services";
import Guide from "../Megamenu/guide";

import "./Header.css";

import { Layout, Menu, Button, Select, Space, Modal } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { Header: AntHeader } = Layout;
const { Option } = Select;

const Header = () => {
  const [menuModal, setMenuModal] = useState(false);
  const [authModal, setAuthModal] = useState(false);
  const [authType, setAuthType] = useState("login");

  // 👇 mega states
  const [activeMega, setActiveMega] = useState(null);

  const openLogin = () => {
    setAuthType("login");
    setAuthModal(true);
  };

  // 🔁 toggle logic (open / close)
  const toggleMega = (name) => {
    setActiveMega((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <AntHeader className="main-header">
        <div className="header-container">

          {/* LOGO */}
          <div className="logo-section">
            <div className="logo-wrapper">
              <Home className="logo-icon" />
            </div>
            <span className="logo-text">Jeny</span>
          </div>

          {/* ===== MOBILE SCROLL MENU ===== */}
          <div className="mobile-scroll-menu">
            <span onClick={() => toggleMega("buy")}>For Buyers</span>
            <span onClick={() => toggleMega("tenants")}>For Tenants</span>
            <span onClick={() => toggleMega("sellers")}>For Sellers</span>
            <span onClick={() => toggleMega("services")}>Services</span>
            <span onClick={() => toggleMega("guide")}>News & Guide</span>
          </div>

          {/* ===== MOBILE RIGHT ICON ===== */}
          <div className="mobile-right-icons">
            <MenuOutlined onClick={() => setMenuModal(true)} />
          </div>

          {/* ===== DESKTOP MENU ===== */}
          <Menu mode="horizontal" className="nav-menu desktop-menu">
            <Menu.Item onClick={() => toggleMega("buy")}>For Buyers</Menu.Item>
            <Menu.Item onClick={() => toggleMega("tenants")}>For Tenants</Menu.Item>
            <Menu.Item onClick={() => toggleMega("sellers")}>For Sellers</Menu.Item>
            <Menu.Item onClick={() => toggleMega("services")}>Services</Menu.Item>
            <Menu.Item onClick={() => toggleMega("guide")}>News & Guide</Menu.Item>
          </Menu>

          {/* ===== DESKTOP ACTIONS ===== */}
          <Space className="header-actions desktop-actions">
            <Select defaultValue="mumbai" size="small">
              <Option value="mumbai">Mumbai</Option>
              <Option value="delhi">Delhi</Option>
            </Select>

            <Button onClick={openLogin}>Login</Button>
            <Button type="primary">Post Property</Button>
          </Space>

        </div>
      </AntHeader>

      {/* ===== MEGA MENUS ===== */}
      <Buy open={activeMega === "buy"} />
      <Tenants open={activeMega === "tenants"} />
      <Sellers open={activeMega === "sellers"} />
      <Services open={activeMega === "services"} />
      <Guide open={activeMega === "guide"} />

      {/* ===== MOBILE MENU MODAL ===== */}
      <Modal
        open={menuModal}
        footer={null}
        onCancel={() => setMenuModal(false)}
        width={260}
      >
        <Button block onClick={openLogin}>Login</Button>
        <Button block type="primary" style={{ marginTop: 8 }}>
          Post Property
        </Button>
      </Modal>

      {/* ===== AUTH MODAL ===== */}
      <Modal
        open={authModal}
        footer={null}
        onCancel={() => setAuthModal(false)}
      >
        {authType === "login" ? <Login /> : <SignUp />}
      </Modal>
    </>
  );
};

export default Header;
