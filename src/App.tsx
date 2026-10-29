import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import { ScrollToTop, SmoothScroll, ToneProvider } from './components/layout/chrome';
import { legacyServiceMap } from './data/services';

const Home = lazy(() => import('./pages/Home'));
const Work = lazy(() => import('./pages/Work'));
const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const Services = lazy(() => import('./pages/Services'));
const Service = lazy(() => import('./pages/Service'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Legal = lazy(() => import('./pages/Legal'));
const NotFound = lazy(() => import('./pages/NotFound'));

/** /services/<old-slug> from the previous site -> the page that now covers it */
function ServiceRoute() {
  const { slug = '' } = useParams();
  const target = legacyServiceMap[slug];
  if (target) return <Navigate to={`/services/${target}`} replace />;
  return <Service />;
}

export default function App() {
  const location = useLocation();

  return (
    <HelmetProvider>
      <ToneProvider>
        <SmoothScroll>
          <ScrollToTop />
          <Nav />
          <main id="main">
            <Suspense fallback={<div className="min-h-screen bg-paper" />}>
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/work/:slug" element={<CaseStudy />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/:slug" element={<ServiceRoute />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy-policy" element={<Legal doc="privacy" />} />
                  <Route path="/terms" element={<Legal doc="terms" />} />
                  <Route path="/cookie-policy" element={<Legal doc="cookies" />} />

                  {/* old URLs */}
                  <Route path="/success-stories" element={<Navigate to="/work" replace />} />
                  <Route path="/portfolio" element={<Navigate to="/work" replace />} />
                  <Route path="/team" element={<Navigate to="/about" replace />} />
                  <Route path="/technology" element={<Navigate to="/services" replace />} />
                  <Route path="/lets-connect" element={<Navigate to="/contact" replace />} />

                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AnimatePresence>
            </Suspense>
          </main>
          <Footer />
          <div className="grain" aria-hidden />
        </SmoothScroll>
      </ToneProvider>
    </HelmetProvider>
  );
}
