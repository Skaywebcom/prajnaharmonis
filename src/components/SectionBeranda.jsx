import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SectionBeranda = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const sections = [
    {
      title: "Hakikat Keharmonisan",
      content:
        "Hukum kebenaran sifatnya hakiki dan konsisten sepanjang masa, senantiasa harmonis, bajik, tulus, dan indah."
    },
    {
      title: "Budaya Keharmonisan",
      content:
        "Interaksi antar keberagaman budaya yang harmonis di dunia, saling melengkapi dan mengapresiasi, berkembang dan berjaya bersama."
    },
    {
      title: "Dunia Harmonis",
      content:
        "Tercapainya keharmonisan antara manusia dengan alam semesta, segenap umat manusia hidup damai dan tentram sepanjang masa."
    }
  ];

  // Variants untuk fade-in per baris
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.8 // setiap baris muncul berurutan
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
  };

  return (
    <section
      id="beranda"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24"
      style={{
        backgroundImage: "url('/prajnaImages/beranda.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Main Content */}
      <motion.div
        className="relative z-20 max-w-4xl w-full space-y-4"
        style={{ y, opacity }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {sections.map((section, index) => (
          <motion.div key={index} className="space-y-2" variants={itemVariants}>
            {/* Title */}
            <motion.h2
              style={{
                fontFamily: "'Imperial Script', cursive",
                fontSize: "3rem",
                color: "#FFD700",
                WebkitTextStroke: "1px black",
                textShadow: "2px 2px 6px rgba(0,0,0,0.8)"
              }}
              variants={itemVariants}
            >
              {section.title}
            </motion.h2>
            {/* Content */}
            <motion.p
              className="text-lg md:text-xl"
              style={{
                color: "#E8F5E8",
                textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
                lineHeight: "1.2"
              }}
              variants={itemVariants}
            >
              {section.content}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SectionBeranda;
