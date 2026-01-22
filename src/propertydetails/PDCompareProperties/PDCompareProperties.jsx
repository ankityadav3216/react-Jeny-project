import React, { useState } from 'react';
import { Input, Button, Tag, Rate, Divider, Card, Tooltip } from 'antd';
import { SearchOutlined, HomeOutlined, EnvironmentOutlined, CheckCircleOutlined, CalendarOutlined, PhoneOutlined, StarFilled } from '@ant-design/icons';
import './PDCompareProperties.css';

const { Search } = Input;

const CompareProperty = () => {
  const [properties] = useState([
    {
      id: 1,
      title: "Casagrand Casamia",
      location: "Pallavaram, Chennai South, Chennai",
      price: "₹59.0 L - 1.58 Cr",
      area: "1200-2100 sqft",
      pricePerSqft: "₹5.08 K - 5.34 K/sq.ft",
      bedrooms: "2,3 & 4 BHK",
      bathrooms: "2-4",
      rating: 4.7,
      reviews: 156,
      builder: "Casagrand Builder Private Limited",
      possession: "Under Construction",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=380&h=280&fit=crop",
      verified: true,
      featured: true,
      possessionDate: "Dec 2024",
      status: "Under Construction",
      projectType: "Residential Apartment"
    },
    {
      id: 2,
      title: "4 BHK Premium Villa",
      location: "Lodha Park, Mumbai",
      price: "₹5.2 Cr",
      area: "1733 sqft",
      pricePerSqft: "₹30,000/sqft",
      bedrooms: 4,
      bathrooms: 4,
      rating: 4.9,
      reviews: 58,
      builder: "Lodha Group",
      possession: "Dec 2025",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=380&h=280&fit=crop",
      verified: true,
      featured: true,
      possessionDate: "Dec 2025",
      status: "Under Construction",
      projectType: "Premium Villa"
    },
    {
      id: 3,
      title: "Sobha Dream Acres",
      location: "Electronic City, Bangalore",
      price: "₹72.0 L - 1.2 Cr",
      area: "1400-1800 sqft",
      pricePerSqft: "₹5.14 K/sq.ft",
      bedrooms: "2 & 3 BHK",
      bathrooms: "2-3",
      rating: 4.5,
      reviews: 203,
      builder: "Sobha Limited",
      possession: "Ready to Move",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=380&h=280&fit=crop",
      verified: true,
      featured: false,
      possessionDate: "Immediate",
      status: "Ready to Move",
      projectType: "Residential Apartment"
    }
  ]);

  const onSearch = (value) => {
    console.log('Searching for:', value);
  };

  return (
    <div id="compare-property" className="compare-property-container">
      {/* Heading Section */}
      <div className="compare-header">
        <h1 className="compare-title">
          <HomeOutlined className="title-icon" />
          Compare Properties
        </h1>
        <p className="compare-subtitle">
          Compare different properties side by side to make an informed decision
        </p>
      </div>

      {/* Search Bar */}
      <div className="search-section">
        <Search
          placeholder="Search properties by name, location, builder..."
          allowClear
          enterButton={
            <Button type="primary" icon={<SearchOutlined />}>
              Search
            </Button>
          }
          size="large"
          onSearch={onSearch}
          className="property-search"
        />
        <div className="search-tags">
          <Tag color="blue">Apartments</Tag>
          <Tag color="green">Ready to Move</Tag>
          <Tag color="orange">Under Construction</Tag>
          <Tag color="purple">Luxury</Tag>
          <Tag color="red">Affordable</Tag>
        </div>
      </div>

      {/* Properties Comparison Grid */}
      <div className="properties-grid">
        {properties.map((property) => (
          <Card key={property.id} className="property-card">
            {/* Property Header */}
            <div className="property-header">
              {property.featured && (
                <Tag color="gold" className="featured-tag">
                  <StarFilled /> FEATURED
                </Tag>
              )}
              {property.verified && (
                <Tag color="green" className="verified-tag">
                  <CheckCircleOutlined /> VERIFIED
                </Tag>
              )}
            </div>

            {/* Property Image */}
            <div className="property-image-container">
              <img 
                src={property.image} 
                alt={property.title}
                className="property-image"
              />
              <div className="image-overlay">
                <Tag color={property.status === "Ready to Move" ? "success" : "processing"}>
                  {property.status}
                </Tag>
              </div>
            </div>

            {/* Property Details */}
            <div className="property-details">
              <h3 className="property-title">{property.title}</h3>
              
              <div className="property-location">
                <EnvironmentOutlined className="location-icon" />
                <span>{property.location}</span>
              </div>

              {/* Price Section */}
              <div className="price-section">
                <div className="price-main">{property.price}</div>
                <div className="price-details">
                  <span className="price-per-sqft">{property.pricePerSqft}</span>
                  <span className="property-area">({property.area})</span>
                </div>
              </div>

              {/* Rating Section */}
              <div className="rating-section">
                <Rate 
                  disabled 
                  defaultValue={property.rating} 
                  allowHalf 
                  className="property-rating"
                />
                <div className="rating-details">
                  <span className="rating-value">{property.rating}</span>
                  <span className="rating-reviews">({property.reviews} reviews)</span>
                </div>
              </div>

              {/* Key Details Grid */}
              <div className="key-details-grid">
                <div className="detail-item">
                  <div className="detail-label">Bedrooms</div>
                  <div className="detail-value">{property.bedrooms}</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">Bathrooms</div>
                  <div className="detail-value">{property.bathrooms}</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">Project Type</div>
                  <div className="detail-value">{property.projectType}</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">Builder</div>
                  <div className="detail-value builder-name">{property.builder}</div>
                </div>
              </div>

              {/* Possession Section */}
              <div className="possession-section">
                <div className="possession-header">
                  <CalendarOutlined className="possession-icon" />
                  <span className="possession-label">POSSESSION BY</span>
                </div>
                <div className="possession-date">{property.possessionDate}</div>
              </div>

              {/* Contact Seller Button */}
              <Button 
                type="primary" 
                size="large" 
                block 
                icon={<PhoneOutlined />}
                className="contact-seller-btn"
              >
                Contact Seller
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Comparison Summary */}
      <div className="comparison-summary">
        <Divider 
          orientation="left"
          style={{
            borderColor: '#e5e7eb',
            margin: '0 0 16px 0'
          }}
        >
          <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#1f2937', margin: 0 }}>
            Comparison Summary
          </h3>
        </Divider>
        <div className="summary-content">
          <p>
            Compare these properties based on price per sq.ft, possession date, amenities, 
            and builder reputation to make the best choice for your needs.
          </p>
          <Button type="link" style={{ color: '#3B82F6', fontWeight: 600, fontSize: '15px', padding: '8px 16px' }}>
            View Detailed Comparison →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompareProperty;