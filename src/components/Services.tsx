'use client'

import React, { useEffect, useRef, useState } from 'react';

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Gallery images with different sizes for masonry effect
  const galleryImages = [
    { src: '/images/4a41f4753c333868e42cbb9b4a4799e9.jpg', alt: 'Wedding Ceremony', size: 'tall' },
    { src: '/images/6S7A8566.jpg', alt: 'Bridal Portrait', size: 'wide' },
    { src: '/images/6S7A8837.jpg', alt: 'Wedding Reception', size: 'medium' },
    { src: '/images/6S8A0060.jpg', alt: 'Couple Portrait', size: 'square' },
    { src: '/images/6S8A0849.jpg', alt: 'Wedding Details', size: 'tall' },
    { src: '/images/6S8A3066.jpg', alt: 'Bridal Party', size: 'wide' },
    { src: '/images/6S8A6703 (1).jpg', alt: 'Wedding Venue', size: 'medium' },
    { src: '/images/6S8A7479.jpg', alt: 'Wedding Rings', size: 'tall' },
    { src: '/images/6S8A7749.jpg', alt: 'Wedding Dance', size: 'square' },
    { src: '/images/0F6A9741.jpg', alt: 'Wedding Kiss', size: 'tall' },
    { src: '/images/6S8A0861.jpg', alt: 'Wedding Cake', size: 'wide' },
    { src: '/images/6S8A7477.jpg', alt: 'Wedding Flowers', size: 'medium' },
  ];

  // Duplicate images for infinite scroll
  const infiniteImages = [...galleryImages, ...galleryImages, ...galleryImages];

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
    <>
      <style>
        {`
          @keyframes infiniteScrollUp {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }
          
          .gallery-container {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            animation: infiniteScrollUp 30s linear infinite;
            will-change: transform;
          }
          
          .gallery-container:hover {
            animation-play-state: paused;
          }
          
          .gallery-wrapper {
            position: relative;
            height: 200vh;
            overflow: hidden;
          }
          
          .gallery-row {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            width: 100%;
          }
          
          @media (max-width: 640px) {
            .gallery-row {
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 0.75rem;
            }
          }
          
          .gallery-item {
            position: relative;
            overflow: hidden;
            border-radius: 0.5rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
          }
          
          .gallery-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          }
          
          .gallery-item img {
            width: 100%;
            height: auto;
            object-fit: cover;
            transition: transform 0.7s ease;
          }
          
          .gallery-item:hover img {
            transform: scale(1.05);
          }
        `}
      </style>
      <section ref={sectionRef} id="gallery" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1500 ease-in-out delay-300 ${
            isVisible 
              ? 'opacity-100 blur-0 translate-y-0' 
              : 'opacity-0 blur-lg translate-y-8'
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 px-4">
              Our <span className="text-yellow-600">Gallery</span>
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-yellow-600 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Capturing precious moments that tell your unique love story
            </p>
          </div>

          {/* Infinite Scrolling Gallery */}
          <div className="gallery-wrapper">
            <div 
              ref={containerRef}
              className="gallery-container"
            >
              {/* First set of images */}
              <div className="gallery-row">
                {galleryImages.slice(0, 3).map((image, index) => (
                  <div key={`set1-${index}`} className="gallery-item group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-sm font-semibold mb-1">{image.alt}</h3>
                      <p className="text-xs opacity-90">Wedding Photography</p>
                    </div>
                    <div className="absolute inset-0 bg-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
              
              <div className="gallery-row">
                {galleryImages.slice(3, 6).map((image, index) => (
                  <div key={`set2-${index}`} className="gallery-item group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-sm font-semibold mb-1">{image.alt}</h3>
                      <p className="text-xs opacity-90">Wedding Photography</p>
                    </div>
                    <div className="absolute inset-0 bg-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
              
              <div className="gallery-row">
                {galleryImages.slice(6, 9).map((image, index) => (
                  <div key={`set3-${index}`} className="gallery-item group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-sm font-semibold mb-1">{image.alt}</h3>
                      <p className="text-xs opacity-90">Wedding Photography</p>
                    </div>
                    <div className="absolute inset-0 bg-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
              
              <div className="gallery-row">
                {galleryImages.slice(9, 12).map((image, index) => (
                  <div key={`set4-${index}`} className="gallery-item group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-sm font-semibold mb-1">{image.alt}</h3>
                      <p className="text-xs opacity-90">Wedding Photography</p>
                    </div>
                    <div className="absolute inset-0 bg-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>

              {/* Duplicate the entire set for seamless loop */}
              <div className="gallery-row">
                {galleryImages.slice(0, 3).map((image, index) => (
                  <div key={`set5-${index}`} className="gallery-item group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-sm font-semibold mb-1">{image.alt}</h3>
                      <p className="text-xs opacity-90">Wedding Photography</p>
                    </div>
                    <div className="absolute inset-0 bg-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
              
              <div className="gallery-row">
                {galleryImages.slice(3, 6).map((image, index) => (
                  <div key={`set6-${index}`} className="gallery-item group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-sm font-semibold mb-1">{image.alt}</h3>
                      <p className="text-xs opacity-90">Wedding Photography</p>
                    </div>
                    <div className="absolute inset-0 bg-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
              
              <div className="gallery-row">
                {galleryImages.slice(6, 9).map((image, index) => (
                  <div key={`set7-${index}`} className="gallery-item group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-sm font-semibold mb-1">{image.alt}</h3>
                      <p className="text-xs opacity-90">Wedding Photography</p>
                    </div>
                    <div className="absolute inset-0 bg-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
              
              <div className="gallery-row">
                {galleryImages.slice(9, 12).map((image, index) => (
                  <div key={`set8-${index}`} className="gallery-item group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-sm font-semibold mb-1">{image.alt}</h3>
                      <p className="text-xs opacity-90">Wedding Photography</p>
                    </div>
                    <div className="absolute inset-0 bg-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>

              {/* Third set for extra smoothness */}
              <div className="gallery-row">
                {galleryImages.slice(0, 3).map((image, index) => (
                  <div key={`set9-${index}`} className="gallery-item group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-sm font-semibold mb-1">{image.alt}</h3>
                      <p className="text-xs opacity-90">Wedding Photography</p>
                    </div>
                    <div className="absolute inset-0 bg-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
              
              <div className="gallery-row">
                {galleryImages.slice(3, 6).map((image, index) => (
                  <div key={`set10-${index}`} className="gallery-item group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-sm font-semibold mb-1">{image.alt}</h3>
                      <p className="text-xs opacity-90">Wedding Photography</p>
                    </div>
                    <div className="absolute inset-0 bg-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>

              {/* Duplicate all content for seamless infinite loop */}
              <div className="gallery-row">
                {galleryImages.slice(0, 3).map((image, index) => (
                  <div key={`duplicate1-${index}`} className="gallery-item group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-sm font-semibold mb-1">{image.alt}</h3>
                      <p className="text-xs opacity-90">Wedding Photography</p>
                    </div>
                    <div className="absolute inset-0 bg-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
              
              <div className="gallery-row">
                {galleryImages.slice(3, 6).map((image, index) => (
                  <div key={`duplicate2-${index}`} className="gallery-item group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-sm font-semibold mb-1">{image.alt}</h3>
                      <p className="text-xs opacity-90">Wedding Photography</p>
                    </div>
                    <div className="absolute inset-0 bg-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
              
              <div className="gallery-row">
                {galleryImages.slice(6, 9).map((image, index) => (
                  <div key={`duplicate3-${index}`} className="gallery-item group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-sm font-semibold mb-1">{image.alt}</h3>
                      <p className="text-xs opacity-90">Wedding Photography</p>
                    </div>
                    <div className="absolute inset-0 bg-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
              
              <div className="gallery-row">
                {galleryImages.slice(9, 12).map((image, index) => (
                  <div key={`duplicate4-${index}`} className="gallery-item group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-sm font-semibold mb-1">{image.alt}</h3>
                      <p className="text-xs opacity-90">Wedding Photography</p>
                    </div>
                    <div className="absolute inset-0 bg-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={`text-center mt-16 transition-all duration-1500 ease-in-out ${
            isVisible 
              ? 'opacity-100 blur-0 translate-y-0' 
              : 'opacity-0 blur-lg translate-y-8'
          }`} style={{ transitionDelay: '800ms' }}>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              View Full Portfolio
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;