import React from 'react';
import { Card } from 'antd';
import { 
  HomeOutlined, 
  BuildOutlined, 
  CrownOutlined, 
  EnvironmentOutlined,
  ShopOutlined,
  BankOutlined 
} from '@ant-design/icons';
import './PropertyTypes.css';

const PropertyTypes = () => {
  const propertyTypes = [
    { icon: <HomeOutlined />, title: 'Apartments', count: '45,234', color: '#3a77ff' },
    { icon: <BuildOutlined />, title: 'Builder Floors', count: '12,456', color: '#10b981' },
    { icon: <CrownOutlined />, title: 'Independent Houses', count: '8,912', color: '#f59e0b' },
    { icon: <EnvironmentOutlined />, title: 'Villas', count: '5,678', color: '#8b5cf6' },
    { icon: <ShopOutlined />, title: 'Plots', count: '15,234', color: '#ef4444' },
    { icon: <BankOutlined />, title: 'Commercial', count: '7,890', color: '#06b6d4' },
  ];

  return (
    <section className="property-types-section">
      <div className="property-types-container">
        <h2 className="section-title">Browse by Property Type</h2>
        <p className="section-subtitle">
          Explore thousands of properties across different categories
        </p>

        <div className="property-types-scroll">
          {propertyTypes.map((type, index) => (
            <Card hoverable className="property-type-card" key={index}>
              <div className="type-icon-wrapper" style={{ background: `${type.color}15` }}>
                <div className="type-icon-inner" style={{ background: type.color }}>
                  {type.icon}
                </div>
              </div>

              <h3 className="type-title">{type.title}</h3>
              <p className="type-count">{type.count} properties</p>

              <div className="type-indicator" style={{ background: type.color }}></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;
