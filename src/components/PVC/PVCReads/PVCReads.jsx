import React from "react";
import "./PVCReads.css";

const PVCReads = () => {
  return (
    <div className="reads-wrapper">
      <h2 className="reads-heading">Interesting Reads</h2>
      <div className="reads-wave">~~~</div>

      <div className="reads-card">
        <div className="reads-header">
          <div className="reads-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
              alt="property"
            />
          </div>

          <div>
            <h3 className="reads-title">
              Property Valuation and Its Importance:
            </h3>
            <p className="reads-date">10th March 2024</p>
          </div>
        </div>

        <p className="reads-text">
          Figuring out the value of property feels a bit like solving a puzzle
          in the real estate realm. Property Valuation Calculator is the one
          that untangles this complex web, helping us make smart decisions and
          ensuring fairness in our property transactions. It's like having a
          guide in the intricate journey of real estate.
        </p>

        <p className="reads-text">
          Property valuation holds immense importance for several reasons:
        </p>

        <ol className="reads-list">
          <li>
            <b>Actual Worth:</b> Property Valuation Calculator helps both buyers
            and sellers understand the actual price of a property.
          </li>
          <li>
            <b>Loan Process:</b> Banks rely on property valuations to set loan
            amounts and establish mortgage terms and conditions.
          </li>
          <li>
            <b>Insurance Purposes:</b> Property Valuation Calculator helps to
            keep the coverage cost reasonable, reducing the risk of
            insufficient insurance coverage.
          </li>
          <li>
            <b>Rental Purpose:</b> The Rental Property Calculator helps in
            computing the market value of a property and assessing its
            usability for rental purposes.
          </li>
        </ol>
      </div>

      <div className="reads-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default PVCReads;
