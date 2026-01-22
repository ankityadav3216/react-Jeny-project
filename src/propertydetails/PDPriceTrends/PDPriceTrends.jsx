import React, { useState } from 'react';
import { Tabs, Card, Select, Tag, Tooltip } from 'antd';
import { 
  InfoCircleOutlined, 
  PlusOutlined, 
  CaretUpOutlined,
  ArrowRightOutlined,
  LineChartOutlined,
  HomeOutlined,
  CameraOutlined,
  StarOutlined
} from '@ant-design/icons';
import './PDPriceTrends.css';

const { TabPane } = Tabs;
const { Option } = Select;

const PriceTrendsSection = () => {
  const [activeTab, setActiveTab] = useState('price-trends');
  const [timeFilter, setTimeFilter] = useState('3years');

  // Chart data for line chart
  const chartData = [
    { month: 'Jul 2024', project: 6.5, locality: 7.2 },
    { month: 'Oct 2024', project: 7.1, locality: 7.8 },
    { month: 'Jan 2025', project: 7.8, locality: 8.5 },
    { month: 'Apr 2025', project: 8.2, locality: 9.0 },
    { month: 'Jul 2025', project: 8.5, locality: 9.4 },
    { month: 'Jan 2026', project: 8.9, locality: 9.8 },
  ];

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <div className="pd-container-compact">
      {/* Top Navigation Tabs */}
      <div className="pd-tabs-container-compact">
        <Tabs 
          activeKey={activeTab} 
          onChange={handleTabChange}
          className="pd-tabs-compact"
          size="small"
        >
          <TabPane 
            tab={
              <span className="pd-tab-item-compact">
                <HomeOutlined className="pd-tab-icon-compact" />
                About
              </span>
            } 
            key="about-project"
          />
          <TabPane 
            tab={
              <span className="pd-tab-item-compact">
                <LineChartOutlined className="pd-tab-icon-compact" />
                Floor Plan
              </span>
            } 
            key="floor-plan"
          />
          <TabPane 
            tab={
              <span className="pd-tab-item-compact">
                <CameraOutlined className="pd-tab-icon-compact" />
                Tour
              </span>
            } 
            key="tour-project"
          />
          <TabPane 
            tab={
              <span className="pd-tab-item-compact">
                <StarOutlined className="pd-tab-icon-compact" />
                Amenities
              </span>
            } 
            key="amenities"
          />
          <TabPane 
            tab={
              <span className="pd-tab-item-compact">
                <StarOutlined className="pd-tab-icon-compact" />
                Reviews
              </span>
            } 
            key="ratings"
          />
        </Tabs>
      </div>

      {/* Price Trends Section */}
      <div className="pd-main-content-compact">
        {/* Section Title */}
        <div className="pd-title-section-compact">
          <div className="pd-title-row-compact">
            <h1 className="pd-title-compact">
              Price Trends: Casagrand Casablanca vs. Kanakapura Road (Apartments)
            </h1>
            <Tooltip title="Compare price trends between project and locality">
              <InfoCircleOutlined className="pd-info-icon-compact" />
            </Tooltip>
          </div>
          
          <Tag className="pd-appreciation-badge-compact">
            <CaretUpOutlined className="pd-badge-icon-compact" />
            <span>▲ 17.81% appreciation in avg price/sq.ft (last 1 year)</span>
          </Tag>
        </div>

        {/* Chart Container */}
        <div className="pd-chart-container-compact">
          <div className="pd-chart-header-compact">
            <div className="pd-chart-title-compact">Price per Sq. Ft. Trends</div>
            <div className="pd-time-filter-compact">
              <Select
                value={timeFilter}
                onChange={setTimeFilter}
                className="pd-time-select-compact"
                size="small"
              >
                <Option value="1year">Last 1 year</Option>
                <Option value="3years">Last 3 years</Option>
              </Select>
            </div>
          </div>

          {/* Chart - Compact */}
          <div className="pd-chart-area-compact">
            <svg width="100%" height="180" viewBox="0 0 500 180" className="pd-chart-svg-compact">
              {/* Grid Lines */}
              <g className="pd-grid-lines-compact">
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={`grid-h-${i}`}
                    x1="60"
                    y1={30 + i * 30}
                    x2="440"
                    y2={30 + i * 30}
                    stroke="#f0f0f0"
                    strokeWidth="1"
                  />
                ))}
              </g>

              {/* Y-axis Labels */}
              <g className="pd-y-axis-compact">
                {[10, 8, 6, 4, 2].map((value, i) => (
                  <text
                    key={`y-label-${value}`}
                    x="50"
                    y={30 + i * 30}
                    textAnchor="end"
                    fill="#666"
                    fontSize="9"
                  >
                    ₹{value}k
                  </text>
                ))}
              </g>

              {/* X-axis Labels */}
              <g className="pd-x-axis-compact">
                {chartData.map((item, i) => (
                  <text
                    key={`x-label-${i}`}
                    x={60 + i * 76}
                    y="160"
                    textAnchor="middle"
                    fill="#666"
                    fontSize="9"
                  >
                    {item.month}
                  </text>
                ))}
              </g>

              {/* Project Line (Orange) */}
              <path
                d={chartData.map((point, i) => 
                  `${i === 0 ? 'M' : 'L'} ${60 + i * 76} ${150 - (point.project - 2) * 30}`
                ).join(' ')}
                fill="none"
                stroke="#fa8c16"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Locality Line (Blue) */}
              <path
                d={chartData.map((point, i) => 
                  `${i === 0 ? 'M' : 'L'} ${60 + i * 76} ${150 - (point.locality - 2) * 30}`
                ).join(' ')}
                fill="none"
                stroke="#1890ff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Data Points */}
              {chartData.map((point, i) => (
                <g key={`points-${i}`}>
                  <circle
                    cx={60 + i * 76}
                    cy={150 - (point.project - 2) * 30}
                    r="3"
                    fill="#fa8c16"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <circle
                    cx={60 + i * 76}
                    cy={150 - (point.locality - 2) * 30}
                    r="3"
                    fill="#1890ff"
                    stroke="white"
                    strokeWidth="1"
                  />
                </g>
              ))}

              {/* Chart Legend */}
              <g className="pd-chart-legend-compact" transform="translate(340, 10)">
                <rect x="0" y="0" width="90" height="40" rx="3" fill="white" stroke="#e8e8e8" strokeWidth="1" />
                <circle cx="10" cy="12" r="4" fill="#fa8c16" />
                <text x="20" y="15" fontSize="8" fill="#333">Casagrand</text>
                <circle cx="10" cy="28" r="4" fill="#1890ff" />
                <text x="20" y="31" fontSize="8" fill="#333">Kanakapura</text>
              </g>
            </svg>
          </div>
        </div>

        {/* Comparison Cards - Compact */}
        <div className="pd-cards-container-compact">
          {/* Add More Card */}
          <Card className="pd-card-compact pd-card-add-compact">
            <div className="pd-card-add-content-compact">
              <PlusOutlined className="pd-add-icon-compact" />
              <div className="pd-add-text-compact">+ Add more</div>
            </div>
          </Card>

          {/* Project Card */}
          <Card className="pd-card-compact pd-card-project-compact">
            <div className="pd-card-header-compact">
              <div className="pd-card-dot-compact pd-dot-project-compact"></div>
              <div className="pd-card-label-compact">PROJECT</div>
            </div>
            <div className="pd-card-content-compact">
              <h3 className="pd-card-title-compact">Casagrand Casablanca</h3>
              <div className="pd-growth-section-compact">
                <div className="pd-growth-value-compact">
                  <CaretUpOutlined className="pd-growth-icon-compact" />
                  17.81%
                </div>
                <div className="pd-growth-label-compact">Last 1 Year</div>
              </div>
              <div className="pd-rate-section-compact">
                <div className="pd-rate-value-compact">₹8.5K/sq.ft</div>
                <div className="pd-rate-label-compact">Avg. rate</div>
              </div>
            </div>
          </Card>

          {/* Locality Card */}
          <Card className="pd-card-compact pd-card-locality-compact">
            <div className="pd-card-header-compact">
              <div className="pd-card-dot-compact pd-dot-locality-compact"></div>
              <div className="pd-card-label-compact">LOCALITY</div>
            </div>
            <div className="pd-card-content-compact">
              <h3 className="pd-card-title-compact">Kanakapura Road</h3>
              <div className="pd-growth-section-compact">
                <div className="pd-growth-value-compact">
                  <CaretUpOutlined className="pd-growth-icon-compact" />
                  19.49%
                </div>
                <div className="pd-growth-label-compact">Last 1 Year</div>
              </div>
              <div className="pd-rate-section-compact">
                <div className="pd-rate-value-compact">₹9.6K/sq.ft</div>
                <div className="pd-rate-label-compact">Avg. rate</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer Link */}
        <div className="pd-footer-link-compact">
          <a href="#" className="pd-trends-link-compact">
            See price trends in Kanakapura Road
            <ArrowRightOutlined className="pd-link-icon-compact" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PriceTrendsSection;