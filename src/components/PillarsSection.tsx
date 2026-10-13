import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, PLAY_STORE_APP_URL } from '../data/translations';
import { Sparkles } from 'lucide-react';

interface PillarsSectionProps {
  lang?: Language;
  onTakeTestClick?: () => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = () => {
  const t = TRANSLATIONS.en;

  return (
    <section id="why-section" className="py-16 md:py-24 bg-neutral-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SF Talent Test Mission</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            {t.pillars.title}
          </h2>
          <p className="text-sm md:text-base text-neutral-400">
            {t.pillars.subtitle}
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.pillars.items.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl group-hover:bg-amber-500/15 transition-all" />

              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-neutral-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 4-Step Action Workflow Banner */}
        <div className="mt-16 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-amber-950/30 border border-amber-500/30 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
              {t.workflow.title}
            </h3>
            <p className="text-sm text-amber-300/90 mt-1 font-semibold">
              Practice Diligently → Test Yourself → Eliminate Errors → Achieve Government Selection!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {t.workflow.steps.map((st, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-neutral-950/70 border border-neutral-800/80 relative text-center md:text-left space-y-2 hover:border-amber-500/40 transition-all"
              >
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-black text-sm mb-1 shadow-md shadow-amber-500/30">
                  {st.step}
                </div>
                <h4 className="text-base font-bold text-white flex items-center justify-center md:justify-start gap-1.5">
                  <span>{st.title}</span>
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Workflow Bottom Call to Action */}
          <div className="mt-8 pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-base font-bold text-amber-300">
                {t.workflow.conclusion}
              </p>
              <p className="text-xs text-neutral-400">
                Reach new heights in your career and turn your civil and government aspirations into reality.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={PLAY_STORE_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm transition-all shadow-lg shadow-amber-500/20"
              >
                Take Test on App 📱
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
