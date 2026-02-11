import React, { useState } from "react";
import "./HServices.css";

const servicesData = [
  {
    number: "01",
    title: "Easy To Rent",
    description:
      "Seamless rental process with verified listings and transparent documentation.",
    more: "We ensure complete assistance from property search to final agreement signing.",
    icon: "https://cdn-icons-png.flaticon.com/128/847/847969.png"
  },
  {
    number: "02",
    title: "Carefully Crafted",
    description:
      "Each property is thoughtfully designed with premium quality standards.",
    more: "Attention to detail ensures aesthetic appeal and functional excellence.",
    icon: "https://cdn-icons-png.flaticon.com/128/619/619034.png"
  },
  {
    number: "03",
    title: "Inbuilt Wardrobe",
    description:
      "Modern homes with spacious inbuilt wardrobes for organized living.",
    more: "Smart storage solutions designed for maximum efficiency.",
    icon: "https://cdn-icons-png.flaticon.com/128/888/888879.png"
  },
  {
    number: "04",
    title: "Lavish Greenery",
    description:
      "Beautiful landscaped surroundings to promote peaceful living.",
    more: "Green zones and eco-friendly planning enhance lifestyle quality.",
    icon: "https://cdn-icons-png.flaticon.com/128/427/427735.png"
  },
  {
    number: "05",
    title: "Spacious Outdoor",
    description:
      "Large balconies and outdoor areas for relaxation and gatherings.",
    more: "Designed to provide natural light and ventilation.",
    icon: "https://cdn-icons-png.flaticon.com/128/3524/3524659.png"
  },
  {
    number: "06",
    title: "Planned Construction",
    description:
      "Strategically planned architecture ensuring durability and elegance.",
    more: "Built using modern engineering standards and safety measures.",
    icon: "https://cdn-icons-png.flaticon.com/128/1046/1046784.png"
  }
];

const HServices = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="hservices-section">
      <h2 className="hservices-title">
        Exemplary Design: An Exhibition of <br />
        Excellence and Artistry
      </h2>

      <div className="hservices-grid">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="hservice-card"
            onClick={() => toggleCard(index)}
          >
            {/* Content Section (Left) */}
            <div className="hservice-content">
              <h3>
                <span className="hservice-number">{service.number}</span>
                {service.title}
              </h3>
              <p>{service.description}</p>
              {activeIndex === index && (
                <div className="hservice-more">
                  <p>{service.more}</p>
                </div>
              )}
            </div>

            {/* Logo/Icon Section (Right) */}
            <div className="hservice-icon">
              <img src={service.icon} alt={service.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HServices;
