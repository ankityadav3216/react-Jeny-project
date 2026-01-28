import React from "react";
import "./PLListing.css";

const PLListingHeader = () => {
  return (
    <div className="listing-header">

      {/* TOP ROW */}
      <div className="top-row">
        <div className="breadcrumb">
          Home / Mumbai / <span>Properties for Sale in Mumbai</span>
        </div>

        <div className="updated-date">
          Last Updated: Jan 23, 2026
        </div>
      </div>

      {/* RESULT COUNT */}
      <div className="result-count">
        Showing 1 - 30 of 48,700
      </div>

      {/* TITLE + SORT */}
      <div className="title-sort-row">
        <h1>Properties for Sale in Mumbai</h1>

        <div className="sort-box">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort">
            <option>Relevance</option>
            <option>Price (Low to High)</option>
            <option>Price (High to Low)</option>
            <option>Area (Low to High)</option>
            <option>Area (High to Low)</option>
            <option>Date Added</option>
          </select>
        </div>
      </div>

    </div>
  );
};

export default PLListingHeader;
