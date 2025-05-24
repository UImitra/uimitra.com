import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText, User, Lock, AlertTriangle, Book, Mail, Info, ChevronDown, ChevronUp, ArrowUp
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../Navbar/Navbar';
import Footer from '../Footer';

const faqs = [
  {
    id: 'intro',
    icon: <FileText className="w-6 h-6 text-primary/70" />,
    question: 'What are the Terms & Conditions for using Uimitra?',
    answer: 'By accessing or using Uimitra, you agree to follow these Terms & Conditions. If you do not agree, please do not use our services. These terms may be updated from time to time, and continued use means you accept any changes.',
  },
  {
    id: 'user',
    icon: <User className="w-6 h-6 text-primary/70" />,
    question: 'What are my responsibilities as a user?',
    answer: 'You must provide accurate information, keep your login details secure, and use Uimitra only for lawful purposes. Do not attempt to hack, disrupt, or misuse the platform. You are responsible for all activity under your account.',
  },
  {
    id: 'ip',
    icon: <Book className="w-6 h-6 text-primary/70" />,
    question: 'Who owns the content and intellectual property?',
    answer: 'All content, branding, and intellectual property on Uimitra belong to us or our licensors. You may not copy, share, or use our content without written permission. Content you create remains yours, but you grant us a license to use it for providing our services.',
  },
  {
    id: 'liability',
    icon: <AlertTriangle className="w-6 h-6 text-primary/70" />,
    question: 'What are the limitations of liability?',
    answer: 'Uimitra is provided as-is. We do not guarantee uninterrupted or error-free service. We are not liable for any indirect, incidental, or consequential damages resulting from your use of the platform.',
  },
  {
    id: 'termination',
    icon: <Lock className="w-6 h-6 text-primary/70" />,
    question: 'Can my access be terminated?',
    answer: 'We may suspend or terminate your account at any time if you violate these terms, misuse the platform, or act in a way that harms other users or our business. We may also remove content that violates our policies.',
  },
  {
    id: 'law',
    icon: <Book className="w-6 h-6 text-primary/70" />,
    question: 'What law governs these terms?',
    answer: 'These Terms & Conditions are governed by the laws of India. Any disputes will be resolved in the courts of Bengaluru, Karnataka, India.',
  },
  {
    id: 'contact',
    icon: <Mail className="w-6 h-6 text-primary/70" />,
    question: 'How can I contact Uimitra?',
    answer: 'If you have questions or concerns about these Terms & Conditions, email us at info@uimitra.com.',
  },
];

const keyPoints = [
  'Use Uimitra lawfully and responsibly.',
  'Respect intellectual property and content ownership.',
  'We may suspend accounts for violations.',
  'We are not liable for indirect damages.',
  'Contact us at info@uimitra.com for questions.'
];

const TermsPage: React.FC = () => {
  const [open, setOpen] = useState<string | null>(faqs[0].id);
  const [showTop, setShowTop] = useState(false);
  const [search, setSearch] = useState('');

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

  // Filter FAQs by search
  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase()) ||
    faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Terms of Service | Legal Terms & Conditions | Uimitra</title>
        <meta name="description" content="Read Uimitra's terms of service and legal conditions. Understand your rights, responsibilities, and our service agreements when using our digital services and solutions." />
        <meta name="keywords" content="terms of service, legal terms, conditions of use, service agreement, user agreement, legal policy, Uimitra terms, usage policy, service conditions, legal requirements" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://uimitra.com/terms" />
        <meta property="og:title" content="Terms of Service | Legal Terms & Conditions | Uimitra" />
        <meta property="og:description" content="Read Uimitra's terms of service and legal conditions. Understand your rights, responsibilities, and our service agreements when using our digital services and solutions." />
        <meta property="og:image" content="https://uimitra.com/favicon-uimitra.svg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://uimitra.com/terms" />
        <meta name="twitter:title" content="Terms of Service | Legal Terms & Conditions | Uimitra" />
        <meta name="twitter:description" content="Read Uimitra's terms of service and legal conditions. Understand your rights, responsibilities, and our service agreements when using our digital services and solutions." />
        <meta name="twitter:image" content="https://uimitra.com/favicon-uimitra.svg" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://uimitra.com/terms" />
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
            className="text-4xl md:text-5xl font-bold mb-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Terms & Conditions
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Please read these terms and conditions carefully before using Uimitra
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
          className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16 py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Search Bar */}
          <motion.div 
            className="mb-10 flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search terms or questions..."
              className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-primary/40 text-base bg-white/60"
            />
          </motion.div>
          {/* FAQ List */}
          <div className="space-y-10">
            {filteredFaqs.length === 0 && (
              <motion.div 
                className="text-center text-gray-400 py-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                No results found.
              </motion.div>
            )}
            {filteredFaqs.map((faq, idx) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`rounded-2xl shadow bg-white/80 overflow-hidden border-l-4 ${open === faq.id ? 'border-primary/40 bg-gray-50' : 'border-transparent'} transition-all duration-300 px-8 py-8`}
              >
                <button
                  className={`w-full flex items-center justify-between gap-4 px-2 py-6 text-left focus:outline-none transition-colors ${open === faq.id ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
                  onClick={() => setOpen(open === faq.id ? null : faq.id)}
                  aria-expanded={open === faq.id}
                  aria-controls={`faq-${faq.id}`}
                >
                  <motion.div
                    className="flex items-center gap-4"
                    animate={open === faq.id ? { scale: 1.05 } : { scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span
                      animate={open === faq.id ? { rotate: 8 } : { rotate: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {faq.icon}
                    </motion.span>
                    <span className="font-semibold text-lg text-primary/80">{faq.question}</span>
                  </motion.div>
                  {open === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-primary/70" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary/70" />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {open === faq.id && (
                    <motion.div
                      id={`faq-${faq.id}`}
                      key={faq.id}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1, boxShadow: '0 8px 32px rgba(237,24,79,0.04)' }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-2 pt-4 pb-2 text-gray-600 text-base leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Back to Top Button */}
        {showTop && (
          <motion.button
            onClick={handleBackToTop}
            className="fixed bottom-6 right-6 z-50 bg-primary/80 text-white p-3 rounded-full shadow-lg hover:bg-secondary/80 transition-colors"
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

export default TermsPage; 