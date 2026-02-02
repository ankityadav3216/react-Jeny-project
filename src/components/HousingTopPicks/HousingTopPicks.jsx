import React from "react";
import { Button, Tag } from "antd";
import {
  EnvironmentOutlined,
  StarFilled,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./HousingTopPicks.css";

const HousingTopPicks = () => {
  const navigate = useNavigate();

  const properties = [
    {
      id: 1,
      title: "Casagrand Casamia",
      location: "Pallavaram, Chennai South",
      price: "₹59 L – ₹1.58 Cr",
      area: "1200 – 2100 sqft",
      bedrooms: "2, 3 & 4 BHK",
      rating: 4.7,
      reviews: 156,
      builder: "Casagrand Builder Pvt Ltd",
      image: "https://cdn.wallpapersafari.com/10/49/fb1EPZ.jpg",
      amenities: ["Swimming Pool", "Gym", "24x7 Security"],
    },
    {
      id: 2,
      title: "Prestige High Fields",
      location: "Whitefield, Bangalore",
      price: "₹1.2 Cr – ₹2.5 Cr",
      area: "1450 – 2800 sqft",
      bedrooms: "3 & 4 BHK",
      rating: 4.9,
      reviews: 89,
      builder: "Prestige Group",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["Clubhouse", "Park", "Power Backup"],
    },
    {
      id: 3,
      title: "Godrej Platinum",
      location: "Vikhroli, Mumbai",
      price: "₹2.8 Cr – ₹4.5 Cr",
      area: "1650 – 3200 sqft",
      bedrooms: "3, 4 & 5 BHK",
      rating: 4.8,
      reviews: 234,
      builder: "Godrej Properties",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["Tennis Court", "Kids Play", "Jogging Track"],
    },
    {
      id: 4,
      title: "Sobha Dream Acres",
      location: "Sarjapur Road, Bangalore",
      price: "₹95 L – ₹1.8 Cr",
      area: "1100 – 1950 sqft",
      bedrooms: "2, 3 & 4 BHK",
      rating: 4.6,
      reviews: 178,
      builder: "Sobha Limited",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["Swimming Pool", "Gym", "Indoor Games"],
    },
    {
      id: 5,
      title: "Lodha Bellissimo",
      location: "Thane, Mumbai",
      price: "₹1.8 Cr – ₹3.2 Cr",
      area: "1350 – 2600 sqft",
      bedrooms: "3 & 4 BHK",
      rating: 4.7,
      reviews: 112,
      builder: "Lodha Group",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["Sky Deck", "Infinity Pool", "Concierge"],
    },
  ];

  const goToDetails = (id) => {
    navigate(`/property/${id}`);
  };

  return (
    <div className="housing-wrapper">
      <div className="housing-header">
        <h2>Housing's Top Picks</h2>
        <p>Curated properties matching your preferences</p>
      </div>

      <div className="housing-cards-container">
        {properties.map((property) => (
          <div className="housing-card" key={property.id}>
            <div className="housing-flex">
              {/* LEFT */}
              <div className="housing-left">
                <div className="builder-row">
                  <CheckCircleOutlined />
                  <h4>{property.builder}</h4>
                </div>

                <span 
                  className="view-projects" 
                  onClick={() => goToDetails(property.id)}
                >
                  View Projects
                </span>

                <h3 
                  className="project-title" 
                  onClick={() => goToDetails(property.id)}
                >
                  {property.title}
                </h3>

                <div className="location">
                  <EnvironmentOutlined /> {property.location}
                </div>

                <div className="rating-row">
                  <StarFilled />
                  <span>{property.rating}</span>
                  <span className="reviews">({property.reviews} reviews)</span>
                </div>

                <div className="price">{property.price}</div>
                <div className="bhk">
                  {property.bedrooms} • {property.area}
                </div>

                <div className="tag-row">
                  {property.amenities.map((item, i) => (
                    <Tag key={i} className="blue-tag">
                      {item}
                    </Tag>
                  ))}
                </div>

                <Button 
                  className="contact-btn"
                  type="primary" 
                  onClick={() => goToDetails(property.id)}
                >
                  Contact Builder
                </Button>
              </div>

              {/* RIGHT */}
              <div 
                className="housing-right" 
                onClick={() => goToDetails(property.id)}
              >
                <img src={property.image} alt={property.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HousingTopPicks;