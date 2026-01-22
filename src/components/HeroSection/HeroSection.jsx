import React from "react";
import { Row, Col, Card, Statistic } from "antd";
import {
  HomeOutlined,
  SafetyOutlined,
  TrophyOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./HeroSection.css";

const defaultBackgroundImage =
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80";

const HeroSection = ({ backgroundImage = defaultBackgroundImage }) => {
  const stats = [
    { icon: <HomeOutlined />, value: "1L+", label: "Properties" },
    { icon: <SafetyOutlined />, value: "Trusted", label: "Verified Listings" },
    { icon: <TrophyOutlined />, value: "No. 1", label: "Property Portal" },
    { icon: <UserOutlined />, value: "10M+", label: "Happy Customers" },
  ];

  return (
    <section
      className="hero-section-compact"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay-compact" />

      <div className="hero-container-compact">
        <div className="hero-content-compact">
          <h1 className="hero-title-compact">
            Find Your Perfect
            <span className="hero-title-highlight-compact"> Home</span>
          </h1>

          <p className="hero-subtitle-compact">
            India's No. 1 Property Portal. Buy, Rent, or Sell with complete trust.
          </p>

          {/* Desktop Stats - Grid Layout */}
          <div className="stats-grid-compact">
            <div className="desktop-stats">
              {stats.map((stat, index) => (
                <Card key={index} className="stat-card-compact">
                  <div className="stat-icon-wrapper-compact">
                    {stat.icon}
                  </div>
                  <Statistic value={stat.value} />
                  <p className="stat-label-compact">{stat.label}</p>
                </Card>
              ))}
            </div>

            {/* Mobile Stats - Horizontal Scrollable Row */}
            <div className="mobile-stats">
              <div className="mobile-stats-scroll">
                {stats.map((stat, index) => (
                  <div key={index} className="mobile-stat-card">
                    <div className="icon-wrapper">
                      {stat.icon}
                    </div>
                    <div className="value">{stat.value}</div>
                    <div className="label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;