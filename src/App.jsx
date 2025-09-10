import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import AnimalKingdom from './pages/AnimalKingdom.jsx';
import Conservation from './pages/Conservation.jsx';
import Contact from './pages/Contact.jsx';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Navigation Bar */}
        <Navbar />
        
        {/* Main Content Routes */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/animal-kingdom" element={<AnimalKingdom />} />
            <Route path="/conservation" element={<Conservation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;