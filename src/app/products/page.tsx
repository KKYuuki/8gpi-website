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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {products && products.length > 0 ? (
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
