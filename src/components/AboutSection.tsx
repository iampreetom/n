import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  Award,
  HeartHandshake,
  CheckCircle2,
  Calendar,
  PhoneCall,
  Flame,
} from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { salonImages } from '../assets/images';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background motif */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-rose-50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Founder Image & Visual Badges */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Outer decorative frame */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-amber-200/50 via-rose-200/40 to-stone-200/50 blur-xs -rotate-1" />

              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 bg-stone-100">
                <img
                  src={salonImages.founder}
                  alt="Nilu Singh - Founder of Sringar Beauty Salon"
                  className="w-full h-[460px] object-cover object-top hover:scale-102 transition-transform duration-500"
                />

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-rose-300">
                      Founder & Lead Stylist
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold tracking-wide">
                    Nilu Singh
                  </h3>
                  <p className="text-xs text-stone-300 mt-1">
                    Passionate beautician dedicated to personalized transformations and women’s comfort.
                  </p>
                </div>
              </div>

              {/* Floating verified badge */}
              <div className="absolute -top-3 -right-3 bg-stone-900 text-white py-2 px-3.5 rounded-xl shadow-lg border border-amber-400/40 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-semibold tracking-wide">
                  Women-Owned & Curated
                </span>
              </div>
            </div>
          </div>

          {/* About Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-rose-700">
                About Nilu Singh & Sringar Salon
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
                Crafting Confidence in an <br />
                <span className="italic text-rose-800">Exclusively Female</span> Sanctuary
              </h2>
            </div>

            <p className="text-stone-600 text-base leading-relaxed">
              Welcome to <strong>Sringar Beauty Salon</strong>, founded and passionately steered by <strong>Nilu Singh</strong> on Budge Budge Trunk Road, Maheshtala. Designed from the ground up as a dedicated retreat for women and girls, our salon is a haven where you can let down your guard, unwind in air-conditioned comfort, and experience genuine, personalized self-care.
            </p>

            <p className="text-stone-600 text-base leading-relaxed">
              At Sringar, we believe beauty rituals should never feel hurried or industrial. Nilu Singh takes the time to consult closely with every client—listening to your hair type, skin sensitivities, and personal style aspirations before recommending tailored treatments. Whether it is precision haircuts, high-tech hydra-facials, silky hair smoothening, or dream bridal makeovers, every stroke is carried out with patience and artisanal attention.
            </p>

            {/* Core Commitments List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-rose-50/60 border border-rose-100">
                <ShieldCheck className="w-5 h-5 text-rose-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    100% Women-Only Space
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Complete privacy and absolute comfort for ladies of all ages without compromise.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50/60 border border-amber-100">
                <Sparkles className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    Uncompromising Hygiene
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Sterilized tools, fresh single-use disposables, and pristine salon workstations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                <HeartHandshake className="w-5 h-5 text-stone-800 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    Personalized Attention
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    No rushing. Every haircut and facial is customized to your face shape and skin goal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    Authentic Cosmetic Brands
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Only certified professional products from L’Oréal, Matrix, O3+, and Rica.
                  </p>
                </div>
              </div>
            </div>

            {/* Founder Quote */}
            <div className="p-4 rounded-xl bg-stone-900 text-stone-200 border-l-4 border-rose-500 text-sm italic font-serif leading-relaxed">
              &ldquo;My wish for every woman stepping into Sringar is not just that she leaves looking radiant, but that she feels cared for, revitalized, and completely at home.&rdquo;
              <span className="block not-italic font-sans text-xs text-rose-300 font-semibold mt-1.5">
                — Nilu Singh, Founder & Owner
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="py-3 px-6 rounded-xl bg-rose-800 hover:bg-rose-900 text-white font-medium text-sm flex items-center gap-2 shadow-sm transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-rose-200" />
                <span>Book a Consultation with Nilu</span>
              </button>

              <a
                href={`tel:${SALON_INFO.phoneTel}`}
                className="py-3 px-5 rounded-xl border border-stone-300 hover:border-stone-400 text-stone-800 font-medium text-sm flex items-center gap-2 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-rose-700" />
                <span>Call +91 98312 68836</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
