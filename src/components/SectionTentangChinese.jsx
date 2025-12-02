import React, { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";

// Enhanced AnimatedElement component with scroll-based visibility
const AnimatedElement = ({ children, direction = "up", delay = 0, duration = 0.8, threshold = 0.1 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, // Allow re-triggering
    margin: "-10% 0px -10% 0px",
    threshold 
  });

  const directions = {
    up: { y: 60, x: 0, rotateX: 15 },
    down: { y: -60, x: 0, rotateX: -15 },
    left: { y: 0, x: 60, rotateY: 15 },
    right: { y: 0, x: -60, rotateY: -15 },
    scale: { y: 0, x: 0, scale: 0.8 }
  };

  return (
    <motion.div
      ref={ref}
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
    >
      {children}
    </motion.div>
  );
};

// Individual Paragraph Component with sophisticated animations
const AnimatedParagraph = ({ children, index, isLast = false }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const isInView = useInView(ref, { 
    once: false,
    margin: "-20% 0px -20% 0px",
    threshold: 0.3
  });

  return (
    <motion.div
      ref={ref}
      className="relative group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.p
        className="text-gray-700 font-light relative z-10"
        style={{
          textAlign: "justify",
          lineHeight: "1.9",
          textShadow: "0 1px 3px rgba(0, 0, 0, 0.1)"
        }}
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.95,
          filter: "blur(10px)"
        }}
        animate={isInView ? {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)"
        } : {
          opacity: 0,
          y: 30,
          scale: 0.95,
          filter: "blur(5px)"
        }}
        transition={{
          duration: 0.8,
          delay: index * 0.2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        whileHover={{
          scale: 1.02,
          color: "#374151",
          transition: { duration: 0.2 }
        }}
      >
        {children}
        
        
      </motion.p>
      
      
    </motion.div>
  );
};

