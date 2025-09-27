'use client'

import React, { useState, useEffect, useRef } from 'react';

const PhotographySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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

  // Auto-scroll functionality with smoother timing
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stackImages.length);
    }, 4000); // Slightly longer interval for smoother experience
    return () => clearInterval(interval);
  }, [stackImages.length]);

  // Intersection observer for text animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Section - White Background with Text */}
      <div className="w-full lg:w-2/5 bg-white flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-12 lg:py-20">
        <div className={`transition-all duration-1500 ease-in-out delay-500 ${
          isVisible 
            ? 'opacity-100 blur-0 translate-y-0' 
            : 'opacity-0 blur-lg translate-y-8'
        }`}>
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
                  {/* Full card image coverage */}
                  <div 
                    className="w-full h-full bg-cover bg-center bg-no-repeat will-change-transform"
                    style={{ 
                      backgroundImage: `url(${image})`,
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
};

export default PhotographySection;
