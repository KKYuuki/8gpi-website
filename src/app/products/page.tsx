'use client';

import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { products } from '../../data/products';

export default function ProductsPage() {
  if (!products) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="pt-16">
          <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center py-12">
                <p className="text-gray-600">Failed to load products. Please try again later.</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div 
        className="w-full max-w-[1097px] h-px bg-black opacity-20 mx-auto"
        style={{
          marginTop: '151px',
          marginBottom: '40px'
        }}
      />
      <main className="flex-grow">
        {/* Video Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-gray-900 sm:text-4xl">
                Products
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Quality systems, engineered for durability and maximum energy savings.
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Left Side - Write Up */}
              <div className="lg:w-1/2 text-center">
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  Our Solar Solutions
                </h3>
                <p className="text-2xl text-gray-600">
                  Your Solar Journey Starts Here.
                </p>
              </div>
              
              {/* Right Side - Video */}
              <div className="w-full lg:w-2/3 mx-auto">
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-full object-cover"
                    poster="/images/product/video-placeholder.jpg"
                  >
                    <source src="/images/ProductVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {products && products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {products.map((product) => (
                  <div key={product.id} className="group flex flex-col bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 transform hover:-translate-y-1">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={product.image}
                        alt={`${product.name} - Solar Panel Installation Cebu | Cost of Solar Power Bacolod | Solar Maintenance Services Cebu City - facebook.com/8GenPower`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.name}</h3>
                      <p className="text-gray-600 flex-grow">{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No products available at the moment. Please check back later.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
