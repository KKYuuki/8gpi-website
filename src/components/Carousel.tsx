'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CarouselProps {
  items: Array<{
    image: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
  }>;
  title: string;
  description?: string;
}

export default function Carousel({ items, title, description }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance slides every 5 seconds when not hovered
  useEffect(() => {
    if (!isHovered) {
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isHovered, items.length]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-r-lg p-3 shadow-lg transition-all hover:scale-110 -ml-4"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Carousel Container */}
          <div className="relative overflow-x-auto pb-8 -mx-4 px-4">
            <div 
              className="flex space-x-6 transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                width: `${items.length * 33.333}%`
              }}
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-full sm:w-1/2 md:w-1/3 px-2 transition-all duration-300 ${
                    index === currentIndex ? 'scale-105' : 'opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
                    <div className="relative h-48 bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={index === 0}
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-3 text-green-600">
                        {item.icon || (
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                            <path d="M13 14h-2v-2h2v2zm0-4h-2V7h2v3z" />
                          </svg>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4 flex-1">{item.description}</p>
                      <button className="mt-auto text-green-600 hover:text-green-700 font-medium text-sm flex items-center">
                        Learn more
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-l-lg p-3 shadow-lg transition-all hover:scale-110 -mr-4"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-all ${
                  index === currentIndex ? 'bg-green-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
