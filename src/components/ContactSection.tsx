import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS, BUSINESS_INFO } from '../data/translations';
import {
  Phone,
  MapPin,
  FileBadge,
  MessageCircle,
  Copy,
  Check,
  Sparkles,
} from 'lucide-react';

interface ContactSectionProps {
  lang?: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const t = TRANSLATIONS.en;
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address.fullFormatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact-section" className="py-16 md:py-24 relative overflow-hidden bg-neutral-950/90">
      {/* Background subtle radial glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.contact.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            {t.contact.title}
          </h2>
          <p className="text-sm md:text-base text-neutral-400">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Registration & Contact Info Card */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Official Registration Badge */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent border-l-4 border-amber-500 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 shrink-0">
                  <FileBadge className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-amber-400 block">
                    {t.contact.regLabel}
                  </span>
                  <p className="text-lg sm:text-xl font-black text-white tracking-wide mt-0.5">
                    {BUSINESS_INFO.udyamReg}
                  </p>
                  <p className="text-xs text-neutral-300 font-semibold mt-0.5">
                    Entity: <span className="text-amber-300 font-bold">{BUSINESS_INFO.name}</span>
                  </p>
                </div>
              </div>

              {/* Phone Information */}
              <div className="p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-amber-400">
                    <Phone className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {t.contact.phoneTitle}
                    </span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold">
                    Live Support
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                  <div>
                    <a
                      href={BUSINESS_INFO.phoneHref}
                      className="text-2xl sm:text-3xl font-black text-white hover:text-amber-400 transition-colors tracking-wide"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                    <p className="text-xs text-neutral-400 mt-1">
                      {t.contact.officeHours}
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <a
                      href={BUSINESS_INFO.phoneHref}
                      className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs flex items-center gap-2 transition-all shadow-md shadow-amber-500/20"
                    >
                      <Phone className="w-3.5 h-3.5 fill-black" />
                      <span>{t.contact.callNow}</span>
                    </a>
                    <a
                      href={BUSINESS_INFO.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-600/20"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-amber-400">
                    <MapPin className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {t.contact.addressTitle}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-medium text-neutral-300 transition-colors cursor-pointer"
                    title="Copy full address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-sm text-neutral-200 leading-relaxed font-medium">
                  <p className="font-bold text-white text-base">
                    {BUSINESS_INFO.name}
                  </p>
                  <p className="text-amber-200/90">{BUSINESS_INFO.address.shopAndFloor}</p>
                  <p className="text-neutral-300">{BUSINESS_INFO.address.landmark}</p>
                  <p className="text-neutral-300">
                    {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} - {BUSINESS_INFO.address.pincode}
                  </p>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider mt-1">
                    {BUSINESS_INFO.address.country}
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps External Action Button */}
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-amber-500/40 text-amber-300 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{t.contact.getDirections}</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive Location & Quick Query Panel */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-neutral-800 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Direct Faculty & Batch Enquiry</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white">
                Preparing for Central or State Exams?
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Connect with our academic team for queries regarding online courses, Abdullah Sir's arithmetic batches, upcoming talent assessments, and syllabus guidance for SSC, Railways, Banking, and State PSC exams.
              </p>

              {/* Key Highlights of the Centre */}
              <div className="space-y-2.5 pt-2 text-xs text-neutral-300">
                <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <span>Dedicated Mentorship for Central & State Aspirants</span>
                </div>
                <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span>Exclusive Speed Maths & Shortcut Method Workshops</span>
                </div>
                <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                  <span>Full-Length All-India Assessments on Mobile App</span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-neutral-800/80">
              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat with Academic Counselors on WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneHref}
                className="w-full py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Helpline: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
