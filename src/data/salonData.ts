export interface SalonService {
  id: string;
  name: string;
  category: 'hair' | 'skin' | 'bridal' | 'essentials';
  categoryLabel: string;
  startingPrice: number;
  priceDisplay: string;
  duration: string;
  description: string;
  benefits: string[];
  tag?: string;
  popular?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  neighborhood: string;
  rating: number;
  date: string;
  serviceMentioned: string;
  comment: string;
  verified: boolean;
}

export const SALON_INFO = {
  name: 'Sringar Beauty Salon',
  subtitle: 'Makeover Studio & Hair Lounge',
  owner: 'Nilu Singh',
  positioning: 'Exclusive Female-Only Beauty & Hair Salon',
  tagline: 'Your Sanctuary of Elegance & Self-Care in Maheshtala',
  phone: '+91 98312 68836',
  phoneRaw: '+919831268836',
  phoneTel: '09831268836',
  address: '15-150, new, Budge Budge Trunk Rd, Gauripur, Maheshtala, Kolkata, West Bengal 700141',
  landmark: 'Budge Budge Trunk Road, Near Gauripur Crossing, Maheshtala',
  hours: 'Monday – Sunday: 11:00 AM – 8:00 PM',
  operatingSchedule: [
    { day: 'Monday', hours: '11:00 AM – 8:00 PM', open: true },
    { day: 'Tuesday', hours: '11:00 AM – 8:00 PM', open: true },
    { day: 'Wednesday', hours: '11:00 AM – 8:00 PM', open: true },
    { day: 'Thursday', hours: '11:00 AM – 8:00 PM', open: true },
    { day: 'Friday', hours: '11:00 AM – 8:00 PM', open: true },
    { day: 'Saturday', hours: '11:00 AM – 8:00 PM', open: true },
    { day: 'Sunday', hours: '11:00 AM – 8:00 PM', open: true },
  ],
  instagramHandle: '@sringar_beauty_salon',
  instagramUrl: 'https://www.instagram.com/sringar_beauty_salon/',
  rating: 4.8,
  reviewCount: 42,
  amenities: [
    '100% Women-Only Space',
    'Full Air Conditioning',
    'Free High-Speed Wi-Fi',
    'Google Pay & UPI Accepted',
    'Cash Accepted',
    'Hygienic Sterilized Tools',
    'Nilu Singh Consultation',
  ],
  mapCoordinates: {
    lat: 22.5028,
    lng: 88.2435,
  },
};

