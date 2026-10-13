import React from 'react';
import { TRANSLATIONS, PLAY_STORE_APP_URL, WEB_PORTAL_URL } from '../data/translations';
import {
  Flame,
  Target,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Smartphone,
  Trophy,
  Users,
  GraduationCap,
  ShieldCheck,
  Monitor,
  ExternalLink,
  BarChart3,
  Video,
} from 'lucide-react';

interface HeroSectionProps {
  onStartAssessment?: () => void;
  onExploreTests: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreTests,
}) => {
  const t = TRANSLATIONS.en;

  const examTags = [
    'SSC CGL / CHSL',
    'RRB NTPC / Group D',
    'Banking (IBPS / SBI)',
    'State PSCs & Civil Services',
    'Police SI & Constable',
    'Defence & Teaching',
  ];

  const appHighlights = [
    { icon: Sparkles, text: 'Real CBT Test Engine' },
    { icon: BarChart3, text: 'Instant AIR & Analytics' },
    { icon: Video, text: 'Abdullah Sir Video Tricks' },
    { icon: Monitor, text: 'App + Web Portal Sync' },
  ];

  return (
    <section id="hero" className="relative pt-6 pb-20 md:pt-12 md:pb-28 overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Floating Fire Banner */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20 border border-amber-500/40 shadow-lg shadow-amber-500/15 backdrop-blur-md animate-pulse">
            <span className="text-sm md:text-base font-extrabold text-amber-300 tracking-wide">
              {t.hero.fireSlogan}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headlines & Exam Scope */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Target Scope Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-900/90 border border-amber-500/30 text-amber-400 font-bold text-xs sm:text-sm">
              <Target className="w-4 h-4 text-amber-400" />
              <span>National & State Competitive Exam Assessment Portal</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Benchmark Your Readiness,{' '}
              <span className="gold-gradient-text block mt-1">
                Conquer National & State Exams!
              </span>
            </h1>

            {/* Questions to the Aspirant */}
            <div className="space-y-2.5 bg-neutral-900/60 p-4 md:p-5 rounded-2xl border border-neutral-800/80 backdrop-blur-sm">
              {t.hero.subQuestions.map((q, idx) => (
                <div key={idx} className="flex items-center gap-3 text-neutral-200 text-sm md:text-base font-medium text-left">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 text-xs font-bold">
                    ✓
                  </span>
                  <span>{q}</span>
                </div>
              ))}
            </div>

            {/* App Features Quick Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-left">
              {appHighlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-neutral-900/80 border border-amber-500/25 flex items-center gap-2 text-xs font-semibold text-neutral-200"
                  >
                    <Icon className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="truncate">{item.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Supported Exam Tags Pill Cloud */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {examTags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 font-semibold flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Call to action headline */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/15 via-amber-400/10 to-transparent border-l-4 border-amber-500 text-left">
              <p className="text-lg md:text-xl font-extrabold text-amber-300">
                {t.hero.callToActionHeadline}
              </p>
              <p className="text-xs md:text-sm text-neutral-300 mt-1 font-medium">
                {t.hero.subjectsTag}
              </p>
            </div>

            {/* Abdullah Maths Faculty Banner Box */}
            <div className="relative p-5 rounded-2xl bg-gradient-to-br from-amber-950/40 via-neutral-900/90 to-neutral-950 border-2 border-amber-500/50 shadow-xl shadow-amber-950/40 overflow-hidden text-left">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-amber-500/20 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 shrink-0 mt-0.5">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500 text-black font-extrabold uppercase">
                      Special Highlight
                    </span>
                    <span className="text-xs text-amber-400 font-semibold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Senior Mathematics Faculty
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-neutral-100 font-bold leading-snug">
                    {t.hero.facultyBanner}
                  </p>
                  <p className="text-xs text-amber-300/90 font-semibold pt-1">
                    {t.hero.tripletGuarantee}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons to Play Store App & Web Portal */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
              <a
                href={PLAY_STORE_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-black font-extrabold text-base shadow-xl shadow-amber-500/30 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5"
              >
                <Smartphone className="w-5 h-5 fill-black" />
                <span>Download Android App 📱</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={WEB_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 border border-amber-500/40 hover:border-amber-400 text-amber-300 font-bold text-base flex items-center justify-center gap-2.5 transition-all shadow-md"
              >
                <Monitor className="w-5 h-5 text-amber-400" />
                <span>Web Portal (PC) 💻</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
              </a>

              <a
                href="#app-features"
                className="w-full sm:w-auto px-5 py-4 rounded-xl bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 font-semibold text-sm flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Explore App Features</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Emblem */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md mx-auto">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-amber-500/20 via-yellow-500/10 to-transparent blur-2xl pointer-events-none" />

              <div className="relative p-6 sm:p-8 rounded-3xl glass-panel gold-border-glow shadow-2xl text-center space-y-6">
                {/* Large Center Emblem */}
                <div className="relative inline-block mx-auto">
                  <div className="w-44 h-44 sm:w-52 sm:h-52 mx-auto rounded-full p-1.5 bg-gradient-to-tr from-amber-600 via-amber-300 to-yellow-500 shadow-2xl shadow-amber-500/40 relative group">
                    <img
                      src="/src/assets/logo.jpg"
                      alt="SF Talent Test Official Logo"
                      className="w-full h-full rounded-full object-cover ring-2 ring-amber-400/50"
                    />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-black/90 border border-amber-400/80 text-[11px] font-black tracking-wider text-amber-300 uppercase shadow-lg whitespace-nowrap">
                      All-India Portal
                    </div>
                  </div>
                </div>

                {/* Subtitle Card */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    SF TALENT TEST <span className="gold-gradient-text">2025-2026</span>
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed font-medium">
                    The premier competitive examination benchmarking platform for Central & State Government job aspirants across India.
                  </p>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-2.5 pt-2 text-left">
                  <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800">
                    <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold">
                      <Users className="w-3.5 h-3.5" />
                      <span>Pan-India Aspirants</span>
                    </div>
                    <p className="text-base font-bold text-white mt-0.5">50,000+</p>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800">
                    <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold">
                      <Trophy className="w-3.5 h-3.5" />
                      <span>Govt Selections</span>
                    </div>
                    <p className="text-base font-bold text-white mt-0.5">1,200+</p>
                  </div>
                </div>

                {/* Quick Start Button inside Card */}
                <button
                  onClick={onExploreTests}
                  className="w-full py-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Exam Test Modules</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
