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
        <RegistrationSidebar
          steps={stepTitles}
          currentStep={currentStep + 1}
          onStepClick={(stepIndex) => setCurrentStep(stepIndex)}
        />
      </div>

      {/* CENTERED FORM WRAPPER */}
      <div className="centered-form-wrapper">
        <div className="centered-form-container">

          {/* CENTERED LOGO */}
          <div className="centered-logo">
            <div className="brand-logo">
              <div className="logo-text">
                <span className="logo-main">PrimeAcres</span>
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
