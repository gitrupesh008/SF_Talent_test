import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, PLAY_STORE_APP_URL } from '../data/translations';
import {
  Sparkles,
  Smartphone,
  Star,
  Flame,
} from 'lucide-react';
import facultyImage from '../assets/abdullah-sir.png';

interface FacultySpotlightProps {
  lang?: Language;
  onExploreSpecialMaths?: () => void;
}

export const FacultySpotlight: React.FC<FacultySpotlightProps> = () => {
  const t = TRANSLATIONS.en;

  return (
    <section id="faculty-section" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-neutral-900/90 via-neutral-900/80 to-amber-950/40 border border-amber-500/40 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Col: Faculty Image & Badge */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative">
                {/* Outer frame */}
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl p-2 bg-gradient-to-tr from-amber-600 via-amber-300 to-yellow-500 shadow-2xl shadow-amber-500/30 rotate-1 group">
                  <img
                    src={facultyImage}
                    alt="Abdullah Sir, Senior Mathematics and Aptitude Faculty"
                    className="w-full h-full rounded-2xl bg-white object-contain"
                  />
                </div>

                <div className="mt-4 text-center">
                  <h4 className="text-xl font-black text-white">
                    Abdullah Sir
                  </h4>
                  <p className="text-xs text-amber-300 font-bold uppercase tracking-wider mt-0.5">
                    Senior Mathematics & Aptitude Faculty
                  </p>
                  <p className="text-[11px] text-neutral-400 mt-1">
                    15+ Years Mentoring All-India & State Exam Aspirants
                  </p>
                </div>

                <div className="mt-3 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-extrabold text-xs shadow-lg uppercase tracking-wider whitespace-nowrap flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 fill-black" />
                  <span>National & State Exam Mentor</span>
                </div>
              </div>

              {/* Quick ratings & students */}
              <div className="mt-8 flex items-center gap-4 text-xs text-neutral-300">
                <div className="flex items-center gap-1 text-amber-400 font-bold">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="ml-1 text-white">4.9 / 5.0</span>
                </div>
                <span>•</span>
                <span className="text-neutral-400 font-medium">1,200+ Government Officers Trained</span>
              </div>
            </div>

            {/* Right Col: Faculty Bio & Strengths */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.facultySection.tag}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                  {t.facultySection.title}
                </h3>
                <p className="text-base text-amber-300 font-semibold">
                  {t.facultySection.subtitle}
                </p>
              </div>

              <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
                {t.facultySection.description}
              </p>

              {/* Highlights Bullet List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {t.facultySection.highlights.map((hl, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-xs sm:text-sm text-neutral-200 font-medium flex items-start gap-2.5"
                  >
                    <span className="text-amber-400 font-bold shrink-0 mt-0.5">✦</span>
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Call to action within faculty section */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={PLAY_STORE_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-extrabold text-sm shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-yellow-400 transition-all flex items-center gap-2"
                >
                  <Smartphone className="w-4 h-4 fill-black" />
                  <span>Join Abdullah Sir’s Courses on App</span>
                </a>

                <a
                  href={PLAY_STORE_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-bold text-sm border border-neutral-700 transition-all flex items-center gap-2"
                >
                  <Smartphone className="w-4 h-4 text-amber-400" />
                  <span>Watch Video Lectures on App</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
