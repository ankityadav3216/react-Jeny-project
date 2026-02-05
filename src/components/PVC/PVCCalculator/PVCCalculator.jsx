import React from "react";
import { Button, Input, Typography, Space } from "antd";
import "antd/dist/reset.css";
import "./PVCCalculator.css";

const { Title, Text } = Typography;

const PVCCalculator = () => {
  return (
    <div className="pvc-wrapper">
      <Title level={3}>Property Value Calculator</Title>
      <Text>Let’s calculate sale or rent value in seconds</Text>

      <div className="form-section">
        <label>I’m Looking to *</label>
        <Space>
          <Button>Sell</Button>
          <Button>Rent</Button>
        </Space>
      </div>

      <div className="form-section">
        <label>City *</label>
        <Input />
      </div>

      <div className="form-section">
        <label>Project</label>
        <Input />
      </div>

      <div className="form-section">
        <label>Locality *</label>
        <Input />
      </div>

      <div className="form-section">
        <label>Property Type *</label>
        <Space wrap>
          <Button>Apartment</Button>
          <Button>Independent Floor</Button>
          <Button>Independent House</Button>
          <Button>Villa</Button>
        </Space>
      </div>

      <div className="form-section">
        <label>Bedrooms *</label>
        <Space>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5+</Button>
        </Space>
      </div>

      <div className="form-section">
        <label>Size (sq.ft) *</label>
        <Input />
      </div>

      <div className="form-section">
        <label>Furnishing *</label>
        <Space>
          <Button>Unfurnished</Button>
          <Button>Semi Furnished</Button>
          <Button>Fully Furnished</Button>
        </Space>
      </div>

      <Button block className="estimate-btn">
        Estimate Price
      </Button>
    </div>
  );
};

export default PVCCalculator;
