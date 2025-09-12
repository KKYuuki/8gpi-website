'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiSun, FiZap, FiShield, FiTrendingUp } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Background images for the hero section
  const heroBackgrounds = [
    '/images/carousel(Background)/1stBG.png',
    '/images/carousel(Background)/2ndBG.png',
    '/images/carousel(Background)/3rdBG.png'
  ];
  
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

  // Products data
  const products = [
    {
      id: 1,
      name: 'Monocrystalline Solar Panel',
      description: 'High-efficiency monocrystalline solar panels for maximum energy production',
      category: 'residential',
      image: '/images/product/1stcard.jpg'
    },
    {
      id: 2,
      name: 'Polycrystalline Solar Panel',
      description: 'Cost-effective polycrystalline panels with great performance',
      category: 'commercial',
      image: '/images/product/2ndcard.jpg'
    },
    {
      id: 3,
      name: 'Solar Inverter',
      description: 'Advanced solar inverters for optimal energy conversion',
      category: 'industrial',
      image: '/images/product/3rdcard.png'
    },
    {
      id: 4,
      name: 'Solar Battery',
      description: 'High-capacity solar batteries for energy storage',
      category: 'residential',
      image: '/images/product/4thcard.jpg'
    }
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'Residential Solar Installation',
      description: 'Complete solar solution for a family home in Cebu City',
      image: '/images/projects/1stprojcard.jpg',
      category: 'residential',
      location: 'Cebu City, Cebu'
    },
    {
      id: 2,
      title: 'Commercial Rooftop Solar',
      description: 'Large-scale solar installation for a shopping mall',
      image: '/images/projects/2ndprojcard.jpg',
      category: 'commercial',
      location: 'Mandaue City, Cebu'
    },
    {
      id: 3,
      title: 'Industrial Solar Farm',
      description: 'Megawatt-scale solar farm for industrial power needs',
      image: '/images/projects/3rdprojcard.jpg',
      category: 'industrial',
      location: 'Lapu-Lapu City, Cebu'
    },
    {
      id: 4,
      title: 'Municipal Building Solar',
      description: 'Government building solar panel installation',
      image: '/images/projects/4thprojcard.jpg',
      category: 'municipal',
      location: 'Talisay City, Cebu'
    }
  ];

  // Features data
  const features = [
    {
      icon: <FiSun className="w-8 h-8 text-green-600" />,
      title: 'Clean Energy',
      description: 'Harness renewable solar power to reduce your carbon footprint and energy bills.'
    },
    {
      icon: <FiZap className="w-8 h-8 text-green-600" />,
      title: 'High Efficiency',
      description: 'Our advanced solar panels deliver maximum energy output even in low-light conditions.'
    },
    {
      icon: <FiShield className="w-8 h-8 text-green-600" />,
      title: '25-Year Warranty',
      description: 'Industry-leading warranty for peace of mind on your investment.'
    },
    {
      icon: <FiTrendingUp className="w-8 h-8 text-green-600" />,
      title: 'Increased Property Value',
      description: 'Solar installations can increase your property value by up to 4.1% on average.'
    }
  ];

  // Carousel state for products and projects
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeProject, setActiveProject] = useState(0);

  // Carousel navigation for products
  const nextProduct = useCallback(() => {
    setActiveProduct((prev) => (prev + 1) % Math.ceil(products.length / 3));
  }, [products.length]);

  const prevProduct = useCallback(() => {
    setActiveProduct((prev) => (prev - 1 + Math.ceil(products.length / 3)) % Math.ceil(products.length / 3));
  }, [products.length]);

  // Carousel navigation for projects
  const nextProject = useCallback(() => {
    setActiveProject((prev) => (prev + 1) % Math.ceil(projects.length / 3));
  }, [projects.length]);

  const prevProject = useCallback(() => {
    setActiveProject((prev) => (prev - 1 + Math.ceil(projects.length / 3)) % Math.ceil(projects.length / 3));
  }, [projects.length]);

  // Removed auto-rotation for manual control only

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Cycling Background */}
      <section className="relative h-screen">
        {/* Background Images */}
        <div className="absolute inset-0">
          {heroBackgrounds.map((bg, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentBg ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <Image
                src={bg}
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>
          ))}
        </div>
        
        {/* Static Content - Centered */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">{heroContent.title}</h1>
          <p className="text-2xl md:text-3xl text-gray-100 mb-8 max-w-3xl">{heroContent.description}</p>
          <a 
            href={heroContent.buttonLink}
            className="text-white font-medium py-4 px-10 rounded-lg transition-colors inline-block text-center text-lg"
            style={{ backgroundColor: '#0F7346' }}
          >
            {heroContent.buttonText}
          </a>
        </div>
      </section>

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
                alt="Solar Panel Installation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-3xl text-gray-900 mb-4">
              Explore Our Solar Solutions
            </h3>
            <p className='text-lg text-gray-600'>
              Tailored systems for homes, businesses, and industries
            </p>
          </div>

          <div className="relative">
            {/* Navigation Arrows */}
            <button 
              onClick={prevProduct}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous products"
            >
              <FiChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeProduct * 100}%)` }}
              >
                {products.map((product) => (
                  <div key={product.id} className="w-1/4 flex-shrink-0 px-3">
                    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                      <div className="relative h-48 w-full">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={nextProduct}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next products"
            >
              <FiChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-3xl text-gray-900 mb-4">
              See Our Work in Action
            </h2>
            <p className='text-lg text-gray-600'>
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
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeProject * 100}%)` }}
              >
                {projects.map((project) => (
                  <div key={project.id} className="w-1/3 flex-shrink-0 px-3">
                    <div className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                      <div className="relative h-64 w-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-grow">
                        <p className="text-gray-600 text-sm flex-grow mb-4">{project.description}</p>
                        <div className="flex justify-between items-center mt-auto">
                          <span className="text-sm text-gray-500">{project.location}</span>
                          <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                          </span>
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

      {/* Investment Return Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-xl order-1">
              <video 
                className="w-full h-full object-cover" 
                autoPlay 
                loop 
                muted
                playsInline
              >
                <source src="/images/WriteUp(Video).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="space-y-6 order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Earn Back Your Investment in Just 2 Years
              </h2>
              <p className="text-lg text-gray-600">
                With 8GPI&apos;s efficient solar PV systems, customers typically recover their investment within 2 years — thanks to drastically reduced electricity bills and long-term energy savings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}