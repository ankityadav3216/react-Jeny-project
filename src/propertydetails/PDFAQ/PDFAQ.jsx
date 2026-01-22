import React, { useState } from 'react';
import './PDFAQ.css';

const PDFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      question: "What is the total land area of the project?",
      answer: "The total land area of Casagrand Casamia is 3.5 acres. This includes the building footprint, green spaces, amenities, and common areas.",
      category: "General"
    },
    {
      question: "What are the different payment plans available?",
      answer: "We offer multiple payment plans: 1. Construction Linked Plan 2. Down Payment Plan 3. Flexi Payment Plan 4. Bank Loan Tie-up Plan. Our sales team can provide detailed information on each plan.",
      category: "Payment"
    },
    {
      question: "Is there any preferential location charges?",
      answer: "Yes, preferential location charges may apply for corner flats, higher floors, and units with better views. These charges are communicated transparently during the booking process.",
      category: "Pricing"
    },
    {
      question: "What is the quality of construction materials used?",
      answer: "We use premium quality materials including ACC/Birla cement, JSW/TATA steel, Asian paints, and branded sanitaryware. Detailed specifications are provided in the construction agreement.",
      category: "Construction"
    },
    {
      question: "Are there any club membership charges?",
      answer: "Basic club facilities are included in the maintenance charges. However, premium amenities like spa, indoor games, and special events may have additional membership fees.",
      category: "Amenities"
    },
    {
      question: "What is the process for home loan approval?",
      answer: "We have tie-ups with major banks for quick loan processing. Our team will assist you with documentation and connect you with banking partners for a seamless experience.",
      category: "Financing"
    },
    {
      question: "Is parking included in the price?",
      answer: "Yes, 2 covered parking spaces are included with each apartment. Additional parking slots can be purchased at extra cost, subject to availability.",
      category: "Parking"
    },
    {
      question: "What is the builder's track record for timely delivery?",
      answer: "Casagrand has a track record of 95% on-time delivery across all projects. We have delivered 85+ projects across South India with excellent customer satisfaction.",
      category: "Builder"
    },
    {
      question: "Are there any registration charges?",
      answer: "Registration charges, stamp duty, and other statutory charges are additional and need to be paid as per government regulations at the time of registration.",
      category: "Legal"
    },
    {
      question: "What security features are provided?",
      answer: "The project includes 24/7 security with CCTV surveillance, biometric access, visitor management system, and intercom facilities in all apartments.",
      category: "Security"
    },
    {
      question: "Is there any warranty on construction?",
      answer: "We provide a 5-year structural warranty on the building. Additionally, there are warranties on plumbing, electrical, and waterproofing as per industry standards.",
      category: "Warranty"
    },
    {
      question: "Can I customize my apartment interior?",
      answer: "While structural changes are not allowed, you can customize interiors within your apartment. However, modifications must comply with society rules and safety standards.",
      category: "Customization"
    }
  ];

  const categories = ['All', 'General', 'Payment', 'Pricing', 'Construction', 'Amenities', 'Financing', 'Parking', 'Builder', 'Legal', 'Security', 'Warranty', 'Customization'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFaqs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  // Show only 5 questions initially, then all when "Read More" is clicked
  const displayedFaqs = showAll ? filteredFaqs : filteredFaqs.slice(0, 5);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleReadMore = () => {
    setShowAll(!showAll);
  };

  return (
    <section id= "Frequently-Asked-Questions" className="pd-faq">
      <div className="pd-container">
        <h2 className="pd-section-title">Frequently Asked Questions</h2>
        
        <div className="pd-faq-intro">
          <p>Find answers to common questions about Casagrand Casamia.</p>
        </div>
        
        <div className="pd-faq-categories">
          <div className="pd-categories-scroll">
            {categories.map((category) => (
              <button
                key={category}
                className={`pd-category-tab ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(category);
                  setShowAll(false); // Reset to show only 5 when category changes
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="pd-faq-accordion">
          {displayedFaqs.map((faq, index) => (
            <div key={index} className="pd-faq-item">
              <div 
                className="pd-faq-question"
                onClick={() => handleAccordionClick(index)}
              >
                <div className="pd-faq-q">Q: {faq.question}</div>
                <div className="pd-faq-toggle">
                  {openIndex === index ? '−' : '+'}
                </div>
              </div>
              
              {openIndex === index && (
                <div className="pd-faq-answer">
                  <div className="pd-faq-a">A: {faq.answer}</div>
                  <div className="pd-faq-meta">
                    <span className="pd-faq-category">{faq.category}</span>
                    <div className="pd-faq-actions">
                      <button className="pd-faq-helpful">Helpful</button>
                      <button className="pd-faq-share">Share</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Read More/Less Button */}
        {filteredFaqs.length > 5 && (
          <div className="pd-read-more-container">
            <button 
              className="pd-read-more-btn"
              onClick={handleReadMore}
            >
              {showAll ? 'Show Less' : `Read More (${filteredFaqs.length - 5} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PDFAQ;