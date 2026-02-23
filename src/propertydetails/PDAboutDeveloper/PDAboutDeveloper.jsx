import React from "react";
import { Card, Button } from "antd";
import {
  EnvironmentOutlined,
  ShareAltOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import "./PDAboutDeveloper.css";

// 🔥 JUST CHANGE THESE LINKS
const developer = {
  name: "Manibhadra Worldwide LLP",
  logo: "https://static.vecteezy.com/system/resources/previews/027/578/616/original/construction-logo-with-buildings-and-elements-free-vector.jpg", // <-- Paste Logo URL
};

const project = {
  name: "Park Paradise",
  developer: "Manibhadra Worldwide LLP",
  location: "Sargasan, Gandhinagar",
  type: "3 BHK Flat",
  price: "₹85 L - ₹1.10 Cr",
  image:
    "https://d2vbj8g7upsspg.cloudfront.net/filters:format(webp)/30-stades/media/post_attachments/CZiSiW84KXD8rnIPVBFK.jpg", // <-- Paste Project Image URL
  tag: "Limelight",
};

const PDAboutDeveloper = () => {
  return (
    <div className="pd-dev-container">
      {/* Heading */}
      <h2 className="pd-dev-title">About Developer</h2>

      {/* Developer Info */}
      <div className="pd-dev-info">
        <img src={developer.logo} alt="logo" className="pd-dev-logo" />

        <div>
          <h3 className="pd-dev-name">{developer.name}</h3>
          <span className="pd-dev-role">Developer</span>
        </div>
      </div>

      <h3 className="pd-dev-project-title">
        Projects by {developer.name}
      </h3>

      <Button className="pd-dev-status-btn">Under Construction 1</Button>

      {/* Project Card */}
      <Card className="pd-dev-card" bodyStyle={{ padding: 0 }}>
        <div className="pd-dev-img-wrapper">
          <img src={project.image} alt="project" />

          <span className="pd-dev-badge">{project.tag}</span>
        </div>

        <div className="pd-dev-card-body">
          <div className="pd-dev-card-header">
            <h3>{project.name}</h3>

            <div className="pd-dev-icons">
              <ShareAltOutlined />
              <HeartOutlined />
            </div>
          </div>

          <p className="pd-dev-by">by {project.developer}</p>

          <div className="pd-dev-location">
            <EnvironmentOutlined />
            <span>{project.location}</span>
          </div>

          <div className="pd-dev-footer">
            <span>{project.type}</span>
            <b>{project.price}</b>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PDAboutDeveloper;