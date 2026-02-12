import React from "react";
import { Card } from "antd";
import {
  HomeOutlined,
  ApartmentOutlined,
  ShopOutlined,
  CalendarOutlined,
  BuildOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import "./PropertyCategories.css";

const categories = [
  { id: 1, title: "Houses", icon: <HomeOutlined /> },
  { id: 2, title: "Apartments", icon: <ApartmentOutlined /> },
  { id: 3, title: "Commercial", icon: <ShopOutlined /> },
  { id: 4, title: "Daily Rental", icon: <CalendarOutlined /> },
  { id: 5, title: "New Buildings", icon: <BuildOutlined /> },
  { id: 6, title: "More", icon: <AppstoreOutlined /> },
];

const PropertyCategories = () => {
  return (
    <div className="category-section">
      <h2 className="section-heading">Browse Properties</h2>

      <div className="category-wrapper">
        {categories.map((item) => (
          <Card key={item.id} hoverable className="category-card">
            <div className="icon-wrapper">{item.icon}</div>
            <p className="category-title">{item.title}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PropertyCategories;
