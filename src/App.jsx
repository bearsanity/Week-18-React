import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'

import Footer from './components/Footer'
import Header from './components/Header'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<Navigate to="/" />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>)
}

export default App
