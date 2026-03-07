import React from "react";
import Label from "./Label/label.jsx";
import Propertysection from "./Propertysection/Propertysection.jsx";
import PLReels from "./PLReels/PLReels.jsx";
import ReadyMoveSection from "./ReadyMoveSection/ReadyMoveSection.jsx";
import MostDemandProjects from "./MostDemandProjects/MostDemandProjects.jsx";
import PremiumProjectsSection from "./PremiumProjectsSection/PremiumProjectsSection.jsx";
import "./propertylist.css";

const PropertyList = () => {
  return (
    <div className="property-list-wrapper">
      <Label />
      <Propertysection />
      <PLReels />
      <ReadyMoveSection />

      <div className="property-after-ready">
        <Propertysection />
      </div>

      <MostDemandProjects />
      <Propertysection />
      <PremiumProjectsSection />
    </div>
  );
};

export default PropertyList;
