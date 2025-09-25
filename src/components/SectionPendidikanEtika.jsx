import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

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

// Enhanced Book Card Component with individual animations
const AnimatedBookCard = ({ book, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    margin: "-20% 0px -20% 0px",
    threshold: 0.3
  });

  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.9,
        filter: "blur(10px)"
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
        filter: "blur(5px)"
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      <Link to={book.link}>
        <motion.div 
          className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:bg-white/10 hover:border-yellow-400/30 hover:shadow-2xl hover:shadow-yellow-400/10"
          whileHover={{ 
            y: -8,
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          <div className="relative mb-6 overflow-hidden rounded-xl">
            <motion.img
              src={book.src}
              alt={book.title}
              className="w-full h-80 object-contain transform transition-transform duration-500"
              whileHover={{ scale: 1.05 }}
            />
          </div>
          <div className="text-center">
            <motion.h3 
              className="text-2xl font-bold text-yellow-400 mb-2 transition-colors duration-300"
              whileHover={{ color: "#FDE047" }}
            >
              {book.title}
            </motion.h3>
            <p className="text-gray-300 font-medium text-sm tracking-wide">
              {book.subtitle}
            </p>
          </div>
          <motion.div 
            className="absolute top-4 left-4 w-8 h-8 bg-yellow-400/20 backdrop-blur-sm rounded-full flex items-center justify-center text-yellow-400 font-bold text-sm border border-yellow-400/30"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2
            }}
          >
            {index + 1}
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

const SectionPendidikanEtika = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isQuoteVisible, setIsQuoteVisible] = useState(false);
  const headerRef = useRef(null);
  const quoteRef = useRef(null);

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

    // Quote observer
    const quoteObserver = new IntersectionObserver(
      ([entry]) => {
        setIsQuoteVisible(entry.isIntersecting);
      },
      { 
        threshold: [0.2, 0.3, 0.4],
        rootMargin: "-15% 0px -15% 0px"
      }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }
    if (quoteRef.current) {
      quoteObserver.observe(quoteRef.current);
    }

    return () => {
      headerObserver.disconnect();
      quoteObserver.disconnect();
    };
  }, []);

  const books = [
    { src: "/prajnaImages/jilid1.png", title: "Jilid 1", subtitle: "Fondasi Moral", link: "/jilid1" },
    { src: "/prajnaImages/jilid2.jpeg", title: "Jilid 2", subtitle: "Pengembangan Etika", link: "/jilid2" },
    { src: "/prajnaImages/jilid3.png", title: "Jilid 3", subtitle: "Implementasi Nilai", link: "/jilid3" },
  ];

  return (
    <>
      {/* Section Pendidikan Moral Etika */}
      <section
        id="pendidikan-etika"
        className="relative bg-cover bg-center py-20 px-6 overflow-hidden"
        style={{ backgroundImage: "url('/prajnaImages/background/5.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header Section with enhanced re-rendering animations */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {/* Decorative Line */}
            <div className={`flex items-center justify-center mb-6 transform transition-all duration-800 delay-200 ${
              isHeaderVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
            }`}>
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-24"></div>
              <div className="mx-4 w-3 h-3 bg-yellow-400 rotate-45"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-24"></div>
            </div>

            {/* Title */}
            <h2
              className={`text-5xl md:text-6xl lg:text-7xl -mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400 transform transition-all duration-1200 delay-400 ${
                isHeaderVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
              }`}
              style={{
                fontFamily: "'Great Vibes', cursive",
                paddingTop: "0.25em",
                filter: "drop-shadow(2px 2px 8px rgba(0,0,0,0.5))",
              }}
            >
              Pendidikan Moral Etika
            </h2>

            {/* Subtitle */}
            <div className={`relative transform transition-all duration-1000 delay-600 ${
              isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}>
              <p
                className="text-xl md:text-2xl text-gray-100 font-light tracking-wider mb-2"
                style={{
                  fontFamily: "Playfair Display, serif",
                  textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
                }}
              >
                Buku Pendidikan Moral Etika
              </p>
              <div className={`w-32 h-1 bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400 mx-auto rounded-full transform transition-all duration-800 delay-800 ${
                isHeaderVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
              }`}></div>
            </div>
          </div>

          {/* 3 Columns Grid with sequential animations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto -mt-8">
            {books.map((book, index) => (
              <AnimatedBookCard 
                key={index} 
                book={book} 
                index={index} 
              />
            ))}
          </div>

          {/* Call to Action with enhanced animations */}
          <AnimatedElement direction="up" delay={1.2} duration={1.0}>
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-2 text-gray-300 text-sm tracking-wider">
                <motion.div 
                  className="w-2 h-2 bg-green-500 rounded-full"
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
                <span>Membangun Karakter Melalui Pendidikan Moral</span>
                <motion.div 
                  className="w-2 h-2 bg-yellow-400 rounded-full"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3
                  }}
                />
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Section Krisis Dunia with enhanced animations */}
      <section
        id="krisis-dunia"
        className="relative bg-cover bg-center py-32 px-6 overflow-hidden"
        style={{ backgroundImage: "url('/prajnaImages/krisisbg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/60"></div>
        <div className="relative max-w-5xl mx-auto">
          <div 
            ref={quoteRef}
            className={`relative transform transition-all duration-1000 ${
              isQuoteVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <motion.div 
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden transform transition-all duration-1200 delay-200 ${
                isQuoteVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
            >
              <blockquote
                className={`text-3xl md:text-4xl lg:text-5xl leading-relaxed text-gray-100 font-light tracking-wide relative z-10 transform transition-all duration-800 delay-400 ${
                  isQuoteVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
                }}
              >
                <motion.span 
                  className="text-yellow-400 font-medium"
                  animate={isQuoteVisible ? {
                    color: ["#FBBF24", "#F59E0B", "#FBBF24"]
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Krisis dunia
                </motion.span> pada dasarnya berakar dari{" "}
                <motion.span 
                  className="text-green-400 font-medium"
                  animate={isQuoteVisible ? {
                    color: ["#10B981", "#059669", "#10B981"]
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  krisis moralitas
                </motion.span> dan hati manusia, sehingga semakin menjauh dari keharmonisan.{" "}
                <motion.span 
                  className="text-yellow-400 font-medium"
                  animate={isQuoteVisible ? {
                    color: ["#FBBF24", "#F59E0B", "#FBBF24"]
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  Keharmonisan dunia
                </motion.span> perlu diawali dari{" "}
                <motion.span 
                  className="text-green-400 font-medium"
                  animate={isQuoteVisible ? {
                    color: ["#10B981", "#059669", "#10B981"]
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  keharmonisan hati manusia
                </motion.span>.
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionPendidikanEtika;