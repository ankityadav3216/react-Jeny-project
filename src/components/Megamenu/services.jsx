import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const Services = ({ open, anchorX }) => {
  const navigate = useNavigate();

  if (!open) return null;

  const popupStyle = anchorX
    ? { left: `${anchorX}px`, transform: "translateX(-50%)" }
    : undefined;

  return (
    <div className="services-wrapper" style={popupStyle}>
      <div className="services-mega">
        <div className="services-col">
          <p className="services-title">Tools</p>

          {/* EMI Calculator Button */}
          <button
            className="services-item"
            onClick={() => navigate("/emi")}
          >
            EMI calculator
          </button>

          {/* ✅ Fixed: Navigate to correct PVC route */}
          <button
            className="services-item"
            onClick={() => navigate("/pvc")}
          >
            Property value calculator
          </button>

          {/* Rent Receipt Button */}
          <button className="services-item"   onClick={() => navigate("/RRG") }   >
            Rent receipt generator
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
