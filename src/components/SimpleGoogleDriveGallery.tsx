'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { simpleGoogleDriveService, SimpleGoogleDriveImage } from '@/lib/googleDriveSimple';
import { useAnalytics } from '@/hooks/useAnalytics';
import LoadingSpinner from './LoadingSpinner';

const SimpleGoogleDriveGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [galleryImages, setGalleryImages] = useState<SimpleGoogleDriveImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Track page view
  useAnalytics('gallery');

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('Fetching images from simple Google Drive service...');
      const images = await simpleGoogleDriveService.fetchImages();
      
      console.log('Fetched images:', images);
      
      // Randomize the order of images
      const shuffledImages = [...images].sort(() => Math.random() - 0.5);
      setGalleryImages(shuffledImages);
    } catch (error) {
      console.error('Error fetching images from Google Drive:', error);
      setError('Failed to load images from Google Drive.');
    } finally {
      setLoading(false);
    }
  };

  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="text-center text-white z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wider">
            Our Gallery
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Capturing the magic of your special day through our lens
          </p>
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Debug Info */}
          <div className="mb-4 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded">
            <p className="text-sm">
              <strong>Debug:</strong> Found {galleryImages.length} images. 
              {galleryImages.length > 0 && (
                <span> First image: {galleryImages[0].name}</span>
              )}
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              <p className="font-medium">Error loading images:</p>
              <p className="text-sm">{error}</p>
              <button 
                onClick={fetchImages}
                className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Retry
              </button>
            </div>
          )}

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-yellow-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <LoadingSpinner />
            </div>
          ) : (
            <>
              {/* Masonry Grid */}
              <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                {filteredImages.map((image, index) => (
                  <div
                    key={image.id}
                    className="break-inside-avoid group cursor-pointer"
                    onClick={() => setSelectedImage(index)}
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                      <img
                        src={simpleGoogleDriveService.getThumbnailUrl(image)}
                        alt={image.title}
                        className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to original URL if thumbnail fails
                          const target = e.target as HTMLImageElement;
                          target.src = simpleGoogleDriveService.getImageUrl(image);
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full">
                            <span className="text-white font-medium">{image.category}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredImages.length === 0 && !loading && (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">No images found in this category.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft size={48} />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronRight size={48} />
          </button>

          <div className="max-w-5xl max-h-[90vh] flex items-center justify-center">
            <img
              src={simpleGoogleDriveService.getImageUrl(filteredImages[selectedImage])}
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
            <p className="text-lg font-medium">{filteredImages[selectedImage].title}</p>
            {filteredImages[selectedImage].description && (
              <p className="text-sm text-gray-300 mt-1">{filteredImages[selectedImage].description}</p>
            )}
            <p className="text-sm text-gray-300 mt-2">{selectedImage + 1} of {filteredImages.length}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SimpleGoogleDriveGallery;


