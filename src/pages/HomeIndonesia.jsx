import React from "react";
import Navbar from "../components/Navbar";
import SectionBeranda from "../components/SectionBeranda";
import SectionTentang from "../components/SectionTentang";
import SectionBudaya from "../components/SectionBudaya";
import SectionPendidikan from "../components/SectionPendidikan";
import SectionKegiatan from "../components/SectionKegiatan";
import SectionContact from "../components/SectionContact";
import Footer from "../components/Footer";
import SectionSambutan from "../components/SectionSambutan";
import SectionKedamaian from "../components/SectionKedamaian";
import SectionVisiMisi from "../components/SectionVisiMisi";
import StrukturOrganisasi from "../components/StrukturOrganisasi";
import SectionArtikel from "../components/SectionArtikel";
import SectionPendidikanEtika from "../components/SectionPendidikanEtika";
import SectionPendidikanMandarin from "../components/SectionPendidikanMandarin";
import SectionMitra from "../components/SectionMitra";
import SectionMitraSekolah from "../components/SectionMitraSekolah";

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
        <SectionKedamaian />
        <SectionVisiMisi />
        <StrukturOrganisasi />
      </section>

      <section id="budaya" className="scroll-mt-20">
        <SectionBudaya />
        <SectionArtikel />
      </section>

      <section id="pendidikan" className="scroll-mt-20">
        <SectionPendidikan />
        <SectionPendidikanEtika />
        <SectionPendidikanMandarin />
      </section>

      <section id="kegiatan" className="scroll-mt-20">
        <SectionKegiatan />
        <SectionMitra />
        <SectionMitraSekolah />
      </section>

      <section id="hubungi" className="scroll-mt-20">
        <SectionContact />
      </section>

      <Footer />
    </div>
  );
};

export default HomeIndonesia;
