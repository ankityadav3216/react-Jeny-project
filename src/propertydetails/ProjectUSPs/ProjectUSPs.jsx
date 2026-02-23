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
    </div>
  );
};

export default ProjectUSPs;


