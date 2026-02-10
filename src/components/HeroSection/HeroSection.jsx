import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Welcome to PrimeAcres</h1>
          <p>Find your dream property with ease</p>
          <button className="hero-btn">Explore Now</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
