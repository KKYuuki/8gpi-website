'use client';

import ContactPage from '@/components/pages/ContactPage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ContactPage />
      <Footer />
    </div>
  );
}
