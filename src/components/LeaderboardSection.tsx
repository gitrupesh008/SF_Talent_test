import React from 'react';
import { LeaderboardEntry, Language } from '../types';
import { PLAY_STORE_APP_URL } from '../data/translations';
import { Trophy } from 'lucide-react';

interface LeaderboardSectionProps {
  entries: LeaderboardEntry[];
  lang?: Language;
  onTakeTest?: () => void;
}

export const LeaderboardSection: React.FC<LeaderboardSectionProps> = ({
  entries,
}) => {
  return (
    <section id="leaderboard-section" className="py-16 md:py-24 bg-neutral-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>All-India & State Exam Leaderboard</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            Top Performers & Rankers
          </h2>
          <p className="text-sm md:text-base text-neutral-400">
            Latest top scores and national percentiles of aspirants preparing for major Central & State examinations across India
          </p>
        </div>

        {/* Leaderboard Table / Cards */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl border border-neutral-800 overflow-hidden shadow-2xl">
          <div className="p-4 sm:p-6 border-b border-neutral-800 bg-neutral-900/40 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Rank & Candidate
            </span>
            <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-neutral-400">
              <span className="hidden sm:inline">Time</span>
              <span>Accuracy</span>
              <span>Score</span>
            </div>
          </div>

          <div className="divide-y divide-neutral-800/80">
            {entries.map((entry, index) => {
              const rank = index + 1;

              let rankBadge = (
                <span className="w-7 h-7 rounded-full bg-neutral-800 text-neutral-400 flex items-center justify-center font-bold text-xs">
                  {rank}
                </span>
              );

              if (rank === 1) {
                rankBadge = (
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black flex items-center justify-center font-black text-sm shadow-md shadow-amber-500/30">
                    🥇
                  </span>
                );
              } else if (rank === 2) {
                rankBadge = (
                  <span className="w-8 h-8 rounded-full bg-slate-300 text-black flex items-center justify-center font-black text-sm">
                    🥈
                  </span>
                );
              } else if (rank === 3) {
                rankBadge = (
                  <span className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center font-black text-sm">
                    🥉
                  </span>
                );
              }

              return (
                <div
                  key={entry.id}
                  className={`p-4 sm:p-5 flex items-center justify-between gap-4 transition-colors ${
                    rank === 1
                      ? 'bg-amber-500/5 hover:bg-amber-500/10'
                      : 'hover:bg-neutral-900/60'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {rankBadge}
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5">
                        <span>{entry.name}</span>
                        {rank === 1 && (
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
                            TOPPER
                          </span>
                        )}
                      </h4>
                      <p className="text-xs text-neutral-400 flex items-center gap-2 mt-0.5">
                        <span>{entry.location}</span>
                        <span>•</span>
                        <span className="text-amber-400/90">{entry.testTitle}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-right">
                    <span className="hidden sm:inline text-xs text-neutral-400 font-medium">
                      {entry.timeTaken}
                    </span>
                    <span className="text-xs font-semibold text-emerald-400">
                      {entry.accuracy}%
                    </span>
                    <span className="text-sm sm:text-base font-black text-amber-400">
                      {entry.score}/{entry.totalMarks}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Banner */}
          <div className="p-5 bg-neutral-900/80 border-t border-neutral-800 text-center flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-neutral-300">
              Take the live test on our Android App and secure your spot on the All-India leaderboard!
            </p>
            <a
              href={PLAY_STORE_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs transition-colors whitespace-nowrap"
            >
              Take Test on App 📱
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
