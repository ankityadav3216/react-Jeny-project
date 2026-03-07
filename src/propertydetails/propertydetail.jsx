import React, { useState } from "react";
import { useParams } from "react-router-dom";

import PDHerosection from "./PDHerosection/PDHerosection";
import PDOverview from "./PDOverview/PDOverview";
<<<<<<< HEAD
import ProjectUSPs from "./ProjectUSPs/ProjectUSPs";
import WatchReels from "./WatchReels/WatchReels";
import LocationSection from "./LocationSection/LocationSection";
import FloorPlan from "./FloorPlan/FloorPlan";
import DeveloperContactCard from "./DeveloperContactCard/DeveloperContactCard";
import PDAmenities from "./PDAmenities/PDAmenities";
import PDAboutDeveloper from "./PDAboutDeveloper/PDAboutDeveloper";
import PDFAQ from "./PDFAQ/PDFAQ";

=======
import ProjectUpdates from "./ProjectUpdates/ProjectUpdates";
import PDContactSeller from "./PDContactSeller/PDContactSeller";
import ProjectUSPs from "./ProjectUSPs/ProjectUSPs";
import FloorPlan from "./FloorPlan/FloorPlan";
import ReelsSection from "./ReelsSection/ReelsSection";
import PDAmenities from "./PDAmenities/PDAmenities";
import AboutDeveloper from "./AboutDeveloper/AboutDeveloper";
import PDFAQ from "./PDFAQ/PDFAQ";
import LocationSection from "./LocationSection/LocationSection";
>>>>>>> 9d87dee (Major changes in project and fixed the error of scroll icons)

import "./PropertyDetail.css";

const PropertyDetail = () => {
  const { id: _id } = useParams();
  const [property] = useState(null);

  return (
<<<<<<< HEAD
    <div className="property-detail-container">
      {/* 1️⃣ OVERVIEW */}
=======
    <main className="property-detail-container">
>>>>>>> 9d87dee (Major changes in project and fixed the error of scroll icons)
      <PDHerosection property={property} />

      <div className="pd-main-layout">
<<<<<<< HEAD
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
=======
        <section className="pd-left" aria-label="Property details sections">
          <PDOverview property={property} />
          <ProjectUpdates property={property} />
          <ProjectUSPs property={property} />
          <ReelsSection property={property} />
          <FloorPlan property={property} />
          <LocationSection property={property} />
          <PDAmenities property={property} />
          <AboutDeveloper property={property} />
          <PDFAQ property={property} />
        </section>

        <aside className="pd-right" aria-label="Contact seller panel">
          <PDContactSeller property={property} />
        </aside>
>>>>>>> 9d87dee (Major changes in project and fixed the error of scroll icons)
      </div>
    </main>
  );
};

export default PropertyDetail;
