import React from 'react';
import './LogoCarousel.css';

const LogoCarousel = () => {
  const imageUrls = [
    './img/METAMASK.png',
    './img/NEXTJS.png',
    './img/MONGODB.png',
    './img/SCSS.png',
    './img/TS.png',
    './img/HTML.png',
    './img/REACTJS.png',
    './img/ETHERUM.png',
    './img/JS.png',
    './img/NOSQL.png',
  ];

  return (
    <div className="logo-carousel">
      <div className="carousel-track">
        {imageUrls.concat(imageUrls).map((url, index) => (
          <img key={index} src={url} alt={`Logo ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
