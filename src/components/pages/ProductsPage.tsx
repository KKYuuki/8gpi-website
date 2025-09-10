'use client';

import Image from 'next/image';

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

const ProductsPage = () => {
  return (
    <div className="min-h-screen">
      <main className="pt-16">
        {/* Video Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Solar Solutions
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how our solar solutions can transform your energy consumption
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Left Side - Write Up */}
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Harness the Power of the Sun</h3>
                <p className="text-gray-600">
                  At 8GPI, we&apos;re committed to providing sustainable energy solutions that make a difference. 
                  Our solar products are designed with cutting-edge technology to maximize efficiency and 
                  minimize environmental impact.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>High-efficiency solar panels with industry-leading performance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Smart energy management systems for optimal power usage</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Professional installation and ongoing support</span>
                  </li>
                </ul>
              </div>
              
              {/* Right Side - Video */}
              <div className="lg:w-1/2 w-full">
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/product/video-placeholder.jpg"
                    alt="Solar Panel Installation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <button className="bg-white rounded-full p-4 hover:bg-gray-100 transition-colors">
                      <svg className="h-8 w-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Products
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our range of high-quality solar products
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
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
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
