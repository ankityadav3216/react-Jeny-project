import React from "react";
import { Row, Col, Divider } from "antd";
import "./EMIFooter.css";

const cityLinks = [
  "Mumbai","Bengaluru","Hyderabad","Pune","Chennai","Delhi",
  "Gurgaon","Noida","Kolkata","Ahmedabad","Thane","Navi Mumbai",
  "Faridabad","Ghaziabad"
];

const EMIFooter = () => {
  return (
    <footer className="emi-footer">

      {/* TOP LINK SECTION */}
      <div className="emi-footer-links">
        <Row gutter={[24, 16]}>
          <Col xs={24} md={4}>
            <h4>Real Estate</h4>
            {cityLinks.map(city => (
              <p key={city}>Real estate in {city}</p>
            ))}
          </Col>

          <Col xs={24} md={4}>
            <h4>Flats</h4>
            {cityLinks.map(city => (
              <p key={city}>Flats in {city}</p>
            ))}
          </Col>

          <Col xs={24} md={4}>
            <h4>Rent</h4>
            {cityLinks.map(city => (
              <p key={city}>Flats for rent in {city}</p>
            ))}
          </Col>

          <Col xs={24} md={4}>
            <h4>New Projects</h4>
            {cityLinks.map(city => (
              <p key={city}>New projects in {city}</p>
            ))}
          </Col>

          <Col xs={24} md={4}>
            <h4>Commercial</h4>
            {cityLinks.map(city => (
              <p key={city}>Commercial property in {city}</p>
            ))}
          </Col>

          <Col xs={24} md={4}>
            <h4>Commercial Rent</h4>
            {cityLinks.map(city => (
              <p key={city}>Commercial rent in {city}</p>
            ))}
          </Col>
        </Row>
      </div>

      <Divider className="emi-divider" />

      {/* BOTTOM SECTION */}
      <div className="emi-footer-bottom">
        <Row gutter={[24, 24]} align="middle">

          <Col xs={24} md={6}>
            <h2 className="emi-logo">PrimeAcres</h2>
            <p className="emi-copy">©2012–2026 All rights reserved</p>
          </Col>

          <Col xs={24} md={6}>
            <h4>Company</h4>
            <p>About Us</p>
            <p>Careers</p>
            <p>Privacy Policy</p>
            <p>Contact Us</p>
          </Col>

          <Col xs={24} md={6}>
            <h4>Explore</h4>
            <p>News</p>
            <p>Home Loans</p>
            <p>Sitemap</p>
            <p>International</p>
          </Col>

          <Col xs={24} md={6}>
            <h4>Get App</h4>
            <div className="emi-app">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Play_Store_badge_EN.svg"
                alt="playstore"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="appstore"
              />
            </div>
          </Col>

        </Row>
      </div>

    </footer>
  );
};

export default EMIFooter;
