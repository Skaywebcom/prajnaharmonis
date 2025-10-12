// components/LanguageSelector.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Globe, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const LanguageSelector = ({ onSelect }) => {
  const [hoveredLang, setHoveredLang] = useState(null);
  const navigate = useNavigate();

  const languages = [
    { code: "id", name: "Bahasa Indonesia", redirect: "/homeIndonesia" },
    { code: "cn", name: "中文", redirect: "/homeChinese" },
  ];

  const handleClick = (lang) => {
    const selected = languages.find((l) => l.code === lang);
    if (!selected) return;

    if (onSelect) onSelect(lang);
    navigate(selected.redirect);
  };

  // Variants for stagger animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden"
      style={{
        backgroundImage: "url('/prajnaImages/welcome.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4
                      bg-black/70 backdrop-blur-md border-b border-yellow-400/30 shadow-2xl z-30">
        <div className="transform transition-all duration-500 hover:scale-110 hover:rotate-3">
          <img
            src="/prajnaImages/logo.png"
            alt="Logo"
            className="w-52 h-auto drop-shadow-2xl filter brightness-110 contrast-110"
          />
        </div>
      </nav>

      {/* Center content/logo */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="/prajnaImages/text1.png"
          alt="Prajna Harmonis"
          className="w-[900px] h-[280px] object-contain filter drop-shadow-2xl brightness-110 contrast-110 -mb-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.p
  className="text-4xl md:text-5xl font-bold mb-10"
  style={{
    fontFamily: "'Great Vibes', cursive",
    color: "#FFD700", // gold
    fontWeight: "900",
    
    letterSpacing: "1px", // make it slightly wider
  }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1 }}
>
  Hakikat Keharmonisan ~ Budaya Keharmonisan ~ Dunia Harmonis
</motion.p>


        {/* Language Buttons Container */}
        <motion.div
          className="flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {languages.map((language, index) => (
            <motion.button
              key={index}
              onClick={() => handleClick(language.code)}
              onMouseEnter={() => setHoveredLang(index)}
              onMouseLeave={() => setHoveredLang(null)}
              variants={buttonVariants}
              className={`relative px-6 py-2 rounded-xl font-semibold text-lg
                transform transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105
                backdrop-blur-sm border border-white/20 cursor-pointer flex items-center gap-2
                ${hoveredLang === index
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white border-yellow-300 scale-110 shadow-yellow-400/50"
                  : "bg-white/95 text-gray-800 border-white/50 hover:bg-white hover:border-yellow-400/50"
                }`}
            >
              <span>{language.name}</span>
              <ArrowRight
                className={`w-5 h-5 transition-all duration-300 ${
                  hoveredLang === index
                    ? "text-white transform translate-x-1"
                    : "text-gray-600 group-hover:text-yellow-600 group-hover:translate-x-1"
                }`}
              />
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LanguageSelector;
