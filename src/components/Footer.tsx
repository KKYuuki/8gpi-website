"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-4 sm:px-6 text-white" style={{ backgroundColor: '#0E3F29' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8 items-start justify-items-center md:justify-items-start">
          {/* Company Info */}
          <div className="space-y-4 text-center md:text-left max-w-xs">
            <div className="w-48 mb-4">
              <Image 
                src="/images/Logo.png" 
                alt="8GPI Logo" 
                width={192}
                height={58}
                className="w-full h-auto"
              />
            </div>
            <p className="text-white/80 max-w-xs mx-auto md:mx-0">
              Leading the way in sustainable energy solutions for a brighter, cleaner future.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center md:text-left w-full">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/products" className="text-white/80 hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/projects" className="text-white/80 hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="text-center md:text-left w-full">
            <h3 className="text-lg font-semibold mb-4">CONTACT INFORMATION</h3>
            <address className="not-italic text-white/80">
              <p className="mb-2">123 Solar Street</p>
              <p className="mb-2">Sunnyvale, CA 94085</p>
              <p className="mb-2">
                <a href="tel:+11234567890" className="hover:text-white transition-colors">+1 (123) 456-7890</a>
              </p>
              <p>
                <a href="mailto:info@8gpi.com" className="hover:text-white transition-colors">info@8gpi.com</a>
              </p>
            </address>
          </div>
          
          {/* Connect With Us */}
          <div className="text-center md:text-left w-full">
            <h3 className="text-lg font-semibold mb-4">CONNECT WITH US</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 relative hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Image 
                  src="/images/Footer_Logo/FacebookLogo.png" 
                  alt="Facebook" 
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                />
              </a>
              <a 
                href="viber://chat?number=your-number" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 relative hover:opacity-80 transition-opacity"
                aria-label="Viber"
              >
                <Image 
                  src="/images/Footer_Logo/ViberLogo.png" 
                  alt="Viber" 
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                />
              </a>
              <a 
                href="https://wa.me/your-number" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-15.625 h-15.625 -mt-2.5 -ml-2.5 relative hover:opacity-80 transition-opacity"
                aria-label="WhatsApp"
              >
                <Image 
                  src="/images/Footer_Logo/WhatsappLogo.png" 
                  alt="WhatsApp" 
                  width={62.5}
                  height={62.5}
                  className="object-contain w-full h-full"
                />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 border-t border-white/20 text-center text-white/80">
          <p>© {new Date().getFullYear()} 8GPI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
