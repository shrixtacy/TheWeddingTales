'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, RefreshCw, AlertCircle } from 'lucide-react';
import { directGoogleDriveService, GoogleDriveImage } from '@/lib/googleDriveDirect';
import { useAnalytics } from '@/hooks/useAnalytics';
import LoadingSpinner from './LoadingSpinner';

const DirectGoogleDriveGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [galleryImages, setGalleryImages] = useState<GoogleDriveImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);

  // Track page view
  useAnalytics('gallery');

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('🚀 Starting direct Google Drive image fetch...');
      const images = await directGoogleDriveService.fetchImages();
      
      console.log(`✅ Fetched ${images.length} images using direct embedding`);
      
      // Randomize the order of images
      const shuffledImages = [...images].sort(() => Math.random() - 0.5);
      setGalleryImages(shuffledImages);
      setLastRefresh(new Date());
      
    } catch (error) {
      console.error('❌ Error fetching images:', error);
      setError('Failed to load images. Using fallback images.');
    } finally {
      setLoading(false);
    }
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
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
            Direct Google Drive Integration - Your images embedded seamlessly
          </p>
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Status Bar */}
          <div className="mb-8 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">Direct Google Drive Embedding</span>
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-gray-300">{galleryImages.length} images loaded</span>
                {lastRefresh && (
                  <>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-300">Last updated: {lastRefresh.toLocaleTimeString()}</span>
                  </>
                )}
              </div>
              <button
                onClick={fetchImages}
                disabled={loading}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white rounded-lg transition-colors"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                <span>{loading ? 'Loading...' : 'Refresh'}</span>
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-8 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg flex items-center space-x-2">
              <AlertCircle className="w-5 h-5" />
              <div>
                <p className="font-medium">Using fallback images</p>
                <p className="text-sm">{error}</p>
              </div>
            </div>
          )}

          {/* Debug Info */}
          <div className="mb-8 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded">
            <p className="text-sm">
              <strong>Debug:</strong> Found {galleryImages.length} images to display. 
              {galleryImages.length > 0 && (
                <span> First image: {galleryImages[0].name} - Embed URL: {galleryImages[0].embedUrl}</span>
              )}
            </p>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-center">
                <LoadingSpinner />
                <p className="mt-4 text-gray-300">Loading images from Google Drive...</p>
              </div>
            </div>
          ) : (
            <>
              {/* Grid Layout with iframe embedding */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {galleryImages.map((image, index) => (
                  <div
                    key={image.id}
                    className="group cursor-pointer"
                    onClick={() => setSelectedImage(index)}
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                      {/* Use iframe for Google Drive embedding or img for local images */}
                      {image.embedUrl.startsWith('https://drive.google.com') ? (
                        <iframe
                          src={directGoogleDriveService.getEmbedUrl(image)}
                          className="w-full h-64 border-0"
                          title={image.title}
                          allow="autoplay"
                          sandbox="allow-scripts allow-same-origin"
                        />
                      ) : (
                        <img
                          src={directGoogleDriveService.getEmbedUrl(image)}
                          alt={image.title}
                          className="w-full h-64 object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full">
                            <span className="text-white font-medium">{image.category}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 text-center">
                      <p className="text-white font-medium">{image.title}</p>
                      <p className="text-gray-400 text-sm">{image.name}</p>
                    </div>
                  </div>
                ))}
              </div>

              {galleryImages.length === 0 && !loading && (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">No images found. Try refreshing to load from Google Drive.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Lightbox Modal with iframe */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronLeft size={48} />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronRight size={48} />
          </button>

          <div className="max-w-5xl max-h-[90vh] flex items-center justify-center">
            {galleryImages[selectedImage].embedUrl.startsWith('https://drive.google.com') ? (
              <iframe
                src={directGoogleDriveService.getEmbedUrl(galleryImages[selectedImage])}
                className="w-full h-[80vh] border-0 rounded-lg"
                title={galleryImages[selectedImage].title}
                allow="autoplay"
                sandbox="allow-scripts allow-same-origin"
              />
            ) : (
              <img
                src={directGoogleDriveService.getEmbedUrl(galleryImages[selectedImage])}
                alt={galleryImages[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            )}
          </div>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center z-10">
            <p className="text-lg font-medium">{galleryImages[selectedImage].title}</p>
            {galleryImages[selectedImage].description && (
              <p className="text-sm text-gray-300 mt-1">{galleryImages[selectedImage].description}</p>
            )}
            <p className="text-sm text-gray-300 mt-2">{selectedImage + 1} of {galleryImages.length}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default DirectGoogleDriveGallery;
