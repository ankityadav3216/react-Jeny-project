// src/pages/Home.jsx
import React from "react";

import HeroSection from "../components/HeroSection/HeroSection.jsx";
import Localities from "../components/Localities/Localities.jsx";
import PropertyCategories from "../components/PropertyCategories/PropertyCategories.jsx";
import HousingTopPicks from "../components/HousingTopPicks/HousingTopPicks.jsx";
import Reels from "../components/Reels/Reels.jsx";
import FeaturedDeveloper from "../components/FeaturedDevelopers/FeaturedDevelopers.jsx";
import FeaturedProperties from "../components/FeaturedProperties/FeaturedProperties.jsx";
import RecommendedSellers from "../components/RecommendedSellers/RecommendedSellers.jsx";
import HServices from "../components/HServices/HServices.jsx";
import TopHighlightedProjects from "../components/TopHighlightedProjects/TopHighlightedProjects.jsx";
import PropertyResearchTools from "../components/PropertyResearchTools/PropertyResearchTools.jsx";
import NewsSection from "../components/NewsSection/NewsSection.jsx";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">

      {/* Hero */}
      <section className="full-width">
        <HeroSection />
      </section>

      {/* Compact Sections */}
      <section className="container compact-section">
        <Localities />
      </section>

      <section className="container compact-section">
        <PropertyCategories />
      </section>

      <section className="container compact-section equal-width-section">
        <HousingTopPicks />
      </section>

      <section className="container compact-section equal-width-section">
        <Reels />
      </section>

      <section className="container compact-section equal-width-section">
        <FeaturedDeveloper />
      </section>

      {/* 🔥 After Developer (Tight Gap Sections) */}
      <section className="container after-developer equal-width-section">
        <FeaturedProperties />
      </section>

      <section className="container after-developer equal-width-section">
        <RecommendedSellers />
      </section>

      <section className="container after-developer equal-width-section">
        <HServices />
      </section>

      <section className="container after-developer equal-width-section">
        <TopHighlightedProjects />
      </section>

      <section className="container after-developer equal-width-section">
        <PropertyResearchTools />
      </section>

      <section className="container after-developer equal-width-section">
        <NewsSection />
      </section>

    </div>
  );
};

export default Home;
