import React, { useState } from 'react';
import {
  Scissors,
  Sparkles,
  Crown,
  Heart,
  Clock,
  Check,
  MessageCircle,
  Calendar,
  ChevronRight,
  Info,
} from 'lucide-react';
import { SALON_SERVICES, SalonService, SALON_INFO } from '../data/salonData';

interface ServicesSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'hair' | 'skin' | 'bridal' | 'essentials'>('all');
  const [selectedServiceForDetails, setSelectedServiceForDetails] = useState<SalonService | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Services', icon: Sparkles },
    { id: 'hair', label: 'Hair Care & Styling', icon: Scissors },
    { id: 'skin', label: 'Skincare & Facials', icon: Sparkles },
    { id: 'bridal', label: 'Bridal & Pre-Bridal', icon: Crown },
    { id: 'essentials', label: 'Everyday Essentials', icon: Heart },
  ] as const;

  const filteredServices = activeTab === 'all'
    ? SALON_SERVICES
    : SALON_SERVICES.filter((s) => s.category === activeTab);

  const handleWhatsAppDirect = (service: SalonService) => {
    const text = encodeURIComponent(
      `Hello Nilu Singh / Sringar Beauty Salon, I would like to book or inquire about: ${service.name} (${service.priceDisplay}). Please let me know available slots.`
    );
    window.open(`https://wa.me/919831268836?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-[#FAF7F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-700">
            Tailored Beauty Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Services & Transparent Pricing
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Every treatment is performed using genuine, dermatologically approved products in our private women-only studio. Transparent starting rates with zero hidden charges.
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 bg-stone-200/70 rounded-2xl gap-1">
            {filterTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-3.5 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-white text-stone-950 shadow-sm'
                      : 'text-stone-600 hover:text-stone-950 hover:bg-white/40'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-rose-600' : 'text-stone-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-rose-300"
            >
              <div>
                {/* Card Top: Category and Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
                    {service.categoryLabel}
                  </span>

                  {service.tag && (
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-800 border border-rose-200/60">
                      {service.tag}
                    </span>
                  )}
                </div>

                {/* Service Name */}
                <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-rose-900 transition-colors">
                  {service.name}
                </h3>

                {/* Pricing & Duration */}
                <div className="flex items-baseline gap-3 my-3">
                  <span className="font-serif text-2xl font-bold text-rose-800">
                    {service.priceDisplay}
                  </span>
                  <span className="text-xs text-stone-500 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-stone-400" />
                    {service.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Benefits / Highlights */}
                <div className="space-y-1.5 mb-6 pt-3 border-t border-stone-100">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-stone-600">
                      <div className="w-3.5 h-3.5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons for Booking */}
              <div className="pt-4 border-t border-stone-100 flex items-center gap-2">
                <button
                  onClick={() => onOpenBooking(service.id)}
                  className="flex-1 py-2.5 px-3 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-rose-300" />
                  <span>Book Slot</span>
                </button>

                <button
                  onClick={() => handleWhatsAppDirect(service)}
                  className="p-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200/80 rounded-xl transition-colors cursor-pointer"
                  title="Inquire on WhatsApp"
                  aria-label={`Inquire about ${service.name} on WhatsApp`}
                >
                  <MessageCircle className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Transparency Note */}
        <div className="mt-12 p-4 rounded-2xl bg-white border border-rose-100 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <div className="flex items-center gap-2.5">
            <Info className="w-4 h-4 text-rose-600 flex-shrink-0" />
            <span>
              <strong>Note on custom treatments:</strong> Final pricing for hair chemical services (smoothening, keratin, global color) varies according to hair density and length. Free in-person consultation with Nilu Singh is provided before commencing any service.
            </span>
          </div>

          <button
            onClick={() => onOpenBooking()}
            className="whitespace-nowrap font-bold text-rose-800 hover:text-rose-950 flex items-center gap-1 cursor-pointer"
          >
            <span>Custom Package Booking</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
