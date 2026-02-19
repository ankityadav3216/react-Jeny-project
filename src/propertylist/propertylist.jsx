import React from "react";
import Label from "./Label/Label.jsx";
import Propertysection from "./Propertysection/Propertysection.jsx";
import PLReels from "./PLReels/PLReels.jsx";
import ReadyMoveSection from "./ReadyMoveSection/ReadyMoveSection.jsx";
import MostDemandProjects from "./MostDemandProjects/MostDemandProjects.jsx";
import PremiumProjectsSection from "./PremiumProjectsSection/PremiumProjectsSection.jsx";
import "./PropertyList.css";

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
      <MostDemandProjects/>
      <Propertysection />
      <PremiumProjectsSection/>
    </div>
  );
};

export default PropertyList;
