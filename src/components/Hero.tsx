'use client'

import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFrameExpanded, setIsFrameExpanded] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  
  const heroImages = [
    '/images/6S8A9924.jpg',
    '/images/6S8A7477.jpg',
    '/images/6S8A0861.jpg',
    '/images/3a334794a8235f5788ed5ecf9595bea3.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Trigger frame expansion animation on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFrameExpanded(true);
    }, 500); // Start animation after 500ms
    return () => clearTimeout(timer);
  }, []);

  // Trigger text blur-in animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextVisible(true);
    }, 1000); // Start text animation after 1 second
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Slideshow with Animated Frame */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className={`relative transition-all duration-2000 ease-out ${
            isFrameExpanded 
              ? 'w-full h-full' 
              : 'w-1/4 h-1/4'
          }`}
        >
          {/* Photo Frame Border */}
          <div className="absolute inset-0 border-8 border-white shadow-2xl">
            <div className="absolute inset-0 border-2 border-gray-300"></div>
          </div>
          
          {/* Image Container - Fixed size, no scaling */}
          <div className="relative w-full h-full overflow-hidden">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-2000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div 
        ref={textRef}
        className={`relative z-10 h-full flex flex-col items-center justify-center text-center px-4 transition-all duration-2000 ease-in-out ${
          isTextVisible 
            ? 'opacity-100 blur-0' 
            : 'opacity-0 blur-lg'
        }`}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 tracking-wider px-4">
          THE WEDDING TALES
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 font-light tracking-wide px-4 max-w-4xl">
          Cinematic Wedding Photography & Films
        </p>
        
        <button className="group relative px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-500 tracking-widest text-sm font-medium overflow-hidden">
          <span className="relative z-10">EXPLORE PORTFOLIO</span>
          <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;