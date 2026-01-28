import React, { useState } from 'react';
import './BasicDetails.css';

const BasicDetails = () => {
  const [lookingFor, setLookingFor] = useState('Sell');
  const [propertyCategory, setPropertyCategory] = useState('Residential');
  const [propertyType, setPropertyType] = useState('Flat/Apartment');

  const lookingForOptions = ['Sell', 'Rent / Lease', 'PG'];
  const propertyCategories = ['Residential', 'Commercial'];
  const propertyTypes = [
    'Flat/Apartment',
    'Independent House / Villa',
    'Independent / Builder Floor',
    'Plot / Land',
    '1 RK/ Studio Apartment',
    'Serviced Apartment',
    'Farmhouse',
    'Other'
  ];

  return (
    <div className="centered-form">
      <div className="form-header">
        <h1>Welcome back Prakash Naati,</h1>
        <p className="subtitle">Fill out basic details</p>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label className="form-label">I'm looking to</label>
          <div className="options-group">
            {lookingForOptions.map(option => (
              <button
                key={option}
                className={`option-btn ${lookingFor === option ? 'active' : ''}`}
                onClick={() => setLookingFor(option)}
                type="button"
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">What kind of property do you have?</label>
          
          <div className="radio-group">
            {propertyCategories.map(category => (
              <label key={category} className="radio-label">
                <input
                  type="radio"
                  name="propertyCategory"
                  value={category}
                  checked={propertyCategory === category}
                  onChange={(e) => setPropertyCategory(e.target.value)}
                  className="radio-input"
                />
                <span className="radio-custom"></span>
                <span className="radio-text">{category}</span>
              </label>
            ))}
          </div>

          <div className="property-types-grid">
            {propertyTypes.map(type => (
              <button
                key={type}
                className={`property-type-btn ${propertyType === type ? 'selected' : ''}`}
                onClick={() => setPropertyType(type)}
                type="button"
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;