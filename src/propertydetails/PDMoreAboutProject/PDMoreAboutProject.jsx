import React from 'react';
import { DownloadOutlined, ShareAltOutlined, HeartOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Card, Row, Col, Button, Divider, Progress } from 'antd';
import './PDMoreAboutProject.css';

const PDAmoreProjects = () => {
  return (
    <div id="about-project" className="pd-more-projects-container">
      <div className="pd-project-header">
        <h1 className="pd-project-title">Casagrand Casablanca Overview</h1>
      </div>

      <div className="pd-project-content">
        {/* Left Column */}
        <div className="pd-column pd-left-column">
          <div className="pd-section">
            <h6 className="pd-section-title">Project Units</h6>
            <div className="pd-units-count">806</div>
          </div>

          <Divider className="pd-divider" />

          <div className="pd-section">
            <h4 className="pd-subtitle">Sizes</h4>
            <div className="pd-size-range">3039 – 3987 sq.ft.</div>
          </div>

          <Divider className="pd-divider" />

          <div className="pd-section">
            <h4 className="pd-subtitle">Possession Starts</h4>
            <div className="pd-possession-date">Jul, 2028</div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="pd-column pd-middle-column">
          <div className="pd-section">
            <h4 className="pd-section-title">Area Unit</h4>
            <div className="pd-area-unit">sq.ft.</div>
          </div>

          <Divider className="pd-divider" />

          <div className="pd-section">
            <h4 className="pd-subtitle">Project Size</h4>
            <div className="pd-project-size">806 units</div>
          </div>

          <Divider className="pd-divider" />

          <div className="pd-section">
            <h4 className="pd-subtitle">Configurations</h4>
            <div className="pd-configurations">
              <div className="pd-config-item">4, 5 BHK</div>
              <div className="pd-config-item">Apartment, Villament, Penthouses</div>
            </div>
          </div>

          <Divider className="pd-divider" />

          <Button 
            type="primary" 
            icon={<DownloadOutlined />} 
            className="pd-download-btn"
            size="large"
          >
            Download Brochure
          </Button>
        </div>

        {/* Right Column */}
        <div className="pd-column pd-right-column">
          <div className="pd-section">
            <h4 className="pd-subtitle">Project Area</h4>
            <div className="pd-project-area">
              <div className="pd-area-value">27 Acres</div>
              <div className="pd-area-note">(70% open)</div>
            </div>
          </div>

          <Divider className="pd-divider" />

          <div className="pd-section">
            <h4 className="pd-subtitle">Avg. Price</h4>
            <div className="pd-price-range">₹7.86 K – 8.8 K/sq.ft</div>
          </div>

          <Divider className="pd-divider" />

          <div className="pd-section">
            <h4 className="pd-subtitle">Rera Id</h4>
            <div className="pd-rera-info">
              <div className="pd-rera-id">PRM/KA/RERA/1251/310...</div>
              <button type="button" className="pd-rera-link">
                Check RERA Status
              </button>
            </div>
          </div>
        </div>
      </div>

      <Divider className="pd-main-divider" />

      {/* Action Buttons */}
      <div className="pd-action-buttons">
        <Button icon={<ShareAltOutlined />} className="pd-action-btn">
          Share
        </Button>
        <Button icon={<HeartOutlined />} className="pd-action-btn">
          Save
        </Button>
        <Button icon={<QuestionCircleOutlined />} className="pd-action-btn pd-ask-btn">
          Ask For Details
        </Button>
      </div>
    </div>
  );
};

export default PDAmoreProjects;