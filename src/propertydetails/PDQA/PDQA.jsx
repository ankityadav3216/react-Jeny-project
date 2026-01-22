import React, { useState } from 'react';
import './PDQA.css';

const PDQA = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [newQuestion, setNewQuestion] = useState('');
  const [askerName, setAskerName] = useState('');
  const [askerEmail, setAskerEmail] = useState('');

  const questions = [
    {
      id: 1,
      question: "What is the expected possession date?",
      answer: "The expected possession date is December 2026. However, please note that this is an estimated timeline and may vary based on construction progress and external factors.",
      askedBy: "Rajesh Kumar",
      date: "Jan 5, 2026",
      likes: 12,
      category: "Possession"
    },
    {
      id: 2,
      question: "Are there any additional charges apart from the basic price?",
      answer: "The quoted price includes basic amenities. Additional charges may apply for preferential location, higher floor premiums, club membership, and statutory charges like registration and stamp duty.",
      askedBy: "Priya Sharma",
      date: "Jan 3, 2026",
      likes: 8,
      category: "Pricing"
    },
    {
      id: 3,
      question: "What is the carpet area for 3 BHK apartments?",
      answer: "The carpet area for 3 BHK apartments ranges from 1250 sq.ft to 1350 sq.ft, depending on the specific layout and floor plan chosen.",
      askedBy: "Vikram Patel",
      date: "Dec 28, 2025",
      likes: 15,
      category: "Specifications"
    },
    {
      id: 4,
      question: "Is there any loan assistance available?",
      answer: "Yes, we have tie-ups with major banks including HDFC, SBI, ICICI, and Axis Bank for home loans. Our team can assist you with the loan application process.",
      askedBy: "Anjali Mehta",
      date: "Dec 25, 2025",
      likes: 10,
      category: "Financing"
    },
    {
      id: 5,
      question: "What are the maintenance charges?",
      answer: "The maintenance charges are ₹3.5 per sq.ft per month. This includes charges for common area maintenance, security, elevator maintenance, and other amenities.",
      askedBy: "Rahul Verma",
      date: "Dec 20, 2025",
      likes: 7,
      category: "Maintenance"
    },
    {
      id: 6,
      question: "Are pets allowed in the society?",
      answer: "Yes, the society is pet-friendly. However, there are specific guidelines regarding pet ownership that need to be followed for the comfort and safety of all residents.",
      askedBy: "Sneha Reddy",
      date: "Dec 18, 2025",
      likes: 14,
      category: "Amenities"
    }
  ];

  const categories = ['All', 'Possession', 'Pricing', 'Specifications', 'Financing', 'Maintenance', 'Amenities'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredQuestions = selectedCategory === 'All' 
    ? questions 
    : questions.filter(q => q.category === selectedCategory);

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    if (newQuestion.trim() && askerName.trim() && askerEmail.trim()) {
      alert('Your question has been submitted! Our team will respond within 24 hours.');
      setNewQuestion('');
      setAskerName('');
      setAskerEmail('');
    } else {
      alert('Please fill all fields before submitting.');
    }
  };

  return (
    <section  id= "Q&A"className="pd-qa">
      <div className="pd-container">
        <h2 className="pd-section-title">Q&A</h2>
        
        <div className="pd-qa-intro">
          <p>Have questions about this project? Find answers from the builder and other community members.</p>
        </div>
        
        <div className="pd-qa-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`pd-category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="pd-questions-list">
          {filteredQuestions.map((q) => (
            <div key={q.id} className="pd-question-card">
              <div 
                className="pd-question-header"
                onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)}
              >
                <div className="pd-question-main">
                  <div className="pd-question-text">{q.question}</div>
                  <div className="pd-question-meta">
                    <span className="pd-asked-by">Asked by {q.askedBy}</span>
                    <span className="pd-question-date">{q.date}</span>
                    <span className="pd-question-category">{q.category}</span>
                  </div>
                </div>
                <div className="pd-question-toggle">
                  {activeQuestion === q.id ? '−' : '+'}
                </div>
              </div>
              
              {activeQuestion === q.id && (
                <div className="pd-answer-section">
                  <div className="pd-answer">
                    <div className="pd-answer-label">Answer:</div>
                    <p>{q.answer}</p>
                  </div>
                  <div className="pd-answer-actions">
                    <button className="pd-like-btn">
                      👍 Helpful ({q.likes})
                    </button>
                    <button className="pd-report-btn">Report</button>
                    <button className="pd-follow-btn">Follow</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="pd-ask-question">
          <h3 className="pd-ask-title">Ask a Question</h3>
          <form className="pd-question-form" onSubmit={handleSubmitQuestion}>
            <div className="pd-form-group">
              <label htmlFor="question">Your Question</label>
              <textarea
                id="question"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder="Type your question here..."
                rows="2"
                required
              />
            </div>
            
            <div className="pd-form-row">
              <div className="pd-form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={askerName}
                  onChange={(e) => setAskerName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div className="pd-form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  value={askerEmail}
                  onChange={(e) => setAskerEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            
            <div className="pd-form-group">
              <label htmlFor="category">Category</label>
              <select id="category" defaultValue="">
                <option value="" disabled>Select a category</option>
                <option value="Possession">Possession</option>
                <option value="Pricing">Pricing</option>
                <option value="Specifications">Specifications</option>
                <option value="Financing">Financing</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Amenities">Amenities</option>
              </select>
            </div>
            
            <button type="submit" className="pd-submit-question">
              Submit Question
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PDQA;