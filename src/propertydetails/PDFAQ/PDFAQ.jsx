<<<<<<< HEAD
// =============================
// File: PDFAQ.jsx
// =============================
import React from "react";
import { Collapse, Typography } from "antd";
=======
import React from "react";
import { Collapse } from "antd";
>>>>>>> 9d87dee (Major changes in project and fixed the error of scroll icons)
import { MessageOutlined } from "@ant-design/icons";
import "./PDFAQ.css";

const { Panel } = Collapse;
<<<<<<< HEAD
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
=======

const PDFAQ = () => {
  return (
    <div className="pd-faq-container" id="faq">
      <div className="pd-faq-header">
       <MessageOutlined />
        <h2>FAQs</h2>
      </div>

      <Collapse
        accordion
        bordered={false}
        expandIconPosition="end"
        className="pd-faq-collapse"
      >
        <Panel header="What is the location of Park Paradise?" key="1">
          <p>
            Park Paradise is strategically located in a well-developed
            residential area with easy access to schools, hospitals, shopping
            centers, and major highways.
          </p>
        </Panel>

        <Panel header="Who is the developer of Park Paradise?" key="2">
          <p>
            Park Paradise is developed by a reputed real estate developer known
            for delivering quality residential and commercial projects.
          </p>
        </Panel>

        <Panel header="When was Park Paradise launched?" key="3">
          <p>
            Park Paradise was launched recently as part of a premium residential
            development plan.
          </p>
        </Panel>

        <Panel header="What is the possession date for Park Paradise?" key="4">
          <p>
            The expected possession date for Park Paradise is as per the
            official project timeline shared by the developer.
          </p>
        </Panel>

        <Panel header="What configurations are available in Park Paradise?" key="5">
          <p>
            Park Paradise offers thoughtfully designed residential units in
            multiple configurations to suit different family needs.
          </p>
        </Panel>

        <Panel header="What amenities are available at Park Paradise?" key="6">
          <p>
            The project offers amenities like a swimming pool, clubhouse,
            landscaped gardens, children’s play area, security systems, power
            backup, and more.
          </p>
        </Panel>

        <Panel header="What are some nearby landmarks to Park Paradise?" key="7">
          <p>
            Nearby landmarks include reputed schools, healthcare centers,
            shopping complexes, public transport hubs, and entertainment zones.
          </p>
        </Panel>

        <Panel header="Is Park Paradise RERA registered?" key="8">
          <p>
            Yes, Park Paradise is RERA registered. Buyers can verify the
            registration details through the official RERA portal.
          </p>
        </Panel>

        <Panel header="How can I schedule a site visit for Park Paradise?" key="9">
          <p>
            You can schedule a site visit by contacting the sales team through
            the official website or by calling the provided contact number.
          </p>
        </Panel>
      </Collapse>
>>>>>>> 9d87dee (Major changes in project and fixed the error of scroll icons)
    </div>
  );
};

export default PDFAQ;

