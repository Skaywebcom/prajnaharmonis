import React, { useEffect, useRef, useState } from "react";

const SectionArtikelChinese2 = () => {
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
    "2025年6月14日，第二届和谐世界文明论坛暨2025和合文明论坛平行论坛在印尼巴厘岛举行。论坛以“探讨超越丛林法则的人类新文明”为主题，分设“延续万隆精神、坚守和平共处”和“世界文明和谐对话交流”两大议题，旨在推动人类和平发展与多元文明互鉴。",
    "印尼第五任总统、印尼斗争民主党总主席梅加瓦蒂·苏加诺普特丽发表视频致辞并表示，万隆精神是致力于构建一个平等且富有尊严之世界的信念，一个不再受“丛林法则”支配、而由“良心法则”引领的全球秩序。",
    "'和谐世界文明论坛'让我们再次将目光投向世界真正重要的命题——和谐，这不是遥不可及的理想，而是摆在人类面前的现实选择。它是我们存续的唯一路径，更是实现一切愿景的根本前提。唯有停止战争、珍视彼此文明的成就、放下'争当第一'的执念，我们才能真正学会守护自然、真正着眼于下一代的未来。",
    "中国驻登巴萨总领事张志昇出席论坛并在致辞中表示，在各国前途命运紧密相连的今天，不同文明包容共存、交流互鉴，将助力人类共同进步、促进世界繁荣发展。印尼瓦希德基金会主席燕妮·瓦希德在致辞中说，”我们汇聚于此，不仅是为了交流观点，更是为了在这个伤痕累累的世界中开辟一方真诚而深刻的对话空间。当全球范围内的冲突、不平等与人道危机日益加剧，文明更应成为连接彼此的桥梁，而非隔绝你我的高墙。“",
    "印尼和谐文化协会会长黄愿字、努尔乔利什·马吉德协会基金会理事会主席奥米·科玛里亚、印尼伊斯兰教士联合会主席阿哈迈德·苏艾迪、国际儒学联合会副会长于建福、中央民族大学讲席教授杨桂萍、中国孔子研究院副院长魏衍华、山东财经大学教授王蔚、联合国驻印尼协调员办公室主任马修·大卫·约翰逊-伊丹等专家学者出席会议并发表演讲。泰国前副总理功·塔帕朗西、联合国教科文组织总干事特别顾问汉斯·道维勒、尼山世界儒学中心副主任朱瑞显发表视频致辞。"
  ];

  const speakers = [
    { name: "梅加瓦蒂·苏加诺普特丽", title: "印尼第五任总统" },
    { name: "杰弗里·萨克斯", title: "美国哥伦比亚大学可持续发展中心主任" },
    { name: "张志昇", title: "中国驻登巴萨总领事" },
    { name: "燕妮·瓦希德", title: "印尼瓦希德基金会主席" }
  ];

  return (
    <section 
      ref={sectionRef}
      className="w-full py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50"
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
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent rounded-full"></div>
        </div>

        {/* Main Article Container */}
        <article className={`bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Top gradient accent bar */}
          <div className="h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
          
          <div className="p-6 sm:p-8 lg:p-12 xl:p-16">
            {/* Header Section */}
            <header className="mb-8 sm:mb-10 lg:mb-12">
              {/* Edition Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full mb-4 sm:mb-6 border border-blue-100">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                <span className="text-sm sm:text-base font-semibold text-blue-700">第二届论坛</span>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 text-sm sm:text-base text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="font-medium">2025年6月14日</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                第二届和谐世界文明论坛
              </h1>
              
              {/* Subtitle with decorative border */}
              <div className="relative pl-6 sm:pl-8 border-l-4 border-gradient-to-b from-blue-500 to-indigo-600">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-600"></div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-700 leading-relaxed">
                  "探讨超越丛林法则的人类新文明"
                </h2>
              </div>

              {/* Theme tags */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-6">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium border border-blue-100">
                  延续万隆精神
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-50 text-indigo-700 rounded-full text-xs sm:text-sm font-medium border border-indigo-100">
                  和平共处
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-50 text-purple-700 rounded-full text-xs sm:text-sm font-medium border border-purple-100">
                  文明对话交流
                </span>
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
                      <span className="float-left text-6xl sm:text-7xl lg:text-8xl font-bold text-blue-600 mr-3 sm:mr-4 mt-1 leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
                        2
                      </span>
                      {paragraph.substring(1)}
                    </p>
                  ) : index === 2 ? (
                    // Featured quote styling for Sakhs' quote
                    <blockquote className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 sm:p-8 rounded-2xl border-l-4 border-blue-600 shadow-lg">
                      <svg className="absolute top-4 left-4 w-8 h-8 sm:w-10 sm:h-10 text-blue-300 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                      <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-800 relative z-10 italic">
                        {paragraph}
                      </p>
                      <div className="mt-4 pt-4 border-t border-blue-200">
                        <p className="text-sm sm:text-base text-blue-700 font-semibold">
                          — 杰弗里·萨克斯
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1">
                          美国哥伦比亚大学可持续发展中心主任
                        </p>
                      </div>
                    </blockquote>
                  ) : (
                    <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-800 text-justify">
                      {paragraph}
                    </p>
                  )}

                  {/* Attribution for other key speakers */}
                  {index === 1 && (
                    <div className="mt-4 pl-6 sm:pl-8 border-l-2 border-blue-400/50">
                      <p className="text-sm sm:text-base text-gray-600 italic">
                        — 梅加瓦蒂·苏加诺普特丽，印尼第五任总统
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom decorative element */}
            <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="w-16 sm:w-20 h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
                <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                <div className="w-16 sm:w-20 h-px bg-gradient-to-l from-blue-500 to-transparent"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
        </article>

        {/* Key Speakers Card */}
        <div className={`mt-8 sm:mt-10 lg:mt-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl p-6 sm:p-8 border border-blue-100 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">重要发言嘉宾</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  来自世界各国的杰出领导者和学者共同探讨人类文明的未来发展
                </p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {speakers.map((speaker, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">{speaker.name}</p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">{speaker.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom decorative accent */}
        <div className={`flex justify-center mt-8 sm:mt-10 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default SectionArtikelChinese2;