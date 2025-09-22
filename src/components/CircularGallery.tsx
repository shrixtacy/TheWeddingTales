'use client'

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CircularGallery: React.FC = () => {
  const featuredImage = 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop';
  
  // Images for corner circles
  const cornerImages = [
    'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', // top-left
    'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', // top-right
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop&crop=center', // bottom-left
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop&crop=center' // bottom-right
  ];

  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Large Black Circle with Image */}
      <div className="relative w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-black overflow-hidden">
        {/* Image inside the circle */}
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${featuredImage})` }}
        />
        
        {/* Cyan Button at bottom */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <button className="w-12 h-12 bg-cyan-500 border-2 border-black rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors duration-300 shadow-lg">
            <ArrowUpRight size={20} className="text-black" />
          </button>
        </div>
      </div>

      {/* Left Text - "Our Gallery" */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10">
        <h2 className="text-6xl md:text-8xl font-bold text-black leading-none">
          Our Gallery
        </h2>
      </div>

      {/* Right Text - "This is pretty cool, right?" */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10">
        <p className="text-xl md:text-2xl text-gray-500 italic max-w-xs text-right">
          This is pretty cool, right?
        </p>
      </div>

      {/* Quarter circles in corners with images */}
      <div className="absolute top-0 left-0 w-32 h-32 rounded-br-full overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${cornerImages[0]})` }}
        />
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${cornerImages[1]})` }}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 rounded-tr-full overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${cornerImages[2]})` }}
        />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${cornerImages[3]})` }}
        />
      </div>
    </section>
  );
};

export default CircularGallery;
