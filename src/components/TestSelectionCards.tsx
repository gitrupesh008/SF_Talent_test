import React from 'react';
import { TestSeries } from '../types';
import { TRANSLATIONS, PLAY_STORE_APP_URL } from '../data/translations';
import { Clock, HelpCircle, Award, Smartphone, Flame, CheckCircle, ExternalLink } from 'lucide-react';

interface TestSelectionCardsProps {
  tests: TestSeries[];
}

export const TestSelectionCards: React.FC<TestSelectionCardsProps> = ({ tests }) => {
  const t = TRANSLATIONS.en;

  return (
    <section id="tests-section" className="py-16 md:py-24 bg-neutral-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            <span>National & State Exam Series</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            Available Assessment Modules on SF Academy App
          </h2>
          <p className="text-sm md:text-base text-neutral-300">
            Full-length timed assessments, real-time national percentile benchmarking, and Abdullah Sir video shortcut solutions are hosted on our official Android app. Download the app to begin practicing!
          </p>
        </div>

        {/* Test Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tests.map((test) => {
            const isFeatured = test.featured;

            return (
              <div
                key={test.id}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative overflow-hidden ${
                  isFeatured
                    ? 'bg-gradient-to-b from-neutral-900 via-neutral-900/90 to-amber-950/40 border-2 border-amber-500/60 shadow-2xl shadow-amber-500/20'
                    : 'glass-card border border-neutral-800 hover:border-amber-500/40 shadow-xl'
                }`}
              >
                {/* Glow for featured */}
                {isFeatured && (
                  <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                )}

                <div className="space-y-4">
                  {/* Top Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1.5 ${
                        isFeatured
                          ? 'bg-amber-500 text-black shadow-md shadow-amber-500/30'
                          : 'bg-neutral-800 text-amber-300 border border-neutral-700'
                      }`}
                    >
                      {test.badge.en || 'National Mock'}
                    </span>
                    <span className="text-xs text-neutral-400 font-semibold uppercase">
                      {test.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-extrabold text-white leading-snug group-hover:text-amber-300 transition-colors">
                      {test.title.en}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                      {test.subtitle.en}
                    </p>
                  </div>

                  {/* Metrics Badges */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-neutral-800/80">
                    <div className="p-2.5 rounded-xl bg-neutral-950/60 text-center border border-neutral-800/60">
                      <div className="flex items-center justify-center gap-1 text-amber-400 text-xs">
                        <Clock className="w-3 h-3" />
                        <span className="text-[11px] font-medium">{t.testEngine.duration}</span>
                      </div>
                      <p className="text-sm font-bold text-white mt-0.5">
                        {test.durationMinutes} mins
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-neutral-950/60 text-center border border-neutral-800/60">
                      <div className="flex items-center justify-center gap-1 text-amber-400 text-xs">
                        <HelpCircle className="w-3 h-3" />
                        <span className="text-[11px] font-medium">{t.testEngine.questions}</span>
                      </div>
                      <p className="text-sm font-bold text-white mt-0.5">
                        {test.questions.length} MCQs
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-neutral-950/60 text-center border border-neutral-800/60">
                      <div className="flex items-center justify-center gap-1 text-amber-400 text-xs">
                        <Award className="w-3 h-3" />
                        <span className="text-[11px] font-medium">{t.testEngine.marks}</span>
                      </div>
                      <p className="text-sm font-bold text-white mt-0.5">
                        {test.totalMarks} M
                      </p>
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="space-y-1.5 pt-2 text-xs text-neutral-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Aligined with Latest SSC, RRB & State PSC Patterns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Abdullah Sir Zero-Pen Shortcut Video Solutions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Real-time All-India Percentile & Accuracy Breakdown</span>
                    </div>
                  </div>
                </div>

                {/* Direct Link to Play Store App */}
                <div className="pt-6">
                  <a
                    href={PLAY_STORE_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all ${
                      isFeatured
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black shadow-amber-500/25'
                        : 'bg-neutral-800 hover:bg-amber-500 hover:text-black text-white border border-neutral-700'
                    }`}
                  >
                    <Smartphone className="w-4 h-4 fill-current" />
                    <span>Take Test on App 📱</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
