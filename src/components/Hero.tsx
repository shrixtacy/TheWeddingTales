'use client'

import React, { useEffect, useState, useRef, memo, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isTextBlurred, setIsTextBlurred] = useState(true);
  const [isMobileTextFaded, setIsMobileTextFaded] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  
  const heroImages = [
    'https://images.unsplash.com/photo-1761812295717-dd5ad51d1bc6?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1761812295744-c996c7612b13?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1761812295884-7879222b3241?auto=format&fit=crop&w=1400&q=80'
  ];

  // Optimized slide transition with useCallback
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, [heroImages.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Trigger text animation with blur effect
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsTextVisible(true);
    }, 800);
    
    const timer2 = setTimeout(() => {
      setIsTextBlurred(false);
    }, 1200);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Mobile fade-out effect for hero text
  useEffect(() => {
    let fadeTimer: NodeJS.Timeout;
    
    const checkMobileAndFade = () => {
      const isMobile = window.innerWidth < 768; // md breakpoint
      if (isMobile) {
        // Fade out text after 7 seconds on mobile
        fadeTimer = setTimeout(() => {
          setIsMobileTextFaded(true);
        }, 7000);
      } else {
        setIsMobileTextFaded(false);
      }
    };

    checkMobileAndFade();
    
    // Listen for resize events to handle orientation changes
    const handleResize = () => {
      clearTimeout(fadeTimer);
      const isMobile = window.innerWidth < 768;
      if (!isMobile) {
        setIsMobileTextFaded(false);
      } else {
        // Reset and restart fade timer on mobile
        setIsMobileTextFaded(false);
        fadeTimer = setTimeout(() => {
          setIsMobileTextFaded(true);
        }, 7000);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(fadeTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Full-screen background with dramatic overlay */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image})` }}
            />
            {/* Dramatic dark overlay for text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-60" />
          </div>
        ))}
      </div>


      {/* Main Content - Editorial Style */}
      <div 
        ref={textRef}
        className={`relative z-10 h-full flex flex-col justify-start md:justify-center pt-28 md:pt-0 px-8 transition-all duration-1500 ease-out ${
          isTextVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Large Editorial Text with Blur Animation */}
        <div className={`max-w-4xl transition-opacity duration-1000 ${
          isMobileTextFaded ? 'md:opacity-100 opacity-0' : 'opacity-100'
        }`}>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight hero-text-blur ${
            !isTextBlurred ? 'visible' : ''
          }`}>
            <div className={`hero-text-line ${!isTextBlurred ? 'visible' : ''}`}>
              Experience the Art of
            </div>
            <div className={`hero-text-line ${!isTextBlurred ? 'visible' : ''}`}>
              Luxury Wedding Photography
            </div>
          </h1>
          
          <p className={`editorial-subtitle text-gray-300 mb-12 tracking-widest transition-all duration-1000 ease-out delay-700 ${
            isTextBlurred ? 'blur-sm opacity-0 translate-y-4' : 'blur-none opacity-100 translate-y-0'
          }`}>
            Cinematic Wedding Photography & Films
          </p>
        </div>
      </div>

      {/* Scroll Indicator - Editorial Style */}
      <div className="absolute bottom-8 left-8 flex items-center space-x-3 text-white">
        <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center">
          <ChevronDown size={16} />
        </div>
        <span className="text-sm tracking-widest">SCROLL</span>
      </div>

      {/* Slide Indicators - Minimalist */}
      <div className="absolute bottom-8 right-8 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1 h-8 transition-all duration-500 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-30'
            }`}
          />
        ))}
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;