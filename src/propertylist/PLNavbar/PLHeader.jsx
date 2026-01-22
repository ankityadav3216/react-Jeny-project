// src/components/propertylist/navbar/Header.jsx
import React from "react";
import { Layout, Input, Button, Space } from "antd";
import { Home, Smartphone } from "lucide-react";
import {
  SearchOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import "./PLHeader.css";

const { Header } = Layout;

const PLHeader = ({ location = "Mumbai" }) => {
  return (
    <Header className="pl-main-header">
      <div className="pl-header-container">

        {/* LOGO */}
        <div className="logo-section">
          <div className="logo-wrapper">
            <Home className="logo-icon" />
          </div>
          <span className="logo-text">Jeny</span>
        </div>

        <span className="pl-divider" />

        {/* BUY IN */}
        <div className="buy-location">
          Buy in {location}
        </div>

        <span className="pl-divider" />

        {/* SEARCH */}
        <Input
          className="pl-search"
          prefix={<SearchOutlined />}
          placeholder={`Search property in ${location}`}
        />

        <span className="pl-divider" />

        {/* ACTIONS */}
        <Space className="pl-actions">

          {/* DOWNLOAD APP */}
          <Button className="download-btn">
            <Smartphone size={16} style={{ marginRight: 6 }} />
            Download App
          </Button>

          <span className="pl-divider" />

          {/* LIST PROPERTY */}
          <Button type="primary" className="list-property-btn">
            List Property
          </Button>

          <span className="pl-divider" />

          {/* MENU */}
          <Button
            shape="circle"
            icon={<MenuOutlined />}
            className="menu-btn"
          />
        </Space>

      </div>
    </Header>
  );
};

export default PLHeader;
