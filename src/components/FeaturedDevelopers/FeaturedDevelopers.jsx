import React, { useRef, useEffect, useState } from "react";
import "./FeaturedDevelopers.css";
import { ArrowRightOutlined, BuildOutlined } from "@ant-design/icons";

const developers = [
  {
    name: "Omkar Group",
    description:
      "With over 34 years of experience, Omkar Group has delivered 50+ Lacs sq.ft. of luxury and landmark developments.",
    logo: "https://static.vecteezy.com/system/resources/previews/026/531/921/non_2x/blue-and-red-abstract-corporate-logo-design-free-vector.jpg",
    projectImage:
      "https://www.reecosys.com/api/image-tool/index.php?src=https://www.reecosys.com/assets/uploads/project/banner/banner_web_1671512828_88.jpg&h=1079&w=1920&q=75",
    projectName: "Rivanta Vibgyor",
    location: "Sargasan, Gandhinagar",
  },
  {
    name: "Dev Vinayak Group",
    description:
      "Leading real estate developer known for premium residential and commercial projects.",
    logo: "https://static.vecteezy.com/system/resources/previews/015/567/048/original/building-logo-icon-design-free-vector.jpg",
    projectImage:
      "https://www.reecosys.com/api/image-tool/index.php?src=https://www.reecosys.com/assets/uploads/project/banner/banner_web_1674540638_47.jpg&h=1079&w=1920&q=75",
    projectName: "The Avante",
    location: "Sargasan, Gandhinagar",
  },
  {
    name: "Vision Group",
    description:
      "A progressive developer setting new benchmarks in architectural excellence.",
    logo: "https://static.vecteezy.com/system/resources/previews/043/210/670/non_2x/logo-of-a-company-featuring-a-building-as-the-central-element-building-construction-logo-design-free-vector.jpg",
    projectImage:
      "https://myrealestate.in/storage/2021/08/DLF-PRIME-TOWER-592x444.jpg",
    projectName: "Vision Ventus",
    location: "Randesan, Gandhinagar",
  },
  {
    name: "Dev Group",
    description:
      "Built on principles of quality, trust and long-term value creation.",
    logo: "https://static.vecteezy.com/system/resources/previews/000/603/705/original/architectural-construction-building-logo-design-concept-template-vector.jpg",
    projectImage:
      "https://tse2.mm.bing.net/th/id/OIP.6cFCPqujb3UnNgYauyKKVwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    projectName: "Dev Aalay",
    location: "Sargasan, Gandhinagar",
  },
  {
    name: "Skyline Builders",
    description:
      "Known for modern architecture and strong construction standards.",
    logo: "https://static.vecteezy.com/system/resources/previews/010/664/778/non_2x/construction-building-logo-icon-design-free-vector.jpg",
    projectImage:
      "https://www.roofandfloor.com/blogimg/155/Asv-Suntech-Park.jpg",
    projectName: "Skyline Heights",
    location: "Kudasan, Gandhinagar",
  },
  {
    name: "Urban Nest Group",
    description:
      "Focused on affordable luxury homes with premium lifestyle amenities.",
    logo: "https://static.vecteezy.com/system/resources/previews/010/664/645/non_2x/construction-building-logo-icon-design-free-vector.jpg",
    projectImage:
      "https://ownnerz.com/wp-content/uploads/classified-listing/2022/03/20220326_003128-1240x640.png",
    projectName: "Urban Nest Residency",
    location: "Raysan, Gandhinagar",
  },
];

const FeaturedDevelopers = () => {
  const containerRef = useRef(null);
  const [isHover, setIsHover] = useState(false);

  // Auto scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    let interval;

    const startScroll = () => {
      interval = setInterval(() => {
        if (!isHover) {
          scrollAmount += scrollStep;
          if (scrollAmount >= container.scrollWidth - container.clientWidth) {
            scrollAmount = 0; // loop
          }
          container.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }
      }, 20);
    };

    startScroll();
    return () => clearInterval(interval);
  }, [isHover]);

  return (
    <div className="featured-developers">
      <div className="fd-header">
        <h2 className="fd-title">
          <BuildOutlined className="fd-title-icon" />
          Top Developers
        </h2>
      </div>

      <div
        className="fd-scroll"
        ref={containerRef}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {developers.map((dev, index) => (
          <div className="fd-card" key={index}>
            <div className="fd-top">
              <img src={dev.logo} alt={dev.name} className="fd-logo" />
              <div>
                <h4>{dev.name}</h4>
                <p className="fd-role">Real Estate Developer</p>
              </div>
            </div>

            <p className="fd-description">{dev.description}</p>

            <div
              className="fd-project-image"
              style={{ backgroundImage: `url(${dev.projectImage})` }}
            >
              <div className="fd-overlay">
                <h3>{dev.projectName}</h3>
                <p>{dev.location}</p>
              </div>
            </div>

            <button className="fd-btn">
              View Projects <ArrowRightOutlined />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedDevelopers;
