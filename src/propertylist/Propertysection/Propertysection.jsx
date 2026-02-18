import React, { useState } from "react";
import { Typography } from "antd";
import {
  HomeOutlined,
  WifiOutlined,
  CarOutlined,
  CheckCircleFilled,
  StarFilled,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "./PropertySection.css";

const { Title, Text } = Typography;

const propertyData = [
  {
    id: 1,
    title: "Luxury apartment with modern interior design",
    price: "₹1.20 Cr",
    image:
      "https://1.bp.blogspot.com/-0RluMOPpKJQ/VA_yGrkVzZI/AAAAAAAAH2o/VCSCwHrGMPw/s1600/otla1.jpg",
    description:
      "This beautifully designed 3BHK apartment offers spacious living with modern interiors, premium fittings, and natural lighting. Located in a peaceful neighborhood with easy access to schools, markets, and transportation.",
  },
  {
    id: 2,
    title: "Premium villa with private garden",
    price: "₹2.40 Cr",
    image:
      "https://hblimg.mmtcdn.com/content/hubble/img/manipal/mmt/activities/m_Hasta%20Shilpa%20Heritage%20Village-3_l_384_512.jpg",
    description:
      "Experience luxury living in this premium villa featuring a private landscaped garden, high ceilings, and elegant architecture. Ideal for families seeking comfort and privacy.",
  },
];

const PropertySection = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleDetails = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="main-wrapper">
      {propertyData.map((item) => (
        <div key={item.id}>

          <div className="property-layout">
            {/* IMAGE */}
            <div className="image-container">
              <img src={item.image} alt="property" />
            </div>

            {/* DETAILS BOX */}
            <div className="details-container">
              <div className="details-col">
                <Text className="small-text">FEATURED PROPERTY</Text>
                <Title level={4} className="property-title">
                  {item.title}
                </Title>
                <Text
                  className="meet-host clickable"
                  onClick={() => toggleDetails(item.id)}
                >
                  <UserOutlined /> View Details <DownOutlined />
                </Text>
              </div>

              <div className="divider"></div>

              <div className="details-col">
                <Title level={4}>{item.price}</Title>
                <div className="info-item">
                  <HomeOutlined /> 3 Bedrooms
                </div>
                <div className="info-item">
                  <WifiOutlined /> High-speed Internet
                </div>
                <div className="info-item">
                  <CarOutlined /> Covered Parking
                </div>
              </div>

              <div className="divider"></div>

              <div className="details-col last-col">
                <div>
                  <div className="info-item">
                    <CheckCircleFilled /> Verified Listing
                  </div>
                  <div className="info-item">
                    <StarFilled /> Premium Amenities
                  </div>
                </div>
                <button className="book-btn">Book Now</button>
              </div>
            </div>
          </div>

          {/* DESCRIPTION CONTAINER */}
          {activeId === item.id && (
            <div className="description-container">
              <div className="description-box">
                <Title level={4}>Property Description</Title>
                <Text>
                  {item.description}
                </Text>
              </div>
            </div>
          )}

        </div>
      ))}
    </div>
  );
};

export default PropertySection;
