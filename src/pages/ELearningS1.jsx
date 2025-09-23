import React from "react";
import Footer from "../components/Footer"; // pastikan path sesuai
import logo from "../../public/prajnaImages/logo.png"; // pastikan ada logo

const ELearningS1 = () => {
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
            src="/prajnaImages/elearning/1.jpeg"
            alt="Pembukaan Program E-Learning S1"
            className="w-full object-cover"
          />
        </div>

        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
            Pembukaan Program E-Learning S1 Pendidikan Mandarin
          </h1>
          <p className="text-gray-300 text-lg">
            Lokasi Perkuliahan Bali<br />
            2 Februari 2015, Pacific Palace Hotel, Kota Batam
          </p>
        </div>

        {/* List of attendees */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Acara pembukaan program E-Learning ini dihadiri oleh:</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Ketua Majelis Agung Ketahanan Krama Bali, Ida Dang Acarya Yogananda</li>
            <li>Bapak Brigjen Polisi Dewa Bagus Made Suharya</li>
            <li>Kepala BIN Daerah Provinsi Bali, Nusa Tenggara Timur dan Nusa Tenggara Barat</li>
            <li>Bapak Brigjen TNI Eddy Kristanto</li>
            <li>Ketua DPRD Kota Denpasar, Bapak I Gusti Ngurah Gede, SH</li>
            <li>Kepala Dinas Pendidikan, Pemuda dan Olahraga Kota Denpasar diwakili oleh Kepala Bidang Tenaga Pendidikan, Bapak Drs. Anak Agung Gede Wiratama, M. Ag</li>
            <li>Konsulat Jendral Tiongkok Kota Denpasar, Mr Hu Yinquan</li>
            <li>Kepala Fakultas Mandarin Universitas Jinan – Tiongkok, Mr Shao Yi</li>
            <li>Direktur Operasional dan Pemasaran Hotel Indonesia Natour, Bapak Sugeng Pramono</li>
            <li>Pimpinan Maha Vihara dan Pusdiklat Buddha Maitreya Kota Denpasar, Bapak Adhisunyata</li>
            <li>Pendiri Yayasan Prajna Harmonis, Bapak Taslim</li>
          </ul>
        </div>

        {/* Middle Image with subtitle */}
        <div className="text-center">
          <div className="w-full overflow-hidden rounded-3xl shadow-lg mb-4">
            <img
              src="/prajnaImages/elearning/2.jpeg"
              alt="Pembukaan Program E-Learning S1"
              className="w-full object-cover"
            />
          </div>
          <p className="text-yellow-400 font-semibold">Pembukaan Program E-Learning S1 Pendidikan Mandarin</p>
        </div>

        {/* Additional images in grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src="/prajnaImages/elearning/3.jpeg" alt="E-Learning 3" className="w-full rounded-2xl shadow-lg" />
          <img src="/prajnaImages/elearning/4.jpeg" alt="E-Learning 4" className="w-full rounded-2xl shadow-lg" />
        </div>

        <div className="w-full overflow-hidden rounded-3xl shadow-lg">
          <img src="/prajnaImages/elearning/5.jpeg" alt="E-Learning 5" className="w-full object-cover" />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ELearningS1;
