import React, { useRef, useEffect } from "react";
import "./PLResaleProjects.css";

const resaleData = [
  {
    name: "CCI Rivali Park Resale Flats",
    location: "Food Corporation Of India Warehouse, Goregaon East",
    config: "2, 3 BHK Apartment, Penthouses",
    price: "2.1 Cr - 5.61 Cr",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Avant Heritage Resale Flats",
    location: "Samarth Nagar, Jogeshwari East, Mumbai",
    config: "1, 2 BHK Apartments",
    price: "1.05 Cr - 1.82 Cr",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Godrej The Trees Resale Flats",
    location: "Pirojshanagar, Vikhroli East, Mumbai",
    config: "2, 3, 4 BHK Apartment, Penthouses",
    price: "2.72 Cr - 9.16 Cr",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dheeraj Insignia Resale Flats",
    location: "Bandra Kurla Complex, Santacruz East",
    config: "3, 3.5, 4 BHK Apartments",
    price: "9.08 Cr",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Lodha Bellissimo Resale",
    location: "Worli, Mumbai",
    config: "3, 4 BHK Apartments",
    price: "4.5 Cr - 8.2 Cr",
    image:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Raheja Vivarea Resale",
    location: "Vile Parle East, Mumbai",
    config: "2, 3 BHK Apartments",
    price: "2.8 Cr - 4.3 Cr",
    image:
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hiranandani Meadows Resale",
    location: "Powai, Mumbai",
    config: "3, 4 BHK Apartments",
    price: "3.2 Cr - 6.5 Cr",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Omkar Alta Monte Resale",
    location: "Malad West, Mumbai",
    config: "2, 3, 4 BHK Apartments",
    price: "2.9 Cr - 5.8 Cr",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const ResaleProjects = () => {
  const scrollRef = useRef(null);
  const autoScrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  /* 🔥 AUTO SCROLL */
  useEffect(() => {
    autoScrollRef.current = setInterval(() => {
      if (!scrollRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      if (scrollLeft + clientWidth >= scrollWidth - 5) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: 1, behavior: "smooth" });
      }
    }, 20); // speed control (lower = faster)

    return () => clearInterval(autoScrollRef.current);
  }, []);

  return (
    <div className="resale-section">
      <h2>Resale Projects in Mumbai</h2>

      <div
        className="resale-wrapper"
        onMouseEnter={() => clearInterval(autoScrollRef.current)}
        onMouseLeave={() => {
          autoScrollRef.current = setInterval(() => {
            if (!scrollRef.current) return;

            const { scrollLeft, scrollWidth, clientWidth } =
              scrollRef.current;

            if (scrollLeft + clientWidth >= scrollWidth - 5) {
              scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
            } else {
              scrollRef.current.scrollBy({ left: 1, behavior: "smooth" });
            }
          }, 20);
        }}
      >
        <button className="scroll-btn left" onClick={scrollLeft}>
          ❮
        </button>

        <div className="resale-scroll" ref={scrollRef}>
          {resaleData.map((item, index) => (
            <div className="resale-card" key={index}>
              <div className="image-container">
                <img
                  src={item.image}
                  alt={item.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="price-badge">{item.price}</div>
              </div>
              <h3>{item.name}</h3>
              <p className="location">{item.location}</p>
              <p className="config">{item.config}</p>
              <button className="enquire-btn">Enquire Now</button>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default ResaleProjects;
