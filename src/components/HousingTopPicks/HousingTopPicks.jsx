// HousingTopPicks.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ ADD THIS IMPORT
import { Button, Tag } from 'antd';
import { 
  HeartOutlined,
  HeartFilled,
  EyeOutlined,
  EnvironmentOutlined,
  StarFilled,
  RightOutlined,
  LeftOutlined,
  VerifiedOutlined,
  PauseOutlined,
  PlayCircleOutlined,
  HomeOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';
import './HousingTopPicks.css';

const HousingTopPicks = () => { // ✅ REMOVE navigate prop from here
  const navigate = useNavigate(); // ✅ ADD THIS LINE
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [liked, setLiked] = useState(false);
  
  const properties = [
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
      image: "https://cdn.wallpapersafari.com/10/49/fb1EPZ.jpg",
      verified: true,
      featured: true,
      amenities: ["Swimming Pool", "Gym", "Park", "24/7 Security"],
      emi: "₹31.24 K",
      offer: "Save Up to ₹4.41L"
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
      image: "https://www.thinkvilla.gr/wp-content/uploads/2023/11/when-it-comes-to-wow-factor-locations-wave-villa-delivers-on-every-level-a-true-inspiration-for-im-640x427.jpg",
      verified: true,
      featured: true,
      amenities: ["Clubhouse", "Garden", "Swimming Pool", "Play Area"],
      emi: "₹1.2L/month",
      offer: "Limited Period Offer"
    }
  ];

  // Progress bar auto-scroll (5 seconds)
  useEffect(() => {
    let interval;
    
    if (isAutoPlaying) {
      setProgress(0);
      
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            const nextIndex = (currentIndex + 1) % properties.length;
            setCurrentIndex(nextIndex);
            return 0;
          }
          return prev + 0.33; // 5 seconds = 100%
        });
      }, 16.67); // 60 FPS
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, currentIndex, properties.length]);

  const scrollLeft = () => {
    const prevIndex = (currentIndex - 1 + properties.length) % properties.length;
    setCurrentIndex(prevIndex);
    setProgress(0);
  };

  const scrollRight = () => {
    const nextIndex = (currentIndex + 1) % properties.length;
    setCurrentIndex(nextIndex);
    setProgress(0);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    if (!isAutoPlaying) {
      setProgress(0);
    }
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  const handleImageClick = (propertyId) => {
    // Navigate to property details page
    navigate(`/property/${propertyId}`);
  };

  const currentProperty = properties[currentIndex];

  return (
    <div className="housing-top-picks-no-container">
      {/* Header */}
      <div className="perfect-header-no-container">
        <div className="perfect-title-section-no-container">
          <h2 className="perfect-title-no-container">Housing's Top picks</h2>
          <p className="perfect-subtitle-no-container">Curated properties matching your preferences</p>
        </div>
        <div className="perfect-controls-no-container">
          <div className="perfect-scroll-controls-no-container">
            <button className="perfect-nav-btn-no-container" onClick={scrollLeft}>
              <LeftOutlined />
            </button>
            <button className="perfect-play-btn-no-container" onClick={toggleAutoPlay}>
              {isAutoPlaying ? <PauseOutlined /> : <PlayCircleOutlined />}
            </button>
            <button className="perfect-nav-btn-no-container" onClick={scrollRight}>
              <RightOutlined />
            </button>
          </div>
          <div className="perfect-progress-indicator-no-container">
            <span className="perfect-current-no-container">{currentIndex + 1}</span>
            <span className="perfect-slash-no-container">/</span>
            <span className="perfect-total-no-container">{properties.length}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="perfect-progress-bar-no-container">
        <div className="perfect-progress-track-no-container">
          <div 
            className="perfect-progress-fill-no-container"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Property Card */}
      <div className="perfect-property-card-no-container">
        {/* Left - Image */}
        <div className="perfect-image-side-no-container">
          <div className="perfect-image-container-no-container">
            {/* ✅ IMAGE CLICK HANDLER IS ALREADY HERE */}
            <img 
              src={currentProperty.image} 
              alt={currentProperty.title}
              className="perfect-image-no-container"
              onClick={() => handleImageClick(currentProperty.id)}
              style={{ cursor: 'pointer' }}
            />
            
            {/* Image Badges */}
            <div className="perfect-image-badges-no-container">
              {currentProperty.featured && (
                <Tag color="red" className="perfect-featured-no-container">
                  FEATURED
                </Tag>
              )}
              {currentProperty.verified && (
                <Tag color="green" className="perfect-verified-no-container">
                  <VerifiedOutlined /> VERIFIED
                </Tag>
              )}
            </div>
            
            {/* Image Actions */}
            <div className="perfect-image-actions-no-container">
              <button 
                className="perfect-action-btn-no-container"
                onClick={toggleLike}
              >
                {liked ? (
                  <HeartFilled style={{ color: '#FF4500' }} />
                ) : (
                  <HeartOutlined />
                )}
              </button>
              <button 
                className="perfect-action-btn-no-container"
                onClick={() => handleImageClick(currentProperty.id)}
              >
                <EyeOutlined />
              </button>
            </div>
          </div>
        </div>

        {/* Right - Details */}
        <div className="perfect-details-side-no-container">
          <div className="perfect-details-header-no-container">
            <div className="perfect-title-rating-no-container">
              {/* ✅ TITLE CLICK HANDLER IS ALREADY HERE */}
              <h3 
                className="perfect-property-title-no-container"
                style={{ cursor: 'pointer' }}
                onClick={() => handleImageClick(currentProperty.id)}
              >
                {currentProperty.title}
              </h3>
              <div className="perfect-rating-no-container">
                <StarFilled className="perfect-star-no-container" />
                <span className="perfect-rating-value-no-container">{currentProperty.rating}</span>
                <span className="perfect-reviews-no-container">({currentProperty.reviews} reviews)</span>
              </div>
            </div>
          </div>

          <div className="perfect-builder-info-no-container">
            <CheckCircleOutlined className="perfect-builder-icon-no-container" />
            <span className="perfect-builder-name-no-container">{currentProperty.builder}</span>
          </div>

          <div className="perfect-location-no-container">
            <EnvironmentOutlined className="perfect-location-icon-no-container" />
            <span className="perfect-location-text-no-container">{currentProperty.location}</span>
          </div>

          <div className="perfect-property-stats-no-container">
            <div className="perfect-stat-no-container">
              <HomeOutlined className="perfect-stat-icon-no-container" />
              <div className="perfect-stat-info-no-container">
                <span className="perfect-stat-value-no-container">{currentProperty.bedrooms}</span>
                <span className="perfect-stat-label-no-container">Bedrooms</span>
              </div>
            </div>
            
            <div className="perfect-stat-no-container">
              <div className="perfect-stat-icon-no-container">🚿</div>
              <div className="perfect-stat-info-no-container">
                <span className="perfect-stat-value-no-container">{currentProperty.bathrooms}</span>
                <span className="perfect-stat-label-no-container">Bathrooms</span>
              </div>
            </div>
            
            <div className="perfect-stat-no-container">
              <div className="perfect-stat-icon-no-container">📏</div>
              <div className="perfect-stat-info-no-container">
                <span className="perfect-stat-value-no-container">{currentProperty.area}</span>
                <span className="perfect-stat-label-no-container">Built-up Area</span>
              </div>
            </div>
            
            <div className="perfect-stat-no-container">
              <div className="perfect-stat-icon-no-container">📅</div>
              <div className="perfect-stat-info-no-container">
                <span className="perfect-stat-value-no-container">{currentProperty.possession}</span>
                <span className="perfect-stat-label-no-container">Possession</span>
              </div>
            </div>
          </div>

          <div className="perfect-price-section-no-container">
            <div className="perfect-price-main-no-container">
              <span className="perfect-price-value-no-container">{currentProperty.price}</span>
              <span className="perfect-price-onwards-no-container">Onwards</span>
            </div>
            <div className="perfect-price-details-no-container">
              <span className="perfect-price-per-sqft-no-container">{currentProperty.pricePerSqft}</span>
              <span className="perfect-price-emi-no-container"> | EMI: {currentProperty.emi}</span>
            </div>
          </div>

          <div className="perfect-amenities-no-container">
            {currentProperty.amenities.slice(0, 4).map((amenity, index) => (
              <Tag key={index} className="perfect-amenity-tag-no-container">
                {amenity}
              </Tag>
            ))}
          </div>

          <div className="perfect-action-buttons-no-container">
            {/* ✅ BUTTONS CLICK HANDLERS ARE ALREADY HERE */}
            <Button 
              type="primary"
              className="perfect-contact-btn-no-container"
              onClick={() => handleImageClick(currentProperty.id)}
            >
              Contact Builder for Best Price
            </Button>
            <Button 
              type="default"
              className="perfect-details-btn-no-container"
              onClick={() => handleImageClick(currentProperty.id)}
            >
              View Complete Details
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="perfect-navigation-dots-no-container">
        {properties.map((_, index) => (
          <div 
            key={index}
            className={`perfect-dot-no-container ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setCurrentIndex(index);
              setProgress(0);
            }}
          >
            <div className="perfect-dot-circle-no-container"></div>
            {index === currentIndex && isAutoPlaying && (
              <div className="perfect-dot-progress-no-container">
                <div 
                  className="perfect-dot-progress-fill-no-container"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HousingTopPicks;