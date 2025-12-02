import { useEffect, useState, useRef } from "react";

const SectionBudayaChinese2 = () => {
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

  const speakers = [
    { name: "刘宇庭", color: "from-blue-400 to-cyan-600", border: "border-blue-400", bg: "from-blue-500/15" },
    { name: "易斐", color: "from-purple-400 to-pink-600", border: "border-purple-400", bg: "from-purple-500/15" },
    { name: "甘波", color: "from-emerald-400 to-teal-600", border: "border-emerald-400", bg: "from-emerald-500/15" },
    { name: "陈朝明", color: "from-amber-400 to-orange-600", border: "border-amber-400", bg: "from-amber-500/15" }
  ];

  return (
    <section
      id="pendidikan"
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden"
    >
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: "url('/prajnaImages/budaya13.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-950/60 to-black/80"></div>

      {/* Enhanced Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-[32rem] h-[32rem] bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-br from-amber-500 via-orange-500 to-red-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Refined Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="120" height="120" className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="harmony-pattern-2" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="60" cy="60" r="2.5" fill="#3b82f6" opacity="0.6"/>
              <circle cx="30" cy="30" r="1.8" fill="#a855f7" opacity="0.5"/>
              <circle cx="90" cy="90" r="1.8" fill="#f59e0b" opacity="0.5"/>
              <path d="M 60 50 L 65 55 L 60 60 L 55 55 Z" fill="#3b82f6" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#harmony-pattern-2)"/>
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
              <div className="flex flex-col gap-1">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-blue-400 rounded-full"></div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-purple-400 rounded-full ml-4"></div>
              </div>
              <div className="w-4 h-4 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full shadow-xl shadow-blue-500/50 animate-pulse"></div>
              <div className="flex flex-col gap-1">
                <div className="w-16 h-0.5 bg-gradient-to-l from-transparent via-pink-400 to-pink-400 rounded-full"></div>
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent via-purple-400 to-purple-400 rounded-full mr-4"></div>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 leading-tight px-4 transform transition-all duration-1200 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            }`}
            style={{
              fontFamily: "'Noto Serif SC', 'Great Vibes', serif",
              fontWeight: 600,
              letterSpacing: '0.02em',
              filter: "drop-shadow(0 4px 16px rgba(59, 130, 246, 0.5))",
            }}
          >
            第二届和谐文化研讨会："探讨和谐人生，构建和平世界"
          </h2>

          {/* Event Info Badges */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <div className={`inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/25 via-cyan-500/25 to-teal-500/25 backdrop-blur-md border border-blue-400/40 rounded-full px-5 sm:px-8 py-2.5 sm:py-3 shadow-xl transform transition-all duration-800 delay-300 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}>
              <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-100 font-semibold text-sm sm:text-base tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                第二届研讨会
              </span>
            </div>
            <div className={`inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/25 via-pink-500/25 to-rose-500/25 backdrop-blur-md border border-purple-400/40 rounded-full px-5 sm:px-8 py-2.5 sm:py-3 shadow-xl transform transition-all duration-800 delay-400 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}>
              <div className="w-2.5 h-2.5 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-purple-100 font-semibold text-sm sm:text-base tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                2013年2月2日
              </span>
            </div>
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
              
              {/* Decorative Corner Accents */}
              <div className="absolute top-0 left-0 w-32 h-32">
                <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-blue-400/60 rounded-tl-3xl"></div>
                <div className="absolute top-2 left-2 w-4 h-4 bg-blue-400/40 rounded-full"></div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32">
                <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-purple-400/60 rounded-tr-3xl"></div>
                <div className="absolute top-2 right-2 w-4 h-4 bg-purple-400/40 rounded-full"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-32 h-32">
                <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-pink-400/60 rounded-bl-3xl"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 bg-pink-400/40 rounded-full"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32">
                <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-amber-400/60 rounded-br-3xl"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-amber-400/40 rounded-full"></div>
              </div>

              {/* Event Location Badge */}
              <div className={`inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/25 via-purple-500/25 to-pink-500/25 backdrop-blur-sm border border-blue-400/40 rounded-2xl px-5 sm:px-8 py-3 sm:py-4 mb-10 sm:mb-12 shadow-lg transform transition-all duration-800 delay-400 ${
                isContentVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}>
                <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-100 font-semibold text-sm sm:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                  巴淡市 Harmoni One 会议厅
                </span>
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
                    <div className="relative bg-gradient-to-r from-blue-500/15 to-transparent border-l-4 border-blue-400 rounded-r-2xl p-5 sm:p-8 backdrop-blur-sm hover:bg-blue-500/20 transition-all duration-500 shadow-lg hover:shadow-blue-500/20">
                      <div className="absolute -left-3 top-8 w-7 h-7 bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-600 rounded-full flex items-center justify-center shadow-xl shadow-blue-500/60 group-hover:scale-125 transition-transform duration-300">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <p className="text-justify leading-relaxed">
                        2013年2月2日、印尼和谐文化协会与北京大学人才研究中心联合主办的第二届和谐文化研讨会在巴淡市Harmoni One会议厅举行。
                      </p>
                    </div>
                  </div>

                  {/* Paragraph 2 - Speakers Introduction */}
                  <div 
                    ref={(el) => setParagraphRef(el, 1)} 
                    className={`relative group transform transition-all duration-800 delay-700 ${
                      paragraphsVisible[1] ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    <div className="relative bg-gradient-to-r from-purple-500/15 to-transparent border-l-4 border-purple-400 rounded-r-2xl p-5 sm:p-8 backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-500 shadow-lg hover:shadow-purple-500/20">
                      <div className="absolute -left-3 top-8 w-7 h-7 bg-gradient-to-br from-purple-400 via-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-xl shadow-purple-500/60 group-hover:scale-125 transition-transform duration-300">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <p className="text-justify leading-relaxed mb-6">
                        研讨会邀请中国教育部中华青年经典教育课题组 [中华十大义理] 课题组副组长刘宇庭、中国香港鸿苑传统文化学校校长易斐、新加坡共和理工学院教授甘波、以及印尼和谐文化协会发起人陈朝明四位主讲人。
                      </p>
                      
                      {/* Speakers Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                        {speakers.map((speaker, idx) => (
                          <div 
                            key={idx}
                            className={`flex items-center gap-2 bg-gradient-to-r ${speaker.bg} to-transparent border ${speaker.border} border-opacity-40 rounded-xl px-3 py-2 backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
                          >
                            <div className={`w-2 h-2 bg-gradient-to-br ${speaker.color} rounded-full`}></div>
                            <span className="text-sm font-medium text-gray-100">{speaker.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Paragraphs 3-6 - Individual Speaker Presentations */}
                  {[
                    { idx: 2, speaker: speakers[0], content: "会上、刘宇庭老师以“忠孝在学校教育中的应用”为讲题、以故事为例、说明她在教学中将孝道应用于学校教育、对解决许多矛盾、行之有效。" },
                    { idx: 3, speaker: speakers[1], content: "易斐老师以主题“音乐和谐-教育与年龄段和谐”分析“和”在音乐中的含义、强调人与自身的和谐、人与人的和谐、人与大自然的和谐。" },
                    { idx: 4, speaker: speakers[2], content: "甘波博士以主题“和谐人生、从心出发”叙述在教学中运用现代生物反馈技术、帮助学生应对新加坡的高度学习压力、优化情绪与心脑和谐、从而达到最佳学习和交际状态。" },
                    { idx: 5, speaker: speakers[3], content: "陈朝明老师以“道德与和谐为何难以实行”为主题、提出可从中华宝贵的道德文明获得启示。中华古圣贤观察大自然（大道）、明白天心、人心本是同体、只要长期在坚持道德与和谐的教育上守正创新、使人人明心尽心、世界会趋向美好幸福。" }
                  ].map(({ idx, speaker, content }) => (
                    <div 
                      key={idx}
                      ref={(el) => setParagraphRef(el, idx)} 
                      className={`relative group transform transition-all duration-800 delay-${900 + idx * 200} ${
                        paragraphsVisible[idx] ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                      }`}
                    >
                      <div className={`relative bg-gradient-to-r ${speaker.bg} to-transparent border-l-4 ${speaker.border} rounded-r-2xl p-5 sm:p-8 backdrop-blur-sm hover:bg-opacity-30 transition-all duration-500 shadow-lg hover:shadow-${speaker.border.split('-')[1]}-500/20`}>
                        <div className={`absolute -left-3 top-8 w-7 h-7 bg-gradient-to-br ${speaker.color} rounded-full flex items-center justify-center shadow-xl shadow-${speaker.border.split('-')[1]}-500/60 group-hover:scale-125 transition-transform duration-300`}>
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        
                        {/* Speaker Name Tag */}
                        <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${speaker.color} bg-opacity-20 border ${speaker.border} border-opacity-50 rounded-full px-4 py-1.5 mb-4`}>
                          <div className={`w-1.5 h-1.5 bg-gradient-to-br ${speaker.color} rounded-full`}></div>
                          <span className="text-sm font-semibold text-gray-100">{speaker.name}</span>
                        </div>
                        
                        <p className="text-justify leading-relaxed">
                          {content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Decorative Element */}
              <div className={`flex justify-center items-center mt-12 sm:mt-16 gap-3 transform transition-all duration-800 delay-1500 ${
                paragraphsVisible[5] ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}>
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-cyan-600 shadow-lg shadow-blue-500/50"></div>
                <div className="w-24 sm:w-40 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 shadow-lg shadow-purple-500/50"></div>
                <div className="w-24 sm:w-40 h-0.5 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full"></div>
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-pink-400 to-rose-600 shadow-lg shadow-pink-500/50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBudayaChinese2;