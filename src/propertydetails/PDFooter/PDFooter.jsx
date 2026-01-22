// import React from 'react';
// import { Row, Col, Input, Button } from 'antd';
// import { 
//   FacebookOutlined, 
//   TwitterOutlined, 
//   InstagramOutlined, 
//   LinkedinOutlined, 
//   YoutubeOutlined,
//   MailOutlined,
//   PhoneOutlined,
//   EnvironmentOutlined 
// } from '@ant-design/icons';
// import './PDFooter.css';

// const Footer = () => {
//   const footerLinks = {
//     'Buy': ['Homes for Sale', 'New Projects', 'Builder Floors', 'Villas', 'Plots'],
//     'Rent': ['Apartments for Rent', 'Houses for Rent', 'PG & Hostels', 'Commercial', 'Short Term'],
//     'Sell': ['Post Property Free', 'Property Valuation', 'Find Agents', 'Home Inspection', 'Sell Fast'],
//     'Company': ['About Us', 'Careers', 'Press', 'Blog', 'Contact Us'],
//   };

//   return (
//     <footer className="main-footer">
//       <div className="footer-container">
//         {/* Top Section */}
//         <div className="footer-top">
//           <div className="footer-brand">
//             <div className="footer-logo">
//               <div className="logo-icon">
//                 <div className="logo-gradient"></div>
//               </div>
//               <span className="logo-text">housing.com</span>
//             </div>
//             <p className="brand-description">
//               India's No. 1 property portal for buying, selling, and renting properties.
//             </p>
//             <div className="social-links">
//               <a href="#" className="social-icon"><FacebookOutlined /></a>
//               <a href="#" className="social-icon"><TwitterOutlined /></a>
//               <a href="#" className="social-icon"><InstagramOutlined /></a>
//               <a href="#" className="social-icon"><LinkedinOutlined /></a>
//               <a href="#" className="social-icon"><YoutubeOutlined /></a>
//             </div>
//           </div>
          
//           {/* Newsletter */}
//           <div className="newsletter-section">
//             <h3 className="newsletter-title">Stay Updated</h3>
//             <p className="newsletter-text">Subscribe to our newsletter for latest updates</p>
//             <div className="newsletter-form">
//               <Input 
//                 placeholder="Enter your email" 
//                 size="large"
//                 prefix={<MailOutlined />}
//                 className="newsletter-input"
//               />
//               <Button type="primary" className="subscribe-btn">
//                 Subscribe
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Links Section */}
//         <div className="footer-links">
//           <Row gutter={[32, 32]}>
//             {Object.entries(footerLinks).map(([category, links]) => (
//               <Col xs={12} sm={8} md={6} key={category}>
//                 <h4 className="links-category">{category}</h4>
//                 <ul className="links-list">
//                   {links.map((link, index) => (
//                     <li key={index}>
//                       <a href="#" className="footer-link">{link}</a>
//                     </li>
//                   ))}
//                 </ul>
//               </Col>
//             ))}
            
//             {/* Contact Info */}
//             <Col xs={12} sm={8} md={6}>
//               <h4 className="links-category">Contact Us</h4>
//               <ul className="contact-list">
//                 <li>
//                   <PhoneOutlined />
//                   <span>1800-123-4567</span>
//                 </li>
//                 <li>
//                   <MailOutlined />
//                   <span>support@housing.com</span>
//                 </li>
//                 <li>
//                   <EnvironmentOutlined />
//                   <span>Mumbai, India</span>
//                 </li>
//               </ul>
//             </Col>
//           </Row>
//         </div>

//         {/* Bottom Section */}
//         <div className="footer-bottom">
//           <div className="copyright">
//             © 2024 Housing.com. All rights reserved.
//           </div>
//           <div className="legal-links">
//             <a href="#" className="legal-link">Privacy Policy</a>
//             <a href="#" className="legal-link">Terms of Use</a>
//             <a href="#" className="legal-link">Site Map</a>
//             <a href="#" className="legal-link">Fraud Alert</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;