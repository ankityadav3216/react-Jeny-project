import React, { useState } from 'react';
import './PropertyProfile.css';

const PropertyProfile = () => {
  // State for form data
  const [formData, setFormData] = useState({
    // Area Details
    carpetArea: '1,500',
    builtUpArea: '',
    superBuiltUpArea: '',
    
    // Room Details
    bedrooms: 2,
    otherRooms: [],
    bathrooms: 2,
    
    // Floor Details
    totalFloors: 12,
    propertyFloor: 'Lower Ground',
    
    // Availability Status
    availability: 'Ready to move',
    possessionYear: '2026',
    possessionMonth: 'May',
    
    // Age of Property
    ageOfProperty: '0-1 years',
    
    // Ownership
    ownership: 'Freehold',
    
    // Price Details
    expectedPrice: '1,00,000',
    pricePerSqFt: '66',
    areaBasis: 'Carpet Area',
    
    // Additional Pricing Details
    maintenance: '',
    expectedRental: '',
    bookingAmount: '',
    annualDues: '',
    membershipCharge: ''
  });

  // Room options
  const bedroomOptions = [1, 2, 3, 4];
  const bathroomOptions = [1, 2, 3, 4];
  const floorOptions = ['Lower Ground', 'Ground', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  const availabilityOptions = ['Ready to move', 'Under construction'];
  const ageOptions = ['0-1 years', '1-5 years', '5-10 years', '10+ years'];
  const ownershipOptions = ['Freehold', 'Leasehold', 'Co-operative society', 'Power of Attorney'];
  const monthOptions = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Add other room
  const addOtherRoom = () => {
    setFormData(prev => ({
      ...prev,
      otherRooms: [...prev.otherRooms, `Room ${prev.otherRooms.length + 1}`]
    }));
  };

  return (
    <div className="property-profile-container">
      {/* Header */}
      <div className="property-profile-header">
        <h1>Tell us about your property</h1>
        <p>Fill all the details to get accurate property score</p>
      </div>

      <div className="property-profile-content">
        {/* 1. Area Details */}
        <div className="form-section">
          <div className="section-header">
            <h3>Add Area Details</h3>
            <p className="section-subtitle">Atleast one area type is mandatory</p>
          </div>
          
          <div className="area-grid">
            <div className="area-field">
              <label>Carpet Area</label>
              <div className="area-input-wrapper">
                <input
                  type="text"
                  value={formData.carpetArea}
                  onChange={(e) => handleInputChange('carpetArea', e.target.value)}
                  className="area-input"
                />
                <span className="area-unit">sq.ft.</span>
              </div>
            </div>
            
            <div className="area-field">
              <label>Built-up Area</label>
              <div className="area-input-wrapper">
                <input
                  type="text"
                  value={formData.builtUpArea}
                  onChange={(e) => handleInputChange('builtUpArea', e.target.value)}
                  className="area-input"
                />
                <span className="area-unit">sq.ft.</span>
              </div>
            </div>
            
            <div className="area-field">
              <label>Super built-up Area</label>
              <div className="area-input-wrapper">
                <input
                  type="text"
                  value={formData.superBuiltUpArea}
                  onChange={(e) => handleInputChange('superBuiltUpArea', e.target.value)}
                  className="area-input"
                />
                <span className="area-unit">sq.ft.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Room Details */}
        <div className="form-section">
          <div className="section-header">
            <h3>Add Room Details</h3>
          </div>
          
          <div className="room-details-grid">
            {/* Bedrooms */}
            <div className="room-section">
              <label className="room-label">No. of Bedrooms</label>
              <div className="room-options">
                {bedroomOptions.map(num => (
                  <button
                    key={num}
                    type="button"
                    className={`room-option ${formData.bedrooms === num ? 'selected' : ''}`}
                    onClick={() => handleInputChange('bedrooms', num)}
                  >
                    {num}
                  </button>
                ))}
              </div>
              <button type="button" className="add-other-btn" onClick={addOtherRoom}>
                + Add other
              </button>
            </div>
            
            {/* Bathrooms */}
            <div className="room-section">
              <label className="room-label">No. of Bathrooms</label>
              <div className="room-options">
                {bathroomOptions.map(num => (
                  <button
                    key={num}
                    type="button"
                    className={`room-option ${formData.bathrooms === num ? 'selected' : ''}`}
                    onClick={() => handleInputChange('bathrooms', num)}
                  >
                    {num}
                  </button>
                ))}
              </div>
              <button type="button" className="add-other-btn" onClick={addOtherRoom}>
                + Add other
              </button>
            </div>
          </div>
        </div>

        {/* 3. Floor Details */}
        <div className="form-section">
          <div className="section-header">
            <h3>Floor Details</h3>
            <p className="section-subtitle">Total no of floors and your floor details</p>
          </div>
          
          <div className="floor-grid">
            <div className="floor-field">
              <label>Total Floors</label>
              <select
                value={formData.totalFloors}
                onChange={(e) => handleInputChange('totalFloors', e.target.value)}
                className="floor-select"
              >
                {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            
            <div className="floor-field">
              <label>Property on floor</label>
              <select
                value={formData.propertyFloor}
                onChange={(e) => handleInputChange('propertyFloor', e.target.value)}
                className="floor-select"
              >
                {floorOptions.map(floor => (
                  <option key={floor} value={floor}>{floor}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* 4. Availability Status & Possession */}
        <div className="form-section">
          <div className="section-header">
            <h3>Availability Status</h3>
          </div>
          
          <div className="availability-grid">
            {availabilityOptions.map(status => (
              <label key={status} className="availability-label">
                <input
                  type="radio"
                  name="availability"
                  value={status}
                  checked={formData.availability === status}
                  onChange={(e) => handleInputChange('availability', e.target.value)}
                  className="availability-radio"
                />
                <span className="availability-text">{status}</span>
              </label>
            ))}
          </div>

          {/* Possession By - Only show if Under Construction */}
          {formData.availability === 'Under construction' && (
            <div className="possession-section">
              <h4>Possession By</h4>
              <div className="possession-grid">
                <div className="possession-field">
                  <label>Expected by</label>
                  <div className="possession-input-wrapper">
                    <span className="possession-label">By</span>
                    <select
                      value={formData.possessionYear}
                      onChange={(e) => handleInputChange('possessionYear', e.target.value)}
                      className="possession-select"
                    >
                      {Array.from({ length: 6 }, (_, i) => new Date().getFullYear() + i).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="possession-field">
                  <label>Month</label>
                  <select
                    value={formData.possessionMonth}
                    onChange={(e) => handleInputChange('possessionMonth', e.target.value)}
                    className="possession-select"
                  >
                    {monthOptions.map(month => (
                      <option key={month} value={month}>{month}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 5. Age of Property */}
        <div className="form-section">
          <div className="section-header">
            <h3>Age of property</h3>
          </div>
          
          <div className="age-grid">
            {ageOptions.map(age => (
              <label key={age} className="age-label">
                <input
                  type="radio"
                  name="ageOfProperty"
                  value={age}
                  checked={formData.ageOfProperty === age}
                  onChange={(e) => handleInputChange('ageOfProperty', e.target.value)}
                  className="age-radio"
                />
                <span className="age-text">{age}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 6. Ownership */}
        <div className="form-section">
          <div className="section-header">
            <h3>Ownership</h3>
          </div>
          
          <div className="ownership-grid">
            {ownershipOptions.map(type => (
              <label key={type} className="ownership-label">
                <input
                  type="radio"
                  name="ownership"
                  value={type}
                  checked={formData.ownership === type}
                  onChange={(e) => handleInputChange('ownership', e.target.value)}
                  className="ownership-radio"
                />
                <span className="ownership-text">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 7. Price Details */}
        <div className="form-section">
          <div className="section-header">
            <h3>Price Details</h3>
          </div>
          
          <div className="price-grid">
            <div className="price-field">
              <label>Expected Price</label>
              <div className="price-input-wrapper">
                <span className="currency-symbol">₹</span>
                <input
                  type="text"
                  value={formData.expectedPrice}
                  onChange={(e) => handleInputChange('expectedPrice', e.target.value)}
                  className="price-input"
                />
              </div>
            </div>
            
            <div className="price-field">
              <label>Price per sq. ft.</label>
              <div className="price-input-wrapper">
                <span className="currency-symbol">₹</span>
                <input
                  type="text"
                  value={formData.pricePerSqFt}
                  onChange={(e) => handleInputChange('pricePerSqFt', e.target.value)}
                  className="price-input"
                />
              </div>
            </div>
          </div>
          
          <div className="area-basis">
            <label>
              <input
                type="radio"
                checked={formData.areaBasis === 'Carpet Area'}
                onChange={() => handleInputChange('areaBasis', 'Carpet Area')}
              />
              Based on Carpet Area
            </label>
            <label>
              <input
                type="radio"
                checked={formData.areaBasis === 'Built-up Area'}
                onChange={() => handleInputChange('areaBasis', 'Built-up Area')}
              />
              Based on Built-up Area
            </label>
            <label>
              <input
                type="radio"
                checked={formData.areaBasis === 'Super built-up Area'}
                onChange={() => handleInputChange('areaBasis', 'Super built-up Area')}
              />
              Based on Super built-up Area
            </label>
          </div>
        </div>

        {/* 8. Additional Pricing Details */}
        <div className="form-section">
          <div className="section-header">
            <h3>Additional Pricing Details <span className="optional">(Optional)</span></h3>
          </div>
          
          <div className="additional-pricing-grid">
            <div className="additional-field">
              <label>Maintenance</label>
              <div className="additional-input-wrapper">
                <input
                  type="text"
                  value={formData.maintenance}
                  onChange={(e) => handleInputChange('maintenance', e.target.value)}
                  className="additional-input"
                />
                <span className="additional-unit">Monthly</span>
              </div>
            </div>
            
            <div className="additional-field">
              <label>Expected rental</label>
              <div className="additional-input-wrapper">
                <input
                  type="text"
                  value={formData.expectedRental}
                  onChange={(e) => handleInputChange('expectedRental', e.target.value)}
                  className="additional-input"
                />
              </div>
            </div>
            
            <div className="additional-field">
              <label>Booking Amount</label>
              <div className="additional-input-wrapper">
                <input
                  type="text"
                  value={formData.bookingAmount}
                  onChange={(e) => handleInputChange('bookingAmount', e.target.value)}
                  className="additional-input"
                />
              </div>
            </div>
            
            <div className="additional-field">
              <label>Annual dues payable</label>
              <div className="additional-input-wrapper">
                <input
                  type="text"
                  value={formData.annualDues}
                  onChange={(e) => handleInputChange('annualDues', e.target.value)}
                  className="additional-input"
                />
              </div>
            </div>
            
            <div className="additional-field">
              <label>Membership charge</label>
              <div className="additional-input-wrapper">
                <input
                  type="text"
                  value={formData.membershipCharge}
                  onChange={(e) => handleInputChange('membershipCharge', e.target.value)}
                  className="additional-input"
                />
              </div>
            </div>
          </div>
          
          <button type="button" className="add-more-btn">
            Add more pricing details
          </button>
        </div>

        {/* Property Score Display */}
        <div className="property-score-display">
          <div className="score-circle">63%</div>
          <p className="score-description">
            Better your property score, greater your visibility
          </p>
        </div>

        {/* Help Section */}
        <div className="help-section">
          <h3>Need help?</h3>
          <p>
            You can email us at <a href="mailto:services@99acres.com">services@99acres.com</a> or call us at <strong>1800 41 99099</strong> (IND Toll-Free).
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyProfile;