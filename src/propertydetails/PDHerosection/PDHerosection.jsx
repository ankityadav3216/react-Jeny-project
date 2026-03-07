<<<<<<< HEAD
import React, { useState } from "react";
import { Row, Col, Typography, Modal } from "antd";
import {
  ShareAltOutlined,
  HeartOutlined,
=======
import React, { useRef, useState } from "react";
import { Button, Modal, Image } from "antd";
import {
  ShareAltOutlined,
  HeartOutlined,
  PlayCircleFilled,
>>>>>>> 9d87dee (Major changes in project and fixed the error of scroll icons)
  PhoneOutlined,
  WhatsAppOutlined,
  DownloadOutlined,
  EnvironmentOutlined,
  TagOutlined
} from "@ant-design/icons";
<<<<<<< HEAD
import "./PDHerosection.css";

const { Text, Title } = Typography;

const PDOverview = () => {

  const images = [
    "https://img.freepik.com/premium-photo/traditional-bhungas-kutch-gujarat-india-december-2016_1168123-62150.jpg",
    "https://www.dsource.in/sites/default/files/gallery/4616/6.jpg",
    "https://img.freepik.com/premium-photo/traditional-bhungas-kutch-gujarat-india-december-2016_1168123-62011.jpg",
    "https://media2.thrillophilia.com/images/photos/000/293/729/original/1591100479_c17c.png",
    "https://www.orientbell.com/blog/wp-content/uploads/2024/03/850x550-Pix-1.jpg",
  ];

  const [previewOpen, setPreviewOpen] = useState(false);

  const visibleImages = images.slice(0, 4);
  const remainingCount = images.length - 4;

  const stopClick = (e) => e.stopPropagation();

  return (
    <div className="pd-overview-container">

      {/* IMAGE SECTION */}
      <Row gutter={[16, 16]}>
        <Col xs={24} md={14}>
          <div className="pd-main-image" onClick={() => setPreviewOpen(true)}>
            <img src={images[0]} alt="main" />

            <div className="pd-image-actions" onClick={stopClick}>
              <button className="pd-action-btn"><ShareAltOutlined /> Share</button>
              <button className="pd-action-btn"><HeartOutlined /> Save</button>
            </div>
          </div>
        </Col>

        <Col xs={24} md={10}>
          <Row gutter={[16, 16]}>
            {visibleImages.slice(1, 4).map((img, index) => (
              <Col span={12} key={index}>
                <div className="pd-side-image" onClick={() => setPreviewOpen(true)}>
                  <img src={img} alt="side" />
                </div>
              </Col>
            ))}

            {images.length > 4 && (
              <Col span={12}>
                <div className="pd-more-card" onClick={() => setPreviewOpen(true)}>
                  <img src={images[4]} alt="more" />
                  <div className="pd-overlay">+{remainingCount} Photos</div>
                </div>
              </Col>
            )}
          </Row>
        </Col>
      </Row>

      {/* DETAILS SECTION */}
      <div className="pd-details">

        <div className="pd-title-row">
          <div>
            <Title level={2}>Sahajanand Shreehari</Title>
            <Text className="pd-location">
              <EnvironmentOutlined /> Sargasan, Gandhinagar
            </Text>
          </div>

          <div className="pd-action-group">
            <button className="pd-primary-btn"><PhoneOutlined /> View Contact</button>
            <button className="pd-whatsapp-btn"><WhatsAppOutlined /> WhatsApp</button>
            <button className="pd-outline-btn"><DownloadOutlined /> Download Brochure</button>
          </div>
        </div>

        <div className="pd-price">
          <TagOutlined /> ₹80 L - ₹1.12 Cr
        </div>

        {/* INFO CARDS */}
        <Row gutter={[16, 16]} className="pd-info-cards">
          <Col xs={24} md={6}><div className="pd-info-box"><span>AVG. PRICE</span>₹35,000 / SqYd</div></Col>
          <Col xs={24} md={6}><div className="pd-info-box"><span>CONFIGURATION</span>3 BHK Flat</div></Col>
          <Col xs={24} md={6}><div className="pd-info-box"><span>SIZE</span>258 SqYd - 321 SqYd</div></Col>
          <Col xs={24} md={6}><div className="pd-info-box"><span>POSSESSION STARTS</span>Jun, 2027</div></Col>
        </Row>

        {/* TABS */}
        <div className="pd-tabs">
          <span >Overview</span>
          <span>Project USPs</span>
          <span>Watch Our Reels</span>
          <span>Floor Plan</span>
          <span>Location</span>
          <span>Amenities</span>
         
          <span>About Developer</span>
          <span>FAQs</span>
        </div>

      </div>

      {/* GALLERY */}
      <Modal open={previewOpen} footer={null} onCancel={() => setPreviewOpen(false)} width="90%">
        <div className="pd-gallery">
          {images.map((img, index) => (
            <img key={index} src={img} alt="gallery" />
=======

import "./PDHerosection.css";

const projectImages = {
  cover: {
    url: "https://karjatstay.com/wp-content/uploads/2025/01/Saguna-Baug-Mud-House-in-Neral-6-800x600.jpg",
    tag: "Cover Image",
  },
  gallery: [
    { url: "https://i.pinimg.com/736x/72/b1/98/72b198e05cda2c6a005925938af484ba.jpg", type: "image" },
    { url: "https://areinfraheights.com/wp-content/uploads/2023/11/Mud-houses-in-Damankiari-village.jpg", type: "image" },
    { url: "https://i.pinimg.com/originals/5e/af/bc/5eafbcf042cface92069e1c83fd02086.jpg", type: "image" },
    { url: "https://www.responsibletravel.com/imagesclient/L_181046.jpg", type: "image" },
    { url: "https://tse1.mm.bing.net/th/id/OIP.pv9Sy4fJCNlTT4YHpvq0nAHaE9?w=1200", type: "image" },
  ],
};

const PDHerosection = () => {
  const scrollContainerRef = useRef(null);
  const [openGallery, setOpenGallery] = useState(false);

  const visibleImages = projectImages.gallery.slice(0, 4);
  const remainingCount = projectImages.gallery.length - 4;

  const sections = [
    { label: "Overview", id: "overview" },
    { label: "Project Update", id: "this-project" },
    { label: "Project USPs", id: "about-project" },
    { label: "Reels", id: "reel" },
    { label: "Floor Plan", id: "floor-plan" },
    { label: "Location", id: "Location" },
    { label: "Amenities", id: "amenities" },
    { label: "About developer", id: "About-developer" },
    { label: "FAQ", id: "FAQ" },
  ];

  return (
    <div id="overview" className="pd-overview-container">
      <h3 className="pd-breadcrumb">
        Home / property in ghandhinagar / Nyati Emerald
      </h3>

      {/* IMAGE GRID */}
      <div className="pd-image-grid">
        <div className="pd-main-image">
          <span className="pd-cover-tag">{projectImages.cover.tag}</span>
          <img
            src={projectImages.cover.url}
            alt="cover"
            className="pd-main-img"
          />
          <div className="pd-image-actions">
            <Button className="pd-action-btn">
              <ShareAltOutlined /> Share
            </Button>
            <Button className="pd-action-btn">
              <HeartOutlined /> Save
            </Button>
          </div>
        </div>

        <div className="pd-side-images">
          {visibleImages.map((item, index) => (
            <div
              key={index}
              className="pd-side-image-container"
              onClick={() => setOpenGallery(true)}
            >
              <img src={item.url} alt="" className="pd-side-img" />
              {index === 3 && remainingCount > 0 && (
                <div className="pd-image-count">+{remainingCount}</div>
              )}
              {item.type === "video" && (
                <PlayCircleFilled className="pd-video-icon" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* PROJECT DETAILS */}
      <div className="pd-project-details">
        <div className="pd-project-left">
          <h1 className="pd-project-title">
            Revanta Fortune 3
            <span className="pd-builder"> by Revanta Group</span>
          </h1>
          <div className="pd-location">
            <EnvironmentOutlined /> K.Raheja, Gandhinagar
          </div>
          <div className="pd-price">
            <TagOutlined />
            ₹63 L - ₹76 L
          </div>
        </div>

        <div className="pd-project-actions">
          <Button className="contact-btn">
            <PhoneOutlined /> View Contact
          </Button>
          <Button className="whatsapp-btn">
            <WhatsAppOutlined /> WhatsApp
          </Button>
          <Button className="brochure-btn">
            <DownloadOutlined /> Download Brochure
          </Button>
        </div>
      </div>

      {/* INFO CARDS */}
      <div className="pd-info-cards">
        <div className="pd-card">
          <span>CONFIGURATION</span>
          <h3>2, 3 BHK Flat</h3>
        </div>
        <div className="pd-card">
          <span>SIZE</span>
          <h3>180 SqYd - 216 SqYd</h3>
        </div>
        <div className="pd-card">
          <span>POSSESSION STARTS</span>
          <h3>Jul, 2027</h3>
        </div>
        <div className="pd-card">
          <span>LAUNCH DATE</span>
          <h3>Oct, 2024</h3>
        </div>
      </div>

      {/* QUICK NAV */}
      <div className="pd-quick-nav">
        <div className="pd-quick-nav-header">
          <h3 className="pd-quick-nav-title">Quick Navigation</h3>
          {/* Scroll buttons removed */}
        </div>

        <div ref={scrollContainerRef} className="pd-scroll-container">
          <div className="pd-scroll-content">
            {sections.map((sec) => (
              <button key={sec.id} className="pd-nav-item">
                {sec.label}
              </button>
            ))}
          </div>
        </div>

        <div className="pd-nav-bottom-line"></div>
      </div>

      {/* GALLERY MODAL */}
      <Modal
        open={openGallery}
        footer={null}
        width={900}
        onCancel={() => setOpenGallery(false)}
      >
        <div className="pd-gallery-grid">
          {projectImages.gallery.map((img, i) => (
            <Image key={i} src={img.url} />
>>>>>>> 9d87dee (Major changes in project and fixed the error of scroll icons)
          ))}
        </div>
      </Modal>
    </div>
  );
};

<<<<<<< HEAD
export default PDOverview;
=======
export default PDHerosection;
>>>>>>> 9d87dee (Major changes in project and fixed the error of scroll icons)
