import React, { useRef, useState, useEffect } from 'react';
import { Card, Button, Rate } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './FeaturedDevelopers.css';

// Custom SVG Icons - Blue Theme
const TrophyIcon = () => (
  <svg className="trophy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="building-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const LocationIcon = () => (
  <svg className="location-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M5 13l4 4L19 7" />
  </svg>
);

const VerifiedIcon = () => (
  <svg className="verified-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const FireIcon = () => (
  <svg className="fire-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
    <path d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
  </svg>
);

const featuredDevelopers = [
  {
    id: 1,
    companyLogo: '🏢',
    companyName: 'Godrej Properties',
    description: 'Premium luxury projects with 40+ years of excellence',
    rating: 4.8,
    totalProjects: 120,
    activeProjects: 15,
    location: 'Mumbai, Bangalore, Delhi',
    verified: true,
    established: 1976,
    tag: 'Premium'
  },
  {
    id: 2,
    companyLogo: '🏛️',
    companyName: 'Lodha Group',
    description: 'India\'s largest real estate developer by sales',
    rating: 4.7,
    totalProjects: 85,
    activeProjects: 22,
    location: 'Mumbai, Pune, Hyderabad',
    verified: true,
    established: 1980,
    tag: 'Trending'
  },
  {
    id: 3,
    companyLogo: '🌆',
    companyName: 'DLF Limited',
    description: 'Pioneer in modern township development',
    rating: 4.6,
    totalProjects: 250,
    activeProjects: 18,
    location: 'Delhi NCR, Gurgaon',
    verified: true,
    established: 1946,
    tag: 'Pioneer'
  },
  {
    id: 4,
    companyLogo: '🏘️',
    companyName: 'Prestige Group',
    description: 'South India\'s leading real estate developer',
    rating: 4.5,
    totalProjects: 180,
    activeProjects: 12,
    location: 'Bangalore, Chennai, Kochi',
    verified: true,
    established: 1986,
    tag: 'Elite'
  },
  {
    id: 5,
    companyLogo: '🏭',
    companyName: 'Sobha Limited',
    description: 'Known for quality construction and timely delivery',
    rating: 4.7,
    totalProjects: 95,
    activeProjects: 10,
    location: 'Bangalore, Chennai, Kerala',
    verified: true,
    established: 1995,
    tag: 'Quality'
  },
  {
    id: 6,
    companyLogo: '🏬',
    companyName: 'Brigade Group',
    description: 'Integrated property development company',
    rating: 4.4,
    totalProjects: 110,
    activeProjects: 8,
    location: 'Bangalore, Chennai, Hyderabad',
    verified: true,
    established: 1986,
    tag: 'Integrated'
  },
  {
    id: 7,
    companyLogo: '🏢',
    companyName: 'Mahindra Lifespaces',
    description: 'Sustainable living spaces developer',
    rating: 4.3,
    totalProjects: 75,
    activeProjects: 9,
    location: 'Mumbai, Pune, Chennai',
    verified: true,
    established: 1994,
    tag: 'Sustainable'
  },
  {
    id: 8,
    companyLogo: '🏛️',
    companyName: 'Shapoorji Pallonji',
    description: '150+ years of construction legacy',
    rating: 4.9,
    totalProjects: 300,
    activeProjects: 25,
    location: 'Pan India',
    verified: true,
    established: 1865,
    tag: 'Legacy'
  }
];

const FeaturedDevelopers = () => {
  const scrollContainerRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: 'smooth'
      });
      setAutoScroll(false);
      setTimeout(() => setAutoScroll(true), 5000);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: 'smooth'
      });
      setAutoScroll(false);
      setTimeout(() => setAutoScroll(true), 5000);
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    let interval;
    if (autoScroll && scrollContainerRef.current) {
      interval = setInterval(() => {
        if (scrollContainerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
          
          // If we've reached the end, scroll back to start
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            scrollContainerRef.current.scrollTo({
              left: 0,
              behavior: 'smooth'
            });
            setCurrentIndex(0);
          } else {
            scrollContainerRef.current.scrollBy({
              left: 320,
              behavior: 'smooth'
            });
            setCurrentIndex(prev => (prev + 1) % featuredDevelopers.length);
          }
        }
      }, 3000); // Scroll every 3 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoScroll]);

  // Handle scroll to update current index
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth } = scrollContainerRef.current;
      const cardWidth = 320; // Approximate card width including gap
      const index = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(Math.min(index, featuredDevelopers.length - 1));
      setAutoScroll(false);
      setTimeout(() => setAutoScroll(true), 5000);
    }
  };

  return (
    <div className="featured-developers">
      
      {/* Header - Left aligned */}
      <div className="header-container">
        <div className="header-left">
          <h2 className="title">
            <span className="trophy-icon-wrapper"><TrophyIcon /></span>
            Featured Developers
          </h2>
          <p className="subtitle">
            Top real estate developers with proven track records
          </p>
        </div>
      </div>

      {/* Cards Section with Scroll Buttons */}
      <div className="cards-full-width-section">
        {/* Left Scroll Button */}
        <button className="scroll-button scroll-button-left" onClick={scrollLeft}>
          <LeftOutlined />
        </button>

        {/* Cards Container */}
        <div 
          className="cards-scroll-container" 
          ref={scrollContainerRef}
          onScroll={handleScroll}
        >
          <div className="cards-scroll-wrapper">
            {featuredDevelopers.map((developer) => (
              <div className="card-item" key={developer.id}>
                <Card className="developer-card">
                  {/* Company Header */}
                  <div className="company-header">
                    <div className="logo-box">
                      {developer.companyLogo}
                    </div>
                    <div className="company-details">
                      <div className="company-title-row">
                        <h3 className="company-title">
                          {developer.companyName}
                        </h3>
                        {developer.verified && <VerifiedIcon />}
                      </div>
                      <span className="tag-badge">
                        {developer.tag === 'Trending' && <FireIcon />}
                        {developer.tag}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="description-text">
                    {developer.description}
                  </p>

                  {/* Rating */}
                  <div className="rating-section">
                    <Rate 
                      disabled 
                      defaultValue={developer.rating} 
                      allowHalf 
                      className="rating-stars"
                    />
                    <span className="rating-number">
                      {developer.rating}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="stats-grid">
                    <div className="stat-card">
                      <div className="stat-title">
                        <BuildingIcon />
                        <span>Total Projects</span>
                      </div>
                      <div className="stat-value">{developer.totalProjects}+</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-title">
                        <CheckIcon />
                        <span>Active Projects</span>
                      </div>
                      <div className="stat-value">{developer.activeProjects}</div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="location-section">
                    <LocationIcon />
                    <span className="location-name">{developer.location}</span>
                  </div>

                  {/* Action Button */}
                  <Button className="action-button">
                    View Projects
                  </Button>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Right Scroll Button */}
        <button className="scroll-button scroll-button-right" onClick={scrollRight}>
          <RightOutlined />
        </button>

        {/* Scroll Dots */}
        <div className="scroll-dots">
          {featuredDevelopers.slice(0, Math.min(6, featuredDevelopers.length)).map((_, index) => (
            <div 
              key={index} 
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollTo({
                    left: index * 320,
                    behavior: 'smooth'
                  });
                  setCurrentIndex(index);
                  setAutoScroll(false);
                  setTimeout(() => setAutoScroll(true), 5000);
                }
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedDevelopers;