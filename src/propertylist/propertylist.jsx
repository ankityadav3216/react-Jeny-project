import React from "react";
import Label from "./Label/Label.jsx";
import Propertysection from "./Propertysection/Propertysection.jsx";
<<<<<<< HEAD
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
=======
import "./propertylist.css";

const PropertyList = () => {
  return (
    <div className="page-content">
      <Label />
      <Propertysection />
>>>>>>> 9d87dee (Major changes in project and fixed the error of scroll icons)
    </div>
  );
};

export default PropertyList;
