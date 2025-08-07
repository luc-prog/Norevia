import React, { useState } from 'react';
import { Menu, X, Mail, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/norevia.jpg" 
              alt="NOREVIA Logo" 
              className="h-20 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium">
              Accueil
            </a>
              <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium">
              Nos services
            </a>
            <a href="#formations" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium">
              Formations
            </a>
            <a href="#apropos" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium">
              À propos
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium">
              Contact
            </a>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200 flex items-center space-x-2"
            >
              <Mail size={16} />
              <span>Nous contacter</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-orange-500 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#accueil" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium">
                Accueil
              </a>
              <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium">
                Nos Services
              </a>
              <a href="#formations" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium">
                Formations
              </a>
              <a href="#apropos" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium">
                À propos
              </a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium">
                Contact
              </a>
              <a
                href="#contact"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200 flex items-center space-x-2 w-fit"
              >
                <Mail size={16} />
                <span>Nous contacter</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;