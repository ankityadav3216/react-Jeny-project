// src/pages/Home.jsx
import React from 'react';

// Import all components except PropertyDetail
// import Header from '../components/Header/Header.jsx';
import HeroSection from '../components/HeroSection/Herosection.jsx';
import SearchBar from '../components/SearchBar/SearchBar.jsx';
import HousingTopPicks from '../components/HousingTopPicks/HousingTopPicks.jsx';
import FeaturedDeveloper from '../components/FeaturedDevelopers/FeaturedDevelopers.jsx';
import FeaturedProperties from '../components/FeaturedProperties/FeaturedProperties.jsx';
import Localities from '../components/Localities/Localities.jsx';
import RecommendedSellers from '../components/RecommendedSellers/RecommendedSellers.jsx';
import Services from '../components/Services/Services.jsx';
import TopHighlightedProjects from '../components/TopHighlightedProjects/TopHighlightedProjects.jsx';
import PropertyResearchTools from '../components/PropertyResearchTools/PropertyResearchTools.jsx';
import NewsSection from '../components/NewsSection/NewsSection.jsx';
// import Footer from '../components/Footer/Footer.jsx';
 import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
    {/* <Header /> */}
      <HeroSection />
      <SearchBar />
      <HousingTopPicks />
      <FeaturedDeveloper />
      <FeaturedProperties />
      <Localities />
      <RecommendedSellers />
      <Services />
      <TopHighlightedProjects/>
      <PropertyResearchTools/>
      <NewsSection />
    {/* <Footer /> */}
    </div>
  );
};

export default Home;