import React, { useState } from 'react';
import { Input } from 'antd';
import './LocationDetails.css';

const LocationDetails = () => {
  const [formData, setFormData] = useState({
    city: 'Beyond Mira Road',
    locality: 'Vasai West',
    subLocality: '',
    apartmentSociety: 'Neminath Park',
    houseNo: 'A-203',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="location-fixed-container">

      {/* FIXED HEADER */}
      <div className="form-header">
        <h1>Where is your property located?</h1>
        <p className="subtitle">
          An accurate location helps you connect with the right buyers.
        </p>
      </div>

      {/* SCROLLABLE FORM */}
      <div className="location-scroll-content">
        <div className="form-section">

          {/* City */}
          <div className="form-group">
            <label className="form-label">City</label>
            <Input
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city"
              size="large"
            />
          </div>

          {/* Locality */}
          <div className="form-group">
            <label className="form-label">Locality</label>
            <Input
              name="locality"
              value={formData.locality}
              onChange={handleChange}
              placeholder="Enter locality"
              size="large"
            />
          </div>

          {/* Sub Locality */}
          <div className="form-group">
            <label className="form-label">
              Sub Locality <span className="optional">(Optional)</span>
            </label>
            <Input
              name="subLocality"
              value={formData.subLocality}
              onChange={handleChange}
              placeholder="Enter sub locality"
              size="large"
            />
          </div>

          {/* Apartment / Society */}
          <div className="form-group">
            <label className="form-label">Apartment / Society</label>
            <Input
              name="apartmentSociety"
              value={formData.apartmentSociety}
              onChange={handleChange}
              placeholder="Enter apartment/society name"
              size="large"
            />
          </div>

          {/* House No */}
          <div className="form-group">
            <label className="form-label">
              House No. <span className="optional">(Optional)</span>
            </label>
            <Input
              name="houseNo"
              value={formData.houseNo}
              onChange={handleChange}
              placeholder="Enter house number"
              size="large"
            />
          </div>

          {/* INFO BOX */}
          <div className="info-box">
            <h3 className="info-title">Why we need an accurate location?</h3>
            <p className="info-text">
              Location is the most important for Buyers. By capturing a detailed
              location we ensure we get you genuine enquiries.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
