import React from 'react';
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';

// Conservation component for animated map and reserves
function Conservation() {
  return (
    <section className="min-h-screen bg-green py-12 px-4">
      {/* Section header */}
      <h1 className="text-4xl font-bold text-white text-center font-[Montserrat] mb-8">
        Conservation Corner
      </h1>
      {/* Animated map */}
      <div className="max-w-4xl mx-auto mb-8">
        <Player
          autoplay
          loop
          src="/assets/animations/map-draw.json"
          className="w-full h-96"
        />
      </div>
      {/* Reserves list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Sample reserve data (replace with fetch from reserves.json) */}
        {[
          { name: 'Serengeti Reserve', image: 'reserve1.jpg', description: 'Home to lions and elephants.' },
          { name: 'Amazon Sanctuary', image: 'reserve2.jpg', description: 'Protecting rainforest species.' },
        ].map((reserve, index) => (
          <div
            key={index}
            className="bg-brown rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={`/assets/reserves/${reserve.image}`}
              alt={reserve.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gold font-[Montserrat]">{reserve.name}</h2>
              <p className="text-white font-[Merriweather] mt-2">{reserve.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* CTA to Contact */}
      <Link
        to="/contact"
        className="mt-8 block text-center px-6 py-3 bg-blue text-white font-semibold rounded-lg hover:bg-gold transition duration-300 mx-auto max-w-xs"
      >
        Get Involved
      </Link>
    </section>
  );
}

export default Conservation;