import React from "react";
import {
  Upload,
  Button,
  Input,
  Radio,
  Checkbox,
} from "antd";
import {
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "./MediaDetails.css";

const { TextArea } = Input;

const MediaDetails = () => {
  return (
    <div className="md-wrapper">
      {/* LEFT STEPPER */}
      <div className="md-sidebar">
        <ul>
          <li className="done">Basic Details</li>
          <li className="done">Location Details</li>
          <li className="done">Property Profile</li>
          <li className="active">Photos, Videos & Voice-over</li>
          <li>Amenities section</li>
        </ul>

        <div className="md-score">
          <div className="circle">65%</div>
          <p>Property Score</p>
        </div>
      </div>

      {/* CENTER CONTENT */}
      <div className="md-content">
        {/* VIDEO UPLOAD */}
        <h2>Add one video of property</h2>
        <p className="md-sub">
          A video is worth a thousand pictures.
        </p>

        <div className="md-upload-box">
          <Upload>
            <Button icon={<VideoCameraOutlined />}>
              Upload Video
            </Button>
          </Upload>
          <p className="md-hint">
            Max size 80 MB · mp4 / mov · less than 10 mins
          </p>
        </div>

        <div className="md-warning">
          Don’t have a video? We can help you create one with paid plans.
        </div>

        {/* IMAGE UPLOAD */}
        <h2 className="mt-8">Add photos of your property</h2>

        <div className="md-upload-box">
          <Upload multiple>
            <Button icon={<UploadOutlined />}>
              Upload Photos Now
            </Button>
          </Upload>
          <p className="md-hint">
            Add at least 5 photos · Max 10 MB each
          </p>
        </div>

        {/* PHONE OPTIONS */}
        <div className="md-phone">
          <p>Now you can also upload photos directly from your phone</p>

          <Radio.Group>
            <Radio value="whatsapp">
              Send photos over WhatsApp
            </Radio>
            <Radio value="sms">
              Get photo upload link over SMS
            </Radio>
          </Radio.Group>
        </div>

        <div className="md-warning">
          Without photos your ad will be ignored by buyers
        </div>

        {/* DESCRIPTION */}
        <h2 className="mt-8">What makes your property unique</h2>
        <TextArea
          rows={4}
          placeholder="Share some details about your property..."
        />
        <div className="md-footer">
          <span>Minimum 30 characters required</span>
          <a href="#">Yes, Write for me</a>
        </div>

        <div className="md-btn">
          <Button type="primary" size="large">
            Continue without Photos
          </Button>
        </div>
      </div>

      {/* RIGHT INFO */}
      <div className="md-right">
        <h3>Make your picture perfect!</h3>
        <ul>
          <li>Capture photos in landscape mode</li>
          <li>Click photos during the day</li>
          <li>Avoid using flash</li>
          <li>Tidy up for better impact</li>
          <li>Edit with 99acres filters</li>
        </ul>
      </div>
    </div>
  );
};

export default MediaDetails;
