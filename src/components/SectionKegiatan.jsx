import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const kegiatanData = [
  {
    img: "/prajnaImages/kegiatan1.jpeg",
    title: "Seminar Budaya dan Peradaban Keharmonisan",
    desc: "Dunia sedang tidak baik-baik saja. Demikian Bapak Presiden Joko Widodo terus mengingatkan.",
    link: "/kegiatan/seminar-budaya-peradaban",
    category: "Seminar",
    date: "2023"
  },
  {
    img: "/prajnaImages/kegiatan2.jpeg",
    title: "Seminar Budaya Keharmonisan Pertama",
    desc: "Diselenggarakan oleh Yayasan Prajna Harmonis untuk membangun kesadaran budaya.",
    link: "/kegiatan/seminar-budaya-pertama",
    category: "Seminar",
    date: "2023"
  },
  {
    img: "/prajnaImages/kegiatan3.jpeg",
    title: "Taman Belajar Budaya Keharmonisan",
    desc: "Peserta Taman Belajar adalah generasi muda yang ingin memahami keharmonisan budaya.",
    link: "/kegiatan/taman-belajar",
    category: "Pendidikan",
    date: "2011"
  },
  {
    img: "/prajnaImages/kegiatan4.jpeg",
    title: "Festival Seni Pemuda Internasional 2018",
    desc: "Pada tanggal 4-5 Agustus 2018 diselenggarakan festival seni budaya internasional.",
    link: "/kegiatan/festival-seni-2018",
    category: "Festival",
    date: "2018"
  },
  {
    img: "/prajnaImages/kegiatan5.jpeg",
    title: "Pembukaan E-Learning S1 Mandarin",
    desc: "Acara pembukaan program E-Learning S1 Pendidikan Mandarin kerjasama dengan Universitas Ji Nan.",
    link: "/kegiatan/e-learning-s1",
    category: "Pendidikan",
    date: "2015"
  },
  {
    img: "/prajnaImages/kegiatan6.jpeg",
    title: "Beasiswa Program S2 Overseas Chinese Education",
    desc: "Para mahasiswa S1 dan S2 menyambut program beasiswa untuk melanjutkan studi.",
    link: "/kegiatan/beasiswa-s2",
    category: "Beasiswa",
    date: "2015"
  },
  {
    img: "/prajnaImages/kegiatan7.jpeg",
    title: "Seminar Budaya Keharmonisan Ketiga",
    desc: "Seminar diselenggarakan beriringan dengan program pengembangan karakter muda.",
    link: "/kegiatan/seminar-budaya-ketiga",
    category: "Seminar",
    date: "2015"
  },
  {
    img: "/prajnaImages/kegiatan8.jpeg",
    title: "Pertukaran Seni Budaya Indonesia-Tiongkok",
    desc: "Panitia penyelenggara: Asosiasi Penelitian dan pengembangan budaya dua negara.",
    link: "/kegiatan/pertukaran-seni-budaya",
    category: "Pertukaran",
    date: "2013"
  },
  {
    img: "/prajnaImages/kegiatan9.jpeg",
    title: "Seminar Budaya Keharmonisan Kedua",
    desc: "Seminar diselenggarakan oleh Yayasan Prajna Harmonis untuk memperkuat nilai-nilai budaya.",
    link: "/kegiatan/seminar-budaya-kedua",
    category: "Seminar",
    date: "2013"
  },
];

const SectionKegiatan = () => {
  return (
    <section
      id="kegiatan"
      className="relative py-20 px-6 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/prajnaImages/background/7.png')" }}
    >
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/50"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-32 h-32 border border-yellow-400/30 rotate-45 rounded-3xl"></div>
        <div className="absolute bottom-32 right-1/4 w-20 h-20 border border-green-500/40 -rotate-12 rounded-2xl"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-yellow-400/10 rotate-30 rounded-xl"></div>
        <div className="absolute bottom-1/4 left-16 w-24 h-24 bg-green-500/10 -rotate-45 rounded-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-white">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16">
          {/* Decorative Top Line */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-32"></div>
            <div className="mx-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-yellow-400 rotate-45"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-300"></div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-32"></div>
          </div>

          {/* Main Title */}
          <h2
            className="text-5xl md:text-6xl lg:text-7xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400"
            style={{
              fontFamily: "'Great Vibes', cursive",
              paddingTop: "0.25em",
              paddingBottom: "0.25em",
              filter: "drop-shadow(2px 2px 8px rgba(0,0,0,0.5))",
            }}
          >
            Acara dan Kegiatan
          </h2>

          {/* Subtitle */}
          <h3 
            className="text-2xl md:text-3xl text-gray-200 mb-2 -mt-4"
            style={{
              fontFamily: "Playfair Display, serif",
              textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
            }}
          >
            Laporan Acara dan Kegiatan Yayasan
          </h3>

          {/* Decorative Divider */}
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400 mx-auto rounded-full"></div>
        </div>
        </div>

        {/* Enhanced Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
              1280: { slidesPerView: 4, spaceBetween: 32 },
            }}
            className="pb-20"
          >
            {kegiatanData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="group h-full">
                  {/* Card Container */}
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-yellow-400/10 transition-all duration-500 hover:bg-white/8 hover:border-yellow-400/30 hover:-translate-y-2 h-full flex flex-col">
                    
                    {/* Image Container */}
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-yellow-400/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-xs font-semibold border border-yellow-400">
                        {item.category}
                      </div>
                      
                      {/* Date Badge */}
                      <div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-green-500">
                        {item.date}
                      </div>
                      
                      {/* Hover Arrow */}
                      <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Title */}
                      <h3 className="text-lg font-bold text-yellow-400 mb-3 group-hover:text-yellow-300 transition-colors duration-300 line-clamp-2">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow group-hover:text-gray-200 transition-colors duration-300 line-clamp-3">
                        {item.desc}
                      </p>

                      {/* CTA Button */}
                      <div className="mt-auto">
                        <a
                          href={item.link}
                          className="group/button inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-green-500 text-black font-semibold rounded-xl hover:from-yellow-300 hover:to-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/25 transform hover:scale-105"
                        >
                          <span className="text-sm tracking-wide">BACA SELENGKAPNYA</span>
                          <svg className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="h-1 bg-gradient-to-r from-yellow-400 via-green-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Enhanced Custom Navigation Buttons */}
          <div className="flex justify-center items-center -mt-12 gap-4">
            <button className="swiper-button-prev-custom group relative bg-white/10 backdrop-blur-sm border border-white/20 text-yellow-400 w-14 h-14 rounded-full shadow-lg hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 hover:shadow-yellow-400/25 hover:scale-110">
              <svg className="w-6 h-6 mx-auto transition-transform duration-300 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Progress Indicator */}
            <div className="flex items-center gap-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-yellow-400' : 'bg-white/30'} transition-all duration-300`}></div>
              ))}
            </div>

            <button className="swiper-button-next-custom group relative bg-white/10 backdrop-blur-sm border border-white/20 text-green-400 w-14 h-14 rounded-full shadow-lg hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300 hover:shadow-green-500/25 hover:scale-110">
              <svg className="w-6 h-6 mx-auto transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        
      

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
        
        .fancy-text {
          font-family: 'Playfair Display', serif;
        }
        
        /* Custom line clamp utility */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Hide default Swiper buttons */
        .swiper-button-next,
        .swiper-button-prev {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default SectionKegiatan;