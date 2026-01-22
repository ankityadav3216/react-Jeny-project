import React from 'react';
import './PDAroundThisProject.css';

const PDAroundThisProjects = () => {
  const locationDetails = [
    {
      id: 1,
      type: 'School',
      name: 'The Valley School, KFI',
      icon: '🏫',
      distance: '2.5 km'
    },
    {
      id: 2,
      type: 'Bus Stand',
      name: 'Chikkegowdanapalya Bus Stop',
      icon: '🚌',
      distance: '0.8 km'
    },
    {
      id: 3,
      type: 'Hospital',
      name: 'Manipal Hospital',
      icon: '🏥',
      distance: '3.2 km'
    },
    {
      id: 4,
      type: 'Shopping Mall',
      name: 'Forum Mall',
      icon: '🛍️',
      distance: '4.1 km'
    },
    {
      id: 5,
      type: 'Metro Station',
      name: 'Banashankari Metro',
      icon: '🚇',
      distance: '5.3 km'
    },
    {
      id: 6,
      type: 'Restaurant',
      name: 'Windmills Craftworks',
      icon: '🍽️',
      distance: '1.7 km'
    },
    {
      id: 7,
      type: 'Park',
      name: 'Lalbagh Botanical Garden',
      icon: '🌳',
      distance: '6.2 km'
    },
    {
      id: 8,
      type: 'ATM',
      name: 'HDFC Bank ATM',
      icon: '🏦',
      distance: '1.2 km'
    },
    {
      id: 9,
      type: 'Gym',
      name: 'Cult Fitness',
      icon: '💪',
      distance: '2.8 km'
    },
    {
      id: 10,
      type: 'Pharmacy',
      name: 'Apollo Pharmacy',
      icon: '💊',
      distance: '1.5 km'
    }
  ];

  return (
    <div id= "this-project" className="pd-highlight-container">
      {/* Property Location Section */}
      <div className="pd-property-location-section">
        <div className="pd-location-header">
          <div className="pd-section-tag">Property Location</div>
          <h2 className="pd-location-address">Off Kanakapura Road, Bangalore</h2>
          <div className="pd-location-highlights">
            <div className="pd-highlight-item">
              <span className="pd-highlight-icon">📍</span>
              <span className="pd-highlight-text">Prime Location</span>
            </div>
            <div className="pd-highlight-item">
              <span className="pd-highlight-icon">🚗</span>
              <span className="pd-highlight-text">Excellent Connectivity</span>
            </div>
            <div className="pd-highlight-item">
              <span className="pd-highlight-icon">⭐</span>
              <span className="pd-highlight-text">Premium Neighborhood</span>
            </div>
          </div>
        </div>

        <div className="pd-location-map">
          <div className="pd-map-placeholder">
            <div className="pd-map-pin">📍</div>
            <p className="pd-map-text">Property located in prime area with all amenities nearby</p>
          </div>
        </div>
      </div>

      {/* Around This Project Section */}
      <div className="pd-around-section">
        <div className="pd-section-header">
          <div className="pd-section-title">
            <div className="pd-section-tag">Around This Project</div>
            <h3>Nearby Amenities & Facilities</h3>
            <p className="pd-section-subtitle">Everything you need within reach</p>
          </div>
          <button className="pd-view-all-btn">
            View All on Maps
            <svg className="pd-external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
        </div>

        {/* Horizontal Scroll Section */}
        <div className="pd-horizontal-scroll-wrapper">
          <div className="pd-scrollable-cards">
            {locationDetails.map((item) => (
              <div key={item.id} className="pd-location-card">
                <div className="pd-card-icon">{item.icon}</div>
                <div className="pd-card-content">
                  <div className="pd-card-type">{item.type}</div>
                  <h4 className="pd-card-name">{item.name}</h4>
                  <div className="pd-card-distance">
                    <span className="pd-distance-icon">↔️</span>
                    <span>{item.distance}</span>
                  </div>
                </div>
                <div className="pd-card-arrow">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicators */}
        <div className="pd-scroll-controls">
          <div className="pd-scroll-info">
            <span className="pd-scroll-count">10+ amenities nearby</span>
            <div className="pd-scroll-dots">
              <span className="pd-scroll-dot active"></span>
              <span className="pd-scroll-dot"></span>
              <span className="pd-scroll-dot"></span>
              <span className="pd-scroll-dot"></span>
            </div>
          </div>
          <div className="pd-scroll-buttons">
            <button className="pd-scroll-btn pd-scroll-prev">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="pd-scroll-btn pd-scroll-next">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDAroundThisProjects;