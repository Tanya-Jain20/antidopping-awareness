import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import WhatIsDoping from './pages/WhatIsDoping'
// Import other pages...
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/what-is-doping" element={<WhatIsDoping />} />
        {/* Add other routes */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}