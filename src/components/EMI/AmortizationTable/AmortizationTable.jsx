import React from "react";
import { Table } from "antd";
import "./AmortizationTable.css";

const AmortizationTable = () => {
  const columns = [
    {
      title: "Year (yyyy)",
      dataIndex: "year",
      key: "year",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Principal (₹)",
      dataIndex: "principal",
      key: "principal",
    },
    {
      title: "Interest (₹)",
      dataIndex: "interest",
      key: "interest",
    },
    {
      title: "Balance (₹)",
      dataIndex: "balance",
      key: "balance",
    },
    {
      title: "Paid (%)",
      dataIndex: "paid",
      key: "paid",
    },
  ];

  const dataSource = [
    { key: 1, year: 2026, principal: "7,17,931", interest: "9,60,928", balance: "1,13,82,069", paid: "5.93" },
    { key: 2, year: 2027, principal: "8,52,706", interest: "9,78,778", balance: "1,05,29,363", paid: "12.98" },
    { key: 3, year: 2028, principal: "9,31,770", interest: "8,99,713", balance: "95,97,593", paid: "20.68" },
    { key: 4, year: 2029, principal: "10,18,165", interest: "8,13,318", balance: "85,79,428", paid: "29.10" },
    { key: 5, year: 2030, principal: "11,12,571", interest: "7,18,912", balance: "74,66,857", paid: "38.29" },
    { key: 6, year: 2031, principal: "12,15,731", interest: "6,15,752", balance: "62,51,126", paid: "48.34" },
    { key: 7, year: 2032, principal: "13,28,456", interest: "5,03,028", balance: "49,22,670", paid: "59.32" },
    { key: 8, year: 2033, principal: "14,51,632", interest: "3,79,851", balance: "34,71,038", paid: "71.31" },
    { key: 9, year: 2034, principal: "15,86,230", interest: "2,45,253", balance: "18,84,808", paid: "84.42" },
    { key: 10, year: 2035, principal: "17,33,308", interest: "98,175", balance: "1,51,500", paid: "98.75" },
    { key: 11, year: 2036, principal: "1,51,500", interest: "1,124", balance: "0", paid: "100.00" },
  ];

  return (
    <div className="amortization-wrapper">
      <h2 className="amortization-title">Home Loan Amortization Table</h2>

      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        bordered={false}
        scroll={{ x: true }}
      />
    </div>
  );
};

export default AmortizationTable;
