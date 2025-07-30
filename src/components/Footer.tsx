import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white text-lg py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">

        {/* Left: Copyright */}
        <div className="text-center md:text-left">
          © 2025 Fortynx
        </div>

        {/* Center: Links */}
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/disclaimer" className="hover:text-orange-400 transition">Disclaimer</Link>
          <Link to="/privacy-policy" className="hover:text-orange-400 transition">Privacy</Link>
          <Link to="/terms-of-use" className="hover:text-orange-400 transition">Terms of Use</Link>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-6">
          <a href="#" aria-label="LinkedIn" className="hover:text-orange-400 transition">
            <Linkedin size={24} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-orange-400 transition">
            <Twitter size={24} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-orange-400 transition">
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
