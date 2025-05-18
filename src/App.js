import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import PilihanDokter from './pages/doctor';
import ReservasiDokter from './pages/reservasi';

// Tambahkan fungsi ScrollToTop langsung di sini
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dokter" element={<PilihanDokter />} />
        <Route path="/reservasi" element={<ReservasiDokter />} />
      </Routes>
    </Router>
  );
}

export default App;
