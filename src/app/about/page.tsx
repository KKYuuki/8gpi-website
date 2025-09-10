'use client';

import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About 8Gen Power Inc.</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-green-300 mb-6">Solar PV Solutions</h2>
        </div>
      </section>

      {/* Section 2: Write Up with Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image on the left */}
            <div className="order-1">
              <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/aboutuspage/WriteUpAboutUs.jpg"
                  alt="8Gen Power Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Write-up on the right */}
            <div className="order-2">
              <p className="text-base font-medium text-gray-500 mb-2">Building a Brighter, Greener Future</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">8Gen Power Inc.</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  8Gen Power Inc. is a full-service solar energy company offering high-quality Solar PV panel supply, professional installation, and ongoing system maintenance. We serve residential, commercial, and industrial clients across Visayas and Mindanao. We are committed to delivering reliable, sustainable, and long term energy solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-0.5 bg-black w-full"></div>
        </div>
      </div>

      {/* Section 3: Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-36 text-center">
            {/* Mission */}
            <div className="p-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                Empowering Filipinos to cut energy costs with clean and innovative solar solutions.
              </p>
            </div>
            
            {/* Vision */}
            <div className="p-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                A future where every community harnesses solar power efficiently and responsibly.
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

      {/* Feature Cards Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300" style={{ width: '247px', height: '247px' }}>
              <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 relative">
                    <Image
                      src="/images/aboutuspage/handshake.png"
                      alt="Client Focused Approach"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Client Focused Approach</h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300" style={{ width: '247px', height: '247px' }}>
              <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 relative">
                    <Image
                      src="/images/aboutuspage/energy_savings_leaf.png"
                      alt="Sustainable Energy Solutions"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Sustainable Energy Solutions</h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300" style={{ width: '247px', height: '247px' }}>
              <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 relative">
                    <Image
                      src="/images/aboutuspage/handyman.png"
                      alt="Professional Installation & Support"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Professional Installation & Support</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">8Gen Power Inc.</h2>
          <p className="text-xl text-gray-600 mb-8">
            Electricity Cost Burn! Switch on the Sun.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white hover:bg-opacity-90 transition-colors duration-300"
            style={{ backgroundColor: '#0F7346' }}
          >
            Contact Us
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
