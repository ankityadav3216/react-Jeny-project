// Amenities.jsx
import React, { useState } from "react";
import {
  Button,
  Typography,
  Checkbox,
  Radio,
  Space,
  InputNumber,
  Select,
  Divider
} from "antd";
import {
  PlusOutlined,
  MinusOutlined,
  DownOutlined,
  UpOutlined
} from "@ant-design/icons";
import "./Amenities.css";

const { Title, Text } = Typography;
const { Option } = Select;

const Amenities = () => {
  const [showMoreFeatures, setShowMoreFeatures] = useState(false);
  const [showMoreSociety, setShowMoreSociety] = useState(false);
  const [showMoreLocation, setShowMoreLocation] = useState(false);
  const [furnishingType, setFurnishingType] = useState(null);
  
  const [coveredParking, setCoveredParking] = useState(0);
  const [openParking, setOpenParking] = useState(0);

  const otherRooms = ["Pooja Room", "Study Room", "Servant Room", "Store Room"];
  const amenities = ["Maintenance Staff", "Water Storage", "Security / Fire Alarm", "Visitor Parking", "Vaastu Compliant", "Park", "Intercom Facility", "Lift(s)"];
  const propertyFeatures = ["High Ceiling Height", "False Ceiling Lighting", "Piped-gas", "Internet/wi-fi connectivity", "Air Conditioning", "Power Back-up", "Rain Water Harvesting", "Waste Disposal", "Pet Friendly", "Concierge"];
  const societyFeatures = ["Water softening plant", "Shopping Centre", "Fitness Centre / GYM", "Swimming Pool", "Club House", "Indoor Games", "Landscaped Garden"];
  const waterSources = ["Municipal corporation", "Borewell/Tank", "24*7 Water"];
  const overlooking = ["Pool", "Park/Garden", "Club", "Main Road", "Others"];
  const otherFeatures = ["In a gated society", "Corner Property", "Wheelchair friendly"];
  const propertyFacing = ["North", "South", "East", "West", "North-East", "North-West", "South-East", "South-West"];
  const furnishings = ["Light", "Fans", "AC", "TV", "Beds", "Wardrobe", "Geyser", "Sofa", "Washing Machine", "Stove", "Fridge", "Water Purifier", "Microwave", "Modular Kitchen", "Chimney", "Dining Table"];
  const locationAdvantages = ["Close to Metro Station", "Close to School", "Close to Hospital", "Close to Market", "Close to Railway Station", "Close to Bus Stand", "Close to Airport", "Near Shopping Mall"];

  return (
    <div className="amenities-container">
      {/* Header */}
      <div className="amenities-header">
        <Button type="text" className="back-btn">← Back</Button>
        <Title level={4} className="page-title">Add amenities/unique features</Title>
        <Text className="page-subtitle">These fields are used to populate USP & captions</Text>
        <Text className="optional-note">All fields on this page are optional</Text>
      </div>

      <div className="amenities-sections">
        {/* Other Rooms */}
        <div className="section-card">
          <Title level={5} className="section-title">
            Other rooms <span className="optional-label">(Optional)</span>
          </Title>
          <div className="checkbox-group">
            {otherRooms.map(room => (
              <div key={room} className="checkbox-item">
                <PlusOutlined className="plus-icon" />
                <Checkbox>{room}</Checkbox>
              </div>
            ))}
          </div>
        </div>

        {/* Furnishing */}
        <div className="section-card">
          <Title level={5} className="section-title">
            Furnishing <span className="optional-label">(Optional)</span>
          </Title>
          <div className="radio-group">
            <Radio.Group onChange={(e) => setFurnishingType(e.target.value)} value={furnishingType}>
              <Space direction="vertical">
                <Radio value="furnished"><strong>Furnished</strong></Radio>
                <Radio value="semi-furnished">Semi-furnished</Radio>
                <Radio value="un-furnished">Un-furnished</Radio>
              </Space>
            </Radio.Group>
          </div>

          {furnishingType === 'furnished' && (
            <div className="furnishing-details">
              <Text className="mandatory-note">At least three furnishings are mandatory for furnished</Text>
              <div className="furnishings-grid">
                {furnishings.map(item => (
                  <div key={item} className="furnishing-item">
                    <Checkbox>{item}</Checkbox>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Reserved Parking */}
        <div className="section-card">
          <Title level={5} className="section-title">
            Reserved Parking <span className="optional-label">(Optional)</span>
          </Title>
          <div className="parking-section">
            <div className="parking-item">
              <div className="parking-label">
                <Checkbox>Covered Parking</Checkbox>
              </div>
              <div className="parking-counter">
                <Button icon={<MinusOutlined />} onClick={() => setCoveredParking(Math.max(0, coveredParking - 1))} className="counter-btn" />
                <InputNumber min={0} value={coveredParking} onChange={setCoveredParking} className="counter-input" />
                <Button icon={<PlusOutlined />} onClick={() => setCoveredParking(coveredParking + 1)} className="counter-btn" />
              </div>
            </div>
            <div className="parking-item">
              <div className="parking-label">
                <Checkbox>Open Parking</Checkbox>
              </div>
              <div className="parking-counter">
                <Button icon={<MinusOutlined />} onClick={() => setOpenParking(Math.max(0, openParking - 1))} className="counter-btn" />
                <InputNumber min={0} value={openParking} onChange={setOpenParking} className="counter-input" />
                <Button icon={<PlusOutlined />} onClick={() => setOpenParking(openParking + 1)} className="counter-btn" />
              </div>
            </div>
          </div>
        </div>

        {/* Water Source */}
        <div className="section-card">
          <Title level={5} className="section-title">Water Source</Title>
          <div className="checkbox-group">
            {waterSources.map(source => (
              <div key={source} className="checkbox-item">
                <PlusOutlined className="plus-icon" />
                <Checkbox>{source}</Checkbox>
              </div>
            ))}
          </div>
        </div>

        {/* Overlooking */}
        <div className="section-card">
          <Title level={5} className="section-title">Overlooking</Title>
          <div className="checkbox-group">
            {overlooking.map(item => (
              <div key={item} className="checkbox-item">
                <PlusOutlined className="plus-icon" />
                <Checkbox>{item}</Checkbox>
              </div>
            ))}
          </div>
        </div>

        {/* Other Features */}
        <div className="section-card">
          <Title level={5} className="section-title">Other Features</Title>
          <div className="checkbox-group">
            {otherFeatures.map(feature => (
              <div key={feature} className="checkbox-item">
                <PlusOutlined className="plus-icon" />
                <Checkbox>{feature}</Checkbox>
              </div>
            ))}
          </div>
        </div>

        {/* Power Backup */}
        <div className="section-card">
          <Title level={5} className="section-title">Power Back up</Title>
          <div className="radio-group horizontal">
            <Radio.Group>
              <Space>
                <Radio value="none">None</Radio>
                <Radio value="partial">Partial</Radio>
                <Radio value="full">Full</Radio>
              </Space>
            </Radio.Group>
          </div>
        </div>

        {/* Amenities */}
        <div className="section-card">
          <Title level={5} className="section-title">Amenities</Title>
          <div className="checkbox-grid">
            {amenities.map(amenity => (
              <div key={amenity} className="checkbox-item">
                <PlusOutlined className="plus-icon" />
                <Checkbox>{amenity}</Checkbox>
              </div>
            ))}
          </div>
        </div>

        {/* Property Features */}
        <div className="section-card">
          <Title level={5} className="section-title">Property Features</Title>
          <div className="checkbox-grid">
            {propertyFeatures.slice(0, showMoreFeatures ? propertyFeatures.length : 4).map(feature => (
              <div key={feature} className="checkbox-item">
                <PlusOutlined className="plus-icon" />
                <Checkbox>{feature}</Checkbox>
              </div>
            ))}
          </div>
          {propertyFeatures.length > 4 && (
            <Button type="link" onClick={() => setShowMoreFeatures(!showMoreFeatures)} className="show-more-btn">
              {showMoreFeatures ? (<><UpOutlined /> Show less</>) : (<>{propertyFeatures.length - 4} more <DownOutlined /></>)}
            </Button>
          )}
        </div>

        {/* Society/Building feature */}
        <div className="section-card">
          <Title level={5} className="section-title">Society/Building feature</Title>
          <div className="checkbox-grid">
            {societyFeatures.slice(0, showMoreSociety ? societyFeatures.length : 4).map(feature => (
              <div key={feature} className="checkbox-item">
                <PlusOutlined className="plus-icon" />
                <Checkbox>{feature}</Checkbox>
              </div>
            ))}
          </div>
          {societyFeatures.length > 4 && (
            <Button type="link" onClick={() => setShowMoreSociety(!showMoreSociety)} className="show-more-btn">
              {showMoreSociety ? (<><UpOutlined /> Show less</>) : (<>{societyFeatures.length - 4} more <DownOutlined /></>)}
            </Button>
          )}
        </div>

        {/* Additional Features */}
        <div className="section-card">
          <Title level={5} className="section-title">Additional Features</Title>
          <div className="additional-features">
            <Text type="secondary">Click to add additional features</Text>
          </div>
        </div>

        {/* Property facing */}
        <div className="section-card">
          <Title level={5} className="section-title">Property facing</Title>
          <div className="property-facing-grid">
            {propertyFacing.map(direction => (
              <Radio key={direction} value={direction} className="facing-radio">{direction}</Radio>
            ))}
          </div>
        </div>

        {/* Type of flooring */}
        <div className="section-card">
          <Title level={5} className="section-title">Type of flooring</Title>
          <Select placeholder="Select" className="flooring-select" suffixIcon={<DownOutlined />}>
            <Option value="marble">Marble</Option>
            <Option value="vitrified">Vitrified Tiles</Option>
            <Option value="wooden">Wooden</Option>
            <Option value="granite">Granite</Option>
          </Select>
        </div>

        {/* Width of facing road */}
        <div className="section-card">
          <Title level={5} className="section-title">Width of facing road</Title>
          <div className="road-width">
            <InputNumber placeholder="Enter the width" className="road-input" />
            <Text className="unit">Feet</Text>
          </div>
        </div>

        {/* Location Advantages */}
        <div className="section-card">
          <Title level={5} className="section-title">
            Location Advantages
            <Text className="subtitle" type="secondary">Highlight the nearby landmarks*</Text>
          </Title>
          <div className="checkbox-grid">
            {locationAdvantages.slice(0, showMoreLocation ? locationAdvantages.length : 5).map(advantage => (
              <div key={advantage} className="checkbox-item">
                <PlusOutlined className="plus-icon" />
                <Checkbox>{advantage}</Checkbox>
              </div>
            ))}
          </div>
          {locationAdvantages.length > 5 && (
            <Button type="link" onClick={() => setShowMoreLocation(!showMoreLocation)} className="show-more-btn">
              {showMoreLocation ? (<><UpOutlined /> Show less</>) : (<>Show more <DownOutlined /></>)}
            </Button>
          )}
        </div>
      </div>

      
    </div>
  );
};

export default Amenities;
