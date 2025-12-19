import { useParams, Link, Navigate } from 'react-router-dom';
import { getCourseById } from '../data/courses';

export function CoursePage() {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courseId ? getCourseById(courseId) : undefined;

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 sm:mb-8">
        <ol className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-[var(--color-text-secondary)] flex-wrap">
          <li>
            <Link to="/" className="hover:text-[var(--color-accent)] transition-colors">
              Home
            </Link>
          </li>
          <li className="mx-1">/</li>
          <li>
            <Link to="/courses" className="hover:text-[var(--color-accent)] transition-colors">
              Courses
            </Link>
          </li>
          <li className="mx-1">/</li>
          <li className="text-[var(--color-text-primary)] truncate max-w-[150px] sm:max-w-none">
            {course.title}
          </li>
        </ol>
      </nav>

      {/* Course Header */}
      <div className="mb-8 sm:mb-12">
        <div className="h-48 sm:h-56 md:h-64 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-secondary)] rounded-lg flex items-center justify-center mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4">
            {course.title}
          </h1>
        </div>
        <p className="text-base sm:text-lg text-[var(--color-text-secondary)] max-w-3xl">
          {course.description}
        </p>
      </div>

      {/* Presentations List */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mb-4 sm:mb-6">
          Presentations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {course.presentations.map((presentation) => (
            <Link
              key={presentation.id}
              to={`/course/${courseId}/presentation/${presentation.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4 sm:p-6 group border border-gray-200"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors pr-2 flex-1">
                  {presentation.title}
                </h3>
                <span className="text-[var(--color-accent)] group-hover:translate-x-1 transition-transform text-lg sm:text-xl flex-shrink-0">
                  →
                </span>
              </div>
              <p className="text-sm sm:text-base text-[var(--color-text-secondary)] mb-3 sm:mb-4">
                {presentation.description}
              </p>
              {presentation.duration && (
                <div className="flex items-center text-xs sm:text-sm text-[var(--color-text-secondary)]">
                  <svg
                    className="w-4 h-4 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {presentation.duration}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

