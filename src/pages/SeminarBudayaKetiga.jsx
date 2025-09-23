import React from "react";
import Footer from "../components/Footer"; // pastikan path sesuai
import logo from "../../public/prajnaImages/logo.png"; // pastikan ada logo

const SeminarBudayaKetiga = () => {
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
            src="/prajnaImages/seminarketiga/1.jpeg"
            alt="Seminar Budaya Ketiga"
            className="w-full object-cover"
          />
        </div>

        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
            Seminar Pendidikan Moralitas dan Budaya Keharmonisan Ketiga
          </h1>
          <p className="text-gray-300 text-lg">
            24-25 Januari 2015, Batam Centre Hotel, Kota Batam
          </p>
        </div>

        {/* Paragraph */}
        <p className="text-gray-200">
          Seminar diselenggarakan beriringan dengan program pendidikan karakter yang dicanangkan Presiden Republik Indonesia, Ir. H. Joko Widodo dalam pembangunan bangsa kedepan. Yayasan Prajna Harmonis sebagai penyelenggara, memfasilitasi pertemuan para peneliti dan pemerhati pendidikan moral dan karakter, mengundang pimpinan organisasi masyarakat dan lembaga pendidikan untuk bersama-sama berpartisipasi aktif untuk mencapai aplikasi pendidikan moral dan karakter yang semakin efektif untuk generasi sekarang dan yang akan datang.
        </p>

        {/* Image 2 dengan subtitle */}
        <div className="text-center">
          <div className="w-full overflow-hidden rounded-3xl shadow-lg mb-2">
            <img
              src="/prajnaImages/seminarketiga/2.jpeg"
              alt="Bapak Qurniadi M.Pd"
              className="w-full object-cover"
            />
          </div>
          <p className="text-yellow-400 font-semibold">Bapak Qurniadi M.Pd</p>
        </div>

        {/* Paragraph */}
        <p className="text-gray-200">
          Seminar dihadiri peserta dari 4 provinsi, 16 sekolah yang terdiri dari kepala sekolah, guru, serta tokoh masyarakat. Perwakilan kepala dinas pendidikan Kota Batam, Qurniadi M.Pd, dalam kata sambutannya menyambut baik serta mengungkapkan apresiasi atas seminar pendidikan moral dan karakter yang diselenggarakan oleh Yayasan Prajna Harmonis.
        </p>

        {/* 2 Gambar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src="/prajnaImages/seminarketiga/3.jpeg" alt="Seminar 3" className="w-full rounded-2xl shadow-lg" />
          <img src="/prajnaImages/seminarketiga/4.jpeg" alt="Seminar 4" className="w-full rounded-2xl shadow-lg" />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SeminarBudayaKetiga;
