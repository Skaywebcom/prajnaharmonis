import { useEffect, useState, useRef } from "react";

const SectionBudayaChinese = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap";
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

    if (sectionRef.current) headerObserver.observe(sectionRef.current);
    if (contentRef.current) contentObserver.observe(contentRef.current);

    return () => {
      headerObserver.disconnect();
      contentObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="budaya"
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 overflow-hidden"
    >
      {/* 背景图层 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/prajnaImages/budaya-bg.jpeg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>

      {/* 装饰光圈 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-amber-300 rounded-full blur-2xl"></div>
      </div>

      {/* 背景图案 */}
      <div className="absolute inset-0 opacity-5">
        <svg width="80" height="80" className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="culture-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="2" fill="#fbbf24" opacity="0.4" />
              <circle cx="20" cy="20" r="1.5" fill="#22c55e" opacity="0.3" />
              <circle cx="60" cy="60" r="1.5" fill="#22c55e" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#culture-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* 标题部分 */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* 主标题 */}
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400 leading-tight transform transition-all duration-1200 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-8 opacity-0 scale-95"
            }`}
            style={{
              fontFamily: "'Great Vibes', cursive",
              lineHeight: "0.8",
              paddingTop: "0.25em",
              paddingBottom: "0.15em",
              filter: "drop-shadow(2px 2px 8px rgba(0,0,0,0.5))",
            }}
          >
            和谐理念
          </h2>

          {/* 副标题 */}
          <h3
            className={`text-2xl md:text-3xl text-gray-200 mb-4 transform transition-all duration-1000 delay-400 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{
              fontFamily: "Playfair Display, serif",
              textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
            }}
          >
            和谐的重要性
          </h3>

          {/* 装饰分割线 */}
          <div
            className={`w-32 h-1 bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400 mx-auto rounded-full transform transition-all duration-800 delay-600 ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          ></div>
        </div>

        {/* 主要内容 */}
        <div className="max-w-5xl mx-auto" ref={contentRef}>
          <div
            className={`transform transition-all duration-1000 ${
              isContentVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div
              className={`bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl transform transition-all duration-1200 delay-200 ${
                isContentVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-98"
              }`}
            >
              <div className="prose prose-lg max-w-none">
                <div
                  className={`space-y-8 text-gray-200 leading-relaxed text-lg transform transition-all duration-1000 delay-400 ${
                    isContentVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <p>
                    我们都知道和谐的重要性。和谐的能量与血液循环让身体健康；
                    和谐的家庭带来幸福；和谐的社会与国家是进步与繁荣的源泉。
                  </p>
                  <p>
                    当今时代，人类面临历史上最大的挑战：
                    气候剧变、经济长期低迷、人口爆炸、资源短缺、犯罪增加以及
                    各种社会问题。无论面对什么困难与挑战，
                    <span className="text-yellow-300 font-semibold">“和谐”</span>
                    都是解决的根本之道。
                  </p>
                  <p>
                    和谐源自对伦理与道德的真正理解。
                    印度尼西亚是一个多民族、多宗教、多文化的国家。
                    先贤的智慧孕育了国家基础
                    <span className="text-yellow-300 font-semibold">“建国五项原则”</span>
                    ，作为精神的防线，并以
                    <span className="text-green-300 font-semibold">“多元统一”</span>
                    的口号团结了整个民族。
                  </p>
                  <p>
                    中国儒家文化有一句格言：
                    <span className="text-amber-300 font-semibold italic">“和而不同”</span>。
                    道家《道德经》中也说：
                    <span className="text-green-300 font-semibold italic">
                      “人应学习大地的品性，再学习天空的品性，
                      然后学习道的品性，最终践行自然本真的品性。”
                    </span>
                    宇宙万物是人类研究与知识的源泉，
                    宇宙的和谐是真、善、美的体现。
                    人类之间的团结与和谐，
                    将是解决一切难题的根本，
                    引领人类走向道德与文明的永续发展。
                  </p>
                  <p>
                    现在是关键时刻。
                    人类彼此联系越来越紧密，
                    人人都有责任共同理解并实践真正的和谐。
                  </p>
                  <p className="text-xl leading-relaxed">
                    只要我们都关心和谐，世界的未来必将充满希望。
                    愿
                    <span className="text-yellow-300 font-bold">般若和谐基金会</span>
                    的努力，能够推动印尼社会、民族与国家的和谐，
                    并促进各国乃至全世界的和谐。
                  </p>
                </div>
              </div>

              {/* 装饰结尾 */}
              <div
                className={`mt-12 pt-8 border-t border-white/20 transform transition-all duration-1000 delay-1200 ${
                  isContentVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                <div className="flex items-center justify-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-300"></div>
                    <svg
                      className="w-8 h-8 text-amber-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-300"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBudayaChinese;
