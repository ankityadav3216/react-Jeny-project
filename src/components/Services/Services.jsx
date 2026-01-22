import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import './Services.css';

const services = [
  {
    icon: '✅',
    title: 'Verified Properties',
    description: 'Every property is physically verified for authenticity',
  },
  {
    icon: '🎥',
    title: 'Virtual Tours',
    description: '3D tours and video walkthroughs available',
  },
  {
    icon: '💰',
    title: 'Home Loan Assistance',
    description: 'Get pre-approved loans from top banks',
  },
  {
    icon: '⚖️',
    title: 'Legal Assistance',
    description: 'End-to-end legal support for documentation',
  },
  {
    icon: '📊',
    title: 'Price Trends',
    description: 'Market insights and price analytics',
  },
  {
    icon: '📞',
    title: '24/7 Support',
    description: 'Dedicated relationship manager',
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Housing.com?</h2>
          <p className="section-subtitle">
            India's most trusted real estate platform with complete transparency
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card-wrapper" key={index}>
              <Card className="service-card">
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <Button type="primary" className="cta-button">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;