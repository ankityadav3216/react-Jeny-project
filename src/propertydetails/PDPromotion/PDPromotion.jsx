import React, { useState } from 'react';
import './PDPromotion.css';

const PSPromotion = () => {
  const [showPromotion, setShowPromotion] = useState(true);
  
  const offers = [
    "Save upto 1942 L",
    "Casagrand Price Rs 2.430r; Casagrand Offer Price Rs 2.390r"
  ];

  return (
    <div className="ps-main-container">
      <div className="ps-content-container">
        <h2 className="ps-title">OFFERS</h2>
        
        {showPromotion && (
          <div className="ps-offers-container">
            {offers.map((offer, index) => (
              <div key={index} className="ps-offer-item">
                <span className="ps-offer-number">{index + 1}.</span>
                <span className="ps-offer-text">{offer}</span>
              </div>
            ))}
          </div>
        )}

        <button 
          className="ps-toggle-btn"
          onClick={() => setShowPromotion(!showPromotion)}
        >
          {showPromotion ? "Hide Offers" : "Show Offers"}
        </button>
        
      </div>
    </div>
  );
};

export default PSPromotion;
