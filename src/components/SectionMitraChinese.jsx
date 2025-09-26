import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// 🔹 AnimatedElement tetap sama
const AnimatedElement = ({ children, direction = "up", delay = 0, duration = 0.8, threshold = 0.1 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10% 0px -10% 0px", threshold });

  const directions = {
    up: { y: 60, x: 0, rotateX: 15 },
    down: { y: -60, x: 0, rotateX: -15 },
    left: { y: 0, x: 60, rotateY: 15 },
    right: { y: 0, x: -60, rotateY: -15 },
    scale: { y: 0, x: 0, scale: 0.8 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)", ...directions[direction] }}
      animate={
        isInView
          ? { opacity: 1, scale: 1, filter: "blur(0px)", y: 0, x: 0, rotateX: 0, rotateY: 0 }
          : { opacity: 0, scale: 0.9, filter: "blur(20px)", ...directions[direction] }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        filter: { duration: duration * 0.6 },
        scale: { type: "spring", stiffness: 100, damping: 20 },
      }}
    >
      {children}
    </motion.div>
  );
};

const SectionMitraChinese = () => {
  const mitraData = [
    {
      src: "/prajnaImages/mitra1.jpeg",
      alt: "战略伙伴 1",
      name: "合作院校",
      type: "教育合作",
      description: "在教育与品格培养领域的战略合作关系",
    },
    {
      src: "/prajnaImages/mitra2.jpeg",
      alt: "战略伙伴 2",
      name: "文化伙伴",
      type: "文化交流",
      description: "在文化交流与和谐项目中的合作",
    },
    {
      src: "/prajnaImages/mitra3.jpeg",
      alt: "战略伙伴 3",
      name: "国际合作",
      type: "全球网络",
      description: "建立国际合作网络以推动项目发展",
    },
  ];

  return (
    <section
      id="mitra"
      className="relative bg-cover bg-center min-h-screen flex items-center px-6 overflow-hidden"
      style={{ backgroundImage: "url('/prajnaImages/background/8.png')" }}
    >
      {/* 背景渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60"></div>

      <div className="relative max-w-7xl mx-auto text-center text-white w-full">
        {/* 标题 */}
        <AnimatedElement direction="down" delay={0.2} duration={1.2}>
          <div className="mb-20">
            <h2
              className="text-5xl md:text-6xl lg:text-7xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400"
              style={{
                fontFamily: "'Great Vibes', cursive",
                paddingTop: "1em",
                paddingBottom: "0.25em",
                filter: "drop-shadow(2px 2px 8px rgba(0,0,0,0.5))",
              }}
            >
              合作伙伴
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-100 font-light tracking-wider mb-2"
                 style={{ fontFamily: "Playfair Display, serif", textShadow: "1px 1px 4px rgba(0,0,0,0.5)" }}>
                我们感谢所有支持与合作的伙伴
              </p>
              <p className="text-2xl md:text-3xl text-yellow-300 font-medium">
                般若和谐基金会
              </p>
              <div className="mt-6 w-32 h-1 bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400 mx-auto rounded-full"></div>
            </div>
          </div>
        </AnimatedElement>

        {/* 合作伙伴卡片 */}
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
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-yellow-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/10 hover:-translate-y-4 h-full flex flex-col">
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full flex items-center justify-center text-black font-bold text-sm border-4 border-white/20">
                    {index + 1}
                  </div>
                  <div className="relative mb-8 bg-white/10 rounded-2xl p-6 group-hover:bg-white/15 transition-all duration-300">
                    <img src={mitra.src} alt={mitra.alt} className="h-20 w-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col flex-grow text-center">
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-4 group-hover:bg-green-500/30 group-hover:text-green-300 transition-all duration-300">
                      {mitra.type}
                    </div>
                    <h3 className="text-2xl font-bold text-yellow-400 mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                      {mitra.name}
                    </h3>
                    <p className="text-gray-300 leading-relaxed flex-grow group-hover:text-gray-200 transition-colors duration-300 mb-6">
                      {mitra.description}
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-auto">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm font-medium">合作中</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-green-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl"></div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* 加入合作伙伴 CTA */}
        <AnimatedElement direction="up" delay={1.4} duration={1.0}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto hover:bg-white/10 hover:border-yellow-400/30 transition-all duration-500 mb-4 -mt-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-black text-lg">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400">加入合作伙伴</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              让我们通过持续的战略合作，共同推动和谐与发展
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium tracking-wide">欢迎新的合作伙伴</span>
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default SectionMitraChinese;
