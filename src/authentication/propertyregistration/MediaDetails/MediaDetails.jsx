// MediaDetails.jsx
import React from "react";
import {
  Button,
  Typography,
  Alert,
  Tooltip
} from "antd";
import {
  UploadOutlined,
  VideoCameraOutlined,
  CameraOutlined,
  InfoCircleOutlined,
  WarningOutlined,
  PictureOutlined
} from "@ant-design/icons";
import "./MediaDetails.css";

const { Title, Text } = Typography;

const MediaDetails = () => {
  return (
    <div className="media-wrapper">

      {/* ================= Video Section ================= */}
      <div className="section">
        <Title level={4} className="section-title">
          <VideoCameraOutlined /> Add one video of property
        </Title>

        <Text className="section-sub">
          <InfoCircleOutlined />
          A video is worth a thousand pictures. Properties with videos get higher page views
        </Text>

        <a className="link">
          <InfoCircleOutlined /> Make sure it follows the Video Guidelines
        </a>

        <div className="video-container">
          <div className="dragger-content">
            <Text className="dragger-text">
              Drag your videos here or <span className="highlight">click to upload</span>
            </Text>

            <Text className="hint">
              <InfoCircleOutlined /> Upload video of max size 80 MB in format
              .mov, .mp4, .h264. Duration less than 10 mins.
            </Text>

            <Button
              type="primary"
              icon={<UploadOutlined />}
              className="upload-btn"
            >
              Upload Video
            </Button>
          </div>
        </div>

        <Alert
          type="warning"
          showIcon
          icon={<WarningOutlined />}
          message={
            <div className="alert-message">
              Don't have a Video! We can help you create one with our Paid Plans.
              <a className="highlight"> Contact to Upgrade</a>
            </div>
          }
          className="alert-box"
        />
      </div>

      {/* ================= Photo Section ================= */}
      <div className="section">
        <Title level={4} className="section-title">
          <CameraOutlined /> Add photos of your property{" "}
          <span className="optional">(Optional)</span>
        </Title>

        <Text className="section-sub">
          <InfoCircleOutlined />
          A picture is worth a thousand words. 87% of buyers look at photos before buying
        </Text>

        <div className="photo-container">
          <div className="dragger-content">
            <PictureOutlined className="photo-icon" />

            <Text className="dragger-title">Add at least 5 photos</Text>

            <Text className="hint">
              <InfoCircleOutlined /> Drag and drop your photos here <br />
              Upto 50 photos · Max size 10 MB
            </Text>

            <Tooltip
              title="Add 4+ property photos & increase responses upto 21%"
              placement="top"
              color="#001529"
            >
              <Button
                type="primary"
                icon={<UploadOutlined />}
                className="photo-btn"
              >
                Upload Photos Now
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaDetails;
