'use client'

import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import Image from 'next/image';

const PanoramicGallery: React.FC = memo(() => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  // All your wedding photos for the panoramic gallery
  const galleryImages = [
    '/images/0F6A9741.jpg',
    '/images/6S8A0861.jpg',
    '/images/6S8A7477.jpg',
    '/images/6S8A9608.jpg',
    '/images/6S8A9924.jpg',
    '/images/3a334794a8235f5788ed5ecf9595bea3.jpg',
    // Duplicate images for seamless loop
    '/images/0F6A9741.jpg',
    '/images/6S8A0861.jpg',
    '/images/6S8A7477.jpg',
    '/images/6S8A9608.jpg',
    '/images/6S8A9924.jpg',
    '/images/3a334794a8235f5788ed5ecf9595bea3.jpg'
  ];

  // Simplified auto-scroll functionality - always running
  useEffect(() => {
    const animate = () => {
      if (scrollRef.current) {
        setScrollPosition(prev => {
          const newPosition = prev + 0.3; // Reduced speed for smoother performance
          const maxScroll = scrollRef.current!.scrollWidth - scrollRef.current!.clientWidth;
          return newPosition >= maxScroll ? 0 : newPosition;
        });
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Update scroll position
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  // Removed intersection observer for better performance

  // Optimized tilt calculation with memoization
  const getTiltForImage = useCallback((index: number, scrollLeft: number) => {
    const imageWidth = 400; // Width of each image
    const imagePosition = index * imageWidth - scrollLeft;
    const viewportCenter = (containerRef.current?.clientWidth || 0) / 2;
    const distanceFromCenter = imagePosition - viewportCenter;
    const maxTilt = 10; // Reduced maximum tilt for better performance
    
    // Calculate tilt based on distance from center
    const tilt = Math.max(-maxTilt, Math.min(maxTilt, -distanceFromCenter / 25));
    return tilt;
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Simplified Background Elements - Removed heavy blur effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/3 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/3 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-pink-500/3 rounded-full"></div>
      </div>

      {/* Header - Removed blur effect for better performance */}
      <div className="relative z-10 pt-16 pb-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 px-4">
          Your own gallery
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
          A continuous journey through our wedding photography collection
        </p>
      </div>

      {/* Panoramic Gallery Container - Removed blur effect */}
      <div className="relative mx-auto w-full max-w-7xl">
        
        {/* Curved Panoramic Container */}
        <div 
          ref={containerRef}
          className="relative h-96 md:h-[500px] overflow-hidden"
        >
          {/* Curved Background for Panorama Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-3xl"></div>
          
          {/* Panoramic Scroll Container */}
          <div 
            ref={scrollRef}
            className="flex h-full overflow-x-auto scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            onScroll={(e) => {
              const scrollLeft = e.currentTarget.scrollLeft;
              setScrollPosition(scrollLeft);
            }}
          >
            {galleryImages.map((image, index) => {
              const tilt = getTiltForImage(index, scrollPosition);
              
              return (
                <div
                  key={index}
                  className="flex-shrink-0 relative group"
                  style={{ width: '400px', height: '100%' }}
                >
                  {/* Optimized Image with Tilt Effect */}
                  <div 
                    className="w-full h-full transition-transform duration-200 will-change-transform"
                    style={{ 
                      transform: `perspective(1000px) rotateY(${tilt}deg) translateZ(0)`,
                      transformOrigin: 'center center',
                      filter: 'brightness(0.9) contrast(1.1)',
                      backfaceVisibility: 'hidden'
                    }}
                  >
                    <Image
                      src={image}
                      alt={`Gallery photo ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                      quality={75}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    />
                  </div>
                  
                </div>
              );
            })}
          </div>

          {/* Curved Edges Overlay for Panorama Effect */}
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          
          {/* Top and Bottom Curves */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        </div>

      </div>

      {/* Custom CSS for scrollbar hiding */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
});

PanoramicGallery.displayName = 'PanoramicGallery';

export default PanoramicGallery;