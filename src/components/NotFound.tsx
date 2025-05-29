import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, AnimatePresence } from 'framer-motion';

const funFacts = [
  "Did you know? The first website ever made is still online!",
  "Tip: You can always find your way home by clicking our logo.",
  "Fun fact: The word 'cat' is one of the most searched animal terms on the internet.",
  "Pro tip: Bookmark your favorite pages for quick access!",
  "Did you know? Our team loves coffee almost as much as we love great design."
];

const networkTips = [
  "Check your internet connection and try again.",
  "Try refreshing the page once your connection is restored.",
  "If the problem persists, try clearing your browser cache.",
  "Make sure you're connected to a stable network.",
  "Try switching between WiFi and mobile data."
];

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

const NotFound = ({ type = "404" }: { type?: "404" | "network" }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isNetwork = type === "network";
  const [fact] = useState(funFacts[Math.floor(Math.random() * funFacts.length)]);
  const [networkTip] = useState(networkTips[Math.floor(Math.random() * networkTips.length)]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="not-found"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#F5F7FA] via-[#ffe6ef] to-[#fbeee6] relative overflow-hidden"
      >
        {/* Animated floating shapes */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-4 left-2 w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 bg-pink-200 rounded-full opacity-30 animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-4 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 bg-yellow-100 rounded-full opacity-20 animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/4 w-10 h-10 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-[var(--primary)] rounded-full opacity-10 animate-bounce-slow"></div>
        </motion.div>

        <motion.div 
          className="flex flex-col items-center justify-center z-10 relative px-2 sm:px-4 md:px-8 py-8 w-full max-w-[95vw] min-h-[80vh]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Lottie Animation with floating and gentle scale/rotate effect */}
          <motion.div 
            className="sm:w-[450px] md:w-[500px] lg:w-[600px] xl:w-[700px] 2xl:w-[800px] max-w-full mb-6 sm:mb-8 drop-shadow-xl animate-float-rotate-scale"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <DotLottieReact
              src={isNetwork 
                ? "https://lottie.host/03be3a74-11e4-468a-95f1-d2629ae66177/dg8fV5eJWd.lottie"
                : "https://lottie.host/d970cbd5-7388-4f94-a17b-7134b3e1fe48/7Zztss77eF.lottie"
              }
              loop
              autoplay
            />
          </motion.div>

          {/* Engaging Error Text with fade/slide-in and wiggle on hover */}
          <motion.div 
            className="text-center mb-4 sm:mb-6 max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl animate-fadein"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--primary)] mb-2 sm:mb-4 drop-shadow animate-slidein hover:animate-wiggle cursor-pointer transition-transform"
              whileHover={{ scale: 1.02 }}
            >
              {isNetwork ? "You're Offline" : "404: Page Not Found"}
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-700 mb-1 sm:mb-2 animate-fadein-delay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {isNetwork 
                ? "No Internet Connection"
                : "Uh oh! You've reached the edge of the internet jungle."
              }
            </motion.p>
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-gray-500 mb-2 sm:mb-4 animate-fadein-delay2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {isNetwork 
                ? "Please check your internet connection and try again. We'll be here when you're back online!"
                : "Our playful cat couldn't find this page either. But don't worry, you can get back on track with the links below!"
              }
            </motion.p>
            <motion.p 
              className="text-xs sm:text-sm md:text-base text-gray-400 mb-4 sm:mb-6 italic animate-fadein-up"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {isNetwork ? networkTip : fact}
            </motion.p>
          </motion.div>

          {/* Quick Links with floating/fade-in animation */}
          <motion.div 
            className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center mb-6 sm:mb-8 animate-fadein-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {isNetwork ? (
              <></>
            ) : (
              <>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/" className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-[var(--primary)] text-white font-semibold text-sm sm:text-base md:text-lg hover:scale-110 hover:shadow-2xl transition-all shadow-md">Home</Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/services" className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white border-2 border-[var(--primary)] text-[var(--primary)] font-semibold text-sm sm:text-base md:text-lg hover:bg-[var(--primary)] hover:text-white hover:scale-110 hover:shadow-2xl transition-all shadow-md">Services</Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/about" className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white border-2 border-[var(--primary)] text-[var(--primary)] font-semibold text-sm sm:text-base md:text-lg hover:bg-[var(--primary)] hover:text-white hover:scale-110 hover:shadow-2xl transition-all shadow-md">About Us</Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact" className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white border-2 border-[var(--primary)] text-[var(--primary)] font-semibold text-sm sm:text-base md:text-lg hover:bg-[var(--primary)] hover:text-white hover:scale-110 hover:shadow-2xl transition-all shadow-md">Contact</Link>
                </motion.div>
              </>
            )}
          </motion.div>

          {/* Button with bounce-in animation */}
          {isNetwork ? (
            <motion.button
              onClick={() => {
                if (navigator.onLine) {
                  window.location.reload();
                } else {
                  // Show a message that user is still offline
                  alert("You're still offline. Please check your internet connection.");
                }
              }}
              className="inline-block px-6 sm:px-10 py-2 sm:py-3 text-white font-bold rounded-full bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-2)] hover:scale-110 hover:shadow-2xl transition-all text-base sm:text-xl shadow-lg animate-bounce-in"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Refresh Page
            </motion.button>
          ) : (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/"
                className="inline-block px-6 sm:px-10 py-2 sm:py-3 text-white font-bold rounded-full bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-2)] hover:scale-110 hover:shadow-2xl transition-all text-base sm:text-xl shadow-lg animate-bounce-in"
              >
                Take Me Home
              </Link>
            </motion.div>
          )}

          {/* Report a broken link */}
          {!isNetwork && (
            <motion.div 
              className="mt-6 sm:mt-8 text-center animate-fadein-delay5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <a
                href="mailto:info@uimitra.com?subject=Broken Link Report"
                className="text-[var(--primary)] underline hover:text-[var(--gradient-2)] transition-all text-xs sm:text-sm md:text-base"
              >
                Report a broken link
              </a>
            </motion.div>
          )}
        </motion.div>
        {/* Custom animations */}
        <style>
          {`
            .animate-pulse-slow {
              animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
            .animate-bounce-slow {
              animation: bounce 5s infinite alternate;
            }
            .animate-float-rotate-scale {
              animation: float-rotate-scale 6s ease-in-out infinite alternate;
            }
            .animate-fadein {
              animation: fadein 1s ease;
            }
            .animate-fadein-delay {
              animation: fadein 1.2s 0.2s ease both;
            }
            .animate-fadein-delay2 {
              animation: fadein 1.2s 0.4s ease both;
            }
            .animate-fadein-links {
              animation: fadein-links 1.2s 0.6s ease both;
            }
            .animate-fadein-up {
              animation: fadein-up 1.2s 0.8s ease both;
            }
            .animate-bounce-in {
              animation: bounce-in 1.2s 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) both;
            }
            .animate-fadein-delay5 {
              animation: fadein 1.2s 1.2s ease both;
            }
            .animate-slidein {
              animation: slidein 1s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .animate-pulse-fast {
              animation: pulse 2s infinite;
            }
            .animate-wiggle:hover {
              animation: wiggle 0.5s;
            }
            @keyframes pulse {
              0%, 100% { opacity: 0.2; }
              50% { opacity: 0.4; }
            }
            @keyframes bounce {
              0% { transform: translateY(0); }
              100% { transform: translateY(-30px); }
            }
            @keyframes float-rotate-scale {
              0% { transform: translateY(0) scale(1) rotate(0deg); }
              50% { transform: translateY(-10px) scale(1.04) rotate(2deg); }
              100% { transform: translateY(-20px) scale(1.08) rotate(-2deg); }
            }
            @keyframes fadein {
              from { opacity: 0; transform: translateY(30px);}
              to { opacity: 1; transform: translateY(0);}
            }
            @keyframes fadein-links {
              from { opacity: 0; transform: translateY(40px);}
              to { opacity: 1; transform: translateY(0);}
            }
            @keyframes fadein-up {
              from { opacity: 0; transform: translateY(40px);}
              to { opacity: 1; transform: translateY(0);}
            }
            @keyframes bounce-in {
              0% { opacity: 0; transform: scale(0.7) translateY(60px); }
              60% { opacity: 1; transform: scale(1.1) translateY(-10px); }
              80% { transform: scale(0.95) translateY(5px); }
              100% { opacity: 1; transform: scale(1) translateY(0); }
            }
            @keyframes slidein {
              from { opacity: 0; transform: translateX(-60px);}
              to { opacity: 1; transform: translateX(0);}
            }
            @keyframes wiggle {
              0% { transform: rotate(0deg); }
              20% { transform: rotate(-8deg); }
              40% { transform: rotate(8deg); }
              60% { transform: rotate(-6deg); }
              80% { transform: rotate(6deg); }
              100% { transform: rotate(0deg); }
            }
          `}
        </style>
      </motion.div>
    </AnimatePresence>
  );
};

export default NotFound;