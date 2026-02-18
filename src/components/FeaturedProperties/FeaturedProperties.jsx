import React, { useRef, useState, useEffect } from "react";
import "./FeaturedProperties.css";
import { EnvironmentOutlined, AppstoreOutlined } from "@ant-design/icons";

const properties = [
  {
    title: "Kreeva",
    developer: "Amogha Group",
    type: "2, 3 BHK Flat",
    location: "Vavol, Gandhinagar",
    price: "₹45.88 L - ₹67.83 L",
    image:
      "https://d33wubrfki0l68.cloudfront.net/8d802d82084b8b59aeb59232f47a066456a8a218/607ca/img/process/process-4.jpg",
  },
  {
    title: "3 BHK Flat for Sale in Raysan",
    developer: "Jayesh barot",
    type: "3 BHK Flat",
    location: "Raysan, Gandhinagar",
    price: "₹1.50 Cr - ₹1.55 Cr",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.LSeRWpEcjdEqF44ankcjVgHaHx?w=691&h=725&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    title: "AUXERIA",
    developer: "Atishay Shivalay Group",
    type: "3 BHK Flat",
    location: "Kudasan, Gandhinagar",
    price: "₹1.16 Cr - ₹1.31 Cr",
    image:
      "https://i.pinimg.com/736x/7b/54/39/7b54396284821030f2705a215a685c97.jpg",
  },
  {
    title: "Bosky The Upland",
    developer: "Prince Infra",
    type: "3, 4 BHK Flat",
    location: "Kudasan, Gandhinagar",
    price: "₹1.18 Cr - ₹1.58 Cr",
    image:
      "https://artdecomumbai.com/wp-content/uploads/2022/09/INN_SION_SHANTI-NIWAS_7a.jpg",
  },
  {
    title: "Green Heights",
    developer: "Shree Buildcon",
    type: "2 BHK Flat",
    location: "Randesan, Gandhinagar",
    price: "₹60 L - ₹75 L",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.KZamzkXOYmzl3hD6glFc0wHaGu?w=768&h=698&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    title: "Skyline Towers",
    developer: "Urban Group",
    type: "3 BHK Flat",
    location: "Sargasan, Gandhinagar",
    price: "₹90 L - ₹1.2 Cr",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.myi2yGYqdDVH7Oc25qggawHaEB?w=1068&h=580&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    title: "Royal Nest",
    developer: "Prime Infra",
    type: "4 BHK Flat",
    location: "Kudasan, Gandhinagar",
    price: "₹1.5 Cr - ₹1.9 Cr",
    image:
      "https://www.housefind.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-17-at-1.10.59-PM.jpeg",
  },
  {
    title: "Elite Enclave",
    developer: "Dream Homes",
    type: "3 BHK Flat",
    location: "Raysan, Gandhinagar",
    price: "₹1.1 Cr - ₹1.4 Cr",
    image:
      "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jun/29/Photo_h300_w450/67409169_3_0230523181443_300_450.jpg",
  },
];

const FeaturedProperties = () => {
  const scrollRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Duplicate cards for smooth infinite scroll
  const allProperties = [...properties, ...properties, ...properties];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollPos = 0;
    const cardWidth = 330; // card width + gap
    let interval;

    const startScroll = () => {
      interval = setInterval(() => {
        if (!isHovering && container) {
          scrollPos += 1; // scroll 1px per step
          if (scrollPos >= container.scrollWidth / 3) {
            scrollPos = 0; // reset to start for infinite loop
          }
          container.scrollTo({ left: scrollPos, behavior: "smooth" });
        }
      }, 20); // speed of scroll
    };

    startScroll();

    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <div className="featured-properties">
      <h2 className="fp-heading">Featured Properties</h2>

      <div
        className="fp-scroll"
        ref={scrollRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {allProperties.map((item, index) => (
          <div className="fp-card" key={`${item.title}-${index}`}>
            <div className="fp-image-wrapper">
              <img src={item.image} alt={item.title} />
              <span className="fp-badge">New Launch</span>
            </div>

            <div className="fp-details">
              <h3>{item.title}</h3>
              <p className="fp-dev">{item.developer}</p>

              <div className="fp-info">
                <span>
                  <AppstoreOutlined /> {item.type}
                </span>
                <span>
                  <EnvironmentOutlined /> {item.location}
                </span>
              </div>

              <h4 className="fp-price">{item.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
