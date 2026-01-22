import React from "react";
import "./Services.css";

const Services = ({ open }) => {
  if (!open) return null;

  return (
    <div className="services-wrapper">
      <div className="services-dropdown">
        <button className="services-item">Housing Edge</button>
        <button className="services-item">Home Loan</button>
        <button className="services-item">Housing Protect</button>
        <button className="services-item">Housing Premium</button>

        <div className="services-divider" />

        <button className="services-item">EMI Calculator</button>
        <button className="services-item">Property Value Calculator</button>
        <button className="services-item">Rent Receipt Generator</button>
      </div>
    </div>
  );
};

export default Services;
