import React, { useRef, useState, useEffect } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./RecommendedSellers.css";

const RecommendedSellers = () => {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  const sellers = [
    { id: 1, name: "Housing Star ES", company: "MS Developers", experience: "13 Yrs", properties: "13", rating: 4.8 },
    { id: 2, name: "Avail Pataluran", company: "Elite Properties", experience: "7 Yrs", properties: "114", rating: 4.9 },
    { id: 3, name: "PropExpert Pro", company: "Dream Homes", experience: "9 Yrs", properties: "87", rating: 4.7 },
    { id: 4, name: "Realty Masters", company: "Prime Constructions", experience: "11 Yrs", properties: "156", rating: 4.9 },
    { id: 5, name: "HomeConnect", company: "Urban Spaces", experience: "5 Yrs", properties: "42", rating: 4.6 },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.firstChild?.offsetWidth || 260;
      scrollContainerRef.current.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
      setAutoScroll(false);
      setTimeout(() => setAutoScroll(true), 5000);
      setCurrentIndex(prev => prev > 0 ? prev - 1 : sellers.length - 1);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.firstChild?.offsetWidth || 260;
      scrollContainerRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
      setAutoScroll(false);
      setTimeout(() => setAutoScroll(true), 5000);
      setCurrentIndex(prev => (prev + 1) % sellers.length);
    }
  };

  /* 🔥 AUTO SCROLL */
  useEffect(() => {
    let interval;
    if (autoScroll && scrollContainerRef.current) {
      interval = setInterval(() => {
        if (!scrollContainerRef.current) return;

        const cardWidth = scrollContainerRef.current.firstChild?.offsetWidth || 260;
        const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;

        if (scrollContainerRef.current.scrollLeft >= maxScroll - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
          setCurrentIndex(0);
        } else {
          scrollContainerRef.current.scrollBy({
            left: cardWidth,
            behavior: "smooth",
          });
          setCurrentIndex((prev) => (prev + 1) % sellers.length);
        }
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoScroll, sellers.length]);

  return (
    <section className="recommended-sellers-section">
      {/* HEADER - Left aligned */}
      <div className="section-header">
        <h2 className="section-title">Recommended Sellers</h2>
        <p className="section-subtitle">
          Sellers with complete knowledge about locality
        </p>
      </div>

      {/* SCROLL CONTAINER WITH BUTTONS */}
      <div className="horizontal-scroll-container">
        {/* Left Scroll Button */}
        <button className="scroll-button scroll-button-left" onClick={scrollLeft}>
          <LeftOutlined />
        </button>

        {/* Scroll Container */}
        <div className="sellers-horizontal-scroll" ref={scrollContainerRef}>
          {sellers.map((seller) => (
            <div className="seller-card-horizontal" key={seller.id}>
              <h3 className="seller-name">{seller.name}</h3>
              <p className="seller-company">{seller.company}</p>

              <div className="seller-stats">
                <span>{seller.experience} Experience</span>
                <span>{seller.properties} Properties</span>
              </div>

              <div className="rating">⭐ {seller.rating}</div>

              <button className="contact-btn">Show Contact</button>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button className="scroll-button scroll-button-right" onClick={scrollRight}>
          <RightOutlined />
        </button>
      </div>

      {/* Scroll Dots */}
      <div className="scroll-dots">
        {sellers.map((_, index) => (
          <div 
            key={index} 
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              if (scrollContainerRef.current) {
                const cardWidth = scrollContainerRef.current.firstChild?.offsetWidth || 260;
                scrollContainerRef.current.scrollTo({
                  left: index * cardWidth,
                  behavior: "smooth"
                });
                setCurrentIndex(index);
                setAutoScroll(false);
                setTimeout(() => setAutoScroll(true), 5000);
              }
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedSellers;