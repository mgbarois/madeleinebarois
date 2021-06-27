import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={require('assets/img/companies/acolad_gray10.png')} onDragStart={handleDragStart} alt="image1" />,
  <img src={require('assets/img/companies/acolad_gray10.png')} onDragStart={handleDragStart} alt="image1"/>,
  <img src={require('assets/img/companies/acolad_gray10.png')} onDragStart={handleDragStart} alt="image1"/>,
];

const Gallery = () => {
  return (
    <AliceCarousel mouseTracking items={items} />
  );
}

export default Gallery;