import React from "react";
import { Row, Col } from "antd";
import "./ProjectUSPs.css";

const usps = [
  "30-Meter Wide Front Road with an open layout ensuring easy accessibility",
  "Just 200 Meters from Sargasan Cross Road for prime connectivity",
  "2 Iconic Towers | Only 76 Thoughtfully Designed Units",
  "Double Parking Facility including one allotted slot",
  "Spacious 10-Feet Clear Floor Height for an airy premium feel",
  "Lift Access up to the Terrace for added convenience",
  "Elegant Multipurpose Hall ideal for gatherings and events"
];

const ProjectUSPs = () => {
  return (
    <section className="pd-usps" id="project-usps">
      <h2 className="pd-usps-title">Project USPs</h2>

      <Row gutter={[24, 20]} className="pd-usp-row">
        {usps.map((item, index) => (
          <Col xs={24} sm={24} md={12} lg={12} key={index}>
            <div className="pd-usp-item">
              <span className="pd-usp-arrow">&gt;</span>
              <p>{item}</p>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default ProjectUSPs;
