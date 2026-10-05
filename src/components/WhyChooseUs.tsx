import React from 'react';
import {
  ShieldCheck,
  Sparkles,
  Award,
  Wifi,
  Wind,
  CreditCard,
  Heart,
  Droplets,
  CheckCircle,
} from 'lucide-react';
import { salonImages } from '../assets/images';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Exclusive Female Comfort',
      description:
        'A 100% private, safe, and deeply relaxing sanctuary designed solely for women and young girls. Completely respectful, discreet, and stress-free.',
      badge: 'Zero Men Allowed',
      color: 'rose',
    },
    {
      icon: Award,
      title: 'Expert Hands of Nilu Singh',
      description:
        'Attentive, cordial, and certified styling mastery. Nilu Singh listens intently to what you want and crafts looks that accentuate your unique natural features.',
      badge: 'Certified Stylist',
      color: 'amber',
    },
    {
      icon: Sparkles,
      title: 'Hospital-Grade Sterilization & Hygiene',
      description:
        'Freshly sanitized scissors, single-use wax strips, disposable towels, and sterilized facial probes ensure the highest standard of personal safety.',
      badge: 'Top Safety Protocol',
      color: 'emerald',
    },
    {
      icon: Droplets,
      title: 'High-Tech Skincare Equipment',
      description:
        'Experience advanced multi-step Hydra-dermabrasion machines and 7-color LED phototherapy rejuvenation masks for real, lasting skin transformation.',
      badge: 'Modern Technology',
      color: 'sky',
    },
    {
      icon: Wind,
      title: 'Full Air-Conditioned Comfort',
      description:
        'Escape the heat and humidity of Kolkata into a cool, fragrant, and soothing ambiance with ambient background melodies.',
      badge: 'All-Day Climate Control',
      color: 'teal',
    },
    {
      icon: CreditCard,
      title: 'Easy Digital & Cash Payments',
      description:
        'Pay with zero hassle using Google Pay, PhonePe, UPI apps, or cash. Free high-speed Wi-Fi is available for easy instant transactions.',
      badge: 'GPay & Cash Accepted',
      color: 'purple',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-700">
            The Sringar Difference
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Why Women in Maheshtala Choose Us
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            From uncompromising hygiene and top-tier cosmetic formulations to genuine warmth, here is what makes our salon your preferred beauty retreat.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FCFAF8] border border-stone-200/80 hover:border-rose-200 transition-all duration-300 shadow-2xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-rose-100 flex items-center justify-center text-rose-700 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide text-rose-800 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-100">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs font-semibold text-rose-700">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Guaranteed Standards</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Banner Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-stone-900 via-stone-850 to-stone-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-amber-400/20 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[11px] uppercase tracking-widest text-amber-300 font-semibold">
              Premium Cosmetic Partners
            </span>
            <h4 className="font-serif text-2xl font-bold text-stone-100">
              Only Genuine Salon Formulations Used
            </h4>
            <p className="text-xs text-stone-400 max-w-xl">
              We never cut corners with cheap duplicate products. We exclusively utilize genuine salon-grade formulas from L’Oréal Professionnel, Matrix, Streax, O3+, and Italian Rica.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold tracking-wider uppercase text-amber-200/90">
            <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10">L’Oréal</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10">Matrix</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10">O3+</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10">Rica Wax</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10">Lotus Herbals</span>
          </div>
        </div>
      </div>
    </section>
  );
};
