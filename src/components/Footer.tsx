"use client";

import Image from 'next/image';
import Link from 'next/link';

interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`w-full py-8 px-4 sm:px-6 text-white ${className}`} style={{ backgroundColor: '#0E3F29' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-12 items-start justify-items-center md:justify-items-start">
          {/* Company Info */}
          <div className="space-y-6 text-center md:text-left max-w-xs">
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
              8Gen Power Inc. is a renewable energy company providing solar PV solutions for residential, commercial, and industrial clients. We are committed to delivering reliable, cost-efficient systems that power a sustainable future.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center md:text-left w-full">
            <h3 className="text-xl font-semibold mb-4">LINKS</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/products" className="text-white/80 hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/projects" className="text-white/80 hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="text-center md:text-left w-full">
            <h3 className="text-xl font-semibold mb-4">CONTACT INFORMATION</h3>
            <address className="not-italic text-white/80 space-y-5">
              <p>Location:<br />Unit 1601, Meridian, Golam Drive,<br />Kasambagan 6000 Cebu City,<br />Philippines</p>
              <p>
                <a href="mailto:hvidal@1028business.ph" className="hover:text-white transition-colors">
                  Email: hvidal@1028business.ph
                </a>
              </p>
              <p>
                <a href="tel:+639177177103" className="hover:text-white transition-colors">
                  Contact: 0917 717 7103
                </a>
              </p>
            </address>
          </div>
          
          {/* Connect With Us */}
          <div className="text-center md:text-left w-full">
            <h3 className="text-xl font-semibold mb-4">CONNECT WITH US</h3>
            <div className="flex mt-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 flex items-center justify-center relative hover:opacity-80 transition-opacity mx-3 mt-2"
                aria-label="Facebook"
              >
                <Image 
                  src="/images/Footer_Logo/FacebookLogo.png" 
                  alt="Facebook" 
                  width={64}
                  height={64}
                  className="object-contain w-full h-full"
                />
              </a>
              <a 
                href="viber://chat?number=your-number" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 flex items-center justify-center relative hover:opacity-80 transition-opacity mx-3 mt-2"
                aria-label="Viber"
              >
                <Image 
                  src="/images/Footer_Logo/ViberLogo.png" 
                  alt="Viber" 
                  width={64}
                  height={64}
                  className="object-contain w-full h-full"
                />
              </a>
              <a 
                href="https://wa.me/your-number" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-28 h-28 flex items-center justify-center relative hover:opacity-80 transition-opacity -ml-2 -mt-3.5"
                aria-label="WhatsApp"
              >
                <Image 
                  src="/images/Footer_Logo/WhatsappLogo.png" 
                  alt="WhatsApp" 
                  width={64}
                  height={64}
                  className="object-contain w-full h-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
