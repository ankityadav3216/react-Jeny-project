import React, { useRef, useState, useEffect } from "react";
import "./MostDemandProjects.css";
import { EnvironmentOutlined, AppstoreOutlined, FireOutlined } from "@ant-design/icons";

const properties = [
  {
    title: "Kreeva",
    developer: "Amogha Group",
    type: "2, 3 BHK Flat",
    location: "Vavol, Gandhinagar",
    price: "Rs. 45.88 L - Rs. 67.83 L",
    image:
      "https://d33wubrfki0l68.cloudfront.net/8d802d82084b8b59aeb59232f47a066456a8a218/607ca/img/process/process-4.jpg",
  },
  {
    title: "AUXERIA",
    developer: "Atishay Shivalay Group",
    type: "3 BHK Flat",
    location: "Kudasan, Gandhinagar",
    price: "Rs. 1.16 Cr - Rs. 1.31 Cr",
    image:
      "https://i.pinimg.com/736x/7b/54/39/7b54396284821030f2705a215a685c97.jpg",
  },
  {
    title: "Green Heights",
    developer: "Shree Buildcon",
    type: "2 BHK Flat",
    location: "Randesan, Gandhinagar",
    price: "Rs. 60 L - Rs. 75 L",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.KZamzkXOYmzl3hD6glFc0wHaGu?w=768&h=698&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    title: "Skyline Towers",
    developer: "Urban Group",
    type: "3 BHK Flat",
    location: "Sargasan, Gandhinagar",
    price: "Rs. 90 L - Rs. 1.2 Cr",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.myi2yGYqdDVH7Oc25qggawHaEB?w=1068&h=580&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    title: "Royal Nest",
    developer: "Prime Infra",
    type: "4 BHK Flat",
    location: "Kudasan, Gandhinagar",
    price: "Rs. 1.5 Cr - Rs. 1.9 Cr",
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

    let scrollPos = container.scrollWidth / 3;
    container.scrollLeft = scrollPos;

    const interval = setInterval(() => {
      if (!isHovering && container) {
        scrollPos += 1;
        const limit = (container.scrollWidth / 3) * 2;
        if (scrollPos >= limit) {
          scrollPos = container.scrollWidth / 3;
        }
        container.scrollTo({ left: scrollPos });
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <div className="most-demand-projects">
      <div className="mdp-head-wrap">
        <span className="mdp-kicker">
          <FireOutlined /> Trending Collection
        </span>
        <h2 className="mdp-heading">Most In-Demand Projects in Gujarat</h2>
        <p className="mdp-subtitle">Top picks with strong location value and trusted builders</p>
      </div>

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
