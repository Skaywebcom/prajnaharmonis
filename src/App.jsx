// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LanguageSelector from "./components/LanguageSelector";
import HomeIndonesia from "./pages/HomeIndonesia";
import HomeChinese from "./pages/HomeChinese";

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

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
