import React from "react";
import { Card, Button, Tag } from "antd";
import { 
  StarFilled, 
  EnvironmentOutlined, 
  PhoneOutlined,
  HomeOutlined
} from "@ant-design/icons";
import "./FeaturedDevelopers.css";

const developers = [
  {
    name: "Majestique Landmarks",
    year: 2002,
    projects: 111,
    desc: "Majestique Landmarks is committed to crafting spaces that transcend the ordinary.",
    logo: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=80&h=80&fit=crop&crop=center",
    projectImg: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=300&h=180&fit=crop",
    projectName: "Evolvus Phase I",
    location: "Kharadi, Pune",
    price: "₹1.38 Cr - 2.69 Cr",
    rating: 4.8,
    tags: ["Luxury", "Premium"],
  },
  {
    name: "Premier Housing & Properties",
    year: 2008,
    projects: 49,
    desc: "Premier Housing & Properties is a company developing real assets over a decade.",
    logo: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=80&h=80&fit=crop&crop=center",
    projectImg: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=300&h=180&fit=crop",
    projectName: "Premier JJS Ashok Nagar",
    location: "Sriperumbudur, Chennai",
    price: "₹26.46 L - 79.38 L",
    rating: 4.5,
    tags: ["Affordable", "RERA"],
  },
  {
    name: "Asset Tree Homes",
    year: 2008,
    projects: 47,
    desc: "Asset Tree Homes has delivered multiple residential projects across Chennai.",
    logo: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=80&h=80&fit=crop&crop=center",
    projectImg: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=300&h=180&fit=crop",
    projectName: "ATH Ananterra",
    location: "Madambakkam, Chennai",
    price: "₹1.21 Cr - 2.18 Cr",
    rating: 4.3,
    tags: ["Value", "South Chennai"],
  },
  {
    name: "Prestige Group",
    year: 1986,
    projects: 100,
    desc: "Prestige Group is one of India's leading developers.",
    logo: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=80&h=80&fit=crop&crop=center",
    projectImg: "https://chadwick-homes.com/wp-content/uploads/2020/10/chadwick-custom-homes-lake-conroe-min-1.jpg",
    projectName: "Prestige City",
    location: "Bangalore",
    price: "₹85 L onwards",
    rating: 4.9,
    tags: ["Ultra Luxury", "Awarded"],
  },
  {
    name: "Godrej Properties",
    year: 1990,
    projects: 85,
    desc: "Godrej Properties brings trust & innovation together.",
    logo: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=80&h=80&fit=crop&crop=center",
    projectImg: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=180&fit=crop",
    projectName: "Godrej Park Greens",
    location: "Pune",
    price: "₹72 L onwards",
    rating: 4.7,
    tags: ["Green Homes", "Premium"],
  },
  {
    name: "DLF Limited",
    year: 1946,
    projects: 200,
    desc: "India's largest real estate developer with iconic projects.",
    logo: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=80&h=80&fit=crop&crop=center",
    projectImg: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300&h=180&fit=crop",
    projectName: "DLF Camellias",
    location: "Gurgaon, Delhi",
    price: "₹5 Cr onwards",
    rating: 4.8,
    tags: ["Iconic", "Commercial"],
  },
];

const FeaturedDevelopers = () => {
  return (
    <div className="fd-wrapper">
      <div className="fd-header-section">
        <h2>Featured Developers</h2>
        <p className="fd-subtitle">Prominent real-estate builders</p>
      </div>

      <div className="fd-scroll">
        {developers.map((item, index) => (
          <Card key={index} className="fd-card" bordered={false}>
            {/* Header */}
            <div className="fd-header">
              <div className="fd-logo-container">
                <img src={item.logo} alt="logo" className="fd-logo" />
              </div>
              <div className="fd-header-content">
                <h4>{item.name}</h4>
                <div className="fd-meta">
                  <div className="fd-meta-item">
                    <span className="fd-meta-value">{item.year}</span>
                    <span className="fd-meta-label">Year estd.</span>
                  </div>
                  <div className="fd-meta-item projects">
                    <HomeOutlined className="fd-meta-icon" />
                    <span className="fd-meta-value">{item.projects}</span>
                    <span className="fd-meta-label">Projects</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="fd-desc">{item.desc}</p>

            {/* Rating & Tags */}
            <div className="fd-rating-tags">
              <div className="fd-rating">
                <StarFilled style={{ color: '#FFD700' }} />
                <span className="fd-rating-value">{item.rating}</span>
              </div>
              <div className="fd-tags">
                {item.tags.map((tag, idx) => (
                  <Tag key={idx} className="fd-tag">{tag}</Tag>
                ))}
              </div>
            </div>

            {/* Project Image */}
            <div className="fd-image-container">
              <div className="fd-image">
                <img src={item.projectImg} alt="project" />
                <div className="fd-image-overlay"></div>
                <div className="fd-image-content">
                  <div className="fd-project-name">{item.projectName}</div>
                  <div className="fd-project-location">
                    <EnvironmentOutlined />
                    <span>{item.location}</span>
                  </div>
                  <div className="fd-project-price">{item.price}</div>
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <Button 
              type="primary" 
              block 
              className="fd-contact-btn"
              icon={<PhoneOutlined />}
            >
              Contact Developer
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedDevelopers;
