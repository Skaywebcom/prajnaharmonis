import React from "react";
import NavbarChinese from "../components/NavbarChinese";
import SectionBerandaChinese from "../components/SectionBerandaChinese";
import SectionTentangChinese from "../components/SectionTentangChinese";
import SectionBudayaChinese from "../components/SectionBudayaChinese";
import SectionBudayaChinese1 from "../components/SectionBudayaChinese1";
import SectionBudayaChinese2 from "../components/SectionBudayaChinese2";
import SectionBudayaChinese3 from "../components/SectionBudayaChinese3";
import SectionBudayaChinese4 from "../components/SectionBudayaChinese4";
import SectionBudayaChinese5 from "../components/SectionBudayaChinese5";
import SectionBudayaChinese6 from "../components/SectionBudayaChinese6";
import SectionBudayaChinese7 from "../components/SectionBudayaChinese7";
import SectionPendidikanChinese from "../components/SectionPendidikanChinese";
import SectionPendidikanChinese1 from "../components/SectionPendidikanChinese1";
import SectionPendidikanChinese2 from "../components/SectionPendidikanChinese2";
import SectionPendidikanChinese3 from "../components/SectionPendidikanChinese3";
import SectionPendidikanChinese4 from "../components/SectionPendidikanChinese4";
import SectionPendidikanChinese5 from "../components/SectionPendidikanChinese5";
import SectionContactChinese from "../components/SectionContactChinese";
import FooterChinese from "../components/FooterChinese";
import SectionSambutanChinese from "../components/SectionSambutanChinese";
import SectionVisiMisiChinese from "../components/SectionVisiMisiChinese";
import SectionArtikelChinese from "../components/SectionArtikelChinese";
import SectionArtikelChinese1 from "../components/SectionArtikelChinese1";
import SectionArtikelChinese2 from "../components/SectionArtikelChinese2";

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
        <SectionVisiMisiChinese />
      </section>

      <section id="budaya" className="scroll-mt-20">
        <SectionArtikelChinese1 />
        <SectionArtikelChinese />
        <SectionArtikelChinese2 />
      </section>

      <section id="pendidikan" className="scroll-mt-20">
        <SectionBudayaChinese />
        <SectionBudayaChinese1 />
        <SectionBudayaChinese2 />
        <SectionBudayaChinese3 />
        <SectionBudayaChinese4 />
        <SectionBudayaChinese5 />
        <SectionBudayaChinese6 />
        <SectionBudayaChinese7 />
        
      </section>

      <section id="kegiatan" className="scroll-mt-20">
        <SectionPendidikanChinese />
        <SectionPendidikanChinese1 />
        <SectionPendidikanChinese2 />
        <SectionPendidikanChinese3 />
        <SectionPendidikanChinese4 />
        <SectionPendidikanChinese5 />
        
      </section>

      <section id="hubungi" className="scroll-mt-20">
        <SectionContactChinese />
      </section>

      <FooterChinese />
    </div>
  );
};

export default HomeChinese;
