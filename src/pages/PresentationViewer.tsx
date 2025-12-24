import { useParams, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCourseById, getPresentationById } from '../data/courses';

export function PresentationViewer() {
  const { courseId, presentationId } = useParams<{ courseId: string; presentationId: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const course = courseId ? getCourseById(courseId) : undefined;
  const presentation = courseId && presentationId 
    ? getPresentationById(courseId, presentationId) 
    : undefined;

  // Map presentation IDs to their HTML files
  const presentationMap: Record<string, string> = {
    'options-trading-intro': '/presentation-options-trading.html',
    'put-call-parity': '/presentation-put-call-parity.html',
    'microeconomics-intro': '/presentation-microeconomics.html',
    'supply-demand': '/presentation-supply-demand.html',
    'elasticity': '/presentation-elasticity.html',
    'macro-intro': '/presentation-macro-intro.html',
  };

  const presentationUrl = presentationId ? presentationMap[presentationId] : undefined;

  if (!course || !presentation) {
    return <Navigate to="/courses" replace />;
  }

  // Check if presentation file exists
  useEffect(() => {
    if (presentationUrl) {
      fetch(presentationUrl, { method: 'HEAD' })
        .then(response => {
          if (!response.ok) {
            setError('Presentation file not found');
            setLoading(false);
          }
        })
        .catch(() => {
          setError('Failed to load presentation');
          setLoading(false);
        });
    }
  }, [presentationUrl]);

  if (!presentationUrl) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-red-800 mb-2">Error</h2>
          <p className="text-sm sm:text-base text-red-600 mb-4">Presentation not found</p>
          <Link
            to={`/course/${courseId}`}
            className="inline-block text-sm sm:text-base text-[var(--color-accent)] hover:underline"
          >
            ← Back to Course
          </Link>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-red-800 mb-2">Error</h2>
          <p className="text-sm sm:text-base text-red-600 mb-4">{error}</p>
          <Link
            to={`/course/${courseId}`}
            className="inline-block text-sm sm:text-base text-[var(--color-accent)] hover:underline"
          >
            ← Back to Course
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Bar */}
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
            <div className="flex-1 min-w-0">
              <Link
                to={`/course/${courseId}`}
                className="text-xs sm:text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors inline-block mb-1"
              >
                ← Back to {course.title}
              </Link>
              <h1 className="text-base sm:text-lg md:text-xl font-semibold text-[var(--color-text-primary)] truncate">
                {presentation.title}
              </h1>
            </div>
            <button
              onClick={() => window.print()}
              className="px-3 sm:px-4 py-2 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-secondary)] transition-colors text-xs sm:text-sm font-medium w-full sm:w-auto flex-shrink-0"
            >
              Print / Save PDF
            </button>
          </div>
        </div>
      </div>

      {/* Loading indicator */}
      {loading && (
        <div className="flex-1 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
          <div className="text-center">
            <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-sm sm:text-base text-white/70">Loading presentation...</p>
          </div>
        </div>
      )}

      {/* Presentation iframe */}
      <iframe
        src={presentationUrl}
        className="flex-1 w-full border-none"
        style={{ 
          display: loading ? 'none' : 'block',
          minHeight: 'calc(100vh - 80px)',
          width: '100%'
        }}
        onLoad={() => {
          setLoading(false);
          setError(null);
        }}
        onError={() => {
          setLoading(false);
          setError('Failed to load presentation content');
        }}
        title={presentation.title}
        allow="fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}

