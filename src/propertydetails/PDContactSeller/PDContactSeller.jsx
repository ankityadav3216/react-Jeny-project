import React from "react";
import "./PDContactSeller.css";

const PDContactSeller = ({ property }) => {
  const handleSellerWheel = (event) => {
    const leftScrollContainer = document.querySelector(".pd-left");
    if (!leftScrollContainer) return;

    const delta = event.deltaY;
    const maxScrollTop =
      leftScrollContainer.scrollHeight - leftScrollContainer.clientHeight;
    const current = leftScrollContainer.scrollTop;

    const canScrollDown = delta > 0 && current < maxScrollTop;
    const canScrollUp = delta < 0 && current > 0;

    event.preventDefault();
    event.stopPropagation();

    // While left content has remaining scroll, consume wheel there first.
    if (canScrollDown || canScrollUp) {
      leftScrollContainer.scrollTop = Math.max(
        0,
        Math.min(maxScrollTop, current + delta)
      );
      return;
    }

    // Only after left side is fully consumed, allow page/footer scroll.
    window.scrollBy({ top: delta, behavior: "auto" });
  };

  return (
    <div className="sticky-card" onWheel={handleSellerWheel}>
      <h3 className="card-title">Contact Seller</h3>

      <div className="company-info">
        <div className="company-logo">PA</div>
        <div>
          <div className="company-name">PrimeAcres Sales Team</div>
          <div className="company-type">Verified Partner</div>
          <div className="company-phone">+91 1800 41 99099</div>
        </div>
      </div>

      <p className="helper-text">Get callback in 5 minutes</p>

      <div className="form-fields">
        <input className="blue-input" type="text" placeholder="Your name" />
        <input className="blue-input" type="tel" placeholder="Phone number" />
        <select className="blue-select" defaultValue="">
          <option value="" disabled>
            Select requirement
          </option>
          <option value="buy">Buy</option>
          <option value="visit">Site Visit</option>
          <option value="loan">Home Loan Help</option>
        </select>
      </div>

      <button type="button" className="light-blue-button">
        Request Callback
      </button>

      <p className="consent-section">
        By continuing, you agree to be contacted for this property.
      </p>

      <div className="contact-options">
        <span className="contact-option-item">Call</span>
        <span className="contact-option-item">WhatsApp</span>
      </div>
    </div>
  );
};

export default PDContactSeller;
