import React from "react";
import Footer from "../components/Footer"; // pastikan path sesuai
import logo from "../../public/prajnaImages/logo.png"; // pastikan ada logo

const FestivalSeni2018 = () => {
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
            src="/prajnaImages/festival/1.jpeg"
            alt="Festival Seni Pemuda Internasional 2018"
            className="w-full object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center">
          Festival Seni Pemuda Internasional 2018 di Bali
        </h1>

        {/* Paragraphs */}
        <div className="space-y-6 text-gray-200">
          <p>
            Pada tanggal 4-5 Agustus 2018, Yayasan Prajna Harmonis kembali menyelenggarakan Festival Seni Pemuda Internasional di Bali, bertempat di Sekolah Dwijendra. Festival tahun ini diadakan atas kerja sama dengan Perhimpunan Persahabatan Indonesia–Tiongkok Provinsi Bali, Pusat Pendidikan Elektrokimia Federasi Pekerja Tiongkok, Sekolah Seni Qi-Gong Universitas Beijing, Pusat Pertukaran dan Kaderisasi Kesenian Beijing, serta Ikatan Alumni Universitas Jinan Provinsi Bali.
          </p>
          <p>
            Pada tahun 2013, Yayasan Prajna Harmonis menyelenggarakan Festival Seni Pemuda Internasional yang pertama di Kota Batam, Provinsi Kepulauan Riau. Festival Seni Pemuda Internasional ke-2 diadakan pada tahun 2017 di objek wisata internasional, Bali. Festival Seni Pemuda Internasional tahun 2018 ini kembali diselenggarakan di Bali dengan menghadirkan 60 orang tamu dari mancanegara yang terdiri dari seniman, guru dan pelajar lukis, beserta orang tua dari berbagai provinsi di Tiongkok.
          </p>
          <p>
            Festival Seni Pemuda Internasional 2018 memiliki makna dan nilai penting bagi persahabatan antar bangsa dan negara. Tamu undangan yang hadir terdiri dari Konsulat Jenderal Republik Rakyat Tiongkok Ms Zhang Xiaoli, Konsulat Jenderal Republik India Shri RO Sunil Babu, Perwakilan Kepala Dinas Kebudayaan Provinsi Bali, Perwakilan Kepala Dinas Pendidikan, Pemuda, dan Olahraga Provinsi Bali, Ketua dan jajaran pengurus Perhimpunan Persahabatan Indonesia Tiongkok Provinsi Bali, Ketua Paguyuban Sosial Marga Tionghoa Indonesia Provinsi Bali, Ketua, jajaran pengurus, kepala sekolah dan guru dari Yayasan Dwijendra, Ketua Panitia pihak Tiongkok untuk Festival Seni Pemuda Internasional, para dosen dari universitas-universitas di Bali, serta lebih dari 200 pelajar dari sekolah-sekolah di Bali yang ikut berpartisipasi dalam acara tersebut.
          </p>

          {/* Gambar kiri-kanan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/prajnaImages/festival/2.jpeg" alt="Festival Seni 2" className="w-full rounded-2xl shadow-lg" />
            <img src="/prajnaImages/festival/3.jpeg" alt="Festival Seni 3" className="w-full rounded-2xl shadow-lg" />
          </div>

          <p>
            Ketua Yayasan Dwijendra, Bapak Dr.Drs. M.S. Chandra Jaya, M.Hum pada saat memberikan kata sambutan menyatakan bahwa bangsa Indonesia dikenal oleh masyarakat dunia pada culture knowledge, culture behaviour dan culture artifact yang ditampilkan sebagai implementasi dari kesepakatan nasional tentang nilai-nilai, ide-ide, gagasan-gagasan dan pandangan hidup yang dijadikan sebagai pedoman untuk berprilaku, baik secara internal maupun eksternal. Sungguhpun bangsa Indonesia terdiri dari berbagai suku bangsa, namun kita telah bersepakat untuk bersatu dalam multikulturalisme bangsa, yaitu “Bhinneka Tunggal Ika”, “Materi Sumpah Pemuda“, dan falsafah negara “Pancasila”.
          </p>

          <p>
            Ketua Yayasan Prajna Harmonis, Bapak Kasino, B.Ed dalam kata sambutannya mengatakan: "Indonesia, Tiongkok dan India adalah tiga negara besar di Asia utama, juga dikenal oleh masyarakat dunia sebagai bangsa yang sangat bersejarah, berbudaya, dan berperadaban bernilai bagi terciptanya keharmonisan di tengah-tengah keberagaman masyarakat dunia. Total populasi Indonesia, India dan Tiongkok mencapai hampir setengah dari penduduk dunia.” Beliau juga mewakili panitia penyelenggara mengucapkan banyak terima kasih kepada seluruh instansi pemerintah dan semua pihak yang telah memberikan dukungan penuh untuk kelancaran dan kesuksesan festival ini.
          </p>

          {/* Gambar kiri-kanan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/prajnaImages/festival/4.jpeg" alt="Festival Seni 4" className="w-full rounded-2xl shadow-lg" />
            <img src="/prajnaImages/festival/5.jpeg" alt="Festival Seni 5" className="w-full rounded-2xl shadow-lg" />
          </div>

          <p>
            Kebudayaan Bali, pada khususnya, memiliki filosofi Tri Hita Karana, Tiga Keharmonisan: Keharmonisan dengan Tuhan, dengan sesama dan dengan alam kehidupan. Pulau Bali yang berlandaskan falsafah Tri Hita Karana sejak dahulu sampai sekarang dan mewujudkannya dalam semua segi kehidupan dan pembangunan, memiliki daya tarik yang kuat bagi pengunjung internasional. Melalui Festival SeniPemuda Internasional, panitia penyelenggara ingin lebih memperkenalkan dan mempromosikan nilai-nilai luhur budaya bangsa Indonesia dan warga Bali, beserta aneka ragam karya seni anak bangsa kepada para budayawan, seniman, guru, dan pelajar dari mancanegara.
          </p>

          <p>
            Pertukaran Festival Seni Pemuda Internasional diisi dengan anekaragam pertunjukan dan kegiatan. Acara pembukaan pada pagi hari tanggal 4 Agustus diawali dengan penyambutan “Tari Pendet” dan pertunjukan yoga oleh pelajar Sekolah Dwijendra. Setelah menyanyikan lagu "Indonesia Raya," acara pembukaan diisi oleh INLA Bali, Gus Teja (Pemusik ternama Bali), Tim Tarian Pancer Langiit (Sekolah Seni profesional), serta pertunjukan pelajar Indonesia dan Tiongkok yang bersama-sama menghasilkan acara pembukaan yang indah, menggugah, penuh persaudaraan dan harmonis. Para pelajar Tiongkok dan Indonesia juga mengadakan pertukaran di bidang kaligrafi, senilukis, nyurat lontar, mejejahitan, seni tari, dan seni musik dengan penuh sukacita, tawa ria, dan persahabatan. Di samping itu, pelajar Tiongkok mengunjungi Monumen Bajra Sandhi dan mengadakan lomba melukis di tempat dengan bimbingan dan dorongan dari para pelukis Bali.
          </p>

          {/* Gambar kiri-kanan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/prajnaImages/festival/6.jpeg" alt="Festival Seni 6" className="w-full rounded-2xl shadow-lg" />
            <img src="/prajnaImages/festival/7.jpeg" alt="Festival Seni 7" className="w-full rounded-2xl shadow-lg" />
          </div>

          <p>
            Kegiatan pertukaran yang diadakan berkelanjutan ini berikutnya akan menghadirkan peserta dari banyak negara, dimulai dari Tiongkok dan India, ke rumah kita yang damai dan indah, Bali - Indonesia. Mahatma Gandhi semasa hidupnya pernah berkata: "Kebahagiaan adalah ketika semua hal dipikirkan, dikatakan dan dilaksanakan dengan harmonis." Keharmonisan bersumber dari dalam diri kita, dari hati dan pikiran yang mendambakan perdamaian, sehingga berupaya mendorong dan mewujudkan.
          </p>

          <p>
            Kita percaya bahwa dengan kerjasama dan kesungguhan hati, upaya ini akan membuahkan hasil positif sebagaimana diharapkan. Mari kita saling berbagi cerita tentang budaya Tri Hita Karana, nilai-nilai universal menuju keharmonisan dunia.
          </p>

          {/* Gambar tambahan baris ke-4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/prajnaImages/festival/8.jpeg" alt="Festival Seni 8" className="w-full rounded-2xl shadow-lg" />
            <img src="/prajnaImages/festival/9.jpeg" alt="Festival Seni 9" className="w-full rounded-2xl shadow-lg" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FestivalSeni2018;
