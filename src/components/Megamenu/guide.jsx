import React from "react";
import "./Guide.css";

const Guide = ({ open }) => {
  if (!open) return null;

  return (
    <div className="guide-wrapper">
      <div className="guide-dropdown">
        <button className="guide-item">Property market guide</button>
        <button className="guide-item">Real Estate News</button>
        <button className="guide-item">Latest market updates</button>
        <button className="guide-item">Buying Guide</button>
        <button className="guide-item">Expert homebuying tips</button>
        <button className="guide-item">Housing Research</button>
        <button className="guide-item">Data-driven insights</button>
      </div>
    </div>
  );
};

export default Guide;
