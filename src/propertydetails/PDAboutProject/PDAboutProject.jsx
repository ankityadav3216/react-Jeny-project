import React, { useState } from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import './PDAboutProject.css';

const PDAboutProject = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className={`pd-about-project-container ${showFullText ? 'expanded' : ''}`}>
      <h2 className="pd-about-heading">More About Casagrand Casablanca</h2>
      
      <div className="pd-text-content">
        <p className="pd-paragraph">
          Welcome to Casagrand Casablanca, an abode of magnificent Apartments with all modern features required for a soulful living. Nestled amidst a posh locality, Kanakapura Road in Bangalore, this Residential haven flaunts a resort-like environment that effectively eases off the day's tiredness and makes you discover the difference between a concrete house and a loving home. The builders of the project, Casagrand Builder Private Limited have ensured that all homes at Casagrand Casablanca offer privacy and exclusivity to its inhabitants. It is a place that sets a contemporary lifestyle for its residents. The Casagrand Casablanca offers 805 luxurious, environmental friendly 2 BHK, 3 BHK and 4 BHK beautiful houses.
        </p>
        
        {showFullText && (
          <>
            <div className="pd-paragraph-gap"></div>
            
            <p className="pd-paragraph">
              The Casagrand Casablanca is meticulously designed and exclusively planned with world class amenities and top line specifications such as 24Hrs Water Supply, CCTV Cameras, Club House, Compound, Covered Car Parking, Entrance Gate With Security Cabin, Fire Safety, Gated Community, Gym, Indoor Games, Intercom, Landscaped Garden, Lift, Party Area, Play Area, Rain Water Harvesting, Security Personnel, Swimming Pool, Visitor Parking, 24Hrs Backup Electricity for Common Areas and Sewage Treatment Plant.
            </p>
            
            <div className="pd-paragraph-gap"></div>
            <div className="pd-paragraph-gap"></div>
            
            <p className="pd-paragraph">
              Casagrand Casablanca Wise The project is situated at Bangalore. City Kanakapura Road.
            </p>
          </>
        )}
      </div>

      <div className="pd-toggle-container">
        <button 
          className="pd-toggle-btn"
          onClick={toggleText}
        >
          <span>{showFullText ? 'Show Less' : 'Show More About Project'}</span>
          {showFullText ? <UpOutlined /> : <DownOutlined />}
        </button>
      </div>
    </div>
  );
};

export default PDAboutProject;