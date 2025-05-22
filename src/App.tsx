import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FloatingParticles from './components/FloatingParticles';
import ParallaxText from './components/Home/ParallaxText';
import PrivacyPolicyPage from './components/Footer/policies/PrivacyPolicyPage';
import LetsConnectPage from './components/Footer/LetsConnectPage';
import CookiePolicyPage from './components/Footer/policies/CookiePolicyPage';
import TermsPage from './components/Footer/policies/TermsPage';

// Lazy load components
const Hero = lazy(() => import('./components/Home/Hero'));
const AboutPage = lazy(() => import('./components/Company/AboutPage'));
const TeamPage = lazy(() => import('./components/Company/TeamPage'));
const ServicesPage = lazy(() => import('./components/ServicesPage'));
const ContactPage = lazy(() => import('./components/Contact/ContactPage'));
const UIUXSection = lazy(() => import('./components/Services/UIUXGraphics/UIUXSection'));
const WebDesignPage = lazy(() => import('./components/Services/UIUXGraphics/WebDesignPage'));
const AppDesignPage = lazy(() => import('./components/Services/UIUXGraphics/AppDesignPage'));
const GraphicsDesignPage = lazy(() => import('./components/Services/UIUXGraphics/GraphicsDesignPage'));
const AIEnhancedDesignPage = lazy(() => import('./components/Services/UIUXGraphics/AIEnhancedDesignPage'));
const SuccessStoriesPage = lazy(() => import('./components/Company/SuccessStoriesPage'));
const LogoDesignPage = lazy(() => import('./components/Services/Brand/LogoDesignPage'));
const BrandStrategyPage = lazy(() => import('./components/Services/Brand/BrandStrategyPage'));
const BrandGuidelinesPage = lazy(() => import('./components/Services/Brand/BrandGuidelinesPage'));
const BrandIdentityPage = lazy(() => import('./components/Services/Brand/BrandIdentityPage'));
const BrandDevelopmentPage = lazy(() => import('./components/Services/Brand/BrandDevelopmentPage'));
const DigitalMarketingPage = lazy(() => import('./components/Services/DigitalMarketing/DigitalMarketingPage'));
const SEOServicesPage = lazy(() => import('./components/Services/DigitalMarketing/SEOServicesPage'));
const SocialMediaMarketingPage = lazy(() => import('./components/Services/DigitalMarketing/SocialMediaMarketingPage'));
const EmailMarketingPage = lazy(() => import('./components/Services/DigitalMarketing/EmailMarketingPage'));
const AnalyticsReportingPage = lazy(() => import('./components/Services/DigitalMarketing/AnalyticsReportingPage'));
const YouTubeMarketingPage = lazy(() => import('./components/Services/SocialMedia/YouTubeMarketingPage'));
const LinkedInMarketingPage = lazy(() => import('./components/Services/SocialMedia/LinkedInMarketingPage'));
const TwitterMarketingPage = lazy(() => import('./components/Services/SocialMedia/TwitterMarketingPage'));
const InstagramMarketingPage = lazy(() => import('./components/Services/SocialMedia/InstagramMarketingPage'));
const OtherPlatformsPage = lazy(() => import('./components/Services/SocialMedia/OtherPlatformsPage'));
const TechnologiesPage = lazy(() => import('./components/Technology/TechnologiesPage'));
const UIUXGraphicDesignPage = lazy(() => import('./components/mainservice/UIUXGraphicDesignPage'));
const BrandDesignBuildPage = lazy(() => import('./components/mainservice/BrandDesignBuildPage'));
const DigitalMarketing = lazy(() => import('./components/mainservice/DigitalMarketing'));
const SocialMedia = lazy(() => import('./components/mainservice/SocialMedia'));

