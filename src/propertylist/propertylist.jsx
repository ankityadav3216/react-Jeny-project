import React from "react";
import Label from "./Label/Label.jsx";
import Propertysection from "./Propertysection/Propertysection.jsx";

const PropertyList = () => {
  return (
    <div style={{ paddingTop: "64px" }}> {/* <-- add space for header */}
      <Label />
      {/* Other page content */}
      <Propertysection/>
    </div>
  );
};

export default PropertyList;
