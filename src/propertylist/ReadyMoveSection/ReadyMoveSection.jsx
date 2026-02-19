import React from "react";
import { Typography } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import "./ReadyMoveSection.css";

const { Title, Text } = Typography;

const projectData = [
  {
    id: 1,
    name: "Rustomjee PL",
    location: "Majiwada, Thane",
    price: "₹ 2.15 Cr",
    image: "https://tse1.mm.bing.net/th/id/OIP.iKMuaXE-lB75T5R1BkO6AwHaLH?cb=defcache2&pid=ImgDet&defcache=1&w=182&h=273&c=7&dpr=1.5&o=7&rm=3",
  },
  {
    id: 2,
    name: "Piramal PL",
    location: "Balkum, Thane",
    price: "₹ 93.73 L - 8.13 Cr",
    image: "https://www.re-thinkingthefuture.com/wp-content/uploads/2022/04/A6580-Top-15-Tall-Buildings-in-Delhi-Image-10-600x450.jpg",
  },
  {
    id: 3,
    name: "Dosti West PL",
    location: "Balkum, Thane",
    price: "₹ 1.45 - 2.95 Cr",
    image: "https://tse2.mm.bing.net/th/id/OIP.-VBmsSqIKJ8cSs3koThs6gHaLI?cb=defcache2&pid=ImgDet&defcache=1&w=178&h=267&c=7&dpr=1.5&o=7&rm=3",
  },
  {
    id: 4,
    name: "Lodha Amara PL",
    location: "Kolshet Road, Thane",
    price: "₹ 88 L - 2.66 Cr",
    image: "https://www.re-thinkingthefuture.com/wp-content/uploads/2022/04/A6580-Top-15-Tall-Buildings-in-Delhi-Image-5-600x754.jpg",
  },
  {
    id: 5,
    name: "Magnolias Neel PL",
    location: "Manpada, Thane",
    price: "₹ 1.53 - 2.2 Cr",
    image: "https://media.istockphoto.com/id/471170455/photo/hi-tec-city-building.webp?a=1&b=1&s=612x612&w=0&k=20&c=z0qB6HgA_zRS1n1oOL-Si6t0ND92B48jljIPYyIsDSY=",
  },
  {
    id: 6,
    name: "Skyline Heights PL",
    location: "Ghodbunder Road, Thane",
    price: "₹ 1.10 - 1.85 Cr",
    image:"https://cdn.siasat.com/wp-content/uploads/2022/08/Control-Command-Centre_8.jpg" ,
  },
  {
    id: 7,
    name: "Green Valley PL",
    location: "Kasarvadavali, Thane",
    price: "₹ 75 L - 1.40 Cr",
    image: "https://img.staticmb.com/mbimages/project/Photo_h300_w450/2020/08/12/Project-Photo-1-Unitech-Signature-Towers-2-Gurgaon-5144729_610_970_300_450.jpg",
  },
  {
    id: 8,
    name: "Urban Nest PL",
    location: "Hiranandani Estate, Thane",
    price: "₹ 1.90 - 3.2 Cr",
    image: "https://media.glassdoor.com/l/ac/84/5c/7b/sez-hyderbad.jpg",
  },
  {
    id: 9,
    name: "Blue Ridge PL",
    location: "Waghbil, Thane",
    price: "₹ 82 L - 1.6 Cr",
    image: "https://tse2.mm.bing.net/th/id/OIP.DoSLaca5PCb6thCqV_pf0wHaHa?cb=defcache2&pid=ImgDet&defcache=1&w=178&h=178&c=7&dpr=1.5&o=7&rm=3",
  },
  {
    id: 10,
    name: "Palm Residency PL",
    location: "Vartak Nagar, Thane",
    price: "₹ 68 L - 1.25 Cr",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/11/VT/ZF/VU/62700745/acp-work-service-500x500.jpg",
  },
];

const ReadyMoveSection = () => {
  return (
    <div className="ready-wrapper">

      {/* Header */}
      <div className="ready-header">
        <div>
          <Title level={2} className="ready-title">
            Ready to move projects
          </Title>
          <Text className="ready-sub">
            Where you can start living
          </Text>
        </div>
      </div>

      {/* Scroll Cards */}
      <div className="ready-scroll">
        {projectData.map((item) => (
          <div key={item.id} className="project-card">

            <div className="circle-image">
              <img src={item.image} alt={item.name} />
              <div className="rera-badge">
                <CheckOutlined /> RERA
              </div>
            </div>

            <div className="project-info">
              <div className="project-name">{item.name}</div>
              <div className="project-location">{item.location}</div>
              <div className="project-price">{item.price}</div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default ReadyMoveSection;
