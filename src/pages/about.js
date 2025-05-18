import React from "react";
import Navbar from "./nav";
import { motion } from "framer-motion";
import Footer from "./footer";


const mainColor = "#27548A";
const accentColor = "#FBBF24"; // Kuning

const clinicPillars = [
  "Professional",
  "Compassion",
  "Innovation",
  "Accessibility",
  "Collaboration",
];

const milestones = [
  {
    year: "2015-2018",
    description:
      "Mulai membuka klinik pertama di Jakarta dan memperluas layanan ke beberapa kota besar di Indonesia.",
  },
  {
    year: "2019-2020",
    description:
      "Menambah spesialis baru dan mulai bekerja sama dengan perusahaan-perusahaan besar untuk layanan tes kesehatan.",
  },
  {
    year: "2021-2022",
    description:
      "Mengembangkan teknologi telemedicine untuk memudahkan akses layanan kesehatan di daerah terpencil.",
  },
  {
    year: "2023-Today",
    description:
      "Memperluas jaringan klinik ke seluruh Indonesia dan memperkuat kerja sama dengan berbagai perusahaan.",
  },
];

const clinicPhotos = [
  "./clinic1.jpg",
  "./clinic2.jpeg",
  "./clinic3.jpeg",
  "./clinic4.jpeg",
  "./clinic5.jpeg",
  "./clinic6.jpeg",
];

export default function Clinic() {
  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <img
          src="./clinichero.jpg"
          alt="Foto Klinik"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <motion.h1
            className="text-5xl font-bold mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            WeClinic
          </motion.h1>
          <motion.p
            className="text-lg max-w-2xl drop-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Solusi layanan kesehatan modern dan terpercaya dengan tenaga medis profesional dan teknologi terdepan.
          </motion.p>
        </div>
      </section>
{/* Visi & Misi */}
<section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-3xl font-semibold mb-4" style={{ color: mainColor }}>
      Visi
    </h2>
    <p className="text-gray-700 leading-relaxed">
      Menjadi jaringan klinik terdepan yang memberikan layanan kesehatan
      terbaik dengan pendekatan humanis dan teknologi terkini di seluruh
      Indonesia.
    </p>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-3xl font-semibold mb-4" style={{ color: mainColor }}>
      Misi
    </h2>
    <ul className="list-disc list-inside space-y-2 text-gray-700">
      <li>Menyediakan layanan klinik lengkap dengan spesialis berkualitas.</li>
      <li>Menggunakan teknologi terbaru untuk kemudahan akses pasien.</li>
      <li>Bekerja sama dengan perusahaan untuk tes kesehatan karyawan.</li>
      <li>Mengutamakan pelayanan ramah dan profesional.</li>
      <li>Mendukung peningkatan kesehatan masyarakat di seluruh daerah.</li>
    </ul>
  </motion.div>
</section>


      {/* Pilar Klinik */}
      <section className="bg-[#27548A] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            Pilar WeClinic
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {clinicPillars.map((pillar, index) => (
              <motion.div
                key={pillar}
                className="border border-white rounded-xl p-6 hover:bg-white hover:text-[#27548A] transition cursor-pointer"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <h3 className="font-semibold text-xl">{pillar}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-12 text-center" style={{ color: mainColor }}>
          Milestone WeClinic
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {milestones.map(({ year, description }, index) => (
            <motion.div
              key={year}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="font-bold text-lg mb-3" style={{ color: accentColor }}>
                {year}
              </h3>
              <p className="text-gray-700 text-sm">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Galeri Foto Klinik */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-[#27548A] mb-12">
          Galeri Klinik
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {clinicPhotos.map((src, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={src}
                alt={`Foto klinik ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
<motion.footer
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="py-20 px-6 text-[#27548A] text-center"  // ganti text-white jadi text-[#27548A] (biru tua)
  style={{ backgroundColor: '#FFD700' }}
>
  <h2 className="text-4xl font-bold mb-4">Kerja Sama Perusahaan</h2>
  <p className="max-w-2xl mx-auto mb-8">
    Kami membuka kesempatan kerja sama dengan perusahaan yang ingin menyediakan
    layanan tes kesehatan untuk karyawan secara mudah, terpercaya, dan profesional.
  </p>
  <button
    className="bg-white text-[#27548A] font-semibold px-8 py-3 rounded-md hover:bg-yellow-100 transition"
    onClick={() => window.open("https://wa.me/6282333109593", "_blank")}
  >
    Hubungi Kami
  </button>
</motion.footer>


<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <Footer />
</motion.div>
    </div>
  );
}
