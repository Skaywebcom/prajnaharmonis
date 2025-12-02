import { useEffect, useState, useRef } from "react";

const SectionBudayaChinese1 = () => {
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
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden"
    >
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: "url('/prajnaImages/budaya12.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-indigo-950/60 to-black/80"></div>

      {/* Enhanced Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-[30rem] h-[30rem] bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Refined Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="120" height="120" className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="harmony-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="60" cy="60" r="2.5" fill="#fbbf24" opacity="0.6"/>
              <circle cx="30" cy="30" r="1.8" fill="#10b981" opacity="0.5"/>
              <circle cx="90" cy="90" r="1.8" fill="#a855f7" opacity="0.5"/>
              <path d="M 60 40 Q 70 50 60 60 Q 50 50 60 40" fill="none" stroke="#fbbf24" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#harmony-pattern)"/>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header Section */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Decorative Top Element */}
          <div className={`flex justify-center mb-8 sm:mb-10 transform transition-all duration-800 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}>
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
              <div className="w-20 sm:w-28 h-0.5 bg-gradient-to-r from-amber-400 via-emerald-400 to-purple-400 rounded-full"></div>
              <div className="w-3 h-3 bg-gradient-to-br from-amber-400 via-emerald-400 to-purple-400 rounded-full shadow-lg shadow-amber-500/50"></div>
              <div className="w-20 sm:w-28 h-0.5 bg-gradient-to-l from-purple-400 via-emerald-400 to-amber-400 rounded-full"></div>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-purple-300 leading-tight px-4 transform transition-all duration-1200 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            }`}
            style={{
              fontFamily: "'Noto Serif SC', 'Great Vibes', serif",
              fontWeight: 600,
              letterSpacing: '0.02em',
              filter: "drop-shadow(0 4px 16px rgba(251, 191, 36, 0.5))",
            }}
          >
            首屆和谐文化研讨会以"中华文化具有和谐的本质"为主题
          </h2>

          {/* Subtitle Badge */}
          <div className={`inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/20 via-emerald-500/20 to-purple-500/20 backdrop-blur-md border border-amber-400/40 rounded-full px-5 sm:px-8 py-2.5 sm:py-3 shadow-xl transform transition-all duration-800 delay-400 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <span className="text-amber-200 font-semibold text-sm sm:text-base tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
              和谐文化研讨会
            </span>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Main Article Content */}
        <div className="max-w-6xl mx-auto" ref={contentRef}>
          <div className={`transform transition-all duration-1000 ${
            isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* Article Container with Premium Glass Morphism */}
            <div className={`relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-2xl rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-16 border border-white/30 shadow-2xl transform transition-all duration-1200 delay-200 ${
              isContentVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-98'
            }`}>
              
              {/* Enhanced Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-amber-400/60 rounded-tl-3xl"></div>
              <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-emerald-400/60 rounded-tr-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-purple-400/60 rounded-bl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-amber-400/60 rounded-br-3xl"></div>

              {/* Date and Location Badge */}
              <div className={`inline-flex flex-wrap items-center gap-3 bg-gradient-to-r from-amber-500/25 via-emerald-500/25 to-purple-500/25 backdrop-blur-sm border border-amber-400/40 rounded-2xl px-5 sm:px-8 py-3 sm:py-4 mb-10 sm:mb-12 shadow-lg transform transition-all duration-800 delay-400 ${
                isContentVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse"></div>
                  <span className="text-amber-100 font-semibold text-sm sm:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                    2011年12月17日
                  </span>
                </div>
                <div className="w-px h-5 bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-100 font-medium text-sm sm:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                    巴淡市
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-gray-100 leading-relaxed text-base sm:text-lg lg:text-xl" style={{ fontFamily: "'Noto Serif SC', Inter, sans-serif" }}>
                  
                  {/* Paragraph 1 - Introduction */}
                  <div 
                    ref={(el) => setParagraphRef(el, 0)}
                    className={`relative group transform transition-all duration-800 delay-500 ${
                      paragraphsVisible[0] ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    <div className="relative bg-gradient-to-r from-amber-500/15 to-transparent border-l-4 border-amber-400 rounded-r-2xl p-5 sm:p-8 backdrop-blur-sm hover:bg-amber-500/20 transition-all duration-500 shadow-lg hover:shadow-amber-500/20">
                      <div className="absolute -left-3 top-8 w-7 h-7 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl shadow-amber-500/60 group-hover:scale-125 transition-transform duration-300">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <p className="text-justify leading-relaxed">
                        2011年12月17日、印尼和谐文化协会与巴淡经典教育促进会在巴淡市Batam City Condominium会议厅联合举办首届和谐文化研讨会。
                      </p>
                    </div>
                  </div>

                  {/* Paragraph 2 - Speakers */}
                  <div 
                    ref={(el) => setParagraphRef(el, 1)} 
                    className={`relative group transform transition-all duration-800 delay-700 ${
                      paragraphsVisible[1] ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    <div className="relative bg-gradient-to-r from-emerald-500/15 to-transparent border-l-4 border-emerald-400 rounded-r-2xl p-5 sm:p-8 backdrop-blur-sm hover:bg-emerald-500/20 transition-all duration-500 shadow-lg hover:shadow-emerald-500/20">
                      <div className="absolute -left-3 top-8 w-7 h-7 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/60 group-hover:scale-125 transition-transform duration-300">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <p className="text-justify leading-relaxed">
                        本次研讨会的主讲嘉宾为：马来西亚孔学研讨会署理会长陈启生、巴淡经典导读促进会会长梁文丰、印尼和谐文化协会发起人陈朝明、暨南大学华文学院教授王功平、以及新加坡共和理工大学教授甘波。五位主讲嘉宾从不同角度与领域深入阐述了构建当代和谐社会的重要性及其可行路径。
                      </p>
                    </div>
                  </div>

                  {/* Paragraph 3 - Chen Zhaoming's View */}
                  <div 
                    ref={(el) => setParagraphRef(el, 2)} 
                    className={`relative group transform transition-all duration-800 delay-900 ${
                      paragraphsVisible[2] ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    <div className="relative bg-gradient-to-r from-purple-500/15 to-transparent border-l-4 border-purple-400 rounded-r-2xl p-5 sm:p-8 backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-500 shadow-lg hover:shadow-purple-500/20">
                      <div className="absolute -left-3 top-8 w-7 h-7 bg-gradient-to-br from-purple-400 via-violet-500 to-indigo-600 rounded-full flex items-center justify-center shadow-xl shadow-purple-500/60 group-hover:scale-125 transition-transform duration-300">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <p className="text-justify leading-relaxed">
                        陈朝明先生指出、和谐社会的建设离不开全民的共同参与、因此亟需通过多种渠道唤起大众对人类与地球未来的关注与担当。他强调、在当今战乱频仍、生态恶化、道德滑坡、社会问题层出不穷的背景下、人类必须深刻反思：我们究竟是继续滑向同归于尽的险境、还是选择迈向和谐共荣的光明道路？
                      </p>
                    </div>
                  </div>

                  {/* Paragraph 4 - Chen Qisheng's View */}
                  <div 
                    ref={(el) => setParagraphRef(el, 3)} 
                    className={`relative group transform transition-all duration-800 delay-1100 ${
                      paragraphsVisible[3] ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    <div className="relative bg-gradient-to-r from-amber-500/15 to-transparent border-l-4 border-amber-400 rounded-r-2xl p-5 sm:p-8 backdrop-blur-sm hover:bg-amber-500/20 transition-all duration-500 shadow-lg hover:shadow-amber-500/20">
                      <div className="absolute -left-3 top-8 w-7 h-7 bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl shadow-amber-500/60 group-hover:scale-125 transition-transform duration-300">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <p className="text-justify leading-relaxed">
                        陈启生先生提到、中华文化以"和谐"为本质。孔子提出"己所不欲、勿施于人" 、从更高层次而言、是倡导"我不愿强加于身、也不愿强加于人"。他说、唯有让传统文化回归生活、升华为生命信仰、以德贯通天地、才能对构建和谐世界作出积极贡献。
                      </p>
                    </div>
                  </div>

                  {/* Paragraph 5 - Liang Wenfeng's View */}
                  <div 
                    ref={(el) => setParagraphRef(el, 4)} 
                    className={`relative group transform transition-all duration-800 delay-1300 ${
                      paragraphsVisible[4] ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    <div className="relative bg-gradient-to-r from-emerald-500/15 to-transparent border-l-4 border-emerald-400 rounded-r-2xl p-5 sm:p-8 backdrop-blur-sm hover:bg-emerald-500/20 transition-all duration-500 shadow-lg hover:shadow-emerald-500/20">
                      <div className="absolute -left-3 top-8 w-7 h-7 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/60 group-hover:scale-125 transition-transform duration-300">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <p className="text-justify leading-relaxed">
                        梁文丰先生提出、推行和谐文化要从"最小单元"做起、和谐文化是一套以内在和谐为核心的文化体系、是建设和谐社会与和谐世界的根本前提。和谐必须以道德与良心为依归；中华文化的包容性与和谐特质、为和谐政治与和谐经济奠定基础。唯有在和谐文化的滋养下成长的人、才能自觉投身建设和谐社会、推动世界走向和谐共荣。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Decorative Element */}
              <div className={`flex justify-center items-center mt-12 sm:mt-16 gap-3 transform transition-all duration-800 delay-1500 ${
                paragraphsVisible[4] ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}>
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 shadow-lg shadow-amber-500/50"></div>
                <div className="w-20 sm:w-32 h-0.5 bg-gradient-to-r from-amber-400 via-emerald-400 to-purple-400 rounded-full"></div>
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 shadow-lg shadow-emerald-500/50"></div>
                <div className="w-20 sm:w-32 h-0.5 bg-gradient-to-r from-purple-400 via-emerald-400 to-amber-400 rounded-full"></div>
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-400 to-indigo-600 shadow-lg shadow-purple-500/50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBudayaChinese1;