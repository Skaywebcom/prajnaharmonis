import { useEffect, useState } from "react";

const SectionBudaya = () => {
  const [isVisible, setIsVisible] = useState(false);

  // inject font fancy
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

    const section = document.getElementById("budaya");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);



  return (
    <section
      id="budaya"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/prajnaImages/budaya-bg.jpeg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-amber-300 rounded-full blur-2xl"></div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="80" height="80" className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="culture-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="2" fill="#fbbf24" opacity="0.4"/>
              <circle cx="20" cy="20" r="1.5" fill="#22c55e" opacity="0.3"/>
              <circle cx="60" cy="60" r="1.5" fill="#22c55e" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#culture-pattern)"/>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          

          {/* Main Title */}
          <h2
  className="text-4xl md:text-5xl lg:text-6xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400 leading-tight"
  style={{
    fontFamily: "'Great Vibes', cursive",
    lineHeight: "0.8",       // bikin ruang vertikal
    paddingTop: "0.25em",    // ruang atas biar huruf tinggi gak kepotong
    paddingBottom: "0.15em", // ruang bawah biar ekor huruf gak kepotong
    filter: "drop-shadow(2px 2px 8px rgba(0,0,0,0.5))",
  }}
>
  Budaya Keharmonisan
</h2>


          {/* Subtitle */}
          <h3
            className="text-2xl md:text-3xl text-gray-200 mb-4"
            style={{
              fontFamily: "Playfair Display, serif",
              textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
            }}
          >
            Pentingnya Keharmonisan
          </h3>

          {/* Decorative Divider */}
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Article Content */}
        <div className="max-w-5xl mx-auto">
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Article Container */}
            <div className="bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div className="space-y-8 text-gray-200 leading-relaxed text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p>
                    Kita semua mengetahui pentingnya keharmonisan. Energi dan aliran
                    darah yang harmonis menjadikan tubuh kita sehat; keluarga yang
                    harmonis mendatangkan kebahagiaan; masyarakat dan negara yang
                    harmonis merupakan sumber kemajuan dan kesejahteraan.
                  </p>
                  
                  <p>
                    Pada era ini, manusia menghadapi berbagai tantangan terbesar
                    sepanjang sejarah, perubahan iklim secara drastis, kelesuan ekonomi
                    berkepanjangan, meledaknya populasi manusia, kelangkaan sumber daya,
                    meningkatnya kriminalitas, dan berbagai masalah kehidupan lainnya.
                    Apapun masalah dan tantangan yang dihadapi, <span className="text-yellow-300 font-semibold">"keharmonisan"</span>
                    merupakan dasar solusinya.
                  </p>
                  
                  <p>
                    Keharmonisan berasal dari pemahaman sejati atas etika dan moralitas.
                    Negara Kesatuan Republik Indonesia adalah negara yang kaya akan
                    keragaman suku, agama dan budaya. Kebijaksanaan nenek moyang Bangsa
                    Indonesia yang melahirkan dasar negara <span className="text-yellow-300 font-semibold">"Pancasila"</span> sebagai benteng
                    pertahanan mental dan semangat semboyan <span className="text-green-300 font-semibold">"Bhinneka Tunggal Ika"</span>,
                    telah mempersatukan bangsa Indonesia.
                  </p>
                  
                  <p>
                    Ajaran Konfusianisme dari budaya Tionghoa juga memiliki pepatah:
                    <span className="text-amber-300 font-semibold italic"> "Keharmonisan di dalam Perbedaan"</span>. Sebuah pepatah ajaran Taoisme di
                    dalam kitab suci Tao Te Ching menyebutkan: <span className="text-green-300 font-semibold italic">"Manusia hendaknya
                    mempelajari sifat dan pribadi "Bumi", kemudian sifat dan pribadi
                    "Langit", setelah itu mempelajari sifat dan pribadi "Tao", dan
                    selanjutnya mengamalkan sifat dan pribadi yang "Wajar Alamiah"</span>. Alam
                    semesta dan isinya merupakan sumber penelitian dan pengetahuan umat
                    manusia, keharmonisan alam semesta yang <span className="text-yellow-300 font-semibold">"Sejati, Bajik, Indah"</span>.
                    Persatuan dan keharmonisan yang seutuhnya diantara sesama umat
                    manusia akan menjadi solusi bagi berbagai persoalan dan tantangan
                    hidup, mengarahkan manusia menuju moralitas dan peradaban yang maju
                    dan berkesinambungan.
                  </p>
                  
                  <p>
                    Saat ini adalah momen penting. Manusia semakin saling berhubungan
                    satu sama lain dan semua orang memiliki tanggung jawab untuk
                    bersama-sama memahami dan merealisasikan keharmonisan secara utuh
                    dan nyata.
                  </p>
                  
                  <p className="text-xl leading-relaxed">
                    Asalkan kita semua memiliki kepedulian terhadap keharmonisan, maka
                    masa depan dunia yang cemerlang akan penuh dengan harapan. Semoga
                    upaya <span className="text-yellow-300 font-bold">Yayasan Prajna Harmonis</span> dapat turut mendorong terciptanya
                    keharmonisan masyarakat, bangsa dan negara Indonesia, keharmonisan
                    antar negara bahkan se-dunia.
                  </p>
                </div>
              </div>

              {/* Decorative Quote Accent */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="flex items-center justify-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-300"></div>
                    <svg className="w-8 h-8 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
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

export default SectionBudaya;