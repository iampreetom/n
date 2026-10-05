import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Instagram,
  Navigation,
  CreditCard,
  Wifi,
  Wind,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { SALON_INFO, SALON_FAQS } from '../data/salonData';
import { SalonLogo } from './SalonLogo';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14742.666498703473!2d88.24354!3d22.50284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0279c9359e19a9%3A0x6b6fa3a1f9e2e60!2sBudge%20Budge%20Trunk%20Rd%2C%20Gauripur%2C%20Maheshtala%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin';

  return (
    <section id="contact" className="py-20 bg-[#FAF7F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-700">
            Visit & Connect
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Find Us on Budge Budge Trunk Road
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Conveniently located in Gauripur, Maheshtala. Drop in for a consultation with Nilu Singh or reach out directly via call or WhatsApp.
          </p>
        </div>

        {/* Contact Grid: Details + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Salon Identity Card */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <SalonLogo variant="full" className="mb-4" />

              <div className="space-y-4 pt-2">
                {/* Address */}
                <div className="flex items-start gap-3 text-stone-700">
                  <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-0.5">
                      Salon Address
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
                      {SALON_INFO.address}
                    </p>
                    <p className="text-[11px] text-rose-800 mt-1">
                      Landmark: Near Gauripur Crossing, Budge Budge Trunk Rd
                    </p>
                  </div>
                </div>

                {/* Operating Schedule */}
                <div className="flex items-start gap-3 text-stone-700 pt-3 border-t border-stone-100">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                        Opening Schedule
                      </h4>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        Open Today
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-800 font-semibold">
                      Monday – Sunday (All 7 Days)
                    </p>
                    <p className="text-xs text-stone-500">
                      11:00 AM – 8:00 PM Daily
                    </p>
                  </div>
                </div>

                {/* Contact numbers & instant buttons */}
                <div className="pt-3 border-t border-stone-100 space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
                    Quick Booking Triggers
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <a
                      href={`tel:${SALON_INFO.phoneTel}`}
                      className="py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
                    >
                      <Phone className="w-4 h-4 text-rose-400" />
                      <span>Call Now</span>
                    </a>

                    <a
                      href={`https://wa.me/919831268836?text=${encodeURIComponent(
                        'Hello Nilu Singh, I would like to book an appointment at Sringar Beauty Salon.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Chat</span>
                    </a>
                  </div>

                  <a
                    href={SALON_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 border border-rose-200/80 hover:border-rose-300 text-stone-800 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    <Instagram className="w-4 h-4 text-pink-600" />
                    <span>Follow @sringar_beauty_salon</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Amenities & Payments Card */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-xs space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                Salon Amenities & Accepted Payments
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-stone-700">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-stone-50">
                  <CreditCard className="w-4 h-4 text-emerald-600" />
                  <span>Google Pay & Cash</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-stone-50">
                  <Wifi className="w-4 h-4 text-sky-600" />
                  <span>Free High-Speed Wi-Fi</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-stone-50">
                  <Wind className="w-4 h-4 text-teal-600" />
                  <span>Full Air Conditioning</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-stone-50">
                  <ShieldCheck className="w-4 h-4 text-rose-600" />
                  <span>100% Women-Only</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Google Map & Directions */}
          <div className="lg:col-span-7 flex flex-col h-full space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-white h-[420px] lg:h-[460px]">
              <iframe
                title="Sringar Beauty Salon Location Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Overlaid Location Badge */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto bg-stone-900/90 backdrop-blur-md text-white p-3.5 rounded-xl shadow-lg border border-white/20 max-w-sm">
                <div className="flex items-center gap-2 text-rose-300 text-xs font-semibold mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>Sringar Beauty Salon</span>
                </div>
                <p className="text-xs text-stone-200">
                  15-150, Budge Budge Trunk Rd, Gauripur, Maheshtala, Kolkata 700141
                </p>
                <a
                  href="https://maps.google.com/?q=Budge+Budge+Trunk+Rd+Gauripur+Maheshtala+Kolkata+700141"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-white"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps / Directions</span>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200 flex items-center justify-between text-xs text-stone-600">
              <span className="font-medium">
                Convenient parking space available along Budge Budge Trunk Road.
              </span>
              <a
                href="https://maps.google.com/?q=Budge+Budge+Trunk+Rd+Gauripur+Maheshtala+Kolkata+700141"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-800 font-bold hover:underline whitespace-nowrap ml-2"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-3xl mx-auto pt-6">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-700">
              Clear Answers
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {SALON_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-white border border-stone-200 overflow-hidden shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif text-base font-bold text-stone-900 hover:text-rose-800 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-stone-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone-400 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
