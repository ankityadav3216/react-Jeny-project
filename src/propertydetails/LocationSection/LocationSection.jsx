import React from "react";
import { Row, Col, Button } from "antd";
import {
  EnvironmentOutlined,
  HomeOutlined,
  AimOutlined,
} from "@ant-design/icons";
import "./LocationSection.css";

const nearbyPlacesLeft = [
  "Sahjanand School of Achiever - 3 min",
  "Aashka Multispeciality Hospital - 3 min",
  "Greenz Restaurant - 5 min",
  "D-Mart - 5 min",
];

const nearbyPlacesRight = [
  "Infocity Junior Science College & Infocity school - 3 min",
  "SMVS Swaminarayan Hospital - 4 min",
  "The Spicy Street - 3 min",
  "Metro Station - 5 min",
];

const LocationSection = () => {
  return (
    <div className="location-container">
      {/* Heading */}
      <div className="location-title">
        <AimOutlined className="location-icon" />
        <h2>Location</h2>
      </div>

      {/* Nearby Places */}
      <h3 className="nearby-title">Nearby Places</h3>

      <Row gutter={[40, 12]}>
        <Col xs={24} md={12}>
          {nearbyPlacesLeft.map((place, index) => (
            <div className="nearby-item" key={index}>
              <HomeOutlined className="nearby-icon" />
              <span>{place}</span>
            </div>
          ))}
        </Col>

        <Col xs={24} md={12}>
          {nearbyPlacesRight.map((place, index) => (
            <div className="nearby-item" key={index}>
              <HomeOutlined className="nearby-icon" />
              <span>{place}</span>
            </div>
          ))}
        </Col>
      </Row>

      {/* Address Box */}
      <div className="address-box">
        <h3>Address</h3>

        <div className="address-content">
          <div className="address-text">
            <EnvironmentOutlined className="address-icon" />
            <span>Park Paradise, Sargasan, Gandhinagar</span>
          </div>

          <Button
            type="primary"
            className="map-btn"
            href="https://maps.google.com/?q=Park+Paradise+Sargasan+Gandhinagar"
            target="_blank"
          >
            View on Google Map
          </Button>
        </div>

        {/* Google Map */}
        <div className="map-wrapper">
          <iframe
            title="location-map"
            src="https://maps.google.com/maps?q=Park%20Paradise%20Sargasan%20Gandhinagar&t=&z=15&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;