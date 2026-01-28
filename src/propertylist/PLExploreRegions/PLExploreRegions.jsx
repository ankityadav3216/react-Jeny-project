import React from "react";
import "./PLExploreRegions.css";

const regions = [
  {
    title: "Western Suburbs",
    price: "₹22,484",
    link: "Flats in Western Suburbs",
  },
  {
    title: "Mira Road and Beyond",
    price: "₹8,948",
    growth: "▲ 23.01%",
    link: "Flats in Mira Road and Beyond",
  },
  {
    title: "Central Mumbai Suburbs",
    price: "₹25,960",
    growth: "▲ 13.28%",
    link: "Flats in Central Mumbai Suburbs",
  },
  {
    title: "Andheri - Dahisar",
    price: "₹21,682",
    growth: "▲ 14.98%",
    link: "Flats in Andheri - Dahisar",
  },
  {
    title: "Beyond Thane",
    price: "₹5,905",
    growth: "▲ 11.46%",
    link: "Flats in Beyond Thane",
  },
];

export default function ExploreRegions() {
  return (
    <div className="region-wrapper">
      <h2>Explore Regions in Mumbai</h2>

      <div className="scroll-container">
        <div className="scroll-track">
          {[...regions, ...regions].map((item, index) => (
            <div className="region-card" key={index}>
              
              {/* Locality Box */}
              <div className="locality-box">
                {item.title}
              </div>

              {/* Price + Growth Box */}
              <div className="price-growth-box">
                <div className="price-item">
                  <strong>{item.price}</strong>
                  <span>Avg. Price / sq.ft</span>
                </div>

                {item.growth && (
                  <div className="growth-item">
                    <strong>{item.growth}</strong>
                    <span>Last 1 Year</span>
                  </div>
                )}
              </div>

              <a href="#">{item.link} ›</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
