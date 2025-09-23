import React from "react";
import Footer from "../components/Footer"; // pastikan path sesuai
import logo from "../../public/prajnaImages/logo.png"; // pastikan ada logo

const SeminarBudayaPeradaban = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header / Logo */}
      <header className="flex items-center p-6 bg-gray-800 shadow-md">
        <img src={logo} alt="Yayasan Prajna Harmonis" className="h-12 w-auto" />
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
            Seminar Budaya dan Peradaban Keharmonisan
          </h1>
          <p className="text-gray-300 text-lg">
            25 Februari 2023, Novotel Hotel, Kota Pekanbaru
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full overflow-hidden rounded-3xl shadow-lg">
          <img
            src="/prajnaImages/seminarperadaban/1.jpeg"
            alt="Seminar Budaya Peradaban"
            className="w-full object-cover"
          />
        </div>

        {/* Paragraphs */}
        <div className="space-y-6 text-gray-200">
          <p>
            "Dunia sedang tidak baik-baik saja." Demikian Bapak Presiden Joko Widodo terus mengingatkan sejak beberapa waktu terakhir dan pernyataan senada diungkapkan oleh beberapa pemimpin negara lainnya atas dasar kepedulian terhadap kehidupan dan kesejahteraan masyarakat. Memasuki tahun 2023, Bapak Presiden berpesan agar kita semua tetap optimis namun senantiasa bersikap hati-hati dan waspada dalam menghadapi situasi tahun ini karena kondisi global yang masih diwarnai ketidakpastian dan keruwetan.
          </p>

          <p>
            Ketidakpastian dan keruwetan kondisi global sekarang ini sungguh tidak mudah ditangani. Namun terlepas dari kompleksitas berbagai krisis dan permasalahan, sepanjang sejarah, konflik dan perselisihan antar umat manusia dalam bentuk apa pun selalu membawa dampak kerugian dan penderitaan terbesar bagi umat manusia. Budaya dan peradaban keharmonisan dapat menjadi sumber inspirasi dan semangat bersama umat manusia dalam mengatasi kecenderungan konflik dengan merajut persaudaraan, kebhinnekaan, kemanusiaan, dan perdamaian.
          </p>

          <p>
            Bangsa Indonesia sejak dahulu kala mencintai perdamaian dan mengedepankan kerukunan. Hal ini tercermin dari nilai-nilai yang terkandung di dalam falsafah Pancasila dan semboyan Bhinneka Tunggal Ika maupun praktik kehidupan sehari-hari bangsa Indonesia yang beriman dan bertaqwa kepada Tuhan Yang Maha Esa, menghargai alam semesta, mengasihi sesama, suka bergotong royong dan bermusyawarah.
          </p>

          <p>
            Kekayaan dan kemuliaan nilai-nilai budaya dan peradaban bangsa Indonesia merupakan aset penting untuk membangun dialog dan pemahaman antar beragam budaya dan peradaban di dunia dan berkontribusi bagi terwujudnya peradaban umat manusia yang berlandaskan pada keharmonisan dan perdamaian.
          </p>

          <p>
            Keharmonisan merupakan esensi dari budaya dan peradaban bangsa Tiongkok yang turun temurun sejak zaman kuno. Inti ajaran filsuf Tiongkok, Konghucu (Confucius) mengutamakan cinta kasih dan keharmonisan hubungan antar manusia, Lao-Tzu mengajarkan untuk meneladani kepribadian alam semesta dan mengutamakan keharmonisan hubungan manusia dengan alam kehidupan, sementara masuknya ajaran Buddhisme dari India ke Tiongkok yang berakulturasi dengan budaya Tiongkok melahirkan ajaran Buddhisme Chan yang menekankan pada pembinaan hati nurani dan keharmonisan dalam diri manusia sendiri, yakni keharmonisan jiwa dan raga, jasmani dan rohani. Ketiga ajaran tumbuh berkembang secara berdampingan dan harmonis di daratan Tiongkok sepanjang sejarah ribuan tahun dan menjadi pilar utama budaya dan peradaban masyarakat Tiongkok.
          </p>

          <p>
            Seminar “Budaya dan Peradaban Keharmonisan” ini bertujuan turut mendorong dialog yang tulus, berkelanjutan dan mendalam antar budaya dan peradaban mulia yang mengutamakan nilai-nilai kedamaian dan keharmonisan untuk bersama-sama berkontribusi bagi keharmonisan kehidupan masyarakat antar bangsa dan dunia. Seminar diselenggarakan bersama oleh Yayasan Prajna Harmonis, Perhimpunan Persahabatan Indonesia-Tiongkok DPD Riau dan Kepri, Sekolah Tinggi Agama Buddha Maitreyawira dan Nishan World Center for Confucian Studies, dihadiri oleh lebih dari 200 orang tokoh masyarakat, dosen & guru, mahasiswa secara offline di tempat dan online melalui Zoom.
          </p>
        </div>

        {/* Grid 6 images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src="/prajnaImages/seminarperadaban/2.jpeg" alt="Seminar 2" className="w-full rounded-2xl shadow-lg" />
          <img src="/prajnaImages/seminarperadaban/3.jpeg" alt="Seminar 3" className="w-full rounded-2xl shadow-lg" />
          <img src="/prajnaImages/seminarperadaban/4.jpeg" alt="Seminar 4" className="w-full rounded-2xl shadow-lg" />
          <img src="/prajnaImages/seminarperadaban/5.jpeg" alt="Seminar 5" className="w-full rounded-2xl shadow-lg" />
          <img src="/prajnaImages/seminarperadaban/6.jpeg" alt="Seminar 6" className="w-full rounded-2xl shadow-lg" />
          <img src="/prajnaImages/seminarperadaban/7.jpeg" alt="Seminar 7" className="w-full rounded-2xl shadow-lg" />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SeminarBudayaPeradaban;
