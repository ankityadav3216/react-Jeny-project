import React from "react";
import {
  ShareAltOutlined,
  HeartOutlined,
  WhatsAppOutlined,
  PhoneOutlined,
  RocketOutlined,
  TagOutlined,
  ApartmentOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import "./Propertysection.css";

const propertyData = [
  {
    id: 1,
    title: "Atulyam Saral",
    builder: "Atulyam Group",
    heading: "3, 4 BHK Flat",
    subheading: "for Sale in Kudasan, Gandhinagar",
    price: "Rs1.14 Cr - Rs1.62 Cr",
    size: "2430 SqFt - 3438 SqFt",
    status: "Ready to Move",
    area: "1 Acre",
    usps: [
      "2 tower with limited units",
      "G+12 Residential Floors with Premium Features",
      "20 luxurious 4 BHK apartments",
    ],
    image:
      "https://greenevolution.in/wp-content/uploads/2022/09/BannerImage-6-1920_1050-1.webp",
  },
  {
    id: 2,
    title: "Atulyam Crest",
    builder: "Atulyam Group",
    heading: "3, 4 BHK Flat",
    subheading: "for Sale in Kudasan, Gandhinagar",
    price: "Rs1.04 Cr - Rs1.49 Cr",
    size: "2140 SqFt - 3310 SqFt",
    status: "Under Construction",
    area: "0.9 Acre",
    usps: [
      "Low density planning",
      "Club + co-working deck",
      "Smart security at all entries",
    ],
    image:
      "https://en-media.thebetterindia.com/uploads/2016/06/bungalow.jpg",
  },
  {
    id: 3,
    title: "Atulyam Heights",
    builder: "Atulyam Group",
    heading: "3, 4 BHK Flat",
    subheading: "for Sale in Kudasan, Gandhinagar",
    price: "Rs98 Lakh - Rs1.28 Cr",
    size: "1920 SqFt - 2860 SqFt",
    status: "Ready to Move",
    area: "0.8 Acre",
    usps: [
      "Project near SG Highway",
      "Green podium and kids zone",
      "Only 4 flats per floor",
    ],
    image:
      "https://www.buildingmaterialreporter.com/uploads/blogs/thumb_front/bf17bcf56e7471062477546da2e2d3d1.jpg",
  },
];

const PropertySection = () => {
  return (
    <div className="main-wrapper">
      {propertyData.map((item) => (
        <article key={item.id} className="property-layout">
          <div className="image-container">
            <img src={item.image} alt={item.title} />
          </div>

          <div className="details-container">
            <div className="project-head-row">
              <div className="project-head-content">
                <h3 className="project-title">{item.title}</h3>
                <p className="project-builder">by {item.builder}</p>
              </div>

              <div className="project-actions">
                <button type="button" aria-label="Share" className="icon-btn">
                  <ShareAltOutlined />
                </button>
                <button type="button" aria-label="Wishlist" className="icon-btn">
                  <HeartOutlined />
                </button>
              </div>
            </div>

            <p className="project-subtitle">
              <span>{item.heading}</span> {item.subheading}
            </p>

            <div className="stats-strip" role="list">
              <div className="stat-col" role="listitem">
                <div className="stat-value">
                  <TagOutlined /> {item.price}
                </div>
                <div className="stat-label">Price</div>
              </div>
              <div className="stat-col" role="listitem">
                <div className="stat-value">
                  <ApartmentOutlined /> {item.size}
                </div>
                <div className="stat-label">Size</div>
              </div>
              <div className="stat-col" role="listitem">
                <div className="stat-value">
                  <CheckCircleOutlined /> {item.status}
                </div>
                <div className="stat-label">Project Status</div>
              </div>
              <div className="stat-col" role="listitem">
                <div className="stat-value">
                  <RocketOutlined /> {item.area}
                </div>
                <div className="stat-label">Project Area</div>
              </div>
            </div>

            <div className="usp-row-wrap">
              <p className="usp-title">Project USPs</p>
              <div className="usp-row">
                {item.usps.map((usp) => (
                  <span key={usp} className="usp-pill">
                    {usp}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-footer-row">
              <div className="dev-block">
                <div className="dev-logo">AG</div>
                <div>
                  <p className="dev-name">{item.builder}</p>
                  <p className="dev-role">Developer</p>
                </div>
              </div>

              <div className="cta-row">
                <button type="button" className="contact-btn">
                  <PhoneOutlined /> View Contact
                </button>
                <button type="button" className="wa-btn">
                  <WhatsAppOutlined /> WhatsApp
                </button>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default PropertySection;
