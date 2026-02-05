import React, { useState } from "react";
import { Collapse } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./EMIFAQ.css";

const { Panel } = Collapse;

const EMIFAQ = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="emi-faq-wrapper">
      <h2 className="emi-faq-title">Frequently Asked Questions</h2>

      <Collapse
        bordered={false}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (
          <DownOutlined rotate={isActive ? 180 : 0} />
        )}
        className="emi-faq-collapse"
      >
        <Panel header="What is Home Loan Calculator?" key="1">
          <p>
            A Home Loan Calculator helps you estimate your monthly EMI,
            total interest payable, and loan tenure based on loan amount
            and interest rate.
          </p>
        </Panel>

        <Panel header="What is EMI?" key="2">
          <p>
            EMI (Equated Monthly Installment) is the fixed amount you pay
            every month towards repayment of your loan.
          </p>
        </Panel>

        <Panel header="How is EMI calculated on home loan?" key="3">
          <p>
            EMI is calculated using loan amount, interest rate, and tenure
            using a standard financial formula.
          </p>
        </Panel>

        {showMore && (
          <>
            <Panel header="Can I prepay my home loan?" key="4">
              <p>
                Yes, most banks allow prepayment which can reduce your
                interest burden.
              </p>
            </Panel>

            <Panel header="Does interest rate affect EMI?" key="5">
              <p>
                Yes, higher interest rates increase EMI and total payable
                amount.
              </p>
            </Panel>
          </>
        )}
      </Collapse>

      <div
        className="see-more"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "See Less" : "See More"}
      </div>
    </div>
  );
};

export default EMIFAQ;
