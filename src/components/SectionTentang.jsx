import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useScroll, useTransform } from "framer-motion";

const SectionTentang = () => {
  const ref = useRef(null);
  const imageRef = useRef(null);
  const controls = useAnimation();
  const imageControls = useAnimation();
  const isInView = useInView(ref, { threshold: 0.1, once: true });
  const isImageInView = useInView(imageRef, { threshold: 0.3, once: true });
  const { scrollYProgress } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 20]);

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
        duration: 0.8,
        staggerChildren: 0.4
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
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
      x: -20
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

  const paragraphVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
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

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      x: -50
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const paragraphs = [
    "Indonesia adalah negara yang dikaruniai dengan paling banyak suku bangsa di dunia sehingga menjadikan bangsa Indonesia kaya akan keberagaman seni dan budaya yang indah nan harmonis. Disertai keindahan pesona alam bumi nusantara dari Sabang sampai Merauke, dan kebijaksanaan para pendahulu bangsa yang melahirkan semboyan Bhinneka Tunggal Ika dan benteng perlindungan dasar negara Pancasila, masyarakat Indonesia hidup rukun dan bertautan dengan erat di dalam semangat kebangsaan Negara Kesatuan Republik Indonesia (NKRI).",
    
    "Di tengah-tengah gejolak dan konflik berkepanjangan antar umat manusia di berbagai belahan dunia, kedamaian dan ketentraman kehidupan bermasyarakat menjadi semakin langka dan hendaknya senantiasa kita lindungi bersama. Yayasan Prajna Harmonis mendambakan keharmonisan seutuhnya, kedamaian dan kebahagiaan sepanjang masa untuk umat manusia pada umumnya dan masyarakat Indonesia pada khususnya.",
    
    "Keberagaman dalam berbagai aspek kehidupan manusia merupakan anugerah Yang Maha Kuasa. Langit biru, awan putih, gunung permai, samudera luas, hutan rindang, sungai mengalir, matahari menyinari, angin bertiup, udara segar, air jernih, semuanya adalah komponen yang membentuk alam kehidupan yang berlimpah dan indah. Aneka ragam tetumbuhan dengan bentuk, warna, dan tekstur yang berbeda memberikan variasi keindahan dan kombinasi nutrisi yang dibutuhkan oleh tubuh manusia. Demikian juga keanekaragaman etnis dan suku bangsa yang melahirkan kekayaan seni dan budaya yang dapat berinteraksi dan saling mengapresiasi. Semua unsur keanekaragaman adalah berkah dan ciptaan-Nya demi kehidupan manusia yang menarik, berbahagia, dan serba berkecukupan.",
    
    "Yayasan Prajna Harmonis didirikan pada tahun 2010 di pulau Batam, Provinsi Kepulauan Riau, Indonesia dengan tujuan turut berkontribusi untuk menunjang interaksi, pemahaman dan pengkajian budaya keharmonisan demi terwujudnya kehidupan bermasyarakat, berbangsa, dan bernegara yang senantiasa rukun harmonis dan damai tentram di dalam keluarga besar NKRI maupun bumi raya."
  ];

  return (
    <section
  id="tentang"
  className="relative min-h-screen px-6 py-20 flex items-center justify-center overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: "url('/prajnaImages/background/22.png')",
  }}
>
      {/* Subtle Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 opacity-[0.02]"
        style={{ y: y1 }}
      >
        <div className="w-full h-full bg-gradient-to-br from-green-300 to-yellow-300 rounded-full blur-2xl"></div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 right-16 w-24 h-24 opacity-[0.02]"
        style={{ y: y2 }}
      >
        <div className="w-full h-full bg-gradient-to-br from-yellow-300 to-green-300 rounded-full blur-2xl"></div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full opacity-10"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.05, 0.2, 0.05],
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

      <div className="max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center md:text-left"
        >
          {/* Main Title */}
          <motion.div variants={titleVariants} className="relative inline-block mb-8">
            <motion.h2 
  className="text-4xl md:text-5xl lg:text-6xl -mb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-800 to-green-900 px-1"
  style={{
    fontFamily: "'Great Vibes', cursive",
    paddingTop: "0.25em",
    paddingBottom: "0.25em",
    lineHeight: 1.2, // tambah ini
    textShadow: "2px 2px 6px rgba(0,0,0,0.6)", // membuat teks lebih menonjol
  }}
  animate={{
    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: "linear"
  }}
>
  Tentang Kami
</motion.h2>


            
            {/* Title decoration */}
            <motion.div
              className="absolute -bottom-3 left-0 md:left-0 w-24 h-0.5 bg-gradient-to-r from-green-500 via-yellow-500 to-green-500 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.h3 
            variants={subtitleVariants}
            className="text-xl md:text-2xl lg:text-3xl font-semibold italic mb-6 -mt-4 relative"
            
          >
            Sejarah Berdiri
          </motion.h3>

          {/* Content Container */}
          <div className="relative">
            {/* Image with enhanced styling */}
            <motion.div
              ref={imageRef}
              variants={imageVariants}
              initial="hidden"
              animate={imageControls}
              className="float-left mr-8 mb-6 group"
            >
              <motion.div 
                className="relative overflow-hidden rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/prajnaImages/tentang.jpeg"
                  alt="Tentang Kami"
                  className="w-[30rem] md:w-[32rem] h-auto object-cover"
                  style={{
                    filter: "brightness(1.05) contrast(1.1) saturate(1.1)",
                    transform: "scale(1.05)" // masih ada efek perbesar halus

                  }}
                />
                
                {/* Image overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Elegant border */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-2xl"
                  style={{
                    background: `linear-gradient(45deg, 
                      rgba(255, 215, 0, 0.3), 
                      rgba(34, 139, 34, 0.3), 
                      rgba(255, 215, 0, 0.3)) border-box`,
                    mask: `linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)`,
                    maskComposite: "subtract"
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </motion.div>
            </motion.div>

            {/* Paragraphs */}
            <div className="space-y-8 text-lg md:text-xl leading-relaxed">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  custom={index}
                  variants={paragraphVariants}
                  className="text-gray-700 font-light"
                  style={{
                    textAlign: "justify",
                    lineHeight: "1.8",
                    textShadow: "0 1px 2px rgba(0, 0, 0, 0.05)"
                  }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Bottom decorative element */}
          <motion.div 
            className="mt-16 flex justify-center md:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 1.5 }
              }
            }}
          >
            <div className="flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-green-50/80 to-yellow-50/80 rounded-full border border-green-100/50 backdrop-blur-sm">
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-green-700 font-medium tracking-wide">Didirikan 2010 • Batam, Kepulauan Riau</span>
              <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionTentang;