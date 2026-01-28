// src/authentication/propertyregistration/PropertyRegistration.jsx
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

  // Step titles की array बनाएं (sirf strings)
  const stepTitles = steps.map(step => step.title);

  return (
    <div className="property-registration-wrapper">
      {/* Sidebar */}
      <div className="sidebar-wrapper">
        <RegistrationSidebar
          steps={stepTitles}
          currentStep={currentStep + 1}
        />
      </div>

      {/* Main Content - Centered Form */}
      <div className="centered-form-wrapper">
        <div className="centered-form-container">
          <StepComponent />
          
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
              <button className="submit-btn">
                Submit Property
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyRegistration;