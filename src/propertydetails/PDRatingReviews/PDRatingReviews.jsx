import React, { useState } from 'react';
import { StarFilled, EnvironmentOutlined, SafetyOutlined, HomeOutlined, CarOutlined, CheckCircleOutlined, WarningOutlined, DownOutlined, UpOutlined, FilterOutlined } from '@ant-design/icons';
import { Rate, Progress, Button, Tabs, Modal } from 'antd';
import './PDRatingReviews.css';

const { TabPane } = Tabs;

const PDRatingReviews = () => {
  const [showAllGoodThings, setShowAllGoodThings] = useState(false);
  const [showAllImprovements, setShowAllImprovements] = useState(false);
  const [showAllReviewsModal, setShowAllReviewsModal] = useState(false);
  const [activeReviewTab, setActiveReviewTab] = useState('all');

  // Overall Rating Data
  const overallRating = {
    value: 4.1,
    totalReviews: 128,
    location: "Kanakapura Road"
  };

  // Feature-wise Ratings
  const featureRatings = [
    { name: "Connectivity", rating: 4.6, icon: <CarOutlined /> },
    { name: "Neighbourhood", rating: 4.1, icon: <EnvironmentOutlined /> },
    { name: "Safety", rating: 4.0, icon: <SafetyOutlined /> },
    { name: "Livability", rating: 3.8, icon: <HomeOutlined /> }
  ];

  // Good Things (Positive Points)
  const goodThings = [
    "Close to markets & malls",
    "Excellent metro service",
    "Plenty of parking",
    "24x7 water supply",
    "Good security system",
    "Well-maintained common areas",
    "Friendly neighbours",
    "Regular garbage collection",
    "Power backup available",
    "Children's play area"
  ];

  const initialGoodThings = goodThings.slice(0, 3);

  // Things That Need Improvement
  const improvements = [
    "Pollution during construction",
    "More green spaces required",
    "Better waste management",
    "Traffic congestion during peak hours",
    "Need more street lights",
    "Limited public transport options",
    "Drainage issues during monsoon",
    "Parking space shortage"
  ];

  const initialImprovements = improvements.slice(0, 3);

  // Resident Reviews Data
  const residentReviews = [
    {
      id: 1,
      name: "Lalitha",
      role: "Owner",
      timeAgo: "2 years ago",
      rating: 4.2,
      review: "Living here has been a great experience. The location is very convenient and the neighbours are friendly. Maintenance is timely.",
      helpful: 12
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Tenant",
      timeAgo: "1 year ago",
      rating: 4.5,
      review: "Excellent connectivity to metro and markets. Security is good. The only issue is parking space during weekends.",
      helpful: 8
    },
    {
      id: 3,
      name: "Meena Sharma",
      role: "Owner",
      timeAgo: "8 months ago",
      rating: 3.8,
      review: "Good residential area but needs more green spaces. Maintenance staff is cooperative. Water supply is regular.",
      helpful: 5
    }
  ];

  const calculatePercentage = (rating) => (rating / 5) * 100;

  return (
    <>
      <div   id= "Rating-reviews" className="pd-rating-reviews-container">
        {/* Header Section */}
        <div className="pd-reviews-header">
          <h1 className="pd-main-title">Resident Reviews & Ratings</h1>
          <div className="pd-location-display">
            <EnvironmentOutlined className="pd-location-icon" />
            <span className="pd-location-text">{overallRating.location}</span>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="pd-reviews-content">
          {/* Left Column - Ratings */}
          <div className="pd-left-column">
            {/* Overall Rating */}
            <div className="pd-overall-rating">
              <div className="pd-rating-value">{overallRating.value}</div>
              <div className="pd-rating-stars">
                <Rate 
                  disabled 
                  defaultValue={overallRating.value} 
                  allowHalf 
                  character={<StarFilled />}
                  className="pd-star-rating"
                />
                <span className="pd-rating-text">Overall Rating</span>
              </div>
              <div className="pd-total-reviews">
                Based on {overallRating.totalReviews} reviews
              </div>
            </div>

            {/* Feature-wise Ratings */}
            <div className="pd-feature-ratings">
              <h3 className="pd-section-title">Area Ratings</h3>
              {featureRatings.map((feature, index) => (
                <div key={index} className="pd-feature-item">
                  <div className="pd-feature-info">
                    <span className="pd-feature-icon">{feature.icon}</span>
                    <span className="pd-feature-name">{feature.name}</span>
                  </div>
                  <div className="pd-feature-rating">
                    <div className="pd-feature-progress">
                      <Progress 
                        percent={calculatePercentage(feature.rating)} 
                        showInfo={false}
                        strokeColor="#10b981"
                        trailColor="#e5e7eb"
                        strokeWidth={4}
                      />
                    </div>
                    <span className="pd-feature-value">{feature.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Good Things & Improvements */}
          <div className="pd-right-column">
            {/* Good Things Here */}
            <div className="pd-good-things">
              <div className="pd-section-header">
                <CheckCircleOutlined className="pd-good-icon" />
                <h3 className="pd-section-title">Good Things Here</h3>
              </div>
              <ul className="pd-points-list">
                {(showAllGoodThings ? goodThings : initialGoodThings).map((point, index) => (
                  <li key={index} className="pd-point-item">
                    <div className="pd-point-bullet"></div>
                    {point}
                  </li>
                ))}
              </ul>
              {goodThings.length > initialGoodThings.length && (
                <button 
                  className="pd-show-more-btn"
                  onClick={() => setShowAllGoodThings(!showAllGoodThings)}
                >
                  {showAllGoodThings ? (
                    <>
                      <UpOutlined />
                      <span>Show Less</span>
                    </>
                  ) : (
                    <>
                      <DownOutlined />
                      <span>+ {goodThings.length - initialGoodThings.length} more</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Things That Need Improvement */}
            <div className="pd-improvements">
              <div className="pd-section-header">
                <WarningOutlined className="pd-improve-icon" />
                <h3 className="pd-section-title">Things That Need Improvement</h3>
              </div>
              <ul className="pd-points-list">
                {(showAllImprovements ? improvements : initialImprovements).map((point, index) => (
                  <li key={index} className="pd-point-item">
                    <div className="pd-point-bullet improve"></div>
                    {point}
                  </li>
                ))}
              </ul>
              {improvements.length > initialImprovements.length && (
                <button 
                  className="pd-show-more-btn"
                  onClick={() => setShowAllImprovements(!showAllImprovements)}
                >
                  {showAllImprovements ? (
                    <>
                      <UpOutlined />
                      <span>Show Less</span>
                    </>
                  ) : (
                    <>
                      <DownOutlined />
                      <span>+ {improvements.length - initialImprovements.length} more</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Resident Reviews Section */}
        <div className="pd-resident-reviews">
          <div className="pd-reviews-header">
            <h3 className="pd-section-title">Resident Reviews</h3>
            <Button 
              type="primary" 
              className="pd-view-all-btn"
              onClick={() => setShowAllReviewsModal(true)}
              size="small"
            >
              View All Reviews
            </Button>
          </div>

          <div className="pd-reviews-grid">
            {residentReviews.map((review) => (
              <div key={review.id} className="pd-review-card">
                <div className="pd-reviewer-info">
                  <div className="pd-reviewer-name">
                    <h4>{review.name}</h4>
                    <span className="pd-reviewer-role">{review.role}</span>
                  </div>
                  <div className="pd-review-time">
                    <span>{review.timeAgo}</span>
                  </div>
                </div>
                <div className="pd-review-rating">
                  <Rate 
                    disabled 
                    defaultValue={review.rating} 
                    allowHalf 
                    character={<StarFilled />}
                    className="pd-review-stars"
                  />
                  <span className="pd-review-value">{review.rating}</span>
                </div>
                <p className="pd-review-text">{review.review}</p>
                <div className="pd-review-helpful">
                  <span>Helpful ({review.helpful})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All Reviews Modal */}
      <Modal
        title="All Resident Reviews"
        open={showAllReviewsModal}
        onCancel={() => setShowAllReviewsModal(false)}
        footer={null}
        width={700}
        className="pd-all-reviews-modal"
      >
        <div className="pd-modal-content">
          <Tabs 
            activeKey={activeReviewTab} 
            onChange={setActiveReviewTab}
            className="pd-review-tabs"
            size="small"
          >
            <TabPane tab="All Reviews" key="all">
              <div className="pd-all-reviews-list">
                {residentReviews.map((review) => (
                  <div key={review.id} className="pd-review-item-modal">
                    <div className="pd-reviewer-info-modal">
                      <h4>{review.name}</h4>
                      <span className="pd-reviewer-role-modal">{review.role}</span>
                      <span className="pd-review-time-modal">{review.timeAgo}</span>
                    </div>
                    <div className="pd-review-rating-modal">
                      <Rate 
                        disabled 
                        defaultValue={review.rating} 
                        allowHalf 
                        character={<StarFilled />}
                        size="small"
                      />
                      <span>{review.rating}/5</span>
                    </div>
                    <p className="pd-review-text-modal">{review.review}</p>
                    <div className="pd-review-helpful-modal">
                      <Button size="small">Helpful ({review.helpful})</Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabPane>
            <TabPane tab="Owners" key="owners">
              <div className="pd-all-reviews-list">
                {residentReviews.filter(r => r.role === 'Owner').map((review) => (
                  <div key={review.id} className="pd-review-item-modal">
                    <div className="pd-reviewer-info-modal">
                      <h4>{review.name}</h4>
                      <span className="pd-reviewer-role-modal">{review.role}</span>
                      <span className="pd-review-time-modal">{review.timeAgo}</span>
                    </div>
                    <div className="pd-review-rating-modal">
                      <Rate 
                        disabled 
                        defaultValue={review.rating} 
                        allowHalf 
                        character={<StarFilled />}
                        size="small"
                      />
                      <span>{review.rating}/5</span>
                    </div>
                    <p className="pd-review-text-modal">{review.review}</p>
                  </div>
                ))}
              </div>
            </TabPane>
            <TabPane tab="Tenants" key="tenants">
              <div className="pd-all-reviews-list">
                {residentReviews.filter(r => r.role === 'Tenant').map((review) => (
                  <div key={review.id} className="pd-review-item-modal">
                    <div className="pd-reviewer-info-modal">
                      <h4>{review.name}</h4>
                      <span className="pd-reviewer-role-modal">{review.role}</span>
                      <span className="pd-review-time-modal">{review.timeAgo}</span>
                    </div>
                    <div className="pd-review-rating-modal">
                      <Rate 
                        disabled 
                        defaultValue={review.rating} 
                        allowHalf 
                        character={<StarFilled />}
                        size="small"
                      />
                      <span>{review.rating}/5</span>
                    </div>
                    <p className="pd-review-text-modal">{review.review}</p>
                  </div>
                ))}
              </div>
            </TabPane>
          </Tabs>
        </div>
      </Modal>
    </>
  );
};

export default PDRatingReviews;