'use client';

import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

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
    name: 'Thin-Film Solar Panel',
    description: 'Lightweight and flexible solar solution for various applications',
    category: 'industrial',
    image: '/images/product/3rdcard.png'
  },
  {
    id: 4,
    name: 'Solar Inverter',
    description: 'High-performance inverter for converting DC to AC power',
    category: 'utility',
    image: '/images/product/4thcard.jpg'
  },
  {
    id: 5,
    name: 'Solar Battery Storage',
    description: 'Efficient energy storage solutions for solar systems',
    category: 'residential',
    image: '/images/product/5thcard.png'
  },
  {
    id: 6,
    name: 'Solar Mounting System',
    description: 'Durable mounting solutions for all types of solar panels',
    category: 'commercial',
    image: '/images/product/6thcard.jpg'
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-16">
        {/* Video Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
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
              <div className="lg:w-1/2 w-full">
                <div className="relative aspect-[3/2] rounded-lg overflow-hidden shadow-xl">
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    className="w-full h-full object-cover"
                    poster="/images/product/video-placeholder.jpg"
                  >
                    <source src="/images/ProductVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="relative h-64 w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm flex-grow">{product.description}</p>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1.5 rounded-full self-start">
                      {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    </span>
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
