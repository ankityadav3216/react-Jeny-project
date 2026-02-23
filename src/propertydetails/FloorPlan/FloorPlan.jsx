import React, { useState } from "react";
import { Button } from "antd";
import "./FloorPlan.css";

// ✅ DIRECT IMAGE LINKS (no "/" before https)
const floorPlans = {
  "3 BHK": [
    {
      size: "205 SqYd",
      img: "https://i.pinimg.com/736x/ce/ed/5f/ceed5fb484725c3ddc9d465ba16ee2aa.jpg",
    },
    {
      size: "210 SqYd",
      img: "https://cdn.architecturendesign.net/wp-content/uploads/2015/01/15-3bedroom.png",
    },
    {
      size: "245 SqYd",
      img: "https://tse2.mm.bing.net/th/id/OIP.Jt3SF6CcplqgXo24GXO8nwHaGC?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      size: "250 SqYd",
      img: "https://tse3.mm.bing.net/th/id/OIP.klWo8RW_gfC_0l97o3UW2AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      size: "255 SqYd",
      img: "https://www.designlabinternational.com/wp-content/uploads/2022/08/3-bhk-house-design-in-village-733x550.jpg",
    },
  ],

  "2 BHK": [
    {
      size: "600 SqFt",
      img: "https://i.pinimg.com/originals/97/ff/80/97ff80e4f7a14152679d0845766af3df.jpg",
    },
  ],

  "1 BHK": [
    {
      size: "450 SqFt",
      img: "https://3.bp.blogspot.com/-LaSbxBWpMY0/WH6Ctu4XsrI/AAAAAAAAAFA/F0ZV-onNInM4rFM1F9DIke4Qs9yvBOjHgCLcB/s1600/floor_plan_1bhk_type1_big.jpg",
    },
  ],

  RK: [
    {
      size: "300 SqFt",
      img: "https://img2.cgtrader.com/items/106908/detailed_floor_plan_3d_3d_model_obj_max_995b0ca9-2223-4ce9-943d-87344da0e1c0.jpg",
    },
  ],
};

const FloorPlan = () => {
  const [unitType, setUnitType] = useState("3 BHK");
  const [selectedSize, setSelectedSize] = useState(floorPlans["3 BHK"][0]);

  const changeType = (type) => {
    setUnitType(type);
    setSelectedSize(floorPlans[type][0]);
  };

  return (
    <div className="floorplan-container">
      <h2 className="floorplan-title">Floor Plan</h2>

      {/* BHK Buttons */}
      <div className="bhk-selector">
        {Object.keys(floorPlans).map((type) => (
          <Button
            key={type}
            className={unitType === type ? "bhk-btn active" : "bhk-btn"}
            onClick={() => changeType(type)}
          >
            {type}
          </Button>
        ))}
      </div>

      {/* Size Tabs */}
      <div className="size-tabs">
        {floorPlans[unitType].map((plan) => (
          <div
            key={plan.size}
            className={
              selectedSize.size === plan.size
                ? "size-tab active"
                : "size-tab"
            }
            onClick={() => setSelectedSize(plan)}
          >
            {plan.size}
          </div>
        ))}
      </div>

      {/* Info */}
      <div className="plan-info">
        <span>Price On Request</span>
        <span>
          Super Built-Up <b>{selectedSize.size}</b>
        </span>
      </div>

      {/* Image */}
      <div className="plan-image-wrapper">
        <img
          src={selectedSize.img}
          alt="floorplan"
          onError={(e) => {
            // ✅ Fallback if image fails (Pinterest etc. block hotlinking)
            e.target.src =
              "https://via.placeholder.com/900x550?text=Image+Not+Available";
          }}
        />
      </div>
    </div>
  );
};

export default FloorPlan;