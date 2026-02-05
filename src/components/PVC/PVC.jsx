import React from "react";
import PVCheader from "./PVCheader/PVCheader"; // ✅ Correct path
import PVCCalculator from "./PVCCalculator/PVCCalculator";
import PVCBenefits from "./PVCBenefits/PVCBenefits";
import PVCReads from "./PVCReads/PVCReads";
import PVCFAQ from "./PVCFAQ/PVCFAQ";
import "./PVC.css";

const PVC = () => {
  return (
    <div className="pvc-page">
      
      <PVCheader />
      <PVCCalculator/>
      < PVCBenefits/>
      <PVCReads/>
     < PVCFAQ/>
    </div>
  );
};

export default PVC;
