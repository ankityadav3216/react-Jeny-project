import React from "react";
import { Row, Col } from "antd";

import EMIheader from "../../components/EMI/EMIheader/EMIheader";
import EMICalculator from "../../components/EMI/EMICalculator/EMICalculator";
import HomeLoansByBank from "../../components/EMI/HomeLoansByBank/HomeLoansByBank";
import AmortizationTable from "../../components/EMI/AmortizationTable/AmortizationTable";
import BankOffers from "../../components/EMI/BankOffers/BankOffers";
import EMIFAQ from "../../components/EMI/EMIFAQ/EMIFAQ";
import EMIFooter from "../../components/EMI/EMIFooter/EMIFooter";

import "./EMI.css";

const EMI = () => {
  return (
    <div className="emi-page">
      <EMIheader />

      <div className="emi-main-section">
        <Row gutter={[24, 24]} align="start">

          {/* LEFT SIDE (Calculator + below sections) */}
          <Col xs={24} md={16}>
            <EMICalculator />
            <AmortizationTable />
            <BankOffers />
            <EMIFAQ />
          </Col>

          {/* RIGHT SIDE */}
          <Col xs={24} md={8}>
            <HomeLoansByBank />
          </Col>

        </Row>
      </div>

      {/* Footer full width */}
      <EMIFooter />
    </div>
  );
};

export default EMI;
