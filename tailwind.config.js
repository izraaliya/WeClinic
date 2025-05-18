/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // pastikan path file kamu benar
  theme: {
    extend: {
      colors: {
        main: '#27548A', // warna biru utama
      },
      boxShadow: {
        card: '0 4px 10px rgba(0, 0, 0, 0.08)', // bayangan lembut
      },
    },
  },
  plugins: [],
};
