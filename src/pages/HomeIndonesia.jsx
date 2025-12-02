import React from "react";
import Navbar from "../components/Navbar";
import SectionBeranda from "../components/SectionBeranda";
import SectionTentang from "../components/SectionTentang";
import SectionPendidikan from "../components/SectionPendidikan";
import SectionContact from "../components/SectionContact";
import Footer from "../components/Footer";
import SectionSambutan from "../components/SectionSambutan";
import SectionVisiMisi from "../components/SectionVisiMisi";
import SectionArtikel from "../components/SectionArtikel";

const HomeIndonesia = () => {
  return (
    <div className="font-sans">
      <Navbar />

      <section id="beranda" className="scroll-mt-20">
        <SectionBeranda />
      </section>

      <section id="tentang" className="scroll-mt-20">
        <SectionTentang />
        <SectionSambutan />
        <SectionVisiMisi />
      </section>

      <section id="budaya" className="scroll-mt-20">
        <SectionArtikel />
      </section>

      <section id="pendidikan" className="scroll-mt-20">
        <SectionPendidikan />
      </section>

      <section id="kegiatan" className="scroll-mt-20">
      </section>

      <section id="hubungi" className="scroll-mt-20">
        <SectionContact />
      </section>

      <Footer />
    </div>
  );
};

export default HomeIndonesia;