export const SALON_SERVICES: SalonService[] = [
  // --- HAIR CARE & STYLING ---
  {
    id: 'hair-smoothening-keratin',
    name: 'Hair Smoothening & Keratin Straightening',
    category: 'hair',
    categoryLabel: 'Hair Care & Styling',
    startingPrice: 2999,
    priceDisplay: 'From ₹2,999',
    duration: '2.5 – 3.5 hrs',
    description:
      'Transform frizzy, unmanageable hair into mirror-shine, silky-straight tresses using premium L’Oréal / Matrix protein infusion formulas.',
    benefits: ['Frizz-free for 5–7 months', 'Deep keratin restoration', 'Velvety glass-hair shine'],
    tag: 'Signature Transformation',
    popular: true,
  },
  {
    id: 'precision-haircut-styling',
    name: 'Precision Haircut, Wash & Blow-Dry',
    category: 'hair',
    categoryLabel: 'Hair Care & Styling',
    startingPrice: 350,
    priceDisplay: 'From ₹350',
    duration: '45 mins',
    description:
      'Customized face-framing cuts, deep U-cut, V-cut, feather layers, or bob styled to perfection by Nilu Singh, finished with Moroccan argan blow-dry.',
    benefits: ['Volume boost', 'Split-end removal', 'Face contouring layers'],
    tag: 'Client Favorite',
    popular: true,
  },
  {
    id: 'deep-nourishing-hair-spa',
    name: 'Deep Conditioning & Nourishing Hair Spa',
    category: 'hair',
    categoryLabel: 'Hair Care & Styling',
    startingPrice: 850,
    priceDisplay: 'From ₹850',
    duration: '60 mins',
    description:
      'Relaxing scalp therapy with ozone steam infusion, gentle acupressure massage, and intensive ceramide mask to revive dry and damaged hair.',
    benefits: ['Stress-relieving head massage', 'Scalp detox', 'Long-lasting soft moisture'],
    popular: false,
  },
  {
    id: 'global-color-highlights',
    name: 'Global Hair Color & Balayage Highlights',
    category: 'hair',
    categoryLabel: 'Hair Care & Styling',
    startingPrice: 1800,
    priceDisplay: 'From ₹1,800',
    duration: '90 – 120 mins',
    description:
      'Ammonia-free rich espresso, burgundy, honey balayage, or sun-kissed caramel streaks with high-sheen gloss toner.',
    benefits: ['Zero ammonia damage', '100% grey coverage', 'Vibrant light-reflecting tones'],
    tag: 'Trending',
    popular: true,
  },
  {
    id: 'root-touchup',
    name: 'Root Touch-Up & Quick Gloss Tint',
    category: 'hair',
    categoryLabel: 'Hair Care & Styling',
    startingPrice: 650,
    priceDisplay: 'From ₹650',
    duration: '45 mins',
    description:
      'Seamless grey coverage matching your existing hair shade perfectly using nourishing gentle color formulas.',
    benefits: ['Even root blending', 'Fast processing', 'Gentle on scalp'],
    popular: false,
  },

  // --- SKINCARE & FACIALS ---
  {
    id: 'hydra-facial-dermabrasion',
    name: 'Advanced Hydra-Facial Skin Infusion',
    category: 'skin',
    categoryLabel: 'Skincare & Facials',
    startingPrice: 1499,
    priceDisplay: 'From ₹1,499',
    duration: '75 mins',
    description:
      'Multi-step aqua dermabrasion utilizing specialized vacuum suction, hyaluronic acid serum infusion, and pore deep-cleaning for instant celebrity radiance.',
    benefits: ['Extracts blackheads painlessly', 'Instant dewy glass glow', 'Reduces fine lines'],
    tag: 'Most Requested',
    popular: true,
  },
  {
    id: 'led-phototherapy-facial',
    name: '7-Color LED Phototherapy Radiance Mask',
    category: 'skin',
    categoryLabel: 'Skincare & Facials',
    startingPrice: 1200,
    priceDisplay: 'From ₹1,200',
    duration: '60 mins',
    description:
      'Targeted blue and red LED photon wavelengths that stimulate collagen, calm inflammation, erase acne blemishes, and boost natural cellular renewal.',
    benefits: ['Fades stubborn pigmentation', 'Tightens skin elasticity', 'Non-invasive & calming'],
    tag: 'High-Tech Ritual',
    popular: true,
  },
  {
    id: 'o3-glow-brightening-facial',
    name: 'O3+ Bridal Glow & Brightening Facial',
    category: 'skin',
    categoryLabel: 'Skincare & Facials',
    startingPrice: 1100,
    priceDisplay: 'From ₹1,100',
    duration: '60 mins',
    description:
      'Iconic oxygenating treatment designed to banish dullness, lighten dark spots, and revive exhausted skin with long-lasting luminous glow.',
    benefits: ['Even skin tone', 'Intense hydration lock', 'Natural glow that lasts for weeks'],
    popular: false,
  },
  {
    id: 'deep-cleanup-dtan',
    name: 'Deep Pore Cleanup & Herbal D-Tan Ritual',
    category: 'skin',
    categoryLabel: 'Skincare & Facials',
    startingPrice: 650,
    priceDisplay: 'From ₹650',
    duration: '45 mins',
    description:
      'Steam cleansing, blackhead extraction, soothing gentle scrub, cooling mint clay mask, and sun tan removal pack.',
    benefits: ['Removes Kolkata sun tan', 'Unclogs congested pores', 'Refreshes tired skin'],
    popular: false,
  },

  // --- BRIDAL & PRE-BRIDAL ---
  {
    id: 'traditional-bridal-makeover',
    name: 'Traditional Bengali & Contemporary Bridal Makeover',
    category: 'bridal',
    categoryLabel: 'Bridal & Pre-Bridal',
    startingPrice: 6500,
    priceDisplay: 'From ₹6,500',
    duration: '180 mins',
    description:
      'Curated bridal transformation by Nilu Singh including HD waterproof makeup, intricate eye artistry, chandan bindi art, traditional bridal hair updo with floral accessories, and perfect saree/lehenga draping.',
    benefits: ['Sweat-proof HD finish', 'Custom jewelry setting', 'Complete bridal styling kit'],
    tag: 'Signature Service',
    popular: true,
  },
  {
    id: 'pre-bridal-glow-package',
    name: 'Full Pre-Bridal Radiance Ritual',
    category: 'bridal',
    categoryLabel: 'Bridal & Pre-Bridal',
    startingPrice: 4500,
    priceDisplay: 'From ₹4,500',
    duration: 'Half-Day Session',
    description:
      'Complete head-to-toe pampering before the big day: Luxury Facial, Full Body D-Tan & Waxing, Rose Manicure, Milk Pedicure, and Deep Hair Spa.',
    benefits: ['Silky soft bridal skin', 'Stress relief for brides', 'Head-to-toe perfection'],
    tag: 'Best Value',
    popular: true,
  },
  {
    id: 'party-guest-makeup',
    name: 'Party / Reception Glam Makeup & Saree Draping',
    category: 'bridal',
    categoryLabel: 'Bridal & Pre-Bridal',
    startingPrice: 1500,
    priceDisplay: 'From ₹1,500',
    duration: '75 mins',
    description:
      'Glamorous, long-wearing makeup for bridesmaids, wedding guests, and festive pujas. Includes elegant hair styling and pleated saree pinning.',
    benefits: ['Flawless photographic finish', 'Crease-free saree draping', 'Trendy modern hairstyles'],
    popular: false,
  },

  // --- EVERYDAY ESSENTIALS ---
  {
    id: 'rica-body-waxing',
    name: 'Liposoluble Rica / Honey Body Waxing',
    category: 'essentials',
    categoryLabel: 'Everyday Essentials',
    startingPrice: 300,
    priceDisplay: 'From ₹300',
    duration: '20 – 60 mins',
    description:
      'Gentle, colophony-free Italian Rica wax suitable even for sensitive skin. Full arms, legs, underarms, and full body options.',
    benefits: ['98% less redness', 'Slows hair regrowth', 'Silky post-wax oil treatment'],
    popular: true,
  },
  {
    id: 'eyebrow-threading-face',
    name: 'Precision Eyebrow & Upper Lip Threading',
    category: 'essentials',
    categoryLabel: 'Everyday Essentials',
    startingPrice: 50,
    priceDisplay: 'From ₹50',
    duration: '15 mins',
    description:
      'Accurate arch shaping, gentle touch, and soothing aloe vera gel massage after every threading service.',
    benefits: ['Clean sharp arches', 'Gentle on skin', 'Instant definition'],
    popular: false,
  },
  {
    id: 'rose-deluxe-manicure-pedicure',
    name: 'Aromatherapy Rose Pedicure & Manicure',
    category: 'essentials',
    categoryLabel: 'Everyday Essentials',
    startingPrice: 650,
    priceDisplay: 'From ₹650',
    duration: '60 mins',
    description:
      'Warm floral foot soak, exfoliating walnut scrub, cuticle therapy, dead skin buffing, and relaxing foot acupressure massage.',
    benefits: ['Heals cracked heels', 'Relieves tired feet', 'Glossy nail buff & polish'],
    popular: false,
  },
];

