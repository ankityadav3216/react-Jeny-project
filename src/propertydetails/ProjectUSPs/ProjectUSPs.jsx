<<<<<<< HEAD
// =============================
// File: ProjectUSPs.jsx
// =============================
import React from "react";
import { Row, Col, Typography } from "antd";
import { RightOutlined, ShoppingOutlined } from "@ant-design/icons";
import "./ProjectUSPs.css";

const { Title, Text } = Typography;

const leftData = [
  "3 BHK Upscale Residences",
  "3 Road Connectivity",
  "1.77 Acres Podium With All Major Amenities.",
];

const rightData = [
  "Life Time Forest & Open View",
  "Co-Working Space",
  "Live Large 3BHKs with the Biggest Balcony in the Segment",
];

const USPItem = ({ text }) => (
  <div className="usp-item">
    <RightOutlined className="usp-arrow" />
    <Text className="usp-text">{text}</Text>
  </div>
);

const ProjectUSPs = () => {
  return (
    <div className="project-usps-section">
      <div className="project-usps-container">
        {/* Heading */}
        <div className="project-usps-header">
          <div className="project-usps-icon">
            <ShoppingOutlined />
          </div>
          <Title level={3} className="project-usps-title">
            Project USPs
          </Title>
        </div>

        {/* Content */}
        <Row gutter={[40, 20]}>
          <Col xs={24} md={12}>
            {leftData.map((item, index) => (
              <USPItem key={`left-${index}`} text={item} />
            ))}
          </Col>

          <Col xs={24} md={12}>
            {rightData.map((item, index) => (
              <USPItem key={`right-${index}`} text={item} />
            ))}
          </Col>
        </Row>
      </div>
=======
import React from "react";
import { Row, Col } from "antd";
import "./ProjectUSPs.css";

const usps = [
  "30-Meter Wide Front Road with an open layout ensuring easy accessibility",
  "Just 200 Meters from Sargasan Cross Road prime area connectivity",
  "2 Iconic Towers | Only 76 Thoughtfully Designed Units",
  "Double Parking Facility, including 1 allotted parking space",
  "Spacious 10-Feet Clear Floor Height for an airy, premium feel",
  "Lift Access up to the Terrace for added convenience",
  "Elegant Multipurpose Hall ideal for gatherings and events",
];

const ProjectUSPs = () => {
  return (
    <div className="pd-usps">
      <h2 className="pd-usps-title">Project USPs</h2>

      <Row gutter={[24, 20]} className="pd-usp-row">
        {usps.map((item, index) => (
          <Col xs={24} sm={24} md={12} lg={12} key={index}>
            <div className="pd-usp-item">
              <span className="pd-usp-arrow">›</span>
              <p>{item}</p>
            </div>
          </Col>
        ))}
      </Row>
>>>>>>> 9d87dee (Major changes in project and fixed the error of scroll icons)
    </div>
  );
};

<<<<<<< HEAD
export default ProjectUSPs;


=======
export default ProjectUSPs;
>>>>>>> 9d87dee (Major changes in project and fixed the error of scroll icons)
