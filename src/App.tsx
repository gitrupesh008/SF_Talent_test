<<<<<<< HEAD
import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AppFeaturesSection } from "./components/AppFeaturesSection";
import { PillarsSection } from "./components/PillarsSection";
import { FacultySpotlight } from "./components/FacultySpotlight";
import { AppDownloadBanner } from "./components/AppDownloadBanner";
import { Footer } from "./components/Footer";
import { ContactSection } from "./components/ContactSection";
import { StudentReviewsSection } from "./components/StudentReviewsSection";
import { PLAY_STORE_APP_URL } from "./data/translations";

export default function App() {
=======
import React, { useState } from 'react';
import { LeaderboardEntry } from './types';
import { MOCK_TESTS, INITIAL_LEADERBOARD } from './data/mockTests';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AppFeaturesSection } from './components/AppFeaturesSection';
import { PillarsSection } from './components/PillarsSection';
import { FacultySpotlight } from './components/FacultySpotlight';
import { TestSelectionCards } from './components/TestSelectionCards';
import { AppDownloadBanner } from './components/AppDownloadBanner';
import { LeaderboardSection } from './components/LeaderboardSection';
import { Footer } from './components/Footer';
import { ContactSection } from './components/ContactSection';
import { StudentReviewsSection } from './components/StudentReviewsSection';
import { PLAY_STORE_APP_URL } from './data/translations';

export default function App() {
  // Leaderboard entries for All-India & State Exam toppers
  const [leaderboard] = useState<LeaderboardEntry[]>(() => {
    const saved = localStorage.getItem('sf_leaderboard');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_LEADERBOARD;
      }
    }
    return INITIAL_LEADERBOARD;
  });

>>>>>>> 5d1a04638ab87a1afae55181e6c8f23368dc9e2c
  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
<<<<<<< HEAD
      element.scrollIntoView({ behavior: "smooth" });
=======
      element.scrollIntoView({ behavior: 'smooth' });
>>>>>>> 5d1a04638ab87a1afae55181e6c8f23368dc9e2c
    }
  };

  // Direct all test-taking clicks to the official Android mobile app
  const handleOpenPlayStore = () => {
<<<<<<< HEAD
    window.open(PLAY_STORE_APP_URL, "_blank");
=======
    window.open(PLAY_STORE_APP_URL, '_blank');
>>>>>>> 5d1a04638ab87a1afae55181e6c8f23368dc9e2c
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-neutral-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Navbar */}
<<<<<<< HEAD
      <Navbar onNavigate={handleNavigate} />
=======
      <Navbar
        onNavigate={handleNavigate}
      />
>>>>>>> 5d1a04638ab87a1afae55181e6c8f23368dc9e2c

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onStartAssessment={handleOpenPlayStore}
<<<<<<< HEAD
          onExploreTests={handleOpenPlayStore}
=======
          onExploreTests={() => handleNavigate('tests-section')}
>>>>>>> 5d1a04638ab87a1afae55181e6c8f23368dc9e2c
        />

        {/* Detailed App & Web Portal Features Showcase */}
        <AppFeaturesSection />

<<<<<<< HEAD
        {/* Faculty Spotlight (Abdullah Sir) */}
        <FacultySpotlight onExploreSpecialMaths={handleOpenPlayStore} />

        {/* 4 Pillars Section */}
        <PillarsSection onTakeTestClick={handleOpenPlayStore} />
=======
        {/* Test Selection Cards (App modules showcase) */}
        <TestSelectionCards
          tests={MOCK_TESTS}
        />

        {/* Faculty Spotlight (Abdullah Sir) */}
        <FacultySpotlight
          onExploreSpecialMaths={handleOpenPlayStore}
        />

        {/* 4 Pillars Section */}
        <PillarsSection
          onTakeTestClick={handleOpenPlayStore}
        />

        {/* All-India & State Leaderboard Section */}
        <LeaderboardSection
          entries={leaderboard}
          onTakeTest={handleOpenPlayStore}
        />
>>>>>>> 5d1a04638ab87a1afae55181e6c8f23368dc9e2c

        {/* Student Reviews & Testimonials Section */}
        <StudentReviewsSection />

        {/* Official Contact & MSME Registration Section */}
        <ContactSection />

        {/* Dedicated App Download & QR Section */}
        <AppDownloadBanner />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