export const SALON_TESTIMONIALS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Priyanka Sen',
    neighborhood: 'Maheshtala, Kolkata',
    rating: 5,
    date: '2 weeks ago',
    serviceMentioned: 'Keratin Hair Smoothening',
    comment:
      'Nilu di is exceptionally cordial and skilled! My curly, damaged hair became completely frizz-free and silky after the smoothening treatment. The salon is spotlessly clean and exclusively for women, which gives immense comfort and peace of mind.',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Ananya Roy',
    neighborhood: 'Budge Budge Trunk Rd',
    rating: 5,
    date: '1 month ago',
    serviceMentioned: 'Hydra-Facial & LED Mask',
    comment:
      'Got the hydra-facial and the 7-color LED mask before my cousin’s wedding. The glow on my face was unreal! My skin felt so plump and hydrated. You won’t find this high-tech skincare equipment at such affordable rates elsewhere in Maheshtala.',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Sharmistha Das',
    neighborhood: 'Gauripur, Kolkata',
    rating: 5,
    date: '3 weeks ago',
    serviceMentioned: 'Layered Haircut & Argan Blow-Dry',
    comment:
      'Finding a salon where the stylist actually listens to how much length you want to keep is rare. Nilu di gave me the most flattering layers with zero unnecessary chopping. Loved the warm ambiance and AC comfort!',
    verified: true,
  },
  {
    id: 'rev-4',
    author: 'Tanushree Mukherjee',
    neighborhood: 'Behala / Taratala',
    rating: 5,
    date: 'Last month',
    serviceMentioned: 'Bridal Makeover & Saree Draping',
    comment:
      'Booked Nilu di for my reception bridal look. The eye makeup and saree draping stayed intact throughout the 6-hour ceremony despite Kolkata humidity! Received endless compliments. Highly recommended to every bride-to-be.',
    verified: true,
  },
  {
    id: 'rev-5',
    author: 'Puja Ghosh',
    neighborhood: 'Budge Budge',
    rating: 5,
    date: 'Recent visit',
    serviceMentioned: 'O3+ Facial & Rica Waxing',
    comment:
      'The women-only environment makes a huge difference — you can sit back and completely unwind without any awkwardness. Staff is polite, tools are fresh and sterilized, and Google Pay was smooth.',
    verified: true,
  },
];

