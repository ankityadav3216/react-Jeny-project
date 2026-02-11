import React from "react";
import { DatePicker, InputNumber, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./HeroSection.css";

const HeroSection = () => {
  const searchItems = [
    {
      label: "Location",
      element: <input type="text" placeholder="Where are you going?" className="custom-input" />
    },
    {
      label: "Check-in",
      element: <DatePicker bordered={false} className="custom-datepicker" />
    },
    {
      label: "Check-out",
      element: <DatePicker bordered={false} className="custom-datepicker" />
    },
    {
      label: "Guests",
      element: <InputNumber min={1} defaultValue={2} bordered={false} className="guest-input" />
    }
  ];

  return (
    <section className="hero-section">
      <div className="hero-overlay">
        
        {/* 🔥 TEXT CONTENT */}
        <div className="hero-content">
          <h1>Welcome to PrimeAcres</h1>
          <p>Find your dream property with ease</p>
          <button className="hero-btn">Explore Now</button>
        </div>

        {/* 🔥 SEARCHBAR */}
        <div className="searchbar-container">
          <div className="searchbar-box">
            {searchItems.map(({ label, element }, index) => (
              <React.Fragment key={label}>
                <div className="search-item">
                  <label>{label}</label>
                  {element}
                </div>
                {/* Divider after each item except the last one */}
                {index < searchItems.length - 1 && <div className="divider" />}
              </React.Fragment>
            ))}

            <Button
              shape="circle"
              icon={<SearchOutlined />}
              className="search-button"
              size="large"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
