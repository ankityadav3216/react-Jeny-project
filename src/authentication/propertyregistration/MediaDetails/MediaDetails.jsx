// MediaDetails.jsx
import React from "react";
import {
  Upload,
  Button,
  Typography,
  Input,
  Alert,
  Space,
  Tooltip
} from "antd";
import {
  UploadOutlined,
  WhatsAppOutlined,
  MessageOutlined,
  VideoCameraOutlined,
  CameraOutlined,
  InfoCircleOutlined,
  EditOutlined,
  WarningOutlined,
  PictureOutlined,
  PhoneOutlined,
  ArrowRightOutlined,
  FileTextOutlined
} from "@ant-design/icons";
import "./MediaDetails.css";

const { Title, Text } = Typography;
const { Dragger } = Upload;
const { TextArea } = Input;

const MediaDetails = () => {
  return (
    <div className="media-wrapper">

      {/* Video Section */}
      <div className="section">
        <Title level={4} className="section-title">
          <VideoCameraOutlined /> Add one video of property
        </Title>

        <Text className="section-sub">
          <InfoCircleOutlined /> A video is worth a thousand pictures. Properties with videos get higher page views
        </Text>

        <a className="link">
          <InfoCircleOutlined /> Make sure it follows the Video Guidelines
        </a>

        <div className="video-upload">
          <Dragger className="video-dragger">
            <div className="dragger-content">
              <Text className="dragger-text">Drag your videos here or <span className="highlight">click to upload</span></Text>
              <Text className="hint">
                <InfoCircleOutlined /> Upload video of max size 80 MB in format .mov, .mp4, .h264. Video duration should be less than 10 mins.
              </Text>
            </div>
          </Dragger>
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

      {/* Photo Section */}
      <div className="section">
        <Title level={4} className="section-title">
          <CameraOutlined /> Add photos of your property <span className="optional">(Optional)</span>
        </Title>

        <Text className="section-sub">
          <InfoCircleOutlined /> A picture is worth a thousand words. 87% of buyers look at photos before buying
        </Text>

        <div className="photo-upload">
          <Dragger className="photo-dragger">
            <div className="dragger-content">
              <PictureOutlined className="photo-icon" />
              <Text className="dragger-title">Add at least 5 photos</Text>
              <Text className="hint">
                <InfoCircleOutlined /> Drag and drop your photos here <br />
                Upto 50 photos · Max size 10 MB · Formats: jpg, jpeg, gif, webp, heic, heif
              </Text>

              <Tooltip 
                title="Add 4+ property photos & increase responses upto 21%"
                placement="top"
                color="#001529"
              >
                <Button type="primary" icon={<UploadOutlined />} className="photo-btn">
                  Upload Photos Now
                </Button>
              </Tooltip>
            </div>
          </Dragger>
        </div>

        <div className="mobile-upload">
          <Text className="mobile-title">
            <PhoneOutlined /> Now you can also upload photos directly from your phone
          </Text>

          <Text className="hint">
            <InfoCircleOutlined /> With your registered number +91-8806255527
          </Text>

          <Space direction="vertical" className="upload-buttons">
            <Button 
              icon={<WhatsAppOutlined className="whatsapp-icon" />} 
              className="whatsapp-btn"
            >
              Send photos over WhatsApp
            </Button>
            <Button 
              icon={<MessageOutlined />}
              className="sms-btn"
            >
              Get photo upload link over SMS
            </Button>
          </Space>

          <Alert
            type="warning"
            showIcon
            icon={<WarningOutlined />}
            message="Without photos your ad will be ignored by buyers"
            className="alert-box"
          />
        </div>
      </div>

      {/* Description */}
      <div className="section">
        <Title level={4} className="section-title">
          <EditOutlined /> What makes your property unique
        </Title>

        <Text className="section-sub">
          <InfoCircleOutlined /> Adding description will increase your listing visibility
        </Text>

        <TextArea
          rows={4}
          maxLength={5000}
          placeholder="Share some details about your property like spacious rooms, well maintained facilities.."
          className="description-input"
        />

        <div className="desc-footer">
          <Text className="hint">
            <InfoCircleOutlined /> Minimum 30 characters required
          </Text>
          <a className="highlight">
            <FileTextOutlined /> Yes, Write for me
          </a>
        </div>
      </div>

      <Button className="continue-btn" icon={<ArrowRightOutlined />}>
        Continue without Photos
      </Button>
    </div>
  );
};

export default MediaDetails;