import React from "react";
import RRGheader from "./RRGheader/RRGheader";
import RRGBlockPage from "./RRGBlockPage/RRGBlockPage";
import RRGFooter from "./RRGFooter/RRGFooter";
const RRG = () => {

  return (
    <div className="RRG-page">
      <RRGheader/>
      <RRGBlockPage/>
      <RRGFooter/>
    </div>
  );
};

export default RRG;