const SectionTentang = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Enhanced parallax effects with spring
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  const y1Spring = useSpring(y1, { stiffness: 100, damping: 30 });
  const y2Spring = useSpring(y2, { stiffness: 100, damping: 30 });
  const y3Spring = useSpring(y3, { stiffness: 100, damping: 30 });

  const paragraphs = [
    "印尼和谐文化协会于2010年在印尼廖内群岛省巴淡市成立、宗旨在于探讨和谐之道、弘扬和谐文化、致力于促进不同文化与文明的交流互鉴、为构建和谐世界、实现天下一家贡献力量。",
    "成立以来、协会积极开展华文教育、道德教育、文化交流、文明对话以及中医大自然养生疗法等多项公益性社会服务工作、并在持续推进中取得了良好成效。",
    "协会的主要干部由当地来自各行各业的青年志愿者组成。大家秉持对“和谐”理念的坚定信念、同心协力、无私奉献、为推动人类文明的和谐与进步不懈努力。",
  ];

  return (
    <section
      id="tentang"
      ref={sectionRef}
      className="relative min-h-screen px-6 py-20 flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/prajnaImages/background/22.png')",
      }}
    >
      {/* Enhanced Background Elements with better parallax */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 opacity-[0.03]"
        style={{ y: y1Spring }}
      >
        <motion.div 
          className="w-full h-full bg-gradient-to-br from-green-300 to-yellow-300 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 right-16 w-32 h-32 opacity-[0.03]"
        style={{ y: y2Spring }}
      >
        <motion.div 
          className="w-full h-full bg-gradient-to-br from-yellow-300 to-green-300 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-1/4 w-24 h-24 opacity-[0.02]"
        style={{ y: y3Spring }}
      >
        <motion.div 
          className="w-full h-full bg-gradient-to-br from-blue-300 to-purple-300 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Enhanced floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full opacity-10"
          style={{
            background: `linear-gradient(45deg, 
              ${i % 3 === 0 ? '#10B981' : i % 3 === 1 ? '#F59E0B' : '#3B82F6'}, 
              ${i % 3 === 0 ? '#F59E0B' : i % 3 === 1 ? '#10B981' : '#8B5CF6'})`,
            left: `${5 + i * 8}%`,
            top: `${10 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.sin(i) * 10, 0],
            opacity: [0.05, 0.3, 0.05],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}

      <div className="max-w-6xl relative z-10">
        {/* Main Title with enhanced animations */}
        <AnimatedElement direction="down" delay={0.2} duration={1.2}>
          <div className="text-center md:text-left mb-16">
            <motion.div className="relative inline-block mb-8">
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl -mb-4 font-extrabold text-transparent bg-clip-text px-1 relative"
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  paddingTop: "0.25em",
                  paddingBottom: "0.25em",
                  lineHeight: 1.2,
                  background: "linear-gradient(45deg, #10B981, #F59E0B, #10B981, #059669, #F59E0B)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "2px 2px 6px rgba(0,0,0,0.3)"
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                协会简介
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 text-4xl md:text-5xl lg:text-6xl -mb-4 font-extrabold opacity-30 blur-sm -z-10"
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    background: "linear-gradient(45deg, #10B981, #F59E0B, #10B981)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Tentang Kami
                </motion.div>
              </motion.h2>
              
              {/* Enhanced title decoration */}
              <motion.div
                className="absolute -bottom-3 left-0 md:left-0 h-1 bg-gradient-to-r from-green-500 via-yellow-500 to-green-500 rounded-full"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "6rem", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
              />
              
              {/* Floating accent dots */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full"
                  style={{
                    left: `${-2 + i * 8}rem`,
                    top: "-1rem"
                  }}
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.4, 0.8, 0.4],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>

            {/* Enhanced Subtitle */}

          </div>
        </AnimatedElement>

        {/* Content Container with sophisticated layout */}
        <div className="relative">
          {/* Enhanced Image with 3D effects */}
          <AnimatedElement direction="left" delay={0.4} duration={1.2}>
            <motion.div
              ref={imageRef}
              className="float-left mr-8 mb-6 group relative"
              whileHover={{ 
                scale: 1.03,
                rotateY: 5,
                transition: { duration: 0.4 }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div 
                className="relative overflow-hidden rounded-2xl"
                
              >
                <motion.img
                  src="/prajnaImages/tentang.jpeg"
                  alt="Tentang Kami"
                  className="w-[30rem] md:w-[32rem] h-auto object-cover transition-all duration-500"
                  
                  whileHover={{
                    scale: 1.08,
                    transition: { duration: 0.4 }
                  }}
                  onLoad={() => setImageLoaded(true)}
                  style={{
                  filter: "none",     // 🚀 pastikan tidak ada shadow/blur
                  boxShadow: "none"   // 🚀 hilangkan shadow
    }}
                />
                
                
                
                
                
              </motion.div>
              
              
            </motion.div>
          </AnimatedElement>

          {/* Enhanced Paragraphs with individual animations */}
          <div className="space-y-8 text-lg md:text-xl leading-relaxed relative pl-6">
            {paragraphs.map((paragraph, index) => (
              <AnimatedParagraph 
                key={index} 
                index={index}
                isLast={index === paragraphs.length - 1}
              >
                {paragraph}
              </AnimatedParagraph>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom decorative element */}
        <AnimatedElement direction="up" delay={1.8} duration={1.0}>
          <motion.div 
            className="mt-20 flex justify-center md:justify-start"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-green-50/90 to-yellow-50/90 rounded-full border border-green-100/50 backdrop-blur-sm shadow-lg relative overflow-hidden group"
              whileHover={{
                boxShadow: "0 10px 30px rgba(16, 185, 129, 0.2), 0 0 0 1px rgba(16, 185, 129, 0.1)",
                transition: { duration: 0.3 }
              }}
            >
              
              
              {/* Animated dots */}
              <motion.div 
                className="w-3 h-3 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full relative z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <span className="text-green-700 font-semibold tracking-wide relative z-10">
                成立于 2010 • 印尼巴淡岛，廖内群岛省
              </span>
              
              <motion.div 
                className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full relative z-10"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [1, 0.7, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                animate={{
                  x: ["-100%", "100%"]
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </AnimatedElement>

        {/* Reading progress indicator */}
        <motion.div
          className="fixed left-4 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gray-200 rounded-full z-50 hidden lg:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
        >
          <motion.div
            className="w-full bg-gradient-to-b from-green-500 to-yellow-500 rounded-full origin-top"
            style={{ scaleY: scrollYProgress }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SectionTentang;