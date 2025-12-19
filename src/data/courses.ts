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
    title: 'Derivatives Trading',
    description: 'Comprehensive course on derivatives trading, including options, futures, and advanced strategies.',
    category: 'Finance',
    presentations: [
      {
        id: 'options-trading-intro',
        title: 'Introduction to Options',
        description: 'From Basic Concepts to Practical Strategies',
        duration: '45 minutes',
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

