import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, animate } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const { scrollY } = useScroll();
  
  // Transform navbar background opacity based on scroll
  const navbarOpacity = useTransform(scrollY, [0, 100], [0.85, 0.98]);
  const navbarBlur = useTransform(scrollY, [0, 100], [12, 24]);

  const links = [
    { id: "beranda", label: "Beranda" },
    { id: "tentang", label: "Tentang Kami" },
    { id: "budaya", label: "Budaya Harmonis" },
    { id: "pendidikan", label: "Pendidikan Moral" },
    { id: "kegiatan", label: "Kegiatan" },
    { id: "hubungi", label: "Hubungi Kami" },
  ];

  // Your original scroll function with enhanced smooth animation
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const top = element.offsetTop - 80; // navbar offset

    // Step 1: smooth scroll
    window.scrollTo({ top, behavior: "smooth" });

    // Step 2: monitor scroll until near target
    const checkScroll = () => {
      const currentY = window.scrollY;

      if (Math.abs(currentY - top) < 2) {
        // Subtle overshoot animation
        const overshoot = 8; // pixels
        animate(currentY, top + overshoot, {
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (value) => window.scrollTo(0, value),
          onComplete: () => {
            animate(window.scrollY, top, {
              duration: 0.2,
              ease: [0.22, 1, 0.36, 1],
              onUpdate: (v) => window.scrollTo(0, v),
            });
          },
        });
      } else {
        requestAnimationFrame(checkScroll);
      }
    };

    requestAnimationFrame(checkScroll);
  };

  // Monitor scroll for navbar effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => observer.observe(section));

  return () => {
    sections.forEach((section) => observer.unobserve(section));
  };
}, []);


  // Animation variants
  const navbarVariants = {
    hidden: { 
      y: -120, 
      opacity: 0,
      scale: 0.92
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const logoVariants = {
    hidden: { 
      scale: 0, 
      rotate: -360,
      opacity: 0,
      filter: "blur(10px)"
    },
    visible: { 
      scale: 1, 
      rotate: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 1.5,
        filter: { duration: 0.8 }
      }
    }
  };

  const linkVariants = {
    hidden: { 
      y: -30, 
      opacity: 0,
      scale: 0.8,
      rotateX: -90
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 w-full z-50 text-gray-800 py-3 px-6 md:px-8 flex justify-between items-center"
      style={{
        background: `linear-gradient(135deg, 
          rgba(255, 215, 0, 0.25) 0%, 
          rgba(255, 255, 255, 0.98) 25%,
          rgba(255, 255, 255, 0.98) 75%,
          rgba(34, 139, 34, 0.2) 100%)`,
        backdropFilter: `blur(${navbarBlur}px) saturate(180%)`,
        borderBottom: `1px solid rgba(255, 215, 0, 0.3)`,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1)"
      }}
    >
      {/* Enhanced shadow with gold accent */}
      <motion.div
        className="absolute inset-0"
        animate={{
          boxShadow: isScrolled 
            ? "0 8px 32px rgba(255, 215, 0, 0.15), 0 4px 16px rgba(0, 0, 0, 0.1)" 
            : "0 4px 20px rgba(255, 215, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.05)"
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Logo with enhanced animations and gold glow */}
      <motion.div
        variants={logoVariants}
        className="relative z-10"
        whileHover={{ 
          scale: 1.08,
          rotate: 5,
          transition: { duration: 0.3, type: "spring", stiffness: 300 }
        }}
        whileTap={{ scale: 0.92, rotate: -2 }}
      >
        <motion.img
          src="/prajnaImages/logo.png"
          alt="Prajna Harmonis Logo"
          className="h-10 md:h-16 lg:h-20"
          animate={{
            filter: isScrolled 
              ? "drop-shadow(0 4px 12px rgba(255, 215, 0, 0.4)) drop-shadow(0 2px 8px rgba(34, 139, 34, 0.2))" 
              : "drop-shadow(0 2px 8px rgba(255, 215, 0, 0.25)) drop-shadow(0 1px 4px rgba(34, 139, 34, 0.15))"
          }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Animated gold and green glow rings */}
        <motion.div
          className="absolute inset-0 rounded-full -z-10"
          style={{
            background: `radial-gradient(circle, 
              rgba(255, 215, 0, 0.15) 0%, 
              rgba(34, 139, 34, 0.1) 50%, 
              transparent 70%)`
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Rotating accent ring */}
        <motion.div
          className="absolute inset-0 border-2 border-transparent rounded-full -z-10"
          style={{
            borderImage: `linear-gradient(45deg, 
              rgba(255, 215, 0, 0.4), 
              rgba(34, 139, 34, 0.4), 
              rgba(255, 215, 0, 0.4)) 1`
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          initial={{ opacity: 0 }}
          whileHover={{ 
            opacity: 1,
            scale: 1.1,
            transition: { duration: 0.3 }
          }}
        />
      </motion.div>

      {/* Desktop Menu with gold and green theme */}
      <motion.ul 
        className="hidden md:flex gap-4 lg:gap-6 font-medium relative z-10"
        variants={navbarVariants}
      >
        {links.map((link, index) => (
          <motion.li 
            key={link.id}
            variants={linkVariants}
            custom={index}
          >
            <motion.button
  onClick={() => scrollToSection(link.id)}
  className={`cursor-pointer relative group px-4 py-2.5 rounded-xl transition-all duration-300 font-semibold text-sm lg:text-base ${
    activeSection === link.id
      ? "text-green-700 font-bold"
      : "text-gray-700"
  }`}
  whileHover={{ 
    scale: 1.05,
    y: -2,
    color: "#228B22",
    transition: { duration: 0.1, type: "spring" }
  }}
  whileTap={{ scale: 0.95, y: 0 }}
>
  {link.label}
              
              {/* Half underline with green leaf color */}
              <motion.div
  className="absolute bottom-0 left-1/2 w-1/2 h-1 
             bg-gradient-to-r from-green-600 via-green-500 to-green-700 
             rounded-full origin-center 
             transform -translate-x-1/2 scale-x-0 opacity-0 
             group-hover:scale-x-100 group-hover:opacity-100 
             transition-transform transition-opacity duration-300"
/>

              
              {/* Hover background with gold and green gradient */}
              <motion.div
                className="absolute inset-0 rounded-xl -z-10"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(255, 215, 0, 0.08) 0%, 
                    rgba(255, 255, 255, 0.9) 50%, 
                    rgba(34, 139, 34, 0.06) 100%)`
                }}
                initial={{ opacity: 0, scale: 0.85 }}
                whileHover={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { duration: 0.2 }
                }}
              />
              
              {/* Elegant shine effect */}
              <motion.div
                className="absolute inset-0 rounded-xl overflow-hidden -z-10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-green-200/30 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </motion.div>
              
              {/* Active indicator dot */}
              <motion.div
                className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: { duration: 0.2, type: "spring", stiffness: 500 }
                }}
              />
              
              {/* Subtle particle effect */}
              <motion.div
                className="absolute top-0 right-0 w-1 h-1 bg-green-400 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                  x: [0, 5, 10],
                  y: [0, -3, -6]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeOut"
                }}
              />
            </motion.button>
          </motion.li>
        ))}
      </motion.ul>

      {/* Mobile Menu Button with gold theme */}
      <motion.button
        className="md:hidden relative z-10 p-3 rounded-xl bg-gradient-to-br from-yellow-50 to-green-50 border border-yellow-200/30"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          rotate: isMobileMenuOpen ? 90 : 0,
          backgroundColor: isMobileMenuOpen ? "rgba(255, 215, 0, 0.1)" : "rgba(255, 255, 255, 0.8)"
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div className="w-6 h-6 flex flex-col justify-center space-y-1">
          <motion.span
            className="block h-0.5 bg-gradient-to-r from-yellow-600 to-green-600 rounded"
            animate={{
              rotate: isMobileMenuOpen ? 45 : 0,
              y: isMobileMenuOpen ? 6 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block h-0.5 bg-gradient-to-r from-green-600 to-yellow-600 rounded"
            animate={{
              opacity: isMobileMenuOpen ? 0 : 1,
              scale: isMobileMenuOpen ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block h-0.5 bg-gradient-to-r from-yellow-600 to-green-600 rounded"
            animate={{
              rotate: isMobileMenuOpen ? -45 : 0,
              y: isMobileMenuOpen ? -6 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.button>

      {/* Mobile Menu with gold and green styling */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute top-full left-0 w-full backdrop-blur-xl shadow-2xl border-t border-yellow-200/30 md:hidden"
            style={{
              background: `linear-gradient(180deg, 
                rgba(255, 215, 0, 0.05) 0%, 
                rgba(255, 255, 255, 0.98) 20%,
                rgba(255, 255, 255, 0.98) 80%,
                rgba(34, 139, 34, 0.05) 100%)`
            }}
          >
            <motion.ul className="py-6 space-y-1">
              {links.map((link, index) => (
                <motion.li
                  key={link.id}
                  variants={mobileItemVariants}
                  custom={index}
                >
                  <motion.button
                    onClick={() => {
                      scrollToSection(link.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-8 py-4 font-medium rounded-r-2xl mx-2 transition-all duration-300 relative overflow-hidden ${
  activeSection === link.id ? "text-green-700 font-bold" : "text-gray-700"
}`}
                    whileHover={{ 
                      x: 12,
                      backgroundColor: "rgba(34, 139, 34, 0.08)",
                      color: "#228B22"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.label}
                    
                    {/* Mobile hover line */}
                    <motion.div
                      className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-green-500 rounded-r"
                      initial={{ scaleY: 0 }}
                      whileHover={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Subtle shine effect for mobile */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-100/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating particles effect */}
      <motion.div
        className="absolute top-0 left-1/4 w-1 h-1 bg-blue-400 rounded-full opacity-30"
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0
        }}
      />
      <motion.div
        className="absolute top-2 right-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-30"
        animate={{
          y: [0, 10, 0],
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </motion.nav>
  );
};

export default Navbar;