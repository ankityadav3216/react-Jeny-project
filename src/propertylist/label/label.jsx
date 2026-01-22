import React from "react";
import "./label.css";

const Label = () => {
  const labels = [
    "Property Type",
    "BHK Type",
    "₹0 - ₹20Cr",
    "Sale Type",
    "Construction Status",
    "Verified",
    "Project",
    "Featured Agents",
    "More Filters",
  ];

  return (
    <div className="label-container">
      {labels.map((label, index) => (
        <button key={index} className="label-button">
          {label}
        </button>
      ))}
    </div>
  );
};

export default Label;
