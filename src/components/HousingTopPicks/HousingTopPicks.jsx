import React from "react";
import { Card, Row, Col, Typography } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import "./HousingTopPicks.css";

const { Title, Text } = Typography;

const HousingTopPicks = () => {
  const properties = [
    {
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

      <div className="card-scroll">
        {properties.map((item, index) => (
          <Card
            key={index}
            className={`highlight-card ${index !== 0 ? "fade-left" : ""}`}
            bordered={false}
          >
            <Row gutter={40} align="middle">

              <Col span={10}>
                <img
                  src={item.mainImage}
                  alt=""
                  className="main-img"
                />
              </Col>

              <Col span={14}>
                <div className="content-wrapper">

                  <div className="title-price">
                    <Title level={4} className="title">
                      {item.title}
                    </Title>
                    <div >
                      <b><h3>{item.price}</h3></b>                      
                    </div>
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
