import React from "react";
import { Collapse } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./PVCFAQ.css";

const { Panel } = Collapse;

const PVCFAQ = () => {
  return (
    <div className="faq-wrapper">
      <h2 className="faq-heading">Frequently asked questions</h2>
      <div className="faq-wave">~~~</div>

      <Collapse
        accordion
        bordered={false}
        expandIcon={({ isActive }) => (
          <DownOutlined
            rotate={isActive ? 180 : 0}
            className="faq-icon"
          />
        )}
        className="faq-collapse"
      >
        <Panel header="How do I calculate the residual value of my property?" key="1">
          <p>
            Residual value is calculated by estimating the future value of the
            property after development costs, taxes, and profit margins are
            deducted.
          </p>
        </Panel>

        <Panel header="How Do You Calculate the Market Value of a Property?" key="2">
          <p>
            Market value is determined by comparing similar properties,
            location, demand, condition, and recent sale prices.
          </p>
        </Panel>

        <Panel header="How Do You Calculate Property Value from Rent?" key="3">
          <p>
            Property value from rent is calculated using rental yield or income
            capitalization methods.
          </p>
        </Panel>

        <Panel header="How Is a Property Valued?" key="4">
          <p>
            Property valuation considers location, size, condition, market
            trends, and comparable sales.
          </p>
        </Panel>

        <Panel header="How Do Banks Do Property Valuation?" key="5">
          <p>
            Banks use certified valuers who assess market value, legal status,
            and construction quality.
          </p>
        </Panel>

        <Panel header="How accurate is the Property Valuation Calculator estimate?" key="6">
          <p>
            The estimate is indicative and based on available market data; final
            value may vary.
          </p>
        </Panel>

        <Panel header="Is the Property Valuation Calculator suitable for all property types?" key="7">
          <p>
            It works best for residential properties; commercial properties may
            need expert valuation.
          </p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default PVCFAQ;
