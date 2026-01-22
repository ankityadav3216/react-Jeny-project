import React from 'react';
import { Input, Select, Button } from 'antd';
import { 
  SearchOutlined, 
  EnvironmentOutlined,
  FilterOutlined 
} from '@ant-design/icons';
import './SearchBar.css';

const { Option } = Select;

const SearchBar = () => {
  return (
    <div className="search-section-compact">
      
      {/* Title */}
      <div className="search-title-wrapper-compact">
        <h2 className="search-title-compact">
          Find Your <span className="title-highlight-compact">Dream Property</span>
        </h2>
        <p className="search-subtitle-compact">
          Search from 1L+ properties across India
        </p>
      </div>

      {/* Compact Search Form */}
      <div className="search-form-compact">
        <div className="search-grid-compact">
          
          {/* Location Input */}
          <div className="search-group-compact">
            <div className="input-group-compact">
              <EnvironmentOutlined className="input-icon-compact" />
              <Input
                placeholder="Enter location"
                className="search-input-compact"
                size="middle"
              />
            </div>
          </div>

          {/* Property Type Dropdown */}
          <div className="search-group-compact">
            <Select
              defaultValue="apartment"
              className="select-compact"
              size="middle"
              suffixIcon={<span className="dropdown-arrow-compact">▼</span>}
            >
              <Option value="apartment">Apartments</Option>
              <Option value="house">Houses</Option>
              <Option value="villa">Villas</Option>
              <Option value="plot">Plots</Option>
              <Option value="commercial">Commercial</Option>
            </Select>
          </div>

          {/* Budget Dropdown */}
          <div className="search-group-compact">
            <Select
              defaultValue="any"
              className="select-compact"
              size="middle"
              suffixIcon={<span className="dropdown-arrow-compact">▼</span>}
            >
              <Option value="any">Any Budget</Option>
              <Option value="20-40">₹20-40 Lakhs</Option>
              <Option value="40-60">₹40-60 Lakhs</Option>
              <Option value="60-80">₹60-80 Lakhs</Option>
              <Option value="80-1cr">₹80L - 1Cr</Option>
              <Option value="1cr+">₹1Cr+</Option>
            </Select>
          </div>

          {/* Search Button */}
          <div className="search-group-compact">
            <Button 
              type="primary"
              icon={<SearchOutlined />}
              className="search-btn-compact"
              size="middle"
            >
              Search
            </Button>
          </div>

          {/* Filter Button */}
          <div className="search-group-compact">
            <Button 
              type="default"
              icon={<FilterOutlined />}
              className="filter-btn-compact"
              size="middle"
            >
              Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Tags */}
      <div className="quick-tags-compact">
        <span className="tag-compact">Mumbai</span>
        <span className="tag-compact">Bangalore</span>
        <span className="tag-compact">Delhi</span>
        <span className="tag-compact">Pune</span>
        <span className="tag-compact">Hyderabad</span>
        <span className="tag-compact">Chennai</span>
      </div>
    </div>
  );
};

export default SearchBar;