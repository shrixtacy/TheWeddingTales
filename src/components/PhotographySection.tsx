'use client'

import React, { useState, useEffect } from 'react';

const PhotographySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const stackImages = [
    'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=600&h=600&fit=crop&crop=center'
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stackImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stackImages.length]);

  return (
    <section className="min-h-screen flex">
      {/* Left Section - White Background with Text */}
      <div className="w-2/5 bg-white flex flex-col justify-center px-12 py-20">
        <h2 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Wed Filmer
        </h2>
        <h3 className="text-2xl text-gray-700 mb-8 font-light">
          Photography Films
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
          We offer professional photography and videography services for all your special occasions, 
          including pre-weddings, weddings, engagements, birthdays, and corporate events. Whether it's 
          capturing the romance of a couple, the joy of a celebration, or the professionalism of a 
          business gathering, our team ensures every moment is beautifully documented with creativity, 
          precision, and passion—turning your memories into timeless stories.
        </p>
      </div>

      {/* Right Section - Scroll Stack */}
      <div className="w-3/5 relative overflow-hidden bg-gray-100 flex items-center justify-center">
        {/* Scroll Stack Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {stackImages.map((image, index) => {
            // Calculate position in stack
            let stackPosition = index - currentIndex;
            if (stackPosition < 0) {
              stackPosition += stackImages.length;
            }
            
            // Show only the top 4 cards in the stack
            const isVisible = stackPosition < 4;
            
            // Calculate positioning for slanting towards right bottom
            const translateY = stackPosition * 20; // 20px vertical offset
            const translateX = stackPosition * 25; // 25px horizontal offset (more spread)
            const rotate = stackPosition * 3; // 3 degrees rotation for more slant
            const scale = 1 - (stackPosition * 0.08); // More scale down for better spread
            const zIndex = 100 - stackPosition; // Higher z-index for front cards
            const opacity = 1 - (stackPosition * 0.15); // Fade out for back cards
            
            return (
              <div
                key={index}
                className={`absolute transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
                  zIndex,
                  opacity
                }}
              >
                <div className="w-[40rem] h-[40rem] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  {/* Full card image coverage */}
                  <div 
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Rounded corners on the left side */}
        <div className="absolute left-0 top-0 w-8 h-full bg-white rounded-r-full"></div>
        <div className="absolute left-0 bottom-0 w-8 h-full bg-white rounded-r-full"></div>
      </div>
    </section>
  );
};

export default PhotographySection;
