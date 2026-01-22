import React from 'react';
import './PDNews.css';

const NewsArticles = () => {
  const newsItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
      title: "Increasing popularity of villas in Chennai west",
      description: "We examine the factors that have led to the growth of the real estate market in the western suburbs of Chennai and the options available for...",
      author: "Purnima Goswami Sharma",
      date: "Nov 2020",
      category: "Market Trends"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
      title: "Cost of living: Chennai vs Bangalore",
      description: "While Chennai may be relatively affordable compared to Bangalore, factors like location, lifestyle, and housing options influence overall...",
      author: "Harini Balasubramanian",
      date: "Dec 2025",
      category: "Lifestyle"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
      title: "Things to check before buying a property",
      description: "To minimise risk, professionals recommend checking legal documents, construction quality, builder reputation, and location prospects before investing.",
      author: "Harini Balasubramanian",
      date: "Jan 2024",
      category: "Buying Guide"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
      title: "RERA impact on real estate transparency",
      description: "How RERA has transformed the real estate sector by bringing more transparency, accountability, and consumer protection to property transactions.",
      author: "Rajesh Kumar",
      date: "Mar 2024",
      category: "Legal"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
      title: "Future of smart homes in India",
      description: "Exploring the rise of smart home technology in Indian real estate and how it's changing the way we live and interact with our living spaces.",
      author: "Priya Sharma",
      date: "Feb 2024",
      category: "Technology"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
      title: "Green building trends in Chennai",
      description: "Sustainable construction practices and green building certifications that are becoming increasingly popular in Chennai's real estate market.",
      author: "Vikram Patel",
      date: "Jan 2024",
      category: "Sustainability"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
      title: "Home loan interest rates in 2024",
      description: "Current home loan interest rates, factors affecting them, and tips to get the best deal from banks and financial institutions.",
      author: "Anjali Mehta",
      date: "Dec 2023",
      category: "Finance"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
      title: "Rental market trends in Chennai",
      description: "Analysis of rental yields, popular locations for rental properties, and factors that influence rental prices in different parts of Chennai.",
      author: "Rahul Verma",
      date: "Nov 2023",
      category: "Rental"
    }
  ];

  return (
    <section className="news-articles">
      <div className="news-container">
        <div className="news-header">
          <h2 className="news-title">News & Articles</h2>
          <div className="title-line"></div>
        </div>
        
        <div className="news-grid">
          {newsItems.map((item) => (
            <div key={item.id} className="news-card">
              <div className="news-image-container">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="news-image"
                  loading="lazy"
                />
                <span className="news-category">{item.category}</span>
              </div>
              
              <div className="news-content">
                <h3 className="news-item-title">{item.title}</h3>
                <p className="news-description">{item.description}</p>
                
                <div className="news-meta">
                  <div className="news-author">
                    <span className="author-name">{item.author}</span>
                    <span className="article-date">{item.date}</span>
                  </div>
                  <button className="read-more-btn">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsArticles;