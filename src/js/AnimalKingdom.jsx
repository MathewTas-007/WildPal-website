import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// AnimalKingdom component for interactive animal grid
function AnimalKingdom() {
  // State for animals data from JSON
  const [animals, setAnimals] = useState([]);

  // Fetch animals data on mount
  useEffect(() => {
    fetch('/data/animals.json')
      .then((response) => response.json())
      .then((data) => setAnimals(data))
      .catch((error) => console.error('Error loading animals:', error));
  }, []);

  return (
    <section className="min-h-screen bg-green py-12 px-4">
      {/* Section header */}
      <h1 className="text-4xl font-bold text-white text-center font-[Montserrat] mb-8">
        Animal Kingdom
      </h1>
      {/* Interactive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {animals.map((animal, index) => (
          <div
            key={index}
            className="bg-brown rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={`/assets/animals/${animal.image}`}
              alt={animal.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gold font-[Montserrat]">{animal.name}</h2>
              <p className="text-white font-[Merriweather] mt-2">{animal.description}</p>
              {/* Video link */}
              <Link
                to={`/assets/videos/animals/${animal.video}`}
                className="mt-4 inline-block px-4 py-2 bg-blue text-white rounded hover:bg-gold transition duration-300"
              >
                Watch {animal.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* CTA to Conservation */}
      <Link
        to="/conservation"
        className="mt-8 block text-center px-6 py-3 bg-blue text-white font-semibold rounded-lg hover:bg-gold transition duration-300 mx-auto max-w-xs"
      >
        Explore Conservation
      </Link>
    </section>
  );
}

export default AnimalKingdom;