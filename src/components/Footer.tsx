import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-wider">THE WEDDING TALES</h3>
            <p className="text-gray-400 leading-relaxed">
              Creating timeless wedding stories that resonate with love, emotion and authenticity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {['Portfolio', 'Services', 'About', 'Contact', 'Blog'].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-yellow-600 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <div className="space-y-2">
              {['Wedding Photography', 'Wedding Films', 'Engagement Sessions', 'Elopement Packages', 'Drone Services'].map((service, index) => (
                <a
                  key={index}
                  href="#services"
                  className="block text-gray-400 hover:text-yellow-600 transition-colors duration-300"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 The Wedding Tales. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Crafted with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>for visual storytelling</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;