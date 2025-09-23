import React from "react";
import Footer from "../components/Footer"; // pastikan path sesuai
import logo from "../../public/prajnaImages/logo.png"; // pastikan ada logo

const SeminarBudayaPertama = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header / Logo */}
      <header className="flex items-center p-6 bg-gray-800 shadow-md">
        <img src={logo} alt="Yayasan Prajna Harmonis" className="h-12 w-auto" />
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
            Seminar Pendidikan Moralitas dan Budaya Keharmonisan Pertama
          </h1>
          <p className="text-gray-300 text-lg">
            17 Desember 2011, Hotel Batam City Condominium, Kota Batam
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full overflow-hidden rounded-3xl shadow-lg">
          <img
            src="/prajnaImages/seminarpertama/1.jpeg"
            alt="Seminar Budaya Pertama"
            className="w-full object-cover"
          />
        </div>

        {/* Paragraphs */}
        <div className="space-y-6 text-gray-200">
          <p>
            Diselenggarakan oleh Yayasan Prajna Harmonis dan Asosiasi Pendidikan Klasik Batam
          </p>

          <p>
            <strong>Pembicara:</strong>
            <br />
            Pendiri Yayasan Prajna Harmonis, Bapak Taslim
            <br />
            Pembina Asosiasi Penelitian Ajaran Konfusianisme Malaysia, Bapak Chen Qi Sheng
            <br />
            Ketua Asosiasi Pendidikan Klasik Batam, Bapak Liang Wen Feng
            <br />
            Dekan Fakultas Sastra Mandarin Universitas Ma Zhong, Kota Malang, Prof. Wang Gong Ping
            <br />
            Dosen Republic Polytechnic, Singapura, Prof. Gan Bo
          </p>

          <p>
            Para pembicara mengupas pentingnya dan cara pencapaian keharmonisan dari perspektif filsafat dan ideologi maupun sains dan ilmu pengetahuan.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SeminarBudayaPertama;
