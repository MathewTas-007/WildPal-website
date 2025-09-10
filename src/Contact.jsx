import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

// Contact component for eagle-peck form
function Contact() {
  // Form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (placeholder)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic (e.g., API call) here
  };

  return (
    <section className="min-h-screen bg-green py-12 px-4 flex flex-col items-center">
      {/* Section header */}
      <h1 className="text-4xl font-bold text-white text-center font-[Montserrat] mb-8">
        Contact WildPal
      </h1>
      {/* Eagle animation */}
      <Player
        autoplay
        loop
        src="/assets/animations/eagle-peck.json"
        className="w-32 h-32 mb-8"
      />
      {/* Contact form */}
      <form onSubmit={handleSubmit} className="max-w-lg w-full bg-brown p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-[Merriweather] mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white text-brown rounded focus:outline-none focus:ring-2 focus:ring-gold"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white font-[Merriweather] mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white text-brown rounded focus:outline-none focus:ring-2 focus:ring-gold"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-white font-[Merriweather] mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white text-brown rounded focus:outline-none focus:ring-2 focus:ring-gold"
            rows="5"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue text-white font-semibold rounded hover:bg-gold transition duration-300"
        >
          Send Message
        </button>
      </form>
      {/* Social links */}
      <div className="mt-8 flex gap-4">
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <img src="/assets/icons/social-x.svg" alt="X" className="w-8 h-8" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/assets/icons/social-fb.svg" alt="Facebook" className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}

export default Contact;