import React, { useRef, useEffect, useState } from "react";
import "./PLTopproject.css";

const projects = [
  {
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
    name: "CCI Rivali Park",
    type: "2, 3 BHK Apartment",
    location: "Borivali",
    price: "₹2.1 Cr - 5.61 Cr",
  },
  {
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
    name: "Orchid Villas",
    type: "1, 2 BHK Villas",
    location: "Naigaon East",
    price: "₹77.94 L - 1.18 Cr",
  },
  {
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
    name: "Lodha Riservo",
    type: "3, 3.5 BHK",
    location: "Vikhroli East",
    price: "₹4.04 Cr - 4.36 Cr",
  },
  {
    img: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
    name: "Trupti Bungalows",
    type: "2 BHK Villa",
    location: "Thane West",
    price: "₹2.3 Cr",
  },
  {
    img: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
    name: "Aaradhya One",
    type: "2, 3 BHK",
    location: "Santacruz West",
    price: "₹3.2 Cr",
  },
  {
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
    name: "Serene Heights",
    type: "1, 2 BHK",
    location: "Andheri East",
    price: "₹1.8 Cr - 2.5 Cr",
  },
  {
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
    name: "Royal Palms",
    type: "3 BHK Villas",
    location: "Malad West",
    price: "₹4.5 Cr - 6.2 Cr",
  },
  {
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
    name: "Green Valley",
    type: "2, 3 BHK",
    location: "Goregaon East",
    price: "₹2.8 Cr - 3.9 Cr",
  },
  {
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
    name: "Ocean View",
    type: "3, 4 BHK",
    location: "Worli",
    price: "₹5.2 Cr - 8.7 Cr",
  },
  {
    img: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
    name: "Skyline Residency",
    type: "2 BHK",
    location: "Powai",
    price: "₹3.5 Cr - 4.8 Cr",
  },
  {
    img: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
    name: "Prestige Gardens",
    type: "1, 2 BHK",
    location: "Bandra West",
    price: "₹6.1 Cr - 9.3 Cr",
  },
  {
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
    name: "Urban Nest",
    type: "Studio, 1 BHK",
    location: "Lower Parel",
    price: "₹1.2 Cr - 2.1 Cr",
  },
  {
    img: "https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
    name: "Maple Woods",
    type: "2 BHK Apartments",
    location: "Kandivali",
    price: "₹1.5 Cr - 2.2 Cr",
  },
  {
    img: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
    name: "Sunrise Towers",
    type: "3 BHK",
    location: "Dadar",
    price: "₹4.8 Cr - 6.5 Cr",
  },
  {
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
    name: "Palm Grove",
    type: "4 BHK Villas",
    location: "Juhu",
    price: "₹7.2 Cr - 10.5 Cr",
  },
];

const PLTopProjects = () => {
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const autoScrollInterval = useRef(null);

  // Start auto-scroll
  const startAutoScroll = () => {
    if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
    
    autoScrollInterval.current = setInterval(() => {
      const container = scrollContainerRef.current;
      if (!container) return;
      
      // Check if we've reached the end
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const currentScrollLeft = container.scrollLeft;
      
      if (currentScrollLeft >= maxScrollLeft - 10) {
        // If at end, reset to start
        container.scrollTo({ left: 0, behavior: 'smooth' });
        setIsAtEnd(false);
      } else {
        // Otherwise scroll by one card width (160px + 10px gap)
        container.scrollBy({ left: 170, behavior: 'smooth' });
        setIsAtEnd(false);
      }
    }, 2500); // Scroll every 2.5 seconds
  };

  // Handle manual scroll
  const handleManualScroll = () => {
    setIsAutoScrolling(false);
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }
    
    // Check if we're at the end
    const container = scrollContainerRef.current;
    if (container) {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const currentScrollLeft = container.scrollLeft;
      setIsAtEnd(currentScrollLeft >= maxScrollLeft - 10);
    }
  };

  // Restart auto-scroll after 8 seconds of inactivity
  const handleMouseLeave = () => {
    if (!isAutoScrolling) {
      setTimeout(() => {
        setIsAutoScrolling(true);
        startAutoScroll();
      }, 8000);
    }
  };

  // Manually go to next set of cards
  const handleNextClick = () => {
    const container = scrollContainerRef.current;
    if (container) {
      // Scroll by approximately 5 cards (5 * 170 = 850)
      container.scrollBy({ left: 850, behavior: 'smooth' });
      handleManualScroll();
    }
  };

  // Initialize auto-scroll on component mount
  useEffect(() => {
    startAutoScroll();
    
    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, []);

  return (
    <div className="tp-wrapper">
      <div className="tp-header">
        <h2 className="tp-heading">Top Projects for Sale in Mumbai</h2>
        <div className="tp-auto-scroll-indicator">
          <span className={isAutoScrolling ? "active" : ""}>
            {isAutoScrolling ? "🔵 Auto" : "⏸️ Paused"}
          </span>
        </div>
      </div>

      <div 
        className="tp-scroll" 
        ref={scrollContainerRef}
        onScroll={handleManualScroll}
        onMouseEnter={handleManualScroll}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleManualScroll}
      >
        {projects.map((item, index) => (
          <div className="tp-card" key={index}>
            <img 
              src={item.img} 
              alt={item.name} 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80";
              }}
            />

            <div className="tp-overlay">
              <h3>{item.name}</h3>
              <p>{item.type}</p>
              <p>{item.location}</p>
              <span>{item.price}</span>
            </div>
          </div>
        ))}

        {/* END BUTTON - Only show when not at the end */}
        {!isAtEnd && (
          <div className="tp-next-btn" onClick={handleNextClick}>
            <span>›</span>
          </div>
        )}
      </div>

      <div className="tp-scroll-indicator">
        <div className="tp-dots">
          {[0, 1, 2, 3].map((dot) => (
            <div 
              key={dot} 
              className="tp-dot" 
              onClick={() => {
                const container = scrollContainerRef.current;
                if (container) {
                  // Scroll to section based on dot index
                  const scrollAmount = dot * (container.clientWidth * 0.9);
                  container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
                  handleManualScroll();
                }
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PLTopProjects;