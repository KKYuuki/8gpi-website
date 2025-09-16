'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import { projects } from '@/data/projects';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'industrial', name: 'Industrial' }
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* Divider */}
      <div 
        className="w-full max-w-[1097px] h-px bg-black opacity-20 mx-auto"
        style={{
          marginTop: '151px',
          marginBottom: '40px'
        }}
      />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-gray-900 sm:text-4xl">
                Projects
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Real projects. Real energy savings.
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Left Side - Write Up */}
              <div className="lg:w-1/2 text-center">
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  Our Work in Action
                </h3>
                <p className="text-2xl text-gray-600">
                  Every Panel Tells a Story.
                </p>
              </div>
              
              {/* Right Side - Video */}
              <div className="lg:w-1/2 w-full">
                <div className="relative aspect-[3/2] rounded-lg overflow-hidden shadow-xl">
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    className="w-full h-full object-cover"
                    poster="/images/projects/1stprojcard.jpg"
                  >
                    <source src="/images/ProjectVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="relative h-64 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-gray-600 text-sm flex-grow">{project.description}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-gray-500">{project.location}</span>
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
