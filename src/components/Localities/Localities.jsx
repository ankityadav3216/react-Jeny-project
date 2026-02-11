import React, { useRef, useEffect, useState } from "react";
import { Card } from "antd";
import "./Localities.css";

const localitiesData = [
  { id: 1, city: "Ahmedabad", img: "https://tse4.mm.bing.net/th/id/OIP.IdjyHCZeQJ8Mn1NDYAiFdgHaHa?w=1080&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 2, city: "Surat", img: "https://surattourism.in/images/places-to-visit/header/gopi-talav-surat-tourism-entry-fee-timings-holidays-reviews-header.jpg" },
  { id: 3, city: "Vadodara", img: "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Laxmi-Vilas-Palace.jpg" },
  { id: 4, city: "Rajkot", img: "https://media1.thrillophilia.com/filestore/cxludqbyf9isz93f2wwqm6bjuknq_1589360462_Ranjit_Villas_Palace.png?w=753&h=450&dpr=2.0" },
  { id: 5, city: "Gandhinagar", img: "https://images.news9live.com/wp-content/uploads/2024/01/ff10a30a8f09cf8d5e9149de1593c1ab.jpg" },
  { id: 6, city: "Bhavnagar", img: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1314/Ahmedabad.jpg" },
  { id: 7, city: "Jamnagar", img: "https://www.trawell.in/admin/images/upload/133167821Pratap_Vilas_Palace.jpg" },
  { id: 8, city: "Junagadh", img: "https://www.gosahin.com/go/p/b/t1/1516274113_GIRNAR5.jpg" },
  { id: 9, city: "Anand", img: "https://seekatour.com/wp-content/uploads/2022/11/Gandhinagar.jpg" },
  { id: 10, city: "Morbi", img: "https://th.bing.com/th/id/R.ebb05dbb517eb2473ff6d9544b99ab0e?rik=U15xhVhHsKAT3A&riu=http%3a%2f%2ftouristinformationcenter.net%2fwp-content%2fuploads%2f2021%2f11%2fMani-Mandir-morbi.jpg&ehk=ZKT%2bl1UMi8eOJHlD8le2OfYAGfPa5Zt%2fsd0brvwf8ak%3d&risl=&pid=ImgRaw&r=0" },
];

const Localities = () => {
  const wrapperRef = useRef(null);
  const [cardStyles, setCardStyles] = useState({});
  const hasScrolledInitial = useRef(false); // to prevent double scroll on mount
  const cardWidth = 140;

  // --- Scroll to a specific card and center it ---
  const scrollToCard = (index) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const card = wrapper.children[index];
    if (!card) return;

    const wrapperRect = wrapper.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    // Calculate scroll position that puts card exactly in the middle
    const relativeLeft = cardRect.left - wrapperRect.left;
    const scrollLeft =
      wrapper.scrollLeft + relativeLeft + card.offsetWidth / 2 - wrapper.clientWidth / 2;

    wrapper.scrollTo({ left: scrollLeft, behavior: "smooth" });
  };

  // --- Update 3D transforms based on current scroll ---
  const updateTransforms = () => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const cards = wrapper.children;
    const wrapperRect = wrapper.getBoundingClientRect();
    const centerX = wrapperRect.width / 2;

    const newStyles = {};

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const offsetX = cardCenterX - (wrapperRect.left + centerX);

      const normalizedOffset = Math.max(Math.min(offsetX / centerX, 1), -1);
      const rotationY = normalizedOffset * 30;
      const scale = 1 - Math.min(Math.abs(normalizedOffset) * 0.15, 0.15);

      newStyles[i] = {
        transform: `perspective(800px) rotateY(${rotationY}deg) scale(${scale})`,
        transition: "transform 0.2s cubic-bezier(0.2, 0, 0, 1)",
        zIndex: Math.round(100 - Math.abs(rotationY)),
        cursor: "grab",
      };
    }

    setCardStyles(newStyles);
  };

  // --- Add left/right padding so first & last card can be centered ---
  const adjustPadding = () => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const containerWidth = wrapper.clientWidth;
    const padding = Math.max((containerWidth - cardWidth) / 2, 0);

    wrapper.style.paddingLeft = `${padding}px`;
    wrapper.style.paddingRight = `${padding}px`;

    updateTransforms();
  };

  // --- Set up Intersection Observer to reset to Gandhinagar when section becomes visible ---
  useEffect(() => {
    const container = document.querySelector(".localities-container");
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // If it's the first time, just mark it – we already scroll in mount effect
          if (!hasScrolledInitial.current) {
            hasScrolledInitial.current = true;
          } else {
            // On every subsequent appearance, scroll back to Gandhinagar
            scrollToCard(4); // index of Gandhinagar
          }
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  // --- Initial setup: padding, transforms, and scroll to Gandhinagar ---
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // 1. Set correct padding
    adjustPadding();

    // 2. After padding is applied, scroll to Gandhinagar
    const timer = setTimeout(() => {
      scrollToCard(4); // Gandhinagar
    }, 0);

    // 3. Add event listeners
    wrapper.addEventListener("scroll", updateTransforms);
    window.addEventListener("resize", adjustPadding);

    return () => {
      wrapper.removeEventListener("scroll", updateTransforms);
      window.removeEventListener("resize", adjustPadding);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="localities-container">
      <div className="cards-wrapper" ref={wrapperRef}>
        {localitiesData.map((item, index) => (
          <Card
            key={item.id}
            hoverable
            className="locality-card"
            style={cardStyles[index]}
            cover={<img alt={item.city} src={item.img} className="card-image" />}
            bodyStyle={{ padding: "6px 4px" }}
          >
            <p className="city-name">{item.city}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Localities;