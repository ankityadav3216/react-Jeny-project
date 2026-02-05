import React from "react";
import { Row, Col, Slider, Select, Button, Divider } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./EMICalculator.css";

const { Option } = Select;

const EMICalculator = () => {
  return (
    <div className="emi-wrapper">
      <h2 className="emi-title">Home Loan EMI Calculator</h2>

      <Divider />

      <Row gutter={[40, 40]}>
        <Col xs={24} md={14}>
          <div className="emi-left">
            <div className="emi-field">
              <label>Select Bank (Optional)</label>
              <Select placeholder="Select Bank" className="emi-select" size="large">
                <Option value="hdfc">HDFC</Option>
                <Option value="sbi">SBI</Option>
                <Option value="icici">ICICI</Option>
              </Select>
            </div>

            <div className="emi-field">
              <label>Loan Amount (₹)</label>
              <Slider defaultValue={47} />
              <div className="emi-scale">
                <span>1L</span>
                <span>5Cr</span>
              </div>
              <div className="emi-value">₹ 47,00,000</div>
            </div>

            <div className="emi-field">
              <label>Tenure (Years)</label>
              <Slider defaultValue={10} min={2} max={30} />
              <div className="emi-scale">
                <span>2</span>
                <span>30</span>
              </div>
              <div className="emi-value">10</div>
            </div>

            <div className="emi-field">
              <label>Rate of Interest (%)</label>
              <Slider defaultValue={9} min={7} max={15} />
              <div className="emi-scale">
                <span>7%</span>
                <span>15%</span>
              </div>
              <div className="emi-value">9%</div>
            </div>

            <Button type="link" icon={<PlusOutlined />} className="emi-prepay">
              Add Pre-payment
            </Button>
          </div>
        </Col>

        <Col xs={24} md={10}>
          <div className="emi-right">
            <p className="emi-month-text">Your EMI Per Month</p>
            <h1 className="emi-amount">₹ 59,538</h1>

            <div className="emi-pie-placeholder" />

            <div className="emi-breakup">
              <div>
                <span className="dot interest"></span>
                Total Interest <b>₹ 24,44,513</b>
              </div>
              <div>
                <span className="dot fees"></span>
                Processing Fees <b>₹ 23,500</b>
              </div>
              <div>
                <span className="dot principal"></span>
                Loan Amount <b>₹ 47,00,000</b>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default EMICalculator;
