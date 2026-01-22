import React, { useState } from "react";
import "./TopFlats.css";

const TopFlats = () => {
  const [expanded, setExpanded] = useState(false);

  const properties = [
    "Paradigm Antalya (350 sq.ft)",
    "Shantee Sunshine Residency (202 sq.ft)",
    "Raj Legacy Satyam A and B (438 sq.ft)",
    "Raghav Paradise (362 sq.ft)",
    "SMGK Urbana Heights (364 sq.ft)",
    "Sanghvi Sapphire (468 sq.ft)",
    "Ruparel Iris (830 sq.ft)",
    "Platinum Avenue (760 sq.ft)",
    "Sai Abhyuday Complex Grande (283 sq.ft)",
    "Spenta Ornata Amber (345 sq.ft)",
  ];

  const prices = [
    "₹86.21 L - 1.34 Cr",
    "₹36.27 L - 37.98 L",
    "₹4.56 Cr - 11.4 Cr",
    "₹4.49 Cr",
    "₹1.4 Cr - 1.93 Cr",
    "₹96.75 L - 1.81 Cr",
    "₹89.18 L - 2.96 Cr",
    "₹15.91 L - 44.79 L",
    "₹73.67 L - 1.43 Cr",
    "₹94.12 L - 1.68 Cr",
  ];

  const addresses = [
    "Anushakti Nagar, Sion Panvel Highway - Anu, Mumbai",
    "Nalasopara West, Mira Road and Beyond, Nala Sopara",
    "Khar West, Linking Road - Khar West, Mumbai",
    "Mahim, Western Suburbs, Mumbai",
    "Jogeshwari West, Western Suburbs, Mumbai",
    "Jogeshwari West, Western Suburbs, Mumbai",
    "Jogeshwari West, Western Suburbs, Mumbai",
    "Vasai East, Mira Road and Beyond, Vasai",
    "Mira Road East, Mira Road and Beyond, Mumbai",
    "Borivali East, Western Suburbs, Mumbai",
  ];

  return (
    <div className="topflats-container">

      {/* 🔹 TOP TEXT */}
      <div className="info-section">
        <p className="breadcrumb">Home / Flats for Sale in Mumbai</p>
        <p className="showing"><b>Showing 1 – 30 of 56378</b></p>

        <h1 className="main-heading">Flats for Sale in Mumbai</h1>

        <p className={`description ${expanded ? "expanded" : ""}`}>
          Looking for Property in Mumbai? Housing.com offers 56584+ Flats & 370+ Houses/Villas.
          Search from 37078+ 2 & 3 BHK properties for sale in Mumbai. Choose from 19899+
          New Projects, 33376+ Resale Projects and 3896+ Owner Properties for sale in Mumbai.
          100% Verified Properties.
        </p>

        <span
          className="read-more"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read less" : "Read more"}
        </span>
      </div>

      {/* 🔹 TABLE (SHOW ONLY WHEN EXPANDED) */}
      {expanded && (
        <>
          <h2 className="section-title">
            Top Flats for Sale in Mumbai – Price & Specification
          </h2>

          {/* horizontal scroll container for mobile */}
          <div className="table-horizontal-scroll">
            <div className="column-table">
              <div className="column-header">Property</div>
              <div className="column-header">Price</div>
              <div className="column-header">Address</div>

              <div className="column">
                {properties.map((item, i) => (
                  <div className="cell property" key={i}>{item}</div>
                ))}
              </div>

              <div className="column">
                {prices.map((item, i) => (
                  <div className="cell price" key={i}>{item}</div>
                ))}
              </div>

              <div className="column">
                {addresses.map((item, i) => (
                  <div className="cell address" key={i}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TopFlats;
