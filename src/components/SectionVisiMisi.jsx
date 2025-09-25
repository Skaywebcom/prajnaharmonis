import { useEffect, useState, useRef } from "react";

const SectionVisiMisi = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [animationState, setAnimationState] = useState('hidden');
  const sectionRef = useRef(null);
  const lastScrollY = useRef(0);

  // Inject font fancy dari Google Fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Track scroll direction
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Enhanced Intersection Observer with re-triggering
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setAnimationState('entering');
          // Delay to show full animation
          setTimeout(() => setAnimationState('visible'), 100);
        } else {
          setIsVisible(false);
          setAnimationState('leaving');
          // Quick transition out
          setTimeout(() => setAnimationState('hidden'), 300);
        }
      },
      { 
        threshold: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1],
        rootMargin: "-10% 0px -10% 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Dynamic animation classes based on state and direction
  const getAnimationClasses = (delay = 0) => {
    const baseTransition = "transition-all duration-1000 ease-out";
    const delayClass = delay > 0 ? `delay-${delay}` : '';
    
    switch (animationState) {
      case 'hidden':
        return `${baseTransition} ${delayClass} ${
          scrollDirection === 'down' 
            ? 'translate-y-20 opacity-0 scale-95 blur-sm rotate-x-12'
            : 'translate-y-[-20px] opacity-0 scale-95 blur-sm rotate-x-[-12deg]'
        }`;
      case 'leaving':
        return `${baseTransition} duration-300 ${
          scrollDirection === 'down'
            ? 'translate-y-10 opacity-30 scale-98 blur-[1px]'
            : 'translate-y-[-10px] opacity-30 scale-98 blur-[1px]'
        }`;
      case 'entering':
        return `${baseTransition} ${delayClass} translate-y-2 opacity-70 scale-99`;
      case 'visible':
      default:
        return `${baseTransition} ${delayClass} translate-y-0 opacity-100 scale-100 blur-0 rotate-x-0`;
    }
  };

  // Enhanced card animation with 3D effects
  const getCardAnimationClasses = (delay = 0, cardType = 'default') => {
    const baseTransition = "transition-all duration-1000 ease-out transform-gpu";
    const delayClass = delay > 0 ? `delay-${delay}` : '';
    
    switch (animationState) {
      case 'hidden':
        const hiddenTransform = scrollDirection === 'down'
          ? cardType === 'visi' 
            ? 'translate-y-16 translate-x-[-8px] opacity-0 scale-95 blur-sm rotateY-12 rotateX-8'
            : 'translate-y-16 translate-x-2 opacity-0 scale-95 blur-sm rotateY-[-12deg] rotateX-8'
          : cardType === 'visi'
            ? 'translate-y-[-16px] translate-x-[-8px] opacity-0 scale-95 blur-sm rotateY-8 rotateX-[-8deg]'
            : 'translate-y-[-16px] translate-x-2 opacity-0 scale-95 blur-sm rotateY-[-8deg] rotateX-[-8deg]';
        return `${baseTransition} ${delayClass} ${hiddenTransform}`;
      
      case 'leaving':
        const leavingTransform = scrollDirection === 'down'
          ? 'translate-y-6 opacity-40 scale-98 blur-[0.5px]'
          : 'translate-y-[-6px] opacity-40 scale-98 blur-[0.5px]';
        return `${baseTransition} duration-300 ${leavingTransform}`;
      
      case 'entering':
        return `${baseTransition} ${delayClass} translate-y-1 opacity-80 scale-[1.01]`;
      
      case 'visible':
      default:
        return `${baseTransition} ${delayClass} translate-y-0 translate-x-0 opacity-100 scale-100 blur-0 rotateY-0 rotateX-0 hover:scale-[1.02] hover:translate-y-[-2px]`;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="visi-misi-section"
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url('/prajnaImages/visimisi-bg.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Enhanced Wave Animation Overlay with State Awareness */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${
        animationState === 'visible' ? 'opacity-20' : 'opacity-10'
      }`}>
        <div className={`absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-200/30 to-transparent transition-all duration-2000 ${
          isVisible ? 'animate-pulse scale-100' : 'scale-95 opacity-50'
        }`}></div>
        <div className={`absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl transition-all duration-2000 ${
          isVisible ? 'animate-pulse delay-100 scale-100' : 'scale-90 opacity-30'
        }`}></div>
        <div className={`absolute top-40 right-20 w-24 h-24 bg-blue-100/20 rounded-full blur-xl transition-all duration-2000 ${
          isVisible ? 'animate-pulse delay-300 scale-100' : 'scale-85 opacity-40'
        }`}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header Section with Enhanced Animation */}
        <div className={`text-center mb-8 ${getAnimationClasses(0)}`}>
          <h1 
            className="text-5xl md:text-6xl font-bold text-black mb-2 drop-shadow-2xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Visi & Misi
          </h1>
          <p className="text-xl text-black-100 max-w-2xl mx-auto drop-shadow-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
            Fondasi nilai dan tujuan yang memandu langkah perjalanan kami
          </p>
        </div>

        {/* Content Grid with 3D Card Animations */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Visi Card with Enhanced 3D Animation */}
          <div className={getCardAnimationClasses(300, 'visi')}>
            <div className="relative bg-white/15 rounded-3xl p-8 shadow-2xl border border-white/30 hover:bg-white/20 hover:shadow-3xl transition-all duration-500 group backdrop-blur-sm">
              {/* Visi Header - Elegant Typography Design */}
              <div className="relative mb-4 pb-2 border-b border-white/20">
                <h2 
                  className="text-5xl font-bold text-black mb-2 relative"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  <span className="relative z-10">Visi</span>
                  <div className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-yellow-400 via-amber-300 to-orange-400 rounded-full shadow-lg transition-all duration-1000 ${
                    animationState === 'visible' ? 'w-20' : 'w-0'
                  }`}></div>
                  <div className={`absolute -top-1 -left-1 w-6 h-6 border-l-4 border-t-4 border-yellow-400 rounded-tl-lg transition-all duration-1000 ${
                    animationState === 'visible' ? 'opacity-60' : 'opacity-0'
                  }`}></div>
                </h2>
                <p className="text-black-100 text-sm font-medium tracking-widest uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Our Vision
                </p>
              </div>

              {/* Visi Content with Staggered Animation */}
              <div className={`space-y-4 transition-all duration-1000 delay-500 ${
                animationState === 'visible' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <p 
                  className="text-black/90 text-lg leading-relaxed drop-shadow-md"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Terwujudnya <span className="font-semibold text-black-300 drop-shadow-lg">Keharmonisan hati nurani manusia</span>, 
                  Keharmonisan hubungan antarmanusia, dan <span className="font-semibold text-black-300 drop-shadow-lg">Keharmonisan manusia dengan alam semesta</span>, 
                  demi keberlangsungan hidup umat manusia yang senantiasa rukun harmonis, damai tentram dan bahagia sejahtera.
                </p>
              </div>

              {/* Enhanced Decorative Elements */}
              <div className={`absolute top-4 right-4 w-12 h-12 border border-yellow-400/30 rounded-full flex items-center justify-center group-hover:border-yellow-400/50 transition-all duration-500 ${
                animationState === 'visible' ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
              }`}>
                <div className="w-4 h-4 bg-yellow-400/40 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Misi Card with Enhanced 3D Animation */}
          <div className={getCardAnimationClasses(500, 'misi')}>
            <div className="relative bg-white/15 rounded-3xl p-8 shadow-2xl border border-white/30 hover:bg-white/20 hover:shadow-3xl transition-all duration-500 group backdrop-blur-sm">
              {/* Misi Header - Different Typography Design */}
              <div className="relative mb-4 pb-2 border-b border-white/20">
                <h2 
                  className="text-5xl font-bold text-black mb-2 relative"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  <span className="relative z-10">Misi</span>
                  <div className={`absolute -bottom-2 left-0 h-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 rounded-full shadow-lg transition-all duration-1000 delay-200 ${
                    animationState === 'visible' ? 'w-16' : 'w-0'
                  }`}></div>
                  <div className={`absolute -top-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-emerald-400 rounded-br-lg transition-all duration-1000 delay-100 ${
                    animationState === 'visible' ? 'opacity-60' : 'opacity-0'
                  }`}></div>
                </h2>
                <p className="text-black-100 text-sm font-medium tracking-widest uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Our Mission
                </p>
              </div>

              {/* Misi Content with Staggered Animation */}
              <div className={`space-y-4 transition-all duration-1000 delay-700 ${
                animationState === 'visible' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <p 
                  className="text-black/90 text-lg leading-relaxed drop-shadow-md"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span className="font-semibold text-black-300 drop-shadow-lg">Mewujudkan Budaya Keharmonisan</span>, 
                  <span className="font-semibold text-black-200 drop-shadow-lg"> Mengembangkan Pendidikan Moralitas</span>, serta menumbuhkan semangat kebajikan, ketulusan, dan saling menghargai, sehingga mendorong pengamalan Keharmonisan dan Moralitas secara nyata.
                </p>
              </div>

              {/* Different Decorative Elements for Misi */}
              <div className={`absolute top-4 right-4 w-12 h-12 border border-emerald-400/30 rounded-lg rotate-45 flex items-center justify-center group-hover:border-emerald-400/50 transition-all duration-500 ${
                animationState === 'visible' ? 'scale-100 rotate-45' : 'scale-0 rotate-180'
              }`}>
                <div className="w-4 h-4 bg-emerald-400/40 rounded-sm animate-pulse -rotate-45"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element with Enhanced Animation */}
        <div className={getAnimationClasses(700)}>
          <div className="flex justify-center mt-4">
            <div className="flex items-center space-x-6 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-white/20">
              {[
                { color: 'yellow-400/80', delay: 0, size: 'w-4 h-4' },
                { color: 'blue-300/80', delay: 100, size: 'w-2 h-2' },
                { color: 'emerald-400/80', delay: 200, size: 'w-5 h-5' },
                { color: 'cyan-300/80', delay: 300, size: 'w-3 h-3' },
                { color: 'amber-400/80', delay: 500, size: 'w-4 h-4' }
              ].map((dot, index) => (
                <div 
                  key={index}
                  className={`${dot.size} bg-${dot.color} rounded-full shadow-lg transition-all duration-1000 ${
                    animationState === 'visible' 
                      ? 'animate-pulse scale-100 opacity-100' 
                      : 'scale-0 opacity-0'
                  }`}
                  style={{ 
                    animationDelay: `${dot.delay}ms`,
                    transitionDelay: `${dot.delay + 700}ms`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements with Physics */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: 'top-20', left: 'left-1/4', size: 'w-2 h-2', delay: 100 },
          { top: 'top-40', left: 'right-1/3', size: 'w-3 h-3', delay: 300 },
          { top: 'bottom-32', left: 'left-1/3', size: 'w-2 h-2', delay: 500 }
        ].map((particle, index) => (
          <div 
            key={index}
            className={`absolute ${particle.top} ${particle.left} ${particle.size} bg-white/40 rounded-full transition-all duration-2000 ${
              isVisible 
                ? 'animate-bounce opacity-100 scale-100' 
                : 'opacity-0 scale-0'
            }`}
            style={{ 
              animationDelay: `${particle.delay}ms`,
              transitionDelay: `${particle.delay + 200}ms`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default SectionVisiMisi;