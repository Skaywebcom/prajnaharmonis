import { useEffect, useState } from "react";

const SectionVisiMisi = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Inject font fancy dari Google Fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("visi-misi-section");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="visi-misi-section"
      className="relative min-h-screen overflow-hidden"
      style={{
  backgroundImage: `url('/prajnaImages/visimisi-bg.jpeg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}}

    >
      {/* Subtle Wave Animation Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-200/30 to-transparent animate-pulse"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse delay-100"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-100/20 rounded-full blur-xl animate-pulse delay-300"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className={`text-center mb-8 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
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

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Visi Card */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative bg-white/15 rounded-3xl p-8 shadow-2xl border border-white/30 hover:bg-white/20 hover:shadow-3xl transition-all duration-500 group">
              {/* Visi Header - Elegant Typography Design */}
              <div className="relative mb-4 pb-2 border-b border-white/20">
                <h2 
                  className="text-5xl font-bold text-black mb-2 relative"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  <span className="relative z-10">Visi</span>
                  <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-yellow-400 via-amber-300 to-orange-400 rounded-full shadow-lg"></div>
                  <div className="absolute -top-1 -left-1 w-6 h-6 border-l-4 border-t-4 border-yellow-400 rounded-tl-lg opacity-60"></div>
                </h2>
                <p className="text-black-100 text-sm font-medium tracking-widest uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Our Vision
                </p>
              </div>

              {/* Visi Content */}
              <div className="space-y-4">
                <p 
                  className="text-black/90 text-lg leading-relaxed drop-shadow-md"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Terwujudnya <span className="font-semibold text-black-300 drop-shadow-lg">Keharmonisan hati nurani manusia</span>, 
                  Keharmonisan hubungan antarmanusia, dan <span className="font-semibold text-black-300 drop-shadow-lg">Keharmonisan manusia dengan alam semesta</span>, 
                  demi keberlangsungan hidup umat manusia yang senantiasa rukun harmonis, damai tentram dan bahagia sejahtera.
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-12 h-12 border border-yellow-400/30 rounded-full flex items-center justify-center group-hover:border-yellow-400/50 transition-colors duration-300">
                <div className="w-4 h-4 bg-yellow-400/40 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Misi Card */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative bg-white/15 rounded-3xl p-8 shadow-2xl border border-white/30 hover:bg-white/20 hover:shadow-3xl transition-all duration-500 group">
              {/* Misi Header - Different Typography Design */}
              <div className="relative mb-4 pb-2 border-b border-white/20">
                <h2 
                  className="text-5xl font-bold text-black mb-2 relative"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  <span className="relative z-10">Misi</span>
                  <div className="absolute -bottom-2 left-0 w-16 h-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 rounded-full shadow-lg"></div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-emerald-400 rounded-br-lg opacity-60"></div>
                </h2>
                <p className="text-black-100 text-sm font-medium tracking-widest uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Our Mission
                </p>
              </div>

              {/* Misi Content */}
              <div className="space-y-4">
                <p 
                  className="text-black/90 text-lg leading-relaxed drop-shadow-md"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span className="font-semibold text-black-300 drop-shadow-lg">Mewujudkan Budaya Keharmonisan</span>, 
                  <span className="font-semibold text-black-200 drop-shadow-lg"> Mengembangkan Pendidikan Moralitas</span>, serta menumbuhkan semangat kebajikan, ketulusan, dan saling menghargai, sehingga mendorong pengamalan Keharmonisan dan Moralitas secara nyata.
                </p>
              </div>

              {/* Different Decorative Elements for Misi */}
              <div className="absolute top-4 right-4 w-12 h-12 border border-emerald-400/30 rounded-lg rotate-45 flex items-center justify-center group-hover:border-emerald-400/50 transition-colors duration-300">
                <div className="w-4 h-4 bg-emerald-400/40 rounded-sm animate-pulse -rotate-45"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className={`flex justify-center mt-4 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center space-x-6 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-white/20">
            <div className="w-4 h-4 bg-yellow-400/80 rounded-full animate-pulse shadow-lg"></div>
            <div className="w-2 h-2 bg-blue-300/80 rounded-full animate-pulse delay-100 shadow-lg"></div>
            <div className="w-5 h-5 bg-emerald-400/80 rounded-full animate-pulse delay-200 shadow-lg"></div>
            <div className="w-3 h-3 bg-cyan-300/80 rounded-full animate-pulse delay-300 shadow-lg"></div>
            <div className="w-4 h-4 bg-amber-400/80 rounded-full animate-pulse delay-500 shadow-lg"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements for Ocean Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-40 right-1/3 w-3 h-3 bg-blue-200/30 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-white/50 rounded-full animate-bounce delay-500"></div>
      </div>
    </section>
  );
};

export default SectionVisiMisi;