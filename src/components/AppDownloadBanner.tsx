import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, PLAY_STORE_APP_URL, WEB_PORTAL_URL } from '../data/translations';
import {
  Smartphone,
  Monitor,
  ExternalLink,
  Star,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import appPortalQr from '../assets/sf-app-portal-qr.png';

interface AppDownloadBannerProps {
  lang?: Language;
}

export const AppDownloadBanner: React.FC<AppDownloadBannerProps> = () => {
  const t = TRANSLATIONS.en;

  return (
    <section id="app-section" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-8 sm:p-12 md:p-14 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900/95 to-amber-950/50 border-2 border-amber-500/40 shadow-2xl overflow-hidden">
          {/* Subtle gold flare circle */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.appBanner.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                {t.appBanner.title}
              </h2>

              <p className="text-sm sm:text-base text-amber-200/90 leading-relaxed font-semibold">
                {t.appBanner.subtitle}
              </p>

              {/* Bullet points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {t.appBanner.bulletPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-neutral-950/70 border border-neutral-800 text-xs sm:text-sm text-neutral-200 font-medium flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400 font-bold shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* App & Portal Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-3">
                <a
                  href={PLAY_STORE_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-black font-extrabold text-base shadow-xl shadow-amber-500/30 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5"
                >
                  <Smartphone className="w-5 h-5 fill-black" />
                  <span>{t.appBanner.buttonText}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={WEB_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-neutral-950 hover:bg-neutral-800 border-2 border-amber-500/50 hover:border-amber-400 text-amber-300 font-bold text-base shadow-xl flex items-center justify-center gap-2.5 transition-all"
                >
                  <Monitor className="w-5 h-5 text-amber-400" />
                  <span>{t.appBanner.webPortalButton}</span>
                </a>
              </div>

              {/* App rating pill */}
              <div className="flex items-center gap-3 text-xs text-neutral-400 pt-1">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span>4.8 Rating • 10,000+ Downloads on Play Store</span>
              </div>
            </div>

            {/* Right: Phone Mockup & QR Code */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm p-6 rounded-3xl bg-neutral-950/90 border border-amber-500/30 text-center space-y-5 shadow-2xl">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 mx-auto">
                  <Smartphone className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">
                    SF Android App & Portal
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {t.appBanner.scanQr}
                  </p>
                </div>

                {/* Official app QR code */}
                <div className="p-4 rounded-2xl bg-white mx-auto inline-block shadow-lg border-4 border-amber-400/80">
                  <a
                    href={PLAY_STORE_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                    title="Click or Scan to Open Play Store"
                  >
                    <img
                      src={appPortalQr}
                      alt="Scan to open the SF Talent Test app"
                      className="w-36 h-36 mx-auto object-contain transition-transform group-hover:scale-105"
                    />
                  </a>
                </div>

                <div className="pt-1 space-y-1">
                  <a
                    href={PLAY_STORE_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-amber-400 hover:text-amber-300 font-bold underline inline-flex items-center gap-1"
                  >
                    <span>Click here for Google Play App</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <div>
                    <a
                      href={WEB_PORTAL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-neutral-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1"
                    >
                      <Monitor className="w-3 h-3 text-amber-400" />
                      <span>Or open sftalenttest.akamai.net.in on PC</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
