import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import AnimalKingdom from './AnimalKingdom.jsx';
import Conservation from './Conservation.jsx';
import Contact from './Contact.jsx';
import '../index.css';

// Main entry point for WildPal app
function App() {
  return (
    // Set up routing for multi-page navigation
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/animal-kingdom" element={<AnimalKingdom />} />
        <Route path="/conservation" element={<Conservation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

// Render the app to the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);