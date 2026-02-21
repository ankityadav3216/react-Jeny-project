import React, { useRef, useEffect, useState } from "react";
import { Card, Row, Col, Typography } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom"; // ✅ ADD THIS
import "./HousingTopPicks.css";

const { Title, Text } = Typography;

const HousingTopPicks = () => {
  const navigate = useNavigate(); // ✅ navigation hook

  const properties = [
    {
      id: "park-paradise", // ✅ IMPORTANT
      title: "Park Paradise",
      price: "₹85 L - ₹1.10 Cr",
      location: "Sargasan, Gandhinagar",
      configuration: "3 BHK Flat",
      projectSize: "5 Buildings - 258 Units",
      size: "205 SqYd - 255 SqYd",
      projectArea: "1.77 Acre",
      developer: "Manibhadra Worldwide LLP",
      mainImage:
        "https://yuandesign.asia/wp-content/uploads/2022/02/luxury-living-room-with-comfortable-sofa-and-throw-pillows.jpg"
    },
    {
      id: "sky-heights",
      title: "Sky Heights",
      price: "₹70 L - ₹95 L",
      location: "Ahmedabad",
      configuration: "2 BHK Flat",
      projectSize: "3 Buildings - 180 Units",
      size: "180 SqYd",
      projectArea: "1.2 Acre",
      developer: "Skyline Group",
      mainImage:
        "https://besthomedesigns.org/wp-content/uploads/2020/11/Ideal-Restaurant-Modern-Interior-Design.png"
    },
    {
      id: "green-valley",
      title: "Green Valley",
      price: "₹1.2 Cr",
      location: "Surat",
      configuration: "4 BHK Flat",
      projectSize: "2 Buildings - 120 Units",
      size: "300 SqYd",
      projectArea: "2 Acre",
      developer: "Green Group",
      mainImage:
        "https://tse2.mm.bing.net/th/id/OIP.yTurIxdeps4hEeua02qJIwHaEK?w=1024&h=576&rs=1&pid=ImgDetMain&o=7&rm=3"
    }
  ];

  const containerRef = useRef(null);
  const [isHover, setIsHover] = useState(false);

  // Auto scroll effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    let interval;

    const startScroll = () => {
      interval = setInterval(() => {
        if (!isHover) {
          scrollAmount += scrollStep;
          if (scrollAmount >= container.scrollWidth - container.clientWidth) {
            scrollAmount = 0;
          }
          container.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }
      }, 20);
    };

    startScroll();
    return () => clearInterval(interval);
  }, [isHover]);

  // ✅ CLICK HANDLER
  const openProperty = (id) => {
    navigate(`/property/${id}`);
  };

  return (
    <section className="highlight-section">
      <div className="highlight-header">
        <div>
          <Title level={3}>
            <span className="star">✦</span> In Limelight
          </Title>
          <Text type="secondary">
            Experience the best of living - find your place with us.
          </Text>
        </div>
        <div className="count">
          <span className="active">01</span> /03
        </div>
      </div>

      <div
        className="card-scroll"
        ref={containerRef}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {properties.map((item, index) => (
          <Card
            key={item.id}
            className={`highlight-card ${index !== 0 ? "fade-left" : ""}`}
            bordered={false}
            hoverable
            onClick={() => openProperty(item.id)} // ✅ CLICK WORKING
          >
            <Row gutter={40} align="middle">
              <Col span={10}>
                <img src={item.mainImage} alt="" className="main-img" />
              </Col>
              <Col span={14}>
                <div className="content-wrapper">
                  <div className="title-price">
                    <Title level={4} className="title">
                      {item.title}
                    </Title>
                    <h3>{item.price}</h3>
                  </div>

                  <Text className="location">
                    <EnvironmentOutlined /> {item.location}
                  </Text>

                  <div className="info-grid">
                    <div>
                      <Text type="secondary">Configuration</Text>
                      <div className="value">{item.configuration}</div>
                    </div>

                    <div>
                      <Text type="secondary">Project Size</Text>
                      <div className="value">{item.projectSize}</div>
                    </div>

                    <div>
                      <Text type="secondary">Size</Text>
                      <div className="value">{item.size}</div>
                    </div>

                    <div>
                      <Text type="secondary">Project Area</Text>
                      <div className="value">{item.projectArea}</div>
                    </div>
                  </div>

                  <div className="developer-box">
                    <div className="dev-logo" />
                    <div>
                      <Text strong>{item.developer}</Text>
                      <div>
                        <Text type="secondary">Developer</Text>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HousingTopPicks;