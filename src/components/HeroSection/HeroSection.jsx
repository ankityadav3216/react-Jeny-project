import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import "./HeroSection.css";

const HeroSection = () => {
  const [selectedCity, setSelectedCity] = useState("Gandhinagar");
  const [activeTab, setActiveTab] = useState("Buy"); // ✅ Active tab state

  const gujaratCities = [
    "Ahmedabad",
    "Surat",
    "Vadodara",
    "Rajkot",
    "Gandhinagar",
    "Bhavnagar",
    "Jamnagar",
    "Junagadh",
    "Anand",
    "Navsari"
  ];

  const tabs = ["Buy", "Rent", "Commercial", "Plots/Lands", "PG/Hostel"];

  return (
    <section className="hero-section">
      <div className="hero-overlay">

        {/* MOBILE TOP TABS */}
        <div className="mobile-top-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* TEXT CONTENT */}
        <div className="hero-content">
          <h1>Welcome to PrimeAcres</h1>
          <p>Find your dream property with ease</p>
          <button className="hero-btn">Explore Now</button>
        </div>

        {/* MOBILE CITY SELECT */}
        <div className="mobile-city-select">
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            {gujaratCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* MOBILE SEARCH */}
        <div className="mobile-search-box">
          <input type="text" placeholder="Search Area, Project or Builder" />
          <SearchOutlined className="search-icon" />
        </div>

        {/* DESKTOP SEARCH */}
        <div className="property-search-wrapper">

          <div className="property-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="property-search-bar">

            <select
              className="location-select"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              {gujaratCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <div className="vertical-divider"></div>

            <input
              type="text"
              placeholder="Search Area, Project or Builder"
              className="property-input"
            />

            <button className="property-search-btn">
              <SearchOutlined />
              <span>Search</span>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
