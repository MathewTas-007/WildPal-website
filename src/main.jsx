import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import AnimalKingdom from './AnimalKingdom.jsx';
import Conservation from './Conservation.jsx';
import Contact from './Contact.jsx';
import './index.css';

// Main entry point for WildPal app
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

// Render the app to the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);