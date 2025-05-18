import { motion } from "framer-motion";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navbar from './nav';
import Footer from "./footer";

const testimonials = [
  { name: 'Anna', text: 'Pelayanan cepat, profesional, dan dokter sangat membantu!', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Budi', text: 'Lingkungan nyaman dan bersih, sangat saya rekomendasikan.', img: 'https://randomuser.me/api/portraits/men/33.jpg' },
  { name: 'Diana', text: 'Dokter ahli dan perhatian. Klinik langganan saya!', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { name: 'Rudi', text: 'Dokter ramah, proses reservasi mudah, sangat puas.', img: 'https://randomuser.me/api/portraits/men/34.jpg' },
  { name: 'Santi', text: 'Tempatnya nyaman dan bersih, cocok buat keluarga.', img: 'https://randomuser.me/api/portraits/women/51.jpg' },
  { name: 'Andi', text: 'Profesional dan cepat tanggap. Rekomendasi banget.', img: 'https://randomuser.me/api/portraits/men/19.jpg' },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  const next = () => {
    setCurrentIndex((prev) =>
      prev + visibleCount >= testimonials.length ? 0 : prev + visibleCount
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev - visibleCount < 0 ? testimonials.length - visibleCount : prev - visibleCount
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <motion.div
        className="container mt-5"
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="row align-items-center">
          <div className="col-lg-6 text-center">
            <h1 className="display-3 fw-bold" style={{ color: '#27548A' }}>
              Sehat Itu Keren!
            </h1>
            <p className="lead text-dark">
              Kami siap membantu kamu dengan berbagai layanan medis yang trendi dan penuh perhatian. Waktu untuk kesehatan kamu!
            </p>
            <Link to="/reservasi" className="btn btn-warning btn-lg shadow-lg rounded-pill text-dark">
              Reservasi Sekarang
            </Link>
          </div>
          <div className="col-lg-6 text-center">
            <div className="pl-20">
              <img
                src="./doctericon2.png"
                alt="Dokter Ilustrasi"
                style={{ width: '100%', maxWidth: '900px', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Clinic Section */}
      <motion.div
        className="outer-wrapper px-5 mt-5"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="clinic-section">
          <Container>
            <Row className="align-items-center">
              <Col md={6} className="text-center">
                <div className="experience-badge">
                  <div className="years">10+</div>
                  <div className="text">Years of Experience</div>
                </div>
                <img src="./clinic.jpg" alt="Clinic" className="img-fluid" />
              </Col>
              <Col md={6}>
                <h5 className="who-we-are">🏥 WHO WE ARE</h5>
                <h2 className="clinic-title">
                  KLINIK SEHAT – LAYANAN KESEHATAN TERPERCAYA DI BERBAGAI DAERAH
                </h2>
                <p>
                  <strong>Klinik Sehat</strong> adalah jaringan klinik modern dengan layanan medis lengkap. Kami berpengalaman lebih dari 10 tahun dalam pelayanan kesehatan individu, keluarga, dan kerja sama perusahaan.
                </p>
                <p>
                  Didukung oleh <strong>spesialis berpengalaman</strong> dan sistem pelayanan digital, Klinik Sehat dipercaya ribuan pasien dan lebih dari <strong>1.000 perusahaan</strong> di Indonesia.
                </p>
                <p>
                  💡 <strong>Klinik Sehat bukan sekadar layanan klinik – kami adalah mitra kesehatan terpercaya Anda.</strong>
                </p>
                <Button variant="warning" className="cta-button">Lihat Layanan</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </motion.div>

      {/* Keunggulan Klinik */}
      <motion.div
        className="container my-5"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-center fw-bold mb-4" style={{ color: '#27548A' }}>
          Kenapa Memilih Klinik Kami?
        </h2>
        <div className="row text-center">
          {[{
            title: "20+ Cabang Klinik",
            desc: "Kami hadir di berbagai daerah di Indonesia untuk memberikan layanan kesehatan yang mudah dijangkau dan cepat."
          }, {
            title: "Banyak Spesialis",
            desc: "Kami memiliki tim dokter spesialis dari berbagai bidang untuk memastikan diagnosis dan penanganan terbaik."
          }, {
            title: "Transparansi Biaya",
            desc: "Semua biaya kami tampilkan secara jelas dan terbuka, tanpa ada biaya tersembunyi."
          }, {
            title: "Kerja Sama Perusahaan",
            desc: "Kami melayani paket medical check-up dan tes kesehatan bagi karyawan perusahaan dengan harga spesial."
          }].map((item, i) => (
            <div className="col-md-3 mb-4" key={i}>
              <div className="p-3 shadow-sm border rounded keunggulan-box" style={{ transition: 'transform 0.3s ease', cursor: 'pointer' }}>
                <h5 className="fw-bold" style={{ color: '#27548A' }}>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistik */}
        <div className="bg-warning text-dark text-center py-4 mt-5 rounded">
          <div className="row">
            <div className="col-md-3">
              <h4 className="fw-bold">50K+</h4>
              <p>Pasien Terlayani</p>
            </div>
            <div className="col-md-3">
              <h4 className="fw-bold">500+</h4>
              <p>Perusahaan Bekerja Sama</p>
            </div>
            <div className="col-md-3">
              <h4 className="fw-bold">1,000+</h4>
              <p>Tindakan Spesialis</p>
            </div>
            <div className="col-md-3">
              <h4 className="fw-bold">98%</h4>
              <p>Kepuasan Pasien</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mitra */}
<motion.section
  className="py-16 bg-white"
  variants={fadeUpVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  <div className="container mx-auto px-4">
    <h2 className="text-center fw-bold mb-4" style={{ color: '#27548A' }}>
      🌟 Mitra Kami
    </h2>

    <div className="flex overflow-x-auto flex-nowrap gap-6 py-4 scrollbar-hide justify-start">
      {["pln.png", "kpmg.png", "telkom.png", "sociolla.png", "dki.png", "pertamina.png", "kemenkeu.png"].map((logo, i) => (
        <div
          key={i}
          className="flex-shrink-0 w-40 h-24 flex items-center justify-center"
        >
          <img
            src={`./${logo}`}
            alt={`Logo Mitra ${i + 1}`}
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
          />
        </div>
      ))}
    </div>
  </div>
</motion.section>


      {/* Testimoni */}
<motion.div
  className="w-full bg-blue-100 py-10"
  variants={fadeUpVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-center fw-bold mb-4" style={{ color: '#27548A' }}>
      Apa Kata Mereka?
    </h2>

    <div className="flex justify-center items-center gap-6">
      <button
        onClick={prev}
        className="w-12 h-12 rounded-full border border-gray-300 hover:bg-gray-100 transition flex justify-center items-center text-gray-600 hover:text-gray-900"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div className="flex gap-6 flex-grow justify-center">
        {visibleTestimonials.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="bg-blue-50 rounded-3xl p-6 min-w-[280px] max-w-[300px] flex justify-center items-center"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center w-full">
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-indigo-100 shadow-md mb-4"
              />
              <h5 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h5>
              <p className="text-gray-600 italic text-sm">“{item.text}”</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={next}
        className="w-12 h-12 rounded-full border border-gray-300 hover:bg-gray-100 transition flex justify-center items-center text-gray-600 hover:text-gray-900"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  </div>
</motion.div>
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

export default Home;
