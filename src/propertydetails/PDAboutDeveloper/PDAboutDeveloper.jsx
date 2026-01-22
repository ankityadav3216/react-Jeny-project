import React, { useState } from 'react';
import { Button, Row, Col, Card } from 'antd';
import { 
  RightOutlined,
  DownOutlined,
  HomeOutlined
} from '@ant-design/icons';
import './PDAboutDeveloper.css';

const PDAboutDeveloper = () => {
  const [showMore, setShowMore] = useState(false);
  const [activePossession, setActivePossession] = useState('ready-to-move');

  // Developer Information
  const developerInfo = {
    name: "Casagrand Builder Private Limited",
    estd: "2004",
    projects: "172",
    description: "Casagrand Builder Private Limited is a real estate enterprise committed to building aspirations and delivering value. In the last fifteen years, we have developed over 22 million sqft of prime residential real estate across Chennai, Bengaluru, and Coimbatore. Over 18,250 happy families across 112+ landmark properties stand testimony to our commitment. In the sixteenth year of our journey, we at Casagrand are all set to progress further forward with projects worth over Rs. 8000 crores in the pipeline.",
    extendedDescription: "Our commitment to quality, transparency, and customer satisfaction has earned us numerous accolades and a strong reputation in the real estate industry. We focus on sustainable development practices and innovative architectural designs that enhance living experiences. With a dedicated team of professionals and strategic partnerships, we continue to set new benchmarks in residential and commercial real estate development across South India."
  };

  // Possession Status
  const possessionStatus = [
    { id: 'ready-to-move', label: 'Ready to Move', count: 42, color: '#10B981' },
    { id: 'in-3years', label: 'In 3 Years', count: 28, color: '#3B82F6' },
    { id: 'beyond-3years', label: 'Beyond 3 Years', count: 15, color: '#F59E0B' }
  ];

  return (
    <div id="About-developer" className="pd-about-developer">
      {/* Heading Section - Centered */}
      <div className="section-header">
        <h1 className="main-title">
          About Developer
        </h1>
        <p className="section-subtitle">
          Get to know the builder behind your dream home
        </p>
      </div>

      {/* Developer Info Card - White Background */}
      <Card className="developer-card-white">
        <Row gutter={[32, 32]} className="developer-info">
          {/* Left - Logo */}
          <Col xs={20} md={6} className="logo-container">
            <div className="logo-wrapper">
              <div className="developer-logo">
                <HomeOutlined className="home-icon" />
              </div>
            </div>
          </Col>

          {/* Right - Details */}
          <Col xs={24} md={18} className="details-container">
            {/* Developer Name and Stats */}
            <div className="developer-header">
              <h2 className="developer-name">{developerInfo.name}</h2>
              <div className="developer-stats-white">
                <div className="stat-item">
                  <span className="stat-label">Year estd.</span>
                  <span className="year-value">2004</span>
                </div>
                <div className="divider"></div>
                <div className="stat-item">
                  <span className="stat-label">Projects</span>
                  <span className="project-value-black">{developerInfo.projects}</span>
                </div>
              </div>
            </div>

            {/* Description with Read More - Centered */}
            <div className="developer-description">
              <p className={`description-text ${!showMore ? 'truncated' : ''}`}>
                {developerInfo.description}
                {showMore && (
                  <>
                    <br /><br />
                    {developerInfo.extendedDescription}
                  </>
                )}
              </p>
              
              <div className="read-more-container">
                <Button 
                  type="link" 
                  className="read-more-btn"
                  onClick={() => setShowMore(!showMore)}
                  icon={showMore ? <DownOutlined /> : <RightOutlined />}
                >
                  {showMore ? 'Read Less' : 'Read More'}
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Card>

      {/* Possession Status Section - Same Line */}
      <div className="possession-section-inline">
        <div className="possession-header-inline">
          <h3 className="possession-title-inline">Possession Status</h3>
          <div className="possession-buttons-inline">
            {possessionStatus.map((status) => (
              <button
                key={status.id}
                className={`possession-btn-inline ${activePossession === status.id ? 'active' : ''}`}
                onClick={() => setActivePossession(status.id)}
                style={{
                  borderColor: status.color,
                  backgroundColor: activePossession === status.id ? `${status.color}15` : 'white'
                }}
              >
                <div className="possession-content-inline">
                  <div 
                    className="possession-indicator-inline"
                    style={{ backgroundColor: status.color }}
                  />
                  <span className="possession-label-inline">{status.label}</span>
                  <span className="possession-count-inline">{status.count} Projects</span>
                </div>
              </button>
            ))}
          </div>
          <Button type="link" className="view-all-btn-inline">
            View All <RightOutlined />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PDAboutDeveloper;