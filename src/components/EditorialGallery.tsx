'use client'

import React, { useState, useRef, memo, useMemo } from 'react';
import Image from 'next/image';
import { getRandomizedNonHeroImages } from '@/lib/imageUtils';

const EditorialGallery: React.FC = memo(() => {
  const [currentLocation, setCurrentLocation] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Get randomized images excluding hero images
  const randomizedImages = useMemo(() => getRandomizedNonHeroImages(), []);

  const locations = [
    { name: 'Tuscany', image: randomizedImages[0] || '/images/6S7A8566.jpg' },
    { name: 'Santorini', image: randomizedImages[1] || '/images/6S7A8837.jpg' },
    { name: 'Paris', image: randomizedImages[2] || '/images/6S8A0060.jpg' },
    { name: 'Amalfi Coast', image: randomizedImages[3] || '/images/6S8A0849.jpg' },
    { name: 'Lake Como', image: randomizedImages[4] || '/images/6S8A3066.jpg' },
    { name: 'Provence', image: randomizedImages[5] || '/images/6S8A6703 (1).jpg' },
    { name: 'Swiss Alps', image: randomizedImages[6] || '/images/6S8A7479.jpg' },
    { name: 'Venice', image: randomizedImages[7] || '/images/6S8A7749.jpg' }
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.scrollWidth / locations.length;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setCurrentLocation(newIndex);
    }
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Editorial Header */}
        <div className="text-center mb-20">
          <div className="editorial-heading text-gray-400 mb-8">
            PASSPORT TO PHOTOGRAPHY
          </div>
          <h2 className="editorial-large text-white mb-8 leading-none">
            DESTINATIONS<br />
            AROUND THE WORLD
          </h2>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex space-x-8 overflow-x-auto scrollbar-hide pb-8"
            onScroll={handleScroll}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {locations.map((location, index) => (
              <div key={index} className="flex-shrink-0 group cursor-pointer">
                <div className="relative w-80 h-96 overflow-hidden">
                  <Image
                    src={location.image}
                    alt={`Wedding in ${location.name}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    quality={85}
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-display text-white font-light mb-2">
                      {location.name}
                    </h3>
                    <p className="text-gray-300 font-body text-sm tracking-widest uppercase">
                      Destination Wedding
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {locations.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollRef.current) {
                    const itemWidth = scrollRef.current.scrollWidth / locations.length;
                    scrollRef.current.scrollTo({
                      left: index * itemWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`w-2 h-8 transition-all duration-300 ${
                  index === currentLocation ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Editorial Text Overlay */}
        <div className="mt-32 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-display text-white font-light leading-tight mb-8">
              Every destination tells a story.<br />
              We capture the essence of your love<br />
              against the world's most beautiful backdrops.
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed font-body">
              From the rolling hills of Tuscany to the dramatic cliffs of Santorini, 
              we travel the world to document your most precious moments in the most 
              breathtaking locations.
            </p>
          </div>
        </div>
      </div>

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

EditorialGallery.displayName = 'EditorialGallery';

export default EditorialGallery;

