import React from 'react';

// Footer component for site-wide footer
function Footer() {
  return (
    <footer className="bg-brown py-6 px-6 text-center">
      <div className="container mx-auto">
        {/* Copyright and social links */}
        <p className="text-white font-[Merriweather] mb-4">
          &copy; {new Date().getFullYear()} WildPal. All rights reserved.
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/icons/social-x.svg" alt="X" className="w-6 h-6" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/icons/social-fb.svg" alt="Facebook" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;