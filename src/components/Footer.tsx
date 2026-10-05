import React from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Instagram,
  Heart,
  Shield,
  ArrowUp,
  MessageCircle,
} from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { SalonLogo } from './SalonLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-28 sm:pb-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-stone-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <SalonLogo variant="full" lightText={true} />
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm pt-2">
              Sringar Beauty Salon is an exclusive, women-only haven curated by Nilu Singh on Budge Budge Trunk Road, Maheshtala, Kolkata. Providing hair artistry, hydra-facials, and bridal transformations in absolute comfort.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-rose-300 font-medium">
              <Shield className="w-4 h-4 text-rose-400" />
              <span>100% Women-Only Space · Women Owned</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-rose-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Nilu Singh
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services & Pricing
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Salon Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Location & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Services Quicklist */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-rose-200">
              Signature Treatments
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>• Keratin & Hair Smoothening</li>
              <li>• Precision Haircuts & U/V-Cuts</li>
              <li>• Advanced Hydra-Facial Therapy</li>
              <li>• 7-Color LED Photon Radiance Mask</li>
              <li>• Traditional & HD Bengali Bridal Makeovers</li>
              <li>• Liposoluble Rica Body Waxing</li>
            </ul>
          </div>

          {/* Operating Hours & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-rose-200">
              Hours & Inquiries
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-stone-200">Monday – Sunday</p>
                  <p className="text-stone-400">11:00 AM – 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Phone className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-stone-200">Call / Appointments</p>
                  <a
                    href={`tel:${SALON_INFO.phoneTel}`}
                    className="text-rose-300 hover:underline font-mono"
                  >
                    +91 98312 68836
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Instagram className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-stone-200">Instagram</p>
                  <a
                    href={SALON_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-white"
                  >
                    {SALON_INFO.instagramHandle}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & scroll-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Sringar Beauty Salon. All rights reserved. Curated with dedication by Nilu Singh.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
