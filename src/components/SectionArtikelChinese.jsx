import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const AnimatedElement = ({ children, className = "", delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    threshold: 0.3, 
    margin: "-100px 0px -100px 0px"
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      scale: 0.9,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const AnimatedText = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    threshold: 0.4, 
    margin: "-50px 0px -50px 0px"
  });

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: "blur(5px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SectionArtikel = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const detailRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const cards = [
    {
      id: 1,
      title: "道德教育成功的关键",
      desc: "当今时代，科学与技术飞速发展。然而，这种进步必须伴随强大的道德教育，以免人类失去真正的人性价值。",
      img: "/prajnaImages/artikel1.png",
    },
    {
      id: 2,
      title: "和谐的重要性",
      desc: "和谐让身体健康、让内心平静、让人际关系幸福美满，是人生幸福的关键。",
      img: "/prajnaImages/artikel2.png",
    },
  ];

  const handleReadMore = (cardId) => {
    setSelectedArticle(cardId);
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleClose = () => {
    setSelectedArticle(null);
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const articleContent1 = [
    "当今社会，科学技术高度发达，信息产品层出不穷。智能手机与网络迅速传播讯息，但也带来许多不良影响，如吸毒、放纵、暴力与犯罪等，严重污染青少年的思想。如果情况持续下去，后果将不堪设想。",
    "“道德教育”如今已成为全球关注的课题。如何实施有效的道德教育并非易事。尽管已有许多相关书籍与理论，但现状仍令人担忧。关键在于教育者本身。然而现实社会环境为教师带来巨大压力，因此必须培养教师坚强的心志与长期的承诺。",
    "孔子说：“师者，人之模范。” 教师不仅是知识的传授者，更是灵魂的工程师。灵魂看不见摸不着，但它是人类最根本的精神与良知。",
    "我认为灵魂是永恒的精神力量，源自上天，崇高而伟大。每个人都应不断自我修养，才能真正体悟与坚信良知的重要性。",
    "印尼建国五项原则中的第一条“信仰唯一的上帝”具有深远意义，它是人类道德与和谐的根本。唯有敬畏上天，良知才会觉醒，教师才能肩负神圣的使命。",
    "道德教育是一项长期而艰巨的任务，需要社会与政府的支持与关注，才能取得有效成果。"
  ];

  const articleContent2 = [
    "我们都知道和谐的重要性。和谐的能量让身体健康；和谐的家庭带来幸福；和谐的社会与国家是进步与繁荣的基础。",
    "当今人类面临前所未有的挑战：气候剧变、经济低迷、人口爆炸、资源匮乏、犯罪增加等等。不论面对什么问题，“和谐”都是根本的解决之道。",
    "和谐来自对伦理与道德的真正理解。印度尼西亚是多民族、多宗教、多文化的国家。先贤的智慧孕育了“五项原则”与“多元一体”的精神，使印尼人民团结一致。",
    "中华文化中的儒家有句格言：“和而不同”。道家《道德经》中也说：“人法地，地法天，天法道，道法自然。” 宇宙万物和谐运行，是真、善、美的体现。人类若能效法自然，必能实现真正的和谐。",
    "今天是关键的时刻。世界互联互通，每个人都有责任去理解并实践和谐。",
    "只要人人心怀和谐，未来的世界一定会充满希望。愿般若和谐基金会的努力，推动社会、国家乃至世界的和谐发展。"
  ];

  return (
    <>
      {/* Content Detail di Atas */}
      <AnimatePresence>
        {selectedArticle === 1 && (
          <motion.section
  ref={detailRef}
  id="artikel-detail-1"
  className="relative min-h-screen bg-cover bg-center py-16 scroll-mt-20"
  style={{ backgroundImage: "url('/prajnaImages/background/15.png')" }}
>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-white space-y-8">
              <AnimatedElement delay={0.2} className="text-center">
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  成功道德教育的关键
                </h2>
              </AnimatedElement>

              <div className="space-y-6">
                {articleContent1.map((paragraph, index) => (
                  <AnimatedText
                    key={index}
                    delay={index * 0.15}
                    className="text-base md:text-lg leading-relaxed text-justify"
                  >
                    <p style={{ fontFamily: "Inter, sans-serif" }}>
                      {paragraph}
                    </p>
                  </AnimatedText>
                ))}
              </div>

              <AnimatedElement delay={1} className="text-center">
                <motion.button
                  onClick={handleClose}
                  className="mt-8 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  关闭
                </motion.button>
              </AnimatedElement>
            </div>
          </motion.section>
        )}

        {selectedArticle === 2 && (
          <motion.section
  ref={detailRef}
  id="artikel-detail-1"
  className="relative min-h-screen bg-cover bg-center py-16 scroll-mt-20"
  style={{ backgroundImage: "url('/prajnaImages/background/16.png')" }}
>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-white space-y-8">
              <AnimatedElement delay={0.2} className="text-center">
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  和谐的重要性
                </h2>
              </AnimatedElement>

              <div className="space-y-6">
                {articleContent2.map((paragraph, index) => (
                  <AnimatedText
                    key={index}
                    delay={index * 0.15}
                    className="text-base md:text-lg leading-relaxed text-justify"
                  >
                    <p style={{ fontFamily: "Inter, sans-serif" }}>
                      {paragraph}
                    </p>
                  </AnimatedText>
                ))}
              </div>

              <AnimatedElement delay={1} className="text-center">
                <motion.button
                  onClick={handleClose}
                  className="mt-8 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  关闭
                </motion.button>
              </AnimatedElement>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Section Artikel Utama */}
      <section
        ref={sectionRef}
        id="artikel-section"
        className="relative min-h-screen bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/prajnaImages/background/3.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100/90 via-white/85 to-green-50/90"></div>

        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <motion.div 
            className="absolute top-20 left-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-green-400 rounded-full blur-3xl"
            animate={{ 
              scale: [1.1, 1, 1.1],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute top-1/2 right-1/4 w-64 h-64 bg-amber-300 rounded-full blur-2xl"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-16">
          {/* Header */}
          <AnimatedElement delay={0.2} className="text-center mb-20">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-amber-500 to-green-600"
              style={{
                fontFamily: "'Great Vibes', cursive",
                paddingTop: "0.25em",
                filter: "drop-shadow(2px 2px 8px rgba(0,0,0,0.1))",
              }}
              animate={{
                backgroundPosition: ["0%", "100%", "0%"]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              和谐文章
            </motion.h2>
            
            <AnimatedElement delay={0.4}>
              <p
                className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4 italic"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                和谐文化文章
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={0.6}>
              <motion.div 
                className="w-32 h-1 bg-gradient-to-r from-yellow-500 via-amber-400 to-green-500 mx-auto rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "8rem" }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </AnimatedElement>
          </AnimatedElement>

          {/* Cards */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {cards.map((card, index) => (
                <AnimatedElement
                  key={card.id}
                  delay={index * 0.3}
                  direction={index % 2 === 0 ? "left" : "right"}
                  className="h-full"
                >
                  <motion.article
                    className="group relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl 
                               border border-white/20 overflow-hidden 
                               h-[420px] cursor-pointer"
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    whileHover={{ 
                      scale: 1.02,
                      rotateY: 5,
                      z: 50
                    }}
                    transition={{ duration: 0.4 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Default State */}
                    <motion.div
                      className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
                      animate={{
                        opacity: hoveredCard === card.id ? 0 : 1,
                        scale: hoveredCard === card.id ? 0.8 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.div 
                        className="w-32 h-32 mb-6 rounded-full overflow-hidden shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={card.img}
                          alt={card.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      
                      <motion.h3
                        className="text-lg md:text-xl font-bold text-gray-800 mb-4 leading-tight"
                        style={{ fontFamily: "Playfair Display, serif" }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                      >
                        {card.title}
                      </motion.h3>
                      
                      <motion.p
                        className="text-gray-600 leading-relaxed text-sm md:text-base line-clamp-4"
                        style={{ fontFamily: "Inter, sans-serif" }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                      >
                        {card.desc}
                      </motion.p>
                    </motion.div>

                    {/* Hover State */}
                    <motion.div
                      className="absolute inset-0 flex flex-col"
                      animate={{
                        opacity: hoveredCard === card.id ? 1 : 0,
                        scale: hoveredCard === card.id ? 1 : 1.2,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="relative h-48 w-full overflow-hidden">
                        <motion.img
                          src={card.img}
                          alt={card.title}
                          className="w-full h-full object-cover"
                          animate={{
                            scale: hoveredCard === card.id ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.6 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 flex items-center justify-center px-4">
                          <h3
                            className="text-xl md:text-2xl font-bold text-white text-center leading-snug"
                            style={{ fontFamily: "Playfair Display, serif" }}
                          >
                            {card.title}
                          </h3>
                        </div>
                      </div>
                      
                      <div className="p-6 flex flex-col justify-between flex-1">
                        <p
                          className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {card.desc}
                        </p>
                        
                        <motion.button
                          onClick={() => handleReadMore(card.id)}
                          className="group/btn px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 
                                     text-white font-semibold rounded-full 
                                     hover:from-yellow-400 hover:to-amber-400 
                                     shadow-lg hover:shadow-xl relative overflow-hidden"
                          style={{ fontFamily: "Inter, sans-serif" }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-300"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "0%" }}
                            transition={{ duration: 0.3 }}
                          />
                          <span className="flex items-center justify-center space-x-2 relative z-10">
                            <span>阅读更多</span>
                            <motion.svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              animate={{ x: hoveredCard === card.id ? 5 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </motion.svg>
                          </span>
                        </motion.button>
                      </div>
                    </motion.div>
                  </motion.article>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionArtikel;