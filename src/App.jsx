import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhatIsDoping from './pages/WhatIsDoping';
import HarmfulEffects from './pages/HarmfulEffects';
import Cases from './pages/Cases';
import Awareness from './pages/Awareness';
import Contact from './pages/Contact';
import './styles.css';

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-is-doping" element={<WhatIsDoping />} />
          <Route path="/harmful-effects" element={<HarmfulEffects />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/awareness" element={<Awareness />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}