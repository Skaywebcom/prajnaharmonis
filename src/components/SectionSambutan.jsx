import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useScroll, useTransform } from "framer-motion";

const SectionSambutan = () => {
  const ref = useRef(null);
  const imageRef = useRef(null);
  const controls = useAnimation();
  const imageControls = useAnimation();
  const isInView = useInView(ref, { threshold: 0.1, once: true });
  const isImageInView = useInView(imageRef, { threshold: 0.3, once: true });
  const { scrollYProgress } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    if (isImageInView) {
      imageControls.start("visible");
    }
  }, [imageControls, isImageInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      x: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -5
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const paragraphVariants = {
    hidden: { 
      opacity: 0, 
      y: 25
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  const signatureVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

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

      {/* Floating Elements */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-yellow-400/20 rounded-full"
          style={{
            left: `${20 + i * 20}%`,
            top: `${25 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl w-full">
        {/* Glass Container */}
<motion.div 
  className="backdrop-blur-[1px] rounded-3xl p-8 md:p-12 border shadow-lg"
  initial={{ scale: 0.95, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1, delay: 0.3 }}
  style={{
    y: y1,
    background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
    border: "1px solid rgba(255, 255, 255, 0.1)"
  }}
>


          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="flex flex-col md:flex-row gap-8 md:gap-12 items-start"
          >
            {/* Profile Image Section */}
            <motion.div
              ref={imageRef}
              variants={imageVariants}
              initial="hidden"
              animate={imageControls}
              className="flex-shrink-0 mx-auto md:mx-0"
            >
              <motion.div 
                className="relative group"
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
                    src="/prajnaImages/sambutan.jpeg"
                    alt="Pendiri Yayasan Prajna Harmonis"
                    className="w-full h-full object-cover"
                    style={{
                      filter: "brightness(1.1) contrast(1.1) saturate(1.05)"
                    }}
                  />
                  
                  {/* Subtle overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
            </motion.div>

            {/* Content Section */}
            <div className="flex-1 text-center md:text-left space-y-6">
              {/* Main Title */}
              <motion.div variants={titleVariants} className="space-y-2">
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

                {/* Subtitle */}
                <motion.h3 
                  variants={subtitleVariants}
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

                
              </motion.div>

              {/* Content Paragraphs */}
              <div className="space-y-6 text-base md:text-lg leading-relaxed">
                <motion.p
                  custom={0}
                  variants={paragraphVariants}
                  className="text-gray-100 font-light"
                  style={{
                    textAlign: "justify",
                    lineHeight: "1.8",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)"
                  }}
                >
                  Sepanjang sejarah kehidupan umat manusia selama ribuan tahun hingga
                  sekarang, umat manusia berulang kali mengalami peperangan dan krisis
                  kehidupan yang tiada tuntasnya, bagaikan seorang penderita penyakit
                  yang sering kambuh dan sulit disembuhkan. Umat manusia tidaklah
                  senantiasa dapat menikmati ketentraman dan kebahagiaan hidup
                  sepanjang masa. Saat ini, umat manusia sedang menghadapi krisis
                  terbesar yang hanya dapat diatasi dengan keharmonisan dan rasa
                  sepenanggungan sesama warga dunia untuk mewujudkan keselamatan dan
                  kedamaian bagi semua. Namun kenyataannya masih jauh dari harapan,
                  mengapa keharmonisan demikian sulit diwujudkan?
                </motion.p>

                <motion.p
                  custom={1}
                  variants={paragraphVariants}
                  className="text-gray-100 font-light"
                  style={{
                    textAlign: "justify",
                    lineHeight: "1.8",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)"
                  }}
                >
                  Terlepas dari segala bentuk perbedaan yang terlihat dengan kasat
                  mata, atau perbedaan pikiran, ideologi, dan budaya, kita perlu
                  menyadari bahwasanya semua bentuk kehidupan berasal dari satu sumber
                  yang sama, terdapat suatu kebenaran tertinggi yang tidak memihak,
                  suatu maha kasih yang tidak membedakan. Sungguh diharapkan sekiranya
                  para arif bijaksana dan pengasih dapat menyumbangkan intuisi, saling
                  bertukar pikiran, dan saling menyemangatkan dalam upaya bersama
                  mendorong terciptanya keharmonisan umat manusia dan kedamaian alam
                  semesta.
                </motion.p>
              </div>

              {/* Signature Section */}
              <motion.div 
                variants={signatureVariants}
                className="pt-8 border-t border-white/20"
              >
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
                      transition={{ duration: 1, delay: 1.5 }}
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
                      transition={{ duration: 1, delay: 1.5 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionSambutan;