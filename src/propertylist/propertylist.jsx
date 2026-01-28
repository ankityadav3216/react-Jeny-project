import React from "react";
import PLHeader from "./PLNavbar/PLHeader";
import Label from "./label/label";
import PLListing from "./PLListing/PLListing";
import PLPropertycards from "./PLPropertycards/PLPropertycards";
import PLSeller from "./PLSeller/PLSeller";
import Topproject from "./PLTopproject/PLTopproject";
import PLLocality from "./PLLocality/PLLocality";
import PLExploreRegions from "./PLExploreRegions/PLExploreRegions";
import PLPopularSearches from "./PLPopularSearches/PLPopularSearches";
import PLResaleProjects from "./PLResaleProjects/PLResaleProjects";
import PLFAQ from "./PLFAQ/PLFAQ";
import PLFooter from "./PLFooter/PLFooter";
// import PLPostProperty from "./PLPostProperty/PLPostProperty";

import "./propertylist.css";

const PropertyList = () => {
  const property = { name: "Sample Property" };

  return (
    <>
      <PLHeader location="Mumbai" />

      <div className="property-content">
        <Label property={property} />

        <div className="property-layout">

          {/* SINGLE COLUMN – LEFT ONLY */}
          <div className="property-left">
            <PLListing property={property} />
            <PLPropertycards property={property} />

            {/* POST PROPERTY (NOW INSIDE FLOW) */}
            {/* <PLPostProperty /> */}

            <PLSeller property={property} />
            <Topproject property={property} />
            <PLLocality property={property} />
            <PLExploreRegions property={property} />
            <PLPopularSearches property={property} />
            <PLResaleProjects property={property} />
            <PLFAQ property={property} />
          </div>

        </div>

        <PLFooter property={property} />
      </div>
    </>
  );
};

export default PropertyList;
