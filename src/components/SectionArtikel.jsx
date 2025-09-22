import { useEffect, useState } from "react";

const SectionArtikel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

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

    const section = document.getElementById("artikel-section");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      id: 1,
      title: "KUNCI KEBERHASILAN PENDIDIKAN MORALITAS",
      desc: "Di zaman sekarang, ilmu dan teknologi sangatlah maju. Namun, kemajuan ini harus diimbangi dengan pendidikan moral yang kuat agar manusia tidak kehilangan nilai-nilai kemanusiaan yang hakiki.",
      img: "/prajnaImages/artikel1.png",
    },
    {
      id: 2,
      title: "PENTINGNYA KEHARMONISAN",
      desc: "Kita semua mengetahui pentingnya keharmonisan. Energi dan aliran darah yang harmonis menjadikan tubuh sehat, pikiran yang harmonis memberikan kedamaian batin, dan hubungan yang harmonis menciptakan kehidupan yang bahagia.",
      img: "/prajnaImages/artikel2.png",
    },
  ];

  return (
    <section
      id="artikel-section"
      className="relative min-h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/prajnaImages/background/3.png')",
      }}
    >
      {/* Overlay biar teks tetap terbaca */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100/90 via-white/85 to-green-50/90"></div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-amber-300 rounded-full blur-2xl"></div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100" height="100" className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="article-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="#fbbf24" opacity="0.3"/>
              <circle cx="25" cy="25" r="1.5" fill="#22c55e" opacity="0.2"/>
              <circle cx="75" cy="75" r="1.5" fill="#22c55e" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#article-pattern)"/>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-10">
        {/* Header Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Main Title */}
          <h2
            className="text-5xl md:text-6xl lg:text-7xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-amber-500 to-green-600"
            style={{
              fontFamily: "'Great Vibes', cursive",
              paddingTop: "0.25em",
              filter: "drop-shadow(2px 2px 8px rgba(0,0,0,0.1))",
            }}
          >
            Artikel Keharmonisan
          </h2>

          {/* Subtitle */}
          <p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-2 italic"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Artikel Budaya Keharmonisan
          </p>

          {/* Decorative Divider */}
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 via-amber-400 to-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Articles Grid */}
        <div className="max-w-4xl mx-auto -mt-8">
          <div className="grid md:grid-cols-2 gap-32 lg:gap-40">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <article 
                  className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl 
                             border border-white/20 overflow-hidden 
                             transition-all duration-700 hover:scale-[1.02]
                             h-[420px]"
                >
                  {/* --- DEFAULT VIEW (tidak hover) --- */}
                  <div className={`absolute inset-0 flex flex-col items-center justify-center text-center p-6 transition-all duration-700 
                                   ${hoveredCard === card.id ? "opacity-0" : "opacity-100"}`}>
                    {/* Circle Image */}
                    <div className="w-32 h-32 mb-6 rounded-full overflow-hidden shadow-md">
                      <img 
                        src={card.img} 
                        alt={card.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-lg md:text-xl font-bold text-gray-800 mb-3 leading-tight"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p 
                      className="text-gray-600 leading-relaxed text-base line-clamp-3"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {card.desc}
                    </p>
                  </div>

                  {/* --- HOVER VIEW --- */}
                  <div className={`absolute inset-0 flex flex-col transition-all duration-700 
                                   ${hoveredCard === card.id ? "opacity-100" : "opacity-0"}`}>
                    {/* Image Cover */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <img 
                        src={card.img} 
                        alt={card.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay + Title on Image */}
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
                        <h3 
                          className="text-xl md:text-2xl font-bold text-white text-center leading-snug"
                          style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                          {card.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content under image */}
                    <div className="p-6 flex flex-col justify-between flex-1">
                      <p 
                        className="text-gray-700 leading-relaxed mb-6 text-base"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {card.desc}
                      </p>

                      {/* Action Button */}
                      <button 
                        className="group/btn px-4 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 
                                   text-white font-semibold rounded-full 
                                   hover:from-yellow-400 hover:to-amber-400 
                                   transform hover:scale-105 transition-all duration-300 
                                   shadow-lg hover:shadow-xl"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        <span className="flex items-center justify-center space-x-2">
                          <span>Baca Selengkapnya</span>
                          <svg 
                            className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionArtikel;
