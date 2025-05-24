import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cookie, Info, Settings, Shield, ArrowUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../Navbar/Navbar';
import Footer from '../Footer';

const CookiePolicyPage: React.FC = () => {
  const [showTop, setShowTop] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <Helmet>
        <title>Cookie Policy | Website Cookie Usage & Tracking | Uimitra</title>
        <meta name="description" content="Learn about Uimitra's cookie policy and how we use cookies and similar technologies to enhance your browsing experience. Understand what cookies we use and how to manage them." />
        <meta name="keywords" content="cookie policy, website cookies, tracking cookies, cookie management, browser cookies, cookie settings, data tracking, website tracking, Uimitra cookies, cookie preferences" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://uimitra.com/cookie-policy" />
        <meta property="og:title" content="Cookie Policy | Website Cookie Usage & Tracking | Uimitra" />
        <meta property="og:description" content="Learn about Uimitra's cookie policy and how we use cookies and similar technologies to enhance your browsing experience. Understand what cookies we use and how to manage them." />
        <meta property="og:image" content="https://uimitra.com/images/cookie-policy.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://uimitra.com/cookie-policy" />
        <meta name="twitter:title" content="Cookie Policy | Website Cookie Usage & Tracking | Uimitra" />
        <meta name="twitter:description" content="Learn about Uimitra's cookie policy and how we use cookies and similar technologies to enhance your browsing experience. Understand what cookies we use and how to manage them." />
        <meta name="twitter:image" content="https://uimitra.com/images/cookie-policy.jpg" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://uimitra.com/cookie-policy" />
      </Helmet>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white via-light to-white">
        <motion.div 
          className="bg-gradient-to-r from-primary to-secondary text-white py-12 px-4 text-center shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-2 flex items-center justify-center gap-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cookie Policy
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            How Uimitra uses cookies and your choices
          </motion.p>
          <motion.p 
            className="text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Last updated: {new Date().toLocaleDateString()}
          </motion.p>
        </motion.div>
        <motion.div 
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* What are cookies? */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Cookie className="w-6 h-6 text-primary" /> 
              <h2 className="text-2xl font-bold text-primary">What are cookies?</h2>
            </div>
            <p className="text-gray-700">
              Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work, improve user experience, and provide information to site owners.
            </p>
          </motion.section>

          <div className="my-8 h-0.5 bg-gradient-to-r from-primary/10 via-secondary/10 to-transparent rounded-full" />

          {/* How we use cookies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">How We Use Cookies</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                To enable essential site functionality (e.g., navigation, forms, security).
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                To remember your preferences and settings.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                To analyze site usage and improve our services.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                To deliver personalized content and marketing (with your consent where required).
              </motion.li>
            </ul>
          </motion.section>

          <div className="my-8 h-0.5 bg-gradient-to-r from-primary/10 via-secondary/10 to-transparent rounded-full" />

          {/* Types of cookies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Types of Cookies We Use</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <span className="font-semibold">Essential cookies:</span> Required for the website to function properly.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <span className="font-semibold">Analytics cookies:</span> Help us understand how visitors interact with our site.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <span className="font-semibold">Preference cookies:</span> Remember your choices and settings.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <span className="font-semibold">Marketing cookies:</span> Used to deliver relevant ads and track campaign effectiveness.
              </motion.li>
            </ul>
          </motion.section>

          <div className="my-8 h-0.5 bg-gradient-to-r from-primary/10 via-secondary/10 to-transparent rounded-full" />

          {/* Managing cookies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Managing Cookies</h2>
            </div>
            <p className="text-gray-700 mb-2">
              You can manage or disable cookies through your browser settings. Most browsers allow you to refuse or delete cookies. Please note that disabling cookies may affect the functionality of our website.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                For more information, visit your browser's help section.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                To opt out of analytics cookies, you may use browser add-ons or privacy settings.
              </motion.li>
            </ul>
          </motion.section>

          <div className="my-8 h-0.5 bg-gradient-to-r from-primary/10 via-secondary/10 to-transparent rounded-full" />

          {/* Contact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Info className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Contact</h2>
            </div>
            <p className="text-gray-700">
              If you have any questions about our Cookie Policy, please contact us at <a href="mailto:info@uimitra.com" className="text-primary underline">info@uimitra.com</a>.
            </p>
          </motion.section>
        </motion.div>
        {showTop && (
          <motion.button
            onClick={handleBackToTop}
            className="fixed bottom-6 right-6 z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-secondary transition-colors"
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CookiePolicyPage; 