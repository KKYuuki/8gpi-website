'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import { projects } from '@/data/projects';
import { vector } from '@/data/vector';
import Footer from '@/components/Footer';

interface VectorItem {
  id: number;
  description: string;
  image: string;
}

export default function Home() {
  // Carousel state for projects
  const [activeProject, setActiveProject] = useState(0);
  const projectsPerPage = 3;
  const totalProjects = projects.length;
  const totalSlides = Math.ceil(totalProjects / projectsPerPage);
  const visibleProjects = projects.slice(activeProject * projectsPerPage, (activeProject + 1) * projectsPerPage);

  // Project carousel navigation with animation
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  const nextProject = () => {
    if (activeProject < totalSlides - 1 && !isAnimating) {
      setSlideDirection('right');
      setActiveProject(prev => prev + 1);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500); // Match this with CSS transition duration
    }
  };

  const prevProject = () => {
    if (activeProject > 0 && !isAnimating) {
      setSlideDirection('left');
      setActiveProject(prev => prev - 1);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500); // Match this with CSS transition duration
    }
  };

  // Background images for the hero section
  const heroBackgrounds = useMemo(() => [
    '/images/carousel(Background)/1stBG.png',
    '/images/carousel(Background)/2ndBG.png',
    '/images/carousel(Background)/3rdBG.png'
  ], []);
  
  // Preload images
  useEffect(() => {
    heroBackgrounds.forEach((src: string) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [heroBackgrounds]);
  
  // Hero static content
  const heroContent = {
    title: 'Switch on the Sun',
    description: 'Premium Solar Panel Solutions for a Sustainable Future',
    buttonText: 'Contact us',
    buttonLink: '/contact'
  };
  
  // Background carousel state
  const [currentBg, setCurrentBg] = useState(0);
  
  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroBackgrounds.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroBackgrounds.length]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section with Background Carousel */}
      <div className="relative w-full h-screen">
        {/* Background Images */}
        <div className="absolute inset-0 w-full h-full">
          {heroBackgrounds.map((bg: string, index: number) => (
            <div 
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentBg ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={bg}
                alt={`8GPI Solar Solutions - Solar Panel Installation Cebu | Cost of Solar Power Bacolod | Solar Maintenance Services Cebu City - facebook.com/8GenPower Background ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
                quality={100}
              />
            </div>
          ))}
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Static Content - Centered */}
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8 pt-24 lg:pt-0">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">{heroContent.title}</h1>
            <p className="text-2xl md:text-3xl text-black mb-8 max-w-3xl mx-auto">{heroContent.description}</p>
            <a 
              href={heroContent.buttonLink}
              className="text-white font-medium py-4 px-10 rounded-lg transition-all duration-300 inline-block text-center text-lg hover:bg-green-700"
              style={{ backgroundColor: '#0F7346' }}
            >
              {heroContent.buttonText}
            </a>
          </div>
        </div>
      </div>

      {/* Write-up Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Trusted. Efficient. Sustainable. Our solar technology is built for long-lasting performance.
              </h2>
              <p className="text-lg text-gray-600">
              Proven expertise | Client-approved | Reliable partner
              </p>
            </div>
            <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-xl order-1 lg:order-2">
              <Image
                src="/images/WriteUp.jpg"
                alt="Professional Solar Panel Installation Cebu - Cost of Solar Power Bacolod | Solar Maintenance Services Cebu City - facebook.com/8GenPower"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl text-gray-600">
              Explore Our Solar Solutions
            </h3>
            <p className="text-lg md:text-2xl text-gray-600">
              Tailored systems for homes, businesses, and industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vector && vector.length > 0 ? (
              vector.map((item: VectorItem) => (
                <div key={item.id} className="group flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="relative h-32 w-32 mb-4">
                    <Image 
                      src={item.image} 
                      alt={`${item.description} - Solar Panel Installation Cebu | Cost of Solar Power Bacolod | Solar Maintenance Services Cebu City - facebook.com/8GenPower`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">{item.description}</h4>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-600">No features available at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </section>
                    

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl text-gray-600">
              See Our Work in Action
            </h2>
            <p className='text-lg md:text-2xl text-gray-600'>
              Designed. Installed. Delivered with impact
            </p>
          </div>

          <div className="relative">
            {/* Navigation Arrows */}
            <button 
              onClick={prevProject}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous projects"
            >
              <FiChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <div className="relative overflow-hidden">
              <div 
                className={`flex transition-transform duration-500 ease-in-out ${
                  isAnimating ? (slideDirection === 'right' ? 'translate-x-[-100%]' : 'translate-x-[100%]') : ''
                }`}
              >
                {visibleProjects.map((project) => (
                  <div key={project.id} className="w-full md:w-1/3 flex-shrink-0 px-3">
                    <div className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                      <div className="relative h-64 w-full">
                        <Image
                          src={project.image}
                          alt={`${project.title} - Solar Panel Installation Cebu | Cost of Solar Power Bacolod | Solar Maintenance Services Cebu City - facebook.com/8GenPower`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-grow">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h4>
                        <p className="text-gray-600 text-sm flex-grow mb-4">{project.description}</p>
                        <div className="mt-auto">
                          <span className="text-sm text-gray-500">{project.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={nextProject}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next projects"
            >
              <FiChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Earn Back Your Investment in Just 2 Years
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With 8GPI&apos;s efficient solar PV systems, customers typically recover their investment within 2 years — thanks to drastically reduced electricity bills and long-term energy savings.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-full object-cover"
                  poster="/images/video-placeholder.jpg"
                >
                  <source src="/images/WriteUp(Video).mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}