import React from "react";
import Footer from "../components/Footer"; // pastikan path sesuai
import logo from "../../public/prajnaImages/logo.png"; // pastikan ada logo

const TamanBelajar = () => {
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
            Taman Belajar Budaya Kerharmonisan dan Bahasa Mandarin
          </h1>
          <p className="text-gray-300 text-lg">
            16-18 Desember 2011, Hotel Batam City Condominium, Kota Batam
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full overflow-hidden rounded-3xl shadow-lg">
          <img
            src="/prajnaImages/tamanbelajar/1.jpeg"
            alt="Taman Belajar"
            className="w-full object-cover"
          />
        </div>

        {/* Paragraphs */}
        <div className="space-y-6 text-gray-200">
          <p>Menyebarluaskan Budaya Keharmonisan dan Membentuk Masyarakat Damai Harmonis</p>

          <p>
            Peserta Taman Belajar adalah 90 pelajar kelas IV-VI SD di Batam yang berasal dari:
            <br />
            Sekolah Cahaya Bangsa
            <br />
            Sekolah Charitas
            <br />
            Sekolah Harapan Utama
            <br />
            Sekolah Kallista
            <br />
            Sekolah Maitreyawira
            <br />
            Sekolah Mondial
            <br />
            Sekolah Permata Harapan
            <br />
            Sekolah Theodore
            <br />
            Sekolah Yos Sudarso
          </p>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/prajnaImages/tamanbelajar/2.jpeg" alt="Taman Belajar 2" className="w-full rounded-2xl shadow-lg"/>
            <img src="/prajnaImages/tamanbelajar/3.jpeg" alt="Taman Belajar 3" className="w-full rounded-2xl shadow-lg"/>
          </div>

          <p>
            Dengan metode dan materi pembelajaran yang bervariasi dan menarik, disertai aktivitas, permainan dan perlombaan, semua peserta didik sangat menikmati proses dan hasil pembelajaran yang diselenggarakan selama tiga hari tersebut.
          </p>

          {/* Remaining Images - 6 gambar, 3 baris 2 kolom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/prajnaImages/tamanbelajar/4.jpeg" alt="Taman Belajar 4" className="w-full rounded-2xl shadow-lg"/>
            <img src="/prajnaImages/tamanbelajar/5.jpeg" alt="Taman Belajar 5" className="w-full rounded-2xl shadow-lg"/>
            <img src="/prajnaImages/tamanbelajar/6.jpeg" alt="Taman Belajar 6" className="w-full rounded-2xl shadow-lg"/>
            <img src="/prajnaImages/tamanbelajar/7.jpeg" alt="Taman Belajar 7" className="w-full rounded-2xl shadow-lg"/>
            <img src="/prajnaImages/tamanbelajar/8.jpeg" alt="Taman Belajar 8" className="w-full rounded-2xl shadow-lg"/>
            <img src="/prajnaImages/tamanbelajar/9.jpeg" alt="Taman Belajar 9" className="w-full rounded-2xl shadow-lg"/>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TamanBelajar;
