import React, { useRef, useState, useEffect } from 'react';
import { Button, Rate } from 'antd';
import { 
  HeartOutlined, 
  HeartFilled,
  EnvironmentOutlined, 
  EyeOutlined,
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';
import './FeaturedProperties.css';

const properties = [
  {
    id: 1,
    title: '3 BHK Luxury Apartment',
    location: 'Bandra West, Mumbai',
    price: '₹2.8 Cr',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&h=400&fit=crop',
    beds: 3,
    baths: 3,
    area: '1850 sq.ft',
    rating: 4.8,
    featured: true,
  },
  {
    id: 2,
    title: 'Modern 2 BHK Flat',
    location: 'Whitefield, Bangalore',
    price: '₹1.2 Cr',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop',
    beds: 2,
    baths: 2,
    area: '1250 sq.ft',
    rating: 4.6,
    featured: false,
  },
  {
    id: 3,
    title: 'Penthouse with Pool',
    location: 'Gurgaon Sector 56',
    price: '₹4.5 Cr',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop',
    beds: 4,
    baths: 4,
    area: '3200 sq.ft',
    rating: 4.9,
    featured: true,
  },
  {
    id: 4,
    title: 'Villa with Garden',
    location: 'Pune, Hinjewadi',
    price: '₹3.2 Cr',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&h=400&fit=crop',
    beds: 5,
    baths: 4,
    area: '4500 sq.ft',
    rating: 4.7,
    featured: false,
  },
  {
    id: 5,
    title: 'Sea View Apartment',
    location: 'Marine Drive, Mumbai',
    price: '₹5.8 Cr',
    image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=600&h=400&fit=crop',
    beds: 3,
    baths: 3,
    area: '2100 sq.ft',
    rating: 4.9,
    featured: true,
  },
  {
    id: 6,
    title: 'Smart Home Villa',
    location: 'Electronic City, Bangalore',
    price: '₹2.9 Cr',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    beds: 4,
    baths: 4,
    area: '2800 sq.ft',
    rating: 4.5,
    featured: false,
  },
  {
    id: 7,
    title: 'Luxury Penthouse',
    location: 'South Delhi',
    price: '₹6.5 Cr',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop',
    beds: 5,
    baths: 5,
    area: '3800 sq.ft',
    rating: 4.9,
    featured: true,
  },
  {
    id: 8,
    title: 'Modern Studio',
    location: 'Koramangala, Bangalore',
    price: '₹85 L',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=400&fit=crop',
    beds: 1,
    baths: 1,
    area: '800 sq.ft',
    rating: 4.4,
    featured: false,
  }
];

const FeaturedProperties = () => {
  const scrollRef = useRef(null);
  const [likedCards, setLikedCards] = useState({});
  const [autoScroll, setAutoScroll] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 280; // Card width including gap
  const visibleCards = properties.length; // Total cards

  useEffect(() => {
    let scrollInterval;
    
    if (autoScroll && !isHovering) {
      scrollInterval = setInterval(() => {
        if (scrollRef.current) {
          const container = scrollRef.current;
          const maxScrollLeft = container.scrollWidth - container.clientWidth;
          const currentScrollLeft = container.scrollLeft;
          
          // Check if last card is fully visible
          const isLastCardVisible = currentScrollLeft >= maxScrollLeft - 50; // 50px buffer
          
          if (isLastCardVisible) {
            // Reset to first card
            container.scrollTo({
              left: 0,
              behavior: 'smooth'
            });
            setCurrentIndex(0);
          } else {
            // Move to next card
            const nextScrollLeft = currentScrollLeft + cardWidth;
            container.scrollTo({
              left: nextScrollLeft,
              behavior: 'smooth'
            });
            
            // Update current index
            const nextIndex = Math.round(nextScrollLeft / cardWidth) % visibleCards;
            setCurrentIndex(nextIndex);
          }
        }
      }, 3000); // Scroll every 3 seconds
    }

    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, [autoScroll, isHovering, currentIndex, visibleCards]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const newIndex = currentIndex > 0 ? currentIndex - 1 : visibleCards - 1;
      
      container.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(newIndex);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const newIndex = (currentIndex + 1) % visibleCards;
      
      container.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(newIndex);
    }
  };

  const toggleLike = (id) => {
    setLikedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleDotClick = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  return (
    <div className="featured-properties-horizontal">
      {/* Header */}
      <div className="featured-header">
        <div className="featured-title-section">
          <h2 className="featured-title">Featured Properties</h2>
          <p className="featured-subtitle">Premium properties with verified details</p>
        </div>
        
        <div className="featured-controls">
          <div className="scroll-buttons">
            <button className="nav-button" onClick={scrollLeft}>
              <LeftOutlined />
            </button>
            <button className="nav-button" onClick={scrollRight}>
              <RightOutlined />
            </button>
          </div>
          <Button type="link" className="view-all-link">
            View All →
          </Button>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="featured-scroll-wrapper">
        <div 
          className="featured-scroll-container" 
          ref={scrollRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {properties.map((property) => (
            <div key={property.id} className="featured-card-compact">
              {/* Property Card */}
              <div className="property-card-compact">
                {/* Image Section */}
                <div className="card-image-compact">
                  <img
                    alt={property.title}
                    src={property.image}
                    className="property-image-compact"
                  />
                  
                  {/* Badges */}
                  <div className="card-badges-compact">
                    {property.featured && (
                      <span className="badge-featured-compact">
                        FEATURED
                      </span>
                    )}
                    <button 
                      className="like-button-compact"
                      onClick={() => toggleLike(property.id)}
                    >
                      {likedCards[property.id] ? (
                        <HeartFilled style={{ color: '#007bff', fontSize: '16px' }} />
                      ) : (
                        <HeartOutlined style={{ fontSize: '16px' }} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Property Details */}
                <div className="card-details-compact">
                  {/* Title and Location */}
                  <div className="property-title-section-compact">
                    <h3 className="property-title-compact">{property.title}</h3>
                    <div className="property-location-compact">
                      <EnvironmentOutlined className="location-icon-compact" />
                      <span className="location-text-compact">{property.location}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="property-rating-compact">
                    <Rate 
                      disabled 
                      defaultValue={property.rating} 
                      allowHalf 
                      className="rating-stars-compact"
                    />
                    <span className="rating-value-compact">{property.rating}</span>
                  </div>

                  {/* Features */}
                  <div className="property-features-compact">
                    <div className="feature-item-compact">
                      <span className="feature-icon-compact">🛏️</span>
                      <span className="feature-text-compact">{property.beds} Beds</span>
                    </div>
                    <div className="feature-item-compact">
                      <span className="feature-icon-compact">🚿</span>
                      <span className="feature-text-compact">{property.baths} Baths</span>
                    </div>
                    <div className="feature-item-compact">
                      <span className="feature-icon-compact">📏</span>
                      <span className="feature-text-compact">{property.area}</span>
                    </div>
                  </div>

                  {/* Price and Action */}
                  <div className="property-action-compact">
                    <div className="price-section-compact">
                      <div className="price-compact">{property.price}</div>
                      <div className="price-unit-compact">₹25,000/sq.ft</div>
                    </div>
                    <Button 
                      type="primary" 
                      size="small"
                      icon={<EyeOutlined />}
                      className="view-button-compact"
                    >
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Scroll Indicators */}
        <div className="scroll-indicators">
          {properties.map((_, index) => (
            <button
              key={index}
              className={`scroll-dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;