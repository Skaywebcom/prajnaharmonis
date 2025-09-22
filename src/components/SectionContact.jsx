import React, { useState } from "react";
import { MapPin, Phone, Smartphone, Mail, Send, Building2, Clock } from "lucide-react";

const SectionContact = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: ''
  });

  // Update form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isFormComplete = formData.nama && formData.email && formData.pesan;

  // Handle submit: buka WhatsApp dengan pesan terisi
  const handleSubmit = () => {
    if (!isFormComplete) {
      alert("Mohon isi semua form terlebih dahulu.");
      return;
    }

    const waMessage = `Halo, saya ${formData.nama} (${formData.email}) ingin menyampaikan:\n\n${formData.pesan}`;
    const waUrl = `https://wa.me/6285271226353?text=${encodeURIComponent(waMessage)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section
      id="hubungi"
      className="min-h-screen bg-cover bg-center py-20 px-6 relative overflow-hidden"
      style={{ backgroundImage: "url('/prajnaImages/background/18.png')" }}
    >


      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-32 right-20 w-64 h-64 bg-yellow-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-green-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-300/10 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-green-600 mr-4"></div>
            <div className="w-4 h-4 rotate-45 bg-gradient-to-br from-yellow-500 to-green-600"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-green-600 ml-4"></div>
          </div>
          
          <h2
  className="text-5xl md:text-6xl lg:text-7xl mb-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-800 to-green-900"
  style={{
    fontFamily: "'Great Vibes', cursive",
    paddingTop: "0.25em",
    paddingBottom: "0.25em",
    textShadow: "2px 2px 6px rgba(0,0,0,0.6)", // membuat teks lebih menonjol
  }}
>
  Hubungi Kami
</h2>

<p className="text-xl md:text-2xl text-gray-900 font-semibold max-w-3xl mx-auto leading-relaxed">
  Kami siap membantu Anda dengan layanan konsultasi pendidikan terbaik. Jangan ragu untuk menghubungi tim profesional kami
</p>

        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 -mt-8 relative z-10">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Info Card */}
            <div className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-8 border border-gray-100/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Kantor Pusat</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-gray-800 leading-relaxed">
                      Ruko Raffles City<br />
                      Blok D No. 2A-5, Batam Center,<br />
                      Batam 29432, Kepri - Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-gray-700 font-medium">(+62) 778-7494101</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-5 h-5 text-yellow-600" />
                  </div>
                  <p className="text-gray-700 font-medium">(+62) 852-7122-6353</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-gray-700 font-medium">prajna_harmonis@yahoo.com</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-yellow-50 to-green-50 shadow-xl rounded-3xl p-8 border border-yellow-200/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Jam Operasional</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-yellow-200/50">
                  <span className="text-gray-700 font-medium">Senin - Jumat</span>
                  <span className="text-gray-800 font-semibold">08:00 - 17:00 WIB</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-yellow-200/50">
                  <span className="text-gray-700 font-medium">Sabtu</span>
                  <span className="text-gray-800 font-semibold">08:00 - 15:00 WIB</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 font-medium">Minggu</span>
                  <span className="text-red-600 font-semibold">Tutup</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-8 border border-gray-100/50">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Kirim Pesan
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Silakan tinggalkan pesan Anda dan kami akan merespons dalam 1x24 jam
              </p>
            </div>

            <div className="space-y-6">
              {/* Nama Lengkap */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleInputChange}
                  className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 text-gray-800 placeholder-gray-400"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>

              {/* Email */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Alamat Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all duration-300 text-gray-800 placeholder-gray-400"
                  placeholder="nama@email.com"
                />
              </div>

              {/* Pesan */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Pesan Anda
                </label>
                <textarea
                  name="pesan"
                  value={formData.pesan}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 text-gray-800 placeholder-gray-400 resize-none"
                  placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                ></textarea>
              </div>

              {/* Button Kirim */}
              <button
                onClick={handleSubmit}
                disabled={!isFormComplete}
                className={`group w-full text-white font-bold py-4 px-8 rounded-2xl shadow-xl flex items-center justify-center gap-3 transition-all duration-300 transform ${
                  isFormComplete
                    ? "bg-gradient-to-r from-green-600 to-yellow-500 hover:from-green-700 hover:to-yellow-600 hover:shadow-2xl hover:-translate-y-1"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                <Send className="w-5 h-5" />
                Kirim Pesan
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center relative z-10">
          <div className="inline-block bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl px-8 py-6 border border-gray-100/50">
            <p className="text-gray-700 text-lg">
              Butuh konsultasi langsung? 
              <a
                href="https://wa.me/6285271226353"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 font-bold text-green-700 hover:underline"
              >
                Hubungi kami sekarang!
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
