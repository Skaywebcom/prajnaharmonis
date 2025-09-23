import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SectionPendidikanEtika = () => {
  // Variants slide dari kiri ke kanan
  const slideInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: (i = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const books = [
    { src: "/prajnaImages/jilid1.png", title: "Jilid 1", subtitle: "Fondasi Moral", link: "/jilid1" },
    { src: "/prajnaImages/jilid2.jpeg", title: "Jilid 2", subtitle: "Pengembangan Etika", link: "/jilid2" },
    { src: "/prajnaImages/jilid3.png", title: "Jilid 3", subtitle: "Implementasi Nilai", link: "/jilid3" },
  ];

  return (
    <>
      {/* Section Pendidikan Moral Etika */}
      <section
        id="pendidikan-etika"
        className="relative bg-cover bg-center py-20 px-6 overflow-hidden"
        style={{ backgroundImage: "url('/prajnaImages/background/5.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
          >
            {/* Decorative Line */}
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-24"></div>
              <div className="mx-4 w-3 h-3 bg-yellow-400 rotate-45"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-24"></div>
            </div>

            {/* Title */}
            <h2
              className="text-5xl md:text-6xl lg:text-7xl -mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400"
              style={{
                fontFamily: "'Great Vibes', cursive",
                paddingTop: "0.25em",
                filter: "drop-shadow(2px 2px 8px rgba(0,0,0,0.5))",
              }}
            >
              Pendidikan Moral Etika
            </h2>

            {/* Subtitle */}
            <div className="relative">
              <p
                className="text-xl md:text-2xl text-gray-100 font-light tracking-wider mb-2"
                style={{
                  fontFamily: "Playfair Display, serif",
                  textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
                }}
              >
                Buku Pendidikan Moral Etika
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400 mx-auto rounded-full"></div>
            </div>
          </motion.div>

          {/* 3 Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto -mt-8">
            {books.map((book, index) => (
              <motion.div
                key={index}
                className="group"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={slideInLeft}
              >
                <Link to={book.link}>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:bg-white/10 hover:border-yellow-400/30 hover:shadow-2xl hover:shadow-yellow-400/10 hover:-translate-y-2">
                    <div className="relative mb-6 overflow-hidden rounded-xl">
                      <img
                        src={book.src}
                        alt={book.title}
                        className="w-full h-80 object-contain transform transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                        {book.title}
                      </h3>
                      <p className="text-gray-300 font-medium text-sm tracking-wide">
                        {book.subtitle}
                      </p>
                    </div>
                    <div className="absolute top-4 left-4 w-8 h-8 bg-yellow-400/20 backdrop-blur-sm rounded-full flex items-center justify-center text-yellow-400 font-bold text-sm border border-yellow-400/30">
                      {index + 1}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideInLeft}
          >
            <div className="inline-flex items-center gap-2 text-gray-300 text-sm tracking-wider">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Membangun Karakter Melalui Pendidikan Moral</span>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Krisis Dunia */}
      <section
        id="krisis-dunia"
        className="relative bg-cover bg-center py-32 px-6 overflow-hidden"
        style={{ backgroundImage: "url('/prajnaImages/krisisbg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/60"></div>
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
              <blockquote
                className="text-3xl md:text-4xl lg:text-5xl leading-relaxed text-gray-100 font-light tracking-wide relative z-10"
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
                }}
              >
                <span className="text-yellow-400 font-medium">Krisis dunia</span> pada dasarnya berakar dari{" "}
                <span className="text-green-400 font-medium">krisis moralitas</span> dan hati manusia, sehingga semakin menjauh dari keharmonisan.{" "}
                <span className="text-yellow-400 font-medium">Keharmonisan dunia</span> perlu diawali dari{" "}
                <span className="text-green-400 font-medium">keharmonisan hati manusia</span>.
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SectionPendidikanEtika;
