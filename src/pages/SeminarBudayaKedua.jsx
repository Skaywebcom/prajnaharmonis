import React from "react";
import Footer from "../components/Footer"; // pastikan path sesuai
import logo from "../../public/prajnaImages/logo.png"; // pastikan ada logo

const SeminarBudayaKedua = () => {
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
            src="/prajnaImages/seminarkedua/1.jpeg"
            alt="Seminar Budaya Kedua"
            className="w-full object-cover"
          />
        </div>

        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
            Seminar Pendidikan Moralitas dan Budaya Keharmonisan Kedua
          </h1>
          <p className="text-gray-300 text-lg">
            2 Februari 2013, Hotel Harmoni One, Kota Batam
          </p>
        </div>

        {/* Paragraphs */}
        <p className="text-gray-200">
          Seminar diselenggarakan oleh Yayasan Prajna Harmonis dan bekerja sama dengan Pusat Penelitian Kaderisasi Seni Budaya Universitas Beijing yang mendatangkan puluhan orang delegasi ke Kota Batam dalam rangka penyelenggaraan pameran pertukaran seni dan budaya generasi muda Indonesia – Tiongkok.
        </p>

        <p className="text-gray-200">
          Narasumber:<br/>
          Wakil Ketua Divisi Pendidikan “Sepuluh Etika Loyalitas Budaya Tionghoa” Kementerian Pendidikan Tiongkok, Ibu Liu Yuting,<br/>
          Kepala Sekolah Budaya Tradisional Hong Yuan, Hong Kong, Ibu Yi Fei<br/>
          Dosen Politeknik Republik Singapura, Dr. Gan Bo<br/>
          Dekan Fakultas Sastra Mandarin Universitas Ma Zhong, Kota Malang, Prof. Wang Gong Ping<br/>
          Pendiri Yayasan Prajna Harmonis, Bapak Taslim
        </p>

        <p className="text-gray-200">
          Para pembicara mengupas tema Pendidikan Moralitas dan Budaya Keharmonisan dari sudut pandang ilmu filsafat, sosial budaya, sains, dan teknologi, dan bermuara pada suatu kesepahaman bahwa pengamalan moralitas dan budaya keharmonisan merupakan kebutuhan dunia untuk menjamin keberlangsungan hidup dan perkembangan peradaban umat manusia.
        </p>

        {/* Grid 4 gambar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center">
            <img src="/prajnaImages/seminarkedua/2.jpeg" alt="Ibu Liu Yuting" className="w-full rounded-2xl shadow-lg" />
            <p className="text-yellow-400 mt-2">Ibu Liu Yuting</p>
          </div>
          <div className="text-center">
            <img src="/prajnaImages/seminarkedua/3.jpeg" alt="Ibu Yi Fei" className="w-full rounded-2xl shadow-lg" />
            <p className="text-yellow-400 mt-2">Ibu Yi Fei</p>
          </div>
          <div className="text-center">
            <img src="/prajnaImages/seminarkedua/4.jpeg" alt="Dr. Gan Bo" className="w-full rounded-2xl shadow-lg" />
            <p className="text-yellow-400 mt-2">Dr. Gan Bo</p>
          </div>
          <div className="text-center">
            <img src="/prajnaImages/seminarkedua/5.jpeg" alt="Bapak Taslim" className="w-full rounded-2xl shadow-lg" />
            <p className="text-yellow-400 mt-2">Bapak Taslim</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SeminarBudayaKedua;
