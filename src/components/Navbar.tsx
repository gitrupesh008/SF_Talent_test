import React, { useState } from "react";
import { BrandLogo } from "./BrandLogo";
import {
  TRANSLATIONS,
  PLAY_STORE_APP_URL,
  WEB_PORTAL_URL,
} from "../data/translations";
import {
  Menu,
  X,
  Smartphone,
  BookOpen,
  UserCheck,
  Flame,
  MessageSquare,
  Sparkles,
  Monitor,
  ExternalLink,
} from "lucide-react";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS.en;

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-amber-500/20 shadow-md">
      {/* Top micro-announcement banner */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 py-1.5 px-4 text-center text-xs font-bold text-black flex items-center justify-center gap-2 overflow-hidden shadow-inner">
        <Flame className="w-3.5 h-3.5 animate-bounce text-red-950 shrink-0" />
        <span className="truncate">
          🔥 SF Talent Test Mega Online Exam • 01 November 2026 at 6:00 PM •
          ₹1,10,500 in prizes!
        </span>
        <div className="hidden sm:inline-flex items-center gap-2">
          <a
            href={PLAY_STORE_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-black text-amber-300 px-2.5 py-0.5 rounded text-[11px] font-bold hover:bg-neutral-900 transition-colors shrink-0">
            <Smartphone className="w-3 h-3" /> Get App
          </a>
          <a
            href={WEB_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-amber-950 text-amber-200 px-2.5 py-0.5 rounded text-[11px] font-bold hover:bg-black transition-colors shrink-0">
            <Monitor className="w-3 h-3" /> Web Portal
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Title */}
          <div
            className="flex items-center cursor-pointer select-none"
            onClick={() => handleNavClick("hero")}>
            <BrandLogo size="md" showText={true} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-neutral-300">
            <button
              onClick={() => handleNavClick("hero")}
              className="hover:text-amber-400 transition-colors py-1 cursor-pointer">
              {t.nav.home}
            </button>
            <button
              onClick={() => handleNavClick("app-features")}
              className="hover:text-amber-400 transition-colors py-1 cursor-pointer flex items-center gap-1 text-amber-300 font-bold">
              <Sparkles className="w-4 h-4 text-amber-400" />
              {t.nav.features}
            </button>
            <button
              onClick={() => handleNavClick("hero")}
              className="hover:text-amber-400 transition-colors py-1 cursor-pointer flex items-center gap-1">
              <BookOpen className="w-4 h-4 text-amber-500" />
              {t.nav.tests}
            </button>
            <button
              onClick={() => handleNavClick("faculty-section")}
              className="hover:text-amber-400 transition-colors py-1 cursor-pointer flex items-center gap-1">
              <UserCheck className="w-4 h-4 text-amber-500" />
              {t.nav.faculty}
            </button>
            <button
              onClick={() => handleNavClick("why-section")}
              className="hover:text-amber-400 transition-colors py-1 cursor-pointer">
              {t.nav.whySf}
            </button>
            <button
              onClick={() => handleNavClick("reviews-section")}
              className="hover:text-amber-400 transition-colors py-1 cursor-pointer flex items-center gap-1">
              <MessageSquare className="w-4 h-4 text-amber-500" />
              {t.nav.reviews}
            </button>
            <button
              onClick={() => handleNavClick("contact-section")}
              className="hover:text-amber-400 transition-colors py-1 cursor-pointer">
              {t.nav.contact}
            </button>
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2.5">
            {/* Desktop Web Portal Link */}
            <a
              href={WEB_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-amber-500/30 text-amber-300 font-bold text-xs transition-all"
              title="Access SF Talent Test on Laptop/PC">
              <Monitor className="w-3.5 h-3.5 text-amber-400" />
              <span>Web Portal</span>
              <ExternalLink className="w-3 h-3 text-neutral-400" />
            </a>

            {/* App Download CTA Button */}
            <a
              href={PLAY_STORE_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-neutral-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-amber-500/25 transition-all transform active:scale-95">
              <Smartphone className="w-4 h-4 fill-neutral-950" />
              <span>{t.nav.startAssessment}</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white cursor-pointer"
              aria-label="Toggle Navigation Menu">
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-neutral-950/95 border-b border-amber-500/30 px-5 pt-3 pb-6 space-y-3 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-neutral-800">
            <button
              onClick={() => handleNavClick("hero")}
              className="px-3 py-2.5 rounded-lg bg-neutral-900 text-left text-sm font-medium text-neutral-200 hover:bg-neutral-800">
              {t.nav.home}
            </button>
            <button
              onClick={() => handleNavClick("app-features")}
              className="px-3 py-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-left text-sm font-bold text-amber-300 hover:bg-amber-500/20 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              {t.nav.features}
            </button>
            <button
              onClick={() => handleNavClick("hero")}
              className="px-3 py-2.5 rounded-lg bg-neutral-900 text-left text-sm font-medium text-neutral-200 hover:bg-neutral-800 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-amber-500" />
              {t.nav.tests}
            </button>
            <button
              onClick={() => handleNavClick("faculty-section")}
              className="px-3 py-2.5 rounded-lg bg-neutral-900 text-left text-sm font-medium text-neutral-200 hover:bg-neutral-800 flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-amber-500" />
              {t.nav.faculty}
            </button>
            <button
              onClick={() => handleNavClick("why-section")}
              className="px-3 py-2.5 rounded-lg bg-neutral-900 text-left text-sm font-medium text-neutral-200 hover:bg-neutral-800">
              {t.nav.whySf}
            </button>
            <button
              onClick={() => handleNavClick("reviews-section")}
              className="px-3 py-2.5 rounded-lg bg-neutral-900 text-left text-sm font-medium text-neutral-200 hover:bg-neutral-800">
              {t.nav.reviews}
            </button>
            <button
              onClick={() => handleNavClick("contact-section")}
              className="px-3 py-2.5 rounded-lg bg-neutral-900 text-left text-sm font-medium text-neutral-200 hover:bg-neutral-800">
              {t.nav.contact}
            </button>
          </div>

          <div className="space-y-2 pt-1">
            <a
              href={PLAY_STORE_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-950 font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30">
              <Smartphone className="w-5 h-5 fill-neutral-950" />
              <span>{t.nav.startAssessment} (Android)</span>
            </a>

            <a
              href={WEB_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl bg-neutral-900 border border-amber-500/30 text-amber-300 font-bold text-center flex items-center justify-center gap-2">
              <Monitor className="w-4 h-4 text-amber-400" />
              <span>Open Web Portal on PC (sftalenttest.akamai.net.in) ↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
