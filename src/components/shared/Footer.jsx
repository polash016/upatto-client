import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 border-t">
      <div className="container mx-auto px-4">
        {/* Navigation Links */}
        <nav className="flex justify-center space-x-6 text-sm font-bold">
          <a href="#home" className="hover:text-gray-900">
            HOME
          </a>
          <a href="#about-us" className="hover:text-gray-900">
            ABOUT US
          </a>
          <a href="#projects" className="hover:text-gray-900">
            PROJECTS
          </a>
          <a href="#media" className="hover:text-gray-900">
            MEDIA
          </a>
          <a href="#contact-us" className="hover:text-gray-900">
            CONTACT US
          </a>
        </nav>

        {/* Address and Contact Info */}
        <div className="mt-4 border-t border-gray-300 pt-4 text-center text-sm">
          <div className="flex flex-wrap justify-center items-center space-x-6">
            <span className="flex items-center space-x-2">
              <i className="fab fa-facebook text-gray-500"></i>
              <span>Upatto</span>
            </span>
            <span className="flex items-center space-x-2">
              <i className="fas fa-map-marker-alt text-gray-500"></i>
              <span>
                House No. 264, Road No. 19 New DOHS, Mohakhali, Dhaka 1206,
                Bangladesh
              </span>
            </span>
            <span className="flex items-center space-x-2">
              <i className="fas fa-envelope text-gray-500"></i>
              <span>info@upattobd.com</span>
            </span>
          </div>
          <div className="flex gap-4 justify-center items-center">
 <p className="mt-4 text-gray-500">All Rights Reserved, © Upatto</p>
 <p className="mt-4 text-gray-400">Website designed by, © <a href="https://blankspacer.com/">Blankspacer</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
