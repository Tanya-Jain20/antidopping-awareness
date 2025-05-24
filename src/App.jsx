import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import WhatIsDoping from './pages/WhatIsDoping'
// Import other pages...

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/what-is-doping" element={<WhatIsDoping />} />
        {/* Add other routes */}
      </Routes>
      <Footer />
    </Router>
  )
}