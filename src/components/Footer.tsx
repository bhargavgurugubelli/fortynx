// src/components/Footer.tsx
import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">&copy; {new Date().getFullYear()} Fortynx. All rights reserved.</p>
          </div>

          {/* Middle Section */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="/privacy-policy" className="text-sm hover:underline">Privacy Policy</a>
            <a href="/terms-of-use" className="text-sm hover:underline">Terms of use</a>
            <a href="/disclaimer" className="text-sm hover:underline">Disclaimer</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 hover:text-blue-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 hover:text-blue-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 hover:text-pink-500" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 hover:text-blue-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
