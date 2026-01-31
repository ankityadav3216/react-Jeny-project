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

  const property = {
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
  };

  const goToDetails = () => {
    navigate(`/property/${property.id}`);
  };

  return (
    <div className="housing-wrapper">
      {/* Header */}
      <div className="housing-header">
        <h2>Housing's Top Picks</h2>
        <p>Curated properties matching your preferences</p>
      </div>

      {/* Card */}
      <div className="housing-card">
        <div className="housing-flex">
          {/* LEFT */}
          <div className="housing-left">
            <div className="builder-row">
              <CheckCircleOutlined />
              <h4>{property.builder}</h4>
            </div>

            {/* View Projects → navigate */}
            <div className="view-projects" onClick={goToDetails}>
              View Projects
            </div>

            {/* Title → navigate */}
            <h3
              className="project-title"
              onClick={goToDetails}
              style={{ cursor: "pointer" }}
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

            {/* Contact button → navigate */}
            <div className="action-row">
              <Button type="primary" onClick={goToDetails}>
                Contact Builder
              </Button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="housing-right" onClick={goToDetails}>
            <img src={property.image} alt={property.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousingTopPicks;
