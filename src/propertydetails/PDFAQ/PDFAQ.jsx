// =============================
// File: PDFAQ.jsx
// =============================
import React from "react";
import { Collapse, Typography } from "antd";
import { MessageOutlined } from "@ant-design/icons";
import "./PDFAQ.css";

const { Panel } = Collapse;
const { Title, Text } = Typography;

const faqData = [
  {
    q: "What is the location of Park Paradise?",
    a: "Park Paradise is located at Sargasan, Gandhinagar, Gujarat.",
  },
  {
    q: "Who is the developer of Park Paradise?",
    a: "The project is developed by a reputed real estate developer known for quality construction.",
  },
  {
    q: "When was Park Paradise launched?",
    a: "The project was launched recently and is currently under development.",
  },
  {
    q: "What is the possession date for Park Paradise?",
    a: "Possession timeline will be shared as per construction progress and RERA guidelines.",
  },
  {
    q: "What configurations are available in Park Paradise?",
    a: "The project offers spacious 3 BHK residences with modern layouts.",
  },
  {
    q: "What amenities are available at Park Paradise?",
    a: "Residents can enjoy landscaped gardens, clubhouse, parking, security, and more.",
  },
  {
    q: "What are some nearby landmarks to Park Paradise?",
    a: "The project is close to schools, hospitals, shopping areas, and major road connectivity.",
  },
  {
    q: "Is Park Paradise RERA registered?",
    a: "Yes, the project is registered under RERA for transparency and compliance.",
  },
  {
    q: "How can I schedule a site visit for Park Paradise?",
    a: "You can contact the sales team to book a site visit at your convenience.",
  },
];

const PDFAQ = () => {
  return (
    <div className="pdfaq-section">
      <div className="pdfaq-container">
        {/* Heading */}
        <div className="pdfaq-header">
          <div className="pdfaq-icon">
            <MessageOutlined />
          </div>
          <Title level={3} className="pdfaq-title">FAQs</Title>
        </div>

        {/* FAQ Collapse */}
        <Collapse
          bordered={false}
          expandIconPosition="end"
          className="pdfaq-collapse"
          defaultActiveKey={["0"]}
        >
          {faqData.map((item, index) => (
            <Panel
              header={<span className="pdfaq-question">{item.q}</span>}
              key={index}
              className="pdfaq-panel"
            >
              <Text className="pdfaq-answer">{item.a}</Text>
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

export default PDFAQ;

