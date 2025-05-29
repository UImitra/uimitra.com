import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Palette, Target, Globe, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const mainServices = [
  {
    title: 'UI/UX & Graphic Design',
    description: 'Digital experiences that captivate, engage, and convert. UI/UX, web, app, and graphic design for brands that want to stand out.',
    icon: <Palette size={32} />, // Lucide icon
    features: [
      'UI/UX Design',
      'Web Design',
      'App Design',
      'AI Design',
      'Graphic Design',
    ],
    link: '/services/ui-ux-graphic-design',
    color: 'from-pink-500 to-pink-300',
  },
  {
    title: 'Brand Design & Build',
    description: 'Crafting brands that inspire, influence, and endure. Strategy, identity, guidelines, and implementation for powerful brands.',
    icon: <Target size={32} />, // Lucide icon
    features: [
      'Brand Strategy',
      'Logo Design',
      'Brand Guidelines',
      'Visual Identity',
      'Brand Development',
    ],
    link: '/services/brand-design-build',
    color: 'from-yellow-500 to-yellow-300',
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven digital marketing for real, measurable impact. SEO, content, social, email, analytics, and more.',
    icon: <Globe size={32} />, // Lucide icon
    features: [
      'Digital Marketing',
      'SEO',
      'Social Media Marketing',
      'Email Marketing',
      'Analytics & Reporting',
    ],
    link: '/services/digital-marketing',
    color: 'from-blue-500 to-blue-300',
  },
  {
    title: 'Social Media',
    description: 'Grow your brand\'s presence and community across every platform. Strategy, content, engagement, and analytics for all major social channels.',
    icon: <Users size={32} />, // Lucide icon
    features: [
      'YouTube - Targeted Video Campaigns',
      'LinkedIn - Professional Audience Outreach',
      'X (Twitter) - Real-Time Trend Marketing',
      'Instagram - Visual Content Promotion',
      'Others - Multi-Platform Reach',
    ],
    link: '/services/social-media',
    color: 'from-purple-500 to-purple-300',
  },
];

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pb-20 relative overflow-hidden bg-gradient-to-br from-[#f5f7fa] via-[#fff0f6] to-[#fbeee6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 mt-12">
          <motion.p 
            className="text-primary font-medium mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            OUR MAIN SERVICES
          </motion.p>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What We Do Best
          </motion.h1>
          <motion.p 
            className="text-dark/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our core offerings that help brands grow, engage, and succeed in the digital world.
          </motion.p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {mainServices.map((service, idx) => (
            <motion.div
              key={service.title}
              className={`relative rounded-3xl overflow-hidden shadow-xl bg-white/90 border border-primary/10 flex flex-col h-full group transition-transform duration-300 hover:scale-[1.03]`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`p-8 flex flex-col flex-1`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br ${service.color} text-white text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-primary group-hover:text-[var(--gradient-1)] transition-colors duration-300">{service.title}</h3>
                <p className="text-dark/70 mb-6 text-lg">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx2) => (
                    <li key={idx2} className="flex items-center text-dark/80">
                      <span className="w-2 h-2 rounded-full bg-primary mr-3 inline-block" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-2)] text-white font-semibold text-base shadow-md hover:scale-105 hover:shadow-lg transition-all"
                  >
                    Learn More <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
              {/* Animated border */}
              <motion.div 
                className="absolute inset-0 rounded-3xl z-10 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-3xl border-2 border-primary/30"
                  animate={{
                    borderColor: [
                      "rgba(237, 24, 79, 0.2)",
                      "rgba(240, 90, 40, 0.2)",
                      "rgba(244, 122, 82, 0.2)",
                      "rgba(240, 77, 117, 0.2)",
                      "rgba(237, 24, 79, 0.2)"
                    ]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;