import React from "react";
import { Card, Input, Button, Checkbox, Select } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";
import "./PDContactSeller.css";

const { Option } = Select;

const PDContactSeller = () => {
  return (
    <Card className="contact-seller-card">
      <h3 className="card-title">Contact Seller</h3>

      <div className="company-info">
        <div className="company-logo">LOGO</div>
        <div>
          <p className="company-name">Nyati Group</p>
          <p className="company-type">Developer</p>
          <p className="company-phone">+91 9**** ****</p>
        </div>
      </div>

      <p className="helper-text">Please share your contact</p>

      <div className="form-fields">
        <Input placeholder="Name" className="blue-input" />

        <Input
          addonBefore={
            <Select defaultValue="+91" className="blue-select">
              <Option value="+91">+91</Option>
              <Option value="+1">+1</Option>
            </Select>
          }
          placeholder="Phone number"
          className="blue-input"
        />

        <Input placeholder="Email" className="blue-input" />
      </div>

      <div className="consent-section">
        <Checkbox className="blue-checkbox">
          I agree to be contacted via
        </Checkbox>

        <div className="contact-options">
          <span className="contact-option-item">
            <WhatsAppOutlined className="whatsapp-icon" /> WhatsApp
          </span>
          <span>SMS</span>
          <span>Phone</span>
          <span>Email</span>
        </div>

        <Checkbox className="blue-checkbox">
          I am interested in Home Loans
        </Checkbox>
      </div>

      <Button block type="primary" className="light-blue-button">
        Get Contact Details
      </Button>
    </Card>
  );
};

export default PDContactSeller;
