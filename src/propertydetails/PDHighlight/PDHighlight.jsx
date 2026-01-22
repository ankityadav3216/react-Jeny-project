import React, { useState } from 'react';
import './PDHighlight.css';

const PDHighlight = () => {
  const [showAll, setShowAll] = useState(false);
  
  const highlights = [
    "Roman themed community that boasts 805 well-designed homes for Phase 1 across an expanse of 18-acres.",
    "Thoughtfully designed 2, 3, 4 & 5 BHK high-rise luxurious apartments, floor villas & penthouses with 2B+G+17 structure.",
    "100+ World-class amenities of outdoor and indoor recreational facilities.",
    "88% of open space & 15 acres of open area solely dedicated for landscape & amenities of multiple entertainments.",
    "A clubhouse of 42000 sqft and sports clubhouse of 26000 sqft equipped with world-class amenities and plush interiors.",
    "Vaastu compliant homes with no zero dead space.",
    "Surrounded by prominent IT & ITES companies, schools, colleges & hospitals."
  ];

  // Always show first 3 points, show rest only when showAll is true
  const visibleHighlights = showAll ? highlights : highlights.slice(0, 3);

  return (
    <div id="highlights" className="pd-highlight-main-container">
      <h2 className="pd-highlight-title">Why Casagrand Casablanca?</h2>
      
      <div className="pd-highlight-points-container">
        {visibleHighlights.map((point, index) => (
          <div key={index} className="pd-highlight-point-item">
            <span className="pd-highlight-point-bullet">•</span>
            <span className="pd-highlight-point-text">{point}</span>
          </div>
        ))}
      </div>
      
      {/* Show Read More button only if there are more than 3 points */}
      {highlights.length > 3 && (
        <button 
          className="pd-highlight-toggle-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default PDHighlight;