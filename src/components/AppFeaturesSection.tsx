import React from "react";
import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  ExternalLink,
  Monitor,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { PLAY_STORE_APP_URL, WEB_PORTAL_URL } from "../data/translations";

const featureAreas = [
  {
    number: "01",
    title: "Core Academic & Competitive Subjects",
    description:
      "Build a strong foundation in the subjects that matter for competitive exams, with focused learning and practice.",
    points: [
      "Quantitative Aptitude and Arithmetic",
      "Logical Reasoning and problem-solving",
      "General Knowledge and core exam topics",
    ],
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Current Affairs & Daily Preparation",
    description:
      "Keep your preparation consistent with regular revision and awareness of important events.",
    points: [
      "Current affairs and general awareness",
      "Daily practice and revision",
      "Build a steady, focused study routine",
    ],
    icon: CalendarDays,
  },
  {
    number: "03",
    title: "Interactive Tests & Assessments",
    description:
      "Put your preparation into practice through online tests designed to help you assess your readiness.",
    points: [
      "Timed online tests and assessments",
      "Practice across key competitive subjects",
      "Review results to identify areas to improve",
    ],
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Mission & Purpose",
    description:
      "SF TALENT TEST aims to make focused exam preparation and self-assessment accessible to aspiring learners.",
    points: [
      "Encourage learning through consistent practice",
      "Help candidates understand their strengths",
      "Support aspirants on their competitive-exam journey",
    ],
    icon: Compass,
  },
];

export const AppFeaturesSection: React.FC = () => {
  return (
    <section
      id="app-features"
      className="relative overflow-hidden bg-[#090b10] py-20 md:py-28">
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-amber-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-96 w-96 rounded-full bg-yellow-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center md:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/35 bg-amber-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 shadow-md shadow-amber-500/10 sm:text-sm">
            <Sparkles className="h-4 w-4" />
            <span>Explore the SF TALENT TEST Portal</span>
          </div>

          <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl md:text-5xl">
            Learning and Preparation, All in One Place
          </h2>

          <p className="text-sm leading-relaxed text-neutral-300 sm:text-base md:text-lg">
            From the SF TALENT TEST portal, access learning and preparation
            materials across four key areas—academic subjects, daily
            preparation, interactive assessments, and a mission to support every
            aspirant.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs font-semibold text-neutral-200 sm:text-sm">
            <span className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2">
              <Smartphone className="h-4 w-4 text-amber-400" />
              Android app on Google Play
            </span>
            <span className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2">
              <Monitor className="h-4 w-4 text-amber-400" />
              Online portal access
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
          {featureAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.number}
                className="group relative overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900/95 to-neutral-950 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 sm:p-7">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-500/5 blur-2xl transition-colors group-hover:bg-amber-500/15" />

                <div className="relative">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/10 text-amber-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-black tracking-widest text-amber-500/70">
                      {area.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold leading-snug text-white sm:text-2xl">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                    {area.description}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {area.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-neutral-200">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={PLAY_STORE_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 px-6 py-3.5 text-sm font-extrabold text-black shadow-lg shadow-amber-500/20 transition hover:from-amber-400 hover:to-yellow-400 sm:w-auto">
            <Smartphone className="h-4 w-4" />
            Explore the SF Talent Test App
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a
            href={WEB_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-amber-500/40 bg-neutral-900 px-6 py-3.5 text-sm font-bold text-amber-300 transition hover:border-amber-400 hover:bg-neutral-800 sm:w-auto">
            <Monitor className="h-4 w-4" />
            Visit the Web Portal
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
