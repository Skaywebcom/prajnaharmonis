import React, { useEffect, useRef, useState } from "react";

const SectionArtikelChinese = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Noto+Serif+SC:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const paragraphs = [
    "2024年6月15日，首届和谐世界文明论坛暨第十届尼山世界文明论坛·中印尼文明对话会在印尼巴厘岛举行，来自中国、马来西亚、新加坡以及东道主印尼的专家学者围绕“构建全人类和谐共生的文明”这一主题交流思想、碰撞智慧。",
    "印尼和谐文化协会会长黄愿字代表主办方致辞。他表示，面对当前世界动荡变革期，如何超越“文明冲突”、迈向“文明和谐”是人类共同面临的最大课题。此时此刻，对抗分裂的人类社会迫切需要以文明对话促进和谐共生。",
    "尼山世界儒学中心副主任国承彦在线上致辞中说，文明因交流而多彩，文明因互鉴而丰富。真诚希望与会专家学者畅所欲言，努力把中印尼文明对话会打造成为两国人民心灵相通、相知相亲的桥梁和纽带。",
    "新加坡国立大学亚洲研究所特聘院士马凯硕在视频发言中表示，当前，我们正见证多个主要文明的历史性崛起。这本应增进彼此的理解，然而现实却事与愿违，误解与隔阂反而日益加深。在此背景下，有一个地区以其悠久的文明共存实践，提供了难能可贵的范例——堪称”全球文明实验室“的东南亚。此地汇聚了约6.7亿人口，其中包括2.5亿穆斯林、1.5亿基督徒、1.5亿佛教徒，以及众多的道教徒、儒家信徒与印度教徒。世界各大文明体系，包括西方文明，在此地皆能和平共存，这在全球范围内堪称绝无仅有。",
    "前巴厘省省长马德·芒古·帕斯蒂卡、印尼伊斯兰教士联合会副秘书长穆罕默德·纳吉布·阿兹卡、印尼穆罕默德迪亚知名学者阿莉玛图尔·奇卜提亚、山东社会科学院副院长张凤莲、中国人民大学哲学院教授温海明、首都师范大学哲学系教授孔德立、山东大学易学与中国古代哲学中心教授李尚信、马来西亚拉曼大学中华研究院副院长陈中和等多位专家学者出席论坛并发表演讲。"
  ];

  return (
    <section 
      ref={sectionRef}
      className="w-full py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50"
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

      <div className="max-w-5xl mx-auto">
        {/* Decorative top accent */}
        <div className={`flex justify-center mb-8 sm:mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full"></div>
        </div>

        {/* Main Article Container */}
        <article className={`bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Top gradient accent bar */}
          <div className="h-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></div>
          
          <div className="p-6 sm:p-8 lg:p-12 xl:p-16">
            {/* Header Section */}
            <header className="mb-8 sm:mb-10 lg:mb-12">
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 text-sm sm:text-base text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="font-medium">2024年6月15日</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>印尼巴厘岛</span>
                </div>
              </div>

              {/* Title */}
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 mb-4 sm:mb-6"
                style={{ fontFamily: "'Noto Serif SC', serif" }}
              >
                首届和谐世界文明论坛
              </h1>
              
              {/* Subtitle */}
              <div className="relative pl-6 sm:pl-8 border-l-4 border-amber-500">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-700 leading-relaxed">
                  "构建全人类和谐共生的文明"
                </h2>
              </div>
            </header>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8 sm:mb-10 lg:mb-12"></div>

            {/* Article Content */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              {paragraphs.map((paragraph, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  {/* Decorative initial letter for first paragraph */}
                  {index === 0 ? (
                    <p className="relative text-base sm:text-lg lg:text-xl leading-relaxed text-gray-800">
                      <span className="float-left text-6xl sm:text-7xl lg:text-8xl font-bold text-amber-600 mr-3 sm:mr-4 mt-1 leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
                        2
                      </span>
                      {paragraph.substring(1)}
                    </p>
                  ) : (
                    <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-800 text-justify">
                      {paragraph}
                    </p>
                  )}

                  {/* Quote highlighting for specific paragraphs */}
                  {(index === 1 || index === 2) && (
                    <div className="mt-4 pl-6 sm:pl-8 border-l-2 border-amber-400/50">
                      <p className="text-sm sm:text-base text-gray-600 italic">
                        {index === 1 && "— 黄愿字，印尼和谐文化协会会长"}
                        {index === 2 && "— 国承彦，尼山世界儒学中心副主任"}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom decorative element */}
            <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <div className="w-16 sm:w-20 h-px bg-gradient-to-r from-amber-400 to-transparent"></div>
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <div className="w-16 sm:w-20 h-px bg-gradient-to-l from-amber-400 to-transparent"></div>
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></div>
        </article>

        {/* Footer info card */}
        <div className={`mt-8 sm:mt-10 lg:mt-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-6 sm:p-8 border border-amber-100 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">关于论坛</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  首届和谐世界文明论坛汇聚了来自中国、马来西亚、新加坡和印尼的顶尖学者，
                  共同探讨如何在多元文明中实现和谐共生，为构建人类命运共同体贡献智慧。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative accent */}
        <div className={`flex justify-center mt-8 sm:mt-10 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default SectionArtikelChinese;