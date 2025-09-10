'use client';

import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About 8Gen Power Inc.</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-green-300 mb-6">Solar PV Solutions</h2>
        </div>
      </section>

      {/* Section 2: Write Up with Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Clean Energy Alternatives and Alternative Power, Inc. (CEAAPI) is a leading provider of renewable energy solutions in the Philippines. Established in 2019, we are committed to delivering innovative and sustainable energy alternatives that power businesses and communities across the nation.
                </p>
                <p>
                  Our team of experienced professionals is dedicated to providing high-quality solar energy systems and exceptional customer service. We take pride in our work and the positive impact it has on our clients and the environment.
                </p>
                <p>
                  At CEAAPI, we believe in the power of clean energy to transform lives and create a sustainable future for generations to come.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/aboutuspage/WriteUpAboutUs.jpg"
                  alt="Solar Installation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission & Vision</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h3>
              <p className="text-gray-600">
                To provide innovative and sustainable solar energy solutions that power communities and businesses while reducing environmental impact through cutting-edge technology and exceptional service.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading provider of renewable energy solutions in the Philippines, driving the transition to a cleaner and more sustainable future for all through innovation, quality, and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: CEAAPI Logo with Green Background */}
      <section className="py-12" style={{ backgroundColor: '#0E3F29' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Pioneer Member of the Clean Energy Advocates Association of the Philippines</h3>
          <div className="flex justify-center">
            <div className="w-40 h-40 relative">
              <Image
                src="/images/aboutuspage/CEAAPILogo.png"
                alt="CEAAPI Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
