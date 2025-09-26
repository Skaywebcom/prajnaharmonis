import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

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

// Enhanced Bullet Point Component with individual animations
const AnimatedBulletPoint = ({ children, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    margin: "-20% 0px -20% 0px",
    threshold: 0.3
  });

  return (
    <motion.div
      ref={ref}
      className="flex gap-4 items-start group"
      initial={{
        opacity: 0,
        x: -40,
        scale: 0.9,
        filter: "blur(10px)"
      }}
      animate={isInView ? {
        opacity: 1,
        x: 0,
        scale: 1,
        filter: "blur(0px)"
      } : {
        opacity: 0,
        x: -20,
        scale: 0.9,
        filter: "blur(5px)"
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      <motion.div 
        className="w-2 h-2 bg-yellow-400 rounded-full mt-3 group-hover:bg-green-400 transition-colors duration-300"
        animate={isInView ? {
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7]
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2
        }}
      />
      <motion.p 
        className="text-lg leading-relaxed group-hover:text-white transition-colors duration-300"
        whileHover={{ x: 5, transition: { duration: 0.2 } }}
      >
        {children}
      </motion.p>
    </motion.div>
  );
};

// Enhanced Location Card Component
const AnimatedLocationCard = ({ location, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    margin: "-20% 0px -20% 0px",
    threshold: 0.3
  });

  return (
    <motion.div
      ref={ref}
      className="group flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-yellow-400/30 hover:bg-white/10 transition-all duration-300"
      initial={{
        opacity: 0,
        y: 40,
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
        y: 20,
        scale: 0.9,
        filter: "blur(5px)"
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        scale: 1.02,
        x: 5,
        transition: { duration: 0.3 }
      }}
    >
      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
        {location.icon}
      </div>
      <div className="flex-1">
        <h4 className="text-xl font-semibold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
          {location.name}
        </h4>
        <p className="text-green-400 text-sm">{location.province}</p>
      </div>
      <motion.div 
        className="w-0 group-hover:w-2 h-8 bg-gradient-to-b from-yellow-400 to-green-500 rounded-full transition-all duration-500"
        animate={isInView ? {
          opacity: [0.5, 1, 0.5],
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.3
        }}
      />
    </motion.div>
  );
};

