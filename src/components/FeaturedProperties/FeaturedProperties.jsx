import React, { useRef, useState, useEffect } from 'react';
import { Button, Rate } from 'antd';
import {
  HeartOutlined,
  HeartFilled,
  EnvironmentOutlined,
  EyeOutlined,
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';
import './FeaturedProperties.css';

const properties = [
  {
    id: 1,
    title: '3 BHK Luxury Apartment',
    location: 'Bandra West, Mumbai',
    price: '₹2.8 Cr',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600',
    beds: 3,
    baths: 3,
    area: '1850 sq.ft',
    rating: 4.8,
    featured: true,
  },
  {
    id: 2,
    title: 'Modern 2 BHK Flat',
    location: 'Whitefield, Bangalore',
    price: '₹1.2 Cr',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600',
    beds: 2,
    baths: 2,
    area: '1250 sq.ft',
    rating: 4.6,
    featured: false,
  },
  {
    id: 3,
    title: '4 BHK Penthouse',
    location: 'Koramangala, Bangalore',
    price: '₹4.5 Cr',
    image: 'https://tse1.mm.bing.net/th/id/OIP.jqk4B_Mlq9qmMSBNM7FFJgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
    beds: 4,
    baths: 4,
    area: '2500 sq.ft',
    rating: 4.9,
    featured: true,
  },
  {
    id: 4,
    title: '2 BHK Cozy Apartment',
    location: 'Andheri East, Mumbai',
    price: '₹1.1 Cr',
    image: 'https://tse1.mm.bing.net/th/id/OIP.3as8iMYG4TST_oonpE7zRQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    beds: 2,
    baths: 2,
    area: '1100 sq.ft',
    rating: 4.5,
    featured: false,
  },
   {
    id: 5,
    title: '3 BHK Villa',
    location: 'Whitefield, Bangalore',
    price: '₹3.2 Cr',
    image: 'https://tse1.mm.bing.net/th/id/OIP.3as8iMYG4TST_oonpE7zRQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    beds: 3,
    baths: 3,
    area: '2000 sq.ft',
    rating: 4.7,
    featured: true,
  },
  {
    id: 6,
    title: 'Studio Apartment',
    location: 'Powai, Mumbai',
    price: '₹80 Lakh',
    image: 'https://tse1.mm.bing.net/th/id/OIP.3as8iMYG4TST_oonpE7zRQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    beds: 1,
    baths: 1,
    area: '650 sq.ft',
    rating: 4.2,
    featured: false,
  },
  {
    id: 7,
    title: '5 BHK Luxury House',
    location: 'Juhu, Mumbai',
    price: '₹8 Cr',
    image: 'https://tse1.mm.bing.net/th/id/OIP.3as8iMYG4TST_oonpE7zRQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    beds: 5,
    baths: 5,
    area: '3500 sq.ft',
    rating: 5,
    featured: true,
  },
  {
    id: 8,
    title: '3 BHK Apartment',
    location: 'MG Road, Bangalore',
    price: '₹2.5 Cr',
    image: 'https://tse1.mm.bing.net/th/id/OIP.3as8iMYG4TST_oonpE7zRQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    beds: 3,
    baths: 3,
    area: '1800 sq.ft',
    rating: 4.6,
    featured: false,
  },
  {
    id: 9,
    title: '2 BHK Luxury Flat',
    location: 'Vikhroli, Mumbai',
    price: '₹1.5 Cr',
    image: 'https://tse1.mm.bing.net/th/id/OIP.3as8iMYG4TST_oonpE7zRQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    beds: 2,
    baths: 2,
    area: '1300 sq.ft',
    rating: 4.4,
    featured: false,
  },
  {
    id: 10,
    title: '4 BHK Premium Apartment',
    location: 'Indiranagar, Bangalore',
    price: '₹3.8 Cr',
    image: 'https://images.unsplash.com/photo-1599423300746-b62533397364?w=600',
    beds: 4,
    baths: 4,
    area: '2400 sq.ft',
    rating: 4.9,
    featured: true,
  },
];

const FeaturedProperties = () => {
  const scrollRef = useRef(null);
  const [liked, setLiked] = useState({});
  const [expanded, setExpanded] = useState({});
  const cardWidth = 260;

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="featured-properties-horizontal">
      <div className="featured-header">
        <h2>Featured Properties</h2>
        <div className="scroll-buttons">
          <button onClick={() => scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' })}>
            <LeftOutlined />
          </button>
          <button onClick={() => scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' })}>
            <RightOutlined />
          </button>
        </div>
      </div>

      <div className="featured-scroll-container" ref={scrollRef}>
        {properties.map((p) => {
          const desc = `This ${p.beds} BHK premium property offers ${p.baths} modern bathrooms with a spacious layout of ${p.area}. Located in ${p.location}, it is ideal for luxury and comfortable living.`;

          return (
            <div key={p.id} className="featured-card">
              {/* IMAGE */}
              <div className="card-image">
                <img src={p.image} alt={p.title} />
                <button
                  className="like-btn"
                  onClick={() => setLiked({ ...liked, [p.id]: !liked[p.id] })}
                >
                  {liked[p.id] ? <HeartFilled /> : <HeartOutlined />}
                </button>
              </div>

              {/* DETAILS */}
              <div className="card-details">
                <h3>{p.title}</h3>

                <div className="location">
                  <EnvironmentOutlined /> {p.location}
                </div>

                <Rate disabled allowHalf defaultValue={p.rating} />

                <p className={`description ${expanded[p.id] ? 'expanded' : ''}`}>
                  {desc}
                </p>

                <span
                  className="see-more"
                  onClick={() =>
                    setExpanded({ ...expanded, [p.id]: !expanded[p.id] })
                  }
                >
                  {expanded[p.id] ? 'See less' : 'See more'}
                </span>

                <div className="card-footer">
                  <div>
                    <strong>{p.price}</strong>
                    <div className="unit">₹25,000 / sq.ft</div>
                  </div>

                  <Button size="small" icon={<EyeOutlined />}>
                    View
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProperties;
