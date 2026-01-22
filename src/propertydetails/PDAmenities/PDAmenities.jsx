import React, { useState } from 'react';
import {
  PlayCircleOutlined,
  HomeOutlined,
  EnvironmentOutlined,
  CameraOutlined,
  BulbOutlined,
  CloudOutlined,
  BankOutlined,
  PhoneOutlined,
  DashboardOutlined,
  SettingOutlined,
  FireOutlined,
  SafetyCertificateOutlined,
  CarOutlined,
  PoweroffOutlined,
  DropboxOutlined,
  MoreOutlined,
  ArrowUpOutlined
} from '@ant-design/icons';
import './PDAmenities.css';

const PDAmenities = () => {
  const [showAll, setShowAll] = useState(false);

  const allAmenities = [
    { id: 1, name: "Children's Play Area", icon: <PlayCircleOutlined /> },
    { id: 2, name: "Entrance Lobby", icon: <HomeOutlined /> },
    { id: 3, name: "Landscaping & Tree...", icon: <EnvironmentOutlined /> },
    { id: 4, name: "24x7 CCTV Surveillance", icon: <CameraOutlined /> },
    { id: 5, name: "Street Lighting", icon: <BulbOutlined /> },
    { id: 6, name: "Storm Water Drains", icon: <CloudOutlined /> },
    { id: 7, name: "Club House", icon: <BankOutlined /> },
    { id: 8, name: "Intercom", icon: <PhoneOutlined /> },
    { id: 9, name: "Swimming Pool", icon: <DashboardOutlined /> },
    { id: 10, name: "Sensor operated...", icon: <SettingOutlined /> },
    { id: 11, name: "Internal Roads & Footpaths", icon: <HomeOutlined /> },
    { id: 12, name: "Solid Waste Management...", icon: <CloudOutlined /> },
    { id: 13, name: "Fire Fighting System", icon: <FireOutlined /> },
    { id: 14, name: "24x7 Security", icon: <SafetyCertificateOutlined /> },
    { id: 15, name: "Fire Sprinklers", icon: <FireOutlined /> },
    { id: 16, name: "Closed Car Parking", icon: <CarOutlined /> },
    { id: 17, name: "Power Backup", icon: <PoweroffOutlined /> },
    { id: 18, name: "Visitor Parking", icon: <CarOutlined /> },
    { id: 19, name: "24X7 Water Supply", icon: <DropboxOutlined /> },
    { id: 20, name: "Sewage Treatment...", icon: <CloudOutlined /> }
  ];

  // First 10 amenities for initial view
  const initialAmenities = allAmenities.slice(0, 10);

  // Last amenity replaced with "More" in initial view
  const initialDisplayAmenities = initialAmenities.map((amenity, index) => {
    if (index === 9) {
      return {
        id: 999,
        name: "More",
        icon: <MoreOutlined />,
        isMore: true
      };
    }
    return amenity;
  });

  const displayedAmenities = showAll ? allAmenities : initialDisplayAmenities;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleMoreClick = () => {
    if (!showAll) {
      setShowAll(true);
    }
  };

  return (
    <>
      <div id= "amenities" className={`pd-amenities-container ${showAll ? 'expanded' : ''}`}>
        <h2 className="pd-amenities-heading">Project Amenities</h2>
        
        <div className={`pd-amenities-grid ${showAll ? 'expanded' : ''}`}>
          {displayedAmenities.map((amenity) => (
            <div 
              key={amenity.id} 
              className={`pd-amenity-item ${amenity.isMore ? 'pd-more-item' : ''}`}
              onClick={amenity.isMore ? handleMoreClick : undefined}
            >
              <div className={`pd-amenity-icon ${amenity.isMore ? 'pd-more-icon-bg' : ''}`}>
                {amenity.icon}
              </div>
              <div className="pd-amenity-name">{amenity.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* External More/Less Button - Only shows when expanded */}
      {showAll && (
        <div className="pd-external-toggle-container">
          <button 
            className="pd-external-toggle-btn"
            onClick={toggleShowAll}
          >
            <ArrowUpOutlined />
            <span>Less</span>
          </button>
        </div>
      )}
    </>
  );
};

export default PDAmenities;