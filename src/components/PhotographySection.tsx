'use client'

import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import Image from 'next/image';

const PhotographySection: React.FC = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  const stackImages = [
    '/images/4a41f4753c333868e42cbb9b4a4799e9.jpg',
    '/images/6S7A8566.jpg',
    '/images/6S7A8837.jpg',
    '/images/6S8A0060.jpg',
    '/images/6S8A0849.jpg',
    '/images/6S8A3066.jpg',
    '/images/6S8A6703 (1).jpg',
    '/images/6S8A7479.jpg',
    '/images/6S8A7749.jpg'
  ];

  // Simplified auto-scroll - always running
  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % stackImages.length);
  }, [stackImages.length]);

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, [nextImage]);

  // Removed intersection observer for better performance

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Section - White Background with Text */}
      <div className="w-full lg:w-2/5 bg-white flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-12 lg:py-20">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Wed Filmer
          </h2>
          <h3 className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8 font-light">
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
      </div>

      {/* Right Section - Scroll Stack */}
      <div className="w-full lg:w-3/5 relative overflow-hidden bg-gray-100 flex items-center justify-center h-[400px] sm:h-[500px] lg:h-auto">
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
            const zIndex = 40 - stackPosition; // Lower z-index to stay below navbar (z-50)
            const opacity = 1 - (stackPosition * 0.15); // Fade out for back cards
            
            return (
              <div
                key={index}
                className={`absolute transition-all duration-1200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] will-change-transform ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale}) rotate(${rotate}deg)`,
                  zIndex,
                  opacity,
                  backfaceVisibility: 'hidden',
                  perspective: '1000px'
                }}
              >
                <div className="w-[40rem] h-[40rem] rounded-3xl overflow-hidden shadow-2xl border-4 border-white will-change-transform">
                  {/* Optimized image with Next.js Image component */}
                  <Image
                    src={image}
                    alt={`Wedding photography ${index + 1}`}
                    width={640}
                    height={640}
                    className="w-full h-full object-cover will-change-transform"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40rem"
                    style={{ 
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden'
                    }}
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
});

PhotographySection.displayName = 'PhotographySection';

export default PhotographySection;
