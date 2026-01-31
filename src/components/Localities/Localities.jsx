import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import './Localities.css';

const localities = [
  { name: 'Andheri West', avgPrice: '₹2.1 Cr', properties: '1,234', demand: 85 },
  { name: 'Powai', avgPrice: '₹3.4 Cr', properties: '876', demand: 72 },
  { name: 'Thane', avgPrice: '₹1.8 Cr', properties: '2,345', demand: 90 },
  { name: 'Chembur', avgPrice: '₹1.9 Cr', properties: '1,567', demand: 68 },
  { name: 'Dadar', avgPrice: '₹2.8 Cr', properties: '789', demand: 78 },
  { name: 'Borivali', avgPrice: '₹1.5 Cr', properties: '1,890', demand: 82 },
  { name: 'Bandra West', avgPrice: '₹4.2 Cr', properties: '543', demand: 92 },
  { name: 'Juhu', avgPrice: '₹5.1 Cr', properties: '432', demand: 88 },
  { name: 'Malad', avgPrice: '₹1.2 Cr', properties: '2,100', demand: 75 },
  { name: 'Goregaon', avgPrice: '₹1.7 Cr', properties: '1,650', demand: 80 },
];

const Localities = () => {
  return (
    <div className="localities-wrapper">
      <div className="localities-header">
        <h2 className="section-title">Popular Localities in Mumbai</h2>
        <p className="section-subtitle">Explore prime locations with high demand and growth potential</p>
      </div>

      <div className="localities-cards-section">
        <div className="localities-scroll-wrapper">
          {localities.map((locality, index) => (
            <div className="locality-card" key={index}>
              <div className="locality-header">
                <div className="locality-name-section">
                  <div className="locality-number">{index + 1}</div>
                  <h3 className="locality-name">{locality.name}</h3>
                </div>
                <div className="locality-price">{locality.avgPrice}</div>
              </div>

              <div className="locality-info">
                <div className="info-item">
                  <span className="info-label">Properties</span>
                  <span className="info-value">{locality.properties}</span>
                </div>
                <div className="info-divider"></div>
                <div className="info-item">
                  <span className="info-label">Demand</span>
                  <span className="info-value demand-value">{locality.demand}%</span>
                </div>
              </div>

              <div className="locality-progress-container">
                <div className="progress-header">
                  <span>Demand Level</span>
                  <span className="progress-percent">{locality.demand}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${locality.demand}%` }}
                  ></div>
                </div>
              </div>

              <button className="explore-btn">
                <span>Explore Properties</span>
                <ArrowRightOutlined />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Localities;
