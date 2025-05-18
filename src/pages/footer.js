import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import '../index.css';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Deskripsi Klinik */}
        <div>
<div className="h-14 mb-6 flex items-center">
  <img
    src="/logo1.png"
    alt="WeClinic Logo"
    className="h-28 w-28 object-contain"
  />
</div>

          <p className="text-gray-600 text-sm leading-relaxed">
            Klinik Sehat adalah jaringan layanan kesehatan dengan lebih dari 20 cabang di seluruh Indonesia. 
            Kami menyediakan layanan medis dari berbagai spesialis serta bekerja sama dengan perusahaan untuk 
            kebutuhan medical check-up karyawan.
          </p>

          {/* Sosial Media */}
          <div className="flex space-x-4 mt-6">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="p-2 rounded-full shadow-card hover:scale-110 transition duration-300"
                style={{ backgroundColor: '#27548A', color: 'white' }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Layanan Kami */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-main">Layanan Kami</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            {[
              "Konsultasi Dokter Umum",
              "Spesialis Anak & Kandungan",
              "Laboratorium & Tes Darah",
              "Medical Check-up Karyawan",
              "Layanan Gawat Darurat"
            ].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-gray-900 transition-colors duration-200">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Fasilitas */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-main">Fasilitas</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            {[
              "Pendaftaran Online",
              "Hasil Tes Online",
              "Kemitraan Perusahaan",
              "Layanan Ambulans",
              "Kontak & Lokasi Cabang"
            ].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-gray-900 transition-colors duration-200">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-main mt-16 py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-white text-sm">
          <p className="text-center sm:text-left mb-2 sm:mb-0">&copy; 2025 WeClinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
