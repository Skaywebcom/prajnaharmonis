import React from "react";

const SectionPendidikanMandarin = () => {
  return (
    <section
  id="pendidikan-mandarin"
  className="relative py-20 px-6 bg-cover bg-center overflow-hidden"
  style={{ backgroundImage: "url('/prajnaImages/background/6.png')" }} // <- Ganti di sini
>
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-black/45"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 right-20 w-40 h-40 border border-yellow-400/20 rotate-45 rounded-3xl"></div>
        <div className="absolute bottom-20 left-16 w-24 h-24 border border-green-500/25 -rotate-12 rounded-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-yellow-400/10 rotate-45 rounded-lg"></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-green-500/10 -rotate-30 rounded-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          {/* Decorative Top Line */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent w-32"></div>
            <div className="mx-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-4 h-4 bg-green-500 rotate-45"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent w-32"></div>
          </div>

          {/* Enhanced Title */}
<h2
  className="text-5xl md:text-6xl lg:text-7xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400"
  style={{
    fontFamily: "'Great Vibes', cursive",
    paddingTop: "0.25em",
    filter: "drop-shadow(2px 2px 8px rgba(0,0,0,0.5))",
  }}
>
  Pendidikan Mandarin
</h2>

{/* Enhanced Subtitle */}
<h3
  className="text-2xl md:text-3xl text-gray-200 mb-4"
  style={{
    fontFamily: "Playfair Display, serif",
    textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
  }}
>
  Program E-Learning S1 Pendidikan Mandarin
</h3>

<p className="text-lg md:text-xl text-yellow-300 font-medium mb-6">
  Universitas Ji Nan, Guangzhou, Tiongkok
</p>

{/* Decorative Divider */}
<div className="w-32 h-1 bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400 mx-auto rounded-full"></div>

        </div>

        {/* Enhanced Content Section 1: Left Image, Right Content */}
        <div className="mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Container */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-green-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-4 group-hover:border-yellow-400/30 transition-all duration-500">
                <img
                  src="/prajnaImages/mandarin1.jpeg"
                  alt="Universitas Ji Nan"
                  className="rounded-2xl w-full object-cover shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
                />
                
                
              </div>
            </div>

            {/* Content Container */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-yellow-400/20 transition-all duration-500">
                {/* Section Indicator */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-12 bg-gradient-to-b from-yellow-400 to-green-500 rounded-full"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-400">Kemitraan Resmi</h3>
                    <p className="text-green-400 text-sm">Program Terakreditasi</p>
                  </div>
                </div>

                <div className="space-y-6 text-gray-100">
                  {[
                    "Universitas Ji Nan memperoleh izin resmi untuk menyelenggarakan Pendidikan Mandarin di Indonesia melalui program E-Learning S1 Pendidikan Mandarin.",
                    "Di kota Batam, Universitas Ji Nan bekerja sama dengan Yayasan Prajna Harmonis untuk penyelenggaraan program E-Learning wilayah provinsi Riau, Kepulauan Riau, dan Bali.",
                    "Kerja sama dengan Universitas Ji Nan merupakan salah satu upaya Yayasan Prajna Harmonis dalam pembinaan kader di bidang pendidikan, pengembangan sumber daya pengajar Bahasa Mandarin serta peningkatan kualitas pendidikan dan efektivitas metode pengajaran."
                  ].map((text, index) => (
                    <div key={index} className="flex gap-4 items-start group">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 group-hover:bg-green-400 transition-colors duration-300"></div>
                      <p className="text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Content Section 2: Right Image, Left Content */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Container - Order adjusted for responsive */}
            <div className="lg:order-1 order-2 space-y-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-4 hover:bg-white/8 hover:border-green-500/20 transition-all duration-500">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-yellow-400 rounded-full"></div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-400 fancy-text">
                      Lokasi Program E-Learning
                    </h3>
                    <p className="text-yellow-400 text-sm font-medium">Pendidikan Mandarin</p>
                  </div>
                </div>

                {/* Enhanced Location List */}
                <div className="grid gap-4">
                  {[
                    { name: "Pekanbaru", province: "Riau", icon: "🏛️" },
                    { name: "Batam", province: "Kepulauan Riau", icon: "🌊" },
                    { name: "Bali", province: "Bali", icon: "🏝️" }
                  ].map((location, index) => (
                    <div key={index} className="group flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-yellow-400/30 hover:bg-white/10 transition-all duration-300">
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {location.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                          {location.name}
                        </h4>
                        <p className="text-green-400 text-sm">{location.province}</p>
                      </div>
                      <div className="w-0 group-hover:w-2 h-8 bg-gradient-to-b from-yellow-400 to-green-500 rounded-full transition-all duration-500"></div>
                    </div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="mt-6 p-4 bg-gradient-to-r from-yellow-400/10 to-green-500/10 rounded-xl border border-yellow-400/20">
                  <div className="flex items-center gap-2 text-yellow-400 text-sm font-medium">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Program tersedia di 3 lokasi strategis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Container - Order adjusted for responsive */}
            <div className="lg:order-2 order-1 group relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-yellow-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-4 group-hover:border-green-500/30 transition-all duration-500">
                <img
                  src="/prajnaImages/mandarin2.jpeg"
                  alt="Lokasi Pendidikan Mandarin"
                  className="rounded-2xl w-full object-cover shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
                />
                
                {/* Image Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-sm rounded-xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-green-400 font-semibold text-sm">Lokasi Program</p>
                  <p className="text-gray-300 text-xs">Pekanbaru • Batam • Bali</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-8 py-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm tracking-wider">Program E-Learning Terakreditasi</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-sm font-medium">Universitas Ji Nan</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
        
        .fancy-text {
          font-family: 'Playfair Display', serif;
        }
        
        /* Custom hover animations */
        .group:hover .animate-pulse {
          animation-duration: 0.8s;
        }
      `}</style>
    </section>
  );
};

export default SectionPendidikanMandarin;