// import React from 'react';
// import './PDSimilarProjects.css';

// const PDSimilarProjects = () => {
//   const similarProjects = [
//     {
//       id: 1,
//       name: "Casagrand Grandeur",
//       location: "Velachery, Chennai",
//       price: "₹85L - 1.2Cr",
//       area: "1300-1850 sqft",
//       bhk: "2,3 BHK",
//       rating: 4.6,
//       reviews: 89,
//       image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
//       possession: "Under Construction",
//       features: ["Pool", "Gym", "Club"]
//     },
//     {
//       id: 2,
//       name: "Prestige Lakeview",
//       location: "OMR, Chennai",
//       price: "₹1.5Cr - 2.8Cr",
//       area: "1800-3200 sqft",
//       bhk: "3,4,5 BHK",
//       rating: 4.8,
//       reviews: 134,
//       image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
//       possession: "Ready to Move",
//       features: ["Pool", "Gym", "Park", "Club"]
//     },
//     {
//       id: 3,
//       name: "DLF New Town",
//       location: "Tambaram, Chennai",
//       price: "₹70L - 1.4Cr",
//       area: "1200-2200 sqft",
//       bhk: "2,3,4 BHK",
//       rating: 4.4,
//       reviews: 76,
//       image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=400&h=300&fit=crop",
//       possession: "Under Construction",
//       features: ["Pool", "Gym", "Garden"]
//     },
//     {
//       id: 4,
//       name: "Brigade Lakefront",
//       location: "Pallikaranai, Chennai",
//       price: "₹95L - 1.8Cr",
//       area: "1400-2500 sqft",
//       bhk: "2,3,4 BHK",
//       rating: 4.7,
//       reviews: 112,
//       image: "https://images.unsplash.com/photo-1600573472591-ee6c3c8a0d8a?w=400&h=300&fit=crop",
//       possession: "Ready to Move",
//       features: ["Pool", "Gym", "Lake View", "Club"]
//     },
//     {
//       id: 5,
//       name: "Godrej Eden",
//       location: "Medavakkam, Chennai",
//       price: "₹65L - 1.1Cr",
//       area: "1150-1900 sqft",
//       bhk: "2,3 BHK",
//       rating: 4.5,
//       reviews: 98,
//       image: "https://images.unsplash.com/photo-1600585154340-963ed7476f2b?w=400&h=300&fit=crop",
//       possession: "Under Construction",
//       features: ["Pool", "Gym", "Park"]
//     },
//     {
//       id: 6,
//       name: "Sobha Dream Acres",
//       location: "Porur, Chennai",
//       price: "₹1.1Cr - 2.2Cr",
//       area: "1600-2800 sqft",
//       bhk: "3,4 BHK",
//       rating: 4.9,
//       reviews: 156,
//       image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=300&fit=crop",
//       possession: "Ready to Move",
//       features: ["Pool", "Gym", "Club", "Sports"]
//     }
//   ];

//   const filters = [
//     { label: 'All', value: 'all' },
//     { label: 'Under Construction', value: 'under-construction' },
//     { label: 'Ready to Move', value: 'ready' },
//     { label: 'Same Builder', value: 'same-builder' },
//     { label: 'Same Location', value: 'same-location' }
//   ];

//   return (
//     <section className="pd-similar-projects">
//       <div className="pd-container">
//         <h2 className="pd-section-title">Similar Projects</h2>
        
//         <div className="pd-similar-intro">
//           <p>Explore other premium residential projects in and around Chennai with similar features and pricing.</p>
//         </div>
        
//         <div className="pd-project-filters">
//           {filters.map((filter) => (
//             <button key={filter.value} className="pd-filter-btn">
//               {filter.label}
//             </button>
//           ))}
//         </div>
        
//         <div className="pd-projects-grid">
//           {similarProjects.map((project) => (
//             <div key={project.id} className="pd-project-card">
//               <div className="pd-project-image">
//                 <img src={project.image} alt={project.name} />
//                 <div className="pd-project-badge">
//                   {project.possession === 'Ready to Move' ? 'Ready' : 'New Launch'}
//                 </div>
//                 <div className="pd-project-rating">
//                   ⭐ {project.rating} ({project.reviews})
//                 </div>
//               </div>
              
//               <div className="pd-project-info">
//                 <h3 className="pd-project-name">{project.name}</h3>
//                 <div className="pd-project-location">
//                   <span className="pd-location-icon">📍</span>
//                   {project.location}
//                 </div>
                
//                 <div className="pd-project-details">
//                   <div className="pd-detail-item">
//                     <span className="pd-detail-label">Price</span>
//                     <span className="pd-detail-value">{project.price}</span>
//                   </div>
//                   <div className="pd-detail-item">
//                     <span className="pd-detail-label">Area</span>
//                     <span className="pd-detail-value">{project.area}</span>
//                   </div>
//                   <div className="pd-detail-item">
//                     <span className="pd-detail-label">Configuration</span>
//                     <span className="pd-detail-value">{project.bhk}</span>
//                   </div>
//                 </div>
                
//                 <div className="pd-project-features">
//                   {project.features.map((feature, index) => (
//                     <span key={index} className="pd-feature-tag">{feature}</span>
//                   ))}
//                 </div>
                
//                 <div className="pd-project-actions">
//                   <button className="pd-view-details">View Details</button>
//                   <button className="pd-enquire-btn">Enquire Now</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <div className="pd-view-all">
//           <button className="pd-view-all-btn">
//             View All Similar Projects
//             <span className="pd-view-all-icon">→</span>
//           </button>
//         </div>
        
//         <div className="pd-comparison-tip">
//           <div className="pd-tip-icon">💡</div>
//           <div className="pd-tip-content">
//             <h4>Pro Tip</h4>
//             <p>Use the compare feature to analyze multiple projects side by side before making a decision.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PDSimilarProjects;