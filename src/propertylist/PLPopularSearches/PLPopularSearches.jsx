import React, { useRef } from "react";
import "./PLPopularSearches.css";

const searchData = [
  {
    title: "People Also Search For",
    items: [
      "Studio Apartments in Mumbai",
      "Resale Flats in Mumbai",
      "Ready to Move Flats in Mumbai",
      "Flats for Sale in Mumbai Without Brokerage",
      "Duplex in Mumbai",
      "Resale House in Mumbai",
    ],
  },
  {
    title: "Filter by Property Type",
    items: [
      "House for sale in Mumbai",
      "Apartments in Mumbai",
      "Plots for sale in Mumbai",
      "Projects in Mumbai",
      "Builder Floor in Mumbai",
    ],
  },
  {
    title: "City Collections",
    items: [
      "Affordable Projects in Mumbai",
      "Townships in Mumbai",
      "Ready to Move Projects in Mumbai",
      "Properties for sale in Mumbai",
    ],
  },
  {
    title: "Filter Your Search",
    items: [
      "Penthouse in Mumbai",
      "Affordable House for sale in Mumbai",
      "House for sale without brokerage in Mumbai",
      "Rowhouse in Mumbai",
      "Under Construction Apartments in Mumbai",
    ],
  },
  {
    title: "Luxury Properties in this area",
    items: [
      "Luxury Flats in Mumbai",
      "Luxury Apartments in Mumbai",
      "Luxury House in Mumbai",
    ],
  },
  {
    title: "Commercial Properties in this area",
    items: [
      "Commercial Properties in Mumbai",
      "Shops for Sale in Mumbai",
      "Office Space in Mumbai",
      "Showrooms in Mumbai",
    ],
  },
];

const PopularSearches = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="popular-search-section">
      <div className="section-header">
        <h2>Popular searches for properties in Mumbai</h2>

        <div className="scroll-buttons">
          <button onClick={scrollLeft}>&#10094;</button>
          <button onClick={scrollRight}>&#10095;</button>
        </div>
      </div>

      <div className="horizontal-scroll" ref={scrollRef}>
        {searchData.map((section, index) => (
          <div className="search-card" key={index}>
            <h3>{section.title}</h3>
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSearches;
