import React from 'react';
import { BookUser, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <BookUser size={20} className="text-indigo-600" />
            <span className="text-lg font-semibold text-gray-700">SmartContact</span>
          </div>
          
          <div className="text-gray-500 text-sm flex items-center">
            <span>© {year} SmartContact. Made with</span>
            <Heart size={16} className="mx-1 text-red-500" />
            <span>All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;