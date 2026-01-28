// import React, { useState } from "react";
// import "./PLVideoSection.css";

// const PLVideoSection = () => {
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   const videos = [
//     {
//       id: 1,
//       title: "Modern Villa",
//       thumbnail: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&h=600&fit=crop",
//       videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-villa-exterior-43239-large.mp4",
//       duration: "0:45"
//     },
//     {
//       id: 2,
//       title: "Luxury Apartment",
//       thumbnail: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=600&fit=crop",
//       videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-luxury-apartment-interior-43176-large.mp4",
//       duration: "0:32"
//     },
//     {
//       id: 3,
//       title: "Living Room",
//       thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=600&fit=crop",
//       videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-house-living-room-interior-43234-large.mp4",
//       duration: "0:28"
//     },
//     {
//       id: 4,
//       title: "Kitchen",
//       thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=600&fit=crop",
//       videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-kitchen-and-dining-area-43236-large.mp4",
//       duration: "0:30"
//     },
//     {
//       id: 5,
//       title: "Bedroom",
//       thumbnail: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=600&fit=crop",
//       videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-bedroom-interior-with-furniture-43235-large.mp4",
//       duration: "0:35"
//     },
//     {
//       id: 6,
//       title: "Bathroom",
//       thumbnail: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=600&fit=crop",
//       videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-bathroom-interior-43177-large.mp4",
//       duration: "0:25"
//     },
//     {
//       id: 7,
//       title: "Swimming Pool",
//       thumbnail: "https://images.unsplash.com/photo-1512916194211-3f2b7f5b7e01?w=400&h=600&fit=crop",
//       videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-swimming-pool-and-garden-of-a-luxury-house-43175-large.mp4",
//       duration: "0:40"
//     },
//     {
//       id: 8,
//       title: "House Garden",
//       thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=600&fit=crop",
//       videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-house-garden-and-exterior-43237-large.mp4",
//       duration: "0:38"
//     },
//     {
//       id: 9,
//       title: "Modern Kitchen",
//       thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=600&fit=crop",
//       videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-kitchen-43238-large.mp4",
//       duration: "0:33"
//     },
//     {
//       id: 10,
//       title: "Balcony View",
//       thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=600&fit=crop",
//       videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-house-balcony-with-a-view-43178-large.mp4",
//       duration: "0:29"
//     },
//     {
//       id: 11,
//       title: "Walk-in Closet",
//       thumbnail: "https://images.unsplash.com/photo-1595526051245-4506e0005bd0?w=400&h=600&fit=crop",
//       videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-walkin-closet-of-a-luxury-house-43179-large.mp4",
//       duration: "0:27"
//     },
//     {
//       id: 12,
//       title: "Home Theater",
//       thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=600&fit=crop",
//       videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-home-theater-of-a-luxury-house-43240-large.mp4",
//       duration: "0:31"
//     },
//     {
//       id: 13,
//       title: "Garage",
//       thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=600&fit=crop",
//       videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-garage-and-driveway-of-a-house-43241-large.mp4",
//       duration: "0:26"
//     },
//     {
//       id: 14,
//       title: "Staircase",
//       thumbnail: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&h=600&fit=crop",
//       videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-staircase-of-a-luxury-house-43242-large.mp4",
//       duration: "0:24"
//     },
//     {
//       id: 15,
//       title: "Complete Tour",
//       thumbnail: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=400&h=600&fit=crop",
//       videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-full-tour-of-a-modern-house-43243-large.mp4",
//       duration: "1:15"
//     }
//   ];

//   const handleVideoClick = (video) => {
//     setSelectedVideo(video);
//   };

//   const closeModal = () => {
//     setSelectedVideo(null);
//   };

//   // Alternative video URLs in case Mixkit doesn't work
//   const getVideoUrl = (video) => {
//     // Return alternative working videos
//     const altVideos = [
//       "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//       "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
//       "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
//       "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
//       "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
//       "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
//       "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
//       "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
//       "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
//       "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
//     ];
    
//     // Use Mixkit URLs for first few, then fallback to alternative
//     return video.id <= 8 ? video.videoUrl : altVideos[video.id % altVideos.length];
//   };

//   return (
//     <div className="pl-video-section">
//       <h2 className="pl-video-section-title">📹 Property Video Tours</h2>
//       <p className="pl-video-section-subtitle">Click on any video to watch property tour</p>
      
//       <div className="pl-video-scroll-container">
//         <div className="pl-video-scroll">
//           {videos.map((video) => (
//             <div 
//               key={video.id} 
//               className="pl-video-card"
//               onClick={() => handleVideoClick(video)}
//             >
//               <div className="pl-video-thumbnail">
//                 <img src={video.thumbnail} alt={video.title} />
//                 <div className="pl-video-overlay">
//                   <div className="pl-play-icon">
//                     <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
//                       <path d="M8 5v14l11-7z"/>
//                     </svg>
//                   </div>
//                   <div className="pl-video-duration">{video.duration}</div>
//                 </div>
//               </div>
//               <div className="pl-video-title">{video.title}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Video Modal */}
//       {selectedVideo && (
//         <div className="pl-video-modal" onClick={closeModal}>
//           <div className="pl-video-modal-content" onClick={(e) => e.stopPropagation()}>
//             <div className="pl-video-modal-header">
//               <h3>🎬 {selectedVideo.title}</h3>
//               <button className="pl-close-btn" onClick={closeModal}>×</button>
//             </div>
//             <div className="pl-video-player">
//               <video 
//                 key={selectedVideo.id}
//                 controls 
//                 autoPlay 
//                 style={{ width: '100%' }}
//               >
//                 <source src={getVideoUrl(selectedVideo)} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//               <div className="pl-video-info">
//                 <p>Watch this {selectedVideo.title.toLowerCase()} video to see the property details.</p>
//                 <button 
//                   className="pl-refresh-btn"
//                   onClick={() => {
//                     // Force video reload
//                     const videoElement = document.querySelector('.pl-video-player video');
//                     if (videoElement) {
//                       videoElement.load();
//                     }
//                   }}
//                 >
//                   Reload Video
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PLVideoSection;