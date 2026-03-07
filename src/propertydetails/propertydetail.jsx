import React, { useState } from "react";
import { useParams } from "react-router-dom";

import PDHerosection from "./PDHerosection/PDHerosection";
import PDOverview from "./PDOverview/PDOverview";
import ProjectUpdates from "./ProjectUpdates/ProjectUpdates";
import ProjectUSPs from "./ProjectUSPs/ProjectUSPs";
import ReelsSection from "./ReelsSection/ReelsSection";
import FloorPlan from "./FloorPlan/FloorPlan";
import LocationSection from "./LocationSection/LocationSection";
import PDAmenities from "./PDAmenities/PDAmenities";
import AboutDeveloper from "./AboutDeveloper/AboutDeveloper";
import PDFAQ from "./PDFAQ/PDFAQ";
import PDContactSeller from "./PDContactSeller/PDContactSeller";

import "./PropertyDetail.css";

const PropertyDetail = () => {
  const { id: _id } = useParams();
  const [property] = useState(null);

  return (
    <main className="property-detail-container">
      <PDHerosection property={property} />

      <div className="pd-main-layout">
        <section className="pd-left" aria-label="Property details sections">
          <div id="overview-section">
            <PDOverview property={property} />
          </div>
          <div id="project-update-section">
            <ProjectUpdates property={property} />
          </div>
          <div id="project-usps-section">
            <ProjectUSPs property={property} />
          </div>
          <div id="reels-section">
            <ReelsSection property={property} />
          </div>
          <div id="floor-plan-section">
            <FloorPlan property={property} />
          </div>
          <div id="location-section">
            <LocationSection property={property} />
          </div>
          <div id="amenities-section">
            <PDAmenities property={property} />
          </div>
          <div id="about-developer-section">
            <AboutDeveloper property={property} />
          </div>
          <div id="faq-section">
            <PDFAQ property={property} />
          </div>
        </section>

        <aside className="pd-right" aria-label="Contact seller panel">
          <PDContactSeller property={property} />
        </aside>
      </div>
    </main>
  );
};

export default PropertyDetail;
