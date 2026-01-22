import React, { useState } from 'react';
import { InfoCircleOutlined, PlusOutlined, MinusOutlined, ReloadOutlined, EyeOutlined } from '@ant-design/icons';
import { Tabs, Tooltip, Card, Button } from 'antd';
import './PDFloorPlan.css';

const { TabPane } = Tabs;

const PDFloorPlan = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState('1');
  
  // State for floor plan controls
  const [is3DView, setIs3DView] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(100);
  
  // Floor plan data based on selected tab
  const floorPlanData = {
    '1': {
      title: '4 BHK Apartment',
      price: '₹2.39 Cr',
      area: '3039 SQ. FT',
      roomDetails: [
        { name: 'Bedroom 1', dimensions: '12\'2" × 17\'4"' },
        { name: 'Dressing Room', dimensions: '10\'3" × 5\'10"' },
        { name: 'Attached Bathroom', dimensions: '10\'3" × 6\'0"' },
        { name: 'Bedroom 2', dimensions: '11\'2" × 17\'' },
        { name: 'Living Room', dimensions: '18\'0" × 15\'6"' },
        { name: 'Kitchen', dimensions: '10\'0" × 12\'0"' }
      ]
    },
    '2': {
      title: '5 BHK Villament',
      price: '₹3 Cr',
      area: '3987 SQ. FT',
      roomDetails: [
        { name: 'Bedroom 1', dimensions: '14\'2" × 18\'4"' },
        { name: 'Dressing Room', dimensions: '12\'3" × 7\'10"' },
        { name: 'Attached Bathroom', dimensions: '12\'3" × 8\'0"' },
        { name: 'Bedroom 2', dimensions: '13\'2" × 19\'' },
        { name: 'Living Room', dimensions: '22\'0" × 18\'6"' },
        { name: 'Kitchen', dimensions: '14\'0" × 16\'0"' }
      ]
    },
    '3': {
      title: '5 BHK Penthouse',
      price: '₹3.45 – 3.51 Cr',
      area: '4200 SQ. FT',
      roomDetails: [
        { name: 'Bedroom 1', dimensions: '16\'2" × 20\'4"' },
        { name: 'Dressing Room', dimensions: '14\'3" × 9\'10"' },
        { name: 'Attached Bathroom', dimensions: '14\'3" × 10\'0"' },
        { name: 'Bedroom 2', dimensions: '15\'2" × 21\'' },
        { name: 'Living Room', dimensions: '25\'0" × 20\'6"' },
        { name: 'Kitchen', dimensions: '16\'0" × 18\'0"' }
      ]
    }
  };

  // Get current floor plan data
  const currentData = floorPlanData[activeTab];

  // Handle tab change
  const handleTabChange = (key) => {
    setActiveTab(key);
    setZoomLevel(100);
  };

  // Handle zoom in
  const handleZoomIn = () => {
    if (zoomLevel < 200) setZoomLevel(zoomLevel + 10);
  };

  // Handle zoom out
  const handleZoomOut = () => {
    if (zoomLevel > 50) setZoomLevel(zoomLevel - 10);
  };

  // Handle reset
  const handleReset = () => {
    setZoomLevel(100);
  };

  // Toggle 3D/2D view
  const toggleView = () => {
    setIs3DView(!is3DView);
  };

  return (
    <div  id= "floor-plan" className="pd-floorplan-container">
      {/* Top Section - Heading */}
      <div className="pd-header-section">
        <h1 className="pd-main-heading">Price & Floor Plan</h1>
      </div>

      {/* Tabs Section */}
      <div className="pd-tabs-section">
        <Tabs 
          activeKey={activeTab} 
          onChange={handleTabChange}
          className="pd-custom-tabs"
          size="small"
        >
          <TabPane 
            tab={
              <div className="pd-tab-content">
                <span className="pd-tab-title">4 BHK</span>
                <span className="pd-tab-price">₹2.39 Cr</span>
              </div>
            } 
            key="1"
          />
          <TabPane 
            tab={
              <div className="pd-tab-content">
                <span className="pd-tab-title">5 BHK Villament</span>
                <span className="pd-tab-price">₹3 Cr</span>
              </div>
            } 
            key="2"
          />
          <TabPane 
            tab={
              <div className="pd-tab-content">
                <span className="pd-tab-title">5 BHK Penthouse</span>
                <span className="pd-tab-price">₹3.45-3.51 Cr</span>
              </div>
            } 
            key="3"
          />
        </Tabs>
      </div>

      {/* Area & Price Display */}
      <div className="pd-info-section">
        <div className="pd-area-display">
          <div className="pd-area-label">TOTAL AREA</div>
          <div className="pd-area-value">{currentData.area}</div>
        </div>
        
        <div className="pd-price-display">
          <div className="pd-price-row">
            <span className="pd-price-label">PRICE</span>
            <span className="pd-price-value">{currentData.price}</span>
            <Tooltip 
              title={
                <div className="pd-tooltip-content">
                  <p><strong>Price Breakup:</strong></p>
                  <p>Base Price: {currentData.price}</p>
                  <p>Registration: ₹2.5 Lakh</p>
                  <p>Maintenance: ₹5,000/month</p>
                  <p>Club Charges: ₹1 Lakh</p>
                  <p>Parking: ₹2 Lakh</p>
                </div>
              }
              color="#dc3545"
            >
              <InfoCircleOutlined className="pd-info-icon" />
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Floor Plan Viewer */}
      <div className="pd-floorplan-viewer">
        {/* Floor Plan Viewer */}
        <div className="pd-viewer-container">
          <div 
            className="pd-floorplan-image"
            style={{ 
              transform: `scale(${zoomLevel / 100})`
            }}
          >
            <div className="pd-floorplan-placeholder">
              <div className="pd-floorplan-grid">
                {/* Simple grid representation */}
                <div className="pd-room-rect bedroom-1">B1</div>
                <div className="pd-room-rect bedroom-2">B2</div>
                <div className="pd-room-rect living">LR</div>
                <div className="pd-room-rect kitchen">K</div>
                <div className="pd-room-rect bathroom">B</div>
                <div className="pd-room-rect dressing">D</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Controls */}
        <div className="pd-controls-section">
          <div className="pd-view-toggle">
            <Button 
              size="small"
              type={is3DView ? "primary" : "default"}
              className={`pd-toggle-btn ${is3DView ? 'active' : ''}`}
              onClick={toggleView}
            >
              3D
            </Button>
            <Button 
              size="small"
              type={!is3DView ? "primary" : "default"}
              className={`pd-toggle-btn ${!is3DView ? 'active' : ''}`}
              onClick={toggleView}
            >
              2D
            </Button>
          </div>

          <div className="pd-zoom-controls">
            <Button 
              size="small"
              className="pd-zoom-btn"
              onClick={handleZoomIn}
              icon={<PlusOutlined />}
            />
            <Button 
              size="small"
              className="pd-zoom-btn"
              onClick={handleZoomOut}
              icon={<MinusOutlined />}
            />
          </div>

          <div className="pd-other-controls">
            <Button 
              size="small"
              className="pd-reset-btn"
              onClick={handleReset}
              icon={<ReloadOutlined />}
            />
          </div>
        </div>
      </div>

      {/* Interactive Label */}
      <div className="pd-interactive-label">
        <EyeOutlined className="pd-eye-icon" />
        <span>Explore 3D Interactive Floor Plan</span>
      </div>

      {/* Room Details */}
      <div className="pd-room-details-section">
        <h3 className="pd-room-heading">Room Dimensions</h3>
        
        <div className="pd-room-cards-container">
          {currentData.roomDetails.map((room, index) => (
            <Card 
              key={index} 
              className="pd-room-card"
              size="small"
            >
              <div className="pd-room-card-content">
                <div className="pd-room-name">{room.name}</div>
                <div className="pd-room-dimensions">{room.dimensions}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PDFloorPlan;