// // Header.jsx
// import React, { useState, useEffect } from 'react';
// import { Layout, Input, Button, Select, Space, Badge } from 'antd';
// import { 
//   EnvironmentOutlined, 
//   UserOutlined,
//   MessageOutlined,
//   BellOutlined,
//   MenuOutlined,
//   SearchOutlined 
// } from '@ant-design/icons';
// import { Home } from 'lucide-react';
// import { useLocation } from 'react-router-dom';
// import './PDHeader.css';

// const { Header: AntHeader } = Layout;
// const { Option } = Select;
// const { Search } = Input;

// const Header = () => {
//   const [location, setLocation] = useState('mumbai');
//   const currentPath = useLocation();
  
//   // Property detail page pe automatically city set karega
//   useEffect(() => {
//     if (currentPath.pathname.includes('/property/1')) {
//       setLocation('chennai'); // Casagrand Casamia property
//     } else if (currentPath.pathname.includes('/property/')) {
//       setLocation('mumbai'); // Other properties
//     }
//   }, [currentPath]);

//   const onSearch = (value) => {
//     console.log('Searching for:', value);
//     // Search logic here
//   };

//   return (
//     <AntHeader className="main-header">
//       <div className="header-container">
        
//         {/* Logo Section - EXACT SAME */}
//         <div className="logo-section">
//           <div className="logo-wrapper">
//             <Home className="logo-icon" />
//           </div>
//           <span className="logo-text">Jeny</span>
//         </div>

//         {/* Navigation Menu - SIRF 3 ITEMS */}
//         <div className="nav-menu">
//           <Button type="text" className="nav-item">Home Loans</Button>
//           <Button type="text" className="nav-item">Services</Button>
//           <Button type="text" className="nav-item">More</Button>
//         </div>

//         {/* Search Bar - NEW ADDITION */}
//         <div className="search-bar-container">
//           <Search
//             placeholder="Search for properties, builders, projects..."
//             onSearch={onSearch}
//             enterButton={<SearchOutlined style={{ color: '#fff' }} />}
//             className="header-search-bar"
//             size="middle"
//           />
//         </div>

//         {/* Right Actions - EXACT SAME */}
//         <Space className="header-actions">
//           <Select
//             value={location}
//             onChange={setLocation}
//             className="location-selector"
//             suffixIcon={<EnvironmentOutlined style={{ color: '#8B0000' }} />}
//             size="small"
//           >
//             <Option value="mumbai">Mumbai</Option>
//             <Option value="delhi">Delhi</Option>
//             <Option value="chennai">Chennai</Option>
//             <Option value="bangalore">Bangalore</Option>
//             <Option value="hyderabad">Hyderabad</Option>
//             <Option value="pune">Pune</Option>
//             <Option value="kolkata">Kolkata</Option>
//           </Select>

//           <Badge count={5} size="small" className="notification-badge">
//             <MessageOutlined className="action-icon" />
//           </Badge>
          
//           <Badge count={3} size="small" className="notification-badge">
//             <BellOutlined className="action-icon" />
//           </Badge>

//           <Button 
//             type="default"
//             icon={<UserOutlined />}
//             className="login-btn"
//             size="small"
//           >
//             Login
//           </Button>

//           <Button 
//             type="primary"
//             className="post-property-btn"
//             size="small"
//           >
//             Post Property
//           </Button>

//           <Button 
//             type="text"
//             icon={<MenuOutlined />}
//             className="mobile-menu-btn"
//           />
//         </Space>
//       </div>
//     </AntHeader>
//   );
// };

// export default Header;