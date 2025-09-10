import React from 'react';
import { NavLink } from 'react-router-dom';

// Navbar component for site-wide navigation
function Navbar() {
  return (
    <nav className="bg-blue py-4 px-6 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src="/assets/logo.png" alt="WildPal Logo" className="w-12 h-12" />
        {/* Navigation links */}
        <ul className="flex gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white font-[Montserrat] ${isActive ? 'text-gold' : 'hover:text-gold'}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-white font-[Montserrat] ${isActive ? 'text-gold' : 'hover:text-gold'}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/animal-kingdom"
              className={({ isActive }) =>
                `text-white font-[Montserrat] ${isActive ? 'text-gold' : 'hover:text-gold'}`
              }
            >
              Animal Kingdom
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/conservation"
              className={({ isActive }) =>
                `text-white font-[Montserrat] ${isActive ? 'text-gold' : 'hover:text-gold'}`
              }
            >
              Conservation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-white font-[Montserrat] ${isActive ? 'text-gold' : 'hover:text-gold'}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;