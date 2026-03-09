import React from "react";
import { EnvironmentOutlined, HomeOutlined, CheckOutlined } from "@ant-design/icons";
import "./ReadyMoveSection.css";

const projects = [
  {
    id: 1,
    name: "Piramal Vaikunth",
    location: "Balkum, Thane",
    price: "Rs 93.73 L - 8.13 Cr",
    image: "https://res.klook.com/klook-hotel/image/upload/travelapi/34000000/33110000/33102000/33101987/7a69ad51_z.jpg",
  },
  {
    id: 2,
    name: "Sheth Vasant Lawns",
    location: "Majiwada, Thane",
    price: "Rs 1.91 - 3.45 Cr",
    image: "https://tse4.mm.bing.net/th/id/OIP.GHJbVLoab4fp2tDG5G8nnwHaEL?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 3,
    name: "Sheth Avalon",
    location: "Laxmi Nagar, Thane",
    price: "Rs 3.97 - 8.71 Cr",
    image: "https://edufever.in/colleges/wp-content/uploads/2022/05/Untitled-design-54-min-jpg-webp.webp",
  },
  {
    id: 4,
    name: "Rustomjee Azziano",
    location: "Majiwada, Thane",
    price: "Rs 1.33 - 2.15 Cr",
    image: "https://i.ytimg.com/vi/BNh5QpmzJc8/hqdefault.jpg",
  },
  {
    id: 5,
    name: "Lodha Bellavista",
    location: "Pokhran Road, Thane",
    price: "Rs 1.29 - 2.42 Cr",
    image: "https://i.ytimg.com/vi/ZDUO4kBm6DM/maxresdefault.jpg",
  },
  {
    id: 6,
    name: "Kalpataru Paramount",
    location: "Kapurbawdi, Thane",
    price: "Rs 1.12 - 2.86 Cr",
    image: "https://image.wedmegood.com/resized/800X/uploads/member/886834/1575107142_04.jpg",
  },
  {
    id: 7,
    name: "Runwal Bliss",
    location: "Kolshet, Thane",
    price: "Rs 95 L - 1.98 Cr",
    image: "https://assets.architecturaldigest.in/photos/63ea0496db50bfa9fb028adb/master/w_1600%2Cc_limit/The%2520Raw%2520Project%2520Gujarat%2520home-featured.jpg",
  },
  {
    id: 8,
    name: "Dosti West County",
    location: "Balkum, Thane",
    price: "Rs 88 L - 1.73 Cr",
    image: "https://housivity.com/wp-content/uploads/2024/10/51-Rashmika-Mandannas-Home-1-scaled.jpg",
  },
  {
    id: 9,
    name: "Hiranandani Estate",
    location: "Ghodbunder, Thane",
    price: "Rs 1.45 - 3.22 Cr",
    image: "https://indiasomeday.com/wp-content/uploads/2018/08/jaipur-friendly-villa.jpg",
  },
  {
    id: 10,
    name: "Puranik City Reserva",
    location: "Kasarvadavali, Thane",
    price: "Rs 74 L - 1.41 Cr",
    image: "https://ak-d.tripcdn.com/images/0226a120008uhci6nEA26_R_480_270_R5_D.jpg",
  },
];

const ReadyMoveSection = () => {
  return (
    <section className="ready-wrapper">
      <div className="ready-header">
        <span className="ready-icon-wrap">
          <HomeOutlined />
        </span>
        <div>
          <h2 className="ready-title">In & Around Thane</h2>
          <p className="ready-sub">Projects inspired by your search preferences</p>
        </div>
      </div>

      <div className="ready-grid">
        {projects.map((item) => (
          <article key={item.id} className="ready-card">
            <div className="ready-circle-image">
              <img src={item.image} alt={item.name} />
              <span className="ready-rera-badge">
                <CheckOutlined /> RERA
              </span>
            </div>

            <div className="ready-card-name">{item.name}</div>
            <div className="ready-card-location">
              <EnvironmentOutlined /> {item.location}
            </div>
            <div className="ready-card-price">{item.price}</div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ReadyMoveSection;
