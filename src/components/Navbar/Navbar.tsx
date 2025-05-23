import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Infinity, ChevronDown, Menu, X, MessageCircle } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import UimitraLogo from '../../assets/Uimitra..svg';

interface MenuItem {
  name: string;
  description: string;
  href: string;
  image?: string;
}

interface Category {
  title?: string;
  items: MenuItem[];
}

interface NavItemProps {
  name: string;
  href: string;
  categories?: Category[];
  dropdownWidth?: string;
  dropdownStyle?: 'company' | 'services';
}

interface NavItemComponentProps {
  item: NavItemProps;
  isActive: boolean;
  onClick: () => void;
  isMobile?: boolean;
  onNavigate?: (href: string) => void;
  onClose?: () => void;
}

const companyCategories: Category[] = [
  {
    items: [
      {
        name: "About Us",
        description: "Our story, mission, and values",
        href: "/about"
      },
      {
        name: "Our Team",
        description: "Meet our leadership team",
        href: "/team"
      },
      // {
      //   name: "Success Stories",
      //   description: "Real results from real clients",
      //   href: "/success-stories"
      // }
    ]
  }
];

const serviceCategories: Category[] = [
  {
    title: "UI/UX DESIGN & GRAPHIC SERVICES",
    items: [
      {
        name: "UI/UX Design Services",
        description: "Create exceptional user experiences",
        href: "/services/ui-ux-design"
      },
      {
        name: "Web Design",
        description: "Modern & responsive websites",
        href: "/services/web-design"
      },
      {
        name: "App Design",
        description: "Beautiful mobile applications",
        href: "/services/app-design"
      },
      {
        name: "AI-Enhanced Design",
        description: "Smarter, Faster, Creative Experiences",
        href: "/services/ai-design"
      },
      {
        name: "Graphics Design",
        description: "Stunning visual content creation",
        href: "/services/graphics-design"
      },
    ]
  },
  {
    title: "BRAND DESIGN & BUILD SERVICES",
    items: [
      {
        name: "Brand Strategy",
        description: "Strategic brand foundation & positioning",
        href: "/services/brand-strategy"
      },
      {
        name: "Logo Design",
        description: "Memorable brand symbols",
        href: "/services/logo-design"
      },
      {
        name: "Brand Guidelines",
        description: "Consistent brand standards",
        href: "/services/brand-guidelines"
      },
      {
        name: "Brand Identity",
        description: "Complete visual systems",
        href: "/services/brand-identity"
      },
      {
        name: "Brand Development",
        description: "Grow your brand presence",
        href: "/services/brand-development"
      }
    ]
  },
  {
    title: "DIGITAL MARKETING SERVICES",
    items: [
      {
        name: "Digital Marketing",
        description: "Comprehensive online marketing",
        href: "/services/digital-marketing-page"
      },
      {
        name: "SEO Services",
        description: "Search engine optimization",
        href: "/services/seo"
      },
      {
        name: "Social Media Marketing",
        description: "Social platform strategy",
        href: "/services/social-media-page"
      },
      {
        name: "Email Marketing",
        description: "Targeted email campaigns",
        href: "/services/email-marketing"
      },
      {
        name: "Analytics & Reporting",
        description: "Data-driven insights",
        href: "/services/analytics"
      } 
    ]
  },
  {
    title: "SOCIAL MEDIA SERVICES",
    items: [
      {
        name: "YouTube",
        description: "Targeted video campaigns",
        href: "/services/youtube-marketing"
      },
      {
        name: "LinkedIn",
        description: "Professional audience outreach",
        href: "/services/linkedin-marketing"
      },
      {
        name: "X (Twitter)",
        description: "Real-time trend marketing",
        href: "/services/twitter-marketing"
      },
      {
        name: "Instagram",
        description: "Visual content promotion",
        href: "/services/instagram-marketing"
      },
      {
        name: "Others",
        description: "Multi-platform brand reach",
        href: "/services/other-platforms"
      }
    ]
  }
];

const navItems: NavItemProps[] = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '/services', 
    categories: serviceCategories, 
    dropdownWidth: 'w-[1350px] mx-[-700px]',
    dropdownStyle: 'services'
  },
  { 
    name: 'Company', 
    href: '/company', 
    categories: companyCategories, 
    dropdownWidth: 'w-[300px] mx-[-100px]',
    dropdownStyle: 'company'
  },
  { name: 'Technology', href: '/technology' },
  
  // { name: 'Work', href: '/work' }
];

