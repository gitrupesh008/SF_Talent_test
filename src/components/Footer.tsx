import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Language } from '../types';
import { TRANSLATIONS, PLAY_STORE_APP_URL, WEB_PORTAL_URL, BUSINESS_INFO, FACEBOOK_PAGE_URL } from '../data/translations';
import {
  Smartphone,
  Phone,
  MapPin,
  FileBadge,
  MessageCircle,
  ThumbsUp,
  Monitor,
  ExternalLink,
} from 'lucide-react';

interface FooterProps {
  lang?: Language;
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const t = TRANSLATIONS.en;

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Col 1: Logo, Mission & Udyam Registration */}
          <div className="md:col-span-4 space-y-4">
            <BrandLogo size="lg" showText={true} />
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Empowering competitive exam aspirants across India with standard exam questions, high-speed calculation shortcuts, and rigorous real-time benchmarks for both National (SSC, RRB, Banking) and State-Level examinations.
            </p>

            {/* Official Udyam Registration Block */}
            <div className="p-3.5 rounded-2xl bg-neutral-900/90 border border-amber-500/30 space-y-1">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <FileBadge className="w-4 h-4" />
                <span>Govt. of India MSME / Udyam Reg.</span>
              </div>
              <p className="font-mono text-sm font-black text-white tracking-wide">
                {BUSINESS_INFO.udyamReg}
              </p>
              <p className="text-[11px] text-neutral-400 font-medium">
                Registered Entity: <span className="text-amber-300 font-bold">{BUSINESS_INFO.name}</span>
              </p>
            </div>
          </div>

          {/* Col 2: Official Address & Business Phone */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span>Head Office Address & Contact</span>
            </h4>

            {/* Complete Address */}
            <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-2 text-xs text-neutral-300 leading-relaxed">
              <p className="font-bold text-white text-sm">
                {BUSINESS_INFO.name}
              </p>
              <p className="font-medium text-neutral-200">
                {BUSINESS_INFO.address.shopAndFloor}
              </p>
              <p className="text-amber-300/90 font-semibold">
                {BUSINESS_INFO.address.landmark}
              </p>
              <p className="text-neutral-300">
                {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} - {BUSINESS_INFO.address.pincode}
              </p>
              <p className="text-neutral-400 uppercase text-[11px]">
                {BUSINESS_INFO.address.country}
              </p>
            </div>

            {/* Phone & WhatsApp Quick Connect */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs">
                <Phone className="w-4 h-4 text-amber-400" />
                <span className="text-neutral-400">Helpline:</span>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="font-bold text-white hover:text-amber-400 transition-colors text-sm"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2 pt-1 flex-wrap">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3 h-3 fill-black" />
                  <span>Call Now</span>
                </a>
                <a
                  href={BUSINESS_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3 h-3 fill-white" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={FACEBOOK_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <ThumbsUp className="w-3 h-3 fill-white" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation & Android App / Web Portal */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigation & Portals
            </h4>

            <ul className="grid grid-cols-2 gap-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('app-features')}
                  className="hover:text-amber-400 text-amber-300 font-semibold transition-colors cursor-pointer text-left"
                >
                  {t.nav.features}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tests-section')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  {t.nav.tests}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faculty-section')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  {t.nav.faculty}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why-section')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  {t.nav.whySf}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('leaderboard-section')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  {t.nav.leaderboard}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('reviews-section')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  {t.nav.reviews}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact-section')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>

            {/* Official App & Web Portal Boxes */}
            <div className="space-y-2.5">
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 space-y-1.5">
                <div className="flex items-center justify-between text-amber-300 font-bold text-xs">
                  <div className="flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Android Mobile App</span>
                  </div>
                  <span className="text-[10px] text-amber-400/80">Play Store</span>
                </div>
                <p className="text-[11px] text-neutral-400">
                  Timed talent tests, video classes by Abdullah Sir, and live All-India percentiles.
                </p>
                <a
                  href={PLAY_STORE_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 pt-0.5"
                >
                  <span>Download on Google Play</span>
                  <span>→</span>
                </a>
              </div>

              <div className="p-3.5 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-1.5">
                <div className="flex items-center justify-between text-white font-bold text-xs">
                  <div className="flex items-center gap-1.5 text-amber-300">
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Desktop Web Portal</span>
                  </div>
                  <span className="text-[10px] text-neutral-400">PC / Laptop</span>
                </div>
                <p className="text-[11px] text-neutral-400 font-mono">
                  sftalenttest.akamai.net.in
                </p>
                <a
                  href={WEB_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 pt-0.5"
                >
                  <span>Launch Web Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-12 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} <span className="text-neutral-300 font-bold">{BUSINESS_INFO.name}</span>. All rights reserved. UDYAM Reg: {BUSINESS_INFO.udyamReg}.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span>All-India & State Exam Aspirants</span>
            <span>•</span>
            <a
              href={WEB_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400/80 hover:text-amber-300"
            >
              Web Portal (sftalenttest.akamai.net.in)
            </a>
            <span>•</span>
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400/80 hover:text-amber-300"
            >
              Follow Official Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
