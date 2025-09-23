// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LanguageSelector from "./components/LanguageSelector";
import HomeIndonesia from "./pages/HomeIndonesia";
import HomeChinese from "./pages/HomeChinese";
import Jilid1 from "./pages/Jilid1";
import Jilid2 from "./pages/Jilid2";
import Jilid3 from "./pages/Jilid3";
import Tema1 from "./pages/Tema1";
import Tema2 from "./pages/Tema2";
import Tema1a from "./pages/Tema1a";
import Tema2a from "./pages/Tema2a";
import Tema1b from "./pages/Tema1b";
import Tema2b from "./pages/Tema2b";
// Import semua halaman kegiatan
import SeminarBudayaPeradaban from "./pages/SeminarBudayaPeradaban";
import SeminarBudayaPertama from "./pages/SeminarBudayaPertama";
import TamanBelajar from "./pages/TamanBelajar";
import FestivalSeni2018 from "./pages/FestivalSeni2018";
import ELearningS1 from "./pages/ELearningS1";
import BeasiswaS2 from "./pages/BeasiswaS2";
import SeminarBudayaKetiga from "./pages/SeminarBudayaKetiga";
import PertukaranSeniBudaya from "./pages/PertukaranSeniBudaya";
import SeminarBudayaKedua from "./pages/SeminarBudayaKedua";


function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <Router>
      <Routes>
        {/* Root - Language selector */}
        <Route
          path="/"
          element={<LanguageSelector onSelect={handleLanguageSelect} />}
        />

        {/* Home pages */}
        <Route
          path="/homeIndonesia"
          element={
            selectedLanguage === "id" ? (
              <HomeIndonesia />
            ) : (
              <LanguageSelector onSelect={handleLanguageSelect} />
            )
          }
        />
        <Route
          path="/homeChinese"
          element={
            selectedLanguage === "cn" ? (
              <HomeChinese />
            ) : (
              <LanguageSelector onSelect={handleLanguageSelect} />
            )
          }
        />

        {/* Jilid pages */}
        <Route path="/jilid1" element={<Jilid1 />} />
        <Route path="/jilid2" element={<Jilid2 />} />
        <Route path="/jilid3" element={<Jilid3 />} />

        {/* Tema pages */}
        <Route path="/jilid1/tema1" element={<Tema1 />} />
        <Route path="/jilid1/tema2" element={<Tema2 />} />
        <Route path="/jilid2/tema1" element={<Tema1a />} />
        <Route path="/jilid2/tema2" element={<Tema2a />} />
        <Route path="/jilid3/tema1" element={<Tema1b />} />
        <Route path="/jilid3/tema2" element={<Tema2b />} />

        {/* Halaman kegiatan */}
        <Route path="/kegiatan/seminar-budaya-peradaban" element={<SeminarBudayaPeradaban />} />
        <Route path="/kegiatan/seminar-budaya-pertama" element={<SeminarBudayaPertama />} />
        <Route path="/kegiatan/taman-belajar" element={<TamanBelajar />} />
        <Route path="/kegiatan/festival-seni-2018" element={<FestivalSeni2018 />} />
        <Route path="/kegiatan/e-learning-s1" element={<ELearningS1 />} />
        <Route path="/kegiatan/beasiswa-s2" element={<BeasiswaS2 />} />
        <Route path="/kegiatan/seminar-budaya-ketiga" element={<SeminarBudayaKetiga />} />
        <Route path="/kegiatan/pertukaran-seni-budaya" element={<PertukaranSeniBudaya />} />
        <Route path="/kegiatan/seminar-budaya-kedua" element={<SeminarBudayaKedua />} />


        {/* Catch-all redirect */}
        <Route path="*" element={<h1>Halaman tidak ditemukan</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
