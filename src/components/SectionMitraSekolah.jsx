import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Phone } from "lucide-react";

const sekolahData = [
  {
    img: "/prajnaImages/sekolah1.jpeg",
    title: "Sekolah Dharma Maitreya",
    address: "Jl. Wonosari Tengah - Bengkalis",
    contact: "+62-766-22756",
  },
  {
    img: "/prajnaImages/sekolah2.jpeg",
    title: "Sekolah Metta Maitreya",
    address: "Jl. Tuanku Tambusai - Pekanbaru",
    contact: "+62-761-33296",
  },
  {
    img: "/prajnaImages/sekolah3.jpeg",
    title: "Sekolah Kasih Maitreya",
    address: "Jl. Teladan NO. 6A - Selat Panjang",
    contact: "+62-763-434232",
  },
  {
    img: "/prajnaImages/sekolah4.jpeg",
    title: "Sekolah Kasih Lestari",
    address: "Jl. Trimas Sakti No.7 - Tembilahan",
    contact: "+62-768-22873",
  },
  {
    img: "/prajnaImages/sekolah5.jpeg",
    title: "Sekolah Maitreyawira",
    address: "Jl. Semeru No.1166 - Palembang",
    contact: "+62-711-8395173",
  },
];

const SectionMitraSekolah = () => {
  const [startIndex, setStartIndex] = useState(0);

  const totalCards = sekolahData.length;

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % totalCards);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  // Ambil 4 card berurutan mulai dari startIndex
  const visibleCards = Array.from({ length: 4 }, (_, i) =>
    sekolahData[(startIndex + i) % totalCards]
  );

  return (
    <section
      className="relative py-20 px-6 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/prajnaImages/background/9.png')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-gray-900/80"></div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-green-200/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-300/10 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Header Section */}
        <div className="mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-600 mr-4"></div>
            <div className="w-3 h-3 rotate-45 bg-gradient-to-br from-yellow-500 to-yellow-600"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-600 ml-4"></div>
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
            Mitra Sekolah
          </h2>

          {/* Decorative Divider */}
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400 mx-auto rounded-full mb-6"></div>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto leading-relaxed font-light"
            style={{
              fontFamily: "Playfair Display, serif",
              textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
            }}
          >
            Jejaring institusi pendidikan berkualitas dari berbagai penjuru
            Indonesia yang berkomitmen pada nilai-nilai luhur
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-4 -mt-8">
          {visibleCards.map((item, index) => (
            <div
              key={index}
              className="group bg-white shadow-xl hover:shadow-2xl rounded-3xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 border border-gray-100/50"
            >
              {/* Image Container with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Golden accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-green-700 transition-colors duration-300 leading-snug">
                  {item.title}
                </h3>

                <div className="space-y-3 mt-auto">
                  <div className="flex items-start gap-3 text-gray-600">
                    <MapPin className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                    <p className="text-sm leading-relaxed">{item.address}</p>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                    <p className="text-sm font-medium">{item.contact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-8">
          <button
            onClick={handlePrev}
            className="group relative p-4 rounded-2xl bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
          >
            <ChevronLeft
              size={24}
              className="transform group-hover:-translate-x-1 transition-transform duration-200"
            />
            <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Indicator Dots */}
          <div className="flex gap-2">
            {sekolahData.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === startIndex
                    ? "bg-gradient-to-r from-yellow-500 to-yellow-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400 cursor-pointer"
                }`}
                onClick={() => setStartIndex(index)}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="group relative p-4 rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-white hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
          >
            <ChevronRight
              size={24}
              className="transform group-hover:translate-x-1 transition-transform duration-200"
            />
            <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionMitraSekolah;
