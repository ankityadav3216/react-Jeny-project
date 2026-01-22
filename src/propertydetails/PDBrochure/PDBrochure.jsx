import React from 'react';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import './PDBrochure.css';

// Different brochure images
const brochureImages = [
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=200&h=200&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1567496898669-ee935f003f30?w=200&h=200&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=200&h=200&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&h=200&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=200&h=200&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=200&h=200&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&h=200&fit=crop&crop=center",
];

const ProjectBrochures = () => {
  const handleDownloadAll = () => {
    console.log("Downloading all brochures");
    alert("Downloading all brochures...");
  };

  return (
    <div className="brochures-container">
      {/* Heading */}
      <div className="brochures-header">
        <h2 className="brochures-title">Project Brochures</h2>
      </div>
      
      {/* Horizontal Scroll Container with ONLY Images */}
      <div className="brochures-scroll-container">
        {brochureImages.map((image, index) => (
          <div key={index} className="brochure-image-item">
            <img 
              src={image} 
              alt={`Brochure ${index + 1}`}
              className="brochure-image-only"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      
      {/* Single Download Button at Bottom */}
      <div className="download-section">
        <Button 
          type="primary"
          icon={<DownloadOutlined />}
          className="download-all-btn"
          size="large"
          onClick={handleDownloadAll}
        >
          Download Brochure
        </Button>
      </div>
    </div>
  );
};

export default ProjectBrochures;