export const SALON_FAQS = [
  {
    question: 'Is Sringar Beauty Salon strictly exclusively for women and girls?',
    answer:
      'Yes, 100%. Sringar Beauty Salon is an exclusive female-only sanctuary owned and managed by Nilu Singh. All stylists, staff, and clients are women, ensuring complete privacy, safety, and utmost relaxation.',
  },
  {
    question: 'Do I need to book an appointment before visiting?',
    answer:
      'While walk-ins are always welcomed subject to chair availability, we strongly recommend calling (+91 98312 68836) or messaging on WhatsApp beforehand to avoid waiting, especially during weekends and festive seasons.',
  },
  {
    question: 'What payment modes are accepted at the salon?',
    answer:
      'We accept Google Pay, PhonePe, Paytm, any UPI app, as well as direct cash. Free Wi-Fi is available in the salon for easy digital transactions.',
  },
  {
    question: 'Where exactly is the salon located on Budge Budge Trunk Road?',
    answer:
      'Our salon is situated at 15-150, new, Budge Budge Trunk Road, Gauripur, Maheshtala, Kolkata 700141. It features a bright golden illuminated board and is easily accessible with convenient roadside parking.',
  },
  {
    question: 'What cosmetic and hair brands do you use?',
    answer:
      'We use top professional salon brands including L’Oréal Professionnel, Matrix, Streax Professional, O3+, Lotus Herbals, and Italian Rica Liposoluble wax for safe, gentle, and lasting results.',
  },
];
