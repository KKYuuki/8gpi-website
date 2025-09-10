'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Our Products
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              High-quality solar energy solutions for residential, commercial, and industrial use
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-64 w-full">
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
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </span>
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
