import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";

// Enhanced AnimatedElement component for scroll-based animations
const AnimatedElement = ({ children, direction = "up", delay = 0, duration = 0.8 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, 
    margin: "-10% 0px -10% 0px"
  });

  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        scale: 0.8,
        filter: "blur(10px)",
        ...directions[direction]
      }}
      animate={isInView ? {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        y: 0,
        x: 0
      } : {
        opacity: 0,
        scale: 0.8,
        filter: "blur(10px)",
        ...directions[direction]
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        filter: { duration: duration * 0.8 }
      }}
    >
      {children}
    </motion.div>
  );
};

// Floating background elements
const FloatingElement = ({ delay = 0, duration = 4, className = "" }) => (
  <motion.div
    className={`absolute opacity-10 pointer-events-none ${className}`}
    animate={{
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: [0, 5, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

const SectionBeranda = () => {
  const ref = useRef(null);
  const [hoveredSection, setHoveredSection] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Enhanced parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.7]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  
  // Smooth spring animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const ySpring = useSpring(y, springConfig);
  const opacitySpring = useSpring(opacity, springConfig);

  const sections = [
    {
      title: "Hakikat Keharmonisan",
      content: "Hukum kebenaran sifatnya hakiki dan konsisten sepanjang masa, senantiasa harmonis, bajik, tulus, dan indah.",
      icon: "🌟",
      gradient: "from-yellow-400 via-gold-400 to-yellow-600"
    },
    {
      title: "Budaya Keharmonisan", 
      content: "Interaksi antar keberagaman budaya yang harmonis di dunia, saling melengkapi dan mengapresiasi, berkembang dan berjaya bersama.",
      icon: "🌍",
      gradient: "from-green-400 via-emerald-400 to-green-600"
    },
    {
      title: "Dunia Harmonis",
      content: "Tercapainya keharmonisan antara manusia dengan alam semesta, segenap umat manusia hidup damai dan tentram sepanjang masa.",
      icon: "☮️",
      gradient: "from-blue-400 via-cyan-400 to-blue-600"
    }
  ];

  // Enhanced container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6,
        delayChildren: 0.3
      }
    }
  };

  // Card variants with 3D effects
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100, 
      scale: 0.8,
      rotateX: -15,
      filter: "blur(20px)"
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 1.2, 
        ease: [0.25, 0.46, 0.45, 0.94],
        filter: { duration: 0.8 }
      }
    }
  };

  return (
    <section
      id="beranda"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/prajnaImages/beranda.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Enhanced overlay with gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50"
        style={{ opacity: opacitySpring }}
      />
      
      {/* Animated overlay pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, gold 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, green 1px, transparent 1px)`,
          backgroundSize: "60px 60px, 40px 40px",
          y: yFast
        }}
      />

      {/* Floating background elements */}
      <FloatingElement 
        delay={0} 
        duration={6} 
        className="top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-300/20 to-gold-400/20 rounded-full blur-xl" 
      />
      <FloatingElement 
        delay={2} 
        duration={8} 
        className="top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-green-300/20 to-emerald-400/20 rounded-full blur-xl" 
      />
      <FloatingElement 
        delay={4} 
        duration={7} 
        className="bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-br from-blue-300/20 to-cyan-400/20 rounded-full blur-xl" 
      />

      {/* Main Content with enhanced animations */}
      <motion.div
        className="relative z-20 max-w-6xl w-full"
        style={{ y: ySpring, opacity: opacitySpring }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Animated title */}
        <AnimatedElement direction="down" delay={0.2} duration={1.5}>
          <motion.div className="mb-16">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
              style={{
                fontFamily: "'Imperial Script', cursive",
                background: "linear-gradient(45deg, #FFD700, #FFA500, #FFD700, #32CD32, #FFD700)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
                filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.8))",
                paddingTop: "6px",      // 👉 bisa 6–10px sesuai selera
                paddingBottom: "6px"
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Prajna Harmonis
            </motion.h1>
            
            {/* Subtitle with typewriter effect */}
            <motion.p
              className="text-xl md:text-2xl text-green-100 font-light tracking-wide -mt-4"
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "auto" }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 1 }}
              style={{
                textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                overflow: "hidden",
                whiteSpace: "nowrap",
                borderRight: "3px solid gold",
              }}
            >
              Membangun Keharmonisan untuk Dunia
            </motion.p>
          </motion.div>
        </AnimatedElement>

        {/* Enhanced cards grid */}
        <div className="grid md:grid-cols-3 gap-8 -mt-4">
          {sections.map((section, index) => (
            <AnimatedElement 
              key={index} 
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.3}
              duration={1.0}
            >
              <motion.div
                className="relative group cursor-pointer"
                variants={cardVariants}
                onHoverStart={() => setHoveredSection(index)}
                onHoverEnd={() => setHoveredSection(null)}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1000
                }}
              >
                {/* Card background with glassmorphism */}
                <motion.div
                  className="relative p-8 rounded-3xl backdrop-blur-xl border border-white/20 overflow-hidden"
                  style={{
                    background: hoveredSection === index 
                      ? `linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)`
                      : `linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%)`,
                  }}
                  animate={{
                    boxShadow: hoveredSection === index 
                      ? "0 25px 50px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.2), inset 0 1px 0 rgba(255,255,255,0.3)"
                      : "0 10px 30px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    animate={{
                      background: [
                        `linear-gradient(45deg, transparent, rgba(255,215,0,0.1), transparent)`,
                        `linear-gradient(225deg, transparent, rgba(50,205,50,0.1), transparent)`,
                        `linear-gradient(45deg, transparent, rgba(255,215,0,0.1), transparent)`
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />

                  {/* Icon with floating animation */}
                  <motion.div
                    className="text-6xl mb-6"
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut"
                    }}
                  >
                    {section.icon}
                  </motion.div>

                  {/* Title with enhanced styling */}
                  <motion.h2
                    className="text-2xl md:text-3xl font-bold mb-6"
                    style={{
                      fontFamily: "'Imperial Script', cursive",
                      color: "#FFD700",
                      textShadow: "2px 2px 6px rgba(0,0,0,0.8)"
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {section.title}
                  </motion.h2>

                  {/* Content with paragraph animation */}
                  <AnimatedElement direction="up" delay={0.2}>
                    <motion.p
                      className="text-base md:text-lg leading-relaxed"
                      style={{
                        color: "#E8F5E8",
                        textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
                        lineHeight: "1.6"
                      }}
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {section.content}
                    </motion.p>
                  </AnimatedElement>

                  {/* Hover indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-3 h-3 bg-gold-400 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: hoveredSection === index ? 1 : 0,
                      opacity: hoveredSection === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 400 }}
                  />

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
                    style={{
                      background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",
                    }}
                    animate={{
                      x: hoveredSection === index ? ["-100%", "100%"] : "-100%",
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* 3D shadow */}
                <motion.div
                  className="absolute inset-0 bg-black/20 rounded-3xl -z-10"
                  animate={{
                    x: hoveredSection === index ? 8 : 0,
                    y: hoveredSection === index ? 8 : 0,
                    opacity: hoveredSection === index ? 0.3 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </AnimatedElement>
          ))}
        </div>

        {/* Scroll indicator */}
        <AnimatedElement direction="up" delay={2} duration={1}>
          <motion.div
            className="mt-20 flex flex-col items-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-gold-400 rounded-full flex justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="w-1 h-3 bg-gold-400 rounded-full mt-2"
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <motion.p
              className="text-gold-200 text-sm mt-2 tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
            >
              GULIR KE BAWAH
            </motion.p>
          </motion.div>
        </AnimatedElement>
      </motion.div>

      {/* Particle effects */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gold-400/30 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut"
          }}
        />
      ))}
    </section>
  );
};

export default SectionBeranda;