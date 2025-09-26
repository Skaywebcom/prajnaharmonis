import React, { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";

// Enhanced AnimatedElement component with scroll-based visibility (re-triggers on scroll)
const AnimatedElement = ({ 
  children, 
  direction = "up", 
  delay = 0, 
  duration = 0.8, 
  threshold = 0.1,
  className = "",
  ...props 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, // Allow re-triggering when scrolling back
    margin: "-10% 0px -10% 0px", // Better viewport detection
    threshold 
  });

  const directions = {
    up: { y: 60, x: 0, rotateX: 15 },
    down: { y: -60, x: 0, rotateX: -15 },
    left: { y: 0, x: 60, rotateY: 15 },
    right: { y: 0, x: -60, rotateY: -15 },
    scale: { y: 0, x: 0, scale: 0.8 },
    blur: { y: 30, x: 0, scale: 0.9 }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        scale: 0.9,
        filter: "blur(20px)",
        ...directions[direction]
      }}
      animate={isInView ? {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        y: 0,
        x: 0,
        rotateX: 0,
        rotateY: 0
      } : {
        opacity: 0,
        scale: 0.9,
        filter: "blur(20px)",
        ...directions[direction]
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        filter: { duration: duration * 0.6 },
        scale: { type: "spring", stiffness: 100, damping: 20 }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const SectionKedamaian = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Enhanced parallax effects with spring
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const ySpring = useSpring(y, { stiffness: 100, damping: 30 });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  // Inject elegant fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ 
        backgroundImage: "url('/prajnaImages/kedamaianbg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Enhanced Elegant Overlay */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, 
            rgba(255, 255, 255, 0.85) 0%, 
            rgba(255, 215, 0, 0.05) 20%,
            rgba(255, 255, 255, 0.90) 40%,
            rgba(34, 139, 34, 0.05) 60%,
            rgba(255, 255, 255, 0.88) 80%,
            rgba(255, 255, 255, 0.85) 100%)`,
          backdropFilter: "blur(1px) saturate(180%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Subtle Pattern Overlay */}
      <motion.div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.03) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(34, 139, 34, 0.03) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.02) 0%, transparent 70%)`,
          opacity
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      {/* Enhanced Floating Elements with better animations */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 4) * 20}%`,
            width: `${6 + (i % 3) * 3}px`,
            height: `${6 + (i % 3) * 3}px`,
            background: i % 2 === 0 
              ? "radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, transparent 70%)" 
              : "radial-gradient(circle, rgba(34, 139, 34, 0.15) 0%, transparent 70%)"
          }}
          animate={{
            y: [0, -25 - i * 2, 0],
            rotate: [0, 360],
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 8 + i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8
          }}
        />
      ))}

      <div className="relative container mx-auto px-2 md:px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          style={{ y: ySpring }}
        >
          {/* Top Decorative Element with re-triggering animation */}
          <AnimatedElement 
            direction="scale" 
            delay={0.2} 
            duration={0.8} 
            threshold={0.3}
            className="flex justify-center mb-2"
          >
            <div className="flex items-center gap-4">
              <motion.div
                className="w-12 h-0.5 bg-gradient-to-r from-transparent via-green-600 to-yellow-600"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              <motion.div
                className="w-3 h-3 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="w-12 h-0.5 bg-gradient-to-l from-transparent via-yellow-600 to-green-600"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </div>
          </AnimatedElement>

          {/* Main Quote with enhanced re-triggering animation */}
          <AnimatedElement 
            direction="blur" 
            delay={0.4} 
            duration={1.2} 
            threshold={0.2}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed max-w-5xl mx-auto font-medium"
              style={{
                fontFamily: "'Playfair Display', 'Crimson Text', serif",
                background: `linear-gradient(135deg, 
                  #2F4F2F 0%, 
                  #228B22 25%, 
                  #DAA520 50%, 
                  #FFD700 65%, 
                  #228B22 85%, 
                  #2F4F2F 100%)`,
                backgroundSize: "400% 400%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "2px 2px 8px rgba(0, 0, 0, 0.15)",
                lineHeight: "1.6"
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              真正永恒的和平与幸福，
  源自于和谐——
  人类良知的和谐，
  人与人之间的和谐，
  以及人与自然的和谐。
            </motion.h2>
          </AnimatedElement>

          {/* Quote Attribution with staggered animation */}
          <AnimatedElement 
            direction="up" 
            delay={0.8} 
            duration={1.0} 
            threshold={0.3}
            className="flex justify-center"
          >
            <div className="flex flex-col items-center space-y-4">
              {/* Optional attribution content can be added here */}
            </div>
          </AnimatedElement>

          {/* Enhanced Bottom Decorative Element */}
          <AnimatedElement 
            direction="scale" 
            delay={1.0} 
            duration={0.8} 
            threshold={0.5}
            className="flex justify-center -mt-8"
          >
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-20 h-1 bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 rounded-full"
                animate={{
                  scaleX: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 w-20 h-1 bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 rounded-full blur-sm opacity-0 group-hover:opacity-50"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </AnimatedElement>

          {/* Additional floating quote marks for visual interest */}
          <AnimatedElement 
            direction="left" 
            delay={1.2} 
            duration={0.6} 
            threshold={0.8}
            className="absolute top-10 left-4 md:left-10"
          >
            <motion.div
              className="text-6xl md:text-8xl font-serif text-green-200/30 select-none"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              "
            </motion.div>
          </AnimatedElement>

          <AnimatedElement 
            direction="right" 
            delay={1.4} 
            duration={0.6} 
            threshold={0.8}
            className="absolute bottom-10 right-4 md:right-10"
          >
            <motion.div
              className="text-6xl md:text-8xl font-serif text-yellow-200/30 select-none"
              style={{ transform: "rotate(180deg)" }}
              animate={{
                rotate: [180, 185, 175, 180],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }}
            >
              "
            </motion.div>
          </AnimatedElement>

          {/* Reading progress indicator */}
          <motion.div
            className="fixed right-4 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gray-200/30 rounded-full z-50 hidden lg:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="w-full bg-gradient-to-b from-green-500 to-yellow-500 rounded-full origin-top"
              style={{ scaleY: scrollYProgress }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionKedamaian;