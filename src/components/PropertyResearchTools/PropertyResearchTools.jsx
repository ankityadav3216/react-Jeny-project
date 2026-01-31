import React from "react";
import { Card, Button } from "antd";
import {
  CalculatorOutlined,
  CheckSquareOutlined,
  WalletOutlined,
  HomeOutlined,
  BarChartOutlined,
  SwapOutlined,
  FileTextOutlined,
  FileDoneOutlined,
  PercentageOutlined,
  FundOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import "./PropertyResearchTools.css";

const tools = [
  { title: "EMI Calculator", desc: "Find your monthly EMI", icon: <CalculatorOutlined /> },
  { title: "Eligibility Calculator", desc: "Find your home loan limit", icon: <CheckSquareOutlined /> },
  { title: "Affordability Calculator", desc: "Best budget for your home search", icon: <WalletOutlined /> },
  { title: "Property Valuation", desc: "Estimate market value", icon: <HomeOutlined /> },
  { title: "Area Price Trends", desc: "Locality price movement", icon: <BarChartOutlined /> },
  { title: "Compare Properties", desc: "Compare properties easily", icon: <SwapOutlined /> },
  { title: "Tax Calculator", desc: "Calculate property tax", icon: <PercentageOutlined /> },
  { title: "Document Checklist", desc: "Required documents list", icon: <FileTextOutlined /> },
  { title: "Rent vs Buy", desc: "Make the right decision", icon: <FundOutlined /> },
  { title: "Loan Comparison", desc: "Compare loan options", icon: <FileDoneOutlined /> },
];

const PropertyResearchTools = () => {
  return (
    <div className="prt-wrapper">
      <h2 className="prt-title">User property research tools</h2>
      <p className="prt-subtitle">
        Calculate your borrowing power and understand your financial options
      </p>

      <div className="prt-scroll">
        {tools.map((item, index) => (
          <Card className="prt-card" bordered={false} key={index}>
            <div className="prt-icon-wrapper">
              <div className="prt-icon">{item.icon}</div>
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <Button
              shape="circle"
              className="prt-arrow"
              icon={<ArrowRightOutlined />}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PropertyResearchTools;
