import React, { useRef, useEffect } from "react";
import "./RecommendedSellers.css";

const sellers = [
  {
    name: "Locality Master",
    experience: "20 Yrs",
    properties: 5,
    location: ["Mira Road East"],
    image: "https://dummyimage.com/50x50/000/fff&text=LM",
  },
  {
    name: "Bhagyashree Estate",
    experience: "33 Yrs",
    properties: 23,
    location: ["Kandivali East"],
    image: "https://dummyimage.com/50x50/111/fff&text=B",
  },
  {
    name: "Shivshakti Properties",
    experience: "5 Yrs",
    properties: 40,
    location: ["Vikhroli East"],
    image: "https://dummyimage.com/50x50/888/fff&text=S",
  },
  {
    name: "Lotekar Realtors P",
    experience: "0.5 Yrs",
    properties: 42,
    location: ["Kandivali West"],
    image: "https://dummyimage.com/50x50/ff0000/fff&text=L",
  },
  {
    name: "Arise real estate a",
    experience: "15 Yrs",
    properties: 26,
    location: ["Andheri West", "Jogeshwari West"],
    image: "https://dummyimage.com/50x50/aaaa00/fff&text=A",
  },
  {
    name: "Sachin Bhilare",
    experience: "15 Yrs",
    properties: 63,
    location: ["Virar West", "Virar East"],
    image: "https://dummyimage.com/50x50/555/fff&text=S",
  },
  {
    name: "Prime Estates",
    experience: "10 Yrs",
    properties: 30,
    location: ["Goregaon East"],
    image: "https://dummyimage.com/50x50/0f0/fff&text=P",
  },
  {
    name: "Urban Realtors",
    experience: "12 Yrs",
    properties: 22,
    location: ["Chembur"],
    image: "https://dummyimage.com/50x50/00f/fff&text=U",
  },
];

const RecommendedSellers = () => {
  const containerRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;
    const scrollStep = 1;

    const interval = setInterval(() => {
      if (container) {
        scrollAmount += scrollStep;
        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0;
        }
        container.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    const container = containerRef.current;
    const scrollOffset = 300;
    if (direction === "left") {
      container.scrollBy({ left: -scrollOffset, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  return (
    <div className="recommended-sellers-section">
      <h2>Recommended Sellers</h2>
      <div className="rs-scroll-btn left" onClick={() => scroll("left")}>
        &#8592;
      </div>
      <div className="rs-scroll-btn right" onClick={() => scroll("right")}>
        &#8594;
      </div>

      <div className="recommended-sellers-container" ref={containerRef}>
        {sellers.map((seller, index) => (
          <div className="recommended-seller-card" key={index}>
            <div
              className="rs-seller-header"
              style={{ background: index % 2 === 0 ? "#3b3f5c" : "#1e3a5f" }}
            >
              <img src={seller.image} alt={seller.name} />
              <span>{seller.name} &gt;</span>
            </div>
            <div className="rs-seller-details">
              <p>
                <b>{seller.experience}</b> Experience | <b>{seller.properties}</b>{" "}
                Properties
              </p>
              <div className="rs-seller-location">
                {seller.location.map((loc, idx) => (
                  <span key={idx}>{loc}</span>
                ))}
              </div>
              <button>📞 Show Contact</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedSellers;
