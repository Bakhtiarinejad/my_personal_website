import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CoursePage } from './pages/CoursePage';
import { PresentationViewer } from './pages/PresentationViewer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<HomePage />} />
            <Route path="/about" element={<PlaceholderPage title="About Us" />} />
            <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
            <Route path="/course/:courseId" element={<CoursePage />} />
            <Route path="/course/:courseId/presentation/:presentationId" element={<PresentationViewer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-[var(--color-text-primary)] mb-4 sm:mb-6">{title}</h1>
      <p className="text-base sm:text-lg text-[var(--color-text-secondary)]">
        This page is coming soon. Please check back later.
      </p>
    </div>
  );
}

