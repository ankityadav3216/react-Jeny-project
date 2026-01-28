import React from "react";
import "./PLPropertycards.css";

const propertyData = [
  {
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    title: "S B Azura Height",
    subtitle: "2 BHK Flat in Jogeshwari West, Mumbai",
    type: "2 BHK Flat",
    price: "₹2.03 Cr - 2.2 Cr",
    info: "Avg. Price: ₹28.98 K/sq.ft • Possession: Dec, 2030",
    updated: "Updated 6d ago",
  },
  {
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
    title: "Paradigm Antalya",
    subtitle: "1 BHK Flat in Andheri East, Mumbai",
    type: "1 BHK Flat",
    price: "₹1.25 Cr",
    info: "Avg. Price: ₹24.50 K/sq.ft • Possession: 2028",
    updated: "Updated 2d ago",
  },
  {
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    title: "Shantee Sunshine",
    subtitle: "2 BHK Flat in Goregaon West, Mumbai",
    type: "2 BHK Flat",
    price: "₹1.75 Cr",
    info: "Avg. Price: ₹26.10 K/sq.ft • Possession: 2029",
    updated: "Updated 5d ago",
  },
  {
    img: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90",
    title: "Raj Legacy",
    subtitle: "3 BHK Flat in Malad East, Mumbai",
    type: "3 BHK Flat",
    price: "₹2.85 Cr",
    info: "Avg. Price: ₹30.20 K/sq.ft • Possession: 2030",
    updated: "Updated 1d ago",
  },
  {
    img: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    title: "Omkar Alta Monte",
    subtitle: "3 BHK Flat in Malad East, Mumbai",
    type: "3 BHK Flat",
    price: "₹3.15 Cr",
    info: "Avg. Price: ₹31.40 K/sq.ft • Possession: 2029",
    updated: "Updated 3d ago",
  },
  {
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Runwal Elegante",
    subtitle: "2 BHK Flat in Andheri West, Mumbai",
    type: "2 BHK Flat",
    price: "₹2.65 Cr",
    info: "Avg. Price: ₹29.75 K/sq.ft • Possession: Ready",
    updated: "Updated today",
  },
];

const PLPropertycards = () => {
  return (
    <div className="pl-wrapper">
      {propertyData.map((item, i) => (
        <div className="pl-card" key={i}>

          <div className="pl-img-box">
            <img src={item.img} alt="property" />
            <div className="pl-img-top">
              <span className="pl-tag">ST</span>
              <span className="pl-team">Sales Team +1</span>
            </div>
            <div className="pl-img-count">1 / 11</div>
          </div>

          <div className="pl-content">
            <div className="pl-top-badges">
              <span className="pl-badge">Zero Brokerage</span>
              <span className="pl-rera">RERA</span>
            </div>

            <h2 className="pl-title">{item.title}</h2>
            <p className="pl-subtitle">{item.subtitle}</p>

            <p className="pl-type">{item.type}</p>
            <p className="pl-price">{item.price}</p>
            <p className="pl-info">{item.info}</p>

            <div className="pl-bottom">
              <span className="pl-updated">{item.updated}</span>
              <div className="pl-actions">
                <span className="pl-heart">♡</span>
                <button className="pl-contact">Contact</button>
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default PLPropertycards;
