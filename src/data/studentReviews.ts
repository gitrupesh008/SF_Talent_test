export interface StudentReview {
  id: string;
  name: string;
  location: string;
  exam: string;
  scoreHighlight: string;
  rating: number;
  date: string;
  comment: {
    en: string;
  };
  verified: boolean;
}

export const INITIAL_STUDENT_REVIEWS: StudentReview[] = [
  {
    id: 'rev-1',
    name: 'Vikram Singh Chauhan',
    location: 'New Delhi',
    exam: 'SSC CGL & CPO Aspirant (Tier-1 Qualified)',
    scoreHighlight: 'Score: 15/15 in National Mock Test',
    rating: 5,
    date: 'Yesterday',
    comment: {
      en: 'Abdullah Sir’s arithmetic shortcut techniques completely transformed my speed. Quantitative aptitude questions that used to take me nearly 2 minutes are now solved in under 35 seconds. The questions strictly emulate actual SSC CGL TCS exam level!',
    },
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'Priya Sharma',
    location: 'Jaipur, Rajasthan',
    exam: 'RRB NTPC & State PSC Selected',
    scoreHighlight: 'Score: 14/15 in Reasoning & Aptitude',
    rating: 5,
    date: '3 days ago',
    comment: {
      en: 'The app’s timed test format and in-depth shortcut solutions right after submitting are phenomenal. Also, the daily current affairs questions Abdullah Sir posts on the Facebook page have been an essential part of my daily routine.',
    },
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'Rajesh Verma',
    location: 'Patna, Bihar',
    exam: 'Railways RRB & State Police SI',
    scoreHighlight: 'Score: 10/10 in Advanced Maths Challenge',
    rating: 5,
    date: 'This week',
    comment: {
      en: 'Solving Compound Interest, Time-Work, and Mensuration via ratio methods without lengthy quadratic equations is the superpower Abdullah Sir teaches. His tricks give immense confidence for cracking any Central or State exam.',
    },
    verified: true,
  },
  {
    id: 'rev-4',
    name: 'Ananya Mukherjee',
    location: 'Kolkata, West Bengal',
    exam: 'IBPS PO & SBI Clerk Aspirant',
    scoreHighlight: 'Rank 2 in All-India Mock Challenge',
    rating: 5,
    date: '1 week ago',
    comment: {
      en: 'The countdown timer simulates exact exam pressure. The step-by-step logic and examiner-perspective explanations make every single concept crystal clear. Every serious government job aspirant must install the SF Academy app!',
    },
    verified: true,
  },
  {
    id: 'rev-5',
    name: 'K. Rajasekhar Reddy',
    location: 'Nandyala, Andhra Pradesh',
    exam: 'State PSC & Police Sub-Inspector',
    scoreHighlight: '94.5% Accuracy Rate',
    rating: 5,
    date: '2 weeks ago',
    comment: {
      en: 'Proud to see our institute deliver an All-India standard platform. Abdullah Sir’s mentorship helped me crack both state prelims and national railway stages with ease.',
    },
    verified: true,
  },
  {
    id: 'rev-6',
    name: 'Amit Patel',
    location: 'Ahmedabad, Gujarat',
    exam: 'Central Police CAPF & SSC CHSL',
    scoreHighlight: 'Score: 14/15 in Speed Drill',
    rating: 5,
    date: '2 weeks ago',
    comment: {
      en: 'High quality questions with no fluff. If you are preparing for SSC or Railways, practicing on this platform gives you an undeniable edge over the competition.',
    },
    verified: true,
  },
];
