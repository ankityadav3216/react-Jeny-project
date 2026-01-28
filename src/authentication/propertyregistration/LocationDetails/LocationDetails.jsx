import React, { useState } from 'react';
import './LocationDetails.css';

const LocationDetails = () => {
  const [formData, setFormData] = useState({
    city: 'Beyond Mira Road',
    locality: 'Vasai West',
    subLocality: '',
    apartmentSociety: 'Neminath Park',
    houseNo: 'A-203'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="centered-location-form">
      <div className="form-header">
        <h1>Where is your property located?</h1>
        <p className="subtitle">
          An accurate location helps you connect with the right buyers.
        </p>
      </div>

      <div className="form-section">
        {/* City */}
        <div className="form-group">
          <label className="form-label">City</label>
          <div className="input-with-placeholder">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter city"
            />
            <span className="input-placeholder">Beyond Mira Road</span>
          </div>
        </div>

        {/* Locality */}
        <div className="form-group">
          <label className="form-label">Locality</label>
          <div className="input-with-placeholder">
            <input
              type="text"
              name="locality"
              value={formData.locality}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter locality"
            />
            <span className="input-placeholder">Vasai West</span>
          </div>
        </div>

        {/* Sub Locality */}
        <div className="form-group">
          <label className="form-label">
            Sub Locality <span className="optional">(Optional)</span>
          </label>
          <input
            type="text"
            name="subLocality"
            value={formData.subLocality}
            onChange={handleChange}
            className="form-input"
            placeholder="Enter sub locality"
          />
        </div>

        {/* Apartment/Society */}
        <div className="form-group">
          <label className="form-label">Apartment / Society</label>
          <div className="input-with-placeholder">
            <input
              type="text"
              name="apartmentSociety"
              value={formData.apartmentSociety}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter apartment/society name"
            />
            <span className="input-placeholder">Neminath Park</span>
          </div>
        </div>

        {/* House No */}
        <div className="form-group">
          <label className="form-label">
            House No. <span className="optional">(Optional)</span>
          </label>
          <div className="input-with-placeholder">
            <input
              type="text"
              name="houseNo"
              value={formData.houseNo}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter house number"
            />
            <span className="input-placeholder">A-203</span>
          </div>
        </div>

        {/* Info Box */}
        <div className="info-box">
          <h3 className="info-title">Why we need an accurate location?</h3>
          <p className="info-text">
            Location is the most important for Buyers. By capturing a detailed location 
            we ensure we get you genuine enquiries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;