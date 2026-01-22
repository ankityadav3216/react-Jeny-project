import React, { useRef, useState } from 'react';
import { Card, Button, Tag } from 'antd';
import { 
  CalendarOutlined,
  LeftOutlined,
  RightOutlined,
  ArrowRightOutlined,
  FireOutlined,
  HomeOutlined,
  DollarOutlined,
  SettingOutlined,
  BulbOutlined,
  ShopOutlined,
  FileTextOutlined,
  EyeOutlined
} from '@ant-design/icons';
import './NewsSection.css';

const NewsSection = () => {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const newsItems = [
    {
      id: 1,
      title: "Real Estate Market Sees 15% Growth",
      category: "Market Trends",
      date: "Dec 15, 2024",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=180&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "New Affordable Housing Policy",
      category: "Govt Policy",
      date: "Dec 10, 2024",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=180&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "Luxury Apartment Sales Surge",
      category: "Luxury",
      date: "Dec 8, 2024",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300&h=180&fit=crop",
      featured: true
    },
    {
      id: 4,
      title: "Sustainable Building Materials",
      category: "Eco-friendly",
      date: "Dec 5, 2024",
      readTime: "3 min",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=180&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "Commercial Real Estate Recovery",
      category: "Commercial",
      date: "Dec 3, 2024",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=300&h=180&fit=crop",
      featured: true
    },
    {
      id: 6,
      title: "Interest Rates to Stabilize",
      category: "Finance",
      date: "Nov 28, 2024",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=180&fit=crop",
      featured: false
    },
    {
      id: 7,
      title: "Smart Homes Tech Trends",
      category: "Technology",
      date: "Nov 25, 2024",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=300&h=180&fit=crop",
      featured: true
    },
    {
      id: 8,
      title: "Rental Market 2024 Analysis",
      category: "Rental",
      date: "Nov 20, 2024",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=300&h=180&fit=crop",
      featured: false
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -260,
        behavior: 'smooth'
      });
      setCurrentIndex(prev => Math.max(0, prev - 1));
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 260,
        behavior: 'smooth'
      });
      setCurrentIndex(prev => Math.min(newsItems.length - 1, prev + 1));
    }
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Market Trends': return '📈';
      case 'Govt Policy': return '📜';
      case 'Luxury': return '💎';
      case 'Eco-friendly': return '🌿';
      case 'Commercial': return '🏢';
      case 'Finance': return '💰';
      case 'Technology': return '🤖';
      case 'Rental': return '🏠';
      default: return '📰';
    }
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Market Trends': return 'blue';
      case 'Govt Policy': return 'green';
      case 'Luxury': return 'gold';
      case 'Eco-friendly': return 'cyan';
      case 'Commercial': return 'purple';
      case 'Finance': return 'red';
      case 'Technology': return 'geekblue';
      case 'Rental': return 'orange';
      default: return 'default';
    }
  };

  return (
    <div className="news-section-compact">
      {/* Section Header */}
      <div className="news-header-compact">
        <div className="header-left-compact">
          <div className="news-header-icon-compact">
            <FileTextOutlined />
          </div>
          <div>
            <h2 className="news-section-title-compact">Real Estate News</h2>
            <p className="news-section-subtitle-compact">
              Latest updates and market insights
            </p>
          </div>
        </div>
        <div className="header-right-compact">
          <div className="navigation-arrows-compact">
            <button 
              className="arrow-btn-compact left-arrow-compact"
              onClick={scrollLeft}
              disabled={currentIndex === 0}
            >
              <LeftOutlined />
            </button>
            <button 
              className="arrow-btn-compact right-arrow-compact"
              onClick={scrollRight}
              disabled={currentIndex === newsItems.length - 1}
            >
              <RightOutlined />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="news-scroll-wrapper-compact">
        {/* Left Arrow */}
        <button 
          className="news-side-arrow-compact news-side-arrow-left-compact"
          onClick={scrollLeft}
          disabled={currentIndex === 0}
        >
          <LeftOutlined />
        </button>

        {/* News Horizontal Scroll */}
        <div 
          className="news-horizontal-scroll-compact"
          ref={scrollContainerRef}
        >
          {newsItems.map((news) => (
            <div key={news.id} className="news-card-compact">
              {/* News Image */}
              <div className="news-image-container-compact">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="news-image-compact"
                />
                {news.featured && (
                  <div className="featured-badge-compact">
                    <FireOutlined />
                    <span>HOT</span>
                  </div>
                )}
                <div className="category-tag-compact">
                  <Tag 
                    color={getCategoryColor(news.category)}
                    className="category-label-compact"
                  >
                    {getCategoryIcon(news.category)} {news.category}
                  </Tag>
                </div>
              </div>

              {/* News Content */}
              <div className="news-content-compact">
                <h3 className="news-title-compact">{news.title}</h3>
                
                {/* News Meta */}
                <div className="news-meta-compact">
                  <div className="meta-item-compact">
                    <CalendarOutlined />
                    <span>{news.date}</span>
                  </div>
                  <div className="meta-divider-compact"></div>
                  <div className="meta-item-compact">
                    <span>⏱️ {news.readTime}</span>
                  </div>
                </div>

                {/* Read Button */}
                <Button 
                  type="primary" 
                  className="read-btn-compact"
                  icon={<EyeOutlined />}
                  onClick={() => alert(`Reading: ${news.title}`)}
                  block
                >
                  Read Article
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          className="news-side-arrow-compact news-side-arrow-right-compact"
          onClick={scrollRight}
          disabled={currentIndex === newsItems.length - 1}
        >
          <RightOutlined />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="news-dots-indicator-compact">
        {newsItems.map((_, index) => (
          <div 
            key={index}
            className={`news-dot-compact ${currentIndex === index ? 'active' : ''}`}
            onClick={() => {
              if (scrollContainerRef.current) {
                const cardWidth = 250;
                scrollContainerRef.current.scrollTo({
                  left: index * cardWidth,
                  behavior: 'smooth'
                });
                setCurrentIndex(index);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;