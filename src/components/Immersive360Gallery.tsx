'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const PanoramicGallery: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  // Auto-scroll functionality - continuous scrolling
  useEffect(() => {
    let animationId: number;
    
    const animate = () => {
      if (scrollRef.current) {
        setScrollPosition(prev => {
          const newPosition = prev + 0.5; // Adjust speed here
          const maxScroll = scrollRef.current!.scrollWidth - scrollRef.current!.clientWidth;
          return newPosition >= maxScroll ? 0 : newPosition;
        });
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Update scroll position
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  // Intersection observer for animations
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

  // Calculate tilt based on position in viewport
  const getTiltForImage = (index: number, scrollLeft: number) => {
    const imageWidth = 400; // Width of each image
    const imagePosition = index * imageWidth - scrollLeft;
    const viewportCenter = (containerRef.current?.clientWidth || 0) / 2;
    const distanceFromCenter = imagePosition - viewportCenter;
    const maxTilt = 15; // Maximum tilt angle in degrees
    
    // Calculate tilt based on distance from center
    const tilt = Math.max(-maxTilt, Math.min(maxTilt, -distanceFromCenter / 20));
    return tilt;
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-pink-500/5 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <div className={`relative z-10 pt-16 pb-8 text-center transition-all duration-1500 ease-in-out delay-300 ${
        isVisible 
          ? 'opacity-100 blur-0 translate-y-0' 
          : 'opacity-0 blur-lg translate-y-8'
      }`}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 px-4">
          Your own gallery
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
          A continuous journey through our wedding photography collection
        </p>
      </div>

      {/* Panoramic Gallery Container */}
      <div className={`relative mx-auto w-full max-w-7xl transition-all duration-1500 ease-in-out delay-500 ${
        isVisible 
          ? 'opacity-100 blur-0 translate-y-0' 
          : 'opacity-0 blur-lg translate-y-8'
      }`}>
        
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
                  {/* Image with Dynamic Tilt Effect */}
                  <div 
                    className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-300"
                    style={{ 
                      backgroundImage: `url(${image})`,
                      transform: `perspective(1000px) rotateY(${tilt}deg)`,
                      transformOrigin: 'center center',
                      filter: 'brightness(0.9) contrast(1.1)'
                    }}
                  />
                  
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
};

export default PanoramicGallery;