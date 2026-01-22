// propertydetails/PropertyDetail.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import PDOverview from "./PDOverview/PDOverview";
import PDHighlights from "./PDHighlight/PDHighlight";
import PDContactSeller from "./PDContactSeller/PDContactSeller";
import PDPromotion from "./PDPromotion/PDPromotion";
import PDAroundThisProject from "./PDAroundThisProject/PDAroundThisProject";
import PDMoreAboutProject from "./PDMoreAboutProject/PDMoreAboutProject";
import PDAboutProject from "./PDAboutProject/PDAboutProject";
import PDFloorPlan from "./PDFloorPlan/PDFloorPlan";
import PDTourProject from "./PDTourProject/PDTourProject";
import PDAmenities from "./PDAmenities/PDAmenities";
import PDRatingReviews from "./PDRatingReviews/PDRatingReviews";
import PDPriceTrends from "./PDPriceTrends/PDPriceTrends";
import PDBrochure from "./PDBrochure/PDBrochure";
import PDCalculator from "./PDCalculator/PDCalculator";
import PDLocality from "./PDLocality/PDLocality";
import PDCompareProperties from "./PDCompareProperties/PDCompareProperties";
import PDAboutDeveloper from "./PDAboutDeveloper/PDAboutDeveloper";
import PDQA from "./PDQA/PDQA";
import PDFAQ from "./PDFAQ/PDFAQ";
import PDNews from "./PDNews/PDNews";

import "./PropertyDetail.css";

const PropertyDetail = () => {
  const { id } = useParams();
  const [property] = useState(null);

  return (
    <div className="property-detail-container">
      {/* 1️⃣ OVERVIEW */}
      <PDOverview property={property} />

      {/* 2️⃣ MAIN LAYOUT */}
      <div className="pd-main-layout">
        {/* LEFT CONTENT */}
        <div className="pd-left">
          <PDHighlights property={property} />
          <PDPromotion property={property} />
          <PDAroundThisProject property={property} />
          <PDMoreAboutProject property={property} />
          <PDAboutProject property={property} />
          <PDFloorPlan property={property} />
          <PDTourProject property={property} />
          <PDAmenities property={property} />
          <PDRatingReviews property={property} />
          <PDPriceTrends property={property} />
          <PDBrochure property={property} />
          <PDCalculator property={property} />
          <PDLocality property={property} />
          <PDCompareProperties property={property} />
          <PDAboutDeveloper property={property} />
          <PDQA property={property} />
          <PDFAQ property={property} />
          <PDNews property={property} />
        </div>

        {/* RIGHT – STICKY CONTACT SELLER */}
        <div className="pd-right">
          <PDContactSeller property={property} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
