import React from "react";
import NavbarChinese from "../components/NavbarChinese";
import SectionBerandaChinese from "../components/SectionBerandaChinese";
import SectionTentangChinese from "../components/SectionTentangChinese";
import SectionBudayaChinese from "../components/SectionBudayaChinese";
import SectionPendidikanChinese from "../components/SectionPendidikanChinese";
import SectionKegiatanChinese from "../components/SectionKegiatanChinese";
import SectionContactChinese from "../components/SectionContactChinese";
import FooterChinese from "../components/FooterChinese";
import SectionSambutanChinese from "../components/SectionSambutanChinese";
import SectionKedamaianChinese from "../components/SectionKedamaianChinese";
import SectionVisiMisiChinese from "../components/SectionVisiMisiChinese";
import StrukturOrganisasiChinese from "../components/StrukturOrganisasiChinese";
import SectionArtikelChinese from "../components/SectionArtikelChinese";
import SectionPendidikanEtikaChinese from "../components/SectionPendidikanEtikaChinese";
import SectionPendidikanMandarinChinese from "../components/SectionPendidikanMandarinChinese";
import SectionMitraChinese from "../components/SectionMitraChinese";
import SectionMitraSekolahChinese from "../components/SectionMitraSekolahChinese";

const HomeChinese = () => {
  return (
    <div className="font-sans">
      <NavbarChinese />

      <section id="beranda" className="scroll-mt-20">
        <SectionBerandaChinese />
      </section>

      <section id="tentang" className="scroll-mt-20">
        <SectionTentangChinese />
        <SectionSambutanChinese />
        <SectionKedamaianChinese />
        <SectionVisiMisiChinese />
        <StrukturOrganisasiChinese />
      </section>

      <section id="budaya" className="scroll-mt-20">
        <SectionBudayaChinese />
        <SectionArtikelChinese />
      </section>

      <section id="pendidikan" className="scroll-mt-20">
        <SectionPendidikanChinese />
        <SectionPendidikanEtikaChinese />
        <SectionPendidikanMandarinChinese />
      </section>

      <section id="kegiatan" className="scroll-mt-20">
        <SectionKegiatanChinese />
        <SectionMitraChinese />
        <SectionMitraSekolahChinese />
      </section>

      <section id="hubungi" className="scroll-mt-20">
        <SectionContactChinese />
      </section>

      <FooterChinese />
    </div>
  );
};

export default HomeChinese;
