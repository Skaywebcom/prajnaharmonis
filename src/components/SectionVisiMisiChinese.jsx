import { useEffect, useState, useRef } from "react";

const SectionVisiMisiChinese = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [animationState, setAnimationState] = useState('hidden');
  const sectionRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setAnimationState('entering');
          setTimeout(() => setAnimationState('visible'), 100);
        } else {
          setIsVisible(false);
          setAnimationState('leaving');
          setTimeout(() => setAnimationState('hidden'), 300);
        }
      },
      { threshold: [0, 0.3, 0.6, 1], rootMargin: "-10% 0px -10% 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getAnimationClasses = (delay = 0) => {
    const baseTransition = "transition-all duration-1000 ease-out";
    const delayClass = delay > 0 ? `delay-${delay}` : '';
    switch (animationState) {
      case 'hidden':
        return `${baseTransition} ${delayClass} opacity-0 translate-y-10`;
      case 'leaving':
        return `${baseTransition} opacity-30 translate-y-5`;
      case 'entering':
        return `${baseTransition} ${delayClass} opacity-70 translate-y-2`;
      case 'visible':
      default:
        return `${baseTransition} ${delayClass} opacity-100 translate-y-0`;
    }
  };

  const getCardAnimationClasses = (delay = 0) => {
    const baseTransition = "transition-all duration-1000 ease-out transform-gpu";
    const delayClass = delay > 0 ? `delay-${delay}` : '';
    switch (animationState) {
      case 'hidden':
        return `${baseTransition} ${delayClass} opacity-0 translate-y-10 scale-95`;
      case 'leaving':
        return `${baseTransition} opacity-40 translate-y-4`;
      case 'entering':
        return `${baseTransition} ${delayClass} opacity-80 translate-y-1`;
      case 'visible':
      default:
        return `${baseTransition} ${delayClass} opacity-100 translate-y-0 scale-100 hover:scale-[1.02]`;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url('/prajnaImages/visimisi-bg.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* 标题部分 */}
        <div className={`text-center mb-8 ${getAnimationClasses(0)}`}>
          <h1
            className="text-5xl md:text-6xl font-bold text-black mb-2 drop-shadow-2xl"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            宗旨 与 使命
          </h1>
          <p
            className="text-xl text-black-100 max-w-2xl mx-auto drop-shadow-lg"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            指引我们前行的价值与目标
          </p>
        </div>

        {/* 内容卡片 */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* 愿景卡片 */}
          <div className={getCardAnimationClasses(300)}>
            <div className="relative bg-white/15 rounded-3xl p-8 shadow-2xl border border-white/30 backdrop-blur-sm">
              <div className="relative mb-4 pb-2 border-b border-white/20">
                <h2
                  className="text-5xl font-bold text-black mb-2"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  宗旨
                </h2>
                <p className="text-black-100 text-sm font-medium tracking-widest uppercase">
                  我们的宗旨
                </p>
              </div>
              <p
                className="text-black/90 text-lg leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                实现{" "}
                <span className="font-semibold">人类良知的和谐</span>、
                <span className="font-semibold">人与人之间的和谐</span>，以及{" "}
                <span className="font-semibold">人与自然的和谐</span>，
                让人类社会永续安定、和睦、和平与幸福。
              </p>
            </div>
          </div>

          {/* 使命卡片 */}
          <div className={getCardAnimationClasses(500)}>
            <div className="relative bg-white/15 rounded-3xl p-8 shadow-2xl border border-white/30 backdrop-blur-sm">
              <div className="relative mb-4 pb-2 border-b border-white/20">
                <h2
                  className="text-5xl font-bold text-black mb-2"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  使命
                </h2>
                <p className="text-black-100 text-sm font-medium tracking-widest uppercase">
                  我们的使命
                </p>
              </div>
              <p
                className="text-black/90 text-lg leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <span className="font-semibold">推动和谐文化</span>、
                <span className="font-semibold">发展道德教育</span>，
                并培养善良、真诚与互相尊重的精神，
                让和谐与道德在现实中得到实践。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionVisiMisiChinese;
