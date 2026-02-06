import React from "react";
import RRGheader from "./RRGheader/RRGheader";
import RRGBlockPage from "./RRGBlockPage/RRGBlockPage";
import RRGFooter from "./RRGFooter/RRGFooter";
import "./RRG.css"; // Make sure CSS is imported

const RRG = () => {
  return (
    <div className="RRG-page">
      <RRGheader />
      <RRGBlockPage />
      <RRGFooter />
    </div>
  );
};

export default RRG;
