import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = (
    <>
      <li><a href="#about" className="hover:text-green-500">About</a></li>
      <li><a href="#services" className="hover:text-green-500">Services</a></li>
      <li><a href="#projects" className="hover:text-green-500">Projects</a></li>
      <li><a href="#contact" className="hover:text-green-500">Contact</a></li>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black shadow">
      <div className="w-full px-4 py-4 flex justify-between items-center">

        
        {/* Logo only (no text duplication) */}


<div className="flex items-center space-x-2 ml-0">
  <div className="h-10 w-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg">
    F
  </div>
  <span className="text-xl font-semibold text-gray-800 dark:text-white" style={{ letterSpacing: '4px' }}>
  Fortynx
</span>

</div>


        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300 font-medium">
          {navLinks}
        </ul>

        {/* Hamburger Icon (Mobile only) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black px-4 pb-4">
          <ul className="space-y-4 text-gray-700 dark:text-gray-300 font-medium">
            {navLinks}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
