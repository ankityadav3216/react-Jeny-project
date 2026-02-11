import React from "react";
import { Card } from "antd";
import {
  CalculatorOutlined,
  CheckSquareOutlined,
  WalletOutlined,
  HomeOutlined,
  BarChartOutlined,
  SwapOutlined,
  PercentageOutlined,
  FileTextOutlined,
  FundOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import "./PropertyResearchTools.css";

const tools = [
  { title: "EMI Calculator", icon: <CalculatorOutlined /> },
  { title: "Eligibility Calculator", icon: <CheckSquareOutlined /> },
  { title: "Affordability Calculator", icon: <WalletOutlined /> },
  { title: "Property Valuation", icon: <HomeOutlined /> },
  { title: "Area Price Trends", icon: <BarChartOutlined /> },
  { title: "Compare Properties", icon: <SwapOutlined /> },
  { title: "Tax Calculator", icon: <PercentageOutlined /> },
  { title: "Document Checklist", icon: <FileTextOutlined /> },
  { title: "Rent vs Buy", icon: <FundOutlined /> },
  { title: "Loan Comparison", icon: <FileDoneOutlined /> },
];

const PropertyResearchTools = () => {
  return (
    <div className="prt-wrapper">
      <h2 className="prt-title">
        <span className="prt-section-icon">
          <HomeOutlined />
        </span>
        User Property Research Tools
      </h2>

      <div className="prt-scroll">
        {tools.map((item, index) => (
          <Card className="prt-card" bordered={false} key={index}>
            <div className="prt-icon-wrapper">
              <div className="prt-icon">{item.icon}</div>
            </div>
            <h3>{item.title}</h3>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PropertyResearchTools;