function scrollToHero() {
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    const yOffset = -100; // Adjust this value to match your Navbar height
    const y = heroSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

const NavItem: React.FC<NavItemComponentProps> = ({ 
  item, 
  isActive,
  onClick,
  isMobile = false,
  onNavigate,
  onClose
}) => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [expandedSubheading, setExpandedSubheading] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isTapped, setIsTapped] = useState(false);
  const navigate = useNavigate();

  const isCompanySection = item.name === 'Company';

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsTapped(true);
    setIsClosing(true);
    setExpandedCategory(null); // Immediately close dropdown
    
    setTimeout(() => {
      if (onClose) onClose();
      if (onNavigate) {
        onNavigate(href);
      } else {
        navigate(href);
    }
    onClick();
      setExpandedSubheading(null);
      setIsClosing(false);
      setIsTapped(false);
    }, 300);
  };

  const getDropdownStyles = () => {
    if (item.dropdownStyle === 'company') {
      return 'grid grid-cols-1 gap-4';
    }
    if (item.dropdownStyle === 'services') {
      return 'grid grid-cols-4 gap-12';
    }
    return 'grid grid-cols-1 md:grid-cols-4 gap-12';
  };

  if (!isMobile) {
    return (
      <div 
        className="relative"
        onMouseEnter={() => !isClosing && setExpandedCategory(0)}
        onMouseLeave={() => setExpandedCategory(null)}
    >
      <motion.button
        className={`text-sm md:text-xs lsm:text-xs lg:text-sm font-medium flex items-center gap-1 py-2 ${
            isTapped ? 'text-primary' : 'text-gray-800'
          } hover:text-gray-600 transition-colors`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          if (!item.categories) {
            handleClick(e, item.href);
          }
        }}
      >
        {item.name}
        {item.categories && (
          <ChevronDown 
            size={16} 
              className={`transition-transform duration-300 ${expandedCategory === 0 ? 'rotate-180' : ''}`} 
          />
        )}
      </motion.button>

      {item.categories && (
        <AnimatePresence>
            {expandedCategory === 0 && !isClosing && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
                className={`fixed left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg overflow-y-auto z-50 ${item.dropdownWidth || 'w-[1000px]'}`}
                style={{ 
                  top: '60px',
                  maxHeight: 'calc(100vh - 80px)'
                }}
            >
              <div className="p-4 md:p-6 lg:p-8">
                <div className={getDropdownStyles()}>
                  {item.categories.map((category, index) => (
                    <div key={index} className="space-y-4 md:space-y-6">
                      {category.title && (
                          <h4 className="font-semibold text-gray-900 text-sm md:text-base lg:text-base mb-4 md:mb-6 sticky top-0 bg-white py-2">{category.title}</h4>
                      )}
                      <div className="space-y-4 md:space-y-6">
                        {category.items.map((menuItem, itemIndex) => (
                          <motion.a
                            key={itemIndex}
                            href={menuItem.href}
                            className="block group"
                            onClick={(e) => handleClick(e, menuItem.href)}
                            whileHover={{ x: 5 }}
                          >
                            {menuItem.image && (
                              <div className="mb-3 md:mb-4 rounded-lg overflow-hidden">
                                <img 
                                  src={menuItem.image} 
                                  alt={menuItem.name}
                                  className="w-full h-32 md:h-40 lg:h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
                                />
                              </div>
                            )}
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                              <div className="font-medium text-gray-900 group-hover:text-primary text-sm md:text-base lg:text-base">
                                {menuItem.name}
                              </div>
                            </div>
                            <div className="text-xs md:text-sm lg:text-sm text-gray-500 ml-3.5">
                              {menuItem.description}
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
    );
  }

  return (
    <motion.div 
      className="w-full border-b border-white/10"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <motion.button
        className={`w-full flex items-center justify-between px-8 py-10 text-[18px] font-medium ${
          isTapped ? 'text-primary' : 'text-white'
        } hover:text-white transition-colors`}
        onClick={(e) => {
          if (item.categories) {
            setExpandedCategory(expandedCategory === 0 ? null : 0);
          } else {
            handleClick(e, item.href);
          }
        }}
        onTapStart={() => setIsTapped(true)}
        onTapCancel={() => setIsTapped(false)}
        whileTap={{ scale: 0.98 }}
      >
        {item.name}
        {item.categories && (
          <ChevronDown 
            size={24} 
            className={`transition-transform duration-300 ${expandedCategory === 0 ? 'rotate-180' : ''}`} 
          />
        )}
      </motion.button>

      <AnimatePresence>
        {item.categories && expandedCategory === 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: isClosing ? 0 : 'auto',
              opacity: isClosing ? 0 : 1
            }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0A1624] overflow-hidden"
          >
            <motion.div 
              className="py-2"
              animate={{ 
                y: isClosing ? -20 : 0,
                opacity: isClosing ? 0 : 1
              }}
              transition={{ duration: 0.3 }}
            >
              {isCompanySection ? (
                // Company section - single dropdown
                <div className="px-8 py-4">
                  <motion.div
                    className="space-y-5"
                    animate={{ 
                      y: isClosing ? -20 : 0,
                      opacity: isClosing ? 0 : 1
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.categories[0].items.map((menuItem, itemIndex) => (
                      <motion.a
                        key={itemIndex}
                        href={menuItem.href}
                        className={`block hover:text-white pl-6 transition-colors ${
                          isTapped && menuItem.href === item.href ? 'text-primary' : 'text-white/80'
                        }`}
                        onClick={(e) => handleClick(e, menuItem.href)}
                        onTapStart={() => setIsTapped(true)}
                        onTapCancel={() => setIsTapped(false)}
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex flex-col">
                          <span className="font-medium text-[17px]">{menuItem.name}</span>
                          <span className="text-[14px] text-white/60 mt-1">{menuItem.description}</span>
                        </div>
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              ) : (
                // Other sections with category headers
                item.categories.map((category, index) => (
                  <div key={index} className="border-b border-white/10 last:border-b-0">
                    <div className="px-8 py-4">
                      <motion.button
                        className={`flex items-center justify-between w-full text-white/90 font-semibold text-medium whitespace-normal break-words py-2 focus:outline-none hover:text-white transition-colors ${
                          isTapped && expandedSubheading === index ? 'text-primary' : ''
                        }`}
                        onClick={() => {
                          setIsTapped(true);
                          setExpandedSubheading(expandedSubheading === index ? null : index);
                          setTimeout(() => setIsTapped(false), 300);
                        }}
                        onTapStart={() => setIsTapped(true)}
                        onTapCancel={() => setIsTapped(false)}
                      >
                        {category.title}
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-300 ${expandedSubheading === index ? 'rotate-180' : ''}`}
                        />
                      </motion.button>
                      <AnimatePresence>
                        {expandedSubheading === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ 
                              height: isClosing ? 0 : 'auto',
                              opacity: isClosing ? 0 : 1
                            }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <motion.div
                              className="space-y-5 mt-3"
                              animate={{ 
                                y: isClosing ? -20 : 0,
                                opacity: isClosing ? 0 : 1
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              {category.items.map((menuItem, itemIndex) => (
                                <motion.a
                                  key={itemIndex}
                                  href={menuItem.href}
                                  className={`block hover:text-white pl-6 transition-colors ${
                                    isTapped && menuItem.href === item.href ? 'text-primary' : 'text-white/80'
                                  }`}
                                  onClick={(e) => handleClick(e, menuItem.href)}
                                  onTapStart={() => setIsTapped(true)}
                                  onTapCancel={() => setIsTapped(false)}
                                  whileHover={{ x: 5 }}
                                >
                                  <div className="flex flex-col">
                                    <span className="font-medium text-[17px]">{menuItem.name}</span>
                                    <span className="text-[14px] text-white/60 mt-1">{menuItem.description}</span>
                                  </div>
                                </motion.a>
                              ))}
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                ))
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const GetInTouchButton: React.FC<{ 
  isMobile?: boolean; 
  onClick?: () => void 
}> = ({ 
  isMobile = false, 
  onClick 
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate('/contact');
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`
        ${isMobile ? 'w-full bg-white text-primary my-2' : 'bg-primary text-white'} 
        px-6 py-3.5 rounded-full font-medium flex items-center justify-center gap-2 relative overflow-hidden group text-[16px]
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
        initial={{ x: "100%" }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.4 }}
      />
      <span className="relative z-10 flex items-center gap-2">
        Get In Touch
        <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
      </span>
    </motion.button>
  );
};

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('Home');
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (href: string) => {
    setIsClosing(true);
    setIsOpen(false); // Immediately start closing the menu
    setTimeout(() => {
      setIsClosing(false);
      navigate(href);
    }, 300);
  };

  // Reset menu state on route change and component mount
  useEffect(() => {
    const resetMenuState = () => {
      setIsOpen(false);
      setIsClosing(false);
    };

    // Reset on mount and route change
    resetMenuState();

    // Add event listener for page visibility changes
    document.addEventListener('visibilitychange', resetMenuState);

    return () => {
      document.removeEventListener('visibilitychange', resetMenuState);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY < lastScrollY) {
            setShowNavbar(true); // Scrolling up
          } else if (window.scrollY > 50) {
            setShowNavbar(false); // Scrolling down
          }
          setLastScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Add effect to handle navigation and scrolling
  useEffect(() => {
    if (location.pathname === '/') {
      // Wait for the page to be fully loaded
      const timer = setTimeout(() => {
        scrollToHero();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <motion.nav
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3 }}
        className="sticky top-0 z-50 transition-all duration-300 bg-white/30 backdrop-blur-md backdrop-saturate-150"
    >
      <div className="max-w-7xl mx-auto px-2 msm:px-3 lsm:px-4 md:px-6 lg:px-8 xl:px-16 4k:px-32">
        <div className="flex items-center justify-between h-14 msm:h-16 lsm:h-18 md:h-20 lg:h-24 xl:h-28 4k:h-32">
          {/* Logo */}
          <div className="flex items-center pl-4 md:pl-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
                onClick={() => {
                if (isOpen) {
                  handleNavigation('/');
                  } else {
                    navigate('/');
                  }
                }}
              className="cursor-pointer"
            >
              <div className="flex items-center gap-1 msm:gap-2 lsm:gap-3 md:gap-4">
                <img 
                  src={UimitraLogo} 
                  alt="Uimitra Logo" 
                  className="w-16 h-16 msm:w-20 msm:h-20 lsm:w-24 lsm:h-24 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 4k:w-36 4k:h-36 group-hover:opacity-80 transition-opacity"
                />
              </div>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lsm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12 4k:space-x-16">
            {navItems.map((item) => (
              <NavItem
                key={item.name}
                item={item}
                isActive={activeItem === item.name}
                onClick={() => setActiveItem(item.name)}
                onNavigate={(href) => navigate(href)}
              />
            ))}
            <GetInTouchButton />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => {
              if (isClosing) return; // Prevent clicking during closing animation
              setIsOpen(!isOpen);
            }}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            initial={false}
          >
            <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 180, opacity: 1 }}
                  exit={{ rotate: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="h-5 w-5 msm:h-6 msm:w-6 text-gray-700" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="h-5 w-5 msm:h-6 msm:w-6 text-gray-700" />
                </motion.div>
            )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isClosing ? 0 : 1, 
              height: isClosing ? 0 : '100vh'
            }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0A1624] text-white fixed left-0 top-[3.5rem] msm:top-16 lsm:top-[4.5rem] w-full z-50 overflow-y-auto"
            onAnimationComplete={() => {
              if (isClosing) {
                setIsOpen(false);
                setIsClosing(false);
              }
            }}
          >
            <motion.div 
              className="min-h-[calc(100vh-3.5rem)] msm:min-h-[calc(100vh-4rem)] lsm:min-h-[calc(100vh-4.5rem)] flex flex-col"
              animate={{ opacity: isClosing ? 0 : 1, y: isClosing ? 20 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex-1 py-4 overflow-y-auto">
                {navItems.map((item) => (
                  <NavItem
                    key={item.name}
                    item={item}
                    isActive={activeItem === item.name}
                    onClick={() => setActiveItem(item.name)}
                    onClose={() => setIsClosing(true)}
                    onNavigate={handleNavigation}
                    isMobile
                  />
                ))}
              </div>
              <div className="sticky bottom-0 px-8 py-4 border-t border-white/10 bg-[#0A1624] mt-auto">
                <GetInTouchButton 
                  isMobile 
                  onClick={() => handleNavigation('/contact')} 
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Add this CSS class to your global styles or in the appropriate CSS file
const customScrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 4px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 2px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = customScrollbarStyles;
  document.head.appendChild(style);
}

export default Navbar;