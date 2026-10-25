<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import { TRANSLATIONS, PLAY_STORE_APP_URL, WEB_PORTAL_URL } from '../data/translations';
import {
  Smartphone,
  Monitor,
  Flame,
  Award,
  BarChart3,
  Video,
  CalendarCheck,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Clock,
  Trophy,
  ArrowRight,
  ShieldCheck,
  FileText,
  Gift,
  HelpCircle,
  Eye,
} from 'lucide-react';

export const AppFeaturesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'cbt' | 'analytics' | 'video' | 'daily' | 'prizes' | 'portal'
  >('cbt');

  const t = TRANSLATIONS.en;

  const tabs = [
    {
      id: 'cbt' as const,
      name: 'Real CBT Test Engine',
      shortName: 'CBT Test Engine',
      icon: Clock,
      badge: 'Exact Exam Mode',
    },
    {
      id: 'analytics' as const,
      name: 'AIR & Detailed Analytics',
      shortName: 'AIR & Scorecard',
      icon: BarChart3,
      badge: 'National Rank',
    },
    {
      id: 'video' as const,
      name: 'Abdullah Sir Video Solutions',
      shortName: 'Video Shortcuts',
      icon: Video,
      badge: 'Zero-Pen Tricks',
    },
    {
      id: 'daily' as const,
      name: 'Daily Quizzes & Current Affairs',
      shortName: 'Daily Quizzes',
      icon: CalendarCheck,
      badge: 'Daily Streak',
    },
    {
      id: 'prizes' as const,
      name: 'Mega Talent Tests & Prizes',
      shortName: 'Prizes & Rewards',
      icon: Trophy,
      badge: 'Win Laptops & Medals',
    },
    {
      id: 'portal' as const,
      name: 'Desktop Web Portal Access',
      shortName: 'PC Web Portal',
      icon: Monitor,
      badge: 'sftalenttest.akamai.net.in',
    },
  ];

  return (
    <section id="app-features" className="py-20 md:py-28 bg-[#090b10] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-yellow-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/35 text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md shadow-amber-500/10">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Official Mobile App & Web Portal Features</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight">
            Everything Inside The{' '}
            <span className="gold-gradient-text">SF Talent Test</span> Platform
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed">
            Built specifically for serious candidates targeting Central & State Government examinations.
            Experience standard exam-level questions, instant All-India rankings, zero-pen video solutions by
            Abdullah Sir, and seamless access across both Android Mobile and Desktop Web Browser.
          </p>

          {/* Access Banner (Dual App & Web) */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-700 text-xs font-semibold text-neutral-200">
              <Smartphone className="w-3.5 h-3.5 text-amber-400" /> Android App on Play Store
            </span>
            <span className="text-neutral-500">•</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-700 text-xs font-semibold text-neutral-200">
              <Monitor className="w-3.5 h-3.5 text-amber-400" /> Desktop Web: sftalenttest.akamai.net.in
            </span>
            <span className="text-neutral-500">•</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-700 text-xs font-semibold text-neutral-200">
              <Flame className="w-3.5 h-3.5 text-amber-400" /> 50,000+ Nationwide Aspirants
>>>>>>> 5d1a04638ab87a1afae55181e6c8f23368dc9e2c
            </span>
          </div>
        </div>

<<<<<<< HEAD
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
=======
        {/* Feature Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-4 mb-10 no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2.5 transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black shadow-lg shadow-amber-500/25 scale-[1.02]'
                    : 'bg-neutral-900/90 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-black' : 'text-amber-400'}`} />
                <span>{tab.shortName}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                    isSelected ? 'bg-black/20 text-black' : 'bg-neutral-800 text-amber-300 border border-neutral-700'
                  }`}
                >
                  {tab.badge}
                </span>
              </button>
>>>>>>> 5d1a04638ab87a1afae55181e6c8f23368dc9e2c
            );
          })}
        </div>

<<<<<<< HEAD
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
=======
        {/* Interactive App Screen & Feature Walkthrough Showcase */}
        <div className="rounded-3xl bg-gradient-to-b from-neutral-900 via-neutral-900/90 to-neutral-950 border-2 border-amber-500/30 p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Deep-dive Content */}
            <div className="lg:col-span-6 space-y-5">
              {activeTab === 'cbt' && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Real-Time CBT Examination Interface</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                    Experience Authentic TCS & Govt Exam Day Conditions
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    The SF Talent Test app simulator perfectly mirrors the official computer-based testing interface used in SSC CGL, RRB NTPC, Banking, and State PSC examinations. Master your time pacing, avoid panic, and develop exam-day confidence under authentic conditions.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">Full Interactive Question Palette</h4>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          Track Answered (Green), Not Answered (Red), Marked for Review (Purple), and Not Visited (Gray) states in real time.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">Countdown Timer & Negative Marking</h4>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          Strict section timers and authentic 0.25 / 0.33 negative marking to train zero-guesswork accuracy.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">Bilingual Questions & Clear Typography</h4>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          Crystal-clear mathematical equations, diagrams, and readable options formatted for effortless skimming.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'analytics' && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase">
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>Post-Test Performance Analytics</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                    Know Your National Standing with Real-Time AIR & Diagnostic Scorecard
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    Stop guessing where you stand. The moment you submit your test, the SF platform analyzes your performance against thousands of serious candidates across India, pinpointing your exact rank, accuracy rate, and time management efficiency.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">Real-Time All-India Ranking & Percentile</h4>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          Instant calculation of your national percentile (e.g. Top 98.6%) and rank among active test participants.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">Topic-Level Diagnostic Breakdown</h4>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          Identify whether percentages, syllogisms, or static GK cost you marks so you know what to revise next.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">Topper Comparison Matrix</h4>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          Compare your speed, accuracy, and section scores directly alongside the Rank #1 candidate’s scorecard.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'video' && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase">
                    <Video className="w-3.5 h-3.5" />
                    <span>Abdullah Maths Faculty Masterclasses</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                    Master Zero-Pen Calculation Techniques & Step-by-Step Shortcuts
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    Every question in the mock tests is backed by in-depth video solutions curated under the guidance of acclaimed educator Abdullah Sir. Learn how to bypass lengthy algebraic equations and solve problems in under 20 seconds using proprietary ratio and mental math techniques.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">Zero-Pen Mental Calculations</h4>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          Master digital root, unit digit elimination, and rapid ratio scaling to solve Arithmetic without paper.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">Option Elimination Secrets</h4>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          Decode examiner trap options and spot the correct answer instantly even in advanced problems.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">HD Recorded & Chapter-wise Video Library</h4>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          Rewatch concepts, speed up playback to 1.5x / 2x, and download study notes directly in the app.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'daily' && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase">
                    <CalendarCheck className="w-3.5 h-3.5" />
                    <span>Daily Practice & Habit Builder</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                    Stay Consistent with Daily 10-Minute Quizzes & Current Affairs
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    Success in competitive exams is built day by day. The SF Talent Test app delivers fresh, high-yield current affairs quizzes, static GK capsules, and speed math calculations daily to keep your exam memory razor-sharp.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">National & Global Current Affairs Daily</h4>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          Curated daily MCQ sets covering Government Schemes, Economy, Defense, Summits, and Awards.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">Daily Streak & Habit Tracker</h4>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          Earn practice badges, maintain your preparation streak, and compete on the daily leaderboard.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">100% Free Daily Drills</h4>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          No barrier to entry. Every aspirant can build a winning daily revision routine at zero cost.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'prizes' && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase">
                    <Trophy className="w-3.5 h-3.5" />
                    <span>Grand Contests & Merit Recognition</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                    Compete in Mega Talent Tests & Win Laptops, Tablets & Scholarships
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    We believe hardworking aspirants deserve real rewards! SF Talent Test regularly hosts Mega All-India Talent Competitions where students who achieve top ranks are awarded valuable study devices, cash rewards, and up to 100% scholarship fee concessions.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">Grand Prizes for Top Rankers</h4>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          Laptops for Rank #1 toppers, Android Tablets for Rank #2–#5, and Smartwatches / Study kits for top 20 rankers.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">100% Course Scholarships & Fee Waivers</h4>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          High-scoring students receive merit scholarships for Abdullah Sir’s full Quantitative Aptitude course batches.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">Verified Certificate of Merit</h4>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          Official digital rank certificate verifying your percentile, recognized by coaching institutions nationwide.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'portal' && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase">
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Dual Access: Mobile App & Web Portal</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                    Take Tests on Your Laptop via sftalenttest.akamai.net.in
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    Prefer taking full-length exams on a desktop monitor with a keyboard and mouse, just like the real TCS exam center? You don’t need to rely solely on your phone! Access the dedicated web portal with effortless 1-click mobile OTP login.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">Real Big-Screen Computer Interface</h4>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          Practice on Google Chrome, Edge, or Safari on your Windows PC, Mac, or Linux laptop for the true examination feel.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">Instant Synchronized Account</h4>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          Tests started on mobile can be analyzed on PC. All your scores, bookmarks, and test history sync seamlessly.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">Simple Mobile OTP Login</h4>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          No complicated passwords to remember. Just enter your mobile number and verify with instant OTP.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-3">
                <a
                  href={PLAY_STORE_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-extrabold text-sm shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2.5 transition-all"
                >
                  <Smartphone className="w-4 h-4 fill-black" />
                  <span>Download on Play Store</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={WEB_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-amber-500/40 text-amber-300 font-bold text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <Monitor className="w-4 h-4 text-amber-400" />
                  <span>Open Web Portal (PC)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right: High-Fidelity UI Device Mockup */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Back ambient aura */}
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-yellow-500/10 to-transparent rounded-3xl blur-2xl" />

                {/* Device Frame */}
                <div className="relative rounded-[2.5rem] bg-neutral-950 border-4 border-neutral-700/80 shadow-2xl overflow-hidden p-3 ring-1 ring-amber-500/30">
                  {/* Speaker & camera notch */}
                  <div className="w-32 h-4 bg-neutral-900 rounded-b-xl mx-auto mb-2 flex items-center justify-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                    <div className="w-8 h-1 rounded-full bg-neutral-800" />
                  </div>

                  {/* Screen Content Wrapper */}
                  <div className="rounded-[1.8rem] bg-[#0c0d12] p-4 text-neutral-100 min-h-[480px] flex flex-col justify-between border border-neutral-800/80 text-xs">
                    {/* Screen Top Bar */}
                    <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-[11px] text-neutral-400">
                      <div className="flex items-center gap-1.5 font-bold text-amber-400">
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                        <span>SF TALENT TEST</span>
                      </div>
                      <span className="bg-neutral-900 px-2 py-0.5 rounded text-[10px] text-neutral-300 border border-neutral-800">
                        Live App Mode
                      </span>
                    </div>

                    {/* Dynamic Screen View Based on Active Tab */}
                    {activeTab === 'cbt' && (
                      <div className="py-3 space-y-3 flex-1 flex flex-col justify-between">
                        {/* Test Header */}
                        <div className="flex items-center justify-between bg-neutral-900/90 p-2.5 rounded-xl border border-neutral-800">
                          <div>
                            <p className="font-bold text-white text-xs">Q. 14 / 100</p>
                            <span className="text-[10px] text-amber-400">Arithmetic & Quantitative Aptitude</span>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] text-neutral-400">Time Left</span>
                            <p className="font-mono font-bold text-amber-300 text-sm">48:19 min</p>
                          </div>
                        </div>

                        {/* Question Text */}
                        <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-2">
                          <p className="text-xs font-semibold text-neutral-200 leading-relaxed">
                            A can complete a piece of work in 12 days and B in 18 days. If they work together for 4 days, what fraction of work is remaining?
                          </p>
                          <div className="grid grid-cols-2 gap-1.5 pt-1 text-[11px]">
                            <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-amber-400 text-neutral-300">
                              A) 4/9
                            </div>
                            <div className="p-2 rounded-lg bg-amber-500/20 border-2 border-amber-400 text-amber-300 font-bold flex items-center justify-between">
                              <span>B) 5/9</span>
                              <CheckCircle2 className="w-3 h-3 text-amber-400" />
                            </div>
                            <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-300">
                              C) 1/3
                            </div>
                            <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-300">
                              D) 2/5
                            </div>
                          </div>
                        </div>

                        {/* Interactive Palette Mock */}
                        <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1.5">
                          <div className="flex items-center justify-between text-[10px] text-neutral-400">
                            <span>Question Palette:</span>
                            <span className="text-emerald-400 font-semibold">12 Answered • 3 Review</span>
                          </div>
                          <div className="grid grid-cols-8 gap-1 text-[10px] text-center font-bold">
                            {[...Array(16)].map((_, i) => {
                              const num = i + 1;
                              const isCurrent = num === 14;
                              const isAnswered = [1, 2, 4, 5, 7, 8, 10, 11, 12, 13].includes(num);
                              const isReview = [3, 9].includes(num);
                              return (
                                <span
                                  key={num}
                                  className={`py-1 rounded ${
                                    isCurrent
                                      ? 'bg-amber-400 text-black ring-2 ring-amber-300'
                                      : isAnswered
                                      ? 'bg-emerald-600/80 text-white'
                                      : isReview
                                      ? 'bg-purple-600/80 text-white'
                                      : 'bg-neutral-800 text-neutral-400'
                                  }`}
                                >
                                  {num}
                                </span>
                              );
                            })}
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center justify-between gap-2 pt-1 text-[11px]">
                          <button className="px-3 py-1.5 rounded-lg bg-purple-900/60 text-purple-300 border border-purple-700/60 font-semibold">
                            Mark Review
                          </button>
                          <button className="px-4 py-1.5 rounded-lg bg-amber-500 text-black font-extrabold shadow">
                            Save & Next →
                          </button>
                        </div>
                      </div>
                    )}

                    {activeTab === 'analytics' && (
                      <div className="py-3 space-y-3 flex-1 flex flex-col justify-between">
                        {/* Overall Score Badge */}
                        <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-500/15 to-transparent border border-amber-500/40 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-amber-300 uppercase font-bold tracking-wider">
                              Grand All-India Mock #4
                            </span>
                            <h4 className="text-lg font-black text-white mt-0.5">Score: 184 / 200</h4>
                            <p className="text-[11px] text-emerald-400 font-semibold">Rank #14 • Top 0.5% in India</p>
                          </div>
                          <div className="w-14 h-14 rounded-full bg-amber-500/20 border-2 border-amber-400 flex flex-col items-center justify-center text-center">
                            <span className="text-[9px] text-neutral-300">Percentile</span>
                            <span className="text-xs font-black text-amber-300">99.4%</span>
                          </div>
                        </div>

                        {/* Subject Breakdown Bars */}
                        <div className="p-3 rounded-xl bg-neutral-900/70 border border-neutral-800 space-y-2">
                          <p className="text-[11px] font-bold text-neutral-300">Sectional Performance:</p>
                          <div className="space-y-1.5 text-[10px]">
                            <div>
                              <div className="flex justify-between text-neutral-300 font-medium">
                                <span>Quantitative Aptitude</span>
                                <span className="text-amber-400 font-bold">48/50 (96%)</span>
                              </div>
                              <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden mt-0.5">
                                <div className="h-full bg-amber-400 rounded-full" style={{ width: '96%' }} />
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-neutral-300 font-medium">
                                <span>Logical Reasoning</span>
                                <span className="text-amber-400 font-bold">46/50 (92%)</span>
                              </div>
                              <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden mt-0.5">
                                <div className="h-full bg-amber-400 rounded-full" style={{ width: '92%' }} />
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-neutral-300 font-medium">
                                <span>General Knowledge & CA</span>
                                <span className="text-amber-400 font-bold">44/50 (88%)</span>
                              </div>
                              <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden mt-0.5">
                                <div className="h-full bg-amber-400 rounded-full" style={{ width: '88%' }} />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Time & Accuracy Stats */}
                        <div className="grid grid-cols-2 gap-2 text-[10px]">
                          <div className="p-2 rounded-xl bg-neutral-950 border border-neutral-800 text-center">
                            <span className="text-neutral-400">Accuracy Rate</span>
                            <p className="text-sm font-black text-emerald-400 mt-0.5">94.8%</p>
                          </div>
                          <div className="p-2 rounded-xl bg-neutral-950 border border-neutral-800 text-center">
                            <span className="text-neutral-400">Avg Time / Q</span>
                            <p className="text-sm font-black text-amber-300 mt-0.5">38 sec</p>
                          </div>
                        </div>

                        <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-[10px] text-amber-200 flex items-center justify-between">
                          <span>💡 Abdullah Sir Zero-Pen Solutions Available</span>
                          <span className="font-bold underline cursor-pointer">View Video →</span>
                        </div>
                      </div>
                    )}

                    {activeTab === 'video' && (
                      <div className="py-3 space-y-3 flex-1 flex flex-col justify-between">
                        {/* Video Player Mockup */}
                        <div className="relative rounded-xl overflow-hidden bg-neutral-950 border border-amber-500/40 aspect-video flex items-center justify-center group shadow-lg">
                          <img
                            src="/src/assets/logo.jpg"
                            alt="Lecture Preview"
                            className="w-full h-full object-cover opacity-25 filter blur-xs"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 text-center px-4">
                            <div className="w-12 h-12 rounded-full bg-amber-500 text-black flex items-center justify-center font-bold text-lg shadow-xl shadow-amber-500/40">
                              ▶
                            </div>
                            <p className="text-xs font-bold text-white mt-1">
                              Time & Work 5-Second Zero-Pen Shortcut
                            </p>
                            <span className="text-[10px] text-amber-300 font-medium">
                              By Abdullah Maths Faculty (15+ Yrs Exp)
                            </span>
                          </div>
                        </div>

                        {/* Lesson Details */}
                        <div className="p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 space-y-1.5">
                          <div className="flex items-center justify-between text-[11px] font-bold text-white">
                            <span>Chapter: Quantitative Aptitude Tricks</span>
                            <span className="text-amber-400">Class #24</span>
                          </div>
                          <p className="text-[10px] text-neutral-400">
                            Learn how to solve 3-variable work and efficiency problems using pure ratio balance without writing equations.
                          </p>
                        </div>

                        {/* Included Features */}
                        <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                          <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center gap-1.5 text-neutral-300">
                            <FileText className="w-3.5 h-3.5 text-amber-400" />
                            <span>Download Class PDF</span>
                          </div>
                          <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center gap-1.5 text-neutral-300">
                            <Clock className="w-3.5 h-3.5 text-amber-400" />
                            <span>Speed 1.5x / 2.0x</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'daily' && (
                      <div className="py-3 space-y-3 flex-1 flex flex-col justify-between">
                        {/* Daily Streak Card */}
                        <div className="p-3 rounded-2xl bg-gradient-to-r from-red-500/20 via-amber-500/20 to-transparent border border-amber-500/40 flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <span className="text-2xl">🔥</span>
                            <div>
                              <p className="text-xs font-extrabold text-white">14-Day Practice Streak!</p>
                              <span className="text-[10px] text-neutral-300">Keep solving daily to earn badges</span>
                            </div>
                          </div>
                          <span className="text-xs font-black text-amber-400 bg-black/40 px-2 py-1 rounded-lg">
                            +50 XP
                          </span>
                        </div>

                        {/* Today's Quizzes */}
                        <div className="space-y-2">
                          <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                            <div>
                              <p className="text-xs font-bold text-white">Daily Current Affairs Capsule</p>
                              <span className="text-[10px] text-neutral-400">10 MCQs • 8 mins • Today&apos;s News</span>
                            </div>
                            <span className="px-2 py-1 rounded bg-amber-500 text-black font-extrabold text-[10px]">
                              Attempt
                            </span>
                          </div>

                          <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                            <div>
                              <p className="text-xs font-bold text-white">Speed Math & Simplification Drill</p>
                              <span className="text-[10px] text-neutral-400">15 MCQs • 10 mins • Zero-Pen Focus</span>
                            </div>
                            <span className="px-2 py-1 rounded bg-amber-500 text-black font-extrabold text-[10px]">
                              Attempt
                            </span>
                          </div>

                          <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                            <div>
                              <p className="text-xs font-bold text-white">Static GK: Indian Polity & Articles</p>
                              <span className="text-[10px] text-neutral-400">10 MCQs • 5 mins • High Yield</span>
                            </div>
                            <span className="px-2 py-1 rounded bg-neutral-800 text-neutral-300 border border-neutral-700 font-semibold text-[10px]">
                              Completed ✓
                            </span>
                          </div>
                        </div>

                        <div className="p-2 rounded-xl bg-neutral-950 text-center text-[10px] text-amber-300 border border-neutral-800">
                          🌟 Free Daily Quizzes reset every morning at 6:00 AM!
                        </div>
                      </div>
                    )}

                    {activeTab === 'prizes' && (
                      <div className="py-3 space-y-3 flex-1 flex flex-col justify-between">
                        {/* Mega Prize Banner */}
                        <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-500/25 via-yellow-500/20 to-neutral-900 border border-amber-400 shadow-lg text-center space-y-1">
                          <span className="text-xs uppercase font-extrabold text-amber-300 tracking-wider">
                            🏆 All-India Mega Talent Contest
                          </span>
                          <h4 className="text-base font-black text-white">Win Study Laptops & Tablets</h4>
                          <p className="text-[10px] text-neutral-300">
                            Compete against 10,000+ candidates nationwide
                          </p>
                        </div>

                        {/* Reward Tiers */}
                        <div className="space-y-1.5 text-[11px]">
                          <div className="p-2 rounded-xl bg-neutral-900 border border-amber-500/30 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-base">🥇</span>
                              <div>
                                <p className="font-bold text-white text-xs">Rank #1: Brand New Laptop</p>
                                <span className="text-[10px] text-amber-400">+ 100% Course Scholarship</span>
                              </div>
                            </div>
                            <span className="text-[10px] text-neutral-400 font-semibold">Grand Prize</span>
                          </div>

                          <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-base">🥈</span>
                              <div>
                                <p className="font-bold text-white text-xs">Rank #2 - #5: Android Tablet</p>
                                <span className="text-[10px] text-neutral-300">+ Gold Merit Certificate</span>
                              </div>
                            </div>
                            <span className="text-[10px] text-neutral-400 font-semibold">Top 5</span>
                          </div>

                          <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-base">🥉</span>
                              <div>
                                <p className="font-bold text-white text-xs">Rank #6 - #20: Smartwatch & Kits</p>
                                <span className="text-[10px] text-neutral-300">+ 50% Scholarship Waiver</span>
                              </div>
                            </div>
                            <span className="text-[10px] text-neutral-400 font-semibold">Top 20</span>
                          </div>
                        </div>

                        <div className="p-2 rounded-xl bg-neutral-950 text-center text-[10px] text-neutral-300 border border-neutral-800">
                          Register and attempt through SF Talent Test App!
                        </div>
                      </div>
                    )}

                    {activeTab === 'portal' && (
                      <div className="py-3 space-y-3 flex-1 flex flex-col justify-between">
                        {/* Web Portal Mockup Header */}
                        <div className="p-3 rounded-2xl bg-neutral-900 border border-amber-500/40 space-y-2">
                          <div className="flex items-center justify-between text-[10px] text-neutral-400 border-b border-neutral-800 pb-1.5">
                            <div className="flex items-center gap-1.5 text-amber-300 font-mono">
                              <Monitor className="w-3.5 h-3.5" />
                              <span>https://sftalenttest.akamai.net.in</span>
                            </div>
                            <span className="text-emerald-400 font-semibold">SSL Secure</span>
                          </div>
                          <p className="text-xs font-bold text-white">
                            Desktop Web Portal for Big-Screen PC Examination
                          </p>
                          <p className="text-[10px] text-neutral-300">
                            Login with your registered 10-digit mobile number and receive instant OTP to unlock tests on any browser.
                          </p>
                        </div>

                        {/* Web Portal Features Checklist */}
                        <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1.5 text-[11px]">
                          <div className="flex items-center gap-2 text-neutral-200">
                            <span className="text-amber-400 font-bold">✓</span>
                            <span>Full-Screen TCS Exam Simulator with Mouse Pacing</span>
                          </div>
                          <div className="flex items-center gap-2 text-neutral-200">
                            <span className="text-amber-400 font-bold">✓</span>
                            <span>Zero lag on broadband & high-resolution diagrams</span>
                          </div>
                          <div className="flex items-center gap-2 text-neutral-200">
                            <span className="text-amber-400 font-bold">✓</span>
                            <span>Direct Printable Scorecards & Question Papers</span>
                          </div>
                        </div>

                        <a
                          href={WEB_PORTAL_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 rounded-xl bg-amber-500 text-black font-extrabold text-xs text-center flex items-center justify-center gap-1.5 shadow"
                        >
                          <span>Launch sftalenttest.akamai.net.in</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}

                    {/* Device Bottom Indicator */}
                    <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-center">
                      <div className="w-24 h-1 rounded-full bg-neutral-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Core Feature Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.appFeatures.featuresList.map((item, index) => (
            <div
              key={item.id}
              className="rounded-2xl p-6 bg-neutral-900/70 border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
                    0{index + 1}
                  </div>
                  <span className="text-[11px] font-bold text-amber-400/90 uppercase tracking-wider px-2.5 py-1 rounded-full bg-neutral-950 border border-neutral-800">
                    {item.tagline.split(' ')[0]} Feature
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-amber-200/80 font-medium mt-1">
                    {item.tagline}
                  </p>
                  <p className="text-xs text-neutral-400 mt-2.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-neutral-800/80">
                  {item.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5">
                <a
                  href={PLAY_STORE_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 group-hover:translate-x-1 transition-transform"
                >
                  <span>Experience in App & Portal</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* How to Access Web Portal (PC/Laptop) Guide Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-neutral-900/90 border border-amber-500/40 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 text-xs font-bold uppercase">
                <Monitor className="w-3.5 h-3.5" />
                <span>Desktop & Laptop Web Portal Guide</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Taking Exams on PC via <span className="text-amber-400">sftalenttest.akamai.net.in</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Step 1: Open <strong className="text-amber-300">https://sftalenttest.akamai.net.in</strong> in your browser.
                <br />
                Step 2: Enter your 10-digit mobile number and receive the 4-digit OTP.
                <br />
                Step 3: Instant access to full-screen CBT mock tests, test series, scorecards, and Abdullah Sir video shortcuts!
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={WEB_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
              >
                <Monitor className="w-4 h-4" />
                <span>Open Web Portal Now</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={PLAY_STORE_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-white font-bold text-sm text-center flex items-center justify-center gap-2 transition-all"
              >
                <Smartphone className="w-4 h-4 text-amber-400" />
                <span>Download Android App</span>
              </a>
            </div>
          </div>
>>>>>>> 5d1a04638ab87a1afae55181e6c8f23368dc9e2c
        </div>
      </div>
    </section>
  );
};
