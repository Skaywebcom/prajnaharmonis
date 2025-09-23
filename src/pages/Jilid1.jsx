import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Link } from "react-router-dom";


// AnimatedElement component for scroll-based animations
const AnimatedElement = ({ children, direction = 'up', delay = 0, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1, once: false });
  const controls = useAnimation();

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
      scale: 0.95,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Floating background elements
const FloatingElement = ({ index }) => (
  <motion.div
    className="absolute w-4 h-4 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20"
    initial={{
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }}
    animate={{
      x: Math.random() * (window.innerWidth - 100),
      y: Math.random() * (window.innerHeight - 100),
      scale: [1, 1.5, 1],
      opacity: [0.2, 0.5, 0.2]
    }}
    transition={{
      duration: 8 + index * 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    style={{ zIndex: -1 }}
  />
);

const Jilid1 = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Floating background elements */}
      {Array.from({ length: 8 }).map((_, i) => (
        <FloatingElement key={i} index={i} />
      ))}

      <div className="relative z-10 p-6">
        {/* Logo with entrance animation */}
        <AnimatedElement direction="down" className="flex justify-start mb-6">
          <motion.img
            src="/prajnaImages/logo.png"
            alt="Logo"
            className="w-60 h-20 object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </AnimatedElement>

        {/* Animated gradient title */}
        <AnimatedElement direction="up" delay={0.2} className="mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent bg-300% animate-gradient"
            style={{
              backgroundSize: '300% 300%',
              animation: 'gradient 3s ease-in-out infinite'
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              BUKU 1 PME STB
            </motion.span>
          </motion.h1>
        </AnimatedElement>

        {/* Tema cards with 3D effects */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 place-items-center">
  {/* Tema I */}
  <AnimatedElement direction="left" delay={0.3}>
    <Link 
    to="/jilid1/tema1"   // 👉 arahkan ke halaman baru
      className="flex flex-col items-center perspective-1000 max-w-sm w-full"
      onHoverStart={() => setHoveredCard(1)}
      onHoverEnd={() => setHoveredCard(null)}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="relative w-full group"
        whileHover={{ rotateY: 5, rotateX: 5 }}
        transition={{ duration: 0.3 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.img
          src="/prajnaImages/jilid1/tema1.png"
          alt="Tema 1"
          className="w-full h-auto rounded-xl shadow-xl"
          whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </motion.div>
      <motion.h2 
        className="text-2xl font-bold mt-6 text-gray-800"
        animate={{ 
          color: hoveredCard === 1 ? "#3b82f6" : "#1f2937",
          scale: hoveredCard === 1 ? 1.1 : 1
        }}
        transition={{ duration: 0.3 }}
      >
        TEMA I
      </motion.h2>
    
    </Link>
  </AnimatedElement>

  {/* Tema II */}
  <AnimatedElement direction="right" delay={0.4}>
    <Link 
    to="/jilid1/tema2"   // 👉 arahkan ke halaman baru
      className="flex flex-col items-center perspective-1000 max-w-sm w-full"
      onHoverStart={() => setHoveredCard(2)}
      onHoverEnd={() => setHoveredCard(null)}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="relative w-full group"
        whileHover={{ rotateY: -5, rotateX: 5 }}
        transition={{ duration: 0.3 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.img
          src="/prajnaImages/jilid1/tema2.png"
          alt="Tema 2"
          className="w-full h-auto rounded-xl shadow-xl"
          whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </motion.div>
      <motion.h2 
        className="text-2xl font-bold mt-6 text-gray-800"
        animate={{ 
          color: hoveredCard === 2 ? "#8b5cf6" : "#1f2937",
          scale: hoveredCard === 2 ? 1.1 : 1
        }}
        transition={{ duration: 0.3 }}
      >
        TEMA II
      </motion.h2>
    
    </Link>
  </AnimatedElement>
</div>


        {/* Video section */}
        <AnimatedElement direction="up" delay={0.5}>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
            whileHover={{ 
              scale: 1.05,
              background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
            transition={{ duration: 0.3 }}
          >
            Video Pendukung Buku Pendidikan Moral Etika Jilid 1
          </motion.h2>
        </AnimatedElement>

        {/* Video grid with staggered animations */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <AnimatedElement 
              key={i} 
              direction={i % 2 === 0 ? "up" : "down"} 
              delay={0.6 + (i * 0.1)}
            >
              <motion.div
                className="relative group overflow-hidden rounded-xl shadow-lg max-w-[220px] mx-auto"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300,
                  damping: 20
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.img
                  src={`/prajnaImages/jilid1/${i + 1}.png`}
                  alt={`Video ${i + 1}`}
                  className="w-full h-auto transition-all duration-300"
                  whileHover={{ 
                    filter: "brightness(1.1) contrast(1.1)",
                    scale: 1.1
                  }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                  <motion.div
                    className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center"
                    initial={{ scale: 0, rotate: 0 }}
                    whileHover={{ scale: 1, rotate: 360 }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                  >
                    <motion.div 
                      className="w-0 h-0 border-l-[16px] border-l-blue-600 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"
                      whileHover={{ scale: 1.2 }}
                    />
                  </motion.div>
                </motion.div>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <motion.p 
                    className="text-white font-semibold text-sm"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    Video {i + 1}
                  </motion.p>
                </motion.div>
              </motion.div>
            </AnimatedElement>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 3s ease-in-out infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default Jilid1;