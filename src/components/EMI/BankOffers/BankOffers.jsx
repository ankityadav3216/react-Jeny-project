import React from "react";
import { Table, Button } from "antd";
import "./BankOffers.css";

const BankOffers = () => {
  const columns = [
    {
      title: "Bank Name",
      dataIndex: "bank",
      key: "bank",
      render: (bank) => (
        <div className="bank-name">
          <img src={bank.logo} alt={bank.name} />
          <span>{bank.name}</span>
        </div>
      ),
    },
    {
      title: "Interest",
      dataIndex: "interest",
      key: "interest",
    },
    {
      title: "Tenure",
      dataIndex: "tenure",
      key: "tenure",
      render: (t) => (
        <div>
          <div>{t.years}</div>
          <span className="sub-text">YEARS</span>
        </div>
      ),
    },
    {
      title: "Processing Fees",
      dataIndex: "fees",
      key: "fees",
      render: (f) => (
        <div>
          <div>{f.amount}</div>
          <span className="sub-text">+ GST</span>
        </div>
      ),
    },
    {
      title: "",
      key: "action",
      render: () => (
        <Button className="apply-btn">Apply</Button>
      ),
    },
  ];

  const dataSource = [
    {
      key: 1,
      bank: {
        name: "HDFC Bank",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/2560px-HDFC_Bank_Logo.svg.png",
      },
      interest: "7.1%",
      tenure: { years: "0 – 30" },
      fees: { amount: "Rs 0" },
    },
    {
      key: 2,
      bank: {
        name: "ICICI Bank",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/2560px-ICICI_Bank_Logo.svg.png",
      },
      interest: "7.35%",
      tenure: { years: "1 – 30" },
      fees: { amount: "Rs 1900" },
    },
    {
      key: 3,
      bank: {
        name: "State Bank of India",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/2560px-SBI-logo.svg.png",
      },
      interest: "8.95%",
      tenure: { years: "10 – 20" },
      fees: { amount: "1 %" },
    },
    {
      key: 4,
      bank: {
        name: "Axis Bank",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Axis_Bank_logo.svg/2560px-Axis_Bank_logo.svg.png",
      },
      interest: "7.5%",
      tenure: { years: "5 – 25" },
      fees: { amount: "Rs 1500" },
    },
    {
      key: 5,
      bank: {
        name: "Kotak Mahindra Bank",
        logo: "https://logos-download.com/wp-content/uploads/2016/06/Kotak_Mahindra_Bank_logo.png",
      },
      interest: "7.8%",
      tenure: { years: "3 – 20" },
      fees: { amount: "0.5%" },
    },
  ];

  return (
    <div className="bank-offers-wrapper">
      <h2 className="bank-offers-title">Bank Offers</h2>

      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        scroll={{ x: true }}
      />
    </div>
  );
};

export default BankOffers;