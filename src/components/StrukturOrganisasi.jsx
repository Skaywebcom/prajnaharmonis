import { useEffect, useState } from "react";

const StrukturOrganisasi = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Inject fonts
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

    const section = document.getElementById("struktur-organisasi-section");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="struktur-organisasi-section"
      className="relative min-h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/prajnaImages/background/2.png')",
      }}
    >
      {/* Overlay biar teks tetap terbaca */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-gray-800/55 to-slate-900/60"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100" height="100" className="absolute inset-0 w-full h-full">
          <defs>
            <pattern
              id="org-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="2" fill="#fbbf24" opacity="0.3" />
              <circle cx="25" cy="25" r="1.5" fill="#22c55e" opacity="0.2" />
              <circle cx="75" cy="75" r="1.5" fill="#22c55e" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#org-pattern)" />
        </svg>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-amber-300 rounded-2xl blur-2xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header Section */}
        <div
          className={`text-center mb-4 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Main Title */}
          <h2
            className="text-5xl md:text-6xl lg:text-7xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400 leading-tight"
            style={{
              fontFamily: "'Great Vibes', cursive",
              lineHeight: "1.3",
              paddingTop: "0.3em",
              paddingBottom: "0.2em",
              filter: "drop-shadow(2px 2px 6px rgba(0,0,0,0.3))",
            }}
          >
            Struktur Organisasi
          </h2>
        </div>

        {/* Structure Chart Container */}
        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative max-w-6xl mx-auto">
            {/* Chart Background Card */}
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-4 md:p-8 border border-white/20">
              {/* Inner Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-green-400/10 rounded-3xl"></div>

              {/* Image Container */}
              <div className="relative group">
                {/* Loading Placeholder */}
                {!imageLoaded && (
                  <div className="flex items-center justify-center h-96 bg-gray-800/20 rounded-2xl border border-white/10">
                    <div className="text-center">
                      <div className="animate-spin w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full mx-auto mb-2"></div>
                      <p className="text-gray-300 font-light" style={{ fontFamily: "Inter, sans-serif" }}>
                        Memuat struktur organisasi...
                      </p>
                    </div>
                  </div>
                )}

                {/* Main Structure Image */}
                <div className={`transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}>
                  <img
                    src="/prajnaImages/struktur.png"
                    alt="Struktur Organisasi"
                    className="w-full max-w-5xl mx-auto rounded-2xl border border-white/20 shadow-none group-hover:scale-[1.02] transition-transform duration-500"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageLoaded(true)}
                  />

                  {/* Image Overlay for Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              </div>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrukturOrganisasi;
