import React from "react";
import "./Handpicked.css";

const FALLBACK_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
const FALLBACK_LOGO = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";

const handpickedProjects = [
  {
    id: 1,
    title: "Ashar Pulse",
    subtitle: "1,2,3 BHK Apartment, Majiwada",
    price: "Rs 69 Lacs - 2.75 Cr",
    imageUrl: "https://www.buildingmaterialreporter.com/uploads/blogs/thumb_front/bf17bcf56e7471062477546da2e2d3d1.jpg",
    logoUrl: "https://img.freepik.com/premium-vector/construction-company-logo-template-design_278222-8454.jpg",
  },
  {
    id: 2,
    title: "Forestville by Oberoi Realty",
    subtitle: "3 BHK Apartment, Kolshet",
    price: "Rs 1.94 Cr",
    imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/04/80/a6/5e/getlstd-property-photo.jpg",
    logoUrl: "https://img.freepik.com/premium-vector/build-new-house-logo-design-vector-remodeling-repair_506432-84.jpg?w=2000",
  },
  {
    id: 3,
    title: "Jardin Oberoi Garden City",
    subtitle: "3 BHK Apartment, Pokhran 2",
    price: "Rs 3.23 Cr",
    imageUrl: "https://hanskumar.com/wp-content/uploads/2022/11/Hotel-For-Sale-In-Jaipur-Resort-For-Sale-In-Jaipur-Rajasthan-10.png",
    logoUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/construction-logo-design-template-7ea25d0e6c20bc695b5091e83cde4f94_screen.jpg?ts=1694406677",
  },
  {
    id: 4,
    title: "Skyline Crown",
    subtitle: "2,3 BHK Apartment, Ghodbunder",
    price: "Rs 88 L - 1.9 Cr",
    imageUrl: "https://www.housefind.in/wp-content/uploads/2019/07/house-for-sale-irinjalakkuda-mapranam7-592x444.jpeg",
    logoUrl: "https://img.freepik.com/free-vector/flat-design-construction-company-logo_23-2150051906.jpg?w=2000",
  },
  {
    id: 5,
    title: "Urban Enclave",
    subtitle: "2 BHK Apartment, Balkum",
    price: "Rs 76 L - 1.24 Cr",
    imageUrl: "https://tse2.mm.bing.net/th/id/OIP.R2BCk4MZCEldqAzWX4ebWgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    logoUrl: "https://tse1.mm.bing.net/th/id/OIP.EQzQHKRrJHwJSF2sNBFuWgHaF7?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 6,
    title: "Regalia Thane",
    subtitle: "3 BHK Apartment, Manpada",
    price: "Rs 1.36 Cr - 2.1 Cr",
    imageUrl: "https://th.bing.com/th/id/R.ebcf30634d89a56a4cebbb505d583e91?rik=w5YMKeRX3nkPMg&riu=http%3a%2f%2fspfarmhouse.com%2fsp-farm-house-gallery%2f33.jpg&ehk=pqKWU4BAPkLVdxfutYrLUVc3gJPYqkMxAE8HMLLE8zk%3d&risl=&pid=ImgRaw&r=0",
    logoUrl: "https://tse2.mm.bing.net/th/id/OIP.qtK4cpfWveMeJS30qeRbugAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 7,
    title: "Maple Heights",
    subtitle: "2 BHK Apartment, Kolshet",
    price: "Rs 82 L - 1.35 Cr",
    imageUrl: "https://tse2.mm.bing.net/th/id/OIP.zc657d-PysCH6BOo5GkQgAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    logoUrl: "https://static.vecteezy.com/system/resources/previews/018/801/504/original/construction-logo-design-template-vector.jpg",
  },
  {
    id: 8,
    title: "Blue Ridge Estate",
    subtitle: "3 BHK Apartment, Waghbil",
    price: "Rs 1.42 Cr - 2.7 Cr",
    imageUrl: "https://tse2.mm.bing.net/th/id/OIP.pZnwNZ4b2TL-_1cjK7geUQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    logoUrl: "https://img.freepik.com/premium-vector/construction-business-template-logo-design_278222-8261.jpg?w=740",
  },
  {
    id: 9,
    title: "Palm Vista",
    subtitle: "2,3 BHK Apartment, Vartak Nagar",
    price: "Rs 92 L - 1.86 Cr",
    imageUrl: "https://m.weddingz.in/wedz-img/images/6f80233daa808bbe539d74fb17b0b389/the-arjun-bagh-shobhagpura-udaipur-1.jpg?imwidth=300",
    logoUrl: "https://static.vecteezy.com/system/resources/previews/054/201/181/large_2x/real-estate-real-estate-business-construction-logo-design-vector.jpg",
  },
  {
    id: 10,
    title: "The Grand Arc",
    subtitle: "3 BHK Apartment, Majiwada",
    price: "Rs 1.55 Cr - 2.95 Cr",
    imageUrl: "https://vmis.in/upload/Assets/Archive/1266/D8720.jpg",
    logoUrl: "https://tse4.mm.bing.net/th/id/OIP.Y_4LMn3toRwABejiKvaqpgHaHa?w=1380&h=1380&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

const getMediaUrl = (primary, secondary, fallback) => {
  const value = (primary || secondary || "").trim();
  return value.length > 0 ? value : fallback;
};

const Handpicked = () => {
  return (
    <section className="handpicked-wrap">
      <h2 className="handpicked-title">Handpicked Projects</h2>
      <p className="handpicked-subtitle">Featured Projects in Thane</p>

      <div className="handpicked-scroll">
        {handpickedProjects.map((item) => (
          <article className="handpicked-card" key={item.id}>
            <div className="handpicked-image-wrap">
              <img
                src={getMediaUrl(item.imageUrl, item.image, FALLBACK_IMAGE)}
                alt={item.title}
                onError={(event) => {
                  event.currentTarget.src = FALLBACK_IMAGE;
                }}
              />
            </div>

            <div className="handpicked-logo-wrap">
              <img
                src={getMediaUrl(item.logoUrl, item.logo, FALLBACK_LOGO)}
                alt={`${item.title} logo`}
                onError={(event) => {
                  event.currentTarget.src = FALLBACK_LOGO;
                }}
              />
            </div>

            <div className="handpicked-details">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              <h4>{item.price}</h4>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Handpicked;
