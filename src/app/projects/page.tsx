'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type Project = {
  id: number;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Residential Solar Installation',
      category: 'residential',
      location: 'Cebu City',
      image: '/images/projects/residential-1.jpg',
      description: 'Complete solar power system installation for a 4-bedroom home, including 20 solar panels and battery storage.'
    },
    {
      id: 2,
      title: 'Commercial Rooftop Solar',
      category: 'commercial',
      location: 'Mandaue City',
      image: '/images/projects/commercial-1.jpg',
      description: 'Large-scale rooftop solar installation for a shopping mall, reducing their energy costs by 60%.'
    },
    {
      id: 3,
      title: 'Industrial Solar Farm',
      category: 'industrial',
      location: 'Lapu-Lapu City',
      image: '/images/projects/industrial-1.jpg',
      description: '5MW solar farm powering a manufacturing facility with clean, renewable energy.'
    },
    {
      id: 4,
      title: 'Solar Street Lights',
      category: 'municipal',
      location: 'Talisay City',
      image: '/images/projects/street-lights.jpg',
      description: 'Installation of 200 solar-powered street lights across the city to improve safety and reduce energy costs.'
    },
    {
      id: 5,
      title: 'Residential Solar + Battery',
      category: 'residential',
      location: 'Cordova',
      image: '/images/projects/residential-2.jpg',
      description: 'Complete off-grid solar solution with battery backup for a beachfront property.'
    },
    {
      id: 6,
      title: 'School Solar Project',
      category: 'education',
      location: 'Consolacion',
      image: '/images/projects/school.jpg',
      description: 'Solar panel installation for a local school, providing reliable power and educational opportunities.'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const categories = ['all', 'residential', 'commercial', 'industrial', 'municipal', 'education'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Our Projects
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful solar energy installations across various sectors
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === category
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white text-sm font-medium bg-green-600 px-3 py-1 rounded-full">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
