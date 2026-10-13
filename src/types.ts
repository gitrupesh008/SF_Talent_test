export type Language = 'en' | 'te';

export interface QuestionOption {
  id: string;
  en: string;
  te?: string;
}

export interface Question {
  id: string;
  subject: 'arithmetic' | 'reasoning' | 'gk' | 'current_affairs';
  difficulty: 'easy' | 'medium' | 'hard';
  text: {
    en: string;
    te?: string;
  };
  options: QuestionOption[];
  correctAnswerId: string;
  explanation: {
    en: string;
    te?: string;
    shortcutTip?: {
      en: string;
      te?: string;
    };
  };
  marks: number;
}

export interface TestSeries {
  id: string;
  title: {
    en: string;
    te?: string;
  };
  subtitle: {
    en: string;
    te?: string;
  };
  badge: {
    en: string;
    te?: string;
  };
  category: string;
  durationMinutes: number;
  totalMarks: number;
  questions: Question[];
  featured?: boolean;
}

export interface UserResponse {
  questionId: string;
  selectedOptionId: string | null;
  status: 'answered' | 'unanswered' | 'marked' | 'marked_answered';
  timeSpentSeconds: number;
}

export interface AssessmentResult {
  testId: string;
  testTitle: {
    en: string;
    te?: string;
  };
  studentName: string;
  phoneOrEmail?: string;
  submittedAt: string;
  totalQuestions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  unanswered: number;
  score: number;
  totalMarks: number;
  accuracyPercentage: number;
  totalTimeSpentSeconds: number;
  subjectBreakdown: {
    [key in 'arithmetic' | 'reasoning' | 'gk' | 'current_affairs']?: {
      total: number;
      correct: number;
      incorrect: number;
      score: number;
    };
  };
  responses: UserResponse[];
  rankPercentile: number;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  location: string;
  testTitle: string;
  score: number;
  totalMarks: number;
  accuracy: number;
  timeTaken: string;
  avatarUrl?: string;
  date: string;
}
