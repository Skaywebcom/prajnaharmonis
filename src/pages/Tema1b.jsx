import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Tema1b = () => {
  const images = [
    "/prajnaImages/jilid3/tema1/1.png",
    "/prajnaImages/jilid3/tema1/2.png",
    "/prajnaImages/jilid3/tema1/3.png",
    "/prajnaImages/jilid3/tema1/4.png",
    "/prajnaImages/jilid3/tema1/5.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState(1); // 1 = next, -1 = prev

  const pageFlipSound = new Audio("/sounds/page-flip.mp3");

  // Fungsi flip halaman
  const flipPage = (direction) => {
    if (isFlipping) return;
    setIsFlipping(true);
    setFlipDirection(direction);

    pageFlipSound.currentTime = 0;
    pageFlipSound.play();

    setTimeout(() => {
      setCurrentIndex((prev) =>
        direction > 0
          ? (prev + 1) % images.length
          : (prev - 1 + images.length) % images.length
      );
      setIsFlipping(false);
    }, 600); // durasi animasi lipatan
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") flipPage(1);
      if (e.key === "ArrowLeft") flipPage(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFlipping]);

  // Variants animasi lipatan
  const variants = {
    initial: { rotateY: 0, opacity: 1 },
    flipping: (direction) => ({
      rotateY: direction > 0 ? -180 : 180,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    }),
  };

  return (
    <div className="w-screen h-screen overflow-hidden relative flex justify-center items-center perspective-1500 bg-gray-100">
      {/* Logo kiri atas */}
      <div className="absolute top-6 left-6 z-20">
        <img src="/prajnaImages/logo.png" alt="Logo" className="w-48 h-auto" />
      </div>

      {/* Buku */}
      <div className="flex-1 flex items-center justify-center relative w-full">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            custom={flipDirection}
            variants={variants}
            initial="initial"
            animate={isFlipping ? "flipping" : "initial"}
            style={{ transformStyle: "preserve-3d" }}
            className="relative w-[60vw] max-w-[900px] h-[80vh]"
          >
            <motion.img
              src={images[currentIndex]}
              alt={`Halaman ${currentIndex + 1}`}
              className="absolute w-full h-full object-contain rounded-lg backface-hidden"
            />
            <motion.img
              src={images[(currentIndex + 1) % images.length]}
              alt={`Halaman ${currentIndex + 2}`}
              className="max-w-[80vw] max-h-[80vh] object-contain shadow-lg rounded-lg rotateY-180 backface-hidden"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Tombol navigasi */}
      <button
        onClick={() => flipPage(-1)}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-3 shadow-lg z-10"
      >
        ◀
      </button>
      <button
        onClick={() => flipPage(1)}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-3 shadow-lg z-10"
      >
        ▶
      </button>

      {/* Halaman indicator */}
      <div className="absolute bottom-6 w-full text-center text-gray-600 font-medium">
        Halaman {currentIndex + 1} / {images.length}
      </div>

      <style>{`
        .perspective-1500 {
          perspective: 1500px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotateY-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default Tema1b;
