import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS, FACEBOOK_PAGE_URL } from '../data/translations';
import { INITIAL_STUDENT_REVIEWS, StudentReview } from '../data/studentReviews';
import {
  Star,
  Quote,
  CheckCircle2,
  Sparkles,
  ThumbsUp,
  PlusCircle,
  X,
  Send,
} from 'lucide-react';

interface StudentReviewsSectionProps {
  lang?: Language;
}

export const StudentReviewsSection: React.FC<StudentReviewsSectionProps> = () => {
  const t = TRANSLATIONS.en;
  const [reviews, setReviews] = useState<StudentReview[]>(() => {
    const saved = localStorage.getItem('sf_student_reviews');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_STUDENT_REVIEWS;
      }
    }
    return INITIAL_STUDENT_REVIEWS;
  });

  // Modal for submitting a new review
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [examInput, setExamInput] = useState('');
  const [ratingInput, setRatingInput] = useState(5);
  const [commentInput, setCommentInput] = useState('');
  const [submittedToast, setSubmittedToast] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim() || !commentInput.trim()) return;

    const newReview: StudentReview = {
      id: `rev-${Date.now()}`,
      name: nameInput.trim(),
      location: locationInput.trim() || 'Aspirant (India)',
      exam: examInput.trim() || 'Competitive Exam Aspirant',
      scoreHighlight: 'SF Talent Test Verified Candidate',
      rating: ratingInput,
      date: 'Just now',
      comment: {
        en: commentInput.trim(),
      },
      verified: true,
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem('sf_student_reviews', JSON.stringify(updated));

    setNameInput('');
    setLocationInput('');
    setExamInput('');
    setCommentInput('');
    setShowReviewModal(false);
    setSubmittedToast(true);
    setTimeout(() => setSubmittedToast(false), 4000);
  };

  return (
    <section id="reviews-section" className="py-16 md:py-24 bg-neutral-900/50 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.reviewsSection.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            {t.reviewsSection.title}
          </h2>
          <p className="text-sm md:text-base text-neutral-400">
            {t.reviewsSection.subtitle}
          </p>

          <div className="pt-2">
            <button
              onClick={() => setShowReviewModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-amber-500/30 text-amber-300 font-bold text-xs transition-colors cursor-pointer"
            >
              <PlusCircle className="w-4 h-4 text-amber-400" />
              <span>{t.reviewsSection.writeReviewBtn}</span>
            </button>
          </div>
        </div>

        {/* Facebook Community Callout Banner */}
        <div className="mb-12 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-blue-950/60 via-neutral-900/90 to-amber-950/40 border-2 border-blue-600/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/30">
              <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <div className="space-y-1">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-600/30 text-blue-300 font-bold uppercase tracking-wider">
                Official Facebook Page
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Follow SF Talent Test on Facebook for Daily Preparation!
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl">
                Get daily current affairs quizzes, maths shortcut videos, exam updates, and direct guidance by Abdullah Sir.
              </p>
            </div>
          </div>

          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm shadow-xl shadow-blue-600/30 flex items-center gap-2 whitespace-nowrap transition-transform hover:-translate-y-0.5"
          >
            <ThumbsUp className="w-4 h-4 fill-white" />
            <span>{t.reviewsSection.fbFollowBtn}</span>
          </a>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-card p-6 rounded-3xl border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between space-y-4 hover:-translate-y-1 group"
            >
              <div className="space-y-3">
                {/* Top Quote & Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-amber-500/20 group-hover:text-amber-500/40 transition-colors" />
                </div>

                {/* Score / Exam Tag */}
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold">
                    {rev.scoreHighlight}
                  </span>
                  <span className="text-neutral-400 font-medium">
                    {rev.exam}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                  "{rev.comment.en}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-3 border-t border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-500 text-black font-extrabold text-xs flex items-center justify-center">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1">
                      <span>{rev.name}</span>
                      {rev.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      )}
                    </h4>
                    <p className="text-[11px] text-neutral-400">{rev.location}</p>
                  </div>
                </div>
                <span className="text-[11px] text-neutral-500">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Submission Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-md w-full p-6 sm:p-7 rounded-3xl bg-neutral-900 border-2 border-amber-500/50 shadow-2xl space-y-5 animate-in zoom-in-95 duration-150">
            <button
              onClick={() => setShowReviewModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Student Feedback
              </span>
              <h3 className="text-xl font-black text-white">
                Share Your Experience
              </h3>
              <p className="text-xs text-neutral-400">
                Review the SF Talent Test platform, questions, and Abdullah Sir’s mentorship.
              </p>
            </div>

            <form onSubmit={handleAddReview} className="space-y-3.5 text-left text-xs">
              <div>
                <label className="font-bold text-neutral-300 block mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  placeholder="e.g. Ramesh Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-700 text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="font-bold text-neutral-300 block mb-1">
                    City / State
                  </label>
                  <input
                    type="text"
                    value={locationInput}
                    onChange={(e) => setLocationInput(e.target.value)}
                    placeholder="e.g. Jaipur, Rajasthan"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-700 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="font-bold text-neutral-300 block mb-1">
                    Target Exam
                  </label>
                  <input
                    type="text"
                    value={examInput}
                    onChange={(e) => setExamInput(e.target.value)}
                    placeholder="e.g. SSC CGL / RRB NTPC / State PSC"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-700 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-neutral-300 block mb-1">
                  Your Rating
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRatingInput(star)}
                      className="p-1 cursor-pointer"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= ratingInput ? 'text-amber-400 fill-amber-400' : 'text-neutral-600'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-amber-400 font-bold ml-2">{ratingInput}.0 / 5.0</span>
                </div>
              </div>

              <div>
                <label className="font-bold text-neutral-300 block mb-1">
                  Your Review *
                </label>
                <textarea
                  required
                  rows={3}
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  placeholder="Share your thoughts on question quality, speed shortcuts, and exam preparation..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-700 text-white focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-neutral-800 text-neutral-300 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-extrabold flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 fill-black" />
                  <span>Submit Review</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {submittedToast && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-emerald-900 border border-emerald-500 text-white text-xs font-bold shadow-2xl flex items-center gap-2 animate-in slide-in-from-bottom-5">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span>Thank you! Your review has been added successfully.</span>
        </div>
      )}
    </section>
  );
};
