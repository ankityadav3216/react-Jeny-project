import React from "react";
import "./PageLoader.css";

const PageLoader = () => {
  return (
    <div className="page-loader">
      <div className="loader-container">
        {/* Building Construction Animation */}
        <div className="building-loader">
          <div className="building-base"></div>
          <div className="building-floors">
            {[1, 2, 3, 4, 5].map((floor) => (
              <div key={floor} className="building-floor">
                <div className="floor-windows">
                  <div className="window"></div>
                  <div className="window"></div>
                  <div className="window"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="building-roof"></div>
          
          {/* Construction Crane */}
          <div className="construction-crane">
            <div className="crane-base"></div>
            <div className="crane-tower"></div>
            <div className="crane-arm"></div>
            <div className="crane-hook"></div>
          </div>
          
          {/* Loading Progress Bar */}
          <div className="construction-progress">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <div className="progress-text">
              <span className="loading-text">Constructing your dream home</span>
              <span className="loading-dots">
                <span className="dot">.</span>
                <span className="dot">.</span>
                <span className="dot">.</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;