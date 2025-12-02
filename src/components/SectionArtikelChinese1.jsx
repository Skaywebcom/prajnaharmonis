import { useEffect, useState, useRef } from "react";

const SectionArtikelChinese1 = () => {
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
    "from-amber-500/20 to-red-500/10 border-amber-600/40",
    "from-red-500/20 to-orange-500/10 border-red-600/40",
    "from-orange-500/20 to-amber-500/10 border-orange-600/40"
  ];

  return (
    <section
      id="artikel"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden py-12 sm:py-16 lg:py-24"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/prajnaImages/artikel11.jpg')",
        }}
      ></div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-white/90 to-amber-50/95"></div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 md:w-96 md:h-96 bg-amber-400 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "4s" }}></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 md:w-80 md:h-80 bg-red-400 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-72 md:h-72 bg-orange-300 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "6s", animationDelay: "2s" }}></div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100" height="100" className="absolute inset-0 w-full h-full">
          <defs>
            <pattern
              id="article-pattern-1"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="2" fill="#d97706" opacity="0.5" />
              <circle cx="25" cy="25" r="1.5" fill="#dc2626" opacity="0.4" />
              <circle cx="75" cy="75" r="1.5" fill="#dc2626" opacity="0.4" />
              <path d="M50 30 L60 40 L50 50 L40 40 Z" fill="#f59e0b" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#article-pattern-1)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div
          className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Decorative top accent */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-amber-600 to-red-600"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-amber-600 rounded-full animate-pulse"></div>
              <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-red-600 via-amber-600 to-transparent"></div>
            </div>
          </div>

          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 px-4 leading-tight font-bold transform transition-all duration-1200 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-8 opacity-0 scale-95"
            }`}
            style={{
              fontFamily: "'Noto Serif SC', 'Playfair Display', serif",
              background: "linear-gradient(135deg, #b45309 0%, #dc2626 25%, #ea580c 50%, #dc2626 75%, #b45309 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 4px 12px rgba(217, 119, 6, 0.2))",
              lineHeight: "1.2"
            }}
          >
            和谐世界文明论坛
          </h1>

          {/* Enhanced divider */}
          <div className="flex justify-center items-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            <div
              className={`w-12 sm:w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-amber-600 to-red-600 rounded-full transform transition-all duration-800 delay-400 ${
                isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              }`}
            ></div>
            <div
              className={`w-2 h-2 sm:w-3 sm:h-3 bg-red-600 rounded-full transform transition-all duration-600 delay-600 ${
                isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            ></div>
            <div
              className={`w-12 sm:w-16 md:w-24 h-1 bg-gradient-to-r from-red-600 via-amber-600 to-transparent rounded-full transform transition-all duration-800 delay-400 ${
                isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              }`}
            ></div>
          </div>
        </div>

        {/* Enhanced Article content */}
        <div className="max-w-5xl mx-auto" ref={contentRef}>
          <div
            className={`transform transition-all duration-1000 ${
              isContentVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div
              className={`bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-amber-100 overflow-hidden transform transition-all duration-1200 delay-200 hover:shadow-amber-200/50 ${
                isContentVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-98"
              }`}
            >
              {/* Content card header decoration */}
              <div className="h-1 sm:h-1.5 bg-gradient-to-r from-amber-600 via-red-600 to-amber-600"></div>
              
              <div className="p-6 sm:p-8 md:p-10 lg:p-14">
                <div className="flex justify-center mb-8 sm:mb-10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-amber-600 to-red-600"></div>
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-red-600 to-amber-600"></div>
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  </div>
                </div>

                <div
                  className="space-y-6 sm:space-y-8 leading-relaxed text-base sm:text-lg lg:text-xl text-gray-700"
                  style={{ fontFamily: "'Noto Serif SC', 'Inter', sans-serif" }}
                >
                  {/* Paragraph 1 with drop cap */}
                  <div
                    ref={(el) => setParagraphRef(el, 0)}
                    className={`group relative transform transition-all duration-800 delay-500 ${
                      paragraphsVisible[0]
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${paragraphColors[0]} rounded-xl sm:rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                    <p className="relative p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-l-4 border-amber-600/50 text-justify">
                      <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-amber-700 float-left mr-3 sm:mr-4 leading-none" style={{ fontFamily: "'Noto Serif SC', serif" }}>值</span>
                      此世界动荡变革的关键时期，人类多元文明唯有加强对话、深化交流，方能化解冲突、守护共同命运。倘若冲突长期延续甚至升级，生态危机得不到缓解，毁灭性战争也接踵而至，那将成为全人类难以承受的共同悲剧。
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
                    <div className={`absolute inset-0 bg-gradient-to-r ${paragraphColors[1]} rounded-xl sm:rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                    <p className="relative p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-l-4 border-red-600/50 text-justify">
                      人类社会的生存与发展长期受丛林法则与弱肉强食的思维所支配。在数百年的现代化进程中，工业革命与资本主义的双重作用推动了物质文明的高度繁荣，但与此同时，人类却忽视了数千年来积累的精神文明成果，由此导致当今世界再度陷入极端利益争夺、不惜互相残害的困境。
                    </p>
                  </div>

                  {/* Paragraph 3 */}
                  <div
                    ref={(el) => setParagraphRef(el, 2)}
                    className={`group relative transform transition-all duration-800 delay-900 ${
                      paragraphsVisible[2]
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${paragraphColors[2]} rounded-xl sm:rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                    <p className="relative p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-l-4 border-orange-600/50 text-justify">
                      我们将于每年六月"文明对话国际日"与"印尼建国五项原则诞生纪念日"之际，举办以"文明和谐"为主轴、以"天下大同"为愿景的文明对话交流论坛，在印尼、东南亚乃至全世界掀起文明互鉴的时代热潮，汇聚推动人类和谐共生的磅礴伟力。
                    </p>
                  </div>
                </div>

                {/* Content card footer decoration */}
                <div className="flex justify-center mt-8 sm:mt-10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-amber-600 to-red-600"></div>
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-red-600 to-amber-600"></div>
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Decorative footer */}
              <div className="h-1 sm:h-1.5 bg-gradient-to-r from-amber-600 via-red-600 to-amber-600"></div>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div
          className={`flex justify-center mt-10 sm:mt-12 transform transition-all duration-1000 delay-800 ${
            isContentVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex space-x-2 sm:space-x-3">
            <div className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" style={{ animationDuration: "2s" }}></div>
            <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" style={{ animationDuration: "2s", animationDelay: "0.3s" }}></div>
            <div className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" style={{ animationDuration: "2s", animationDelay: "0.6s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionArtikelChinese1;