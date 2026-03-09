import React from "react";
import { Card } from "antd";
import {
  BankOutlined,
  DashboardOutlined,
  ShopFilled,
  CalendarFilled,
  BuildFilled,
  AppstoreFilled,
} from "@ant-design/icons";
import "./PropertyCategories.css";

const categories = [
  { id: 1, title: "Houses", icon: <BankOutlined /> },
  { id: 2, title: "Apartments", icon: <DashboardOutlined /> },
  { id: 3, title: "Commercial", icon: <ShopFilled /> },
  { id: 4, title: "Daily Rental", icon: <CalendarFilled /> },
  { id: 5, title: "New Buildings", icon: <BuildFilled /> },
  { id: 6, title: "More", icon: <AppstoreFilled /> },
];

const PropertyCategories = () => {
  return (
    <div className="category-section">
      <h2 className="section-heading">Browse Properties</h2>

      <div className="category-wrapper">
        {categories.map((item) => (
          <Card key={item.id} className="category-card">
            <div className="icon-wrapper">{item.icon}</div>
            <p className="category-title">{item.title}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PropertyCategories;
