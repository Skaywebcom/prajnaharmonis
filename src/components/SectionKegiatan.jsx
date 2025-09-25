import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

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
    left: { y: 0, x: -80, rotateY: 15 },
    right: { y: 0, x: 80, rotateY: -15 },
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

// Enhanced Card Component with individual animations
const AnimatedCard = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    margin: "-20% 0px -20% 0px",
    threshold: 0.3
  });

  return (
    <motion.div
      ref={ref}
      className="group h-full"
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.9,
        filter: "blur(15px)"
      }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)"
      } : {
        opacity: 0,
        y: 40,
        scale: 0.9,
        filter: "blur(10px)"
      }}
      transition={{
        duration: 0.8,
        delay: (index % 4) * 0.2, // Stagger based on visible cards
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {/* Card Container */}
      <motion.div 
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-yellow-400/10 transition-all duration-500 hover:bg-white/8 hover:border-yellow-400/30 h-full flex flex-col"
        whileHover={{ 
          y: -8,
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
      >
        
        {/* Image Container */}
        <div className="relative overflow-hidden h-48">
          <motion.img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700"
            whileHover={{ scale: 1.1 }}
          />
          
          {/* Image Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
          
          {/* Category Badge */}
          <motion.div 
            className="absolute top-4 left-4 bg-yellow-400/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-xs font-semibold border border-yellow-400"
            animate={isInView ? {
              scale: [1, 1.05, 1],
              opacity: [0.9, 1, 0.9]
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.1
            }}
          >
            {item.category}
          </motion.div>
          
          {/* Date Badge */}
          <motion.div 
            className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-green-500"
            animate={isInView ? {
              scale: [1.05, 1, 1.05],
              opacity: [1, 0.9, 1]
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.1 + 0.5
            }}
          >
            {item.date}
          </motion.div>
          
          {/* Hover Arrow */}
          <motion.div 
            className="absolute bottom-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            initial={{ x: 8, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
          >
            <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>

        {/* Content Container */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Title */}
          <motion.h3 
            className="text-lg font-bold text-yellow-400 mb-3 group-hover:text-yellow-300 transition-colors duration-300 line-clamp-2"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            {item.title}
          </motion.h3>

          {/* Description */}
          <motion.p 
            className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow group-hover:text-gray-200 transition-colors duration-300 line-clamp-3"
            whileHover={{ 
              x: 2,
              transition: { duration: 0.2 }
            }}
          >
            {item.desc}
          </motion.p>

          {/* CTA Button */}
          <div className="mt-auto">
            <Link
              to={item.link}
              className="group/button inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-green-500 text-black font-semibold rounded-xl hover:from-yellow-300 hover:to-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/25"
            >
              <motion.span 
                className="text-sm tracking-wide"
                whileHover={{ x: -2 }}
                transition={{ duration: 0.2 }}
              >
                BACA SELENGKAPNYA
              </motion.span>
              <motion.svg 
                className="w-4 h-4 transition-transform duration-300"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </Link>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <motion.div 
          className="h-1 bg-gradient-to-r from-yellow-400 via-green-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          whileHover={{ 
            background: "linear-gradient(90deg, #F59E0B 0%, #10B981 50%, #F59E0B 100%)",
            transition: { duration: 0.3 }
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const kegiatanData = [
  {
    img: "/prajnaImages/kegiatan1.jpeg",
    title: "Seminar Budaya dan Peradaban Keharmonisan",
    desc: "Dunia sedang tidak baik-baik saja. Demikian Bapak Presiden Joko Widodo terus mengingatkan.",
    link: "/kegiatan/seminar-budaya-peradaban",
    category: "Seminar",
    date: "2023"
  },
  {
    img: "/prajnaImages/kegiatan2.jpeg",
    title: "Seminar Budaya Keharmonisan Pertama",
    desc: "Diselenggarakan oleh Yayasan Prajna Harmonis untuk membangun kesadaran budaya.",
    link: "/kegiatan/seminar-budaya-pertama",
    category: "Seminar",
    date: "2023"
  },
  {
    img: "/prajnaImages/kegiatan3.jpeg",
    title: "Taman Belajar Budaya Keharmonisan",
    desc: "Peserta Taman Belajar adalah generasi muda yang ingin memahami keharmonisan budaya.",
    link: "/kegiatan/taman-belajar",
    category: "Pendidikan",
    date: "2011"
  },
  {
    img: "/prajnaImages/kegiatan4.jpeg",
    title: "Festival Seni Pemuda Internasional 2018",
    desc: "Pada tanggal 4-5 Agustus 2018 diselenggarakan festival seni budaya internasional.",
    link: "/kegiatan/festival-seni-2018",
    category: "Festival",
    date: "2018"
  },
  {
    img: "/prajnaImages/kegiatan5.jpeg",
    title: "Pembukaan E-Learning S1 Mandarin",
    desc: "Acara pembukaan program E-Learning S1 Pendidikan Mandarin kerjasama dengan Universitas Ji Nan.",
    link: "/kegiatan/e-learning-s1",
    category: "Pendidikan",
    date: "2015"
  },
  {
    img: "/prajnaImages/kegiatan6.jpeg",
    title: "Beasiswa Program S2 Overseas Chinese Education",
    desc: "Para mahasiswa S1 dan S2 menyambut program beasiswa untuk melanjutkan studi.",
    link: "/kegiatan/beasiswa-s2",
    category: "Beasiswa",
    date: "2015"
  },
  {
    img: "/prajnaImages/kegiatan7.jpeg",
    title: "Seminar Budaya Keharmonisan Ketiga",
    desc: "Seminar diselenggarakan beriringan dengan program pengembangan karakter muda.",
    link: "/kegiatan/seminar-budaya-ketiga",
    category: "Seminar",
    date: "2015"
  },
  {
    img: "/prajnaImages/kegiatan8.jpeg",
    title: "Pertukaran Seni Budaya Indonesia-Tiongkok",
    desc: "Panitia penyelenggara: Asosiasi Penelitian dan pengembangan budaya dua negara.",
    link: "/kegiatan/pertukaran-seni-budaya",
    category: "Pertukaran",
    date: "2013"
  },
  {
    img: "/prajnaImages/kegiatan9.jpeg",
    title: "Seminar Budaya Keharmonisan Kedua",
    desc: "Seminar diselenggarakan oleh Yayasan Prajna Harmonis untuk memperkuat nilai-nilai budaya.",
    link: "/kegiatan/seminar-budaya-kedua",
    category: "Seminar",
    date: "2013"
  },
];

const SectionKegiatan = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isSwiperVisible, setIsSwiperVisible] = useState(false);
  const [isNavigationVisible, setIsNavigationVisible] = useState(false);
  
  const headerRef = useRef(null);
  const swiperRef = useRef(null);
  const navigationRef = useRef(null);

  // Enhanced intersection observers
  useEffect(() => {
    // Header observer
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderVisible(entry.isIntersecting);
      },
      { 
        threshold: [0.1, 0.2, 0.3],
        rootMargin: "-10% 0px -10% 0px"
      }
    );

    // Swiper observer
    const swiperObserver = new IntersectionObserver(
      ([entry]) => {
        setIsSwiperVisible(entry.isIntersecting);
      },
      { 
        threshold: [0.2, 0.3, 0.4],
        rootMargin: "-15% 0px -15% 0px"
      }
    );

    // Navigation observer
    const navigationObserver = new IntersectionObserver(
      ([entry]) => {
        setIsNavigationVisible(entry.isIntersecting);
      },
      { 
        threshold: [0.3, 0.4, 0.5],
        rootMargin: "-10% 0px -10% 0px"
      }
    );

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (swiperRef.current) swiperObserver.observe(swiperRef.current);
    if (navigationRef.current) navigationObserver.observe(navigationRef.current);

    return () => {
      headerObserver.disconnect();
      swiperObserver.disconnect();
      navigationObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="kegiatan"
      className="relative py-20 px-6 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/prajnaImages/background/7.png')" }}
    >
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/50"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-32 h-32 border border-yellow-400/30 rotate-45 rounded-3xl"></div>
        <div className="absolute bottom-32 right-1/4 w-20 h-20 border border-green-500/40 -rotate-12 rounded-2xl"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-yellow-400/10 rotate-30 rounded-xl"></div>
        <div className="absolute bottom-1/4 left-16 w-24 h-24 bg-green-500/10 -rotate-45 rounded-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-white">
        {/* Enhanced Header Section with re-rendering animations */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Decorative Top Line */}
          <div className={`flex items-center justify-center mb-8 transform transition-all duration-800 delay-200 ${
            isHeaderVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
          }`}>
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-32"></div>
            <div className="mx-6 flex items-center gap-2">
              <motion.div 
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={isHeaderVisible ? {
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="w-4 h-4 bg-yellow-400 rotate-45"
                animate={isHeaderVisible ? {
                  rotate: [45, 225, 45]
                } : {}}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={isHeaderVisible ? {
                  scale: [1.2, 1, 1.2],
                  opacity: [1, 0.7, 1]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                }}
              />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-32"></div>
          </div>

          {/* Main Title */}
          <h2
            className={`text-5xl md:text-6xl lg:text-7xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400 transform transition-all duration-1200 delay-400 ${
              isHeaderVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            }`}
            style={{
              fontFamily: "'Great Vibes', cursive",
              paddingTop: "0.25em",
              paddingBottom: "0.25em",
              filter: "drop-shadow(2px 2px 8px rgba(0,0,0,0.5))",
            }}
          >
            Acara dan Kegiatan
          </h2>

          {/* Subtitle */}
          <h3 
            className={`text-2xl md:text-3xl text-gray-200 mb-2 -mt-4 transform transition-all duration-1000 delay-600 ${
              isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{
              fontFamily: "Playfair Display, serif",
              textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
            }}
          >
            Laporan Acara dan Kegiatan Yayasan
          </h3>

          {/* Decorative Divider */}
          <div className={`w-32 h-1 bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400 mx-auto rounded-full transform transition-all duration-800 delay-800 ${
            isHeaderVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`}></div>
        </div>

        {/* Enhanced Swiper Container */}
        <div 
          ref={swiperRef}
          className={`relative transform transition-all duration-1000 ${
            isSwiperVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
              1280: { slidesPerView: 4, spaceBetween: 32 },
            }}
            className="pb-20"
          >
            {kegiatanData.map((item, index) => (
              <SwiperSlide key={index}>
                <AnimatedCard item={item} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Enhanced Custom Navigation Buttons */}
          <div 
            ref={navigationRef}
            className={`flex justify-center items-center -mt-12 gap-4 transform transition-all duration-1000 delay-200 ${
              isNavigationVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <motion.button 
              className="swiper-button-prev-custom group relative bg-white/10 backdrop-blur-sm border border-white/20 text-yellow-400 w-14 h-14 rounded-full shadow-lg hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 hover:shadow-yellow-400/25"
              whileHover={{ 
                scale: 1.1,
                rotate: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.svg 
                className="w-6 h-6 mx-auto transition-transform duration-300"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: -2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </motion.svg>
            </motion.button>

            {/* Progress Indicator */}
            <div className="flex items-center gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-yellow-400' : 'bg-white/30'} transition-all duration-300`}
                  animate={isNavigationVisible ? {
                    scale: i === 1 ? [1, 1.2, 1] : [1, 1.1, 1],
                    opacity: i === 1 ? [1, 0.8, 1] : [0.3, 0.5, 0.3]
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>

            <motion.button 
              className="swiper-button-next-custom group relative bg-white/10 backdrop-blur-sm border border-white/20 text-green-400 w-14 h-14 rounded-full shadow-lg hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300 hover:shadow-green-500/25"
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.svg 
                className="w-6 h-6 mx-auto transition-transform duration-300"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
        
        .fancy-text {
          font-family: 'Playfair Display', serif;
        }
        
        /* Custom line clamp utility */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Hide default Swiper buttons */
        .swiper-button-next,
        .swiper-button-prev {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default SectionKegiatan;