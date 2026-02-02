// PropertyRegistration.jsx
import React, { useState } from "react";

import BasicDetails from "./BasicDetails/BasicDetails";
import LocationDetails from "./LocationDetails/LocationDetails";
import PropertyProfile from "./PropertyProfile/PropertyProfile";
import MediaDetails from "./MediaDetails/MediaDetails";
import Amenities from "./Amenities/Amenities";
import RegistrationSidebar from "./RegistrationSidebar/RegistrationSidebar";
import "./PropertyRegistration.css";

const steps = [
  { title: "Basic Details", component: BasicDetails },
  { title: "Location Details", component: LocationDetails },
  { title: "Property Profile", component: PropertyProfile },
  { title: "Photos, Videos & Voice-over", component: MediaDetails },
  { title: "Amenities Section", component: Amenities },
];

const PropertyRegistration = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const StepComponent = steps[currentStep].component;

  // Step titles array
  const stepTitles = steps.map((step) => step.title);

  return (
    <div className="property-registration-wrapper">

      {/* FIXED SIDEBAR */}
      <div className="sidebar-wrapper">
        <RegistrationSidebar steps={stepTitles} currentStep={currentStep + 1} />
      </div>

      {/* CENTERED FORM WRAPPER */}
      <div className="centered-form-wrapper">
        <div className="centered-form-container">

          {/* CENTERED LOGO */}
          <div className="centered-logo">
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

          {/* SCROLLABLE STEP CONTENT */}
          <div className="scrollable-step-content">
            <StepComponent />
          </div>

          {/* Navigation Buttons */}
          <div className="navigation-buttons">
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="prev-btn"
              >
                ← Previous
              </button>
            )}

            {currentStep < steps.length - 1 && (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="next-btn"
              >
                Continue →
              </button>
            )}

            {currentStep === steps.length - 1 && (
              <button className="submit-btn">Submit</button>
            )}
          </div>

        </div>
      </div>

    </div>
  );
};

export default PropertyRegistration;
