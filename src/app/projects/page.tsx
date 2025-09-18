'use client';

import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import { projects } from '@/data/projects';

export default function ProjectsPage() {
  const filteredProjects = projects;

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
                    <source src="/images/ProjectVideo. cost of solar power Bacolod, solar panel installation Cebu, solar maintenance services Cebu City.mp4" type="video/mp4" />
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
            {/* Project Grid Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
              <p className="text-lg text-gray-600">Explore our recent solar installations across the region</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="group flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} - Solar Panel Installation Cebu | Cost of Solar Power Bacolod | Solar Maintenance Services Cebu City - facebook.com/8GenPower`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center text-sm text-gray-500 rounded">
                        <p> 📍{project.location}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-gray-600">{project.description}</p>
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
