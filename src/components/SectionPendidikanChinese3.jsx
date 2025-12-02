import { useEffect, useState, useRef } from "react";

const SectionPendidikanChinese3 = () => {
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
      { threshold: 0.1, rootMargin: "-50px" }
    );

    const contentObserver = new IntersectionObserver(
      ([entry]) => {
        setIsContentVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "-50px" }
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
          { threshold: 0.2, rootMargin: "-30px" }
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

  const paragraphColors = [
    "from-yellow-500/20 to-amber-500/10 border-yellow-400/40",
    "from-emerald-500/20 to-green-500/10 border-emerald-400/40"
  ];

  return (
    <section
      id="pendidikan"
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden"
    >
      {/* Enhanced Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 transition-opacity duration-700"
        style={{ 
          backgroundImage: "url('/prajnaImages/pendidikan.png')",
          transform: "scale(1.1)"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/70"></div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-10 left-10 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "2s" }}
        ></div>
      </div>

      {/* Refined Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100" height="100" className="absolute inset-0 w-full h-full">
          <defs>
            <pattern
              id="education-pattern-3"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="2" fill="#fbbf24" opacity="0.5" />
              <circle cx="25" cy="25" r="1.5" fill="#22c55e" opacity="0.4" />
              <circle cx="75" cy="75" r="1.5" fill="#22c55e" opacity="0.4" />
              <path d="M50 30 L60 40 L50 50 L40 40 Z" fill="#f59e0b" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#education-pattern-3)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Enhanced Header */}
        <div
          className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Decorative top accent */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-amber-300"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-amber-300 via-yellow-400 to-transparent"></div>
            </div>
          </div>

          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 px-4 leading-tight transform transition-all duration-1200 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-8 opacity-0 scale-95"
            }`}
            style={{
              fontFamily: "'Noto Serif SC', 'Great Vibes', serif",
              background: "linear-gradient(135deg, #fbbf24 0%, #fcd34d 25%, #fde047 50%, #22c55e 75%, #16a34a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 4px 12px rgba(251, 191, 36, 0.3))",
              lineHeight: "1.3"
            }}
          >
            汇聚力量，育才兴文：
            <br className="hidden sm:block" />
            <span className="block sm:inline">暨大巴厘岛远程教育开学典礼隆重举行</span>
          </h2>

          {/* Enhanced divider */}
          <div className="flex justify-center items-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            <div
              className={`w-12 sm:w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-amber-300 rounded-full transform transition-all duration-800 delay-400 ${
                isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              }`}
            ></div>
            <div
              className={`w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full transform transition-all duration-600 delay-600 ${
                isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            ></div>
            <div
              className={`w-12 sm:w-16 md:w-24 h-1 bg-gradient-to-r from-amber-300 via-green-400 to-transparent rounded-full transform transition-all duration-800 delay-400 ${
                isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              }`}
            ></div>
          </div>
        </div>

        {/* Enhanced Article content */}
        <div className="max-w-6xl mx-auto" ref={contentRef}>
          <div
            className={`transform transition-all duration-1000 ${
              isContentVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div
              className={`bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 border border-white/20 shadow-2xl transform transition-all duration-1200 delay-200 hover:shadow-yellow-500/10 hover:border-yellow-400/30 ${
                isContentVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-98"
              }`}
            >
              {/* Content card header decoration */}
              <div className="flex justify-center mb-8 sm:mb-10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-yellow-400 to-green-400"></div>
                  <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                  <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-green-400 to-yellow-400"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <div
                  className="space-y-5 sm:space-y-6 md:space-y-8 text-gray-100 leading-relaxed text-base sm:text-lg text-justify"
                  style={{ fontFamily: "'Noto Serif SC', 'Inter', sans-serif" }}
                >
                  {/* Paragraph 1 */}
                  <div
                    ref={(el) => setParagraphRef(el, 0)}
                    className={`group relative transform transition-all duration-800 delay-500 ${
                      paragraphsVisible[0]
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${paragraphColors[0]} rounded-xl sm:rounded-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
                    <p className="relative p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-l-4 border-yellow-400/50 backdrop-blur-sm">
                      2015年9月5日、印尼和谐文化协会于巴厘岛 HARRIS Hotel & Residences Sunset Road 隆重举办暨南大学华文学院2015级华文教育专业本科远程教育开学典礼。典礼嘉宾云集、莅临的贵宾包括：巴厘岛印度教协会主席Ida Dang Acarya Yogananda、中国驻登巴萨总领事胡银全、巴厘省警察准将Dewa Bagus Made Suharya、巴厘省、东努省及西努省国家情报局局长Eddy Kristanto、登巴萨教育局局长代表Anak Agung Gede Wiratama、登巴萨文化局局长I Made Mudra、暨南大学华文学院院长邵宜、Natour 大酒店执行董事Sugeng Pramono、以及多位社会贤达与社团代表。
                    </p>
                  </div>

                  {/* Paragraph 2 */}
                  <div
                    ref={(el) => setParagraphRef(el, 1)}
                    className={`group relative transform transition-all duration-800 delay-700 ${
                      paragraphsVisible[1]
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${paragraphColors[1]} rounded-xl sm:rounded-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
                    <p className="relative p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-l-4 border-emerald-400/50 backdrop-blur-sm">
                      印尼和谐文化协会会长黄愿字在致辞中向各位贵宾的莅临表示衷心感谢、并特别感谢中国华文教育基金会"雅居乐"助学金及暨南大学华文学院对2015级巴厘岛远程本科教育项目的鼎力支持。他指出、在巴厘岛登巴萨市开办华文远程教育、将有助于全面提升当地华文教师的专业能力与导游的华语水平、更好向世界各地游客介绍印尼与巴厘岛的历史与文化、为促进文明互鉴与民族友好发挥积极作用。
                    </p>
                  </div>
                </div>
              </div>

              {/* Content card footer decoration */}
              <div className="flex justify-center mt-8 sm:mt-10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-green-400 to-yellow-400"></div>
                  <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                  <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-yellow-400 to-green-400"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPendidikanChinese3;