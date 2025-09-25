import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation, useScroll, useTransform } from "framer-motion";

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

// Enhanced Interactive Button Component
const InteractiveButton = ({ children, onClick, className = "" }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`relative overflow-hidden px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${className}`}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(255, 215, 0, 0.3)"
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0.9 }}
      animate={{ opacity: 1 }}
    >
      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-green-400/20"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

// Enhanced Image Component with Zoom Effect
const EnhancedImage = ({ src, alt, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className={`relative group overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glowing Ring */}
      <motion.div
        className="absolute -inset-2 bg-gradient-to-r from-yellow-400/30 via-green-400/30 to-yellow-400/30 rounded-full blur-sm"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Image Container */}
      <motion.div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-3 border-white/30 shadow-2xl">
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{
            filter: "brightness(1.1) contrast(1.1) saturate(1.05)"
          }}
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        
        {/* Interactive overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full border-2 border-white/50"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

const SectionSambutan = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  // Split content into paragraphs for individual animation
  const paragraphs = [
    "Sepanjang sejarah kehidupan umat manusia selama ribuan tahun hingga sekarang, umat manusia berulang kali mengalami peperangan dan krisis kehidupan yang tiada tuntasnya, bagaikan seorang penderita penyakit yang sering kambuh dan sulit disembuhkan. Umat manusia tidaklah senantiasa dapat menikmati ketentraman dan kebahagiaan hidup sepanjang masa.",
    "Saat ini, umat manusia sedang menghadapi krisis terbesar yang hanya dapat diatasi dengan keharmonisan dan rasa sepenanggungan sesama warga dunia untuk mewujudkan keselamatan dan kedamaian bagi semua. Namun kenyataannya masih jauh dari harapan, mengapa keharmonisan demikian sulit diwujudkan?",
    "Terlepas dari segala bentuk perbedaan yang terlihat dengan kasat mata, atau perbedaan pikiran, ideologi, dan budaya, kita perlu menyadari bahwasanya semua bentuk kehidupan berasal dari satu sumber yang sama, terdapat suatu kebenaran tertinggi yang tidak memihak, suatu maha kasih yang tidak membedakan.",
    "Sungguh diharapkan sekiranya para arif bijaksana dan pengasih dapat menyumbangkan intuisi, saling bertukar pikiran, dan saling menyemangatkan dalam upaya bersama mendorong terciptanya keharmonisan umat manusia dan kedamaian alam semesta."
  ];

  return (
    <section
      id="sambutan"
      className="relative min-h-screen px-6 py-20 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/prajnaImages/sambutanbg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Enhanced Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      {/* Elegant Pattern Overlay */}
      <motion.div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255, 215, 0, 0.08) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 70%, rgba(34, 139, 34, 0.06) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.04) 0%, transparent 70%)`,
          opacity
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      {/* Enhanced Floating Elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            width: `${8 + (i % 3) * 4}px`,
            height: `${8 + (i % 3) * 4}px`,
            background: i % 2 === 0 
              ? "radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(34, 139, 34, 0.3) 0%, transparent 70%)"
          }}
          animate={{
            y: [0, -20 - i * 3, 0],
            opacity: [0.1, 0.6, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + i * 0.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.2
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl w-full">
        {/* Enhanced Glass Container */}
        <motion.div 
          className="backdrop-blur-[2px] rounded-3xl p-8 md:p-12 border shadow-2xl"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            y: y1,
            background: "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
            border: "1px solid rgba(255, 255, 255, 0.15)"
          }}
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Enhanced Profile Image Section */}
            <AnimatedElement direction="scale" delay={0.5} className="flex-shrink-0 mx-auto md:mx-0">
              <EnhancedImage 
                src="/prajnaImages/sambutan.jpeg"
                alt="Pendiri Yayasan Prajna Harmonis"
              />
            </AnimatedElement>

            {/* Enhanced Content Section */}
            <div className="flex-1 text-center md:text-left space-y-6">
              {/* Animated Main Title */}
              <AnimatedElement direction="down" delay={0.2}>
                <motion.h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold"
                  style={{
                    background: `linear-gradient(135deg, 
                      #FFD700 0%, 
                      #FFA500 25%, 
                      #FFFF00 50%, 
                      #DAA520 75%, 
                      #FFD700 100%)`,
                    backgroundSize: "200% 200%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8))"
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
                  Kata Sambutan Pendiri
                </motion.h2>
              </AnimatedElement>

              {/* Animated Subtitle */}
              <AnimatedElement direction="left" delay={0.4}>
                <motion.h3 
                  className="text-xl md:text-2xl lg:text-3xl font-semibold"
                  style={{
                    background: `linear-gradient(135deg, 
                      #FFD700 0%, 
                      #FFA500 50%, 
                      #DAA520 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.8))"
                  }}
                >
                  "Jalan Menuju Harmonis"
                </motion.h3>
              </AnimatedElement>

              {/* Individual Paragraph Animations */}
              <div className="space-y-6 text-base md:text-lg leading-relaxed">
                {paragraphs.map((paragraph, index) => (
                  <AnimatedElement
                    key={index}
                    direction="blur"
                    delay={0.6 + index * 0.2}
                    threshold={0.3}
                  >
                    <p
                      className="text-gray-100 font-light"
                      style={{
                        textAlign: "justify",
                        lineHeight: "1.8",
                        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)"
                      }}
                    >
                      {paragraph}
                    </p>
                  </AnimatedElement>
                ))}
              </div>

              

              {/* Enhanced Signature Section */}
              <AnimatedElement direction="scale" delay={1.5}>
                <div className="pt-8 border-t border-white/20">
                  <div className="flex flex-col items-center md:items-start space-y-2">
                    <motion.p 
                      className="text-lg font-semibold"
                      style={{
                        background: `linear-gradient(135deg, 
                          #E8F5E8 0%, 
                          #98FB98 50%, 
                          #90EE90 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)"
                      }}
                    >
                      Pendiri Yayasan Prajna Harmonis
                    </motion.p>
                    
                    <motion.div className="flex items-center gap-3">
                      <motion.div
                        className="w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-green-400"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 2 }}
                      />
                      <motion.p 
                        className="text-xl font-bold text-white tracking-wider"
                        style={{
                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)"
                        }}
                      >
                        Taslim
                      </motion.p>
                      <motion.div
                        className="w-8 h-0.5 bg-gradient-to-l from-yellow-400 to-green-400"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 2 }}
                      />
                    </motion.div>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionSambutan;