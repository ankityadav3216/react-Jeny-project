import React from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import "./Buy.css";



const Buy = ({ open }) => {
  const navigate = useNavigate();

  if (!open) return null;

  const goToCity = (city) => {
    navigate(`/buy/${city}`);
  };   



  return (
    <div className="mega-wrapper">
      <div className="mega-container">

        <Card title="Top Metropolitans in India" bordered={false} className="mega-card">
          <ul className="mega-list">
            <li onClick={() => goToCity("mumbai")}>Properties for sale in Mumbai</li>
            <li onClick={() => goToCity("bangalore")}>Properties for sale in Bangalore</li>
            <li onClick={() => goToCity("delhi")}>Properties for sale in New Delhi</li>
            <li onClick={() => goToCity("hyderabad")}>Properties for sale in Hyderabad</li>
            <li onClick={() => goToCity("chennai")}>Properties for sale in Chennai</li>
            <li onClick={() => goToCity("kolkata")}>Properties for sale in Kolkata</li>
            <li onClick={() => goToCity("gurgaon")}>Properties for sale in Gurgaon</li>
          </ul>
        </Card>

        <Card title="Top Emerging Cities in India" bordered={false} className="mega-card">
          <ul className="mega-list">
            <li>Properties for sale in Pune</li>
            <li>Properties for sale in Thane</li>
            <li>Properties for sale in Ahmedabad</li>
            <li>Properties for sale in Navi Mumbai</li>
            <li>Properties for sale in Noida</li>
            <li>Properties for sale in Jaipur</li>
          </ul>
        </Card>

        <Card title="Top Projects in India" bordered={false} className="mega-card">
          <ul className="mega-list">
            <li>Dosti West County</li>
            <li>Disha Pursuit Of The Elements</li>
            <li>Radhaya Urbanity</li>
            <li>Aparna Zenon</li>
            <li>Pacifica Aurum Villas</li>
            <li>Arbanique City</li>
            <li>Birla Navya Gurugram</li>
          </ul>
        </Card>

        <Card title="Top Developers in India" bordered={false} className="mega-card">
          <ul className="mega-list">
            <li>Reputed Builder</li>
            <li>Sobha Limited</li>
            <li>Goyal Builders</li>
            <li>R. V. Nirmaan Pvt Ltd</li>
            <li>Casagrand Builder</li>
            <li>Eden Group</li>
            <li>Signature Global</li>
          </ul>
        </Card>

      </div>
    </div>
  );
};

export default Buy;
