'use client';

import { ReactNode, useRef } from 'react';
import Image from 'next/image';

interface CarouselItem {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
  category?: string;
}

interface EnhancedCarouselProps {
  items: CarouselItem[];
  title: string;
  description: string;
  id: string;
}

export default function EnhancedCarousel({ items, title, description, id }: EnhancedCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: scrollOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="relative group">
          {/* Left Arrow */}
          <button 
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
            onClick={() => scroll(-300)}
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div 
            ref={carouselRef}
            id={id}
            className="flex overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth justify-center"
          >
            {items.map((item, index) => (
              <div key={index} className="flex-shrink-0 w-10/12 sm:w-7/12 md:w-5/12 lg:w-[30%] xl:w-[22%] px-2 snap-center flex justify-center">
                <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col">
                  {item.image ? (
                    <div className="relative h-48 bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={index < 4}
                      />
                      {item.category && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <span className="inline-block bg-white text-sm font-medium px-3 py-1 rounded-full text-gray-800">
                            {item.category}
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="p-6">
                      <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <button className="mt-auto text-green-600 hover:text-green-700 font-medium text-sm flex items-center justify-center">
                      {item.image ? 'View Project' : 'Learn More'}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right Arrow */}
          <button 
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
            onClick={() => scroll(300)}
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Scroll indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {items.map((_, index) => (
              <div key={index} className="w-2 h-2 rounded-full bg-gray-300"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
