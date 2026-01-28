import React, { useState } from "react";
import "./PLFAQ.css";

const faqData = [
  {
    question: "What are the most affordable Property in Mumbai?",
    answer: "Some of the most affordable Property in Mumbai are:",
    points: [
      "Srishti Oasis",
      "Acropolis",
      "Agarwal Paramount",
      "Better Parijat Towers",
      "DB Ozone",
    ],
  },
  {
    question: "What are the best luxury Property in Mumbai?",
    answer: "The best luxury Property in Mumbai are:",
    points: [
      "Ruparel Iris",
      "DVK EL Mejor",
      "JP North Imperia Tower 1",
      "Sanghvi Parsssva Excellencea",
      "KD Hermitage B No 2",
    ],
  },
  {
    question: "How many Ready to Move Property are available in Mumbai?",
    answer:
      "There are more than 34,000 Ready to Move Properties available in Mumbai across multiple locations.",
  },
  {
    question: "Which are the best areas to buy Property in Mumbai?",
    answer: "Some of the best areas to buy Property in Mumbai include:",
    points: [
      "Andheri East & West",
      "Malad West",
      "Powai",
      "Borivali West",
      "Thane West",
    ],
  },
  {
    question: "Is Mumbai good for Property investment?",
    answer:
      "Yes, Mumbai is one of the best cities for real estate investment due to high rental demand, infrastructure growth, and job opportunities.",
  },
  {
    question: "Which Property types are most in demand in Mumbai?",
    answer: "The most demanded property types in Mumbai are:",
    points: [
      "1 & 2 BHK Apartments",
      "Ready to Move Flats",
      "Luxury Apartments",
      "Commercial Offices",
    ],
  },
  {
    question: "Can I buy Property in Mumbai without brokerage?",
    answer:
      "Yes, many owners list properties directly in Mumbai, allowing buyers to purchase homes without paying brokerage.",
  },
];

const PLFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions About Mumbai</h2>

      {faqData.map((item, index) => (
        <div
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
          key={index}
        >
          <div className="faq-header" onClick={() => toggleFAQ(index)}>
            <h3 className="faq-question">{item.question}</h3>
            <span className="faq-icon">
              {activeIndex === index ? "−" : "+"}
            </span>
          </div>

          <div className="faq-content">
            <p className="faq-answer">{item.answer}</p>

            {item.points && (
              <ul className="faq-list">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="faq-divider"></div>
        </div>
      ))}
    </div>
  );
};

export default PLFAQ;
