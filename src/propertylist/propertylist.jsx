import React, { useState } from "react";
import { Drawer } from "antd";
import Label from "./Label/label.jsx";
import Propertysection from "./Propertysection/Propertysection.jsx";
import PLReels from "./PLReels/PLReels.jsx";
import ReadyMoveSection from "./ReadyMoveSection/ReadyMoveSection.jsx";
import PLFilters from "./PLFilters/PLFilters.jsx";
import MostDemandProjects from "./MostDemandProjects/MostDemandProjects.jsx";
import PremiumProjectsSection from "./PremiumProjectsSection/PremiumProjectsSection.jsx";
import Handpicked from "./Handpicked/Handpicked.jsx";
import Footer from "../components/footer/Footer.jsx";
import "./propertylist.css";

const PropertyList = () => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  return (
    <div className="property-list-wrapper">
      <div className="property-list-grid">
        <div className="property-list-breadcrumb" aria-label="Breadcrumb">
          Home / Gujrat / Ghandhinagar
        </div>

        <aside className="property-list-left">
          <PLFilters />
        </aside>

        <section className="property-list-right">
          <Label />
          <Propertysection />
          <Handpicked />
          <PLReels />
          <ReadyMoveSection />
          <MostDemandProjects />
          <Propertysection />
          <PremiumProjectsSection />
        </section>
      </div>

      <div className="property-list-mobile-breadcrumb" aria-label="Breadcrumb">
        Home / Gujrat / Ghandhinagar
      </div>

      <div className="property-list-mobile-filters">
        <Label mobileFilterTrigger={{ count: 1, onClick: () => setIsMobileFilterOpen(true) }} />
      </div>

      <div className="property-list-mobile-content">
        <Propertysection />
        <Handpicked />
        <PLReels />
        <ReadyMoveSection />
        <MostDemandProjects />
        <Propertysection />
        <PremiumProjectsSection />
      </div>

      <Drawer
        open={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        placement="bottom"
        height="86vh"
        closable={false}
        className="property-mobile-filter-drawer"
      >
        <PLFilters inDrawer />
      </Drawer>

      <Footer />
    </div>
  );
};

export default PropertyList;
