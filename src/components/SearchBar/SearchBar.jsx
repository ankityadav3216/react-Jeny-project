import React from 'react';
import { Input, Select, Button } from 'antd';
import { 
  SearchOutlined, 
  EnvironmentOutlined,
  HomeOutlined,
  WalletOutlined 
} from '@ant-design/icons';
import './SearchBar.css';

const { Option } = Select;

const SearchBar = () => {
  return (
    <div className="search-section-minimal">
      
      {/* Minimal Title */}
      <div className="search-title-wrapper-minimal">
        <h2 className="search-title-minimal">
          Find Your <span className="title-highlight-minimal">Dream Home</span>
        </h2>
        <p className="search-subtitle-minimal">
          Discover properties matching your lifestyle & budget
        </p>
      </div>

      {/* Minimal Search Form */}
      <div className="search-form-minimal">
        <div className="search-grid-minimal">
          
          {/* Location Input */}
          <div className="search-group-minimal">
            <div className="input-wrapper-minimal">
              <EnvironmentOutlined className="input-icon-minimal" />
              <Input
                placeholder="Enter location"
                className="search-input-minimal"
                size="middle"
              />
            </div>
          </div>

          {/* Property Type */}
          <div className="search-group-minimal">
            <Select
              defaultValue="apartment"
              className="select-minimal"
              size="middle"
              suffixIcon={<span className="dropdown-arrow-minimal">▼</span>}
            >
              <Option value="apartment">Apartments</Option>
              <Option value="house">Houses</Option>
              <Option value="villa">Villas</Option>
              <Option value="plot">Plots</Option>
              <Option value="commercial">Commercial</Option>
            </Select>
          </div>

          {/* Budget */}
          <div className="search-group-minimal">
            <Select
              defaultValue="any"
              className="select-minimal"
              size="middle"
              suffixIcon={<span className="dropdown-arrow-minimal">▼</span>}
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
          <div className="search-group-minimal">
            <Button 
              type="primary"
              icon={<SearchOutlined />}
              className="search-btn-minimal"
              size="middle"
            >
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Minimal Quick Tags */}
      <div className="quick-tags-minimal">
        <span className="tag-minimal">Mumbai</span>
        <span className="tag-minimal">Bangalore</span>
        <span className="tag-minimal">Delhi</span>
        <span className="tag-minimal">Pune</span>
        <span className="tag-minimal">Hyderabad</span>
        <span className="tag-minimal">Chennai</span>
      </div>
    </div>
  );
};

export default SearchBar;