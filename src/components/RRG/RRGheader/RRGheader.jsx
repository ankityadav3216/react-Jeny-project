import React from "react";
import { Link } from "react-router-dom";
import "./RRGheader.css";

const RRGheader = () => {
  return (
    <header className="rrg-header">
      <div className="rrg-header-container">
        <Link to="/" className="rrg-logo">
          <span className="logo-box">
            <span className="logo-arrow">⌃</span>
          </span>
          <span className="logo-text">PrimeAcres</span>
        </Link>
      </div>
    </header>
  );
};

export default RRGheader;
