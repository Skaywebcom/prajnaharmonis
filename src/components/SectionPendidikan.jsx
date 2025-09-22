import { useEffect, useState } from "react";

const SectionPendidikan = () => {
  const [isVisible, setIsVisible] = useState(false);

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

    const section = document.getElementById("pendidikan");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="pendidikan"
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
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          

          {/* Main Title */}
          <h2
            className="text-5xl md:text-6xl lg:text-7xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400"
            style={{
              fontFamily: "'Great Vibes', cursive",
              paddingTop: "0.25em",
              filter: "drop-shadow(2px 2px 8px rgba(0,0,0,0.5))",
            }}
          >
            Pendidikan Moralitas
          </h2>

          {/* Subtitle */}
          <h3 
            className="text-2xl md:text-3xl text-gray-200 mb-2"
            style={{
              fontFamily: "Playfair Display, serif",
              textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
            }}
          >
            Kunci Keberhasilan Pendidikan Moralitas
          </h3>

          {/* Decorative Divider */}
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Article Content */}
        <div className="max-w-5xl mx-auto -mt-8">
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Article Container */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div className="space-y-8 text-gray-200 leading-relaxed text-lg text-justify" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p className="relative pl-6 border-l-4 border-yellow-400/50 bg-white/5 p-6 rounded-r-xl backdrop-blur-sm">
                    <span className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                    </span>
                    Di zaman sekarang, ilmu dan teknologi sangatlah maju, dengan produk
                    teknologi informasi yang berlimpah. Smartphone dan situs komputer
                    menyebarkan informasi dengan cepat. Berbagai pandangan dan situs
                    yang tidak sehat dengan mudah mencemari pola pikir anak didik,
                    sebagai contoh: kecanduan narkoba, penyakit akibat pergaulan bebas,
                    kejahatan, kekerasan dan perilaku buruk lainnya. Jika situasi ini
                    terus berlanjut, konsekuensinya tidak terbayangkan.
                  </p>

                  <p className="relative pl-6 border-l-4 border-green-400/50 bg-white/5 p-6 rounded-r-xl backdrop-blur-sm">
                    <span className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                    </span>
                    <span className="text-yellow-300 font-semibold">"Pendidikan moral"</span> kini menjadi topik yang mendapat perhatian di
                    seluruh dunia. Bagaimana melaksanakan pendidikan moral yang efektif
                    bukanlah suatu tugas yang mudah. Meskipun saat ini terdapat banyak
                    buku dan materi pendidikan moral, etika, karakter dan budi pekerti,
                    disertai berbagai teori dan pembahasan oleh para pakar, namun
                    situasinya masih mengkhawatirkan. <span className="text-green-300 font-semibold">Kunci dari isu ini ada di tangan
                    pendidik.</span> Namun lingkungan sosial dan praktek kenyataan saat ini
                    memberikan beban yang cukup besar bagi pendidik. Persoalan mendasar
                    adalah bagaimana membekali guru dengan mental yang kuat dan komitmen
                    yang berkepanjangan.
                  </p>

                  <p className="relative pl-6 border-l-4 border-amber-400/50 bg-white/5 p-6 rounded-r-xl backdrop-blur-sm">
                    <span className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                    </span>
                    Ada pepatah: <span className="text-amber-300 font-semibold italic">"Guru adalah insinyur dari jiwa manusia."</span> Apa yang
                    dimaksud jiwa? Jiwa tidak memiliki wujud rupa. Semua manusia
                    memiliki jiwa, namun bagaimanakah mengaplikasikan jiwa dalam dirinya?
                  </p>

                  <p className="relative pl-6 border-l-4 border-yellow-400/50 bg-white/5 p-6 rounded-r-xl backdrop-blur-sm">
                    <span className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                    </span>
                    Saya berpendapat bahwa <span className="text-yellow-300 font-semibold">jiwa adalah kekuatan mental, roh yang kekal,
                    watak kodrati yang berhati nurani dan arif bijaksana.</span> Keajaiban jiwa
                    sangatlah sulit dijelaskan dengan kata-kata. <span className="text-amber-300 font-semibold">Jiwa bersumber dari
                    Tuhan, sungguh agung dan mulia.</span> Setiap individu perlu menghayati
                    secara mendalam, meningkatkan pembinaan diri sendiri secara
                    berkelanjutan, merealisasikan dengan konsisten, barulah dapat
                    menginsafi dan meyakini dengan sepenuh hati.
                  </p>

                  <p className="relative pl-6 border-l-4 border-green-400/50 bg-white/5 p-6 rounded-r-xl backdrop-blur-sm">
                    <span className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                    </span>
                    Butir pertama Pancasila, <span className="text-green-300 font-bold">"Ketuhanan Yang Maha Esa"</span> memiliki makna
                    yang sangat penting dan merupakan akar pokok dari moralitas dan
                    keharmonisan umat manusia. Pemahaman mendalam tentang Tuhan, selalu
                    bersyukur kepada Tuhan, takut dan hormat kepada Tuhan, dari sana
                    bangkitlah hati nurani. <span className="text-yellow-300 font-semibold">Kekuatan para pendidik untuk berjuang
                    sepanjang masa berasal dari dorongan hati nurani dan inspirasi dari
                    Tuhan yang tiada tara.</span> Pendidik adalah insinyur mulia dari jiwa
                    setiap anak didik yang sangat dihormati.
                  </p>

                  <p className="relative pl-6 border-l-4 border-amber-400/50 bg-white/5 p-6 rounded-r-xl backdrop-blur-sm text-xl leading-relaxed">
                    <span className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                    </span>
                    <span className="text-amber-300 font-bold">Pendidikan moralitas adalah tugas berat dan bersifat jangka panjang</span>,
                    dibutuhkan perhatian dari kita semua dan dukungan dari masyarakat
                    dan pemerintah untuk mencapai hasil yang efektif.
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