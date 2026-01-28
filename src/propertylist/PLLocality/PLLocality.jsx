import React, { useRef, useEffect } from "react";
import "./PLLocality.css";

const localityData = [
  { name: "Mira Road East", rating: 4.78, people: 34, price: "₹11,557", change: "+12.62%", trend: "up" },
  { name: "Panvel", rating: 4.49, people: 29, price: "₹8,499", change: "+5.28%", trend: "up" },
  { name: "Kurla East", rating: 4.7, people: 13, price: "₹19,677", change: "+8.35%", trend: "up" },
  { name: "Saki Naka", rating: 4.25, people: 11, price: "₹19,685", change: "+3.91%", trend: "up" },
  { name: "Kharghar", rating: 4.54, people: 53, price: "₹10,885", change: "+11.14%", trend: "up" },
  { name: "Kurla West", rating: 4.28, people: 19, price: "₹19,573", change: "+4.13%", trend: "up" },
  { name: "Santacruz East", rating: 4.57, people: 23, price: "₹26,716", change: "+4.03%", trend: "up" },
  { name: "Vidyavihar", rating: 4.1, people: 9, price: "₹15,337", change: "-29.19%", trend: "down" },
];

const PopularLocality = () => {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  // AUTO SCROLL (Desktop + Mobile)
  useEffect(() => {
    const container = scrollRef.current;
    let direction = 1;

    intervalRef.current = setInterval(() => {
      if (!container) return;

      container.scrollLeft += direction;

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        direction = -1;
      }

      if (container.scrollLeft <= 0) {
        direction = 1;
      }
    }, 20);

    return () => clearInterval(intervalRef.current);
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <div className="locality-section">
      <h2 className="section-title">Popular Locality for sale in Mumbai</h2>

      <div className="locality-scroll-wrapper">
        <button className="scroll-btn left" onClick={scrollLeft}>‹</button>

        <div className="locality-scroll" ref={scrollRef}>
          {localityData.map((item, index) => (
            <div className="locality-card" key={index}>
              <div className="locality-header">
                <h3>{item.name}</h3>
                <div className="rating">{item.rating} ⭐</div>
              </div>

              <p className="people-text">
                {item.people} people rated this locality
              </p>

              <div className="price-box">
                <div className="price">
                  <strong>{item.price}</strong>
                  <span>Avg. Price per sq.ft</span>
                </div>

                <div className={`trend ${item.trend}`}>
                  {item.trend === "up" ? "▲" : "▼"} {item.change}
                  <span>
                    {item.trend === "up"
                      ? "Rise in last 1 Year"
                      : "Fall in last 1 Year"}
                  </span>
                </div>
              </div>

              <a href="#" className="locality-link">
                Flats in {item.name} →
              </a>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>›</button>
      </div>
    </div>
  );
};

export default PopularLocality;
