import React from 'react';
import './RegistrationSidebar.css';

const RegistrationSidebar = ({ currentStep = 1, steps = [], onStepClick }) => {
  return (
    <div className="registration-sidebar">
      {/* Logo Section - Centered Brand Logo */}
      <div className="logo-section">
        <div className="brand-logo">
          <svg
            className="logo-icon"
            width="34"
            height="34"
            viewBox="0 0 64 64"
            fill="none"
          >
            <defs>
              <linearGradient id="houseGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
            </defs>
            <path d="M8 30L32 10L56 30" stroke="url(#houseGrad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="16" y="30" width="32" height="22" rx="4" fill="url(#houseGrad)"/>
            <rect x="29" y="38" width="6" height="14" rx="2" fill="#0b2d4d"/>
          </svg>

          <div className="logo-text">
            <span className="logo-main">JENY</span>
            <span className="logo-sub">Jeny</span>
          </div>
        </div>
      </div>

      <div className="steps-section">
        <h3 className="section-title">Basic Details</h3>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`step-item ${index + 1 === currentStep ? 'active' : ''}`}
              onClick={() => onStepClick && onStepClick(index)}
            >
              <div className="step-number">{index + 1}</div>
              <div className="step-info">
                <div className="step-title">Step {index + 1}</div>
                <div className="step-label">{step}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="score-section">
        <h3 className="section-title">Property Score</h3>
        <div className="score-container">
          <div className="score-circle">32%</div>
          <p className="score-description">
            Better your property score,<br />
            greater your visibility
          </p>
        </div>
      </div>

      <div className="help-section">
        <h3 className="section-title">Need help?</h3>
        <p className="help-text">
          You can email us at <a href="mailto:services@99acres.com" className="help-link">services@99acres.com</a>
          <br />
          or call us at <span className="phone-number">1800 41 99099</span> (IND Toll-Free).
        </p>
      </div>
    </div>
  );
};

export default RegistrationSidebar;
