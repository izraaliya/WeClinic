import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import PilihanDokter from './pages/doctor';
import ReservasiDokter from './pages/reservasi';

function App() {
  return (
    <Router>
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
