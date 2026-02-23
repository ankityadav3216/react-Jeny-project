// propertydetails/PropertyDetail.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import PDHerosection from "./PDHerosection/PDHerosection";
import PDOverview from "./PDOverview/PDOverview";
import ProjectUSPs from "./ProjectUSPs/ProjectUSPs";
import WatchReels from "./WatchReels/WatchReels";
import LocationSection from "./LocationSection/LocationSection";
import FloorPlan from "./FloorPlan/FloorPlan";
import DeveloperContactCard from "./DeveloperContactCard/DeveloperContactCard";
import PDAmenities from "./PDAmenities/PDAmenities";
import PDAboutDeveloper from "./PDAboutDeveloper/PDAboutDeveloper";
import PDFAQ from "./PDFAQ/PDFAQ";


import "./PropertyDetail.css";

const PropertyDetail = () => {
  const { id } = useParams();
  const [property] = useState(null);

  return (
    <div className="property-detail-container">
      {/* 1️⃣ OVERVIEW */}
      <PDHerosection property={property} />

      {/* 2️⃣ MAIN LAYOUT */}
      <div className="pd-main-layout">
        {/* LEFT CONTENT */}
        <div className="pd-left">
          <PDOverview property={property} />
          <ProjectUSPs property={property} />
          <WatchReels  property={property} />
          <FloorPlan property={property} />
          <LocationSection property={property} />
          <PDAmenities property={property} />          
          <PDAboutDeveloper property={property} />        
          <PDFAQ property={property} />
          
        </div>

        {/* RIGHT – STICKY CONTACT SELLER */}
        <div className="pd-right">
          <DeveloperContactCard property={property} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
