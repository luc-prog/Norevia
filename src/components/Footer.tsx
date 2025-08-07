import React from 'react';
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin as LinkedIn, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/norevia.jpg" 
              alt="NOREVIA Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4 leading-relaxed">
              NOREVIA est votre partenaire de confiance pour développer vos compétences professionnelles. 
              Nous offrons des formations de qualité adaptées aux besoins du marché moderne.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
        
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <LinkedIn className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#formations" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Formations
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Contact
                </a>
              </li>
               <li>
             
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-500" />
                <a href="mailto:noreviasarl@gmail.com" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">
                  noreviasarl@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-500" />
                <span className="text-gray-300 text-sm">+243 890 326 858</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-orange-500 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Avenue des écuries<br />
                  Kinshasa, RDC
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © NOREVIA 2025. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;