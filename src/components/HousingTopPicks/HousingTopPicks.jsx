import React from "react";
import { EnvironmentOutlined } from "@ant-design/icons";
import "./HousingTopPicks.css";

const HousingTopPicks = () => {
  return (
    <div className="limelight-wrapper">
      {/* HEADER */}
      <div className="limelight-header">
        <h2>✨ Housing Top Picks</h2>
        <p>Experience the best of living - find your place with us.</p>
      </div>

      {/* CARD */}
      <div className="limelight-card">
        {/* LEFT IMAGE */}
        <div className="limelight-image">
          <img
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
            alt="Revanta Fortune 3"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="limelight-content">
          <div className="top-row">
            <h3>Revanta Fortune 3</h3>
            <span className="price">₹63 L - ₹76 L</span>
          </div>

          <div className="location">
            <EnvironmentOutlined />
            <span>K.Raheja, Gandhinagar</span>
          </div>

          <div className="info-grid">
            <div>
              <p className="label">Configuration</p>
              <p className="value">2, 3 BHK Flat</p>
            </div>

            <div>
              <p className="label">Project Size</p>
              <p className="value">3 Buildings - 148 Units</p>
            </div>

            <div>
              <p className="label">Size</p>
              <p className="value">180 SqYd - 216 SqYd</p>
            </div>

            <div>
              <p className="label">Project Area</p>
              <p className="value">5795 SqYd</p>
            </div>
          </div>

          <div className="developer-box">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Tree_icon.svg/1024px-Tree_icon.svg.png"
              alt="Developer"
            />
            <div>
              <p className="dev-name">Revanta Group</p>
              <p className="dev-label">Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousingTopPicks;
