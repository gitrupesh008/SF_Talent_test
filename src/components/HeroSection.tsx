import React from "react";
import { BUSINESS_INFO, PLAY_STORE_APP_URL } from "../data/translations";
import {
  Sparkles,
  ArrowRight,
  Smartphone,
  Trophy,
  CalendarDays,
  Phone,
} from "lucide-react";

interface HeroSectionProps {
  onStartAssessment?: () => void;
  onExploreTests: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreTests }) => {
  return (
    <section
      id="hero"
      className="relative pt-6 pb-20 md:pt-12 md:pb-28 overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Event announcement banner */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20 border border-amber-500/40 shadow-lg shadow-amber-500/15 backdrop-blur-md animate-pulse">
            <span className="text-sm md:text-base font-extrabold text-amber-300 tracking-wide">
              Are you preparing for competitive exams? This is your chance to
              prove your mettle!
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Event details and registration */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Event title */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-900/90 border border-amber-500/30 text-amber-400 font-bold text-xs sm:text-sm">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Abdullah Academy presents</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              SF Talent Test
              <span className="gold-gradient-text block mt-1">
                Mega Online Exam
              </span>
            </h1>

            <p className="text-base md:text-lg text-neutral-200 leading-relaxed">
              Welcome, everyone! Put your General Knowledge, Aptitude,
              Reasoning, and Current Affairs skills to the test—and compete for
              an incredible prize pool.
            </p>

            <div className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl bg-neutral-900/80 border border-amber-500/40 text-amber-200 font-bold text-sm md:text-base">
              <CalendarDays className="w-5 h-5 text-amber-400 shrink-0" />
              <span>
                15 November 2026{" "}
                <span className="text-neutral-500 mx-1">•</span> 6:00 PM
              </span>
            </div>

            {/* Prize pool highlight */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-950/50 via-neutral-900/90 to-neutral-950 border-2 border-amber-500/50 shadow-xl shadow-amber-950/30 text-left">
              <div className="flex items-center gap-2 text-amber-300 font-extrabold">
                <Trophy className="w-5 h-5" />
                <span>
                  An amazing opportunity to win over ₹1 lakh in prize money!
                </span>
              </div>
              <p className="text-sm text-neutral-200 mt-2">
                A total of ₹1,10,500 is up for grabs!
              </p>
              <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                <div className="p-3 rounded-xl bg-neutral-950/70 border border-amber-500/20">
                  <p className="text-xs text-neutral-400">1st Rank</p>
                  <p className="text-base md:text-lg font-black text-white">
                    ₹20,000
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-neutral-950/70 border border-amber-500/20">
                  <p className="text-xs text-neutral-400">2nd Rank</p>
                  <p className="text-base md:text-lg font-black text-white">
                    ₹18,000
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-neutral-950/70 border border-amber-500/20">
                  <p className="text-xs text-neutral-400">3rd Rank</p>
                  <p className="text-base md:text-lg font-black text-white">
                    ₹15,000
                  </p>
                </div>
              </div>
              <p className="text-xs md:text-sm text-neutral-300 mt-3">
                Substantial cash prizes are also available for ranks 13 through
                25!
              </p>
            </div>

            <p className="text-sm text-neutral-300">
              Showcase your{" "}
              <span className="text-amber-300 font-semibold">
                General Knowledge, Aptitude, Reasoning & Current Affairs
              </span>{" "}
              skills.
            </p>

            {/* Registration and enquiry actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
              <a
                href={PLAY_STORE_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-black font-extrabold text-base shadow-xl shadow-amber-500/30 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5">
                <Smartphone className="w-5 h-5 fill-black" />
                <span>Download on Google Play 📱</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_INFO.phoneHref}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 border border-amber-500/40 hover:border-amber-400 text-amber-300 font-bold text-base flex items-center justify-center gap-2.5 transition-all shadow-md">
                <Phone className="w-5 h-5 text-amber-400" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href={PLAY_STORE_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-4 rounded-xl bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 font-semibold text-sm flex items-center justify-center gap-1.5 transition-all">
                <span>Don’t delay—register today!</span>
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

                {/* Event summary card */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    SF TALENT TEST{" "}
                    <span className="gold-gradient-text">MEGA ONLINE EXAM</span>
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed font-medium">
                    Join Abdullah Academy on 15 November 2026 at 6:00 PM.
                    Download the SF Talent Test app from Google Play and
                    register to take part.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-900/80 border border-amber-500/30">
                  <div className="flex items-center justify-center gap-2 text-amber-300 text-sm font-bold">
                    <Trophy className="w-4 h-4" />
                    <span>Total Cash Prizes</span>
                  </div>
                  <p className="text-3xl font-black text-white mt-1">
                    ₹1,10,500
                  </p>
                  <p className="text-xs text-neutral-400 mt-1">
                    ₹20,000 for 1st, ₹18,000 for 2nd, ₹15,000 for 3rd, plus
                    substantial cash prizes for ranks 13–25
                  </p>
                </div>

                {/* Quick Start Button inside Card */}
                <button
                  onClick={onExploreTests}
                  className="w-full py-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer">
                  <span>Get ready to prove your mettle!</span>
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
