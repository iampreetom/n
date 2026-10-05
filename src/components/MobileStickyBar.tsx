import React from 'react';
import { Phone, Calendar, MessageCircle } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-rose-200/80 p-2.5 sm:hidden shadow-2xl flex items-center justify-between gap-2">
      <a
        href={`tel:${SALON_INFO.phoneTel}`}
        className="flex-1 py-2.5 px-3 rounded-xl bg-stone-900 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs active:scale-98 transition-transform"
      >
        <Phone className="w-4 h-4 text-rose-400" />
        <span>Call</span>
      </a>

      <a
        href={`https://wa.me/919831268836?text=${encodeURIComponent(
          'Hello Nilu Singh, I would like to inquire about booking an appointment at Sringar Beauty Salon.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs active:scale-98 transition-transform"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onOpenBooking}
        className="flex-1 py-2.5 px-3 rounded-xl bg-rose-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs active:scale-98 transition-transform cursor-pointer"
      >
        <Calendar className="w-4 h-4 text-rose-200" />
        <span>Book Slot</span>
      </button>
    </div>
  );
};
