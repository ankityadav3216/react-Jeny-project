import React from "react";
import { Card } from "antd";
import "./Tenants.css";

const Tenants = ({ open }) => {
  if (!open) return null;

  return (
    <div className="mega-wrapper">
      <div className="mega-container">

        {/* Top Metropolitans */}
        <Card
          title="Top Metropolitans in India"
          bordered={false}
          className="mega-card"
        >
          <ul className="mega-list">
            <li>Flats for Rent in Mumbai</li>
            <li>Flats for Rent in Bangalore</li>
            <li>Flats for Rent in New Delhi</li>
            <li>Flats for Rent in Hyderabad</li>
            <li>Flats for Rent in Chennai</li>
            <li>Flats for Rent in Kolkata</li>
            <li>Flats for Rent in Gurgaon</li>
          </ul>
        </Card>

        {/* Top Emerging Cities */}
        <Card
          title="Top Emerging Cities in India"
          bordered={false}
          className="mega-card"
        >
          <ul className="mega-list">
            <li>Flats for Rent in Pune</li>
            <li>Flats for Rent in Thane</li>
            <li>Flats for Rent in Ahmedabad</li>
            <li>Flats for Rent in Navi Mumbai</li>
            <li>Flats for Rent in Noida</li>
            <li>Flats for Rent in Jaipur</li>
          </ul>
        </Card>

        {/* Top Projects */}
        <Card
          title="Top Projects in India"
          bordered={false}
          className="mega-card"
        >
          <ul className="mega-list">
            <li>Raheja Exotica</li>
            <li>Prestige Shantiniketan</li>
            <li>DLF Capital Greens</li>
            <li>My Home Bhooja</li>
            <li>SPRRG Osian Chlorophyll</li>
            <li>Shapoorji Pallonji Shukhobrishti Spandan Phase 9</li>
            <li>DLF Camellias</li>
          </ul>
        </Card>

      </div>
    </div>
  );
};

export default Tenants;
