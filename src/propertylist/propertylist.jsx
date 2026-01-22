import React from "react";
import PLHeader from "./PLNavbar/PLHeader";
import Label from "./label/label"; // Uppercase
import TopFlats from "./TopFlats/TopFlats"; 
const PropertyList = () => {
  const property = { name: "Sample Property" }; // ya phir real data yahan se aayega

  return (
    <>
      <PLHeader location="Mumbai" />
      
      <div className="property-content">
        <Label property={property} />
       
         <  TopFlats property={property} />
      </div>
    </>
  );
};

export default PropertyList;
