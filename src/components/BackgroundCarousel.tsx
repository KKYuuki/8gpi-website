"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

const BackgroundCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    '/images/carousel(Background)/1stBG.png',
    '/images/carousel(Background)/2ndBG.png',
    '/images/carousel(Background)/3rdBG.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="fixed inset-0 w-full h-screen -z-10">
      {images.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`Background ${index + 1}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-25"></div>
        </div>
      ))}
    </div>
  );
};

export default BackgroundCarousel;
