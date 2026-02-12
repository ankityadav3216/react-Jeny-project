import React, { useState, useRef, useEffect } from "react";
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
  const scrollRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  // Duplicate tools for seamless infinite scroll
  const duplicatedTools = [...tools, ...tools, ...tools];

  useEffect(() => {
    let interval;
    if (!isHovering) {
      interval = setInterval(() => {
        if (scrollRef.current) {
          const container = scrollRef.current;
          const cardWidth = 166; // min-width (150px) + gap (16px)
          const maxScroll = container.scrollWidth - container.clientWidth;
          let nextScroll = container.scrollLeft + cardWidth;

          if (nextScroll >= maxScroll) {
            // Reset to start without animation
            container.scrollLeft = 0;
          } else {
            container.scrollTo({
              left: nextScroll,
              behavior: "smooth",
            });
          }
        }
      }, 2500); // scroll every 2.5 seconds
    }
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <div className="prt-wrapper">
      <h2 className="prt-title">
        <span className="prt-section-icon">
          <HomeOutlined />
        </span>
        User Property Research Tools
      </h2>

      <div
        className="prt-scroll"
        ref={scrollRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {duplicatedTools.map((item, index) => (
          <Card className="prt-card" bordered={false} key={`${item.title}-${index}`}>
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