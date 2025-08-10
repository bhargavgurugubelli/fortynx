import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle
  const [isScrolled, setIsScrolled] = useState(false);

  // Desktop Dropdown open states
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Timer refs for delayed closing on desktop
  const aboutTimer = useRef<NodeJS.Timeout | null>(null);
  const servicesTimer = useRef<NodeJS.Timeout | null>(null);

  // Mobile submenu open states
  const [aboutMobileOpen, setAboutMobileOpen] = useState(false);
  const [servicesMobileOpen, setServicesMobileOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Desktop dropdown handlers
  const handleAboutMouseEnter = () => {
    if (aboutTimer.current) {
      clearTimeout(aboutTimer.current);
      aboutTimer.current = null;
    }
    setAboutOpen(true);
  };
  const handleAboutMouseLeave = () => {
    aboutTimer.current = setTimeout(() => {
      setAboutOpen(false);
    }, 300);
  };
  const handleServicesMouseEnter = () => {
    if (servicesTimer.current) {
      clearTimeout(servicesTimer.current);
      servicesTimer.current = null;
    }
    setServicesOpen(true);
  };
  const handleServicesMouseLeave = () => {
    servicesTimer.current = setTimeout(() => {
      setServicesOpen(false);
    }, 300);
  };

  // Mobile submenu toggles
  const toggleAboutMobile = () => setAboutMobileOpen((prev) => !prev);
  const toggleServicesMobile = () => setServicesMobileOpen((prev) => !prev);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white dark:bg-black shadow transition-all duration-300 ${
        isScrolled ? 'py-2 shadow-md' : 'py-3'
      }`}
    >
      <div className="w-full px-6 flex justify-between items-center transition-all duration-300">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src="/assets/images/fortynx-logo.png"
            alt="Fortynx Logo"
            className={`transition-all duration-300 ${isScrolled ? 'h-8' : 'h-12'} w-auto`}
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex justify-center items-center space-x-10 text-gray-700 dark:text-gray-300 font-semibold text-xl">
          {/* About Dropdown */}
          <li
            className="relative"
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            <div className="flex items-center space-x-1 cursor-pointer hover:text-orange-500">
              <span>About</span>
              <ChevronDown size={18} />
            </div>
            <div
              className={`absolute left-1/2 -translate-x-1/2 mt-3 w-48 bg-white dark:bg-gray-900 rounded shadow-lg transition-opacity duration-200 ease-in-out z-50 p-4 ${
                aboutOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
            >
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about/mission"
                    className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                  >
                    Our Mission
                  </a>
                </li>
                <li>
                  <a
                    href="/about/vision"
                    className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                  >
                    Our Vision
                  </a>
                </li>
              </ul>
            </div>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <div className="flex items-center space-x-1 cursor-pointer hover:text-orange-500">
              <span>Services</span>
              <ChevronDown size={18} />
            </div>
            <div
              className={`absolute left-1/2 -translate-x-1/2 mt-3 w-[600px] bg-white dark:bg-gray-900 rounded shadow-lg transition-opacity duration-200 ease-in-out z-50 p-6 grid grid-cols-2 gap-8 ${
                servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
            >
              {/* Web Development */}
              <div>
                <h4 className="text-lg font-bold text-black dark:text-white mb-2">Web Development</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/service/e-commerce-app-development"
                      className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                    >
                      E-commerce App Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="/service/mobile-app-development"
                      className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                    >
                      Mobile App Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="/service/website-design"
                      className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                    >
                      Website Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="/service/admin-dashboard"
                      className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                    >
                      Admin Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="/service/portfolio-website"
                      className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                    >
                      Portfolio Website
                    </a>
                  </li>
                  <li>
                    <a
                      href="/service/saas-platform-development"
                      className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                    >
                      SaaS Platform Development
                    </a>
                  </li>
                </ul>
              </div>
              {/* Cybersecurity */}
              <div>
                <h4 className="text-lg font-bold text-black dark:text-white mb-2">Cybersecurity</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/service/penetration-testing"
                      className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                    >
                      Penetration Testing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/service/network-security"
                      className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                    >
                      Network Security
                    </a>
                  </li>
                  <li>
                    <a
                      href="/service/security-consulting"
                      className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                    >
                      Security Consulting
                    </a>
                  </li>
                  <li>
                    <a
                      href="/service/threat-intelligence"
                      className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                    >
                      Threat Intelligence
                    </a>
                  </li>
                  <li>
                    <a
                      href="/service/malware-analysis"
                      className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                    >
                      Malware Analysis
                    </a>
                  </li>
                  <li>
                    <a
                      href="/service/security-monitoring"
                      className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                    >
                      Security Monitoring
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <a href="/blog" className="hover:text-orange-500">
              Blog
            </a>
          </li>
          <li>
            <a href="/projects" className="hover:text-orange-500">
              Projects
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-orange-500">
              Contact
            </a>
          </li>
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
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black px-4 pb-4">
          <ul className="space-y-4 text-gray-700 dark:text-gray-300 font-semibold text-lg">
            {/* About submenu */}
            <li>
              <button
                onClick={toggleAboutMobile}
                className="flex justify-between w-full font-semibold mb-2 text-orange-600"
                aria-expanded={aboutMobileOpen}
              >
                About
                {aboutMobileOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {aboutMobileOpen && (
                <ul className="ml-4 space-y-1 text-base">
                  <li>
                    <a
                      href="/about/mission"
                      className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                    >
                      Our Mission
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about/vision"
                      className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                    >
                      Our Vision
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Services submenu */}
            <li>
              <button
                onClick={toggleServicesMobile}
                className="flex justify-between w-full font-semibold mb-2 text-orange-600"
                aria-expanded={servicesMobileOpen}
              >
                Services
                {servicesMobileOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {servicesMobileOpen && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ml-4">
                  <div>
                    <h4 className="text-base font-bold text-black dark:text-white mb-2">
                      Web Development
                    </h4>
                    <ul className="space-y-2 text-sm ml-2">
                      <li>
                        <a
                          href="/service/e-commerce-app-development"
                          className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                        >
                          E-commerce App Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="/service/mobile-app-development"
                          className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                        >
                          Mobile App Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="/service/website-design"
                          className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                        >
                          Website Design
                        </a>
                      </li>
                      <li>
                        <a
                          href="/service/admin-dashboard"
                          className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                        >
                          Admin Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="/service/portfolio-website"
                          className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                        >
                          Portfolio Website
                        </a>
                      </li>
                      <li>
                        <a
                          href="/service/saas-platform-development"
                          className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                        >
                          SaaS Platform Development
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-black dark:text-white mb-2">
                      Cybersecurity
                    </h4>
                    <ul className="space-y-2 text-sm ml-2">
                      <li>
                        <a
                          href="/service/penetration-testing"
                          className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                        >
                          Penetration Testing
                        </a>
                      </li>
                      <li>
                        <a
                          href="/service/network-security"
                          className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                        >
                          Network Security
                        </a>
                      </li>
                      <li>
                        <a
                          href="/service/security-consulting"
                          className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                        >
                          Security Consulting
                        </a>
                      </li>
                      <li>
                        <a
                          href="/service/threat-intelligence"
                          className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                        >
                          Threat Intelligence
                        </a>
                      </li>
                      <li>
                        <a
                          href="/service/malware-analysis"
                          className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                        >
                          Malware Analysis
                        </a>
                      </li>
                      <li>
                        <a
                          href="/service/security-monitoring"
                          className="block px-4 py-2 rounded-md border border-transparent hover:border-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                        >
                          Security Monitoring
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>

            <li>
              <a href="/blog" className="text-orange-600 hover:text-orange-500">
                Blog
              </a>
            </li>
            <li>
              <a href="/projects" className="text-orange-600 hover:text-orange-500">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="text-orange-600 hover:text-orange-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
