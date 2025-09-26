import { useEffect, useState, useRef } from "react";

const SectionPendidikan = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [paragraphsVisible, setParagraphsVisible] = useState([]);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const paragraphRefs = useRef([]);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Enhanced Intersection Observer for header animations - always re-render
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: [0.1, 0.2, 0.3],
        rootMargin: "-10% 0px -10% 0px"
      }
    );

    // Enhanced Intersection Observer for content animations - always re-render
    const contentObserver = new IntersectionObserver(
      ([entry]) => {
        setIsContentVisible(entry.isIntersecting);
      },
      { 
        threshold: [0.2, 0.3, 0.4],
        rootMargin: "-20% 0px -20% 0px"
      }
    );

    // Individual paragraph observers for sequential animations
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

  // Initialize paragraph refs
  const setParagraphRef = (el, index) => {
    paragraphRefs.current[index] = el;
  };

  return (
    <section
      id="pendidikan"
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-800 via-gray-900 to-slate-800 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/prajnaImages/pendidikan.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60"></div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-amber-300 rounded-full blur-2xl"></div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="80" height="80" className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="education-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="2" fill="#fbbf24" opacity="0.4"/>
              <circle cx="20" cy="20" r="1.5" fill="#22c55e" opacity="0.3"/>
              <circle cx="60" cy="60" r="1.5" fill="#22c55e" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#education-pattern)"/>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header Section with enhanced re-rendering animations */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>

          {/* Main Title */}
          <h2
            className={`text-5xl md:text-6xl lg:text-7xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400 transform transition-all duration-1200 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            }`}
            style={{
              fontFamily: "'Great Vibes', cursive",
              paddingTop: "0.25em",
              filter: "drop-shadow(2px 2px 8px rgba(0,0,0,0.5))",
            }}
          >
            道德教育
          </h2>

          {/* Subtitle */}
          <h3 
            className={`text-2xl md:text-3xl text-gray-200 mb-2 transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{
              fontFamily: "Playfair Display, serif",
              textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
            }}
          >
            道德教育如何才有成效？
          </h3>

          {/* Decorative Divider */}
          <div className={`w-32 h-1 bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400 mx-auto rounded-full transform transition-all duration-800 delay-600 ${
            isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`}></div>
        </div>

        {/* Main Article Content with enhanced re-rendering animations */}
        <div className="max-w-5xl mx-auto -mt-8" ref={contentRef}>
          <div className={`transform transition-all duration-1000 ${
            isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Article Container */}
            <div className={`bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl transform transition-all duration-1200 delay-200 ${
              isContentVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-98'
            }`}>

              {/* Article Content with sequential paragraph animations */}
              <div className="prose prose-lg max-w-none">
                <div className="space-y-8 text-gray-200 leading-relaxed text-lg text-justify" style={{ fontFamily: 'Inter, sans-serif' }}>
                  
                  {/* Paragraph 1 */}
                  <p 
                    ref={(el) => setParagraphRef(el, 0)}
                    className={`relative pl-6 border-l-4 border-yellow-400/50 bg-white/5 p-6 rounded-r-xl backdrop-blur-sm transform transition-all duration-800 delay-500 ${
                      paragraphsVisible[0] ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    <span className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                    </span>
                    当前世界科技进步，信息产品层出不穷。智能手机、电脑网络传播很方便。一些不健康的思想与画面很容易污染学生的心灵，造成许多不良行为，例如：嗜毒、色情染病、暴力犯罪等。长此下去，后果不堪设想。
                  </p>

                  {/* 段落 2 */}
                  <p ref={(el) => setParagraphRef(el, 1)} className={`relative pl-6 border-l-4 border-green-400/50 bg-white/5 p-6 rounded-r-xl backdrop-blur-sm transform transition-all duration-800 delay-700 ${
                    paragraphsVisible[1] ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}>
                    <span className="text-yellow-300 font-semibold">“道德教育”</span> 如今已成为全球关注的课题。如何实施有效的道德教育并非易事。尽管已有许多相关书籍与理论，但现状仍令人担忧。<span className="text-green-300 font-semibold">关键在于教育者本身。</span> 然而现实社会环境为教师带来巨大压力，因此必须培养教师坚强的心志与长期的承诺。
                  </p>

                  {/* 段落 3 */}
                  <p ref={(el) => setParagraphRef(el, 2)} className={`relative pl-6 border-l-4 border-amber-400/50 bg-white/5 p-6 rounded-r-xl backdrop-blur-sm transform transition-all duration-800 delay-900 ${
                    paragraphsVisible[2] ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}>
                    有句格言：<span className="text-amber-300 font-semibold italic">“教师是人类灵魂的工程师。”</span> 灵魂是什么？灵魂没有形状，但它存在于每个人的内心，是人最根本的精神与良知。
                  </p>

                  {/* 段落 4 */}
                  <p ref={(el) => setParagraphRef(el, 3)} className={`relative pl-6 border-l-4 border-yellow-400/50 bg-white/5 p-6 rounded-r-xl backdrop-blur-sm transform transition-all duration-800 delay-1100 ${
                    paragraphsVisible[3] ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}>
                    我认为<span className="text-yellow-300 font-semibold">灵魂是永恒的精神力量，是崇高而伟大的良知。</span> 它源自上天，无法用言语完全解释。每个人都应不断自我修养，才能真正体悟与坚信良知的重要性。
                  </p>

                  {/* 段落 5 */}
                  <p ref={(el) => setParagraphRef(el, 4)} className={`relative pl-6 border-l-4 border-green-400/50 bg-white/5 p-6 rounded-r-xl backdrop-blur-sm transform transition-all duration-800 delay-1300 ${
                    paragraphsVisible[4] ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}>
                    印度尼西亚建国五项原则中的第一条 <span className="text-green-300 font-bold">“信仰唯一的上帝”</span> 具有深远意义，它是人类道德与和谐的根本。唯有敬畏上天，良知才会觉醒，教师才能肩负神圣的使命。
                  </p>

                  {/* 段落 6 */}
                  <p ref={(el) => setParagraphRef(el, 5)} className={`relative pl-6 border-l-4 border-amber-400/50 bg-white/5 p-6 rounded-r-xl backdrop-blur-sm text-xl leading-relaxed transform transition-all duration-800 delay-1500 ${
                    paragraphsVisible[5] ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}>
                    <span className="text-amber-300 font-bold">道德教育是一项长期而艰巨的任务</span>，需要社会与政府的支持与关注，才能取得有效成果。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPendidikan;