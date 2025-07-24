import React from "react";
import { Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 dark:bg-black dark:text-gray-400 py-12 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Cybersecurity Solutions */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Cybersecurity Solutions</h3>
          <ul className="space-y-2 text-sm">
            <li>Web Application Security</li>
            <li>Network Security Audit</li>
            <li>Cyber Security Consultation</li>
            <li>Secure Code Review</li>
            <li>Phishing & Awareness Training</li>
          </ul>
        </div>

        {/* IT Solutions */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">IT Solutions</h3>
          <ul className="space-y-2 text-sm">
            <li>Company Website Development</li>
            <li>Portfolio & Personal Sites</li>
            <li>E-Commerce Website Development</li>
            <li>Admin Panels & Dashboards</li>
            <li>Mobile App Development</li>
            <li>Custom SaaS Platform Development</li>
          </ul>
        </div>

        {/* Platforms & Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Platforms</h3>
          <ul className="space-y-2 text-sm">
            <li>WebDev Suite</li>
            <li>CyberX Tools</li>
          </ul>

          <h3 className="text-lg font-semibold text-white mt-8 mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>Blog & Insights</li>
            <li>Security Reports</li>
            <li>About Fortynx</li>
            <li>Join Our Team</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm mb-2">
            Phone: <a href="tel:7901247450" className="hover:underline">7901247450</a>
          </p>
          <p className="text-sm mb-4">
            Email: <a href="mailto:info@gurugubellibhargav.com" className="hover:underline">info@gurugubellibhargav.com</a>
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-500"
            >
              <Linkedin size={24} />
            </a>
            {/* Add other social icons if needed */}
            {/* Example: Twitter, GitHub, Facebook, etc. */}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500 space-y-1">
        <p>© {new Date().getFullYear()} Fortynx. All rights reserved.</p>
        <a href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
