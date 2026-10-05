import React from 'react';
import {
  ShieldCheck,
  Star,
  Sparkles,
  PhoneCall,
  ArrowRight,
  MapPin,
  Clock,
  Heart,
  Scissors,
} from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { salonImages } from '../assets/images';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-[#FDF8F6] via-[#FAF3F0] to-[#FDFBF9]">
      {/* Decorative ambient aura */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Subtle editorial kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/70 border border-rose-200/60 text-xs font-semibold text-rose-900 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
              <span>Exclusive Female-Only Beauty & Hair Salon</span>
              <span className="text-rose-400">·</span>
              <span className="text-stone-600">Curated by Nilu Singh</span>
            </div>

            {/* Catchy Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.12]">
              Your Sanctuary of <br className="hidden sm:inline" />
              <span className="italic font-normal text-rose-800">Elegance</span> &{' '}
              <span className="relative inline-block">
                Self-Care
                <svg
                  className="absolute -bottom-1.5 left-0 w-full text-rose-300"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  height="8"
                >
                  <path
                    d="M0,5 Q50,12 100,5"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>{' '}
              in Maheshtala
            </h1>

            {/* Subheadline matching exact user prompt */}
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              An exclusive female-only salon curated by <strong>Nilu Singh</strong>, offering professional hair styling, bridal transformations, and rejuvenating skincare treatments.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#services"
                className="w-full sm:w-auto py-3.5 px-7 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-rose-300 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`tel:${SALON_INFO.phoneTel}`}
                className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-900 border border-rose-200 font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <PhoneCall className="w-4 h-4 text-rose-700" />
                <span>Call to Book: +91 98312 68836</span>
              </a>
            </div>

            {/* Trust Badges - required by prompt */}
            <div className="pt-6 border-t border-rose-100/80 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/70 border border-rose-100/60 shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-700 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900 leading-tight">100% Women</p>
                  <p className="text-[11px] text-stone-500">Only Space</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/70 border border-rose-100/60 shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900 leading-tight">4.8★ Rated</p>
                  <p className="text-[11px] text-stone-500">40+ Reviews</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/70 border border-rose-100/60 shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-stone-100 text-stone-700 flex items-center justify-center flex-shrink-0">
                  <Scissors className="w-4 h-4 text-rose-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900 leading-tight">Certified</p>
                  <p className="text-[11px] text-stone-500">Master Stylists</p>
                </div>
              </div>
            </div>

            {/* Location & Quick Hours indicator */}
            <div className="text-xs text-stone-500 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1.5 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                Budge Budge Trunk Rd, Gauripur, Maheshtala
              </span>
              <span className="hidden sm:inline text-stone-300">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                Open 7 Days (11 AM – 8 PM)
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative border */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-rose-300/40 via-amber-200/30 to-rose-400/20 blur-sm transform -rotate-1" />

              {/* Main image card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-stone-900">
                <img
                  src={salonImages.interior}
                  alt="Sringar Beauty Salon Modern Interior in Maheshtala"
                  className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-900/20" />

                {/* Overlaid Gold Board Emblem inspired by the salon's storefront */}
                <div className="absolute top-4 left-4 right-4 bg-stone-900/85 backdrop-blur-md rounded-xl p-3 border border-amber-400/40 shadow-lg text-center">
                  <div className="flex items-center justify-center gap-1 text-amber-300 text-[10px] tracking-widest uppercase font-semibold">
                    <Sparkles className="w-3 h-3" />
                    <span>Makeover Studio & Hair Lounge</span>
                    <Sparkles className="w-3 h-3" />
                  </div>
                  <h3 className="font-serif text-lg tracking-wider text-amber-100 font-bold mt-0.5">
                    SRINGAR BEAUTY SALON
                  </h3>
                  <p className="text-[10px] text-stone-300">
                    Budge Budge Trunk Rd · Gauripur, Maheshtala
                  </p>
                </div>

                {/* Bottom floating badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-lg border border-rose-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center font-serif font-bold text-base border border-rose-200">
                      NS
                    </div>
                    <div>
                      <p className="text-xs font-bold text-stone-900">Personalized by Nilu Singh</p>
                      <p className="text-[11px] text-stone-500">Master Beautician & Hair Artisan</p>
                    </div>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="py-1.5 px-3 rounded-lg bg-rose-800 hover:bg-rose-900 text-white text-xs font-semibold shadow-xs transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>

              {/* Decorative mini pill floating tag */}
              <div className="absolute -bottom-3 -right-3 sm:-right-4 bg-amber-500 text-stone-950 font-bold text-xs py-1 px-3 rounded-full shadow-md flex items-center gap-1 border-2 border-white">
                <Star className="w-3 h-3 fill-stone-950" />
                <span>4.8 / 5.0 Google Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
