import { TestSeries } from "../types";

export const MOCK_TESTS: TestSeries[] = [
  {
    id: "sf-grand-talent-test-1",
    title: {
      en: "SF Grand Talent Test 2025-2026 (Full Mock)",
    },
    subtitle: {
      en: "Comprehensive test covering Arithmetic, Reasoning, GK & Current Affairs by Abdullah Sir",
    },
    badge: {
      en: "Most Popular • All-India Mock",
    },
    category: "all-round",
    durationMinutes: 15,
    totalMarks: 15,
    featured: true,
    questions: [
      {
        id: "q1",
        subject: "arithmetic",
        difficulty: "medium",
        marks: 1,
        text: {
          en: "A sum of money doubles itself in 5 years at simple interest. In how many years will it become 4 times of itself at the same rate of interest?",
        },
        options: [
          { id: "opt1", en: "10 Years" },
          { id: "opt2", en: "15 Years" },
          { id: "opt3", en: "20 Years" },
          { id: "opt4", en: "12.5 Years" },
        ],
        correctAnswerId: "opt2",
        explanation: {
          en: "When a sum doubles in 5 years, SI = P, so in 5 years SI earned is P. For it to become 4 times, SI required = 3P. Since SI is directly proportional to time: 1P takes 5 years, therefore 3P takes 3 × 5 = 15 years.",
          shortcutTip: {
            en: "Abdullah Sir Trick: Formula (N2 - 1) / (N1 - 1) = T2 / T1. Here (4 - 1)/(2 - 1) = T2/5 => 3/1 = T2/5 => T2 = 15 years!",
          },
        },
      },
      {
        id: "q2",
        subject: "arithmetic",
        difficulty: "easy",
        marks: 1,
        text: {
          en: "A and B can complete a work in 12 days and 18 days respectively. If they work together, in how many days will the work be completed?",
        },
        options: [
          { id: "opt1", en: "6.4 days" },
          { id: "opt2", en: "7.2 days" },
          { id: "opt3", en: "8 days" },
          { id: "opt4", en: "7.5 days" },
        ],
        correctAnswerId: "opt2",
        explanation: {
          en: "Total work = LCM of 12 and 18 = 36 units. Efficiency of A = 36/12 = 3 units/day. Efficiency of B = 36/18 = 2 units/day. Combined efficiency = 3 + 2 = 5 units/day. Time required = 36 / 5 = 7.2 days.",
          shortcutTip: {
            en: "Formula: (A × B) / (A + B) = (12 × 18) / (30) = 216 / 30 = 7.2 days.",
          },
        },
      },
      {
        id: "q3",
        subject: "reasoning",
        difficulty: "medium",
        marks: 1,
        text: {
          en: "Find the missing number in the series: 7, 11, 19, 35, 67, ?",
        },
        options: [
          { id: "opt1", en: "131" },
          { id: "opt2", en: "129" },
          { id: "opt3", en: "135" },
          { id: "opt4", en: "141" },
        ],
        correctAnswerId: "opt1",
        explanation: {
          en: "Check the differences: 11 - 7 = 4 (2^2), 19 - 11 = 8 (2^3), 35 - 19 = 16 (2^4), 67 - 35 = 32 (2^5). Next difference = 64 (2^6). So, 67 + 64 = 131.",
          shortcutTip: {
            en: "Pattern is (Number × 2) - 3: (7×2)-3=11; (11×2)-3=19; (19×2)-3=35; (35×2)-3=67; (67×2)-3 = 134 - 3 = 131.",
          },
        },
      },
      {
        id: "q4",
        subject: "reasoning",
        difficulty: "easy",
        marks: 1,
        text: {
          en: "If in a code language, TEACHER is coded as VGCEJGT, how will CHILDREN be coded in that same language?",
        },
        options: [
          { id: "opt1", en: "EJKNFTGP" },
          { id: "opt2", en: "EJKNFPGT" },
          { id: "opt3", en: "EJKNEPFT" },
          { id: "opt4", en: "EJKNETFP" },
        ],
        correctAnswerId: "opt1",
        explanation: {
          en: "Every letter is shifted forward by +2 positions in the alphabetical order: T(+2)=V, E(+2)=G, A(+2)=C, C(+2)=E, H(+2)=J, E(+2)=G, R(+2)=T. Applying to CHILDREN: C(+2)=E, H(+2)=J, I(+2)=K, L(+2)=N, D(+2)=F, R(+2)=T, E(+2)=G, N(+2)=P => EJKNFTGP.",
        },
      },
      {
        id: "q5",
        subject: "current_affairs",
        difficulty: "medium",
        marks: 1,
        text: {
          en: "Which Indian city was declared as the world’s first UNESCO World Heritage City in India?",
        },
        options: [
          { id: "opt1", en: "Jaipur" },
          { id: "opt2", en: "Ahmedabad" },
          { id: "opt3", en: "Hyderabad" },
          { id: "opt4", en: "Varanasi" },
        ],
        correctAnswerId: "opt2",
        explanation: {
          en: "Ahmedabad in Gujarat was declared as India’s first UNESCO World Heritage City in 2017. Later in 2019, Jaipur was declared the second.",
        },
      },
      {
        id: "q6",
        subject: "gk",
        difficulty: "medium",
        marks: 1,
        text: {
          en: 'Which Article of the Indian Constitution is regarded by Dr. B.R. Ambedkar as the "Heart and Soul of the Constitution"?',
        },
        options: [
          { id: "opt1", en: "Article 14" },
          { id: "opt2", en: "Article 21" },
          { id: "opt3", en: "Article 32" },
          { id: "opt4", en: "Article 44" },
        ],
        correctAnswerId: "opt3",
        explanation: {
          en: "Article 32 provides the Right to Constitutional Remedies, allowing citizens to move the Supreme Court to enforce fundamental rights. Dr. Ambedkar called it the heart and soul of the Constitution.",
        },
      },
      {
        id: "q7",
        subject: "arithmetic",
        difficulty: "hard",
        marks: 1,
        text: {
          en: "A shopkeeper marks an article 40% above its cost price and gives a discount of 25% on the marked price. Find his overall profit percentage.",
        },
        options: [
          { id: "opt1", en: "15%" },
          { id: "opt2", en: "5%" },
          { id: "opt3", en: "10%" },
          { id: "opt4", en: "8%" },
        ],
        correctAnswerId: "opt2",
        explanation: {
          en: "Let CP = 100. Marked Price = 140. Discount = 25% of 140 = 35. Selling Price = 140 - 35 = 105. Profit = 105 - 100 = 5%.",
          shortcutTip: {
            en: "Abdullah Sir Successive Percentage Formula: a + b + (ab/100). Here a = +40, b = -25. Result = 40 - 25 - (40×25/100) = 15 - 10 = +5% profit!",
          },
        },
      },
      {
        id: "q8",
        subject: "gk",
        difficulty: "easy",
        marks: 1,
        text: {
          en: 'Which river is known as the "Dakshin Ganga" (Ganga of South India)?',
        },
        options: [
          { id: "opt1", en: "Krishna" },
          { id: "opt2", en: "Godavari" },
          { id: "opt3", en: "Cauvery" },
          { id: "opt4", en: "Tungabhadra" },
        ],
        correctAnswerId: "opt2",
        explanation: {
          en: "Godavari is the longest river in Peninsular India (1,465 km) and is traditionally revered and referred to as the Dakshin Ganga or Vridha Ganga.",
        },
      },
      {
        id: "q9",
        subject: "reasoning",
        difficulty: "hard",
        marks: 1,
        text: {
          en: 'Pointing to a photograph, a woman says, "He is the son of the only son of my grandfather." How is the boy in the photograph related to the woman?',
        },
        options: [
          { id: "opt1", en: "Brother" },
          { id: "opt2", en: "Cousin" },
          { id: "opt3", en: "Nephew" },
          { id: "opt4", en: "Uncle" },
        ],
        correctAnswerId: "opt1",
        explanation: {
          en: "The woman’s grandfather’s only son is her father. The son of her father is her brother.",
        },
      },
      {
        id: "q10",
        subject: "current_affairs",
        difficulty: "easy",
        marks: 1,
        text: {
          en: "From which space centre does ISRO launch its satellite launch vehicles like PSLV and GSLV?",
        },
        options: [
          { id: "opt1", en: "Satish Dhawan Space Centre (Sriharikota)" },
          { id: "opt2", en: "Thumba Equatorial Rocket Launching Station" },
          { id: "opt3", en: "Vikram Sarabhai Space Centre" },
          { id: "opt4", en: "Abdul Kalam Island" },
        ],
        correctAnswerId: "opt1",
        explanation: {
          en: "Satish Dhawan Space Centre (SDSC) SHAR located at Sriharikota in Tirupati/Nellore district of Andhra Pradesh is the primary spaceport of India.",
        },
      },
      {
        id: "q11",
        subject: "arithmetic",
        difficulty: "medium",
        marks: 1,
        text: {
          en: "A train 180 metres long is running at a speed of 54 km/h. How much time will it take to pass a pole?",
        },
        options: [
          { id: "opt1", en: "10 seconds" },
          { id: "opt2", en: "12 seconds" },
          { id: "opt3", en: "15 seconds" },
          { id: "opt4", en: "18 seconds" },
        ],
        correctAnswerId: "opt2",
        explanation: {
          en: "Speed = 54 × (5/18) = 15 m/s. Distance to cover = length of train = 180 m. Time = Distance / Speed = 180 / 15 = 12 seconds.",
          shortcutTip: {
            en: "Always convert km/h to m/s by multiplying with 5/18. 54 is 18×3, so speed = 5×3 = 15 m/s!",
          },
        },
      },
      {
        id: "q12",
        subject: "gk",
        difficulty: "medium",
        marks: 1,
        text: {
          en: "In which year did the historic Telangana Formation Day officially take place?",
        },
        options: [
          { id: "opt1", en: "2 June 2014" },
          { id: "opt2", en: "15 August 2014" },
          { id: "opt3", en: "26 January 2014" },
          { id: "opt4", en: "2 June 2013" },
        ],
        correctAnswerId: "opt1",
        explanation: {
          en: "Telangana officially emerged as the 29th State of the Indian Union on June 2, 2014, with Hyderabad as its capital.",
        },
      },
      {
        id: "q13",
        subject: "arithmetic",
        difficulty: "easy",
        marks: 1,
        text: {
          en: "If the ratio of two numbers is 3:5 and their sum is 160, what is the larger number?",
        },
        options: [
          { id: "opt1", en: "60" },
          { id: "opt2", en: "100" },
          { id: "opt3", en: "90" },
          { id: "opt4", en: "120" },
        ],
        correctAnswerId: "opt2",
        explanation: {
          en: "Total parts = 3 + 5 = 8 parts. 8 parts = 160 => 1 part = 20. Larger number = 5 parts = 5 × 20 = 100.",
        },
      },
      {
        id: "q14",
        subject: "reasoning",
        difficulty: "medium",
        marks: 1,
        text: {
          en: "Select the related word from the given alternatives: Clock : Time :: Thermometer : ?",
        },
        options: [
          { id: "opt1", en: "Heat" },
          { id: "opt2", en: "Radiation" },
          { id: "opt3", en: "Temperature" },
          { id: "opt4", en: "Energy" },
        ],
        correctAnswerId: "opt3",
        explanation: {
          en: "A clock measures time. Similarly, a thermometer measures temperature.",
        },
      },
      {
        id: "q15",
        subject: "current_affairs",
        difficulty: "medium",
        marks: 1,
        text: {
          en: "Which Indian classical dance form originated in Andhra Pradesh?",
        },
        options: [
          { id: "opt1", en: "Bharatanatyam" },
          { id: "opt2", en: "Kathakali" },
          { id: "opt3", en: "Kuchipudi" },
          { id: "opt4", en: "Mohiniyattam" },
        ],
        correctAnswerId: "opt3",
        explanation: {
          en: "Kuchipudi is the classical dance form that originated in the Krishna district of Andhra Pradesh.",
        },
      },
    ],
  },
  {
    id: "abdullah-maths-special",
    title: {
      en: "Abdullah Sir Special: Arithmetic & Pure Maths Challenge",
    },
    subtitle: {
      en: "Hand-picked tricky questions with zero-pen shortcut tricks for SSC CGL, RRB NTPC, Banking & State Exams",
    },
    badge: {
      en: "High-Yield Maths • SSC & RRB Special",
    },
    category: "arithmetic",
    durationMinutes: 10,
    totalMarks: 10,
    questions: [
      {
        id: "am1",
        subject: "arithmetic",
        difficulty: "medium",
        marks: 1,
        text: {
          en: "If 15 men can complete a project in 20 days, how many men are required to complete the same project in 12 days?",
        },
        options: [
          { id: "opt1", en: "20 Men" },
          { id: "opt2", en: "25 Men" },
          { id: "opt3", en: "22 Men" },
          { id: "opt4", en: "30 Men" },
        ],
        correctAnswerId: "opt2",
        explanation: {
          en: "M1 × D1 = M2 × D2 => 15 × 20 = M2 × 12 => 300 = 12 × M2 => M2 = 300 / 12 = 25 men.",
          shortcutTip: {
            en: "Work is constant. Days ratio is 20:12 = 5:3. Therefore Men ratio is inverse = 3:5. 3 units = 15 => 5 units = 25!",
          },
        },
      },
      {
        id: "am2",
        subject: "arithmetic",
        difficulty: "medium",
        marks: 1,
        text: {
          en: "The average of 5 consecutive odd numbers is 27. What is the product of the smallest and largest numbers?",
        },
        options: [
          { id: "opt1", en: "713" },
          { id: "opt2", en: "693" },
          { id: "opt3", en: "725" },
          { id: "opt4", en: "703" },
        ],
        correctAnswerId: "opt1",
        explanation: {
          en: "For consecutive numbers, the average is the middle number. So the middle number is 27. The 5 consecutive odd numbers are: 23, 25, 27, 29, 31. Smallest = 23, Largest = 31. Product = 23 × 31 = 713.",
          shortcutTip: {
            en: "Shortcut for 23 × 31: (27 - 4)(27 + 4) = 27^2 - 4^2 = 729 - 16 = 713 in 3 seconds!",
          },
        },
      },
      {
        id: "am3",
        subject: "arithmetic",
        difficulty: "hard",
        marks: 1,
        text: {
          en: "A man sells two horses for ₹19,800 each. On one he gains 10% and on the other he loses 10%. What is his overall gain or loss percentage?",
        },
        options: [
          { id: "opt1", en: "No profit, no loss" },
          { id: "opt2", en: "1% loss" },
          { id: "opt3", en: "1% gain" },
          { id: "opt4", en: "2% loss" },
        ],
        correctAnswerId: "opt2",
        explanation: {
          en: "When two articles are sold at the same selling price, one at x% profit and another at x% loss, there is ALWAYS a net loss equal to (x/10)^2 %. Here (10/10)^2 = 1% loss.",
          shortcutTip: {
            en: "Direct formula: Loss% = (Common Gain or Loss% / 10)^2 = (10/10)^2 = 1% Loss.",
          },
        },
      },
      {
        id: "am4",
        subject: "arithmetic",
        difficulty: "medium",
        marks: 1,
        text: {
          en: "What is the Compound Interest on ₹10,000 for 2 years at 10% per annum compounded annually?",
        },
        options: [
          { id: "opt1", en: "₹2,000" },
          { id: "opt2", en: "₹2,100" },
          { id: "opt3", en: "₹2,200" },
          { id: "opt4", en: "₹1,900" },
        ],
        correctAnswerId: "opt2",
        explanation: {
          en: "Effective CI rate for 2 years at 10% = 10 + 10 + (10×10/100) = 21%. CI = 21% of 10,000 = ₹2,100.",
        },
      },
      {
        id: "am5",
        subject: "arithmetic",
        difficulty: "easy",
        marks: 1,
        text: {
          en: "The ratio of the ages of mother and daughter is 7:3. If the difference between their ages is 24 years, what is the age of the mother?",
        },
        options: [
          { id: "opt1", en: "36 Years" },
          { id: "opt2", en: "42 Years" },
          { id: "opt3", en: "49 Years" },
          { id: "opt4", en: "45 Years" },
        ],
        correctAnswerId: "opt2",
        explanation: {
          en: "Difference in ratio parts = 7 - 3 = 4 parts. 4 parts = 24 years => 1 part = 6 years. Mother age = 7 parts = 7 × 6 = 42 years.",
        },
      },
      {
        id: "am6",
        subject: "arithmetic",
        difficulty: "hard",
        marks: 1,
        text: {
          en: "A boat can travel 36 km downstream in 3 hours and 24 km upstream in 4 hours. What is the speed of the boat in still water?",
        },
        options: [
          { id: "opt1", en: "9 km/h" },
          { id: "opt2", en: "8 km/h" },
          { id: "opt3", en: "10 km/h" },
          { id: "opt4", en: "6 km/h" },
        ],
        correctAnswerId: "opt1",
        explanation: {
          en: "Downstream speed (D) = 36 / 3 = 12 km/h. Upstream speed (U) = 24 / 4 = 6 km/h. Speed of boat in still water = (D + U) / 2 = (12 + 6) / 2 = 9 km/h.",
        },
      },
      {
        id: "am7",
        subject: "arithmetic",
        difficulty: "medium",
        marks: 1,
        text: {
          en: "Find the greatest number which divides 62, 132 and 237 leaving the same remainder in each case.",
        },
        options: [
          { id: "opt1", en: "35" },
          { id: "opt2", en: "30" },
          { id: "opt3", en: "25" },
          { id: "opt4", en: "40" },
        ],
        correctAnswerId: "opt1",
        explanation: {
          en: "Required number is HCF of differences: |132 - 62| = 70, |237 - 132| = 105, |237 - 62| = 175. HCF of (70, 105, 175) = 35.",
        },
      },
      {
        id: "am8",
        subject: "arithmetic",
        difficulty: "easy",
        marks: 1,
        text: {
          en: "What is 15% of 60% of 500?",
        },
        options: [
          { id: "opt1", en: "45" },
          { id: "opt2", en: "50" },
          { id: "opt3", en: "30" },
          { id: "opt4", en: "60" },
        ],
        correctAnswerId: "opt1",
        explanation: {
          en: "500 × (60/100) × (15/100) = 500 × 0.6 × 0.15 = 300 × 0.15 = 45.",
        },
      },
      {
        id: "am9",
        subject: "arithmetic",
        difficulty: "medium",
        marks: 1,
        text: {
          en: "The perimeter of a square is equal to the perimeter of a rectangle with length 16 cm and breadth 12 cm. Find the area of the square.",
        },
        options: [
          { id: "opt1", en: "196 sq.cm" },
          { id: "opt2", en: "144 sq.cm" },
          { id: "opt3", en: "225 sq.cm" },
          { id: "opt4", en: "169 sq.cm" },
        ],
        correctAnswerId: "opt1",
        explanation: {
          en: "Perimeter of rectangle = 2(16 + 12) = 2(28) = 56 cm. Perimeter of square = 4a = 56 => side a = 14 cm. Area of square = a^2 = 14^2 = 196 sq.cm.",
        },
      },
      {
        id: "am10",
        subject: "arithmetic",
        difficulty: "hard",
        marks: 1,
        text: {
          en: "Two pipes A and B can fill a tank in 20 minutes and 30 minutes respectively. Both pipes are opened together, but pipe A is closed after 4 minutes. In how much total time will the tank be full?",
        },
        options: [
          { id: "opt1", en: "24 minutes" },
          { id: "opt2", en: "20 minutes" },
          { id: "opt3", en: "18 minutes" },
          { id: "opt4", en: "22 minutes" },
        ],
        correctAnswerId: "opt1",
        explanation: {
          en: "Capacity = LCM(20, 30) = 60 units. Rate of A = 3 units/min, Rate of B = 2 units/min. In 4 minutes, both fill: (3+2) × 4 = 20 units. Remaining = 60 - 20 = 40 units. Time taken by B alone = 40 / 2 = 20 minutes. Total time = 4 + 20 = 24 minutes.",
        },
      },
    ],
  },
  {
    id: "reasoning-logic-blitz",
    title: {
      en: "Logical Reasoning & Mental Ability Booster",
    },
    subtitle: {
      en: "Master blood relations, coding-decoding, syllogisms and direction sense",
    },
    badge: {
      en: "High-Scoring Reasoning Booster",
    },
    category: "reasoning",
    durationMinutes: 10,
    totalMarks: 8,
    questions: [
      {
        id: "r1",
        subject: "reasoning",
        difficulty: "medium",
        marks: 1,
        text: {
          en: "A man walks 5 km South, then turns right and walks 3 km. Then he turns left and walks 5 km. In which direction is he now from his starting point?",
        },
        options: [
          { id: "opt1", en: "South-West" },
          { id: "opt2", en: "South-East" },
          { id: "opt3", en: "North-West" },
          { id: "opt4", en: "West" },
        ],
        correctAnswerId: "opt1",
        explanation: {
          en: "Starting point (0,0). Walks South -> (0, -5). Turns right (facing South, right is West) -> (-3, -5). Turns left (facing West, left is South) -> (-3, -10). The coordinate (-3, -10) is South-West of origin.",
        },
      },
      {
        id: "r2",
        subject: "reasoning",
        difficulty: "easy",
        marks: 1,
        text: {
          en: "Statements: All mangoes are golden. All golden things are precious. Conclusion I: All mangoes are precious. Conclusion II: Some precious things are mangoes.",
        },
        options: [
          { id: "opt1", en: "Both I and II follow" },
          { id: "opt2", en: "Only I follows" },
          { id: "opt3", en: "Only II follows" },
          { id: "opt4", en: "Neither I nor II follows" },
        ],
        correctAnswerId: "opt1",
        explanation: {
          en: "All Mangoes -> Golden -> Precious. Therefore All Mangoes are Precious (I follows). Also since All Mangoes are Precious, Some Precious things are Mangoes (II follows).",
        },
      },
      {
        id: "r3",
        subject: "reasoning",
        difficulty: "medium",
        marks: 1,
        text: {
          en: "Find the odd one out among the following: (A) 27, (B) 64, (C) 125, (D) 144",
        },
        options: [
          { id: "opt1", en: "27" },
          { id: "opt2", en: "64" },
          { id: "opt3", en: "125" },
          { id: "opt4", en: "144" },
        ],
        correctAnswerId: "opt4",
        explanation: {
          en: "27 = 3^3, 64 = 4^3, 125 = 5^3 are all perfect cubes. 144 is 12^2 (not a cube of an integer).",
        },
      },
      {
        id: "r4",
        subject: "reasoning",
        difficulty: "hard",
        marks: 1,
        text: {
          en: "If 1st January 2024 was Monday, what day of the week was 1st January 2025?",
        },
        options: [
          { id: "opt1", en: "Tuesday" },
          { id: "opt2", en: "Wednesday" },
          { id: "opt3", en: "Thursday" },
          { id: "opt4", en: "Friday" },
        ],
        correctAnswerId: "opt2",
        explanation: {
          en: "2024 is a leap year (366 days). Number of odd days in a leap year = 366 mod 7 = 2 odd days. Monday + 2 days = Wednesday.",
        },
      },
      {
        id: "r5",
        subject: "reasoning",
        difficulty: "medium",
        marks: 1,
        text: {
          en: "In a row of 40 students, Rahul is 14th from the left end. What is his position from the right end?",
        },
        options: [
          { id: "opt1", en: "26th" },
          { id: "opt2", en: "27th" },
          { id: "opt3", en: "28th" },
          { id: "opt4", en: "25th" },
        ],
        correctAnswerId: "opt2",
        explanation: {
          en: "Formula: Total = Left + Right - 1 => 40 = 14 + Right - 1 => Right = 40 - 13 = 27th position.",
        },
      },
      {
        id: "r6",
        subject: "reasoning",
        difficulty: "easy",
        marks: 1,
        text: {
          en: "Doctor : Stethoscope :: Sculptor : ?",
        },
        options: [
          { id: "opt1", en: "Chisel" },
          { id: "opt2", en: "Anvil" },
          { id: "opt3", en: "Pen" },
          { id: "opt4", en: "Brush" },
        ],
        correctAnswerId: "opt1",
        explanation: {
          en: "A doctor uses a stethoscope as their primary tool. A sculptor uses a chisel to carve sculptures.",
        },
      },
      {
        id: "r7",
        subject: "reasoning",
        difficulty: "medium",
        marks: 1,
        text: {
          en: "How many triangles are there in a standard pentagram (5-pointed star)?",
        },
        options: [
          { id: "opt1", en: "5" },
          { id: "opt2", en: "10" },
          { id: "opt3", en: "8" },
          { id: "opt4", en: "12" },
        ],
        correctAnswerId: "opt2",
        explanation: {
          en: "In a 5-pointed star, there are 5 small corner triangles and 5 large overlapping triangles formed by each vertex opposite the two adjacent vertices. Total = 5 + 5 = 10 triangles.",
        },
      },
      {
        id: "r8",
        subject: "reasoning",
        difficulty: "easy",
        marks: 1,
        text: {
          en: "Find the next term in the letter series: B, E, H, K, N, ?",
        },
        options: [
          { id: "opt1", en: "P" },
          { id: "opt2", en: "Q" },
          { id: "opt3", en: "R" },
          { id: "opt4", en: "S" },
        ],
        correctAnswerId: "opt2",
        explanation: {
          en: "Each letter is advanced by +3 positions: B(2) + 3 = E(5); + 3 = H(8); + 3 = K(11); + 3 = N(14); + 3 = Q(17).",
        },
      },
    ],
  },
];
