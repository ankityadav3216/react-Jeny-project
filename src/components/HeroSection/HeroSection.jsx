import React from "react";
import {
  HomeOutlined,
  SafetyOutlined,
  TrophyOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./HeroSection.css";

const defaultBackgroundImage =
  "https://images.adsttc.com/media/images/51d4/84a8/b3fc/4bea/e100/01d6/large_jpg/Portada.jpg?1372882078";

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
          <div className="hero-text-container">
            <h1 className="hero-main-title">
              <span className="title-text">
                Find Your Perfect Dream
                <span className="home-highlight"> Home</span>
              </span>
            </h1>

            <div className="hero-tagline">
              <p className="hero-subtitle">
                India's Most Trusted Property Platform
              </p>
              <div className="tagline-badges">
                <span className="badge">✓ Trusted</span>
                <span className="badge">⚡ Verified</span>
                <span className="badge">✅ Guaranteed</span>
              </div>
            </div>
          </div>

          <div className="stats-grid-compact">
            <div className="desktop-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card-new">
                  <div className="stat-icon-new">{stat.icon}</div>
                  <div className="stat-content-new">
                    <div className="stat-value-new">{stat.value}</div>
                    <div className="stat-label-new">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mobile-stats">
              <div className="mobile-stats-scroll">
                {stats.map((stat, index) => (
                  <div key={index} className="mobile-stat-card-new">
                    <div className="mobile-stat-icon-new">{stat.icon}</div>
                    <div className="mobile-stat-content-new">
                      <div className="mobile-stat-value-new">{stat.value}</div>
                      <div className="mobile-stat-label-new">{stat.label}</div>
                    </div>
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
