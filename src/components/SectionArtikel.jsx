import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const AnimatedElement = ({ children, className = "", delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    threshold: 0.3, 
    margin: "-100px 0px -100px 0px"
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      scale: 0.9,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const AnimatedText = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    threshold: 0.4, 
    margin: "-50px 0px -50px 0px"
  });

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: "blur(5px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SectionArtikel = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const detailRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
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

  const handleReadMore = (cardId) => {
    setSelectedArticle(cardId);
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleClose = () => {
    setSelectedArticle(null);
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const articleContent1 = [
    "Di zaman sekarang, ilmu dan teknologi sangatlah maju, dengan produk teknologi informasi yang berlimpah. Smartphone dan situs komputer menyebarkan informasi dengan cepat. Berbagai pandangan dan situs yang tidak sehat dengan mudah mencemari pola pikir anak didik, sebagai contoh: kecanduan narkoba, penyakit akibat pergaulan bebas, kejahatan, kekerasan dan perilaku buruk lainnya. Jika situasi ini terus berlanjut, konsekuensinya tidak terbayangkan.",
    '"Pendidikan moral" kini menjadi topik yang mendapat perhatian di seluruh dunia. Bagaimana melaksanakan pendidikan moral yang efektif bukanlah suatu tugas yang mudah. Meskipun saat ini terdapat banyak buku dan materi pendidikan moral, etika, karakter dan budi pekerti, disertai berbagai teori dan pembahasan oleh para pakar, namun situasinya masih mengkhawatirkan. Kunci dari isu ini ada di tangan pendidik. Namun lingkungan sosial dan praktek kenyataan saat ini memberikan beban yang cukup besar bagi pendidik. Persoalan mendasar adalah bagaimana membekali guru dengan mental yang kuat dan komitmen yang berkepanjangan.',
    'Ada pepatah: "Guru adalah insinyur dari jiwa manusia." Apa yang dimaksud jiwa? Jiwa tidak memiliki wujud rupa. Semua manusia memiliki jiwa, namun bagaimanakah mengaplikasikan jiwa dalam dirinya?',
    "Saya berpendapat bahwa jiwa adalah kekuatan mental, roh yang kekal, watak kodrati yang berhati nurani dan arif bijaksana. Keajaiban jiwa sangatlah sulit dijelaskan dengan kata-kata. Jiwa bersumber dari Tuhan, sungguh agung dan mulia. Setiap individu perlu menghayati secara mendalam, meningkatkan pembinaan diri sendiri secara berkelanjutan, merealisasikan dengan konsisten, barulah dapat menginsafi dan meyakini dengan sepenuh hati.",
    'Butir pertama Pancasila, "Ketuhanan Yang Maha Esa" memiliki makna yang sangat penting dan merupakan akar pokok dari moralitas dan keharmonisan umat manusia. Pemahaman mendalam tentang Tuhan, selalu bersyukur kepada Tuhan, takut dan hormat kepada Tuhan, dari sana bangkitlah hati nurani. Kekuatan para pendidik untuk berjuang sepanjang masa berasal dari dorongan hati nurani dan inspirasi dari Tuhan yang tiada tara. Pendidik adalah insinyur mulia dari jiwa setiap anak didik yang sangat dihormati.',
    "Pendidikan moralitas adalah tugas berat dan bersifat jangka panjang, dibutuhkan perhatian dari kita semua dan dukungan dari masyarakat dan pemerintah untuk mencapai hasil yang efektif."
  ];

  const articleContent2 = [
    "Kita semua mengetahui pentingnya keharmonisan. Energi dan aliran darah yang harmonis menjadikan tubuh kita sehat; keluarga yang harmonis mendatangkan kebahagiaan; masyarakat dan negara yang harmonis merupakan sumber kemajuan dan kesejahteraan.",
    'Pada era ini, manusia menghadapi berbagai tantangan terbesar sepanjang sejarah, perubahan iklim secara drastis, kelesuan ekonomi berkepanjangan, meledaknya populasi manusia, kelangkaan sumber daya, meningkatnya kriminalitas, dan berbagai masalah kehidupan lainnya. Apapun masalah dan tantangan yang dihadapi, "keharmonisan" merupakan dasar solusinya.',
    'Keharmonisan berasal dari pemahaman sejati atas etika dan moralitas. Negara Kesatuan Republik Indonesia adalah negara yang kaya akan keragaman suku, agama dan budaya. Kebijaksanaan nenek moyang Bangsa Indonesia yang melahirkan dasar negara "Pancasila" sebagai benteng pertahanan mental dan semangat semboyan "Bhinneka Tunggal Ika", telah mempersatukan bangsa Indonesia.',
    'Ajaran Konfusianisme dari budaya Tionghoa juga memiliki pepatah: "Keharmonisan di dalam Perbedaan". Sebuah pepatah ajaran Taoisme di dalam kitab suci Tao Te Ching menyebutkan: "Manusia hendaknya mempelajari sifat dan pribadi "Bumi", kemudian sifat dan pribadi "Langit", setelah itu mempelajari sifat dan pribadi "Tao", dan selanjutnya mengamalkan sifat dan pribadi yang "Wajar Alamiah". Alam semesta dan isinya merupakan sumber penelitian dan pengetahuan umat manusia, keharmonisan alam semesta yang "Sejati, Bajik, Indah". Persatuan dan keharmonisan yang seutuhnya diantara sesama umat manusia akan menjadi solusi bagi berbagai persoalan dan tantangan hidup, mengarahkan manusia menuju moralitas dan peradaban yang maju dan berkesinambungan.',
    "Saat ini adalah momen penting. Manusia semakin saling berhubungan satu sama lain dan semua orang memiliki tanggung jawab untuk bersama-sama memahami dan merealisasikan keharmonisan secara utuh dan nyata.",
    "Asalkan kita semua memiliki kepedulian terhadap keharmonisan, maka masa depan dunia yang cemerlang akan penuh dengan harapan. Semoga upaya Yayasan Prajna Harmonis dapat turut mendorong terciptanya keharmonisan masyarakat, bangsa dan negara Indonesia, keharmonisan antar negara bahkan se-dunia"
  ];

  return (
    <>
      {/* Content Detail di Atas */}
      <AnimatePresence>
        {selectedArticle === 1 && (
          <motion.section
  ref={detailRef}
  id="artikel-detail-1"
  className="relative min-h-screen bg-cover bg-center py-16 scroll-mt-20"
  style={{ backgroundImage: "url('/prajnaImages/background/15.png')" }}
>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-white space-y-8">
              <AnimatedElement delay={0.2} className="text-center">
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  KUNCI KEBERHASILAN PENDIDIKAN MORALITAS
                </h2>
              </AnimatedElement>

              <div className="space-y-6">
                {articleContent1.map((paragraph, index) => (
                  <AnimatedText
                    key={index}
                    delay={index * 0.15}
                    className="text-base md:text-lg leading-relaxed text-justify"
                  >
                    <p style={{ fontFamily: "Inter, sans-serif" }}>
                      {paragraph}
                    </p>
                  </AnimatedText>
                ))}
              </div>

              <AnimatedElement delay={1} className="text-center">
                <motion.button
                  onClick={handleClose}
                  className="mt-8 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Tutup
                </motion.button>
              </AnimatedElement>
            </div>
          </motion.section>
        )}

        {selectedArticle === 2 && (
          <motion.section
  ref={detailRef}
  id="artikel-detail-1"
  className="relative min-h-screen bg-cover bg-center py-16 scroll-mt-20"
  style={{ backgroundImage: "url('/prajnaImages/background/16.png')" }}
>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-white space-y-8">
              <AnimatedElement delay={0.2} className="text-center">
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  PENTINGNYA KEHARMONISAN
                </h2>
              </AnimatedElement>

              <div className="space-y-6">
                {articleContent2.map((paragraph, index) => (
                  <AnimatedText
                    key={index}
                    delay={index * 0.15}
                    className="text-base md:text-lg leading-relaxed text-justify"
                  >
                    <p style={{ fontFamily: "Inter, sans-serif" }}>
                      {paragraph}
                    </p>
                  </AnimatedText>
                ))}
              </div>

              <AnimatedElement delay={1} className="text-center">
                <motion.button
                  onClick={handleClose}
                  className="mt-8 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Tutup
                </motion.button>
              </AnimatedElement>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Section Artikel Utama */}
      <section
        ref={sectionRef}
        id="artikel-section"
        className="relative min-h-screen bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/prajnaImages/background/3.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100/90 via-white/85 to-green-50/90"></div>

        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <motion.div 
            className="absolute top-20 left-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-green-400 rounded-full blur-3xl"
            animate={{ 
              scale: [1.1, 1, 1.1],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute top-1/2 right-1/4 w-64 h-64 bg-amber-300 rounded-full blur-2xl"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-16">
          {/* Header */}
          <AnimatedElement delay={0.2} className="text-center mb-20">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-amber-500 to-green-600"
              style={{
                fontFamily: "'Great Vibes', cursive",
                paddingTop: "0.25em",
                filter: "drop-shadow(2px 2px 8px rgba(0,0,0,0.1))",
              }}
              animate={{
                backgroundPosition: ["0%", "100%", "0%"]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Artikel Keharmonisan
            </motion.h2>
            
            <AnimatedElement delay={0.4}>
              <p
                className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4 italic"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Artikel Budaya Keharmonisan
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={0.6}>
              <motion.div 
                className="w-32 h-1 bg-gradient-to-r from-yellow-500 via-amber-400 to-green-500 mx-auto rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "8rem" }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </AnimatedElement>
          </AnimatedElement>

          {/* Cards */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {cards.map((card, index) => (
                <AnimatedElement
                  key={card.id}
                  delay={index * 0.3}
                  direction={index % 2 === 0 ? "left" : "right"}
                  className="h-full"
                >
                  <motion.article
                    className="group relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl 
                               border border-white/20 overflow-hidden 
                               h-[420px] cursor-pointer"
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    whileHover={{ 
                      scale: 1.02,
                      rotateY: 5,
                      z: 50
                    }}
                    transition={{ duration: 0.4 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Default State */}
                    <motion.div
                      className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
                      animate={{
                        opacity: hoveredCard === card.id ? 0 : 1,
                        scale: hoveredCard === card.id ? 0.8 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.div 
                        className="w-32 h-32 mb-6 rounded-full overflow-hidden shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={card.img}
                          alt={card.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      
                      <motion.h3
                        className="text-lg md:text-xl font-bold text-gray-800 mb-4 leading-tight"
                        style={{ fontFamily: "Playfair Display, serif" }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                      >
                        {card.title}
                      </motion.h3>
                      
                      <motion.p
                        className="text-gray-600 leading-relaxed text-sm md:text-base line-clamp-4"
                        style={{ fontFamily: "Inter, sans-serif" }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                      >
                        {card.desc}
                      </motion.p>
                    </motion.div>

                    {/* Hover State */}
                    <motion.div
                      className="absolute inset-0 flex flex-col"
                      animate={{
                        opacity: hoveredCard === card.id ? 1 : 0,
                        scale: hoveredCard === card.id ? 1 : 1.2,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="relative h-48 w-full overflow-hidden">
                        <motion.img
                          src={card.img}
                          alt={card.title}
                          className="w-full h-full object-cover"
                          animate={{
                            scale: hoveredCard === card.id ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.6 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 flex items-center justify-center px-4">
                          <h3
                            className="text-xl md:text-2xl font-bold text-white text-center leading-snug"
                            style={{ fontFamily: "Playfair Display, serif" }}
                          >
                            {card.title}
                          </h3>
                        </div>
                      </div>
                      
                      <div className="p-6 flex flex-col justify-between flex-1">
                        <p
                          className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {card.desc}
                        </p>
                        
                        <motion.button
                          onClick={() => handleReadMore(card.id)}
                          className="group/btn px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 
                                     text-white font-semibold rounded-full 
                                     hover:from-yellow-400 hover:to-amber-400 
                                     shadow-lg hover:shadow-xl relative overflow-hidden"
                          style={{ fontFamily: "Inter, sans-serif" }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-300"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "0%" }}
                            transition={{ duration: 0.3 }}
                          />
                          <span className="flex items-center justify-center space-x-2 relative z-10">
                            <span>Baca Selengkapnya</span>
                            <motion.svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              animate={{ x: hoveredCard === card.id ? 5 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </motion.svg>
                          </span>
                        </motion.button>
                      </div>
                    </motion.div>
                  </motion.article>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionArtikel;