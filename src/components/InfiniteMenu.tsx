'use client'

import React, { useState } from 'react';
import Image from 'next/image';

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

  // Use static Unsplash images for better performance
  const staticImages = [
    'https://images.unsplash.com/photo-1761812127007-ea1621f984b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=766',
    'https://images.unsplash.com/photo-1761812127283-096d64d64f79?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=721',
    'https://images.unsplash.com/photo-1761812126658-a093fef5afc4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=715',
    'https://images.unsplash.com/photo-1761812114541-14556e269935?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=664',
    'https://images.unsplash.com/photo-1761812126661-c17ca98886d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=668',
    'https://images.unsplash.com/photo-1761812126956-b2a89d4cc3de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'
  ];

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

  return (
    <div className="w-full py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-yellow-600">Gallery</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-600 mx-auto mb-6" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Capturing precious moments that tell your unique love story
          </p>
        </div>

        {/* Ultra Simple Grid - No animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staticImages.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteMenu;