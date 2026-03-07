import React, { useState } from "react";
import { Button, Modal, Image } from "antd";
import {
  ShareAltOutlined,
  HeartOutlined,
  PlayCircleFilled,
  PhoneOutlined,
  WhatsAppOutlined,
  DownloadOutlined,
  EnvironmentOutlined,
  TagOutlined
} from "@ant-design/icons";
import "./PDHerosection.css";

const projectImages = {
  cover: {
    url: "https://karjatstay.com/wp-content/uploads/2025/01/Saguna-Baug-Mud-House-in-Neral-6-800x600.jpg",
    tag: "Cover Image"
  },
  gallery: [
    { url: "https://i.pinimg.com/736x/72/b1/98/72b198e05cda2c6a005925938af484ba.jpg", type: "image" },
    { url: "https://areinfraheights.com/wp-content/uploads/2023/11/Mud-houses-in-Damankiari-village.jpg", type: "image" },
    { url: "https://i.pinimg.com/originals/5e/af/bc/5eafbcf042cface92069e1c83fd02086.jpg", type: "image" },
    { url: "https://www.responsibletravel.com/imagesclient/L_181046.jpg", type: "image" },
    { url: "https://tse1.mm.bing.net/th/id/OIP.pv9Sy4fJCNlTT4YHpvq0nAHaE9?w=1200", type: "image" }
  ]
};

const sections = [
  { label: "Overview", id: "overview-section" },
  { label: "Project Update", id: "project-update-section" },
  { label: "Project USPs", id: "project-usps-section" },
  { label: "Reels", id: "reels-section" },
  { label: "Floor Plan", id: "floor-plan-section" },
  { label: "Location", id: "location-section" },
  { label: "Amenities", id: "amenities-section" },
  { label: "About Developer", id: "about-developer-section" },
  { label: "FAQ", id: "faq-section" }
];

const PDHerosection = () => {
  const [openGallery, setOpenGallery] = useState(false);
  const [activeSection, setActiveSection] = useState("overview-section");

  const visibleImages = projectImages.gallery.slice(0, 4);
  const remainingCount = projectImages.gallery.length - 4;

  const scrollToSection = (sectionId) => {
    const leftContainer = document.querySelector(".pd-left");
    const target = document.getElementById(sectionId);
    if (!target) return;

    setActiveSection(sectionId);

    if (leftContainer) {
      const top = target.offsetTop - leftContainer.offsetTop;
      leftContainer.scrollTo({ top, behavior: "smooth" });
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleShare = async () => {
    const shareData = {
      title: "Property Details",
      text: "Check out this property listing",
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareData.url);
      }
    } catch (_error) {
      // Ignore canceled share action
    }
  };

  return (
    <div id="overview" className="pd-overview-container">
      <h3 className="pd-breadcrumb">Home / Property in Gandhinagar / Revanta Fortune 3</h3>

      <div className="pd-image-grid">
        <div className="pd-main-image">
          <span className="pd-cover-tag">{projectImages.cover.tag}</span>
          <img src={projectImages.cover.url} alt="cover" className="pd-main-img" />
          <div className="pd-image-actions">
            <Button className="pd-action-btn" onClick={handleShare}>
              <ShareAltOutlined /> Share
            </Button>
            <Button className="pd-action-btn"><HeartOutlined /> Save</Button>
          </div>
        </div>

        <div className="pd-side-images">
          {visibleImages.map((item, index) => (
            <div key={index} className="pd-side-image-container" onClick={() => setOpenGallery(true)}>
              <img src={item.url} alt="preview" className="pd-side-img" />
              {index === 3 && remainingCount > 0 && (
                <div className="pd-image-count">+{remainingCount}</div>
              )}
              {item.type === "video" && <PlayCircleFilled className="pd-video-icon" />}
            </div>
          ))}
        </div>
      </div>

      <div className="pd-project-details">
        <div className="pd-project-left">
          <h1 className="pd-project-title">
            Revanta Fortune 3 <span className="pd-builder">by Revanta Group</span>
          </h1>
          <div className="pd-location"><EnvironmentOutlined /> K.Raheja, Gandhinagar</div>
          <div className="pd-price"><TagOutlined /> Rs. 63 L - Rs. 76 L</div>
        </div>

        <div className="pd-project-actions">
          <Button className="contact-btn"><PhoneOutlined /> View Contact</Button>
          <Button className="whatsapp-btn"><WhatsAppOutlined /> WhatsApp</Button>
          <Button className="brochure-btn"><DownloadOutlined /> Download Brochure</Button>
        </div>
      </div>

      <div className="pd-info-cards">
        <div className="pd-card"><span>CONFIGURATION</span><h3>2, 3 BHK Flat</h3></div>
        <div className="pd-card"><span>SIZE</span><h3>180 SqYd - 216 SqYd</h3></div>
        <div className="pd-card"><span>POSSESSION STARTS</span><h3>Jul, 2027</h3></div>
        <div className="pd-card"><span>LAUNCH DATE</span><h3>Oct, 2024</h3></div>
      </div>

      <div className="pd-quick-nav">
        <div className="pd-quick-nav-header"><h3 className="pd-quick-nav-title">Quick Navigation</h3></div>
        <div className="pd-scroll-container">
          <div className="pd-scroll-content">
            {sections.map((sec) => (
              <button
                key={sec.id}
                className={`pd-nav-item ${activeSection === sec.id ? "active" : ""}`}
                type="button"
                onClick={() => scrollToSection(sec.id)}
              >
                {sec.label}
              </button>
            ))}
          </div>
        </div>
        <div className="pd-nav-bottom-line"></div>
      </div>

      <Modal open={openGallery} footer={null} width={900} onCancel={() => setOpenGallery(false)}>
        <div className="pd-gallery-grid">
          {projectImages.gallery.map((img, i) => (<Image key={i} src={img.url} />))}
        </div>
      </Modal>
    </div>
  );
};

export default PDHerosection;
