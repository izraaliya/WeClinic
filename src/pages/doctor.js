import React, { useState } from "react";
import Navbar from "./nav";
import Footer from "./footer";
import { motion } from "framer-motion";

const clinics = [
  {
    id: 1,
    name: "Klinik Sehat Sentosa",
    location: "Jakarta Selatan",
    doctors: [
      {
        id: 1,
        name: "Dr. Andi Wijaya",
        specialty: "Dokter Umum",
        photo: "https://randomuser.me/api/portraits/men/32.jpg",
        profile:
          "Pengalaman 10 tahun di bidang kesehatan umum, ramah dan profesional.",
      },
      {
        id: 2,
        name: "Dr. Maya Putri",
        specialty: "Dokter Kandungan",
        photo: "https://randomuser.me/api/portraits/women/50.jpg",
        profile:
          "Spesialis kandungan yang penuh perhatian untuk ibu dan calon bayi.",
      },
      {
        id: 3,
        name: "Dr. Rudi Hartono",
        specialty: "Dokter Saraf",
        photo: "https://randomuser.me/api/portraits/men/76.jpg",
        profile: "Ahli saraf dengan pendekatan personal dan komprehensif.",
      },
    ],
  },
  {
    id: 2,
    name: "Klinik Gigi Mandiri",
    location: "Bandung",
    doctors: [
      {
        id: 4,
        name: "Dr. Sari Melati",
        specialty: "Dokter Gigi",
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
        profile:
          "Fokus pada perawatan estetika dan kesehatan mulut anak-anak.",
      },
      {
        id: 5,
        name: "Dr. Agus Santoso",
        specialty: "Dokter Gigi Anak",
        photo: "https://randomuser.me/api/portraits/men/85.jpg",
        profile: "Mendukung kesehatan mulut anak dengan metode modern.",
      },
    ],
  },
  {
    id: 3,
    name: "Klinik Anak Ceria",
    location: "Surabaya",
    doctors: [
      {
        id: 6,
        name: "Dr. Budi Santoso",
        specialty: "Dokter Spesialis Anak",
        photo: "https://randomuser.me/api/portraits/men/54.jpg",
        profile:
          "Ahli kesehatan anak dengan pendekatan penuh perhatian untuk keluarga.",
      },
      {
        id: 7,
        name: "Dr. Nina Larasati",
        specialty: "Dokter Anak",
        photo: "https://randomuser.me/api/portraits/women/68.jpg",
        profile:
          "Berpengalaman merawat anak dengan pendekatan hangat dan profesional.",
      },
      {
        id: 8,
        name: "Dr. Rian Pratama",
        specialty: "Dokter Anak",
        photo: "https://randomuser.me/api/portraits/men/22.jpg",
        profile:
          "Spesialis anak dengan pengalaman 8 tahun di berbagai rumah sakit ternama.",
      },
    ],
  },
  {
    id: 4,
    name: "Klinik Medika Mandiri",
    location: "Medan",
    doctors: [
      {
        id: 9,
        name: "Dr. Sinta Dewi",
        specialty: "Dokter Umum",
        photo: "https://randomuser.me/api/portraits/women/72.jpg",
        profile: "Pelayanan medis umum dengan pendekatan ramah dan efektif.",
      },
      {
        id: 10,
        name: "Dr. Fajar Nugroho",
        specialty: "Dokter Penyakit Dalam",
        photo: "https://randomuser.me/api/portraits/men/35.jpg",
        profile: "Ahli penyakit dalam dengan pengalaman klinis luas.",
      },
    ],
  },
];

export default function DoctorSelection() {
  const [search, setSearch] = useState("");

  // Filter klinik berdasarkan lokasi (case insensitive)
  const filteredClinics = clinics.filter((clinic) =>
    clinic.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen py-12 px-6 md:px-12 flex justify-center">
        {/* Container putih utama */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <header className="max-w-4xl mx-auto mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg"   style={{ color: '#27548A' }}>
              Pilih Dokter Terbaik untuk Anda
            </h1>
            <p className="text-yellow-600 text-lg md:text-xl">
              Temukan dokter terpercaya berdasarkan daerah klinik pilihan Anda
            </p>
          </header>

<div className="max-w-4xl mx-auto mb-12">
  <input
    type="text"
    placeholder="Cari berdasarkan lokasi klinik..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full rounded-lg p-3 text-gray-800 font-medium border border-gray-400 focus:outline-none focus:ring-4"
  />
</div>

          <main className="max-w-6xl mx-auto space-y-20">
            {filteredClinics.length > 0 ? (
              filteredClinics.map((clinic) => (
                <section key={clinic.id}>
                  <h2 className="text-3xl font-bold mb-8 border-b-4 pb-3" style={{ color: '#27548A' }}>
                    {clinic.name} - {clinic.location}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {clinic.doctors.map((doc) => (
                      <div
                        key={doc.id}
                        className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center
                        border-4 border-transparent hover:border-yellow-400 transition cursor-pointer"
                      >
                        <img
                          src={doc.photo}
                          alt={doc.name}
                          className="w-32 h-32 rounded-full object-cover mb-6 shadow-md border-4 border-[#27548A]"
                        />
                        <h3 className="text-[#27548A] font-bold text-2xl mb-2">
                          {doc.name}
                        </h3>
                        <p className="text-yellow-400 font-semibold mb-3">
                          {doc.specialty}
                        </p>
                        <p className="text-gray-700">{doc.profile}</p>
                      </div>
                    ))}
                  </div>
                </section>
              ))
            ) : (
              <p className="text-yellow-600 text-center text-xl mt-20">
                Klinik dengan lokasi tersebut tidak ditemukan.
              </p>
            )}
          </main>
        </motion.div>
      </div>
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <Footer />
</motion.div>    </>
  );
}
