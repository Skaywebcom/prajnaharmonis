import { useEffect, useState, useRef } from "react";

const SectionVisiMisiChinese = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [animationState, setAnimationState] = useState('hidden');
  const sectionRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setAnimationState('entering');
          setTimeout(() => setAnimationState('visible'), 100);
        } else {
          setIsVisible(false);
          setAnimationState('leaving');
          setTimeout(() => setAnimationState('hidden'), 300);
        }
      },
      { threshold: [0, 0.3, 0.6, 1], rootMargin: "-10% 0px -10% 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getAnimationClasses = (delay = 0) => {
    const baseTransition = "transition-all duration-1000 ease-out";
    const delayClass = delay > 0 ? `delay-${delay}` : '';
    switch (animationState) {
      case 'hidden':
        return `${baseTransition} ${delayClass} opacity-0 translate-y-10`;
      case 'leaving':
        return `${baseTransition} opacity-30 translate-y-5`;
      case 'entering':
        return `${baseTransition} ${delayClass} opacity-70 translate-y-2`;
      case 'visible':
      default:
        return `${baseTransition} ${delayClass} opacity-100 translate-y-0`;
    }
  };

  const getCardAnimationClasses = (delay = 0) => {
    const baseTransition = "transition-all duration-1000 ease-out transform-gpu";
    const delayClass = delay > 0 ? `delay-${delay}` : '';
    switch (animationState) {
      case 'hidden':
        return `${baseTransition} ${delayClass} opacity-0 translate-y-10 scale-95`;
      case 'leaving':
        return `${baseTransition} opacity-40 translate-y-4`;
      case 'entering':
        return `${baseTransition} ${delayClass} opacity-80 translate-y-1`;
      case 'visible':
      default:
        return `${baseTransition} ${delayClass} opacity-100 translate-y-0 scale-100`;
    }
  };

  const timeline = [
    {
      year: "2010年",
      events: [
        "印尼和谐文化协会（大道文化研究院）在印尼廖内群岛省巴淡市成立",
        "开展暨南大学华文教育专业本科（远程）教育课程的招生培养工作并与印尼廖内省各城市的几所国民三语学校（印尼语、汉语、英语）建立紧密合作伙伴关系"
      ],
    },
    {
      year: "2011年",
      events: [
        "举办'和谐文化汉语大乐园'、首届'道德教育和谐文化研讨会'"
      ],
    },
    {
      year: "2013年",
      events: [
        "设立印尼北干巴鲁市暨南大学华文教育专业本科（远程）教育面授站",
        "举办'中印尼青少年艺术文化交流展'、第二届'道德教育和谐文化研讨会'"
      ],
    },
    {
      year: "2014年",
      events: [
        "开展暨南大学汉语国际教育专业兼读制硕士研究生课程的招生培养工作"
      ],
    },
    {
      year: "2015年",
      events: [
        "设立印尼巴厘岛暨南大学华文教育专业本科（远程）教育面授站",
        "举办第三届'道德教育和谐文化研讨会'"
      ],
    },
    {
      year: "2016年",
      events: [
        "参加'印尼中国青年代表团互访交流'"
      ],
    },
    {
      year: "2017年",
      events: [
        "设立中医大自然养生疗法服务中心",
        "举办'2017年国际青少年艺术节'（巴厘岛）、承办'华文教师证书班'（北干巴鲁市与石拉班让镇）"
      ],
    },
    {
      year: "2018年",
      events: [
        "举办'2018年国际青少年艺术节'（巴厘岛）",
        "应邀参加'第五届尼山世界文明论坛'（中国尼山）"
      ],
    },
    {
      year: "2019年",
      events: [
        "举办'成立十周年庆祝晚会'、'中医大自然养生培训和草药展'"
      ],
    },
    {
      year: "2021年",
      events: [
        "应邀线上参加在中国尼山举办'第七届尼山世界文明论坛'"
      ],
    },
    {
      year: "2022年",
      events: [
        "举办线上和谐文化讲座，主题：'共同促进文明和谐'"
      ],
    },
    {
      year: "2023年",
      events: [
        "举办'和'文化文明交流论坛（北干巴鲁市）",
        "设立大道文化研究中心孔子学堂",
        "举办'中印尼友好对话会'"
      ],
    },
    {
      year: "2024年",
      events: [
        "举办'第一届和谐世界文明论坛暨第十届尼山世界文明论坛·中印尼文明对话会'，主题：'构建全人类和谐共生的文明'"
      ],
    },
    {
      year: "2025年",
      events: [
        "举办第二届和谐世界文明论坛暨2025和合文明论坛平行论坛，主题：'探讨超越丛林法则的人类新文明'"
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url('/prajnaImages/visimisi-bg.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      <div className="absolute inset-0 backdrop-blur-[1px]"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 xl:py-24">

        {/* Enhanced Title Section */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 ${getAnimationClasses(0)}`}>
          <div className="inline-block relative">
            {/* Decorative top accent */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 drop-shadow-2xl relative z-10 px-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              发展历程
            </h1>
            
            {/* Decorative bottom accent */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 md:w-40 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 blur-3xl bg-amber-400/10 -z-10"></div>
          </div>
          
          <p className="mt-8 text-white/90 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto font-light tracking-wide px-4">
            见证我们的成长足迹与文化传承
          </p>
        </div>

        {/* Enhanced Timeline */}
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line (hidden on mobile, visible on lg+) */}
            <div className="hidden lg:block absolute left-[4.5rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-amber-400/30 to-transparent"></div>
            
            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`group relative ${getCardAnimationClasses(200 + index * 100)}`}
                >
                  {/* Connection dot for timeline (desktop) */}
                  <div className="hidden lg:block absolute left-[4.25rem] top-12 w-2 h-2 bg-amber-400 rounded-full shadow-lg shadow-amber-400/50 group-hover:scale-150 transition-transform duration-300 z-20"></div>
                  
                  <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/30 overflow-hidden hover:shadow-amber-400/20 transition-all duration-500 hover:scale-[1.01] hover:border-amber-400/30">
                    {/* Top gradient accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></div>
                    
                    {/* Decorative corner glow */}
                    <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-amber-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <div className="relative p-6 sm:p-8 lg:p-10">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 lg:gap-10">
                        {/* Year Badge */}
                        <div className="flex-shrink-0 sm:self-start">
                          <div className="relative inline-flex items-center justify-center">
                            {/* Glow effect behind badge */}
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                            
                            <div className="relative w-full sm:w-28 lg:w-32 xl:w-36 h-20 sm:h-28 lg:h-32 xl:h-36 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 rounded-xl sm:rounded-2xl shadow-xl flex items-center justify-center group-hover:scale-105 transition-all duration-500 border-2 border-amber-400/30">
                              <h2
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg"
                                style={{ fontFamily: "Playfair Display, serif" }}
                              >
                                {item.year}
                              </h2>
                            </div>
                          </div>
                        </div>

                        {/* Events Content */}
                        <div className="flex-1 min-w-0">
                          <ul className="space-y-4 sm:space-y-5 lg:space-y-6">
                            {item.events.map((event, i) => (
                              <li key={i} className="flex items-start gap-4 group/item">
                                {/* Enhanced custom bullet */}
                                <div className="relative flex-shrink-0 mt-2">
                                  <div className="w-3 h-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-md group-hover/item:scale-125 group-hover/item:shadow-amber-400/50 transition-all duration-300"></div>
                                  <div className="absolute inset-0 bg-amber-400 rounded-full blur-sm opacity-0 group-hover/item:opacity-50 transition-opacity duration-300"></div>
                                </div>
                                
                                <span className="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed font-normal break-words group-hover/item:text-gray-900 transition-colors duration-300">
                                  {event}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom subtle shadow accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 sm:mt-20 lg:mt-24 flex justify-center">
          <div className="w-32 sm:w-40 h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent rounded-full"></div>
        </div>

      </div>
    </section>
  );
};

export default SectionVisiMisiChinese;