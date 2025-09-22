'use client'

import React, { useEffect, useRef, useState } from 'react';

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Gallery images with different sizes for masonry effect
  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=600&fit=crop', alt: 'Wedding Ceremony', size: 'tall' },
    { src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop', alt: 'Bridal Portrait', size: 'wide' },
    { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=500&fit=crop', alt: 'Wedding Reception', size: 'medium' },
    { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop', alt: 'Couple Portrait', size: 'square' },
    { src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=700&fit=crop', alt: 'Wedding Details', size: 'tall' },
    { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=350&fit=crop', alt: 'Bridal Party', size: 'wide' },
    { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=450&fit=crop', alt: 'Wedding Venue', size: 'medium' },
    { src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=550&fit=crop', alt: 'Wedding Rings', size: 'tall' },
    { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop', alt: 'Wedding Dance', size: 'square' },
    { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=650&fit=crop', alt: 'Wedding Kiss', size: 'tall' },
    { src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=320&fit=crop', alt: 'Wedding Cake', size: 'wide' },
    { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=480&fit=crop', alt: 'Wedding Flowers', size: 'medium' },
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
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            width: 100%;
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
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-yellow-600">Gallery</span>
            </h2>
            <div className="w-16 h-1 bg-yellow-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
          <div className={`text-center mt-16 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
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