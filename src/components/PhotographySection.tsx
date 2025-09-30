'use client'

import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import Image from 'next/image';

const PhotographySection: React.FC = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  const galleryImages = [
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

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, [galleryImages.length]);

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <section ref={sectionRef} className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Editorial Header */}
        <div className="text-center mb-20">
          <div className="editorial-heading text-gray-400 mb-8">
            DISCOVER OUR WORK
          </div>
          <h2 className="editorial-large text-white mb-8 leading-none">
            TIMELESS ROMANCE<br />
            AT VILLA ERBA
          </h2>
        </div>

        {/* Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {galleryImages.slice(0, 6).map((image, index) => (
            <div key={index} className="group relative overflow-hidden">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src={image}
                  alt={`Wedding photography ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Featured Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="editorial-heading text-gray-400">
              FEATURED IN VOGUE
            </div>
            <h3 className="text-4xl lg:text-5xl font-display text-white font-light leading-tight">
              JEWISH WEDDING<br />
              AT VILLA MIANI
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed font-body">
              A celebration of love and tradition, captured with editorial precision. 
              Every moment tells a story of heritage, joy, and the beginning of a new chapter.
            </p>
            <button className="group relative px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-500 tracking-widest text-sm font-body overflow-hidden">
              <span className="relative z-10">VIEW FULL STORY</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </button>
          </div>

          {/* Featured Image */}
          <div className="relative group">
            <div className="aspect-[3/4] relative overflow-hidden">
              <Image
                src={galleryImages[currentIndex]}
                alt="Featured wedding story"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Meet the Team Section */}
        <div className="mt-32 text-center">
          <div className="editorial-heading text-gray-400 mb-8">
            MEET T&W
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="relative group">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="/images/6S8A9608.jpg"
                  alt="Team member"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="/images/6S8A7477.jpg"
                  alt="Team member"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-32 text-center">
          <div className="editorial-heading text-gray-400 mb-8">
            LET'S CONNECT
          </div>
          <h3 className="text-4xl lg:text-6xl font-display text-white font-light leading-tight mb-8">
            INVEST IN THE<br />
            INDELIBLE
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative px-12 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-500 tracking-widest text-sm font-body overflow-hidden">
              <span className="relative z-10">INQUIRE</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </button>
            <button className="group relative px-12 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-500 tracking-widest text-sm font-body overflow-hidden">
              <span className="relative z-10">VIEW PRICING</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

PhotographySection.displayName = 'PhotographySection';

export default PhotographySection;