const SectionPendidikanMandarin = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isSection1Visible, setIsSection1Visible] = useState(false);
  const [isSection2Visible, setIsSection2Visible] = useState(false);
  const [isCallToActionVisible, setIsCallToActionVisible] = useState(false);
  
  const headerRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const callToActionRef = useRef(null);

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

    // Section 1 observer
    const section1Observer = new IntersectionObserver(
      ([entry]) => {
        setIsSection1Visible(entry.isIntersecting);
      },
      { 
        threshold: [0.2, 0.3, 0.4],
        rootMargin: "-15% 0px -15% 0px"
      }
    );

    // Section 2 observer
    const section2Observer = new IntersectionObserver(
      ([entry]) => {
        setIsSection2Visible(entry.isIntersecting);
      },
      { 
        threshold: [0.2, 0.3, 0.4],
        rootMargin: "-15% 0px -15% 0px"
      }
    );

    // Call to action observer
    const callToActionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsCallToActionVisible(entry.isIntersecting);
      },
      { 
        threshold: [0.3, 0.4, 0.5],
        rootMargin: "-10% 0px -10% 0px"
      }
    );

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (section1Ref.current) section1Observer.observe(section1Ref.current);
    if (section2Ref.current) section2Observer.observe(section2Ref.current);
    if (callToActionRef.current) callToActionObserver.observe(callToActionRef.current);

    return () => {
      headerObserver.disconnect();
      section1Observer.disconnect();
      section2Observer.disconnect();
      callToActionObserver.disconnect();
    };
  }, []);

  const bulletPoints = [
    "暨南大学已获得官方许可，通过其普通话教育学士学位在线学习项目在印度尼西亚提供普通话教育。",
    "在巴淡岛，暨南大学正与般若和谐基金会合作，在廖内省、廖内群岛和巴厘岛实施在线学习项目。",
    "与暨南大学的合作是般若和谐基金会为培养教育领域骨干人才、开发普通话教学资源、提高教育质量和教学效果所做的努力之一。"
  ];

  const locations = [
    { name: "北干巴鲁市 【Pekanbaru】", province: "廖内省 【Riau】", icon: "🏛️" },
    { name: "巴淡市 【Batam】", province: "聊内群岛 【Kepulauan Riau】", icon: "🌊" },
    { name: "巴厘省会登巴萨市 【Bali】", province: "巴厘省 【Bali】", icon: "🏝️" }
  ];

  return (
    <section
      id="pendidikan-mandarin"
      className="relative py-20 px-6 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/prajnaImages/background/6.png')" }}
    >
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-black/45"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 right-20 w-40 h-40 border border-yellow-400/20 rotate-45 rounded-3xl"></div>
        <div className="absolute bottom-20 left-16 w-24 h-24 border border-green-500/25 -rotate-12 rounded-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-yellow-400/10 rotate-45 rounded-lg"></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-green-500/10 -rotate-30 rounded-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Enhanced Header Section with re-rendering animations */}
        <div 
          ref={headerRef}
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Decorative Top Line */}
          <div className={`flex items-center justify-center mb-8 transform transition-all duration-800 delay-200 ${
            isHeaderVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
          }`}>
            <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent w-32"></div>
            <div className="mx-6 flex items-center gap-2">
              <motion.div 
                className="w-2 h-2 bg-yellow-400 rounded-full"
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
                className="w-4 h-4 bg-green-500 rotate-45"
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
                className="w-2 h-2 bg-yellow-400 rounded-full"
                animate={isHeaderVisible ? {
                  scale: [1.2, 1, 1.2],
                  opacity: [1, 0.7, 1]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent w-32"></div>
          </div>

          {/* Enhanced Title */}
          <h2
            className={`text-5xl md:text-6xl lg:text-7xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400 transform transition-all duration-1200 delay-400 ${
              isHeaderVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            }`}
            style={{
              fontFamily: "'Great Vibes', cursive",
              paddingTop: "0.25em",
              filter: "drop-shadow(2px 2px 8px rgba(0,0,0,0.5))",
            }}
          >
            华文教育
          </h2>

          {/* Enhanced Subtitle */}
          <h3
            className={`text-2xl md:text-3xl text-gray-200 mb-4 transform transition-all duration-1000 delay-600 ${
              isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{
              fontFamily: "Playfair Display, serif",
              textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
            }}
          >
            汉语教育学士学位电子学习项目
          </h3>

          <p className={`text-lg md:text-xl text-yellow-300 font-medium mb-6 transform transition-all duration-800 delay-800 ${
            isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            中国广州暨南大学华文学院
          </p>

          {/* Decorative Divider */}
          <div className={`w-32 h-1 bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400 mx-auto rounded-full transform transition-all duration-800 delay-1000 ${
            isHeaderVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`}></div>
        </div>

        {/* Enhanced Content Section 1: Left Image, Right Content */}
        <div className="mb-12" ref={section1Ref}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Container */}
            <AnimatedElement direction="left" delay={0.2} duration={1.0}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-green-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <motion.div 
                  className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-4 group-hover:border-yellow-400/30 transition-all duration-500"
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 2,
                    transition: { duration: 0.4 }
                  }}
                >
                  <motion.img
                    src="/prajnaImages/mandarin1.jpeg"
                    alt="Universitas Ji Nan"
                    className="rounded-2xl w-full object-cover shadow-2xl transition-transform duration-500"
                    whileHover={{ scale: 1.02 }}
                  />
                </motion.div>
              </div>
            </AnimatedElement>

            {/* Content Container */}
            <div className="space-y-8">
              <AnimatedElement direction="right" delay={0.4} duration={1.0}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-yellow-400/20 transition-all duration-500">
                  {/* Section Indicator */}
                  <div className={`flex items-center gap-3 mb-6 transform transition-all duration-800 delay-200 ${
                    isSection1Visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    <div className="w-1 h-12 bg-gradient-to-b from-yellow-400 to-green-500 rounded-full"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-yellow-400">官方合作伙伴</h3>
                      <p className="text-green-400 text-sm">认可计划</p>
                    </div>
                  </div>

                  <div className="space-y-6 text-gray-100">
                    {bulletPoints.map((text, index) => (
                      <AnimatedBulletPoint key={index} index={index}>
                        {text}
                      </AnimatedBulletPoint>
                    ))}
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>

        {/* Enhanced Content Section 2: Right Image, Left Content */}
        <div ref={section2Ref}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Container - Order adjusted for responsive */}
            <div className="lg:order-1 order-2 space-y-4">
              <AnimatedElement direction="left" delay={0.2} duration={1.0}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-4 hover:bg-white/8 hover:border-green-500/20 transition-all duration-500">
                  {/* Section Header */}
                  <div className={`flex items-center gap-3 mb-4 transform transition-all duration-800 delay-200 ${
                    isSection2Visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-yellow-400 rounded-full"></div>
                    <div>
                      <h3 className="text-2xl font-bold text-green-400 fancy-text">
                        电子学习项目地点
                      </h3>
                      <p className="text-yellow-400 text-sm font-medium">汉语教育</p>
                    </div>
                  </div>

                  {/* Enhanced Location List */}
                  <div className="grid gap-4">
                    {locations.map((location, index) => (
                      <AnimatedLocationCard key={index} location={location} index={index} />
                    ))}
                  </div>

                  {/* Additional Info */}
                  <AnimatedElement direction="up" delay={0.8} duration={0.8}>
                    <div className="mt-6 p-4 bg-gradient-to-r from-yellow-400/10 to-green-500/10 rounded-xl border border-yellow-400/20">
                      <div className="flex items-center gap-2 text-yellow-400 text-sm font-medium">
                        <motion.div 
                          className="w-2 h-2 bg-green-500 rounded-full"
                          animate={isSection2Visible ? {
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          } : {}}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <span>该计划在三个战略地点提供</span>
                      </div>
                    </div>
                  </AnimatedElement>
                </div>
              </AnimatedElement>
            </div>

            {/* Image Container - Order adjusted for responsive */}
            <div className="lg:order-2 order-1">
              <AnimatedElement direction="right" delay={0.4} duration={1.0}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-yellow-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <motion.div 
                    className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-4 group-hover:border-green-500/30 transition-all duration-500"
                    whileHover={{ 
                      scale: 1.02,
                      rotateY: -2,
                      transition: { duration: 0.4 }
                    }}
                  >
                    <motion.img
                      src="/prajnaImages/mandarin2.jpeg"
                      alt="暨大和谐面授站"
                      className="rounded-2xl w-full object-cover shadow-2xl transition-transform duration-500"
                      whileHover={{ scale: 1.02 }}
                    />
                    
                    {/* Image Overlay Info */}
                    <motion.div 
                      className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-sm rounded-xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      <p className="text-green-400 font-semibold text-sm">暨大和谐面授站</p>
                      <p className="text-gray-300 text-xs">北干巴鲁市 • 巴淡市 • 巴厘省会登巴萨市</p>
                    </motion.div>
                  </motion.div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>

        
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
        
        .fancy-text {
          font-family: 'Playfair Display', serif;
        }
        
        /* Custom hover animations */
        .group:hover .animate-pulse {
          animation-duration: 0.8s;
        }
      `}</style>
    </section>
  );
};

export default SectionPendidikanMandarin;