// Loading component
const LoadingSpinner = () => (
  <div className="loading">
    <img src="/favicon-uimitra.svg" alt="Loading..." width="50" height="50" />
  </div>
);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  return (
    <HelmetProvider>
      <>
        <Helmet>
          {/* Primary Meta Tags - Optimized length */}
          <title>UI Meets Trust, UX Meets Mitra | Professional Design Services</title>
          <meta name="description" content="Transform your digital presence with Uimitra's expert UI/UX design, brand development, and digital marketing services. Innovative solutions for modern businesses." />
          
          {/* Language */}
          <html lang="en" />
          
          {/* Canonical URL */}
          <link rel="canonical" href="https://uimitra.com" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://uimitra.com" />
          <meta property="og:title" content="UI Meets Trust, UX Meets Mitra | Professional Design Services" />
          <meta property="og:description" content="Transform your digital presence with Uimitra's expert UI/UX design, brand development, and digital marketing services. Innovative solutions for modern businesses." />
          <meta property="og:image" content="https://uimitra.com/og-image.jpg" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://uimitra.com" />
          <meta name="twitter:title" content="UI Meets Trust, UX Meets Mitra | Professional Design Services" />
          <meta name="twitter:description" content="Transform your digital presence with Uimitra's expert UI/UX design, brand development, and digital marketing services. Innovative solutions for modern businesses." />
          <meta name="twitter:image" content="https://uimitra.com/og-image.jpg" />
          
          {/* Keywords */}
          <meta name="keywords" content="UI design, UX design, digital marketing, brand development, web design, user interface, user experience, Uimitra" />
          
          {/* Schema.org structured data */}
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "name": "Uimitra",
                "description": "Transform your digital presence with Uimitra's expert UI/UX design, brand development, and digital marketing services. Innovative solutions for modern businesses.",
                "url": "https://uimitra.com",
                "logo": "https://uimitra.com/favicon-uimitra.svg",
                "sameAs": [
                  "https://linkedin.com/company/uimitra",
                  "https://twitter.com/UIMitra",
                  "https://instagram.com/ui.mitra"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "IN"
                },
                "priceRange": "$$",
                "serviceType": [
                  "UI/UX Design",
                  "Digital Marketing",
                  "Brand Development",
                  "Web Design"
                ]
              }
            `}
          </script>

          {/* Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `}
          </script>
        </Helmet>
        
        <Router>
          <ScrollToTop />
          <FloatingParticles />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={
                <>
                  <Navbar />
                  <Hero />
                  <Footer />
                </>
              } />
              <Route path="/about" element={
                <>
                  <Navbar />
                  <AboutPage />
                  <Footer />
                </>
              } />
              <Route path="/success-stories" element={
                <>
                  <Navbar />
                  <SuccessStoriesPage />
                  <Footer />
                </>
              } />
              <Route path="/team" element={
                <>
                  <Navbar />
                  <TeamPage />
                  <Footer />
                </>
              } />
              <Route path="/services" element={
                <>
                  <Navbar />
                  <ServicesPage />
                  <Footer />
                </>
              } />
              <Route path="/services/web-design" element={
                <>
                  <Navbar />
                  <WebDesignPage />
                  <Footer />
                </>
              } />
              <Route path="/services/logo-design" element={
                <>
                  <Navbar />
                  <LogoDesignPage />
                  <Footer />
                </>
              } />
              <Route path="/services/app-design" element={
                <>
                  <Navbar />
                  <AppDesignPage />
                  <Footer />
                </>
              } />
              <Route path="/services/graphics-design" element={
                <>
                  <Navbar />
                  <GraphicsDesignPage />
                  <Footer />
                </>
              } />
              <Route path="/services/ai-design" element={
                <>
                  <Navbar />
                  <AIEnhancedDesignPage />
                  <Footer />
                </>
              } />
              <Route path="/services/ui-ux-design" element={
                <>
                  <Navbar />
                  <UIUXSection />
                  <Footer />
                </>
              } />
              <Route path="/services/ui-ux-graphic-design" element={
                <>
                  <Navbar />
                  <UIUXGraphicDesignPage />
                  <Footer />
                </>
              } />
              <Route path="/services/brand-design-build" element={
                <>
                  <Navbar />
                  <BrandDesignBuildPage />
                  <Footer />
                </>
              } />        
              <Route path="/services/digital-marketing" element={
                <>
                  <Navbar />
                  <DigitalMarketing />
                  <Footer />
                </>
              } /> 
              <Route path="/services/social-media" element={
                <>
                  <Navbar />
                  <SocialMedia />
                  <Footer />
                </>
              } />
              <Route path="/services/brand-strategy" element={
                <>
                  <Navbar />
                  <BrandStrategyPage />
                  <Footer />
                </>
              } />
              <Route path="/services/brand-guidelines" element={
                <>
                  <Navbar />
                  <BrandGuidelinesPage />
                  <Footer />
                </>
              } />
              <Route path="/services/brand-identity" element={
                <>
                  <Navbar />
                  <BrandIdentityPage />
                  <Footer />
                </>
              } />
              <Route path="/services/brand-development" element={
                <>
                  <Navbar />
                  <BrandDevelopmentPage />
                  <Footer />
                </>
              } />
              <Route path="/services/digital-marketing-page" element={
                <>
                  <Navbar />
                  <DigitalMarketingPage />
                  <Footer />
                </>
              } />
              <Route path="/services/seo" element={
                <>
                  <Navbar />
                  <SEOServicesPage />
                  <Footer />
                </>
              } />
              <Route path="/services/social-media-page" element={
                <>
                  <Navbar />
                  <SocialMediaMarketingPage />
                  <Footer />
                </>
              } />
              <Route path="/services/youtube-marketing" element={
                <>
                  <Navbar />
                  <YouTubeMarketingPage />
                  <Footer />
                </>
              } />
              <Route path="/services/linkedin-marketing" element={
                <>
                  <Navbar />
                  <LinkedInMarketingPage />
                  <Footer />
                </>
              } />
              <Route path="/services/twitter-marketing" element={
                <>
                  <Navbar />
                  <TwitterMarketingPage />
                  <Footer />
                </>
              } />
              <Route path="/services/instagram-marketing" element={
                <>
                  <Navbar />
                  <InstagramMarketingPage />
                  <Footer />
                </>
              } />
              <Route path="/services/other-platforms" element={
                <>
                  <Navbar />
                  <OtherPlatformsPage />
                  <Footer />
                </>
              } />
              <Route path="/services/email-marketing" element={
                <>
                  <Navbar />
                  <EmailMarketingPage />
                  <Footer />
                </>
              } />
              <Route path="/services/analytics" element={
                <>
                  <Navbar />
                  <AnalyticsReportingPage />
                  <Footer />
                </>
              } />
              <Route path="/contact" element={
                <>
                  <Navbar />
                  <ContactPage />
                  <Footer />
                </>
              } />
              <Route path="/technology" element={
                <>
                  <Navbar />
                  <TechnologiesPage />
                  <Footer />
                </>
              } />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/lets-connect" element={
                <>
                  <Navbar />
                  <LetsConnectPage />
                  <Footer />
                </>
              } />
              <Route path="/cookie-policy" element={<CookiePolicyPage />} />
              <Route path="/terms" element={<TermsPage />} />
            </Routes>
          </Suspense>
        </Router>
      </>
    </HelmetProvider>
  );
};

export default App;