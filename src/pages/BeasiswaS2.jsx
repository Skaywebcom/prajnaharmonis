import React from "react";
import Footer from "../components/Footer"; // pastikan path sesuai
import logo from "../../public/prajnaImages/logo.png"; // pastikan ada logo

const BeasiswaS2 = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header / Logo */}
      <header className="flex items-center p-6 bg-gray-800 shadow-md">
        <img src={logo} alt="Yayasan Prajna Harmonis" className="h-12 w-auto" />
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Hero Image */}
        <div className="w-full overflow-hidden rounded-3xl shadow-lg">
          <img
            src="/prajnaImages/beasiswa/1.jpeg"
            alt="Pembagian Beasiswa S2"
            className="w-full object-cover"
          />
        </div>

        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
            Pembagian Beasiswa Program S2 Overseas Chinese Education
          </h1>
          <p className="text-gray-300 text-lg">
            2 Februari 2015, Pacific Palace Hotel, Kota Batam
          </p>
        </div>

        {/* Paragraph */}
        <p className="text-gray-200">
          Para mahasiswa S1 dan S2 menyambut kedatangan perwakilan Yayasan Pendidikan Mandarin Tiongkok, Ibu Li Xiao Mei dan para dosen serta ketua bidang akademik Universitas Jinan, Guangzhou – Tiongkok dalam rangka pembagian beasiswa program S2 Overseas China Education kepada tigabelas orang penerima beasiswa.
        </p>

        {/* 2 Gambar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src="/prajnaImages/beasiswa/2.jpeg" alt="Beasiswa 2" className="w-full rounded-2xl shadow-lg" />
          <img src="/prajnaImages/beasiswa/3.jpeg" alt="Beasiswa 3" className="w-full rounded-2xl shadow-lg" />
        </div>

        {/* Paragraph */}
        <p className="text-gray-200">
          Dalam rangka meningkatkan kompetensi dan keterampilan Bahasa Mandarin dan mendorong kemajuan sektor ekonomi dan pariwisata Indonesia, Yayasan Prajna Harmonis bekerja sama dengan Universitas Jinan dalam penyelenggaraan program S1 maupun S2 yang menyediakan beasiswa fee kuliah sebesar 50% hingga 100%.
        </p>

        <p className="text-gray-200">
          Para mahasiswa S1 dan S2 menyambut kedatangan perwakilan Yayasan Pendidikan Mandarin Tiongkok, Ibu Li Xiao Mei dan para dosen serta ketua bidang akademik Universitas Jinan, Guangzhou – Tiongkok dalam rangka pembagian beasiswa program S2 Overseas China Education kepada tigabelas orang penerima beasiswa.
        </p>

        {/* Gambar 1 full */}
        <div className="w-full overflow-hidden rounded-3xl shadow-lg">
          <img src="/prajnaImages/beasiswa/4.jpeg" alt="Beasiswa 4" className="w-full object-cover" />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BeasiswaS2;
