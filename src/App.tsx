import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId || null);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedServiceId(null);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF9] text-stone-800 flex flex-col font-sans selection:bg-rose-100 selection:text-rose-900">
      {/* Top Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <AboutSection onOpenBooking={() => handleOpenBooking()} />
        <ServicesSection onOpenBooking={handleOpenBooking} />
        <WhyChooseUs />
        <GallerySection onOpenBooking={handleOpenBooking} />
        <TestimonialsSection />
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Mobile Action Bar */}
      <MobileStickyBar onOpenBooking={() => handleOpenBooking()} />

      {/* Appointment Booking & Price Estimator Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preSelectedServiceId={selectedServiceId}
      />
    </div>
  );
}
