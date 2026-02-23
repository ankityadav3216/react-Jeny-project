// PDOverview.jsx
import React from "react";
import { Row, Col, Typography } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import "./PDOverview.css";

const { Title, Text } = Typography;

const overviewData = [
  { label: "PRICE", value: "₹85 L - ₹1.10 Cr", icon: true },
  { label: "CONFIGURATION", value: "3 BHK Flat" },
  { label: "PROJECT AREA", value: "1.77 Acre" },

  { label: "SIZE", value: "205 SqYd - 255 SqYd" },
  { label: "PROJECT STATUS", value: "Under Construction" },
  { label: "TOTAL TOWERS", value: "5" },

  { label: "NO. OF FLOORS", value: "13" },
  { label: "TOTAL UNITS", value: "258" },
  { label: "POSSESSION STARTS", value: "Dec, 2027" },

  { label: "LAUNCH DATE", value: "Oct, 2024" },
  { label: "PARKING", value: "Two Wheeler, Four Wheeler allotted" },
  { label: "RERA ID", value: "PR/GJ/GANDHINAGAR/..." },
];

const PDOverview = () => {
  return (
    <div className="pd-overview-container">
      {/* Heading */}
      <div className="pd-overview-header">
        <Title level={4} className="pd-overview-title">
          Overview
        </Title>
      </div>

      {/* Grid Section */}
      <Row gutter={[40, 32]}>
        {overviewData.map((item, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <div className="pd-overview-item">
              <Text className="pd-overview-label">{item.label}</Text>

              <div className="pd-overview-value">
                <Text strong>{item.value}</Text>
                {item.icon && (
                  <InfoCircleOutlined className="pd-info-icon" />
                )}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PDOverview;