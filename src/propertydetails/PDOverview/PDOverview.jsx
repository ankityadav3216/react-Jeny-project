<<<<<<< HEAD
// PDOverview.jsx
=======
>>>>>>> 9d87dee (Major changes in project and fixed the error of scroll icons)
import React from "react";
import { Row, Col, Typography } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import "./PDOverview.css";

const { Title, Text } = Typography;

<<<<<<< HEAD
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
=======
const data = [
  { label: "PRICE", value: "₹80 L - ₹1.12 Cr", info: true },
  { label: "AVG. PRICE", value: "₹35,000 / SqYd", info: true },
  { label: "CONFIGURATION", value: "3 BHK Flat" },

  { label: "PROJECT AREA", value: "1.5 Acre" },
  { label: "SIZE", value: "258 SqYd - 321 SqYd" },
  { label: "PROJECT STATUS", value: "Under Construction" },

  { label: "TOTAL TOWERS", value: "2" },
  { label: "NO. OF FLOORS", value: "13" },
  { label: "TOTAL UNITS", value: "76" },

  { label: "POSSESSION STARTS", value: "Jun, 2027" },
  { label: "LAUNCH DATE", value: "Jul, 2024" },
  { label: "FURNISHED STATUS", value: "Not Furnished" },

  { label: "PARKING", value: "Alloted Car Parking" },
>>>>>>> 9d87dee (Major changes in project and fixed the error of scroll icons)
  { label: "RERA ID", value: "PR/GJ/GANDHINAGAR/..." },
];

const PDOverview = () => {
  return (
<<<<<<< HEAD
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
=======
    <div className="pfd-overview-wrapper">
      <div className="pfd-overview-card">
        <Title level={4} className="pfd-title">
          Overview
        </Title>

        <Row gutter={[24, 24]}>
          {data.map((item, index) => (
            <Col xs={12} sm={12} lg={8} key={index}>
              <div className="pfd-item">
                <Text className="pfd-label">{item.label}</Text>

                <div className="pfd-value-row">
                  <Text className="pfd-value">{item.value}</Text>
                  {item.info && (
                    <InfoCircleOutlined className="pfd-info-icon" />
                  )}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
>>>>>>> 9d87dee (Major changes in project and fixed the error of scroll icons)
    </div>
  );
};

export default PDOverview;