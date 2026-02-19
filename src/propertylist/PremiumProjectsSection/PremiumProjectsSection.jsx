import React from "react";
import "./PremiumProjectsSection.css";

const projects = [
  {
    title: "Skyline Heights",
    location: "Ahmedabad",
    price: "₹ 1.94 Cr",
    image: "https://tse1.mm.bing.net/th/id/OIP.vuJi4BPZxFy0Ww8p1YB67AHaFj?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    logo: "https://cdn.dribbble.com/users/14381295/screenshots/20222501/bengali_constrution_company_copy_4x.jpg",
  },
  {
    title: "Urban Residency",
    location: "Surat",
    price: "₹ 62 L - 79 L",
    image: "https://www.joonsquare.com/usermanage/image/business/green-fort-construction-karaikal-46178/green-fort-construction-karaikal-green-01.jpg",
    logo: "https://s3images.coroflot.com/user_files/individual_files/original_600852_np4_a0vsh3d_pjtkeiah_fslz.png",
  },
  {
    title: "Royal Garden",
    location: "Vadodara",
    price: "₹ 3.23 Cr",
    image: "https://tse3.mm.bing.net/th/id/OIP.0JQrpgLZcmlnYlcbhVwtWAHaFj?cb=defcache2&defcache=1&w=911&h=683&rs=1&pid=ImgDetMain&o=7&rm=3",
    logo: "https://tse1.mm.bing.net/th/id/OIP.I419DEAaGL8pVcfmfe-ccgHaHa?cb=defcache2&defcache=1&w=500&h=500&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    title: "Green Valley",
    location: "Rajkot",
    price: "₹ 85 L",
    image: "https://www.holidify.com/images/cmsuploads/compressed/318304927_20231017165126.jpg",
    logo: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/185991272/original/a642660ca6b8d4c968d04ae52242c9a98083878a/l-draw-your-architectural-drawings.jpg",
  },
  {
    title: "Elite Towers",
    location: "Gandhinagar",
    price: "₹ 2.10 Cr",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/f9/4c/b9/gadh-ganesh-paying-guest.jpg?w=500&h=-1&s=1",
    logo: "https://tse2.mm.bing.net/th/id/OIP.Xd40JnwL_DVPeJ5b8HTAIwHaHa?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    title: "Palm Residency",
    location: "Anand",
    price: "₹ 1.40 Cr",
    image: "https://i.pinimg.com/736x/5c/ff/a0/5cffa040d7b8740e3e075a746aceaf8f.jpg",
    logo: "https://images.kreatecube.com/usefull/vendor/logo/33634.jpg",
  },
  {
    title: "Sunshine Enclave",
    location: "Bhavnagar",
    price: "₹ 75 L",
    image: "https://tse2.mm.bing.net/th/id/OIP.zX_MhWbJwI0i0ALAT2W1zQHaFS?cb=defcache2&defcache=1&w=700&h=500&rs=1&pid=ImgDetMain&o=7&rm=3",
    logo: "https://tse4.mm.bing.net/th/id/OIP.An9AqKkU3FGzSAVcBXBjFAHaHa?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

const PremiumProjectsSection = () => {
  return (
    <div className="premium-wrapper">
      <h2 className="section-heading">Premium Projects</h2>

      <div className="premium-scroll">
        {projects.map((item, index) => (
          <div className="premium-card" key={index}>
            
            {/* Top Oval Image */}
            <div className="top-oval">
              <img src={item.image} alt={item.title} />
            </div>

            {/* Center Logo - Now touching image */}
            <div className="logo-wrapper">
              <div className="logo-inner">
                <img src={item.logo} alt="logo" />
              </div>
            </div>

            {/* Bottom Details - Now touching logo */}
            <div className="bottom-details">
              <h3>{item.title}</h3>
              <p>{item.location}</p>
              <h4>{item.price}</h4>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumProjectsSection;