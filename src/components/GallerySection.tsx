import React, { useState } from 'react';
import {
  Sparkles,
  Maximize2,
  X,
  Calendar,
  MessageCircle,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import { salonImages } from '../assets/images';

interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'hair' | 'skin' | 'bridal';
  categoryLabel: string;
  image: string;
  caption: string;
  serviceId?: string;
}

interface GallerySectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'interior' | 'hair' | 'skin' | 'bridal'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'gal-interior-1',
      title: 'Backlit Honeycomb Lounge & Styling Chairs',
      category: 'interior',
      categoryLabel: 'Salon Ambiance',
      image: salonImages.interior,
      caption:
        'Our contemporary styling station featuring signature honeycomb illuminated display, soothing green moss backdrop, and plush ergonomic hydraulic chairs.',
    },
    {
      id: 'gal-skin-1',
      title: 'Advanced Hydra-Facial Dermabrasion',
      category: 'skin',
      categoryLabel: 'High-Tech Skincare',
      image: salonImages.hydraFacial,
      caption:
        'Real client hydra-facial session in progress with multi-probe ultrasonic extraction and deep hydration infusion performed by Nilu Singh.',
      serviceId: 'hydra-facial-dermabrasion',
    },
    {
      id: 'gal-skin-2',
      title: '7-Color LED Phototherapy Radiance Mask',
      category: 'skin',
      categoryLabel: 'High-Tech Skincare',
      image: salonImages.ledMask,
      caption:
        'Client experiencing medical-grade photon light therapy mask for active collagen stimulation and blemish clearing.',
      serviceId: 'led-phototherapy-facial',
    },
    {
      id: 'gal-hair-1',
      title: 'Glass-Hair Keratin Smoothening with Highlights',
      category: 'hair',
      categoryLabel: 'Hair Transformations',
      image: salonImages.hairMakeover,
      caption:
        'Mirror-finish straight hair transformation with delicate caramel balayage streaks, soft texture, and zero frizz.',
      serviceId: 'hair-smoothening-keratin',
    },
    {
      id: 'gal-bridal-1',
      title: 'Traditional Bengali & Contemporary Bridal Artistry',
      category: 'bridal',
      categoryLabel: 'Bridal Makeover',
      image: salonImages.bridal,
      caption:
        'Flawless HD waterproof bridal makeover with custom floral chignon hair updo, jewelry fixing, and pleat-perfect saree draping.',
      serviceId: 'traditional-bridal-makeover',
    },
    {
      id: 'gal-storefront-1',
      title: 'Sringar Beauty Salon Makeover Studio Entrance',
      category: 'interior',
      categoryLabel: 'Storefront',
      image: salonImages.storefront,
      caption:
        'Evening view of our glowing golden storefront on Budge Budge Trunk Road, welcoming women into a private, calm haven.',
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'interior', label: 'Salon Ambiance' },
    { id: 'hair', label: 'Hair Transformations' },
    { id: 'skin', label: 'High-Tech Skincare' },
    { id: 'bridal', label: 'Bridal Styling' },
  ] as const;

  return (
    <section id="gallery" className="py-20 bg-[#FDFBF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-700">
            Visual Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Our Studio & Real Client Results
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Take a look inside our clean, aesthetic space and explore authentic hair transformations, skin therapies, and bridal work.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1 bg-stone-200/70 rounded-xl gap-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`py-1.5 px-3.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-stone-950 shadow-xs'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl overflow-hidden bg-stone-900 aspect-4/3 cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 border border-stone-200/80"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-95 group-hover:opacity-100"
              />

              {/* Overlay with details on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent opacity-85 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-white">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-rose-300 mb-1">
                  {item.categoryLabel}
                </span>
                <h3 className="font-serif text-lg font-bold leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 line-clamp-2 mb-3">
                  {item.caption}
                </p>

                <div className="flex items-center gap-2 text-xs font-semibold text-rose-300">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
            {/* Close button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo side */}
            <div className="md:w-3/5 bg-stone-950 flex items-center justify-center overflow-hidden">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full max-h-[60vh] md:max-h-[80vh] object-contain"
              />
            </div>

            {/* Details side */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-white overflow-y-auto">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700">
                  {selectedPhoto.categoryLabel}
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1 mb-3">
                  {selectedPhoto.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  {selectedPhoto.caption}
                </p>

                <div className="p-4 rounded-xl bg-rose-50/80 border border-rose-100 text-xs text-rose-950 mb-6">
                  <p className="font-bold mb-1">Authentic Client Showcase</p>
                  <p className="text-stone-600">
                    Services conducted in our Maheshtala salon adhering to 100% women-only hygiene protocols.
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-stone-100">
                <button
                  onClick={() => {
                    const sid = selectedPhoto.serviceId;
                    setSelectedPhoto(null);
                    onOpenBooking(sid);
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-rose-300" />
                  <span>Book this Treatment</span>
                </button>

                <a
                  href={`https://wa.me/919831268836?text=${encodeURIComponent(
                    `Hello Nilu Singh, I saw the photo of "${selectedPhoto.title}" on the website and would like to inquire about booking it.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl border border-stone-200 hover:bg-stone-50 text-stone-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
