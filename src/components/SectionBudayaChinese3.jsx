import { useEffect, useState, useRef } from "react";

const SectionBudayaChinese3 = () => {
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
      { threshold: [0.1, 0.2, 0.3], rootMargin: "-10% 0px -10% 0px" }
    );

    const contentObserver = new IntersectionObserver(
      ([entry]) => {
        setIsContentVisible(entry.isIntersecting);
      },
      { threshold: [0.2, 0.3, 0.4], rootMargin: "-20% 0px -20% 0px" }
    );

    const paragraphObservers = [];
    paragraphRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setParagraphsVisible((prev) => {
              const newState = [...prev];
              newState[index] = entry.isIntersecting;
              return newState;
            });
          },
          { threshold: [0.3, 0.4, 0.5], rootMargin: "-15% 0px -15% 0px" }
        );
        observer.observe(ref);
        paragraphObservers.push(observer);
      }
    });

    if (sectionRef.current) headerObserver.observe(sectionRef.current);
    if (contentRef.current) contentObserver.observe(contentRef.current);

    return () => {
      headerObserver.disconnect();
      contentObserver.disconnect();
      paragraphObservers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const setParagraphRef = (el, index) => {
    paragraphRefs.current[index] = el;
  };

  const artCategories = [
    { name: "书法", icon: "📜", color: "from-amber-400 to-orange-600" },
    { name: "国画", icon: "🖌️", color: "from-rose-400 to-pink-600" },
    { name: "素描", icon: "✏️", color: "from-slate-400 to-gray-600" },
    { name: "油画", icon: "🎨", color: "from-blue-400 to-cyan-600" },
    { name: "巴泽画", icon: "🖼️", color: "from-emerald-400 to-teal-600" }
  ];

  return (
    <section
      id="pendidikan"
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: "url('/prajnaImages/budaya14.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-rose-950/60 to-black/80"></div>

      {/* Enhanced Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-[34rem] h-[34rem] bg-gradient-to-br from-amber-500 via-orange-500 to-red-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Artistic Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="120" height="120" className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="art-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="60" cy="60" r="2.5" fill="#f59e0b" opacity="0.6"/>
              <circle cx="30" cy="30" r="1.8" fill="#ec4899" opacity="0.5"/>
              <circle cx="90" cy="90" r="1.8" fill="#06b6d4" opacity="0.5"/>
              <rect x="55" y="55" width="10" height="10" fill="#f59e0b" opacity="0.2" transform="rotate(45 60 60)"/>
              <path d="M 40 60 Q 50 50 60 60 T 80 60" fill="none" stroke="#ec4899" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#art-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Decorative Top Element - Art themed */}
          <div className={`flex justify-center mb-8 sm:mb-10 transform transition-all duration-800 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-amber-400 rounded-sm rotate-45 animate-pulse"></div>
                <div className="w-3 h-3 bg-rose-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                <div className="w-3 h-3 bg-cyan-400 rotate-45 animate-pulse" style={{animationDelay: '0.6s'}}></div>
              </div>
              <div className="w-24 sm:w-32 h-0.5 bg-gradient-to-r from-amber-400 via-rose-400 to-cyan-400 rounded-full"></div>
              <div className="w-4 h-4 bg-gradient-to-br from-amber-400 via-rose-400 to-cyan-400 rotate-45 shadow-xl shadow-rose-500/50"></div>
              <div className="w-24 sm:w-32 h-0.5 bg-gradient-to-l from-cyan-400 via-rose-400 to-amber-400 rounded-full"></div>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-cyan-400 rotate-45 animate-pulse"></div>
                <div className="w-3 h-3 bg-rose-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                <div className="w-3 h-3 bg-amber-400 rounded-sm rotate-45 animate-pulse" style={{animationDelay: '0.6s'}}></div>
              </div>
            </div>
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-cyan-300 leading-tight px-4 transform transition-all duration-1200 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-8 opacity-0 scale-95"
            }`}
            style={{
              fontFamily: "'Noto Serif SC', 'Great Vibes', serif",
              fontWeight: 600,
              letterSpacing: '0.02em',
              filter: "drop-shadow(0 4px 16px rgba(251, 113, 133, 0.5))",
            }}
          >
            印尼和谐文化协会举行中印尼国际青少年书画艺术交流展
          </h2>

          {/* Event Info Badges */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <div className={`inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/25 via-rose-500/25 to-orange-500/25 backdrop-blur-md border border-amber-400/40 rounded-full px-5 sm:px-8 py-2.5 sm:py-3 shadow-xl transform transition-all duration-800 delay-300 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}>
              <div className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse"></div>
              <span className="text-amber-100 font-semibold text-sm sm:text-base tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                国际青少年书画艺术交流展
              </span>
            </div>
            <div className={`inline-flex items-center gap-3 bg-gradient-to-r from-rose-500/25 via-pink-500/25 to-fuchsia-500/25 backdrop-blur-md border border-rose-400/40 rounded-full px-5 sm:px-8 py-2.5 sm:py-3 shadow-xl transform transition-all duration-800 delay-400 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}>
              <div className="w-2.5 h-2.5 bg-rose-400 rounded-full animate-pulse"></div>
              <span className="text-rose-100 font-semibold text-sm sm:text-base tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                2013年2月3日
              </span>
            </div>
          </div>
        </div>

        {/* Article content */}
        <div className="max-w-6xl mx-auto" ref={contentRef}>
          <div
            className={`transform transition-all duration-1000 ${
              isContentVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div
              className={`relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-2xl rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-16 border border-white/30 shadow-2xl transform transition-all duration-1200 delay-200 ${
                isContentVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-98"
              }`}
            >
              {/* Decorative Corner Accents - Art themed */}
              <div className="absolute top-0 left-0 w-32 h-32">
                <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-amber-400/60 rounded-tl-3xl"></div>
                <div className="absolute top-3 left-3 w-3 h-3 bg-amber-400/50 rounded-sm rotate-45"></div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32">
                <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-rose-400/60 rounded-tr-3xl"></div>
                <div className="absolute top-3 right-3 w-3 h-3 bg-rose-400/50 rounded-full"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-32 h-32">
                <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-cyan-400/60 rounded-bl-3xl"></div>
                <div className="absolute bottom-3 left-3 w-3 h-3 bg-cyan-400/50 rotate-45"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32">
                <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-pink-400/60 rounded-br-3xl"></div>
                <div className="absolute bottom-3 right-3 w-3 h-3 bg-pink-400/50 rounded-sm rotate-45"></div>
              </div>

              {/* Event Location & Stats Badge */}
              <div className="flex flex-wrap gap-3 mb-10 sm:mb-12">
                <div className={`inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/25 via-rose-500/25 to-pink-500/25 backdrop-blur-sm border border-amber-400/40 rounded-2xl px-5 sm:px-8 py-3 sm:py-4 shadow-lg transform transition-all duration-800 delay-400 ${
                  isContentVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}>
                  <div className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse"></div>
                  <span className="text-amber-100 font-semibold text-sm sm:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                    巴淡市慈容学校
                  </span>
                </div>
                <div className={`inline-flex items-center gap-3 bg-gradient-to-r from-rose-500/25 via-pink-500/25 to-fuchsia-500/25 backdrop-blur-sm border border-rose-400/40 rounded-2xl px-5 sm:px-8 py-3 sm:py-4 shadow-lg transform transition-all duration-800 delay-500 ${
                  isContentVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}>
                  <div className="w-2.5 h-2.5 bg-rose-400 rounded-full animate-pulse"></div>
                  <span className="text-rose-100 font-semibold text-sm sm:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                    200+ 作品
                  </span>
                </div>
                <div className={`inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/25 via-blue-500/25 to-indigo-500/25 backdrop-blur-sm border border-cyan-400/40 rounded-2xl px-5 sm:px-8 py-3 sm:py-4 shadow-lg transform transition-all duration-800 delay-600 ${
                  isContentVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}>
                  <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-100 font-semibold text-sm sm:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                    159 位青少年
                  </span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <div
                  className="space-y-6 sm:space-y-8 lg:space-y-10 text-gray-100 leading-relaxed text-base sm:text-lg lg:text-xl"
                  style={{ fontFamily: "'Noto Serif SC', Inter, sans-serif" }}
                >
                  {/* Paragraph 1 - Event Overview with Art Categories */}
                  <div
                    ref={(el) => setParagraphRef(el, 0)}
                    className={`relative group transform transition-all duration-800 delay-700 ${
                      paragraphsVisible[0]
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    <div className="relative bg-gradient-to-r from-amber-500/15 to-transparent border-l-4 border-amber-400 rounded-r-2xl p-5 sm:p-8 backdrop-blur-sm hover:bg-amber-500/20 transition-all duration-500 shadow-lg hover:shadow-amber-500/20">
                      <div className="absolute -left-3 top-8 w-7 h-7 bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-xl shadow-amber-500/60 group-hover:scale-125 transition-transform duration-300">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <p className="text-justify leading-relaxed mb-6">
                        中印尼国际青少年书画艺术交流展于2013年2月3日在巴淡市慈容学校隆重举行。活动由中国艺术人才研究协会、北京艺术人才研究中心、印尼和谐文化协会与巴淡慈容学校联合主办。除精彩纷呈的文艺节目外、展览还呈现了两国青少年创作的 200 余幅书法、国画、素描、油画及巴泽画作品、内容丰富、形式多样、充分展现了青年艺术家的创造力与想象力。
                      </p>
                      
                      {/* Art Categories Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-6">
                        {artCategories.map((art, idx) => (
                          <div 
                            key={idx}
                            className={`flex items-center gap-2 bg-gradient-to-r ${art.color} bg-opacity-20 border border-white/30 rounded-xl px-3 py-2.5 backdrop-blur-sm hover:scale-105 transition-transform duration-300 shadow-md`}
                          >
                            <span className="text-xl">{art.icon}</span>
                            <span className="text-sm font-medium text-white">{art.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Paragraph 2 - Cultural Bureau Director */}
                  <div
                    ref={(el) => setParagraphRef(el, 1)}
                    className={`relative group transform transition-all duration-800 delay-900 ${
                      paragraphsVisible[1]
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    <div className="relative bg-gradient-to-r from-rose-500/15 to-transparent border-l-4 border-rose-400 rounded-r-2xl p-5 sm:p-8 backdrop-blur-sm hover:bg-rose-500/20 transition-all duration-500 shadow-lg hover:shadow-rose-500/20">
                      <div className="absolute -left-3 top-8 w-7 h-7 bg-gradient-to-br from-rose-400 via-pink-500 to-fuchsia-600 rounded-full flex items-center justify-center shadow-xl shadow-rose-500/60 group-hover:scale-125 transition-transform duration-300">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      
                      {/* Speaker Badge */}
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-400/20 to-pink-400/20 border border-rose-400/50 rounded-full px-4 py-1.5 mb-4">
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                        <span className="text-sm font-semibold text-rose-100">Arifin Natsir - 文化局局长</span>
                      </div>
                      
                      <p className="text-justify leading-relaxed">
                        廖内群岛省文化局局长Arifin Natsir受邀出席、他高度评价本次活动展现的民族友谊与华族多姿多彩的传统文化。他表示、文化局今后将继续大力支持本地文化活动、推动多元文化在地区蓬勃发展。
                      </p>
                    </div>
                  </div>

                  {/* Paragraph 3 - Wang Lisheng */}
                  <div
                    ref={(el) => setParagraphRef(el, 2)}
                    className={`relative group transform transition-all duration-800 delay-1100 ${
                      paragraphsVisible[2]
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    <div className="relative bg-gradient-to-r from-cyan-500/15 to-transparent border-l-4 border-cyan-400 rounded-r-2xl p-5 sm:p-8 backdrop-blur-sm hover:bg-cyan-500/20 transition-all duration-500 shadow-lg hover:shadow-cyan-500/20">
                      <div className="absolute -left-3 top-8 w-7 h-7 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-xl shadow-cyan-500/60 group-hover:scale-125 transition-transform duration-300">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      
                      {/* Speaker Badge */}
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 border border-cyan-400/50 rounded-full px-4 py-1.5 mb-4">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                        <span className="text-sm font-semibold text-cyan-100">王立生 - 中方组委会主席</span>
                      </div>
                      
                      <p className="text-justify leading-relaxed">
                        随后、中方组委会主席王立生在致辞中指出、本届交流展能在印尼成功举行、离不开中印尼双方组委会的通力合作、这不仅体现两国文化交往的良好基础、也契合世界文化交流与互鉴的发展趋势。他期望印尼青少年能借此平台进一步接触和了解中国文化、感受中华文明的独特魅力。
                      </p>
                    </div>
                  </div>

                  {/* Paragraph 4 - Huang Yuanzi */}
                  <div
                    ref={(el) => setParagraphRef(el, 3)}
                    className={`relative group transform transition-all duration-800 delay-1300 ${
                      paragraphsVisible[3]
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    <div className="relative bg-gradient-to-r from-purple-500/15 to-transparent border-l-4 border-purple-400 rounded-r-2xl p-5 sm:p-8 backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-500 shadow-lg hover:shadow-purple-500/20">
                      <div className="absolute -left-3 top-8 w-7 h-7 bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-600 rounded-full flex items-center justify-center shadow-xl shadow-purple-500/60 group-hover:scale-125 transition-transform duration-300">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      
                      {/* Speaker Badge */}
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-400/20 to-fuchsia-400/20 border border-purple-400/50 rounded-full px-4 py-1.5 mb-4">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-sm font-semibold text-purple-100">黄愿字 - 印尼方组委会主席</span>
                      </div>
                      
                      <p className="text-justify leading-relaxed">
                        印尼方组委会主席黄愿字对各界嘉宾参加交流展表示热烈欢迎。他指出、本届国际青少年书画艺术交流展共有来自中国与印尼的159名青少年参与、两国皆拥有丰富多彩的艺术文化、希望通过此次交流、让青少年彼此认识、相互欣赏进一步加深友谊、促进文化互鉴与民心相通。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Decorative Element - Art themed */}
              <div className={`flex justify-center items-center mt-12 sm:mt-16 gap-3 transform transition-all duration-800 delay-1500 ${
                paragraphsVisible[3] ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}>
                <div className="w-3 h-3 bg-gradient-to-br from-amber-400 to-orange-600 rounded-sm rotate-45 shadow-lg shadow-amber-500/50"></div>
                <div className="w-28 sm:w-44 h-0.5 bg-gradient-to-r from-amber-400 via-rose-400 to-cyan-400 rounded-full"></div>
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-rose-400 to-pink-600 shadow-lg shadow-rose-500/50"></div>
                <div className="w-28 sm:w-44 h-0.5 bg-gradient-to-r from-cyan-400 via-rose-400 to-amber-400 rounded-full"></div>
                <div className="w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-600 rotate-45 shadow-lg shadow-cyan-500/50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBudayaChinese3;