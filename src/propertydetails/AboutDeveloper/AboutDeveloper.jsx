import React from "react";
import { Typography, Button } from "antd";
import {
  EnvironmentOutlined,
  ShareAltOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import "./AboutDeveloper.css";

const { Title } = Typography;

const AboutDeveloper = () => {
  return (
    <div className="about-wrapper">
      {/* Heading */}
      <div className="about-header">
        <div className="about-icon">🏗</div>
        <Title level={4} style={{ margin: 0 }}>
          About Developer
        </Title>
      </div>

      {/* Developer Info */}
      <div className="developer-row">
        <div className="developer-logo">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.TBHhjJzwlUwtedBE3GumWwHaFk?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="logo"
          />
        </div>
        <div>
          <div className="developer-name">
            Sahjanand Shreehari
          </div>
          <div className="developer-type">Developer</div>
        </div>
      </div>

      <div className="project-text">
        Projects by Sahjanand Shreehari
      </div>

      <Button className="construction-btn">
        Under Construction 1
      </Button>

      {/* Property Card */}
      <div className="property-card">
        <div className="property-image-wrapper">
          <div className="ribbon">Limelight</div>

          <img
            src="https://th.bing.com/th/id/R.a8501eb9cf35ca84e98814668835f671?rik=b7H8o2Y%2fzufSYg&riu=http%3a%2f%2fwww.dsource.in%2fsites%2fdefault%2ffiles%2fgallery%2f4616%2f2.jpg&ehk=kFLkNaOreVKeh9el0RiQp4zQPbJMTnFMFeaZ5h7Zgjw%3d&risl=&pid=ImgRaw&r=0"
            alt="property"
            className="property-image"
          />

          <div className="slider-dots">
            <span className="active"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="property-content">
          <div className="property-top">
            <div>
              <div className="property-title">
                Sahajanand Shreehari
              </div>
              <div className="property-by">
                by Sahajanand Shreehari
              </div>
            </div>

            <div className="property-icons">
              <ShareAltOutlined />
              <HeartOutlined />
            </div>
          </div>

          <div className="property-location">
            <EnvironmentOutlined />
            Sargasan, Gandhinagar
          </div>

          <div className="property-bottom">
            <span>3 BHK Flat</span>
            <span>₹80 L - ₹1.12 Cr</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDeveloper;