import React from "react";
import { Card, Button } from "antd";
import {
  PhoneOutlined,
  CalendarOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import "./DeveloperContactCard.css";

const developer = {
  name: "Manibhadra Worldwide LLP",
  logo: "https://static.vecteezy.com/system/resources/previews/027/578/616/original/construction-logo-with-buildings-and-elements-free-vector.jpg",
};

const DeveloperContactCard = () => {
  return (
    <Card className="developer-card" bordered={false}>
      <div className="card-header">
        <div className="logo-box">
          {developer.logo ? (
            <img
              src={developer.logo}
              alt={developer.name}
              className="logo-img"
            />
          ) : (
            <div className="logo-placeholder" />
          )}
        </div>

        <div className="title-section">
          <h2 className="dev-title">{developer.name}</h2>
        </div>

        <span className="dev-role">Developer</span>
      </div>

      <Button
        block
        size="large"
        icon={<PhoneOutlined />}
        className="contact-btn"
      >
        View Contact
      </Button>

      <Button
        block
        size="large"
        icon={<WhatsAppOutlined />}
        className="whatsapp-btn"
      >
        WhatsApp
      </Button>

      <Button
        block
        size="large"
        icon={<CalendarOutlined />}
        className="schedule-btn"
      >
        Schedule Visit
      </Button>
    </Card>
  );
};

export default DeveloperContactCard;