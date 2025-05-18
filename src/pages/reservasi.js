import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaUserMd, FaStethoscope, FaCalendarAlt, FaClock } from "react-icons/fa";
import { QRCodeCanvas } from "qrcode.react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Navbar from "./nav";
import Footer from "./footer";

const Reservation = () => {
  const [spesialisasi, setSpesialisasi] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [formData, setFormData] = useState({
    namaPasien: "",
    dokter: "",
    tanggal: "",
    waktu: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const daftarDokter = {
    Umum: ["Dr. Sinta", "Dr. Budi"],
    Gigi: ["Dr. Denta", "Dr. Gema"],
    Anak: ["Dr. Rina", "Dr. Aldi"],
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generatePDF = async () => {
    const element = document.getElementById("bukti-reservasi");
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save(`bukti_reservasi_${formData.namaPasien}.pdf`);
  };

  const qrData = JSON.stringify({
    ...formData,
    spesialisasi,
    lokasi,
  });

  return (
      <>
    <Navbar />
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col md:flex-row items-center justify-center py-10 px-4">
      <div className="md:w-1/2 flex items-center justify-center p-4">
        <img
          src="./clinichero.jpg"
          alt="Klinik"
          className="rounded-lg max-h-[80vh] object-cover shadow-lg"
        />
      </div>

<div className="md:w-3/4 p-4 w-full max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-lg rounded-2xl p-6 space-y-6 min-h-[600px]"
          id={submitted ? "bukti-reservasi" : undefined}
        >
          <motion.h2
            className="text-center text-2xl font-bold text-[#27548A]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Formulir Reservasi Dokter
          </motion.h2>

          {!submitted && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Pilih Lokasi Klinik */}
              <div>
                <label className="block text-[#27548A] font-medium">
                  <FaStethoscope className="inline mr-2" />
                  Pilih Lokasi Klinik
                </label>
                <select
                  className="w-full p-3 border border-[#27548A] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={lokasi}
                  onChange={(e) => {
                    setLokasi(e.target.value);
                    setSpesialisasi(""); // reset spesialisasi saat lokasi berubah
                    setFormData({ ...formData, dokter: "" }); // reset dokter
                  }}
                  required
                >
                  <option value="">-- Pilih Lokasi --</option>
                  <option value="Klinik A">Klinik A</option>
                  <option value="Klinik B">Klinik B</option>
                  <option value="Klinik C">Klinik C</option>
                </select>
              </div>

              {/* Pilih Spesialisasi */}
              {lokasi && (
                <div>
                  <label className="block text-[#27548A] font-medium mt-4">
                    Pilih Spesialisasi
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {Object.keys(daftarDokter).map((item) => (
                      <button
                        type="button"
                        key={item}
                        onClick={() => {
                          setSpesialisasi(item);
                          setFormData({ ...formData, dokter: "" }); // reset dokter jika ganti spesialisasi
                        }}
                        className={`px-5 py-2 rounded-lg transition ${
                          spesialisasi === item
                            ? "bg-yellow-400 text-[#27548A]"
                            : "bg-[#27548A] text-white hover:bg-yellow-400 hover:text-[#27548A]"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input detail jika spesialisasi sudah dipilih */}
              {spesialisasi && (
                <>
                  <div>
                    <label className="text-[#27548A] font-medium">
                      <FaUser className="inline mr-2" />
                      Nama Pasien
                    </label>
                    <input
                      type="text"
                      name="namaPasien"
                      className="w-full p-3 border border-[#27548A] rounded-lg focus:ring-yellow-400"
                      value={formData.namaPasien}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[#27548A] font-medium">
                      <FaUserMd className="inline mr-2" />
                      Pilih Dokter ({spesialisasi})
                    </label>
                    <select
                      name="dokter"
                      className="w-full p-3 border border-[#27548A] rounded-lg focus:ring-yellow-400"
                      value={formData.dokter}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Pilih Dokter</option>
                      {daftarDokter[spesialisasi].map((dokter, idx) => (
                        <option key={idx} value={dokter}>
                          {dokter}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[#27548A] font-medium">
                      <FaCalendarAlt className="inline mr-2" />
                      Tanggal Konsultasi
                    </label>
                    <input
                      type="date"
                      name="tanggal"
                      className="w-full p-3 border border-[#27548A] rounded-lg focus:ring-yellow-400"
                      value={formData.tanggal}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[#27548A] font-medium">
                      <FaClock className="inline mr-2" />
                      Waktu Konsultasi
                    </label>
                    <input
                      type="time"
                      name="waktu"
                      className="w-full p-3 border border-[#27548A] rounded-lg focus:ring-yellow-400"
                      value={formData.waktu}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-yellow-400 text-[#27548A] font-semibold py-3 rounded-lg hover:bg-[#27548A] hover:text-white transition"
                  >
                    🚀 Lanjutkan Reservasi
                  </button>
                </>
              )}
            </form>
          )}

          {/* Tampilan setelah submit */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center space-y-6 flex-grow flex flex-col justify-center"
            >
              <div className="w-16 h-16 mx-auto bg-green-500 rounded-full flex items-center justify-center text-white text-2xl">
                ✅
              </div>
              <h3 className="text-[#27548A] font-bold text-xl">Reservasi Berhasil</h3>
              <div className="text-left space-y-1">
                <p>
                  <strong>Nama:</strong> {formData.namaPasien}
                </p>
                <p>
                  <strong>Dokter:</strong> {formData.dokter}
                </p>
                <p>
                  <strong>Spesialisasi:</strong> {spesialisasi}
                </p>
                <p>
                  <strong>Lokasi:</strong> {lokasi}
                </p>
                <p>
                  <strong>Tanggal:</strong> {formData.tanggal}
                </p>
                <p>
                  <strong>Waktu:</strong> {formData.waktu}
                </p>
              </div>

              <div className="flex justify-center mt-4">
                <QRCodeCanvas value={qrData} size={180} />
              </div>

              <p className="text-sm text-gray-500">Tunjukkan QR ini saat datang ke klinik</p>

              <button
                onClick={generatePDF}
                className="bg-yellow-400 text-[#27548A] font-semibold px-6 py-2 rounded-lg hover:bg-[#27548A] hover:text-white transition"
              >
                Unduh Bukti Reservasi
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
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
};

export default Reservation;
