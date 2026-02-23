import React, { useState } from "react";
import { Row, Col, Typography, Modal } from "antd";
import {
  ShareAltOutlined,
  HeartOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
  DownloadOutlined,
  EnvironmentOutlined,
  TagOutlined
} from "@ant-design/icons";
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
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default PDOverview;