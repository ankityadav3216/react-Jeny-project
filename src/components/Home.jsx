// src/pages/Home.jsx
import React from "react";

import HeroSection from "../components/HeroSection/HeroSection.jsx";
// import SearchBar from "../components/SearchBar/SearchBar.jsx";
import Localities from "../components/Localities/Localities.jsx";
import PropertyCategories from "../components/PropertyCategories/PropertyCategories.jsx";
import HousingTopPicks from "../components/HousingTopPicks/HousingTopPicks.jsx";
import Reels from "../components/Reels/Reels.jsx";
import FeaturedDeveloper from "../components/FeaturedDevelopers/FeaturedDevelopers.jsx";
import FeaturedProperties from "../components/FeaturedProperties/FeaturedProperties.jsx";
import RecommendedSellers from "../components/RecommendedSellers/RecommendedSellers.jsx";
import HServices from "../components/HServices/HServices.jsx"; // ✅ Corrected path
import TopHighlightedProjects from "../components/TopHighlightedProjects/TopHighlightedProjects.jsx";
import PropertyResearchTools from "../components/PropertyResearchTools/PropertyResearchTools.jsx";
import NewsSection from "../components/NewsSection/NewsSection.jsx";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* Full width sections */}
      <section className="full-width">
        <HeroSection />
      </section>
             
         
      {/* <section className="container">
        <SearchBar />
      </section> */}

      <section className="container compact-section">
  <Localities />
</section>

<section className="container compact-section">
  <PropertyCategories />
</section>

<section className="container compact-section">
  <HousingTopPicks />
</section>

<section className="container compact-section">
  <Reels />
</section>

<section className="container compact-section">
  <FeaturedDeveloper />
</section>


      <section className="container">
        <FeaturedProperties />
      </section>

      <section className="container">
        <RecommendedSellers />
      </section>

      <section className="container">
        <HServices /> {/* ✅ Correct usage */}
      </section>

      <section className="container">
        <TopHighlightedProjects />
      </section>

      <section className="container">
        <PropertyResearchTools />
      </section>

      <section className="container">
        <NewsSection />
      </section>
    </div>
  );
};

export default Home;
