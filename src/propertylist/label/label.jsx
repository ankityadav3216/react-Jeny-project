// src/components/Label.jsx
import React, { useState } from "react";
import { InfoCircleOutlined, StarFilled, DownOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import "./Label.css";

const labels = [
  { key: "property", label: "Property Type",  },
  { key: "bhk", label: "BHK Type",  },
  { key: "price", label: "₹0 - ₹20Cr",  },
  { key: "sale", label: "Sale Type", },
  { key: "construction", label: "Construction",  },
  { key: "verified", label: "Verified", icon: <InfoCircleOutlined />, tooltip: "Verified properties have undergone quality checks." },
  { key: "project", label: "Project" },
  { key: "featured", label: "Featured Agents", icon: <StarFilled />, star: true },
  { key: "more", label: "More Filters", },
];

const Label = () => {
  const [activeKey, setActiveKey] = useState("property");

  return (
    <div className="label-bar">
      {labels.map(({ key, label, icon, tooltip, star }) => {
        const content = (
          <>
            {star && <StarFilled />}
            <span>{label}</span>
            {icon}
          </>
        );

        const button = (
          <div
            key={key}
            className={`label-button ${star ? "label-star-button" : ""} ${activeKey === key ? "active" : ""}`}
            onClick={() => setActiveKey(key)}
            title={tooltip || ""}
          >
            {content}
          </div>
        );

        return tooltip ? <Tooltip key={key} title={tooltip}>{button}</Tooltip> : button;
      })}
    </div>
  );
};

export default Label;
