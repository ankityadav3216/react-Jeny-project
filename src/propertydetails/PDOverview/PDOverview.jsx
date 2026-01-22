// PDOverview.jsx
import React, { useRef } from "react";
import { Button, Tag } from "antd";
import {
  ShareAltOutlined,
  HeartOutlined,
  PhoneOutlined,
  PlayCircleFilled,
  CheckCircleFilled,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import "./PDOverview.css";

/* 🔹 FRONTEND IMAGE CONFIG (backend-ready but frontend-only) */
const projectImages = {
  cover: {
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    tag: "Cover Image",
  },
  gallery: [
    {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400",
      type: "image",
    },
    {
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400",
      type: "image",
    },
    {
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400",
      type: "image",
    },
    {
      url:  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400",
      type: "image",
    },
  ],
};

const PDOverview = () => {
  const scrollContainerRef = useRef(null);

  /* 🔹 QUICK NAV SECTIONS */
  const sections = [
    { label: "Overview", id: "overview" },
    { label: "Home Highlights", id: "highlights" },
    { label: "Around This project", id: "this-project" },
    { label: "More About Project", id: "about-project" },
    { label: "Floor Plan", id: "floor-plan" },
    { label: "Tour This project", id: "Tour-project" },
    { label: "Amenities", id: "amenities" },
    { label: "Contact seller ", id: "contact-seller" },
    { label: "Ratings&Reviews", id: "Rating-reviews" },
    { label: "Calculator", id: "Calculator" },
    { label: "Locality", id: "Locality" },
    { label: "Compare properties", id: "compare-property" },
    { label: "About developer", id: "About-developer" },
    { label: "Q&A", id: "Q&A" },
    { label: "Frequently Asked Questions", id: "Frequently-Asked-Questions" },
    { label: "Similar project", id: "Similar-project" },
    { label: "DACMillennium", id: "DACMillennium" },
  ];

  /* 🔹 SCROLL TO SECTION */
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollLeft = () =>
    scrollContainerRef.current?.scrollBy({ left: -200, behavior: "smooth" });

  const scrollRight = () =>
    scrollContainerRef.current?.scrollBy({ left: 200, behavior: "smooth" });

  return (
    <div id="overview" className="pd-overview-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        Home / Pune / Baner / Nyati Emerald
      </div>

      {/* Header - Fixed Layout */}
      <div className="pd-header">
        {/* Left Section */}
        <div className="pd-header-left">
          <div className="pd-title-section">
            <h1 className="pd-title">Nyati Emerald</h1>
            <Tag className="rera-tag">
              <CheckCircleFilled /> RERA
            </Tag>
          </div>
          
          <div className="pd-info-section">
            <p className="pd-developer">
              By <span className="pd-developer-name">NYATI GROUP</span>
            </p>
            <p className="pd-address">
              S.No. 55, Mohan Nagar Co. Op. Society, Baner, Pune
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="pd-header-right">
          <p className="pd-updated">
            Last updated: Jan 7, 2026
          </p>
          
          <div className="pd-price-section">
            <p className="pd-price">
              ₹1.18 Cr - 1.7 Cr
            </p>
            <span className="pd-price-unit">
              | ₹14.05 K/sq.ft
            </span>
          </div>
          
          <p className="pd-emi">
            EMI starts at ₹58.58 K
          </p>
          
          <Button
            type="primary"
            icon={<PhoneOutlined />}
            className="pd-contact-btn"
          >
            Contact Developer
          </Button>
        </div>
      </div>

      {/* ================= IMAGE SECTION ================= */}
      <div className="pd-image-grid">
        {/* MAIN IMAGE */}
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

        {/* SIDE IMAGES - 2x2 Grid */}
        <div className="pd-side-images">
          {projectImages.gallery.map((item, index) => (
            <div key={index} className="pd-side-image-container">
              <img
                src={item.url}
                alt="gallery"
                className="pd-side-img"
              />
              {item.type === "video" && (
                <PlayCircleFilled className="pd-video-icon" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ================= QUICK NAV ================= */}
      <div className="pd-quick-nav">
        <div className="pd-quick-nav-header">
          <h3 className="pd-quick-nav-title">Quick Navigation</h3>
          <div className="pd-nav-buttons">
            <Button className="pd-scroll-btn" onClick={scrollLeft}>
              <LeftOutlined />
            </Button>
            <Button className="pd-scroll-btn" onClick={scrollRight}>
              <RightOutlined />
            </Button>
          </div>
        </div>

        <div ref={scrollContainerRef} className="pd-scroll-container">
          <div className="pd-scroll-content">
            {sections.map((sec) => (
              <button
                key={sec.id}
                className="pd-nav-item"
                onClick={() => scrollToSection(sec.id)}
              >
                <span className="pd-nav-text">{sec.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDOverview;