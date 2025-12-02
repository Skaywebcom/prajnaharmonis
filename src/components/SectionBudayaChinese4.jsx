import { useEffect, useState, useRef } from "react";

const SectionBudayaChinese4 = () => {
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

  const participants = [
    { icon: "👨‍🏫", label: "教育基金会领导", count: "30+" },
    { icon: "🏫", label: "学校校长与老师", count: "50+" },
    { icon: "🤝", label: "社团领导", count: "15+" },
    { icon: "⭐", label: "社会贤达", count: "10+" }
  ];

  return (
    <section
      id="pendidikan"
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: "url('/prajnaImages/budaya15.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-teal-950/60 to-black/80"></div>

      {/* Enhanced Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-[35rem] h-[35rem] bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-lime-500 via-green-500 to-emerald-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Educational Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="120" height="120" className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="education-pattern-3" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="60" cy="60" r="2.5" fill="#fbbf24" opacity="0.6"/>
              <circle cx="30" cy="30" r="1.8" fill="#10b981" opacity="0.5"/>
              <circle cx="90" cy="90" r="1.8" fill="#14b8a6" opacity="0.5"/>
              <path d="M 50 60 L 60 50 L 70 60 L 60 70 Z" fill="#fbbf24" opacity="0.2"/>
              <rect x="25" y="25" width="10" height="10" fill="#10b981" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#education-pattern-3)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Decorative Top Element - Education themed */}
          <div className={`flex justify-center mb-8 sm:mb-10 transform transition-all duration-800 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}>
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-2">
                <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-amber-400 rounded-full"></div>
                <div className="w-14 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-emerald-400 rounded-full ml-6"></div>
              </div>
              <div className="relative">
                <div className="w-5 h-5 bg-gradient-to-br from-amber-400 via-emerald-400 to-teal-400 rounded-full shadow-xl shadow-emerald-500/50 animate-pulse"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400/60 rounded-full animate-ping"></div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-20 h-0.5 bg-gradient-to-l from-transparent via-teal-400 to-teal-400 rounded-full"></div>
                <div className="w-14 h-0.5 bg-gradient-to-l from-transparent via-emerald-400 to-emerald-400 rounded-full mr-6"></div>
              </div>
            </div>
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-teal-300 leading-tight px-4 transform transition-all duration-1200 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-8 opacity-0 scale-95"
            }`}
            style={{
              fontFamily: "'Noto Serif SC', 'Great Vibes', serif",
              fontWeight: 600,
              letterSpacing: '0.02em',
              filter: "drop-shadow(0 4px 16px rgba(16, 185, 129, 0.5))",
            }}
          >
            第三届和谐文化研讨会：道德教育如何才有成效
          </h2>

          {/* Event Info Badges */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <div className={`inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/25 via-yellow-500/25 to-orange-500/25 backdrop-blur-md border border-amber-400/40 rounded-full px-5 sm:px-8 py-2.5 sm:py-3 shadow-xl transform transition-all duration-800 delay-300 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}>
              <div className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse"></div>
              <span className="text-amber-100 font-semibold text-sm sm:text-base tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                第三届研讨会
              </span>
            </div>
            <div className={`inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/25 via-teal-500/25 to-cyan-500/25 backdrop-blur-md border border-emerald-400/40 rounded-full px-5 sm:px-8 py-2.5 sm:py-3 shadow-xl transform transition-all duration-800 delay-400 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}>
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-100 font-semibold text-sm sm:text-base tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                2015年1月24-25日
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
              {/* Decorative Corner Accents - Education themed */}
              <div className="absolute top-0 left-0 w-32 h-32">
                <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-amber-400/60 rounded-tl-3xl"></div>
                <div className="absolute top-3 left-3 w-3 h-3 bg-amber-400/50 rotate-45"></div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32">
                <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-emerald-400/60 rounded-tr-3xl"></div>
                <div className="absolute top-3 right-3 w-3 h-3 bg-emerald-400/50 rounded-full"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-32 h-32">
                <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-teal-400/60 rounded-bl-3xl"></div>
                <div className="absolute bottom-3 left-3 w-3 h-3 bg-teal-400/50"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32">
                <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-lime-400/60 rounded-br-3xl"></div>
                <div className="absolute bottom-3 right-3 w-3 h-3 bg-lime-400/50 rotate-45"></div>
              </div>

              {/* Event Location & Attendees */}
              <div className="flex flex-wrap gap-3 mb-10 sm:mb-12">
                <div className={`inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/25 via-orange-500/25 to-yellow-500/25 backdrop-blur-sm border border-amber-400/40 rounded-2xl px-5 sm:px-8 py-3 sm:py-4 shadow-lg transform transition-all duration-800 delay-400 ${
                  isContentVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}>
                  <div className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse"></div>
                  <span className="text-amber-100 font-semibold text-sm sm:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Batam Centre Hotel
                  </span>
                </div>
                <div className={`inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/25 via-teal-500/25 to-cyan-500/25 backdrop-blur-sm border border-emerald-400/40 rounded-2xl px-5 sm:px-8 py-3 sm:py-4 shadow-lg transform transition-all duration-800 delay-500 ${
                  isContentVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}>
                  <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-100 font-semibold text-sm sm:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                    100+ 参与者
                  </span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <div
                  className="space-y-6 sm:space-y-8 lg:space-y-10 text-gray-100 leading-relaxed text-base sm:text-lg lg:text-xl"
                  style={{ fontFamily: "'Noto Serif SC', Inter, sans-serif" }}
                >
                  {/* Paragraph 1 - Event Overview with Participants */}
                  <div
                    ref={(el) => setParagraphRef(el, 0)}
                    className={`relative group transform transition-all duration-800 delay-700 ${
                      paragraphsVisible[0]
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    <div className="relative bg-gradient-to-r from-amber-500/15 to-transparent border-l-4 border-amber-400 rounded-r-2xl p-5 sm:p-8 backdrop-blur-sm hover:bg-amber-500/20 transition-all duration-500 shadow-lg hover:shadow-amber-500/20">
                      <div className="absolute -left-3 top-8 w-7 h-7 bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl shadow-amber-500/60 group-hover:scale-125 transition-transform duration-300">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <p className="text-justify leading-relaxed mb-6">
                        2015年1月24至25日、印尼和谐文化协会举办第三届和谐文化研讨会。100多位来自印尼各地的教育基金会领导、学校校长与老师、社团领导、社会贤达、齐聚印尼廖内群岛省巴淡市Batam Centre Hotel、共同研讨本届主题："道德教育如何才有成效"。
                      </p>
                      
                      {/* Participants Grid */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
                        {participants.map((participant, idx) => (
                          <div 
                            key={idx}
                            className="flex flex-col items-center gap-2 bg-gradient-to-br from-amber-400/10 to-orange-400/10 border border-amber-400/30 rounded-xl px-4 py-3 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
                          >
                            <span className="text-2xl">{participant.icon}</span>
                            <span className="text-xs font-medium text-amber-100 text-center leading-tight">{participant.label}</span>
                            <span className="text-sm font-bold text-amber-300">{participant.count}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Paragraph 2 - Conference Purpose & Government Support */}
                  <div
                    ref={(el) => setParagraphRef(el, 1)}
                    className={`relative group transform transition-all duration-800 delay-900 ${
                      paragraphsVisible[1]
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    <div className="relative bg-gradient-to-r from-emerald-500/15 to-transparent border-l-4 border-emerald-400 rounded-r-2xl p-5 sm:p-8 backdrop-blur-sm hover:bg-emerald-500/20 transition-all duration-500 shadow-lg hover:shadow-emerald-500/20">
                      <div className="absolute -left-3 top-8 w-7 h-7 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/60 group-hover:scale-125 transition-transform duration-300">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      
                      {/* Official Badge */}
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 border border-emerald-400/50 rounded-full px-4 py-1.5 mb-4">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span className="text-sm font-semibold text-emerald-100">Qurniadi - 教育局局长代表</span>
                      </div>
                      
                      <p className="text-justify leading-relaxed">
                        研讨会目的为召集教育、文化及各界人士、共同关注道德教育、和谐文化、为大家建立一个交流平台、持续研讨以促进道德重振、和谐社会。巴淡市教育局局长代表、Qurniadi在出席开幕晚会时表示热烈祝贺。他鼓励组委会明年扩展研讨会规模、邀请更多来自全印尼各省人士、因为道德教育、和谐文化需要大家共同投入。
                      </p>
                    </div>
                  </div>

                  {/* Paragraph 3 - Chen Zhaoming's Philosophy */}
                  <div
                    ref={(el) => setParagraphRef(el, 2)}
                    className={`relative group transform transition-all duration-800 delay-1100 ${
                      paragraphsVisible[2]
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    <div className="relative bg-gradient-to-r from-teal-500/15 to-transparent border-l-4 border-teal-400 rounded-r-2xl p-5 sm:p-8 backdrop-blur-sm hover:bg-teal-500/20 transition-all duration-500 shadow-lg hover:shadow-teal-500/20">
                      <div className="absolute -left-3 top-8 w-7 h-7 bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl shadow-teal-500/60 group-hover:scale-125 transition-transform duration-300">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      
                      {/* Speaker Badge */}
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 border border-teal-400/50 rounded-full px-4 py-1.5 mb-4">
                        <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                        <span className="text-sm font-semibold text-teal-100">陈朝明 - 协会发起人</span>
                      </div>
                      
                      <p className="text-justify leading-relaxed">
                        和谐文化协会发起人陈朝明先生认为、要让道德教育真正发挥长久而深刻的成效、关键在于教师本身。"教师是灵魂的工程师。"陈先生指出、灵魂代表精神、是不灭的生命、具足良心与智慧的本性、也是难以言喻的"奥妙心灵"。
                      </p>
                    </div>
                  </div>

                  {/* Paragraph 4 - Teacher's Role */}
                  <div
                    ref={(el) => setParagraphRef(el, 3)}
                    className={`relative group transform transition-all duration-800 delay-1300 ${
                      paragraphsVisible[3]
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    <div className="relative bg-gradient-to-r from-lime-500/15 to-transparent border-l-4 border-lime-400 rounded-r-2xl p-5 sm:p-8 backdrop-blur-sm hover:bg-lime-500/20 transition-all duration-500 shadow-lg hover:shadow-lime-500/20">
                      <div className="absolute -left-3 top-8 w-7 h-7 bg-gradient-to-br from-lime-400 via-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl shadow-lime-500/60 group-hover:scale-125 transition-transform duration-300">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      
                      <p className="text-justify leading-relaxed">
                        他强调、教师之所以能够长期坚持教育事业、其力量源自良心的驱动；正是凭借自身心灵的光明、通过日常教学、言行举止、不断启发学生的正面思想与内在光明。唯有教师们持续不懈地以身作则、才能在未来的数十年间培育出品德与才能兼具的优秀人才、造福社会、国家与世界。
                      </p>
                    </div>
                  </div>

                  {/* Paragraph 5 - Conclusion Quote Box */}
                  <div
                    ref={(el) => setParagraphRef(el, 4)}
                    className={`relative group transform transition-all duration-800 delay-1500 ${
                      paragraphsVisible[4]
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    <div className="relative bg-gradient-to-br from-amber-500/20 via-emerald-500/20 to-teal-500/20 border-2 border-amber-400/40 rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-2xl hover:shadow-amber-500/30 transition-all duration-500">
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-amber-500 via-emerald-500 to-teal-500 rounded-full shadow-lg">
                        <span className="text-white font-bold text-sm">结语</span>
                      </div>
                      
                      {/* Quote marks */}
                      <div className="text-6xl text-amber-400/30 font-serif leading-none mb-4">"</div>
                      
                      <p className="text-center text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed text-amber-50">
                        道德教育是长期又艰难的工作。需要大家共同关心以及社会、国家的支持才能达到真正的成效。
                      </p>
                      
                      <div className="text-6xl text-teal-400/30 font-serif leading-none text-right mt-4">"</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Decorative Element */}
              <div className={`flex justify-center items-center mt-12 sm:mt-16 gap-3 transform transition-all duration-800 delay-1700 ${
                paragraphsVisible[4] ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}>
                <div className="w-3 h-3 bg-gradient-to-br from-amber-400 to-orange-600 rotate-45 shadow-lg shadow-amber-500/50"></div>
                <div className="w-32 sm:w-48 h-0.5 bg-gradient-to-r from-amber-400 via-emerald-400 to-teal-400 rounded-full"></div>
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 shadow-lg shadow-emerald-500/50"></div>
                <div className="w-32 sm:w-48 h-0.5 bg-gradient-to-r from-teal-400 via-emerald-400 to-amber-400 rounded-full"></div>
                <div className="w-3 h-3 bg-gradient-to-br from-teal-400 to-cyan-600 shadow-lg shadow-teal-500/50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBudayaChinese4;