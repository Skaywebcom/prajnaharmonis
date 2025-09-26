import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

const AnimatedElement = ({ children, direction = "up", delay = 0, duration = 0.8, threshold = 0.1 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10% 0px -10% 0px", threshold });

  const directions = {
    up: { y: 60, x: 0, rotateX: 15 },
    down: { y: -60, x: 0, rotateX: -15 },
    left: { y: 0, x: -80, rotateY: 15 },
    right: { y: 0, x: 80, rotateY: -15 },
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

const AnimatedCard = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20% 0px -20% 0px", threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="group h-full"
      initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(15px)" }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, y: 40, scale: 0.9, filter: "blur(10px)" }
      }
      transition={{
        duration: 0.8,
        delay: (index % 4) * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <motion.div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-yellow-400/10 transition-all duration-500 hover:bg-white/8 hover:border-yellow-400/30 h-full flex flex-col"
        whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
      >
        <div className="relative overflow-hidden h-48">
          <motion.img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700" whileHover={{ scale: 1.1 }} />

          <motion.div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <motion.div className="absolute top-4 left-4 bg-yellow-400/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-xs font-semibold border border-yellow-400"
            animate={isInView ? { scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }}
          >
            {item.category}
          </motion.div>

          <motion.div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-green-500"
            animate={isInView ? { scale: [1.05, 1, 1.05], opacity: [1, 0.9, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 + 0.5 }}
          >
            {item.date}
          </motion.div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <motion.h3 className="text-lg font-bold text-yellow-400 mb-3 group-hover:text-yellow-300 transition-colors duration-300 line-clamp-2">
            {item.title}
          </motion.h3>
          <motion.p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow group-hover:text-gray-200 transition-colors duration-300 line-clamp-3">
            {item.desc}
          </motion.p>

          <div className="mt-auto">
            <Link to={item.link} className="group/button inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-green-500 text-black font-semibold rounded-xl hover:from-yellow-300 hover:to-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/25">
              <motion.span className="text-sm tracking-wide">阅读全文</motion.span>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// 🔹 Chinese Data
const kegiatanData = [
  {
    img: "/prajnaImages/kegiatan1.jpeg",
    title: "文化与文明和谐研讨会",
    desc: "世界并不太平，总统佐科·维多多不断提醒大家。",
    link: "/kegiatan/seminar-budaya-peradaban",
    category: "研讨会",
    date: "2023",
  },
  {
    img: "/prajnaImages/kegiatan2.jpeg",
    title: "第一次和谐文化研讨会",
    desc: "由般若和谐基金会举办，以提升文化意识。",
    link: "/kegiatan/seminar-budaya-pertama",
    category: "研讨会",
    date: "2023",
  },
  {
    img: "/prajnaImages/kegiatan3.jpeg",
    title: "和谐文化学习园地",
    desc: "参与者是希望理解和谐文化的年轻一代。",
    link: "/kegiatan/taman-belajar",
    category: "教育",
    date: "2011",
  },
  {
    img: "/prajnaImages/kegiatan4.jpeg",
    title: "2018年国际青年艺术节",
    desc: "2018年8月4-5日举办的国际文化艺术节。",
    link: "/kegiatan/festival-seni-2018",
    category: "节日",
    date: "2018",
  },
  {
    img: "/prajnaImages/kegiatan5.jpeg",
    title: "汉语本科远程教育开幕式",
    desc: "与暨南大学合作开设汉语本科远程教育课程。",
    link: "/kegiatan/e-learning-s1",
    category: "教育",
    date: "2015",
  },
  {
    img: "/prajnaImages/kegiatan6.jpeg",
    title: "海外华文教育硕士奖学金",
    desc: "本科与硕士学生积极申请奖学金继续深造。",
    link: "/kegiatan/beasiswa-s2",
    category: "奖学金",
    date: "2015",
  },
  {
    img: "/prajnaImages/kegiatan7.jpeg",
    title: "第三次和谐文化研讨会",
    desc: "研讨会与青年性格培养项目一同举办。",
    link: "/kegiatan/seminar-budaya-ketiga",
    category: "研讨会",
    date: "2015",
  },
  {
    img: "/prajnaImages/kegiatan8.jpeg",
    title: "中印尼文化艺术交流",
    desc: "由两国文化研究与发展协会共同举办。",
    link: "/kegiatan/pertukaran-seni-budaya",
    category: "交流",
    date: "2013",
  },
  {
    img: "/prajnaImages/kegiatan9.jpeg",
    title: "第二次和谐文化研讨会",
    desc: "由般若和谐基金会举办，以强化文化价值。",
    link: "/kegiatan/seminar-budaya-kedua",
    category: "研讨会",
    date: "2013",
  },
];

const SectionKegiatanChinese = () => {
  const navigationRef = useRef(null);
  const isNavigationVisible = true; // sementara hardcode, nanti bisa pakai state/scroll trigger

  return (
    <section
      id="kegiatan"
      className="relative py-20 px-6 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/prajnaImages/background/7.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/50"></div>

      <div className="relative max-w-7xl mx-auto text-white">
        <div className="text-center mb-16 mt-4 pt-4">
          <h2
            className="text-5xl md:text-6xl lg:text-7xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            活动与事件
          </h2>
          <h3 className="text-2xl md:text-3xl text-gray-200">基金会活动报告</h3>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
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

        {/* Custom Navigation Buttons */}
        <div
          ref={navigationRef}
          className={`flex justify-center items-center -mt-12 gap-4 transform transition-all duration-1000 delay-200 ${
            isNavigationVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          {/* Prev Button */}
          <motion.button
            className="swiper-button-prev-custom group relative bg-white/10 backdrop-blur-sm border border-white/20 text-yellow-400 w-14 h-14 rounded-full shadow-lg hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 hover:shadow-yellow-400/25"
            whileHover={{
              scale: 1.1,
              rotate: -5,
              transition: { duration: 0.2 },
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </motion.svg>
          </motion.button>

          {/* Progress Dots */}
          <div className="flex items-center gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === 1 ? "bg-yellow-400" : "bg-white/30"
                } transition-all duration-300`}
                animate={
                  isNavigationVisible
                    ? {
                        scale: i === 1 ? [1, 1.2, 1] : [1, 1.1, 1],
                        opacity: i === 1 ? [1, 0.8, 1] : [0.3, 0.5, 0.3],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            className="swiper-button-next-custom group relative bg-white/10 backdrop-blur-sm border border-white/20 text-green-400 w-14 h-14 rounded-full shadow-lg hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300 hover:shadow-green-500/25"
            whileHover={{
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.2 },
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </motion.button>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap");

        .fancy-text {
          font-family: "Playfair Display", serif;
        }

        /* Custom line clamp */
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

export default SectionKegiatanChinese;