import React from "react";
import "./Sellers.css";

const Sellers = ({ open }) => {
  if (!open) return null;

  return (
    <div className="sellers-wrapper">
      <div className="sellers-dropdown">
        <button className="sellers-item">Developers</button>
        <span className="sellers-sub">Launch or sell homes</span>

        <div className="sellers-divider" />

        <button className="sellers-item">Brokers</button>
        <span className="sellers-sub">List and grow business</span>

        <div className="sellers-divider" />

        <button className="sellers-item">Owners</button>
        <span className="sellers-sub">Sell or rent easily</span>
      </div>
    </div>
  );
};

export default Sellers;
