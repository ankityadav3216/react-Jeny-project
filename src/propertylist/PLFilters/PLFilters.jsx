import React, { useState } from "react";
import { DownOutlined, SearchOutlined, PlusOutlined } from "@ant-design/icons";
import "./PLFilters.css";

const propertyTypes = [
  "Residential Apartment",
  "1 RK/ Studio Apartment",
  "Independent House/Villa",
  "Independent/Builder Floor",
  "Residential Land",
  "Farm House",
  "Serviced Apartment",
];

const bedroomTypes = ["1 RK/1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK", "6 BHK", "7 BHK", "8 BHK", "9 BHK", "10 BHK+"];
const constructionStatus = ["New Launch", "Under Construction", "Ready to move"];
const postedBy = ["Owner", "Builder", "Dealer", "Feature Dealer"];

const localities = [
  "Thane West",
  "Ghodbunder Road",
  "Majiwada",
  "Hiranandani Estate",
  "Balkum",
  "Manpada",
  "Kasarvadavali",
  "Vartak Nagar",
  "Kolshet Road",
  "Pokhran Road",
];

const projects = [
  "Piramal Vaikunth",
  "Lodha Amara",
  "Immensa by Kalpataru",
  "Raymond Realty Ten X Habitat",
  "Dosti West County",
  "Rustomjee Azziano",
  "Kalpataru Paramount",
  "Hiranandani Estate",
  "Puranik City",
  "Lodha Bellavista",
];

const purchaseTypes = ["Resale", "New Booking"];
const amenities = ["Lift", "Parking", "Park", "Gymnasium", "Power Backup", "Swimming Pool", "Club House", "Jogging Track", "Kids Play Area", "Security"];
const furnishingStatus = ["Unfurnished", "Semifurnished", "Furnished"];
const budgetMinOptions = ["No min", "10 L", "25 L", "50 L", "75 L", "1 Cr", "1.5 Cr", "2 Cr"];
const budgetMaxOptions = ["No max", "50 L", "75 L", "1 Cr", "1.5 Cr", "2 Cr", "3 Cr", "5 Cr"];
const areaMinOptions = ["No min", "250", "500", "750", "1000", "1500", "2000"];
const areaMaxOptions = ["No max", "500", "1000", "1500", "2000", "3000", "5000"];

const defaultOpen = {
  budget: true,
  propertyType: true,
  bedrooms: true,
  construction: true,
  postedBy: true,
  area: true,
  localities: true,
  projects: true,
  purchase: true,
  amenities: true,
  furnishing: true,
};

