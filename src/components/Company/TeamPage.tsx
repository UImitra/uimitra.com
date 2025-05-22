import React, { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Award, Brain, Trophy, Star, Target, Rocket,
  Zap, Crown, Medal, CheckCircle, Flag, Sparkles
} from 'lucide-react';
import AnimatedText from '../AnimatedText';
import { Helmet } from 'react-helmet-async';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  achievements: string[];
}

const TeamPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const teamMembers: TeamMember[] = [
    {
      name: "Dhiraj T H",
      role: "Chief Operating Officer",
      image: "src/assets/Dhiraj_uimitra.webp",
      bio: "Tech innovator and startup strategist with expertise in AI, automation, full-stack development, and mechanical design. Has contributed to high-impact research projects with ISRO (IIA), DRDO, and IISc, holding a patent for an AI-powered assistive device. Passionate about merging technology with R&D and building scalable, human-centered solutions.",
      expertise: [
        "AI & Automation",
        "Full-Stack Development",
        "Mechanical Design",
        "Digital Content Creation",
        "Strategic Operations",
        "Research & Develop"
      ],
      achievements: [
        "Patent: AI-powered assistive device for visually impaired",
        "Research collaborations with ISRO, DRDO, IISc",
        "Led multiple successful startups",
        "YouTube automation expert",
        "Digital content creation specialist",
        "Innovation in health tech"
      ]
    },
    {
      name: "Dharmesh Vadher",
      role: "Co-Founder & Chief Design Officer",
      image: "src/assets/Dharmesh_uimitra.webp",
      bio: "Design innovator focused on creating user-first digital experiences that drive business impact. Leads UImitra's design vision with a focus on solving real problems through thoughtful, innovative solutions. Combines aesthetic excellence with functional design to create intuitive, effective, and impactful experiences for businesses.",
      expertise: [
        "User Experience Design",
        "Interface Design",
        "Design Strategy",
        "User Research",
        "Visual Design",
        "Design Systems"
      ],
      achievements: [
        "Led enterprise design project transformations",
        "Created scalable design systems",
        "Innovative UX solutions",
        "Business impact through design",
        "User-centered design leadership",
        "Design thinking workshops"
      ]
    }
  ];

  const achievementIcons = [
    { icon: Trophy, color: "#F59E0B" },  // Golden yellow
    { icon: Star, color: "#4F46E5" },    // Indigo
    { icon: Target, color: "#10B981" },   // Emerald
    { icon: Rocket, color: "#8B5CF6" },   // Purple
    { icon: Crown, color: "#EC4899" },    // Pink
    { icon: Medal, color: "#F97316" }     // Orange
  ];

  return (
    <>
      <Helmet>
        <title>Our Team | Meet the Experts Behind Uimitra's Success</title>
        <meta name="description" content="Meet our talented team of designers, developers, and digital strategists. Discover the passionate professionals who make Uimitra a leader in digital innovation." />
        <meta name="keywords" content="Uimitra team, tech experts, UI/UX designers, developers, digital strategists, company culture, tech professionals, leadership team, development team" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://uimitra.com/company/team" />
        <meta property="og:title" content="Our Team | Meet the Experts Behind Uimitra's Success" />
        <meta property="og:description" content="Meet our talented team of designers, developers, and digital strategists. Discover the passionate professionals who make Uimitra a leader in digital innovation." />
        <meta property="og:image" content="https://uimitra.com/favicon-uimitra.svg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://uimitra.com/company/team" />
        <meta name="twitter:title" content="Our Team | Meet the Experts Behind Uimitra's Success" />
        <meta name="twitter:description" content="Meet our talented team of designers, developers, and digital strategists. Discover the passionate professionals who make Uimitra a leader in digital innovation." />
        <meta name="twitter:image" content="https://uimitra.com/favicon-uimitra.svg" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://uimitra.com/company/team" />
      </Helmet>
      
      <div className="min-h-screen pb-20 relative overflow-hidden" ref={containerRef}>
        {/* Hero Section */}
        <div className="relative mb-24 sm:mb-32">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ED184F] to-[#D1002E]" />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Meet Our Leadership Team
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Innovators and visionaries driving the future of digital transformation
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Team Members */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Background Pattern */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary to-secondary transform -skew-y-6 rounded-2xl sm:rounded-3xl"
                  animate={{
                    skewY: [-6, -3, -6],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Main Card */}
                <motion.div 
                  className="relative bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Image Section */}
                    <div className="relative h-[400px] xs:h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                      <motion.img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                        initial={{ scale: 1.2 }}
                        whileHover={{ scale: 1.1 }}
                        animate={{
                          scale: [1.05, 1.08, 1.05]
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      {/* Name Overlay */}
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <motion.h3 
                          className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-white"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {member.name}
                        </motion.h3>
                        <motion.p 
                          className="text-base xs:text-lg sm:text-xl md:text-2xl text-white/90"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {member.role}
                        </motion.p>
                      </motion.div>
                    </div>
                    
                    {/* Content Sections */}
                    <div className="bg-white p-6 sm:p-8 md:p-10 space-y-8 sm:space-y-10 rounded-b-2xl sm:rounded-b-3xl">
                      {/* Bio */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed text-justify">{member.bio}</p>
                      </motion.div>

                      {/* Expertise */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 180 }}
                            transition={{ duration: 0.3 }}
                            className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"
                          >
                            <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                          </motion.div>
                          <h4 className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">Areas of Expertise</h4>
                        </div>
                        <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-5 w-full">
                          {member.expertise.map((skill, i) => (
                            <motion.div
                              key={i}
                              className="flex justify-center w-full"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.2, delay: i * 0.1 }}
                            >
                              <motion.div
                                className="px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-white text-gray-800 text-xs xs:text-sm md:text-base w-full text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                                whileHover={{ 
                                  scale: 1.03,
                                }}
                                transition={{ duration: 0.2 }}
                              >
                                {skill}
                              </motion.div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Achievements */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                            className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"
                          >
                            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                          </motion.div>
                          <h4 className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">Key Achievements</h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                          {member.achievements.map((achievement, i) => {
                            const IconComponent = achievementIcons[i % achievementIcons.length].icon;
                            const iconColor = achievementIcons[i % achievementIcons.length].color;
                            
                            return (
                              <motion.div
                                key={i}
                                className="flex items-start gap-3 bg-white p-4 sm:p-5 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                whileHover={{ 
                                  scale: 1.03,
                                }}
                                transition={{ duration: 0.2, delay: i * 0.1 }}
                              >
                                <motion.div
                                  whileHover={{ rotate: 360 }}
                                  transition={{ duration: 0.3 }}
                                  className="flex items-center justify-center mt-1"
                                >
                                  <IconComponent 
                                    className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" 
                                    style={{ color: iconColor }}
                                  />
                                </motion.div>
                                <span className="text-sm sm:text-base text-gray-700 text-left flex-1">{achievement}</span>
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background Elements */}
        <motion.div 
          className="fixed top-40 right-0 w-[300px] xs:w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] 2xl:w-[800px] h-[300px] xs:h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] 2xl:h-[800px] rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl -z-10"
          animate={{ 
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="fixed bottom-40 left-0 w-[300px] xs:w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] 2xl:w-[800px] h-[300px] xs:h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] 2xl:h-[800px] rounded-full bg-gradient-to-r from-secondary/20 to-primary/20 blur-3xl -z-10"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </>
  );
};

export default TeamPage;