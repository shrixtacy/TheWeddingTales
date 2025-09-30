'use client'

import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const CircularGallery: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Using your new wedding photos
  const featuredImage = '/images/4a41f4753c333868e42cbb9b4a4799e9.jpg';
  
  // Floating cards around the main circle
  const floatingCards = [
    { 
      image: '/images/6S7A8566.jpg', 
      position: { x: 15, y: 20 }, 
      size: 'medium',
      rotation: -15,
      delay: 0
    },
    { 
      image: '/images/6S7A8837.jpg', 
      position: { x: 75, y: 15 }, 
      size: 'small',
      rotation: 20,
      delay: 0.3
    },
    { 
      image: '/images/6S8A0060.jpg', 
      position: { x: 10, y: 70 }, 
      size: 'large',
      rotation: -8,
      delay: 0.6
    },
    { 
      image: '/images/6S8A0849.jpg', 
      position: { x: 80, y: 75 }, 
      size: 'medium',
      rotation: 12,
      delay: 0.9
    },
    { 
      image: '/images/6S8A3066.jpg', 
      position: { x: 45, y: 10 }, 
      size: 'small',
      rotation: -25,
      delay: 1.2
    },
    { 
      image: '/images/6S8A6703 (1).jpg', 
      position: { x: 50, y: 80 }, 
      size: 'medium',
      rotation: 18,
      delay: 1.5
    },
    { 
      image: '/images/6S8A7479.jpg', 
      position: { x: 25, y: 45 }, 
      size: 'small',
      rotation: -12,
      delay: 1.8
    },
    { 
      image: '/images/6S8A7749.jpg', 
      position: { x: 65, y: 50 }, 
      size: 'medium',
      rotation: 15,
      delay: 2.1
    }
  ];

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

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

  // Get card size classes
  const getCardSize = (size: string) => {
    switch (size) {
      case 'large': return 'w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56';
      case 'medium': return 'w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40';
      case 'small': return 'w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32';
      default: return 'w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40';
    }
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center overflow-hidden">
      {/* Floating Cards around the main circle */}
      {floatingCards.map((card, index) => {
        // Parallax effect based on mouse position
        const parallaxX = (mousePosition.x - 0.5) * 15;
        const parallaxY = (mousePosition.y - 0.5) * 15;
        
        // Hover effect
        const isHovered = hoveredCard === index;
        const hoverScale = isHovered ? 1.1 : 1;
        const hoverRotate = isHovered ? card.rotation + 10 : card.rotation;
        const hoverZ = isHovered ? 20 : 10;

        return (
          <div
            key={index}
            className={`absolute transition-all duration-700 ease-out cursor-pointer ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              left: `${card.position.x}%`,
              top: `${card.position.y}%`,
              transform: `translate(${parallaxX}px, ${parallaxY}px) scale(${hoverScale}) rotate(${hoverRotate}deg)`,
              zIndex: hoverZ,
              transitionDelay: `${card.delay}s`,
              transformOrigin: 'center center',
              willChange: 'transform'
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={`${getCardSize(card.size)} rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 backdrop-blur-sm transition-all duration-500 hover:shadow-3xl`}>
              <div className="relative w-full h-full">
                <Image
                  src={card.image}
                  alt={`Gallery photo ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  quality={60}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  style={{ 
                    filter: isHovered ? 'brightness(1.1) saturate(1.1)' : 'brightness(1) saturate(1)'
                  }}
                />
              </div>
              
              {/* Overlay gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`} />
              
              {/* Floating animation */}
              <div 
                className="absolute inset-0 animate-float"
                style={{
                  animationDelay: `${index * 0.5}s`,
                  animationDuration: '8s'
                }}
              />
            </div>
          </div>
        );
      })}

      {/* Large Black Circle with Image */}
      <div className="relative w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] rounded-full bg-black overflow-hidden shadow-2xl border-4 border-white/20">
        {/* Image inside the circle */}
        <div className="relative w-full h-full">
          <Image
            src={featuredImage}
            alt="Featured gallery photo"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            quality={70}
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>
        
        {/* Cyan Button at bottom */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <button className="w-12 h-12 bg-cyan-500 border-2 border-black rounded-full flex items-center justify-center hover:bg-cyan-400 transition-all duration-300 shadow-lg hover:scale-110">
            <ArrowUpRight size={20} className="text-black" />
          </button>
        </div>
      </div>

      {/* Left Text - "Our Gallery" */}
      <div className={`absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-10 transition-all duration-1500 ease-in-out delay-500 ${
        isVisible 
          ? 'opacity-100 blur-0 translate-y-0' 
          : 'opacity-0 blur-lg translate-y-8'
      }`}>
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-black leading-none">
          Our Gallery
        </h2>
      </div>

      {/* Right Text - "This is pretty cool, right?" */}
      <div className={`absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-10 transition-all duration-1500 ease-in-out delay-700 ${
        isVisible 
          ? 'opacity-100 blur-0 translate-y-0' 
          : 'opacity-0 blur-lg translate-y-8'
      }`}>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-500 italic max-w-xs text-right">
          This is pretty cool, right?
        </p>
      </div>

      {/* Background floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/15 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/20 rounded-full blur-md animate-pulse delay-2000"></div>
      </div>

      {/* Custom CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(1deg); }
          50% { transform: translateY(-4px) rotate(0deg); }
          75% { transform: translateY(-12px) rotate(-1deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CircularGallery;
