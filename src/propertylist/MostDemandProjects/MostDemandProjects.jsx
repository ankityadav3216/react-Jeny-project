import React, { useRef, useState, useEffect } from "react";
import "./MostDemandProjects.css";
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
    title: "AUXERIA",
    developer: "Atishay Shivalay Group",
    type: "3 BHK Flat",
    location: "Kudasan, Gandhinagar",
    price: "₹1.16 Cr - ₹1.31 Cr",
    image:
      "https://i.pinimg.com/736x/7b/54/39/7b54396284821030f2705a215a685c97.jpg",
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
];

const MostDemandProjects = () => {
  const scrollRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const allProperties = [...properties, ...properties, ...properties];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollPos = 0;
    let interval;

    const startScroll = () => {
      interval = setInterval(() => {
        if (!isHovering && container) {
          scrollPos += 1;
          if (scrollPos >= container.scrollWidth / 3) {
            scrollPos = 0;
          }
          container.scrollTo({ left: scrollPos });
        }
      }, 20);
    };

    startScroll();
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <div className="most-demand-projects">
      <h2 className="mdp-heading">Most Demand Project in Gujarats</h2>

      <div
        className="mdp-scroll"
        ref={scrollRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {allProperties.map((item, index) => (
          <div className="mdp-card" key={`${item.title}-${index}`}>
            <div className="mdp-image-wrapper">
              <img src={item.image} alt={item.title} />
              <span className="mdp-badge">Hot Project</span>
            </div>

            <div className="mdp-details">
              <h3>{item.title}</h3>
              <p className="mdp-dev">{item.developer}</p>

              <div className="mdp-info">
                <span>
                  <AppstoreOutlined /> {item.type}
                </span>
                <span>
                  <EnvironmentOutlined /> {item.location}
                </span>
              </div>

              <h4 className="mdp-price">{item.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostDemandProjects;
