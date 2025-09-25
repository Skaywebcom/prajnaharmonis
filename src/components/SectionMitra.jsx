import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Enhanced AnimatedElement component with always re-render animations
const AnimatedElement = ({ children, direction = "up", delay = 0, duration = 0.8, threshold = 0.1 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, // Allow re-triggering - animations trigger every time you scroll into view
    margin: "-10% 0px -10% 0px", // Multiple intersection thresholds for smooth detection
    threshold // Animations work when coming from above or below
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

const SectionMitra = () => {
  const mitraData = [
    {
      src: "/prajnaImages/mitra1.jpeg",
      alt: "Mitra Strategis 1",
      name: "Partner Institution",
      type: "Educational Partnership",
      description: "Kemitraan strategis dalam bidang pendidikan dan pengembangan karakter"
    },
    {
      src: "/prajnaImages/mitra2.jpeg",
      alt: "Mitra Strategis 2", 
      name: "Cultural Partner",
      type: "Cultural Exchange",
      description: "Kolaborasi dalam program pertukaran budaya dan keharmonisan"
    },
    {
      src: "/prajnaImages/mitra3.jpeg",
      alt: "Mitra Strategis 3",
      name: "International Cooperation",
      type: "Global Network",
      description: "Jaringan kerjasama internasional untuk pengembangan program"
    }
  ];

  return (
    <section
      id="mitra"
      className="relative bg-cover bg-center min-h-screen flex items-center px-6 overflow-hidden"
      style={{ backgroundImage: "url('/prajnaImages/background/8.png')" }}
    >
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-16 w-40 h-40 border-2 border-yellow-400/20 rotate-45 rounded-3xl"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 border-2 border-green-500/25 -rotate-12 rounded-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-400/10 rotate-30 rounded-2xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-green-500/10 -rotate-45 rounded-xl"></div>
        
        {/* Connecting Lines */}
        <div className="absolute top-1/4 left-1/2 w-px h-32 bg-gradient-to-b from-yellow-400/20 to-transparent"></div>
        <div className="absolute bottom-1/4 right-1/3 w-px h-28 bg-gradient-to-t from-green-500/20 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center text-white w-full">
        {/* Enhanced Header Section */}
        <AnimatedElement direction="down" delay={0.2} duration={1.2}>
          <div className="mb-20">
            {/* Enhanced Title */}
            <h2
              className="text-5xl md:text-6xl lg:text-7xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400"
              style={{
                fontFamily: "'Great Vibes', cursive",
                paddingTop: "1em",
                paddingBottom: "0.25em",
                filter: "drop-shadow(2px 2px 8px rgba(0,0,0,0.5))",
              }}
            >
              Mitra Kerjasama
            </h2>

            {/* Enhanced Subtitle */}
            <div className="max-w-4xl mx-auto">
              <p
                className="text-xl md:text-2xl text-gray-100 font-light tracking-wider mb-2"
                style={{
                  fontFamily: "Playfair Display, serif",
                  textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
                }}
              >
                Kami bersyukur dan berterima kasih kepada mitra
              </p>
              <p className="text-2xl md:text-3xl text-yellow-300 font-medium">
                Yayasan Prajna Harmonis
              </p>

              {/* Decorative Divider */}
              <div className="mt-6 w-32 h-1 bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400 mx-auto rounded-full"></div>
            </div>
          </div>
        </AnimatedElement>

        {/* Enhanced Partnership Network Visualization */}
        <AnimatedElement direction="scale" delay={0.4} duration={1.0}>
          <div className="mb-16">
            <div className="relative max-w-6xl mx-auto">
              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full flex items-center justify-center border-4 border-white/20 shadow-2xl z-10">
                <div className="text-2xl">🤝</div>
              </div>
              
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 800 400">
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#facc15" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
                <path d="M 200 200 Q 400 100 600 200" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-pulse">
                  <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite"/>
                </path>
                <path d="M 200 200 Q 400 300 600 200" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-pulse">
                  <animate attributeName="stroke-dashoffset" values="10;0" dur="2s" repeatCount="indefinite"/>
                </path>
              </svg>
            </div>
          </div>
        </AnimatedElement>

        {/* Enhanced Partnership Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
          {mitraData.map((mitra, index) => (
            <AnimatedElement 
              key={index} 
              direction={index % 2 === 0 ? "left" : "right"} 
              delay={0.6 + index * 0.2} 
              duration={0.8}
              threshold={0.2}
            >
              <div className="group relative">
                {/* Card Container */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-yellow-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/10 hover:-translate-y-4 h-full flex flex-col">
                  
                  {/* Card Number */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full flex items-center justify-center text-black font-bold text-sm border-4 border-white/20">
                    {index + 1}
                  </div>

                  {/* Logo Container */}
                  <div className="relative mb-8 bg-white/10 rounded-2xl p-6 group-hover:bg-white/15 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-green-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={mitra.src}
                      alt={mitra.alt}
                      className="h-20 w-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-100 group-hover:invert-0"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow text-center">
                    {/* Partner Type Badge */}
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-4 group-hover:bg-green-500/30 group-hover:text-green-300 transition-all duration-300">
                      {mitra.type}
                    </div>

                    {/* Partner Name */}
                    <h3 className="text-2xl font-bold text-yellow-400 mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                      {mitra.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed flex-grow group-hover:text-gray-200 transition-colors duration-300 mb-6">
                      {mitra.description}
                    </p>

                    {/* Partnership Status */}
                    <div className="flex items-center justify-center gap-2 mt-auto">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm font-medium">Active Partnership</span>
                    </div>
                  </div>

                  {/* Hover Effect Lines */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-green-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl"></div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Call to Action */}
        <AnimatedElement direction="up" delay={1.4} duration={1.0}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto hover:bg-white/10 hover:border-yellow-400/30 transition-all duration-500 mb-4 -mt-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400">Bergabung Sebagai Mitra</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Mari bersama-sama membangun keharmonisan melalui kemitraan strategis yang berkelanjutan
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium tracking-wide">Terbuka untuk Kemitraan Baru</span>
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </AnimatedElement>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
        
        .fancy-text {
          font-family: 'Playfair Display', serif;
        }
        
        /* Custom animations for connection visualization */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        /* Enhanced gradient animations */
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 4s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default SectionMitra;