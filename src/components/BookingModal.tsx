import React, { useState } from 'react';
import {
  X,
  Calendar,
  Clock,
  CheckCircle,
  MessageCircle,
  PhoneCall,
  Sparkles,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { SALON_INFO, SALON_SERVICES, SalonService } from '../data/salonData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedServiceId?: string | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedServiceId,
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(() => {
    return preSelectedServiceId ? [preSelectedServiceId] : ['precision-haircut-styling'];
  });
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [preferredTime, setPreferredTime] = useState('12:00 PM');
  const [specialNote, setSpecialNote] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  // Sync if preSelectedServiceId changes
  React.useEffect(() => {
    if (preSelectedServiceId && !selectedServices.includes(preSelectedServiceId)) {
      setSelectedServices((prev) => [...prev, preSelectedServiceId]);
    }
  }, [preSelectedServiceId]);

  if (!isOpen) return null;

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const selectedServiceObjects = SALON_SERVICES.filter((s) =>
    selectedServices.includes(s.id)
  );

  const estimatedTotal = selectedServiceObjects.reduce(
    (sum, s) => sum + s.startingPrice,
    0
  );

  const timeSlots = [
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
    '06:30 PM',
    '07:30 PM',
  ];

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientPhone.trim()) {
      alert('Please enter your Name and Mobile Number to proceed.');
      return;
    }

    const serviceNames = selectedServiceObjects.map((s) => s.name).join(', ') || 'Custom Consultation';
    const message = `Hello Nilu Singh / Sringar Beauty Salon,

I would like to schedule an appointment:
• Name: ${clientName}
• Phone: ${clientPhone}
• Preferred Date: ${preferredDate}
• Preferred Time: ${preferredTime}
• Services Requested: ${serviceNames}
• Estimated Starting Total: ₹${estimatedTotal.toLocaleString('en-IN')}
${specialNote ? `• Notes: ${specialNote}` : ''}

Looking forward to your confirmation!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919831268836?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-rose-100 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-900 via-stone-900 to-rose-950 text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-rose-500/20 border border-rose-300/40 flex items-center justify-center text-rose-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-xl tracking-wide font-semibold text-rose-50">
                Book Your Salon Session
              </h3>
              <p className="text-xs text-rose-200/80">
                Exclusive Female-Only Space · Curated by Nilu Singh
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {confirmed ? (
          <div className="p-8 text-center flex flex-col items-center justify-center my-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-stone-900 mb-2">
              Booking Request Prepared!
            </h4>
            <p className="text-sm text-stone-600 max-w-md mb-6">
              Your appointment details have been dispatched to <strong>Nilu Singh</strong> at Sringar Beauty Salon on WhatsApp. You can also call directly to confirm immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <a
                href={`tel:${SALON_INFO.phoneTel}`}
                className="flex-1 py-3 px-4 rounded-xl bg-stone-900 text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-stone-800 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-rose-400" />
                Call Salon Directly
              </a>
              <button
                onClick={() => {
                  setConfirmed(false);
                  onClose();
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium text-sm transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleWhatsAppBooking} className="p-6 overflow-y-auto space-y-6">
            {/* Quick Women-Only Safe notice */}
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-rose-50/80 border border-rose-100 text-xs text-rose-900">
              <ShieldCheck className="w-4 h-4 text-rose-600 flex-shrink-0" />
              <span>
                <strong>100% Women-Only Haven:</strong> Private, air-conditioned, and respectful environment exclusively for ladies and girls.
              </span>
            </div>

            {/* Select Services */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-stone-700">
                  Select Services (Multiple Allowed)
                </label>
                <span className="text-xs text-rose-700 font-medium">
                  {selectedServices.length} selected
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto p-1 border border-stone-200 rounded-xl">
                {SALON_SERVICES.map((service) => {
                  const isChecked = selectedServices.includes(service.id);
                  return (
                    <button
                      type="button"
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`text-left p-2.5 rounded-lg border text-xs transition-all flex items-start justify-between gap-2 ${
                        isChecked
                          ? 'border-rose-500 bg-rose-50/60 text-stone-900 shadow-xs'
                          : 'border-stone-100 hover:border-stone-200 text-stone-600 bg-white'
                      }`}
                    >
                      <div>
                        <p className="font-semibold text-stone-800 line-clamp-1">
                          {service.name}
                        </p>
                        <p className="text-[11px] text-stone-500">
                          {service.categoryLabel} · {service.duration}
                        </p>
                      </div>
                      <span className="font-bold text-rose-700 text-xs flex-shrink-0">
                        {service.priceDisplay}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-stone-500" /> Preferred Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-rose-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-stone-500" /> Preferred Time Slot
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-rose-500 bg-white"
                >
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time} (11 AM – 8 PM Daily)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Client Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Priyadarshini Sen"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-rose-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1.5">
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +91 98312 68836"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-rose-500"
                  required
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1.5">
                Special Requests / Hair or Skin Details (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Looking for subtle caramel highlights, or have sensitive acne-prone skin..."
                value={specialNote}
                onChange={(e) => setSpecialNote(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-rose-500 resize-none"
              />
            </div>

            {/* Total Calculation & CTA */}
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-stone-500 block">
                  Estimated Starting Total ({selectedServices.length} service
                  {selectedServices.length !== 1 ? 's' : ''})
                </span>
                <span className="font-serif text-2xl font-bold text-stone-900">
                  ₹{estimatedTotal.toLocaleString('en-IN')}
                </span>
                <span className="text-[11px] text-stone-400 block">
                  *Final price may vary based on hair length/custom requirements
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
                <button
                  type="submit"
                  className="py-2.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send on WhatsApp</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${SALON_INFO.phoneTel}`}
                  className="py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl font-medium text-sm flex items-center justify-center gap-1.5 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-rose-400" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
