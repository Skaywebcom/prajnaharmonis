import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useScroll, useTransform } from "framer-motion";

const SectionKedamaian = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { threshold: 0.2, once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  // Inject elegant fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const decorationVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const quoteVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ 
        backgroundImage: "url('/prajnaImages/promo.jpg.jpeg')",
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

      {/* Floating Elegant Elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-5"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            width: `${8 + i * 2}px`,
            height: `${8 + i * 2}px`,
            background: i % 2 === 0 
              ? "linear-gradient(45deg, #FFD700, #DAA520)" 
              : "linear-gradient(45deg, #228B22, #32CD32)"
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.2
          }}
        />
      ))}

      <div className="relative container mx-auto px-2 md:px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-6xl mx-auto"
          style={{ y }}
        >
          {/* Top Decorative Element */}
          <motion.div 
            variants={decorationVariants}
            className="flex justify-center mb-2"
          >
            <div className="flex items-center gap-4">
              <motion.div
                className="w-12 h-0.5 bg-gradient-to-r from-transparent via-green-600 to-yellow-600"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
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
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              />
            </div>
          </motion.div>

          {/* Main Quote */}
          <motion.div 
            variants={titleVariants}
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
            >
              Kedamaian dan Kebahagiaan yang sesungguhnya dan kekal selamanya
              bersumber dari Keharmonisan, yakni Keharmonisan hati nurani manusia,
              Keharmonisan hubungan antarmanusia, dan Keharmonisan manusia dengan
              alam semesta.
            </motion.h2>
          </motion.div>

          {/* Quote Attribution */}
          <motion.div 
            variants={quoteVariants}
            className="flex justify-center"
          >
            <div className="flex flex-col items-center space-y-4">
              

              
            </div>
          </motion.div>

          {/* Bottom Decorative Element */}
          <motion.div 
            className="flex justify-center -mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionKedamaian;