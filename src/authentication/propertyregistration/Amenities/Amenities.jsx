import React from "react";
import { Button, Tag } from "antd";
import "./Amenities.css";

const Amenities = () => {
  return (
    <div className="am-wrapper">
      {/* LEFT STEPPER */}
      <div className="am-sidebar">
        <ul>
          <li className="done">Basic Details</li>
          <li className="done">Location Details</li>
          <li className="done">Property Profile</li>
          <li className="done">Photos, Videos & Voice-over</li>
          <li className="active">Amenities section</li>
        </ul>

        <div className="am-score">
          <div className="circle">75%</div>
          <p>Property Score</p>
        </div>
      </div>

      {/* CENTER */}
      <div className="am-content">
        <h2>Add amenities / unique features</h2>
        <p className="am-sub">
          These fields are optional but increase responses
        </p>

        {/* OTHER ROOMS */}
        <div className="am-block">
          <h3>Other rooms</h3>
          <div className="am-tags">
            <Tag>+ Pooja Room</Tag>
            <Tag>+ Study Room</Tag>
            <Tag>+ Servant Room</Tag>
            <Tag>+ Store Room</Tag>
          </div>
        </div>

        {/* FURNISHING */}
        <div className="am-block">
          <h3>Furnishing</h3>
          <div className="am-tags">
            <Tag>Furnished</Tag>
            <Tag>Semi-furnished</Tag>
            <Tag>Un-furnished</Tag>
          </div>
        </div>

        {/* PARKING */}
        <div className="am-block">
          <h3>Reserved Parking</h3>
          <div className="am-parking">
            <span>Covered Parking</span>
            <Button size="small">-</Button>
            <span>0</span>
            <Button size="small">+</Button>

            <span className="ml">Open Parking</span>
            <Button size="small">-</Button>
            <span>0</span>
            <Button size="small">+</Button>
          </div>
        </div>

        {/* AMENITIES */}
        <div className="am-block">
          <h3>Amenities</h3>
          <div className="am-tags">
            <Tag>+ Maintenance Staff</Tag>
            <Tag>+ Water Storage</Tag>
            <Tag>+ Security / Fire Alarm</Tag>
            <Tag>+ Visitor Parking</Tag>
            <Tag>+ Vaastu Compliant</Tag>
            <Tag>+ Park</Tag>
            <Tag>+ Intercom Facility</Tag>
            <Tag>+ Lift(s)</Tag>
          </div>
        </div>

        {/* PROPERTY FEATURES */}
        <div className="am-block">
          <h3>Property Features</h3>
          <div className="am-tags">
            <Tag>+ High Ceiling Height</Tag>
            <Tag>+ False Ceiling Lighting</Tag>
            <Tag>+ Piped Gas</Tag>
            <Tag>+ Internet / Wi-Fi</Tag>
            <Tag className="more">7 more</Tag>
          </div>
        </div>

        {/* SOCIETY FEATURES */}
        <div className="am-block">
          <h3>Society / Building features</h3>
          <div className="am-tags">
            <Tag>+ Water Softening Plant</Tag>
            <Tag>+ Shopping Centre</Tag>
            <Tag>+ Fitness Centre / GYM</Tag>
            <Tag>+ Swimming Pool</Tag>
            <Tag className="more">2 more</Tag>
          </div>
        </div>

        <Button type="primary" size="large" className="am-submit">
          Save and Submit
        </Button>
      </div>

      {/* RIGHT INFO */}
      <div className="am-right">
        <p>
          These are the features that buyers look for. Highlighting them attracts
          more responses.
        </p>
      </div>
    </div>
  );
};

export default Amenities;
