import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import './RegistrationSidebar.css';

const RegistrationSidebar = ({ currentStep = 1, steps = [], onStepClick }) => {
  return (
    <div className="registration-sidebar">
      {/* Logo Section - Updated */}
      <div className="logo-section">
        <div className="logo-wrapper">
          <HomeOutlined className="logo-icon" />
        </div>
        <span className="logo-text">Jeny</span>
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