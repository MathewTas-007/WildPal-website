import React from 'react';
import { Link } from 'react-router-dom';

// Home component for the hero banner
function Home() {
  return (
    <section className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: 'url(/assets/hero-bg.jpg)' }}>
      {/* Eagle logo and tagline */}
      <img src="/assets/logo.png" alt="WildPal Eagle Logo" className="w-32 h-32 mb-4" />
      <h1 className="text-5xl font-bold text-white text-center drop-shadow-lg font-[Montserrat]">
        Welcome to WildPal
      </h1>
      <p className="text-xl text-gold mt-4 text-center font-[Merriweather]">
        Discover the Animal Kingdom with Us
      </p>
      {/* CTA button to Animal Kingdom page */}
      <Link
        to="/animal-kingdom"
        className="mt-6 px-6 py-3 bg-blue text-white font-semibold rounded-lg hover:bg-green transition duration-300"
      >
        Explore Animals
      </Link>
    </section>
  );
}

export default Home;