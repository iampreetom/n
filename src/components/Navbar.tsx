import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Clock, MapPin, Instagram, Shield } from 'lucide-react';
import { SalonLogo } from './SalonLogo';
import { SALON_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Nilu Singh', href: '#about' },
    { label: 'Services & Pricing', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Client Reviews', href: '#reviews' },
    { label: 'Contact & Map', href: '#contact' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-stone-900 text-rose-100 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 font-medium text-rose-300">
              <Shield className="w-3.5 h-3.5 text-rose-400" />
              100% Women-Only Space
            </span>
            <span className="text-stone-500 hidden sm:inline">·</span>
            <span className="text-stone-300 hidden sm:inline">
              Curated by Nilu Singh in Maheshtala, Kolkata
            </span>
          </div>

          <div className="flex items-center gap-4 text-stone-300 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              11:00 AM – 8:00 PM Daily
            </span>
            <span className="text-stone-600">|</span>
            <a
              href={`tel:${SALON_INFO.phoneTel}`}
              className="font-medium text-rose-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3 text-rose-400" />
              +91 98312 68836
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-rose-100/60'
            : 'bg-[#FDFBF9]/95 backdrop-blur-sm py-4 border-b border-stone-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="focus:outline-none">
            <SalonLogo variant="full" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-stone-700 hover:text-rose-700 transition-colors relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-500 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${SALON_INFO.phoneTel}`}
              className="py-2.5 px-4 rounded-xl border border-stone-300 text-stone-800 hover:border-rose-400 hover:text-rose-700 text-xs font-semibold flex items-center gap-1.5 transition-all"
              title="Call Salon"
            >
              <Phone className="w-3.5 h-3.5 text-rose-600" />
              <span>Call Now</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-rose-700 via-rose-800 to-stone-900 hover:from-rose-800 hover:to-black text-white text-xs font-semibold shadow-sm hover:shadow-md flex items-center gap-2 transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-rose-200" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden p-2 rounded-lg bg-rose-700 text-white text-xs font-medium flex items-center gap-1"
              aria-label="Book"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-stone-950/60 backdrop-blur-xs flex justify-end">
          <div className="w-4/5 max-w-sm bg-white h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-stone-100">
                <SalonLogo variant="compact" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-2">
                <div className="my-3 p-3 rounded-xl bg-rose-50 border border-rose-100 text-xs text-rose-950">
                  <p className="font-semibold flex items-center gap-1 text-rose-900 mb-0.5">
                    <Shield className="w-3.5 h-3.5 text-rose-600" />
                    Women-Only Salon
                  </p>
                  <p className="text-[11px] text-stone-600">
                    Owned & curated by Nilu Singh · Maheshtala
                  </p>
                </div>
              </div>

              <nav className="flex flex-col gap-1 py-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-3 px-3 text-sm font-medium text-stone-700 hover:bg-rose-50 hover:text-rose-700 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-stone-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 rounded-xl bg-rose-800 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-4 h-4 text-rose-200" />
                Book Appointment
              </button>

              <a
                href={`tel:${SALON_INFO.phoneTel}`}
                className="w-full py-3 px-4 rounded-xl border border-stone-300 text-stone-800 text-sm font-semibold flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-rose-600" />
                Call +91 98312 68836
              </a>

              <a
                href={SALON_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs text-stone-500 hover:text-stone-900 flex items-center justify-center gap-1.5"
              >
                <Instagram className="w-3.5 h-3.5 text-rose-500" />
                Follow on Instagram @sringar_beauty_salon
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
