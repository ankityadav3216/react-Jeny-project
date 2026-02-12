import React from "react";
import { Row, Col, Typography, Space } from "antd";
import {
  InstagramOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  PinterestOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import "./Footer.css";

const { Title, Text, Link } = Typography;

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-inner">

        <Row gutter={[40, 30]}>

          {/* LEFT SECTION */}
          <Col xs={24} md={8}>
            <div className="footer-logo">
              <span className="logo-icon">🔎</span>
              <span className="logo-text">PrimeAcres</span>
            </div>

            <div className="footer-email">
              <Text className="footer-label">EMAIL</Text>
              <br />
              <Text className="footer-mail">hello@PrimeAcres</Text>
            </div>
          </Col>

          {/* EXPLORE */}
          <Col xs={12} md={4}>
            <Title level={5} className="footer-heading">EXPLORE</Title>
            <Space direction="vertical" size={6}>
              <Link>For Investors</Link>
              <Link>Blog</Link>
              <Link>Web Stories</Link>
              <Link>Reals</Link>
              <Link>Tools</Link>
              <Link>Sitemap</Link>
            </Space>
          </Col>

          {/* COMPANY */}
          <Col xs={12} md={4}>
            <Title level={5} className="footer-heading">COMPANY</Title>
            <Space direction="vertical" size={6}>
              <Link>Privacy Policy</Link>
              <Link>Terms & Conditions</Link>
              <Link>About Us</Link>
              <Link>Contact Us</Link>
            </Space>
          </Col>

          {/* RIGHT SIDE */}
          <Col xs={24} md={8}>
            <Title level={5} className="footer-heading">
              Experience <span className="highlight">PrimeAcres.com</span> App on mobile
            </Title>

            <div className="store-buttons">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
              />
            </div>

            <div className="social-section">
              <Text className="footer-label">Follow us</Text>
              <div className="social-icons">
                <InstagramOutlined />
                <TwitterOutlined />
                <FacebookOutlined />
                <LinkedinOutlined />
                <PinterestOutlined />
              </div>
            </div>
          </Col>
        </Row>

        <div className="footer-divider" />

        <div className="footer-bottom">
          ©2026-27 PrimeAcres.com
        </div>

      </div>
    </div>
  );
};

export default Footer;
