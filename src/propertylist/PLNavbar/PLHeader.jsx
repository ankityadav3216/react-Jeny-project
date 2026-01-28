import React, { useState } from "react";
import { Layout, Input, Button, Modal } from "antd";
import { Home, Smartphone } from "lucide-react";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";

import "./PLHeader.css";

const { Header } = Layout;

const PLHeader = ({ location = "Mumbai" }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Header className="pl-main-header">

        {/* ================= DESKTOP HEADER ================= */}
        <div className="pl-header-container desktop-only">
          <div className="logo-section">
            <div className="logo-wrapper">
              <Home className="logo-icon" />
            </div>
            <span className="logo-text">Jeny</span>
          </div>

          <span className="pl-divider" />

          <div className="buy-location">Buy in {location}</div>

          <span className="pl-divider" />

          <Input
            className="pl-search"
            prefix={<SearchOutlined />}
            placeholder={`Search property in ${location}`}
          />

          <span className="pl-divider" />

          <div className="pl-actions">
            <Button className="download-btn">
              <Smartphone size={16} style={{ marginRight: 6 }} />
              Download App
            </Button>

            <Button type="primary" className="list-property-btn">
              List Property
            </Button>
          </div>
        </div>

        {/* ================= MOBILE HEADER ================= */}
        <div className="pl-mobile-header mobile-only">
          <div className="logo-section">
            <div className="logo-wrapper">
              <Home className="logo-icon" />
            </div>
            <span className="logo-text">Jeny</span>
          </div>

          <Button
            shape="circle"
            icon={<MenuOutlined />}
            className="menu-btn"
            onClick={() => setDrawerOpen(true)}
          />
        </div>
      </Header>

      {/* ================= MOBILE POP (CENTER) ================= */}
      <Modal
        open={drawerOpen}
        onCancel={() => setDrawerOpen(false)}
        footer={null}
        centered
        width={300}
        className="pl-mobile-pop"
      >
        <Input
          prefix={<SearchOutlined />}
          placeholder={`Search in ${location}`}
          style={{ marginBottom: 12 }}
        />

        <Button block style={{ marginBottom: 12 }}>
          <Smartphone size={16} style={{ marginRight: 6 }} />
          Download App
        </Button>

        <Button type="primary" block style={{ marginBottom: 12 }}>
          List Property
        </Button>

        <div className="buy-location mobile-buy">
          Buy in {location}
        </div>
      </Modal>
    </>
  );
};

export default PLHeader;