const PLFilters = ({ inDrawer = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [mobilePanel, setMobilePanel] = useState("budget");
  const [toggles, setToggles] = useState({
    hideSeen: false,
    verified: false,
    photos: false,
    videos: false,
  });
  const [budgetMin, setBudgetMin] = useState("No min");
  const [budgetMax, setBudgetMax] = useState("No max");
  const [areaMin, setAreaMin] = useState("No min");
  const [areaMax, setAreaMax] = useState("No max");
  const [showMore, setShowMore] = useState({
    propertyType: false,
    bedrooms: false,
    localities: false,
    projects: false,
    amenities: false,
  });

  const [selected, setSelected] = useState({
    propertyType: new Set(),
    bedrooms: new Set(),
    construction: new Set(),
    postedBy: new Set(),
    purchase: new Set(),
    amenities: new Set(),
    furnishing: new Set(),
    localities: new Set(),
    projects: new Set(),
  });

  const toggleSection = (key) => {
    setIsOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleSwitch = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleSelection = (group, value) => {
    setSelected((prev) => {
      const nextSet = new Set(prev[group]);
      if (nextSet.has(value)) {
        nextSet.delete(value);
      } else {
        nextSet.add(value);
      }
      return { ...prev, [group]: nextSet };
    });
  };

  const clearAmenities = () => {
    setSelected((prev) => ({ ...prev, amenities: new Set() }));
  };
  const toggleShowMore = (key) => {
    setShowMore((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const chipClass = (group, value) =>
    selected[group].has(value) ? "pl-chip pl-chip-active" : "pl-chip";

  const checkClass = (group, value) =>
    selected[group].has(value) ? "pl-check-item pl-check-item-active" : "pl-check-item";

  const renderMobilePanel = () => {
    if (mobilePanel === "budget") {
      return (
        <div className="pl-mobile-panel">
          <div className="pl-dual-inputs">
            <label className="pl-select-wrap">
              <select className="pl-native-select" value={budgetMin} onChange={(event) => setBudgetMin(event.target.value)}>
                {budgetMinOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <DownOutlined className="pl-select-icon" />
            </label>
            <label className="pl-select-wrap">
              <select className="pl-native-select" value={budgetMax} onChange={(event) => setBudgetMax(event.target.value)}>
                {budgetMaxOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <DownOutlined className="pl-select-icon" />
            </label>
          </div>
        </div>
      );
    }

    if (mobilePanel === "construction") {
      return (
        <div className="pl-mobile-panel">
          <div className="pl-chip-wrap">
            {constructionStatus.map((item) => (
              <button key={item} className={chipClass("construction", item)} type="button" onClick={() => toggleSelection("construction", item)}>
                <PlusOutlined /> {item}
              </button>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="pl-mobile-panel">
        <div className="pl-check-list">
          {(showMore.localities ? localities : localities.slice(0, 5)).map((item) => (
            <label key={item} className={checkClass("localities", item)}>
              <input type="checkbox" checked={selected.localities.has(item)} onChange={() => toggleSelection("localities", item)} />
              <span>{item}</span>
            </label>
          ))}
        </div>
        <button className="pl-search-more" type="button" onClick={() => toggleShowMore("localities")}>
          <SearchOutlined /> {showMore.localities ? "Show less localities" : "More Localities"}
        </button>
      </div>
    );
  };

  return (
    <aside className={`pl-filters ${inDrawer ? "pl-filters-drawer" : ""}`} aria-label="Property filters">
      <div className="pl-mobile-quick">
        <div className="pl-mobile-quick-row">
          <button
            type="button"
            className={`pl-mobile-tab ${mobilePanel === "budget" ? "pl-mobile-tab-active" : ""}`}
            onClick={() => setMobilePanel("budget")}
          >
            Budget <DownOutlined />
          </button>
          <button
            type="button"
            className={`pl-mobile-tab ${mobilePanel === "construction" ? "pl-mobile-tab-active" : ""}`}
            onClick={() => setMobilePanel("construction")}
          >
            Possession Status <DownOutlined />
          </button>
          <button
            type="button"
            className={`pl-mobile-tab ${mobilePanel === "localities" ? "pl-mobile-tab-active" : ""}`}
            onClick={() => setMobilePanel("localities")}
          >
            Localities <DownOutlined />
          </button>
        </div>
        {renderMobilePanel()}
      </div>

      <div className="pl-desktop-filters">
      <section className="pl-filter-group pl-inline-group">
        <span className="pl-heading">Hide already seen</span>
        <button
          className={`pl-switch ${toggles.hideSeen ? "pl-switch-on" : ""}`}
          aria-label="Hide already seen toggle"
          type="button"
          onClick={() => toggleSwitch("hideSeen")}
        />
      </section>

      <section className="pl-filter-group">
        <div className="pl-inline-group">
          <span className="pl-heading">Verified properties</span>
          <button
            className={`pl-switch ${toggles.verified ? "pl-switch-on" : ""}`}
            aria-label="Verified properties toggle"
            type="button"
            onClick={() => toggleSwitch("verified")}
          />
        </div>
        <p className="pl-verified-text">
          <span className="pl-badge">Verified</span>
          by 99acres verification team
        </p>
      </section>

      <section className="pl-filter-group">
        <button className="pl-title-row pl-title-button" type="button" onClick={() => toggleSection("budget")}>
          <span className="pl-heading">Budget</span>
          <span className={`pl-caret ${isOpen.budget ? "pl-caret-open" : ""}`} aria-hidden="true">
            <DownOutlined />
          </span>
        </button>
        {isOpen.budget && (
          <div className="pl-dual-inputs">
            <label className="pl-select-wrap">
              <select className="pl-native-select" value={budgetMin} onChange={(event) => setBudgetMin(event.target.value)}>
                {budgetMinOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <DownOutlined className="pl-select-icon" />
            </label>
            <label className="pl-select-wrap">
              <select className="pl-native-select" value={budgetMax} onChange={(event) => setBudgetMax(event.target.value)}>
                {budgetMaxOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <DownOutlined className="pl-select-icon" />
            </label>
          </div>
        )}
      </section>

      <section className="pl-filter-group">
        <button className="pl-title-row pl-title-button" type="button" onClick={() => toggleSection("propertyType")}>
          <span className="pl-heading">Type of property</span>
          <span className={`pl-caret ${isOpen.propertyType ? "pl-caret-open" : ""}`} aria-hidden="true">
            <DownOutlined />
          </span>
        </button>
        {isOpen.propertyType && (
          <>
            <div className="pl-chip-wrap">
              {(showMore.propertyType ? propertyTypes : propertyTypes.slice(0, 5)).map((item) => (
                <button key={item} className={chipClass("propertyType", item)} type="button" onClick={() => toggleSelection("propertyType", item)}>
                  <PlusOutlined /> {item}
                </button>
              ))}
            </div>
            {propertyTypes.length > 5 && (
              <button className="pl-more" type="button" onClick={() => toggleShowMore("propertyType")}>
                {showMore.propertyType ? "Show less" : `+ ${propertyTypes.length - 5} more`}
              </button>
            )}
          </>
        )}
      </section>

      <section className="pl-filter-group">
        <button className="pl-title-row pl-title-button" type="button" onClick={() => toggleSection("bedrooms")}>
          <span className="pl-heading">No. of Bedrooms</span>
          <span className={`pl-caret ${isOpen.bedrooms ? "pl-caret-open" : ""}`} aria-hidden="true">
            <DownOutlined />
          </span>
        </button>
        {isOpen.bedrooms && (
          <>
            <div className="pl-chip-wrap">
              {(showMore.bedrooms ? bedroomTypes : bedroomTypes.slice(0, 5)).map((item) => (
                <button key={item} className={chipClass("bedrooms", item)} type="button" onClick={() => toggleSelection("bedrooms", item)}>
                  <PlusOutlined /> {item}
                </button>
              ))}
            </div>
            {bedroomTypes.length > 5 && (
              <button className="pl-more" type="button" onClick={() => toggleShowMore("bedrooms")}>
                {showMore.bedrooms ? "Show less" : `+ ${bedroomTypes.length - 5} more`}
              </button>
            )}
          </>
        )}
      </section>

      <section className="pl-filter-group">
        <button className="pl-title-row pl-title-button" type="button" onClick={() => toggleSection("construction")}>
          <span className="pl-heading">Construction Status</span>
          <span className={`pl-caret ${isOpen.construction ? "pl-caret-open" : ""}`} aria-hidden="true">
            <DownOutlined />
          </span>
        </button>
        {isOpen.construction && (
          <div className="pl-chip-wrap">
            {constructionStatus.map((item) => (
              <button key={item} className={chipClass("construction", item)} type="button" onClick={() => toggleSelection("construction", item)}>
                <PlusOutlined /> {item}
              </button>
            ))}
          </div>
        )}
      </section>

      <section className="pl-filter-group">
        <button className="pl-title-row pl-title-button" type="button" onClick={() => toggleSection("postedBy")}>
          <span className="pl-heading">Posted by</span>
          <span className={`pl-caret ${isOpen.postedBy ? "pl-caret-open" : ""}`} aria-hidden="true">
            <DownOutlined />
          </span>
        </button>
        {isOpen.postedBy && (
          <div className="pl-chip-wrap">
            {postedBy.map((item) => (
              <button key={item} className={chipClass("postedBy", item)} type="button" onClick={() => toggleSelection("postedBy", item)}>
                <PlusOutlined /> {item}
              </button>
            ))}
          </div>
        )}
      </section>

      <section className="pl-filter-group">
        <button className="pl-title-row pl-title-button" type="button" onClick={() => toggleSection("area")}>
          <span className="pl-heading">Area</span>
          <span className={`pl-caret ${isOpen.area ? "pl-caret-open" : ""}`} aria-hidden="true">
            <DownOutlined />
          </span>
        </button>
        {isOpen.area && (
          <>
            <span className="pl-subtitle">sq.ft.</span>
            <div className="pl-dual-inputs">
              <label className="pl-select-wrap">
                <select className="pl-native-select" value={areaMin} onChange={(event) => setAreaMin(event.target.value)}>
                  {areaMinOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <DownOutlined className="pl-select-icon" />
              </label>
              <label className="pl-select-wrap">
                <select className="pl-native-select" value={areaMax} onChange={(event) => setAreaMax(event.target.value)}>
                  {areaMaxOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <DownOutlined className="pl-select-icon" />
              </label>
            </div>
          </>
        )}
      </section>

      <section className="pl-filter-group">
        <button className="pl-title-row pl-title-button" type="button" onClick={() => toggleSection("localities")}>
          <span className="pl-heading">Localities</span>
          <span className={`pl-caret ${isOpen.localities ? "pl-caret-open" : ""}`} aria-hidden="true">
            <DownOutlined />
          </span>
        </button>
        {isOpen.localities && (
          <>
            <div className="pl-check-list">
              {(showMore.localities ? localities : localities.slice(0, 5)).map((item) => (
                <label key={item} className={checkClass("localities", item)}>
                  <input
                    type="checkbox"
                    checked={selected.localities.has(item)}
                    onChange={() => toggleSelection("localities", item)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
            <button className="pl-search-more" type="button" onClick={() => toggleShowMore("localities")}>
              <SearchOutlined /> {showMore.localities ? "Show less localities" : "More Localities"}
            </button>
          </>
        )}
      </section>

      <section className="pl-filter-group">
        <button className="pl-title-row pl-title-button" type="button" onClick={() => toggleSection("projects")}>
          <span className="pl-heading">New Projects / Societies</span>
          <span className={`pl-caret ${isOpen.projects ? "pl-caret-open" : ""}`} aria-hidden="true">
            <DownOutlined />
          </span>
        </button>
        {isOpen.projects && (
          <>
            <div className="pl-check-list">
              {(showMore.projects ? projects : projects.slice(0, 5)).map((item) => (
                <label key={item} className={checkClass("projects", item)}>
                  <input
                    type="checkbox"
                    checked={selected.projects.has(item)}
                    onChange={() => toggleSelection("projects", item)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
            <button className="pl-search-more" type="button" onClick={() => toggleShowMore("projects")}>
              <SearchOutlined /> {showMore.projects ? "Show less societies" : "More Societies"}
            </button>
          </>
        )}
      </section>

      <section className="pl-filter-group">
        <button className="pl-title-row pl-title-button" type="button" onClick={() => toggleSection("purchase")}>
          <span className="pl-heading">Purchase type</span>
          <span className={`pl-caret ${isOpen.purchase ? "pl-caret-open" : ""}`} aria-hidden="true">
            <DownOutlined />
          </span>
        </button>
        {isOpen.purchase && (
          <div className="pl-chip-wrap">
            {purchaseTypes.map((item) => (
              <button key={item} className={chipClass("purchase", item)} type="button" onClick={() => toggleSelection("purchase", item)}>
                <PlusOutlined /> {item}
              </button>
            ))}
          </div>
        )}
      </section>

      <section className="pl-filter-group">
        <div className="pl-title-row">
          <button className="pl-title-button" type="button" onClick={() => toggleSection("amenities")}>
            <span className="pl-heading">Amenities</span>
            <span className={`pl-caret ${isOpen.amenities ? "pl-caret-open" : ""}`} aria-hidden="true">
              <DownOutlined />
            </span>
          </button>
          <button className="pl-clear-btn" type="button" onClick={clearAmenities}>
            Clear
          </button>
        </div>
        {isOpen.amenities && (
          <>
            <div className="pl-chip-wrap">
              {(showMore.amenities ? amenities : amenities.slice(0, 5)).map((item) => (
                <button key={item} className={chipClass("amenities", item)} type="button" onClick={() => toggleSelection("amenities", item)}>
                  <PlusOutlined /> {item}
                </button>
              ))}
            </div>
            {amenities.length > 5 && (
              <button className="pl-more" type="button" onClick={() => toggleShowMore("amenities")}>
                {showMore.amenities ? "Show less" : `+ ${amenities.length - 5} more`}
              </button>
            )}
          </>
        )}
      </section>

      <section className="pl-filter-group pl-inline-group">
        <span className="pl-heading">Properties with photos</span>
        <button
          className={`pl-switch ${toggles.photos ? "pl-switch-on" : ""}`}
          aria-label="Properties with photos toggle"
          type="button"
          onClick={() => toggleSwitch("photos")}
        />
      </section>

      <section className="pl-filter-group pl-inline-group">
        <span className="pl-heading">Properties with videos</span>
        <button
          className={`pl-switch ${toggles.videos ? "pl-switch-on" : ""}`}
          aria-label="Properties with videos toggle"
          type="button"
          onClick={() => toggleSwitch("videos")}
        />
      </section>

      <section className="pl-filter-group">
        <button className="pl-title-row pl-title-button" type="button" onClick={() => toggleSection("furnishing")}>
          <span className="pl-heading">Furnishing status</span>
          <span className={`pl-caret ${isOpen.furnishing ? "pl-caret-open" : ""}`} aria-hidden="true">
            <DownOutlined />
          </span>
        </button>
        {isOpen.furnishing && (
          <div className="pl-chip-wrap">
            {furnishingStatus.map((item) => (
              <button key={item} className={chipClass("furnishing", item)} type="button" onClick={() => toggleSelection("furnishing", item)}>
                <PlusOutlined /> {item}
              </button>
            ))}
          </div>
        )}
      </section>
      </div>
    </aside>
  );
};

export default PLFilters;
