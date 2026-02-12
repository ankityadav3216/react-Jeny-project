import React from "react";
import { Card, Button, Tag } from "antd";
import "./NewsSection.css";

const { Meta } = Card;

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      image:
        "https://tse3.mm.bing.net/th/id/OIP.g7-cHf8NnpF6I0w84ESbHgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Increasing popularity of villas in Chennai west",
      description:
        "We examine the factors that have led to the growth of the real estate market in the western suburbs of Chennai.",
      author: "Purnima Goswami Sharma",
      date: "Nov 2020",
      category: "Market Trends",
    },
    {
      id: 2,
      image:
        "https://tse1.mm.bing.net/th/id/OIP.3OfjpfzEFrfwla_e4NA0twHaEK?w=648&h=365&rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Cost of living: Chennai vs Bangalore",
      description:
        "While Chennai may be relatively affordable compared to Bangalore, lifestyle choices matter.",
      author: "Harini Balasubramanian",
      date: "Dec 2025",
      category: "Lifestyle",
    },
    {
      id: 3,
      image:
        "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/c1fd/live/6e1bb430-b24d-11ef-bba1-a334b209aa1a.jpg",
      title: "Things to check before buying a property",
      description:
        "Professionals recommend checking legal documents, builder reputation and location.",
      author: "Harini Balasubramanian",
      date: "Jan 2024",
      category: "Buying Guide",
    },
    {
      id: 4,
      image:
        "https://e3.365dm.com/16/07/768x432/cegrab-20130913-135709-317-2_3638475.jpg?20160706023947",
      title: "RERA impact on real estate transparency",
      description:
        "How RERA transformed real estate with accountability and consumer protection.",
      author: "Rajesh Kumar",
      date: "Mar 2024",
      category: "Legal",
    },
  ];

  return (
    <section className="news-section">
      <div className="news-section-header">
        <h2>News & Articles</h2>
        <div className="line" />
      </div>

      <div className="news-section-scroll">
        {newsItems.map((item) => (
          <Card
            key={item.id}
            hoverable
            cover={<img alt={item.title} src={item.image} />}
            className="news-section-card"
          >
            <Tag color="blue" className="category-tag">
              {item.category}
            </Tag>

            <Meta
              title={item.title}
              description={
                <p className="news-desc">{item.description}</p>
              }
            />

            <div className="news-footer">
              <div>
                <div className="author">{item.author}</div>
                <div className="date">{item.date}</div>
              </div>
              <Button type="primary" size="small">
                Read More
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
