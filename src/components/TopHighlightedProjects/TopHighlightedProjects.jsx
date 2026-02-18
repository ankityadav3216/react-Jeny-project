import React, { useRef, useState, useEffect } from "react";
import "./TopHighlightedProjects.css";

const projects = [
  {
    id: 1,
    title: "Luxury Sky Villas",
    location: "Gurgaon, Sector 54",
    type: "3 & 4 BHK Apartments",
    price: "₹ 2.4 Cr onwards",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.WWi6nvMA2Mr1L6xAzxgezwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 2,
    title: "Green Valley Residency",
    location: "Noida Extension",
    type: "2 & 3 BHK Homes",
    price: "₹ 78 Lacs onwards",
    image:
      "https://www.re-thinkingthefuture.com/wp-content/uploads/2020/02/A618-The-marvellous-Bohra-Homes-of-the-understated-city-of-Sidhpur-in-Gujarat.jpg",
  },
  {
    id: 3,
    title: "Elite Business Park",
    location: "Bangalore, Whitefield",
    type: "Commercial Spaces",
    price: "₹ 1.1 Cr onwards",
    image:
      "https://www.adotrip.com/public/images/areas/615d6adae8850-Siidhpur.jpg",
  },
  {
    id: 4,
    title: "Palm Heights",
    location: "Mumbai, Andheri",
    type: "Luxury Apartments",
    price: "₹ 3.2 Cr onwards",
    image:
      "https://i.pinimg.com/736x/61/4f/6f/614f6f05afd8b5ad9b673d0f883f6018.jpg",
  },
  {
    id: 5,
    title: "Sunshine Residency",
    location: "Hyderabad, Gachibowli",
    type: "Premium Villas",
    price: "₹ 1.8 Cr onwards",
    image:
      "https://i.pinimg.com/736x/be/dd/05/bedd054f18b549be7377aec2cf9b55a0.jpg",
  },
  {
    id: 6,
    title: "Urban Heights",
    location: "Pune, Hinjewadi",
    type: "Modern Apartments",
    price: "₹ 95 Lacs onwards",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.lYqVYM0FflUnQ4AK-ARXxQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

const TopHighlightedProjects = () => {
  const scrollRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Duplicate projects for smooth infinite scroll
  const allProjects = [...projects, ...projects, ...projects];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollPos = 0;
    const intervalSpeed = 20; // ms per scroll step
    let interval;

    const startScroll = () => {
      interval = setInterval(() => {
        if (!isHovering && container) {
          scrollPos += 1; // scroll 1px per step
          if (scrollPos >= container.scrollWidth / 3) {
            scrollPos = 0; // reset for infinite loop
          }
          container.scrollTo({ left: scrollPos, behavior: "smooth" });
        }
      }, intervalSpeed);
    };

    startScroll();

    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section className="top-projects">
      <div className="section-header">
        <h2>Top Highlighted Projects</h2>
        <div className="underline" />
      </div>

      <div
        className="projects-scroll"
        ref={scrollRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {allProjects.map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className="project-card"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="price-tag">{project.price}</div>
            <div className="overlay">
              <h3>{project.title}</h3>
              <p className="location">{project.location}</p>
              <p className="type">{project.type}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopHighlightedProjects;
