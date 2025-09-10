'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Section 1: Hero with Background Image */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/images/aboutuspage/AboutUsBG.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative'
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About 8GPI</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Leading the charge in renewable energy solutions for a sustainable future
          </p>
        </div>
      </section>

      {/* Section 2: Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Story
            </h2>
            <div className="mt-2 h-1 w-20 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pioneering Solar Solutions Since 2015</h3>
              <p className="text-gray-600 mb-6">
                8GPI was founded with a vision to transform the energy landscape through innovative solar solutions. 
                What started as a small team of passionate engineers has grown into a leading provider of renewable 
                energy systems across the Philippines.
              </p>
              <p className="text-gray-600 mb-6">
                Our commitment to quality, sustainability, and customer satisfaction has helped us complete over 
                1,000 successful installations, powering homes, businesses, and communities with clean, renewable energy.
              </p>
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-100 rounded-full p-3">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">1,000+</p>
                  <p className="text-gray-600">Successful Installations</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/images/aboutuspage/our-story.jpg" 
                alt="Our Story" 
                width={600} 
                height={400} 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide innovative, reliable, and sustainable solar energy solutions that empower our customers 
                to reduce their carbon footprint while enjoying significant energy savings.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading force in the Philippines&apos; transition to renewable energy, creating a sustainable 
                future where clean power is accessible to all communities and businesses.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
