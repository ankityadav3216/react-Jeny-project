import React, { useRef } from 'react';
import { Button, Tag } from 'antd';
import { 
  StarFilled, 
  EnvironmentOutlined, 
  HomeOutlined,
  RightOutlined,
  LeftOutlined,
  HeartOutlined,
  EyeOutlined,
  CheckCircleOutlined,
  FireFilled
} from '@ant-design/icons';
import './TopHighlightedProjects.css';

const TopHighlightedProjects = () => {
  const scrollRef = useRef(null);
  const [likedCards, setLikedCards] = React.useState({});

  const projects = [
    {
      id: 1,
      title: "Jains Fairmount The ARC",
      developer: "Jain Constructions",
      type: "2,3 BHK",
      location: "Dundigal, Hyderabad",
      price: "₹75.02 L",
      badge: "TOP PICK",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=280&h=180&fit=crop",
      rating: 4.5,
      featured: true
    },
    {
      id: 2,
      title: "Square Dynasty",
      developer: "Square Housing",
      type: "Residential Plots",
      location: "Mahabalipuram",
      price: "₹45.58 L",
      badge: "TRENDING",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=280&h=180&fit=crop",
      rating: 4.2,
      featured: false
    },
    {
      id: 3,
      title: "Royal Palm Heights",
      developer: "Royal Builders",
      type: "3,4 BHK",
      location: "Whitefield",
      price: "₹2.5 Cr",
      badge: "PREMIUM",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=280&h=180&fit=crop",
      rating: 4.7,
      featured: true
    },
    {
      id: 4,
      title: "Ocean View Residency",
      developer: "Marine Constructions",
      type: "2,3 BHK",
      location: "Worli Sea Face",
      price: "₹3.8 Cr",
      badge: "LUXURY",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=280&h=180&fit=crop",
      rating: 4.6,
      featured: false
    },
    {
      id: 5,
      title: "Elite Gardens",
      developer: "Elite Developers",
      type: "2,3 BHK",
      location: "Gurgaon",
      price: "₹1.8 Cr",
      badge: "TOP PICK",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=280&h=180&fit=crop",
      rating: 4.8,
      featured: true
    },
    {
      id: 6,
      title: "Palm Paradise",
      developer: "Green Valley",
      type: "3,4 BHK",
      location: "Goa",
      price: "₹4.2 Cr",
      badge: "PREMIUM",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=280&h=180&fit=crop",
      rating: 4.9,
      featured: false
    }
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const toggleLike = (id) => {
    setLikedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="compact-highlighted-projects">
      {/* Header */}
      <div className="compact-header">
        <div className="compact-title-section">
          <h2 className="compact-title">Top Highlighted Projects</h2>
          <p className="compact-subtitle">Noteworthy projects to watch</p>
        </div>
        
        <div className="compact-controls">
          <div className="compact-scroll-buttons">
            <button className="compact-nav-btn" onClick={scrollLeft}>
              <LeftOutlined />
            </button>
            <button className="compact-nav-btn" onClick={scrollRight}>
              <RightOutlined />
            </button>
          </div>
          <Button 
            type="link" 
            className="compact-view-all"
          >
            View all →
          </Button>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="compact-scroll-wrapper">
        <div className="compact-scroll-container" ref={scrollRef}>
          {projects.map((project) => (
            <div key={project.id} className="compact-project-card">
              {/* Card */}
              <div className="compact-card">
                {/* Image */}
                <div className="compact-image-section">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="compact-image"
                  />
                  
                  {/* Badges */}
                  <div className="compact-badges">
                    <span className="badge-compact" style={{
                      background: project.badge === 'TOP PICK' ? 
                        'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)' :
                        project.badge === 'TRENDING' ? 
                        'linear-gradient(135deg, #FF4500 0%, #FF0000 100%)' :
                        project.badge === 'PREMIUM' ? 
                        'linear-gradient(135deg, #8A2BE2 0%, #9370DB 100%)' :
                        'linear-gradient(135deg, #4169E1 0%, #6495ED 100%)'
                    }}>
                      {project.badge}
                    </span>
                    
                    {project.featured && (
                      <span className="featured-compact">
                        <FireFilled /> FEATURED
                      </span>
                    )}
                    
                    <button 
                      className="like-btn-compact"
                      onClick={() => toggleLike(project.id)}
                    >
                      {likedCards[project.id] ? (
                        <HeartFilled style={{ color: '#FF4500', fontSize: '16px' }} />
                      ) : (
                        <HeartOutlined style={{ fontSize: '16px' }} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="compact-details">
                  {/* Title and Rating */}
                  <div className="compact-title-rating">
                    <h3 className="project-title-compact">{project.title}</h3>
                    <div className="rating-compact">
                      <StarFilled className="star-compact" />
                      <span className="rating-value-compact">{project.rating}</span>
                    </div>
                  </div>

                  {/* Developer */}
                  <div className="developer-compact">
                    <span className="developer-label">by</span>
                    <span className="developer-name">{project.developer}</span>
                  </div>

                  {/* Type and Location */}
                  <div className="type-location-compact">
                    <div className="type-compact">
                      <HomeOutlined className="type-icon" />
                      <span>{project.type}</span>
                    </div>
                    <div className="location-compact">
                      <EnvironmentOutlined className="location-icon" />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="quick-info-compact">
                    <div className="info-item-compact">
                      <CheckCircleOutlined className="info-icon" />
                      <span className="info-text">Ready to Move</span>
                    </div>
                  </div>

                  {/* Price and Action */}
                  <div className="price-action-compact">
                    <div className="price-compact">
                      <div className="price-value-compact">{project.price}</div>
                      <div className="price-label-compact">Onwards</div>
                    </div>
                    <Button 
                      type="primary"
                      size="small"
                      className="view-btn-compact"
                    >
                      <EyeOutlined /> View
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="compact-dots">
        {projects.map((_, index) => (
          <div key={index} className="compact-dot"></div>
        ))}
      </div>
    </div>
  );
};

export default TopHighlightedProjects;