import React from "react";
import "./TopHighlightedProjects.css";

const projects = [
  {
    title: "Miliarium",
    by: "Mktd. by EESHANYA INFRAA",
    bhk: "3, 4 BHK Apartments",
    location: "Patil, West Hyderabad, Hyderabad",
    price: "₹1.07 Cr - 1.99 Cr",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
  },
  {
    title: "Sujay Global Elara",
    by: "by Sujay Global Homes LLP",
    bhk: "3 BHK Apartment",
    location: "Tellapur, West Hyderabad, Hyderabad",
    price: "₹1.39 Cr - 1.53 Cr",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },
  {
    title: "Urban Heights",
    by: "by Urban Infra",
    bhk: "2, 3 BHK Apartments",
    location: "Kondapur, Hyderabad",
    price: "₹95 L - 1.45 Cr",
    image:
      "https://images.unsplash.com/photo-1592595896616-c37162298647",
  },
  {
    title: "Skyline Grande",
    by: "by Skyline Builders",
    bhk: "3 BHK Apartments",
    location: "Gachibowli, Hyderabad",
    price: "₹1.25 Cr - 1.75 Cr",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Elite Towers",
    by: "by Elite Group",
    bhk: "2, 3 BHK Apartments",
    location: "Madhapur, Hyderabad",
    price: "₹1.1 Cr - 1.6 Cr",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  },
  {
    title: "Green Valley",
    by: "by Green Infra",
    bhk: "3, 4 BHK Apartments",
    location: "Narsingi, Hyderabad",
    price: "₹1.3 Cr - 2.0 Cr",
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
  },
  {
    title: "Royal Crest",
    by: "by Royal Homes",
    bhk: "3 BHK Apartments",
    location: "Kokapet, Hyderabad",
    price: "₹1.4 Cr - 1.9 Cr",
    image:
      "https://images.unsplash.com/photo-1597047084897-51e81819a499",
  },
  {
    title: "Iconic Residency",
    by: "by Iconic Builders",
    bhk: "2, 3 BHK Apartments",
    location: "Financial District, Hyderabad",
    price: "₹1.2 Cr - 1.8 Cr",
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf",
  },
];

const TopHighlightedProjects = () => {
  return (
    <div className="thp-wrapper">
      <h2 className="thp-title">Top highlighted projects</h2>
      <p className="thp-subtitle">Noteworthy projects to watch</p>

      <div className="thp-scroll">
        {projects.map((item, index) => (
          <div className="thp-card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="thp-overlay">
              <h3>{item.title}</h3>
              <p className="by">{item.by}</p>
              <p>{item.bhk}</p>
              <p className="location">{item.location}</p>
              <span className="price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopHighlightedProjects;
