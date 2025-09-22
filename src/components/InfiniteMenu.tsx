'use client'

import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface MenuItem {
  image: string;
  link: string;
  title: string;
  description: string;
}

interface InfiniteMenuProps {
  items?: MenuItem[];
}

const InfiniteMenu: React.FC<InfiniteMenuProps> = ({ items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [items.length]);

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
    if (items[index]?.link) {
      if (items[index].link.startsWith('http')) {
        window.open(items[index].link, '_blank');
      } else {
        window.location.href = items[index].link;
      }
    }
  };

  const getCardStyle = (index: number) => {
    const offset = index - currentIndex;
    const isVisible = Math.abs(offset) <= 2; // Show up to 5 cards (current + 2 on each side)
    
    if (!isVisible) return { opacity: 0, transform: 'translateX(100px) scale(0.8)', zIndex: 0 };
    
    const translateX = offset * 20; // 20px offset for each card
    const translateY = offset * 15; // 15px offset down for each card
    const scale = 1 - Math.abs(offset) * 0.1; // Scale down for cards further away
    const zIndex = 100 - Math.abs(offset); // Higher z-index for front cards
    const opacity = 1 - Math.abs(offset) * 0.2; // Fade out for cards further away
    
    return {
      transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
      zIndex,
      opacity
    };
  };

  if (!items.length) return null;

  return (
    <div className="relative w-full h-full bg-white overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-8xl font-bold text-gray-100 select-none pointer-events-none">
          <span className="absolute left-8 top-1/2 transform -translate-y-1/2">HE</span>
          <span className="absolute right-8 top-1/2 transform -translate-y-1/2">S</span>
        </div>
      </div>

      {/* Card Stack Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="absolute transition-all duration-700 ease-out cursor-pointer"
            style={getCardStyle(index)}
            onClick={() => handleCardClick(index)}
          >
            <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              {/* Card Image */}
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              
              {/* Card Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              
              {/* Card Content */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
              
              {/* Category Label */}
              <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                <span className="text-sm font-semibold text-gray-800">Wed Filmer</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-gray-800 scale-110' 
                : 'bg-gray-300 hover:bg-gray-500'
            }`}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>

      {/* Action Button */}
      <div className="absolute bottom-8 right-8">
        <button
          onClick={() => handleCardClick(currentIndex)}
          className="w-16 h-16 bg-cyan-500 border-4 border-black rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors duration-300 shadow-lg"
        >
          <ArrowUpRight size={24} className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default InfiniteMenu;