import React from "react";
import Footer from "../components/Footer"; // pastikan path sesuai
import logo from "../../public/prajnaImages/logo.png"; // pastikan ada logo

const PertukaranSeniBudaya = () => {
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
            src="/prajnaImages/pertukaranseni/1.jpeg"
            alt="Pertukaran Seni Budaya"
            className="w-full object-cover"
          />
        </div>

        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
            Pameran Pertukaran Seni Budaya Generasi Muda Indonesia-Tiongkok
          </h1>
          <p className="text-gray-300 text-lg">
            3 Februari 2013, Auditorium Sekolah Maitreyawira, Kota Batam
          </p>
        </div>

        {/* Paragraphs */}
        <p className="text-gray-200">
          Panitia penyelenggara: Asosiasi Penelitian Kaderisasi Seni Budaya Tiongkok, Pusat Penelitian Kaderisasi Seni Budaya Universitas Beijing, Yayasan Prajna Harmonis, dan Sekolah Maitreyawira Batam.
        </p>

        <p className="text-gray-200">
          Pameran diisi dengan lebih dari 200 karya seni lukisan, kaligrafi, dan batik serta dimeriahkan dengan berbagai pertunjukan seni dan budaya oleh anak-anak Indonesia dan Tiongkok. Kegiatan ini menjadi ajang pertemuan 159 peserta muda Indonesia dan Tiongkok untuk saling mengenal, mengapresiasi, dan memahami seni dan budaya sesama bangsa dan negara, serta membangun tali persahabatan di antara generasi muda kedua negara.
        </p>

        {/* Grid 4 gambar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src="/prajnaImages/pertukaranseni/2.jpeg" alt="Pertukaran 2" className="w-full rounded-2xl shadow-lg" />
          <img src="/prajnaImages/pertukaranseni/3.jpeg" alt="Pertukaran 3" className="w-full rounded-2xl shadow-lg" />
          <img src="/prajnaImages/pertukaranseni/4.jpeg" alt="Pertukaran 4" className="w-full rounded-2xl shadow-lg" />
          <img src="/prajnaImages/pertukaranseni/5.jpeg" alt="Pertukaran 5" className="w-full rounded-2xl shadow-lg" />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PertukaranSeniBudaya;
