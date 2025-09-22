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
      <SectionBeranda />
      <SectionTentang />
      <SectionSambutan />
      <SectionKedamaian />
      <SectionVisiMisi />
      <StrukturOrganisasi />
      <SectionBudaya />
      <SectionArtikel />
      <SectionPendidikan />
      <SectionPendidikanEtika />
      <SectionPendidikanMandarin />
      <SectionKegiatan />
      <SectionMitra />
      <SectionMitraSekolah />
      <SectionContact />
      <Footer />
    </div>
  );
};

export default HomeIndonesia;

