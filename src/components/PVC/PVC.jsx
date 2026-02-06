import React, { useEffect } from "react";
import PVCheader from "./PVCheader/PVCheader";
import PVCCalculator from "./PVCCalculator/PVCCalculator";
import PVCBenefits from "./PVCBenefits/PVCBenefits";
import PVCReads from "./PVCReads/PVCReads";
import PVCFAQ from "./PVCFAQ/PVCFAQ";
import "./PVC.css";

const PVC = () => {

  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pvc-page">
      <PVCheader />
      <PVCCalculator />

      {/* 👇 Scroll animated sections */}
      <div className="scroll-animate">
        <PVCBenefits />
      </div>

      <div className="scroll-animate">
        <PVCReads />
      </div>

      <div className="scroll-animate">
        <PVCFAQ />
      </div>
    </div>
  );
};

export default PVC;
