export interface Presentation {
  id: string;
  title: string;
  description: string;
  duration?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  presentations: Presentation[];
}

export const courses: Course[] = [
  {
    id: 'derivatives',
    title: 'Derivatives',
    description: 'Comprehensive course on derivatives, including options, futures, and advanced strategies.',
    category: 'Finance',
    presentations: [
      {
        id: 'options-trading-intro',
        title: 'Introduction to Options',
        description: 'From Basic Concepts to Practical Strategies',
        duration: '45 minutes',
      },
      {
        id: 'put-call-parity',
        title: 'Put-Call Parity',
        description: 'The Fundamental Relationship with Interactive Calculator',
        duration: '40 minutes',
      },
    ],
  },
  {
    id: 'microeconomics',
    title: 'Microeconomics',
    description: 'Explore fundamental microeconomic principles, market structures, consumer behavior, and firm decision-making.',
    category: 'Economics',
    presentations: [
      {
        id: 'microeconomics-intro',
        title: 'Introduction to Microeconomics',
        description: 'Principles, Markets & Decision Making',
        duration: '60 minutes',
      },
      {
        id: 'supply-demand',
        title: 'Demand, Supply & Market Equilibrium',
        description: 'Understanding How Markets Work',
        duration: '55 minutes',
      },
      {
        id: 'elasticity',
        title: 'Elasticity',
        description: 'Measuring Responsiveness in Markets',
        duration: '50 minutes',
      },
    ],
  },
  {
    id: 'macroeconomics',
    title: 'Macroeconomics',
    description: 'Study the economy as a whole: GDP, inflation, unemployment, monetary policy, fiscal policy, and economic growth.',
    category: 'Economics',
    presentations: [
      {
        id: 'macro-intro',
        title: 'Introduction to Macroeconomics',
        description: 'Understanding the Economy as a Whole',
        duration: '55 minutes',
      },
    ],
  },
  // Add more courses here as needed
];

export function getCourseById(id: string): Course | undefined {
  return courses.find(course => course.id === id);
}

export function getPresentationById(courseId: string, presentationId: string): Presentation | undefined {
  const course = getCourseById(courseId);
  return course?.presentations.find(p => p.id === presentationId);
}

