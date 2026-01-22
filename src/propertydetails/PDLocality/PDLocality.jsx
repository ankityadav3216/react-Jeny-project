import React from 'react';
import { Card, Button, Tag } from 'antd';
import { 
  EnvironmentOutlined,
  PlayCircleOutlined,
  RightOutlined,
  LeftOutlined,
  BankOutlined,
  MedicineBoxOutlined,
  CarOutlined,
  ShoppingOutlined,
  HomeOutlined,
  CalendarOutlined,
  TeamOutlined,
  SafetyOutlined,
  CoffeeOutlined,
  ShopOutlined,
  ApartmentOutlined,
  DollarOutlined,
  ShopFilled,
  BankFilled,
  CarFilled,
  MedicineBoxFilled
} from '@ant-design/icons';
import './PDLocality.css';

const PDLocality = () => {
  // Hotels and Attractions data
  const hotels = [
    { id: 1, name: "Taj Yeshwantpur", type: "Luxury Hotel", rating: 4.5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=400&fit=crop" },
    { id: 2, name: "ITC Gardenia", type: "Business Hotel", rating: 4.7, image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=400&fit=crop" },
    { id: 3, name: "The Ritz-Carlton", type: "Luxury Hotel", rating: 4.8, image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=400&fit=crop" },
    { id: 4, name: "Vivanta Bengaluru", type: "Business Hotel", rating: 4.4, image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=400&fit=crop" },
    { id: 5, name: "The Oberoi", type: "Luxury Hotel", rating: 4.9, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=400&fit=crop" },
    { id: 6, name: "JW Marriott", type: "Luxury Hotel", rating: 4.6, image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400&h=400&fit=crop" },
    { id: 7, name: "The Lalit", type: "Business Hotel", rating: 4.3, image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=400&fit=crop" },
    { id: 8, name: "Novotel", type: "Business Hotel", rating: 4.2, image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=400&h=400&fit=crop" }
  ];

  // Amenities data - Using available icons
  const amenities = [
    { id: 1, name: "Education", icon: <BankFilled />, count: 42, color: "#3B82F6" },
    { id: 2, name: "Healthcare", icon: <MedicineBoxFilled />, count: 28, color: "#EF4444" },
    { id: 3, name: "Commute", icon: <CarFilled />, count: 15, color: "#10B981" },
    { id: 4, name: "Foods ", icon: <CoffeeOutlined />, count: 67, color: "#F59E0B" },
    { id: 5, name: "Shopping", icon: <ShopFilled />, count: 35, color: "#8B5CF6" }
  ];

  // Transport info (Metro की जगह Transport)
  const transportInfo = [
    { id: 1, title: "Upcoming metro line in Kanakapura Road", icon: <CarOutlined />, details: "Metro Phase 3 Proposed", status: "Under Planning", color: "#10B981" },
    { id: 2, title: "6.29 km long extension of Green line Metro under Phase-2", icon: <CarOutlined />, details: "Green Line Extension", status: "Approved", color: "#3B82F6" }
  ];

  // Locality details
  const localityDetails = [
    { id: 1, title: "Population Density", value: "Medium", icon: <TeamOutlined />, description: "Balanced population with good community spaces" },
    { id: 2, title: "Safety Index", value: "8.2/10", icon: <SafetyOutlined />, description: "Safe neighborhood with 24/7 security" },
    { id: 3, title: "Cafes & Restaurants", value: "65+", icon: <CoffeeOutlined />, description: "Wide variety of dining options" },
    { id: 4, title: "Shopping Malls", value: "12+", icon: <ShopOutlined />, description: "Multiple shopping destinations nearby" },
    { id: 5, title: "Property Prices", value: "₹9.6K/sq.ft", icon: <DollarOutlined />, description: "Average price in the locality" },
    { id: 6, title: "Apartment Types", value: "2-4 BHK", icon: <ApartmentOutlined />, description: "Range of apartment configurations" }
  ];

  const scrollHotelsLeft = () => {
    const container = document.querySelector('.hotels-scroll-container');
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollHotelsRight = () => {
    const container = document.querySelector('.hotels-scroll-container');
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div  id= "Locality"className="pd-locality-container">
      
      {/* Section 1: Explore Neighbourhood - Map View */}
      <div className="locality-section">
        <div className="section-header">
          <h2 className="section-title">Explore Neighbourhood - Map View</h2>
        </div>
        
        <Card className="map-container">
          <div className="map-header">
            <div className="map-title">
              <EnvironmentOutlined className="map-icon" />
              <span>Location Overview</span>
            </div>
            <Button type="primary" icon={<PlayCircleOutlined />} className="view-location-btn">
              View Location
            </Button>
          </div>
          
          {/* Map Placeholder */}
          <div className="map-placeholder">
            <div className="map-overlay">
              <h3>Kanakapura Road, Bangalore</h3>
              <p>Interactive map showing nearby amenities, transport, and points of interest</p>
            </div>
          </div>
          
          {/* Amenities Circles */}
          <div className="amenities-container">
            {amenities.map((amenity) => (
              <div key={amenity.id} className="amenity-circle" style={{ borderColor: amenity.color }}>
                <div className="amenity-icon" style={{ color: amenity.color }}>
                  {amenity.icon}
                </div>
                <div className="amenity-name">{amenity.name}</div>
                <div className="amenity-count">{amenity.count}+</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Section 2: Locality Guide */}
      <div className="locality-section">
        <div className="section-header">
          <h2 className="section-title">Locality Guide</h2>
          <p className="section-subtitle">for Kanakapura Road, Bangalore</p>
        </div>
        
        {/* Hotels Horizontal Scroll */}
        <div className="hotels-section">
          <div className="hotels-header">
            <h3 className="hotels-title">Hotels & Nearby Attractions</h3>
            <div className="hotels-navigation">
              <button className="nav-btn nav-left" onClick={scrollHotelsLeft}>
                <LeftOutlined />
              </button>
              <button className="nav-btn nav-right" onClick={scrollHotelsRight}>
                <RightOutlined />
              </button>
            </div>
          </div>
          
          <div className="hotels-scroll-container">
            {hotels.map((hotel) => (
              <Card key={hotel.id} className="hotel-card">
                <div className="hotel-image-container">
                  <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                  <div className="hotel-rating">
                    <span className="rating-star">⭐</span>
                    <span className="rating-value">{hotel.rating}</span>
                  </div>
                </div>
                <div className="hotel-info">
                  <h4 className="hotel-name">{hotel.name}</h4>
                  <div className="hotel-type">{hotel.type}</div>
                  <p className="hotel-description">
                    Located within 5km radius of Casagrand Casablanca. Offers premium amenities and easy access to major landmarks.
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Locality Details */}
      <div className="locality-section">
        <div className="locality-details-grid">
          {localityDetails.map((detail) => (
            <Card key={detail.id} className="detail-card">
              <div className="detail-icon" style={{ color: '#3B82F6' }}>
                {detail.icon}
              </div>
              <h4 className="detail-title">{detail.title}</h4>
              <div className="detail-value">{detail.value}</div>
              <p className="detail-description">{detail.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Section 4: Transport Info */}
      <div className="locality-section">
        <div className="section-header">
          <h2 className="section-title">Transport & Connectivity</h2>
        </div>
        
        <div className="metro-info-container">
          {transportInfo.map((info) => (
            <Card key={info.id} className="metro-card" style={{ borderLeftColor: info.color }}>
              <div className="metro-header">
                <div className="metro-icon" style={{ color: info.color }}>
                  {info.icon}
                </div>
                <div className="metro-content">
                  <h3 className="metro-title">{info.title}</h3>
                  <div className="metro-details">
                    <Tag color={info.color} className="metro-tag">
                      {info.status}
                    </Tag>
                    <span className="metro-info">{info.details}</span>
                  </div>
                  <p className="metro-description">
                    Expected to significantly improve connectivity and reduce travel time to major business districts.
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Additional Info Cards */}
        <div className="additional-info">
          <Card className="info-card">
            <HomeOutlined className="info-icon" />
            <h4 className="info-title">Property Price Trends</h4>
            <p className="info-text">
              Property prices in Kanakapura Road have appreciated by 19.49% in the last 1 year. 
              Average rental yield is 3.2% making it a good investment location.
            </p>
          </Card>
          
          <Card className="info-card">
            <CalendarOutlined className="info-icon" />
            <h4 className="info-title">Future Development</h4>
            <p className="info-text">
              5 new residential projects and 2 commercial complexes planned within 2km radius. 
              Expected to boost infrastructure and property value.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PDLocality;