import React, { useEffect, useRef, useState } from "react";
import {
  ThunderboltOutlined,
  UserOutlined,
  SafetyCertificateOutlined,
  BuildOutlined,
  CheckCircleOutlined,
  CameraOutlined,
  RightOutlined,
  BarsOutlined,
  DownOutlined,
  SlidersOutlined,
} from "@ant-design/icons";
import "./label.css";

const quickFilters = [
  "NEW LAUNCH",
  "Owner",
  "Verified",
  "Under construction",
  "Ready To Move",
  "With Photos",
];

const sortFilters = ["Relevance", "Price Low to High", "Most Recent"];
const filterIcons = {
  "NEW LAUNCH": <ThunderboltOutlined />,
  Owner: <UserOutlined />,
  Verified: <SafetyCertificateOutlined />,
  "Under construction": <BuildOutlined />,
  "Ready To Move": <CheckCircleOutlined />,
  "With Photos": <CameraOutlined />,
};

const Label = ({ mobileFilterTrigger = null }) => {
  const chipRailRef = useRef(null);
  const sortWrapRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("NEW LAUNCH");
  const [activeSort, setActiveSort] = useState("Relevance");
  const [isSortOpen, setIsSortOpen] = useState(false);

  const scrollChipsRight = () => {
    if (!chipRailRef.current) return;
    chipRailRef.current.scrollBy({ left: 220, behavior: "smooth" });
  };

  const handleSortSelect = (sortValue) => {
    setActiveSort(sortValue);
    setIsSortOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!sortWrapRef.current?.contains(event.target)) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <section className={`pl-label-block ${mobileFilterTrigger ? "pl-label-block-compact" : ""}`}>
      {!mobileFilterTrigger && <h1 className="pl-label-title">131 results | Builder Floors in Thane</h1>}

      {!mobileFilterTrigger && (
        <div className="pl-insight-strip">
          <span className="pl-insight-icon">i</span>
          <span className="pl-insight-text">Get to know more about Thane</span>
          <button type="button" className="pl-insight-link">
            View Insights
          </button>
        </div>
      )}

      <div className="pl-label-controls">
        <div className="pl-filter-toolbar">
          <div ref={chipRailRef} className="pl-chip-rail" aria-label="Quick filters">
            {mobileFilterTrigger && (
              <button
                type="button"
                className="pl-mobile-filter-btn"
                onClick={mobileFilterTrigger.onClick}
                aria-label="Open filters"
              >
                <SlidersOutlined />
                <span>Filters</span>
              </button>
            )}
            {quickFilters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setActiveFilter(item)}
                className={`pl-filter-chip ${activeFilter === item ? "pl-filter-chip-active" : ""}`}
              >
                <span className="pl-chip-icon">{filterIcons[item]}</span>
                <span>{item}</span>
              </button>
            ))}
          </div>

          <button type="button" className="pl-chip-next-btn" onClick={scrollChipsRight} aria-label="Show more filters">
            <RightOutlined />
          </button>

          <div ref={sortWrapRef} className="pl-sort-wrap">
            <button
              type="button"
              className="pl-sort-trigger"
              onClick={() => setIsSortOpen((prev) => !prev)}
              aria-expanded={isSortOpen}
            >
              <span className="pl-sort-lines" aria-hidden="true">
                <BarsOutlined />
              </span>
              <span className="pl-sort-trigger-text">Sort By</span>
              <span className="pl-sort-trigger-arrow">
                <DownOutlined />
              </span>
            </button>

            {isSortOpen && (
              <div className="pl-sort-dropdown" role="menu" aria-label="Sort options">
                {sortFilters.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={`pl-sort-option ${activeSort === item ? "pl-sort-option-active" : ""}`}
                    onClick={() => handleSortSelect(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Label;
