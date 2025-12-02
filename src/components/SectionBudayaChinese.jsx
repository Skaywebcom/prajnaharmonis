import { useEffect, useState, useRef } from "react";

const SectionBudayaChinese = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [paragraphsVisible, setParagraphsVisible] = useState([]);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const paragraphRefs = useRef([]);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;500;600;700&family=Noto+Serif+SC:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: [0.1, 0.2, 0.3],
        rootMargin: "-10% 0px -10% 0px"
      }
    );

    const contentObserver = new IntersectionObserver(
      ([entry]) => {
        setIsContentVisible(entry.isIntersecting);
      },
      { 
        threshold: [0.2, 0.3, 0.4],
        rootMargin: "-20% 0px -20% 0px"
      }
    );

    const paragraphObservers = [];
    paragraphRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setParagraphsVisible(prev => {
              const newState = [...prev];
              newState[index] = entry.isIntersecting;
              return newState;
            });
          },
          {
            threshold: [0.3, 0.4, 0.5],
            rootMargin: "-15% 0px -15% 0px"
          }
        );
        observer.observe(ref);
        paragraphObservers.push(observer);
      }
    });

    if (sectionRef.current) {
      headerObserver.observe(sectionRef.current);
    }
    if (contentRef.current) {
      contentObserver.observe(contentRef.current);
    }

    return () => {
      headerObserver.disconnect();
      contentObserver.disconnect();
      paragraphObservers.forEach(observer => observer.disconnect());
    };
  }, []);

  const setParagraphRef = (el, index) => {
    paragraphRefs.current[index] = el;
  };

  return (
    <section
      id="pendidikan"
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-950 overflow-hidden"
    >
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: "url('/prajnaImages/budaya11.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-slate-900/70 to-black/80"></div>

      {/* Enhanced Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-amber-500 to-red-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Refined Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100" height="100" className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="education-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="#f59e0b" opacity="0.5"/>
              <circle cx="25" cy="25" r="1.5" fill="#10b981" opacity="0.4"/>
              <circle cx="75" cy="75" r="1.5" fill="#ef4444" opacity="0.4"/>
              <path d="M 50 30 L 55 40 L 65 40 L 57 47 L 60 57 L 50 50 L 40 57 L 43 47 L 35 40 L 45 40 Z" fill="#fbbf24" opacity="0.15"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#education-pattern)"/>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header Section */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Decorative Top Element */}
          <div className={`flex justify-center mb-6 sm:mb-8 transform transition-all duration-800 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}>
            <div className="flex items-center gap-3">
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-amber-400 rounded-full"></div>
              <div className="w-3 h-3 bg-gradient-to-br from-amber-400 to-red-500 rounded-full animate-pulse"></div>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-l from-transparent via-amber-400 to-amber-400 rounded-full"></div>
            </div>
          </div>

          {/* Main Title */}
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-emerald-400 leading-tight px-4 transform transition-all duration-1200 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            }`}
            style={{
              fontFamily: "'Noto Serif SC', 'Great Vibes', serif",
              fontWeight: 600,
              letterSpacing: '0.02em',
              filter: "drop-shadow(0 4px 12px rgba(251, 191, 36, 0.4))",
            }}
          >
            让和谐发芽：和谐文化汉语大乐园隆重举行
          </h2>

          {/* Decorative Divider */}
          <div className={`flex justify-center items-center gap-2 transform transition-all duration-800 delay-400 ${
            isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`}>
            <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-amber-400 rounded-full"></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
            <div className="w-20 sm:w-32 h-1 bg-gradient-to-l from-transparent via-yellow-400 to-amber-400 rounded-full"></div>
          </div>
        </div>

        {/* Main Article Content */}
        <div className="max-w-6xl mx-auto" ref={contentRef}>
          <div className={`transform transition-all duration-1000 ${
            isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* Article Container with Glass Morphism */}
            <div className={`relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl sm:rounded-[2rem] p-6 sm:p-10 lg:p-14 border border-white/20 shadow-2xl transform transition-all duration-1200 delay-200 ${
              isContentVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-98'
            }`}>
              
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-amber-400/50 rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-emerald-400/50 rounded-br-3xl"></div>

              {/* Date Badge */}
              <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-red-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-4 sm:px-6 py-2 mb-8 sm:mb-10 transform transition-all duration-800 delay-400 ${
                isContentVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}>
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <span className="text-amber-200 font-medium text-sm sm:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                  2011年12月16日至18日
                </span>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div className="space-y-6 sm:space-y-8 text-gray-100 leading-relaxed text-base sm:text-lg lg:text-xl" style={{ fontFamily: "'Noto Serif SC', Inter, sans-serif" }}>
                  
                  {/* Paragraph 1 */}
                  <p 
                    ref={(el) => setParagraphRef(el, 0)}
                    className={`relative group transform transition-all duration-800 delay-500 ${
                      paragraphsVisible[0] ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    <div className="relative bg-gradient-to-r from-amber-500/10 to-transparent border-l-4 border-amber-400 rounded-r-2xl p-5 sm:p-7 backdrop-blur-sm hover:bg-amber-500/15 transition-all duration-300">
                      <div className="absolute -left-3 top-7 w-6 h-6 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/50 group-hover:scale-110 transition-transform">
                        <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                      </div>
                      <span className="block text-justify">
                        2011年12月16日至18日、和谐文化汉语大乐园活动在印尼廖内群岛省巴淡市隆重举行。来自巴淡多所小学的100多名四至六年级学生欢聚一堂、在三天的共同生活与学习中、和谐相处、开心交友、快乐学习、尽情游戏、并在轻松愉悦的氛围中参加竞赛与表演。这段短暂却充实的经历、在孩子们纯真的心灵播下和谐、健康、快乐的种子。
                      </span>
                    </div>
                  </p>

                  {/* Paragraph 2 */}
                  <p 
                    ref={(el) => setParagraphRef(el, 1)} 
                    className={`relative group transform transition-all duration-800 delay-700 ${
                      paragraphsVisible[1] ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    <div className="relative bg-gradient-to-r from-emerald-500/10 to-transparent border-l-4 border-emerald-400 rounded-r-2xl p-5 sm:p-7 backdrop-blur-sm hover:bg-emerald-500/15 transition-all duration-300">
                      <div className="absolute -left-3 top-7 w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/50 group-hover:scale-110 transition-transform">
                        <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                      </div>
                      <span className="block text-justify">
                        此次活动将和谐文化融入汉语教学、通过启发性与趣味性兼具的课程与实践、激发小学生学习汉语的兴趣、并初步认识和谐文化的内涵、培养热爱集体、乐于合群的生活态度。三天的课程包含：汉语课堂、中华文化课程（书法、剪纸等）、友谊交流、生活礼仪、技能竞赛、以及总结成果的综合表演。
                      </span>
                    </div>
                  </p>

                  {/* Paragraph 3 */}
                  <p 
                    ref={(el) => setParagraphRef(el, 2)} 
                    className={`relative group transform transition-all duration-800 delay-900 ${
                      paragraphsVisible[2] ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    <div className="relative bg-gradient-to-r from-red-500/10 to-transparent border-l-4 border-red-400 rounded-r-2xl p-5 sm:p-7 backdrop-blur-sm hover:bg-red-500/15 transition-all duration-300">
                      <div className="absolute -left-3 top-7 w-6 h-6 bg-gradient-to-br from-red-400 to-rose-600 rounded-full flex items-center justify-center shadow-lg shadow-red-500/50 group-hover:scale-110 transition-transform">
                        <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                      </div>
                      <span className="block text-justify">
                        本协会特别邀请暨南大学华文学院、印尼玛中大学中文系主任王功平博士及新加坡共和理工学院甘波博士、分别为学生授课"体验汉语课"和"快乐汉语课" 、深受孩子们喜爱。三天的大乐园活动中、学生们与志愿教师相处融洽、既收获了知识、友谊与温暖、老师们也在陪伴中体验到欢乐与感动。
                      </span>
                    </div>
                  </p>
                </div>
              </div>

              {/* Bottom Decorative Element */}
              <div className={`flex justify-center mt-10 sm:mt-12 gap-2 transform transition-all duration-800 delay-1100 ${
                paragraphsVisible[2] ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}>
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBudayaChinese;