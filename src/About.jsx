```jsx
import React from 'react';
import { Link } from 'react-router-dom';

// About component for WildPal story and stats
function About() {
  return (
    <section className="min-h-screen bg-green flex flex-col items-center py-12 px-4">
      {/* Section header */}
      <h1 className="text-4xl font-bold text-white text-center font-[Montserrat] mb-8">
        About WildPal
      </h1>
      {/* Story content */}
      <div className="max-w-2xl text-center text-white font-[Merriweather]">
        <p className="text-lg mb-4">
          Founded by the Animal King, WildPal is dedicated to preserving wildlife and sharing the beauty of the Animal Kingdom.
        </p>
        <p className="text-lg mb-8">
          Our mission: protect habitats, educate enthusiasts, and inspire conservation through immersive experiences.
        </p>
      </div>
      {/* Stats section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        <div className="bg-brown p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-gold font-[Montserrat]">10+</h2>
          <p className="text-white font-[Merriweather]">Habitats Saved</p>
        </div>
        <div className="bg-brown p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-gold font-[Montserrat]">50+</h2>
          <p className="text-white font-[Merriweather]">Species Supported</p>
        </div>
        <div className="bg-brown p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-gold font-[Montserrat]">1000+</h2>
          <p className="text-white font-[Merriweather]">Community Members</p>
        </div>
      </div>
      {/* CTA to Conservation page */}
      <Link
        to="/conservation"
        className="mt-8 px-6 py-3 bg-blue text-white font-semibold rounded-lg hover:bg-gold transition duration-300"
      >
        Learn About Conservation
      </Link>
    </section>
  );
}

export default About;
```