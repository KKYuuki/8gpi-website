"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-transparent py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="block w-40 h-12 relative">
            <Image 
              src="/images/Logo.png" 
              alt="8GPI Logo - Solar Panel Installation Cebu | Cost of Solar Power Bacolod | Solar Maintenance Services Cebu City - facebook.com/8GenPower" 
              width={120}
              height={50}
              className="object-contain object-left"
              priority
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-15">
          <Link href="/products" className="text-black hover:text-green-600 py-2 font-medium">
            Products
          </Link>
          <Link href="/projects" className="text-black hover:text-green-600 py-2 font-medium">
            Projects
          </Link>
          <Link href="/about" className="text-black hover:text-green-600 py-2 font-medium">
            About Us
          </Link>
          <Link href="/contact" className="text-black hover:text-green-600 py-2 font-medium">
            Contact Us
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
            {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/products" 
              className="text-black hover:text-green-600 py-2 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="/projects" 
              className="text-black hover:text-green-600 py-2 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/about" 
              className="text-black hover:text-green-600 py-2 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="text-black hover:text-green-600 py-2 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
