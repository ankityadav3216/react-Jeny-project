import React from "react";
import "./HomeLoansByBank.css";

const banks = [
  "Indiabulls Home Loan",
  "Standard Chartered Bank Home Loan",
  "Indian Overseas Bank Home Loan",
  "Edelweiss Housing Finance Home Loan",
  "Allahabad Bank Home Loan",
  "L&T Housing Finance Home Loan",
  "Karnataka Bank Home Loan",
  "United Bank of India Home Loan",
  "HDFC Bank Home Loans",
  "Canara Bank Home Loan"
];

const HomeLoansByBank = () => {
  return (
    <div className="bank-loans-box">
      <h3>Home Loans By Bank</h3>
      <ul>
        {banks.map((bank, index) => (
          <li key={index}>
            <a href="#">{bank}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeLoansByBank;
