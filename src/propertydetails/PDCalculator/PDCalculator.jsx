import React from 'react';
import { Card, Tag } from 'antd';
import { FireOutlined } from '@ant-design/icons';
import './PDCalculator.css';

// SVG Icons Components (same as before)
const CalculatorIcon = () => (
  <svg className="calc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M9 7h6m0 10v-4m-6 4v-4m-3 0h12a2 2 0 002-2V9a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
  </svg>
);

const MoneyIcon = () => (
  <svg className="money-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const HomeIcon = () => (
  <svg className="home-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const ChartIcon = () => (
  <svg className="chart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const MapIcon = () => (
  <svg className="map-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  </svg>
);

const CompareIcon = () => (
  <svg className="compare-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>
);

const TaxIcon = () => (
  <svg className="tax-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="document-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const propertyTools = [
  {
    id: 1,
    title: 'EMI Calculator',
    description: 'Calculate your monthly EMI payments',
    icon: <CalculatorIcon />,
    color: '#ff4500',
    popular: true
  },
  {
    id: 2,
    title: 'Eligibility Calculator',
    description: 'Check your home loan eligibility',
    icon: <MoneyIcon />,
    color: '#8b0000'
  },
  {
    id: 3,
    title: 'Affordability Calculator',
    description: 'Find out what you can afford',
    icon: <HomeIcon />,
    color: '#ff8c00',
    popular: true
  },
  {
    id: 4,
    title: 'Property Valuation',
    description: 'Get instant property valuation',
    icon: <ChartIcon />,
    color: '#d32f2f'
  },
  {
    id: 5,
    title: 'Area Price Trends',
    description: 'Check price trends in your area',
    icon: <MapIcon />,
    color: '#ff4500'
  },
  {
    id: 6,
    title: 'Compare Properties',
    description: 'Compare multiple properties side by side',
    icon: <CompareIcon />,
    color: '#8b0000',
    popular: true
  },
  {
    id: 7,
    title: 'Tax Calculator',
    description: 'Calculate property taxes & registration',
    icon: <TaxIcon />,
    color: '#ff8c00'
  },
  {
    id: 8,
    title: 'Document Checklist',
    description: 'Complete checklist for home buying',
    icon: <DocumentIcon />,
    color: '#d32f2f'
  },
  {
    id: 9,
    title: 'Rent vs Buy',
    description: 'Should you rent or buy?',
    icon: <CalculatorIcon />,
    color: '#ff4500'
  },
  {
    id: 10,
    title: 'Loan Comparison',
    description: 'Compare different loan options',
    icon: <MoneyIcon />,
    color: '#8b0000'
  }
];

const HelpfulTools = () => {
  return (
    <div  id= "Calculator" className="helpful-tools-container">
      {/* Header */}
      <div className="tools-header">
        <h2 className="tools-title">Helpful Tools</h2>
        <p className="tools-subtitle">
          Check your affordability, Home loan eligibility & EMI
        </p>
      </div>
      
      {/* Tools Horizontal Scroll Container */}
      <div className="tools-scroll-container">
        {propertyTools.map((tool) => (
          <Card 
            key={tool.id} 
            className="tool-card"
            hoverable
          >
            {/* Popular Badge */}
            {tool.popular && (
              <Tag className="popular-badge" icon={<FireOutlined />} color="orange">
                Popular
              </Tag>
            )}
            
            {/* Tool Icon - 60x60 container */}
            <div 
              className="tool-icon-container"
              style={{ 
                backgroundColor: `${tool.color}20`,
                borderColor: `${tool.color}40`
              }}
            >
              <div 
                className="tool-icon"
                style={{ color: tool.color }}
              >
                {tool.icon}
              </div>
            </div>
            
            {/* Tool Title */}
            <h3 className="tool-title">{tool.title}</h3>
            
            {/* Tool Description */}
            <p className="tool-description">{tool.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HelpfulTools;