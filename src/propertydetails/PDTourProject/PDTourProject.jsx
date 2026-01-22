import React, { useState } from 'react';
import { PlayCircleOutlined, LeftOutlined, RightOutlined, EyeOutlined, ZoomInOutlined } from '@ant-design/icons';
import { Modal, Button } from 'antd';
import './PDTourProject.css';

const PDTourProject = () => {
  const [currentView, setCurrentView] = useState('photos'); // 'photos' or 'videos'
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Generate 100 sample images (in real app, these would be actual image URLs)
  const generateImages = () => {
    const images = [];
    for (let i = 1; i <= 100; i++) {
      images.push({
        id: i,
        url: `https://picsum.photos/300/200?random=${i}`, // Random image from picsum
        alt: `Project Image ${i}`,
        category: i <= 60 ? 'photos' : 'videos', // First 60 are photos, next 40 are videos
        title: i <= 60 ? `Construction Phase ${i}` : `Virtual Tour ${i-60}`
      });
    }
    return images;
  };

  const allMedia = generateImages();
  const photos = allMedia.filter(item => item.category === 'photos');
  const videos = allMedia.filter(item => item.category === 'videos');

  const displayedMedia = currentView === 'photos' ? photos : videos;

  // Handle image click
  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  // Navigate to next image
  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % displayedMedia.length;
    setSelectedImage(displayedMedia[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  // Navigate to previous image
  const handlePrevImage = () => {
    const prevIndex = (currentImageIndex - 1 + displayedMedia.length) % displayedMedia.length;
    setSelectedImage(displayedMedia[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };

  return (
    <div id="Tour-project" className="pd-tour-project-container">
      {/* Heading Section */}
      <div className="pd-tour-header">
        <h2 className="pd-tour-main-heading">Photos & Videos: Tour this project virtually</h2>
        <p className="pd-tour-subheading">Project Tour & Photos</p>
      </div>

      {/* Toggle Buttons */}
      <div className="pd-view-toggle">
        <button 
          className={`pd-toggle-btn ${currentView === 'photos' ? 'active' : ''}`}
          onClick={() => setCurrentView('photos')}
        >
          Photos ({photos.length})
        </button>
        <button 
          className={`pd-toggle-btn ${currentView === 'videos' ? 'active' : ''}`}
          onClick={() => setCurrentView('videos')}
        >
          Videos ({videos.length})
        </button>
      </div>

      {/* Media Grid */}
      <div className="pd-media-grid-container">
        <div className="pd-media-grid">
          {displayedMedia.map((item, index) => (
            <div 
              key={item.id} 
              className="pd-media-item"
              onClick={() => handleImageClick(item, index)}
            >
              <div className="pd-media-image-container">
                <img 
                  src={item.url} 
                  alt={item.alt}
                  className="pd-media-image"
                  loading="lazy"
                />
                {item.category === 'videos' && (
                  <div className="pd-video-overlay">
                    <PlayCircleOutlined className="pd-play-icon" />
                    <span className="pd-video-label">Video</span>
                  </div>
                )}
                <div className="pd-media-overlay">
                  <ZoomInOutlined className="pd-zoom-icon" />
                  <div className="pd-media-title">{item.title}</div>
                </div>
              </div>
              <div className="pd-media-info">
                <span className="pd-media-number">#{item.id.toString().padStart(3, '0')}</span>
                <span className="pd-media-type">{item.category === 'photos' ? 'Photo' : 'Video'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Media Counter */}
      <div className="pd-media-counter">
        <EyeOutlined className="pd-eye-icon" />
        <span>Showing {displayedMedia.length} {currentView}</span>
        <span className="pd-total-count">Total: {allMedia.length} Media Files</span>
      </div>

      {/* Image Modal */}
      <Modal
        open={!!selectedImage}
        onCancel={handleCloseModal}
        footer={null}
        width="80%"
        className="pd-image-modal"
      >
        {selectedImage && (
          <div className="pd-modal-content">
            <div className="pd-modal-nav">
              <Button 
                icon={<LeftOutlined />} 
                onClick={handlePrevImage}
                className="pd-nav-btn"
              />
              <div className="pd-modal-title">
                {selectedImage.title} 
                <span className="pd-modal-id">#{selectedImage.id.toString().padStart(3, '0')}</span>
              </div>
              <Button 
                icon={<RightOutlined />} 
                onClick={handleNextImage}
                className="pd-nav-btn"
              />
            </div>
            
            <div className="pd-modal-image-container">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.alt}
                className="pd-modal-image"
              />
              {selectedImage.category === 'videos' && (
                <div className="pd-modal-video-indicator">
                  <PlayCircleOutlined />
                  <span>Video Content</span>
                </div>
              )}
            </div>
            
            <div className="pd-modal-footer">
              <span>{currentImageIndex + 1} of {displayedMedia.length}</span>
              <Button 
                type="primary" 
                onClick={handleCloseModal}
                className="pd-close-btn"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PDTourProject;