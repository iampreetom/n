import React, { useState } from 'react';
import {
  Star,
  Quote,
  ShieldCheck,
  CheckCircle2,
  ThumbsUp,
  MessageSquarePlus,
  X,
  Sparkles,
} from 'lucide-react';
import { SALON_TESTIMONIALS, ReviewItem, SALON_INFO } from '../data/salonData';

export const TestimonialsSection: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(() => {
    try {
      const saved = localStorage.getItem('sringar_client_reviews');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      // fallback
    }
    return SALON_TESTIMONIALS;
  });

  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newArea, setNewArea] = useState('');
  const [newService, setNewService] = useState('Hair Smoothening / Haircut');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      author: newAuthor.trim(),
      neighborhood: newArea.trim() || 'Maheshtala, Kolkata',
      rating: newRating,
      date: 'Just now',
      serviceMentioned: newService,
      comment: newComment.trim(),
      verified: true,
    };

    const updated = [newRev, ...reviews];
    setReviews(updated);
    try {
      localStorage.setItem('sringar_client_reviews', JSON.stringify(updated));
    } catch (e) {}

    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setIsReviewModalOpen(false);
      setNewAuthor('');
      setNewComment('');
      setNewArea('');
    }, 2000);
  };

  return (
    <section id="reviews" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating Hero Card */}
        <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl mb-14 border border-rose-900/30 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-1 text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              4.8 Out of 5.0 Star Rating
            </h2>
            <p className="text-stone-300 text-sm max-w-xl">
              Based on 40+ genuine client reviews from women across Maheshtala, Gauripur, Budge Budge, and South Kolkata.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="text-center sm:text-right">
              <span className="text-3xl font-serif font-bold text-amber-300 block">40+</span>
              <span className="text-xs text-stone-400">Happy Clients Reviewed</span>
            </div>
            <button
              onClick={() => setIsReviewModalOpen(true)}
              className="py-3 px-5 rounded-xl bg-rose-700 hover:bg-rose-800 text-white text-xs font-semibold flex items-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4 text-rose-200" />
              <span>Share Your Feedback</span>
            </button>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-700">
            Real Stories, Real Trust
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            What Our Clients Love About Sringar
          </h3>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Read verified feedback praising Nilu Singh’s attentive styling, polite demeanor, hygienic procedures, and the relaxing women-only ambiance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-[#FCFAF8] border border-stone-200/80 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Rating & Service */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-rose-800 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-100">
                    {rev.serviceMentioned}
                  </span>
                </div>

                {/* Comment quote */}
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-stone-200/60 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-800 font-serif font-bold text-xs flex items-center justify-center border border-rose-200">
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900 flex items-center gap-1">
                      {rev.author}
                      {rev.verified && (
                        <span title="Verified Client">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        </span>
                      )}
                    </h4>
                    <p className="text-[11px] text-stone-500">{rev.neighborhood}</p>
                  </div>
                </div>

                <span className="text-[11px] text-stone-400">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Submission Modal */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-stone-200">
            <button
              onClick={() => setIsReviewModalOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700"
            >
              <X className="w-5 h-5" />
            </button>

            {submittedMessage ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-stone-900">
                  Thank You for Your Review!
                </h4>
                <p className="text-xs text-stone-600">
                  Your feedback helps Nilu Singh and our salon continue delivering heartfelt service.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-700">
                    Client Feedback
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">
                    Share Your Experience
                  </h3>
                  <p className="text-xs text-stone-500">
                    How was your service with Nilu Singh at Sringar Beauty Salon?
                  </p>
                </div>

                {/* Rating selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Your Rating
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewRating(star)}
                        className="p-1 focus:outline-none"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newRating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-stone-300'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-semibold text-stone-600 ml-2">
                      {newRating} / 5 Stars
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Swati Roy"
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-200 rounded-lg focus:outline-rose-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Neighborhood / Area
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Gauripur, Maheshtala"
                      value={newArea}
                      onChange={(e) => setNewArea(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-200 rounded-lg focus:outline-rose-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Service Experienced
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Hydra-Facial, Haircut, Smoothening..."
                    value={newService}
                    onChange={(e) => setNewService(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-200 rounded-lg focus:outline-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Your Review *
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Share how you felt during the session, the cleanliness, or the results..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-200 rounded-lg focus:outline-rose-500 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-colors shadow-sm cursor-pointer"
                >
                  Submit Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
