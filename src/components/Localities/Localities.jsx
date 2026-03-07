import React, { useRef, useEffect, useState, useCallback } from "react";
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
  { id: 10, city: "Morbi", img: "https://th.bing.com/th/id/R.ebb05dbb517eb2473ff6d9544b99ab0e?rik=U15xhVhHsKAT3A&riu=http%3a%2f%2ftouristinformationcenter.net%2fwp-content%2fuploads%2f2021%2f11%2fMani-Mandir-morbi.jpg" },
];

const Localities = () => {
  const wrapperRef = useRef(null);
  const [cardStyles, setCardStyles] = useState({});
  const autoDirectionRef = useRef(1);
  const autoPausedRef = useRef(false);
  const resumeTimerRef = useRef(null);

  // ----------------- ROTATION & SCALE -----------------
  const updateTransforms = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const isMobile = window.innerWidth <= 768;
    const cards = wrapper.children;
    const wrapperRect = wrapper.getBoundingClientRect();
    const wrapperCenter = wrapperRect.left + wrapperRect.width / 2;

    const newStyles = {};

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const offsetX = cardCenterX - wrapperCenter;

      const normalizedOffset = Math.max(Math.min(offsetX / (wrapperRect.width / 2), 1), -1);
      const offsetAbs = Math.abs(normalizedOffset);

      const rotationY = isMobile
        ? Math.sign(normalizedOffset) * (offsetAbs * 9)
        : normalizedOffset * 14;
      const scale = isMobile
        ? 1.02 - Math.min(offsetAbs * 0.14, 0.14)
        : 1 - Math.min(offsetAbs * 0.06, 0.06);
      const depth = isMobile
        ? 14 - Math.min(offsetAbs * 20, 20)
        : 18 - Math.min(offsetAbs * 14, 14);
      const liftY = isMobile ? 0 : 0;
      const brightness = isMobile ? 1.08 - Math.min(offsetAbs * 0.22, 0.22) : 1;
      const opacity = isMobile ? 1 - Math.min(offsetAbs * 0.18, 0.18) : 1;
      const shadowStrength = isMobile ? 0.44 - Math.min(offsetAbs * 0.24, 0.24) : 0.3;
      const blur = isMobile ? 14 - Math.min(offsetAbs * 4, 4) : 10;
      const shadowY = isMobile ? 9 - Math.min(offsetAbs * 3, 3) : 6;

      newStyles[i] = {
        transform: `perspective(1100px) rotateY(${rotationY}deg) translateZ(${depth}px) translateY(${liftY}px) scale(${scale})`,
        transition: "transform 0.28s ease, filter 0.28s ease, opacity 0.28s ease, box-shadow 0.28s ease",
        filter: `brightness(${brightness})`,
        opacity,
        boxShadow: `0 ${shadowY}px ${blur}px rgba(0, 0, 0, ${shadowStrength})`,
        zIndex: Math.round(100 - Math.abs(rotationY)),
      };
    }

    setCardStyles(newStyles);
  }, []);

  const adjustPadding = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // Keep first/last card and shadows fully visible.
    wrapper.style.paddingLeft = "6px";
    wrapper.style.paddingRight = "6px";

    updateTransforms();
  }, [updateTransforms]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(adjustPadding);
    const wrapper = wrapperRef.current;
    wrapper?.addEventListener("scroll", updateTransforms);
    window.addEventListener("resize", adjustPadding);

    return () => {
      window.cancelAnimationFrame(frame);
      wrapper?.removeEventListener("scroll", updateTransforms);
      window.removeEventListener("resize", adjustPadding);
    };
  }, [adjustPadding, updateTransforms]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return undefined;

    const pauseFor = (ms = 2000) => {
      autoPausedRef.current = true;
      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current);
      }
      resumeTimerRef.current = window.setTimeout(() => {
        autoPausedRef.current = false;
      }, ms);
    };

    const tick = () => {
      if (autoPausedRef.current) return;
      const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;
      if (maxScrollLeft <= 0) return;

      if (wrapper.scrollLeft <= 0) {
        autoDirectionRef.current = 1;
      } else if (wrapper.scrollLeft >= maxScrollLeft - 1) {
        autoDirectionRef.current = -1;
      }

      wrapper.scrollLeft += autoDirectionRef.current * 0.65;
    };

    const intervalId = window.setInterval(tick, 16);

    const pause = () => {
      autoPausedRef.current = true;
    };
    const resume = () => {
      autoPausedRef.current = false;
    };
    const handleUserInteract = () => {
      pauseFor(2000);
    };

    wrapper.addEventListener("mouseenter", pause);
    wrapper.addEventListener("mouseleave", resume);
    wrapper.addEventListener("touchstart", handleUserInteract, { passive: true });
    wrapper.addEventListener("touchmove", handleUserInteract, { passive: true });
    wrapper.addEventListener("wheel", handleUserInteract, { passive: true });
    wrapper.addEventListener("click", handleUserInteract);

    return () => {
      window.clearInterval(intervalId);
      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current);
      }
      wrapper.removeEventListener("mouseenter", pause);
      wrapper.removeEventListener("mouseleave", resume);
      wrapper.removeEventListener("touchstart", handleUserInteract);
      wrapper.removeEventListener("touchmove", handleUserInteract);
      wrapper.removeEventListener("wheel", handleUserInteract);
      wrapper.removeEventListener("click", handleUserInteract);
    };
  }, []);

  return (
    <section className="localities-container" aria-label="Popular localities">
      <div className="cards-wrapper" ref={wrapperRef}>
        {localitiesData.map((item, index) => (
          <Card
            key={item.id}
            hoverable
            className="locality-card"
            style={cardStyles[index]}
            cover={<img alt={item.city} src={item.img} className="card-image" />}
            bodyStyle={{ padding: "4px 4px 6px" }}
          >
            <p className="city-name">{item.city}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Localities;
