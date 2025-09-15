'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const [selectedInquiry, setSelectedInquiry] = useState('residential');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow container mx-auto px-4 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Google Maps and Contact Info */}
            <div className="space-y-8">
              <h1 className="text-3xl font-bold">Inquiry Form</h1>
              
              {/* Google Maps Embed */}
              <div className="h-[400px] w-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.4874936728197!2d123.90931022846817!3d10.323799061316175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999d870a37435%3A0x5a68a7f60d546f3!2sMeridian%20by%20AVENIR!5e1!3m2!1sen!2sph!4v1757426673647!5m2!1sen!2sph"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
              </div>
              {/* Contact Info - Minimal */}
              <div className="text-sm text-gray-600 space-y-3">
                <p>📍 Unit 1601, Meridian, Golam Drive, Kasambagan 6000 Cebu City, Philippines</p>
                <p>☎ 0917 717 7103</p>
                <p>📧 hvidal@1028business.ph</p>
                <p>[Tel. Number]</p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="pt-16 pr-8 min-h-full">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    required
                  />
                </div>
                
                <div>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Inquiry Type</p>
                    <div className="flex flex-wrap gap-6">
                      {['residential', 'commercial', 'industrial'].map((type) => (
                        <div key={type} className="flex items-center">
                          <button
                            type="button"
                            className={`w-5 h-5 rounded-full border-2 flex-shrink-0 transition-colors ${
                              selectedInquiry === type 
                                ? 'bg-green-600 border-green-600' 
                                : 'border-gray-300 hover:border-green-500'
                            }`}
                            onClick={() => setSelectedInquiry(type)}
                            aria-label={type}
                          >
                            <span className="sr-only">{type}</span>
                          </button>
                          <span className="ml-2 text-gray-700 capitalize">{type}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message/Inquiry</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="text-white py-2 px-8 rounded-md transition-colors duration-200 font-medium"
                    style={{ backgroundColor: '#0F7346' }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer className="mt-16" />
    </div>
  );
}
