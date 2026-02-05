import React from "react";
import { Typography, Row, Col } from "antd";
import {
  RiseOutlined,
  LikeOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import "./PVCBenefits.css";

const { Title, Text } = Typography;

const PVCBenefits = () => {
  return (
    <div className="benefits-wrapper">
      <Title level={3} className="benefits-title">
        Benefits
      </Title>

      <div className="benefits-divider">~~~</div>

      <Text className="benefits-subtitle">
        Why should you choose Housing.com for property valuation?
      </Text>

      <Row gutter={[24, 24]} className="benefits-row">
        <Col span={8} className="benefit-item">
          <div className="icon-box">
            <RiseOutlined />
          </div>
          <Text className="benefit-text">
            India's insights derived from over 10 lakh listings
          </Text>
        </Col>

        <Col span={8} className="benefit-item">
          <div className="icon-box">
            <LikeOutlined />
          </div>
          <Text className="benefit-text">
            Exhaustive data-backed repository of rates and trends
          </Text>
        </Col>

        <Col span={8} className="benefit-item">
          <div className="icon-box">
            <DollarOutlined />
          </div>
          <Text className="benefit-text">
            Trusted by over 1.5 cr buyers, sellers and partners
          </Text>
        </Col>
      </Row>
    </div>
  );
};

export default PVCBenefits;
