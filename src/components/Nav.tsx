import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black shadow">
      <div className="w-full px-6 py-2 flex justify-between items-center">

        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img 
            src="/assets/images/fortynx-logo.png"
            alt="Fortynx Logo"
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex justify-center items-center space-x-10 text-gray-700 dark:text-gray-300 font-semibold text-xl">
          <li><a href="/about" className="hover:text-green-500">About</a></li>

          {/* Services with mega dropdown */}
          <li className="relative group">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-green-500">
              <span>Services</span>
              <ChevronDown size={18} />
            </div>
<div className="absolute left-1/2 -translate-x-1/2 mt-3 w-[600px] bg-white dark:bg-gray-900 rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-200 ease-in-out z-50 p-6 grid grid-cols-2 gap-8">

  {/* Web Development Column */}
  <div>
    <h4 className="text-lg font-bold text-black dark:text-white mb-2">Web Development</h4>
    <ul className="space-y-2">
      <li><a href="/service/e-commerce-app-development" className="hover:text-green-500">E-commerce App Development</a></li>
      <li><a href="/service/mobile-app-development" className="hover:text-green-500">Mobile App Development</a></li>
      <li><a href="/service/website-design" className="hover:text-green-500">Website Design</a></li>
      <li><a href="/service/admin-dashboard" className="hover:text-green-500">Admin Dashboard</a></li>
      <li><a href="/service/portfolio-website" className="hover:text-green-500">	Portfolio Website</a></li>
      <li><a href="/service/saas-platform-development" className="hover:text-green-500">SaaS Platform Development</a></li>
    </ul>
  </div>

  {/* Cybersecurity Column */}
  <div>
    <h4 className="text-lg font-bold text-black dark:text-white mb-2">Cybersecurity</h4>
    <ul className="space-y-2">
      <li><a href="/service/penetration-testing" className="hover:text-green-500">Penetration Testing</a></li>
      <li><a href="/service/network-security" className="hover:text-green-500">Network Security</a></li>
      <li><a href="/service/security-consulting" className="hover:text-green-500">Security Consulting</a></li>
      <li><a href="/service/threat-intelligence" className="hover:text-green-500">Threat Intelligence</a></li>
      <li><a href="/service/malware-analysis" className="hover:text-green-500">Malware Analysis</a></li>
      <li><a href="/service/security-monitoring" className="hover:text-green-500">Security Monitoring</a></li>
    </ul>
  </div>
</div>

          </li>
          <li><a href="/blog" className="hover:text-green-500">Blog</a></li>


          <li><a href="/projects" className="hover:text-green-500">Projects</a></li>
          <li><a href="/contact" className="hover:text-green-500">Contact</a></li>
          
        </ul>

{/* Mobile Menu Toggle */}
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

{/* Mobile Dropdown */}
{/* Mobile Dropdown */}
{isOpen && (
  <div className="md:hidden bg-white dark:bg-black px-4 pb-4">
    <ul className="space-y-4 text-gray-700 dark:text-gray-300 font-semibold text-lg">
      <li><a href="#about">About</a></li>
      <li>
        <span className="block font-semibold mb-2">Services</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Web Development Column */}
          <div>
            <h4 className="text-base font-bold text-black dark:text-white mb-2">Web Development</h4>
            <ul className="space-y-2 text-sm ml-2">
              <li><a href="/service/e-commerce-app-development" className="hover:text-green-500">E-commerce App Development</a></li>
              <li><a href="/service/mobile-app-development" className="hover:text-green-500">Mobile App Development</a></li>
              <li><a href="/service/website-design" className="hover:text-green-500">Website Design</a></li>
              <li><a href="/service/admin-dashboard" className="hover:text-green-500">Admin Dashboard</a></li>
              <li><a href="/service/portfolio-website" className="hover:text-green-500">Portfolio Website</a></li>
              <li><a href="/service/saas-platform-development" className="hover:text-green-500">SaaS Platform Development</a></li>
            </ul>
          </div>

          {/* Cybersecurity Column */}
          <div>
            <h4 className="text-base font-bold text-black dark:text-white mb-2">Cybersecurity</h4>
            <ul className="space-y-2 text-sm ml-2">
              <li><a href="/service/penetration-testing" className="hover:text-green-500">Penetration Testing</a></li>
              <li><a href="/service/network-security" className="hover:text-green-500">Network Security</a></li>
              <li><a href="/service/security-consulting" className="hover:text-green-500">Security Consulting</a></li>
              <li><a href="/service/threat-intelligence" className="hover:text-green-500">Threat Intelligence</a></li>
              <li><a href="/service/malware-analysis" className="hover:text-green-500">Malware Analysis</a></li>
              <li><a href="/service/security-monitoring" className="hover:text-green-500">Security Monitoring</a></li>
            </ul>
          </div>
        </div>
      </li>
      <li><a href="/blog">Blog</a></li>

      <li><a href="/projects">Projects</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>
)}


</nav>

  );
};

export default Nav;
