'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, RefreshCw, AlertCircle, CheckCircle } from 'lucide-react';
import { fullyAutomatedGoogleDriveService, GoogleDriveImage } from '@/lib/googleDriveFullyAutomated';
import { useAnalytics } from '@/hooks/useAnalytics';
import LoadingSpinner from './LoadingSpinner';

const FullyAutomatedGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [galleryImages, setGalleryImages] = useState<GoogleDriveImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);
  const [isGoogleDriveConnected, setIsGoogleDriveConnected] = useState(false);

  // Track page view
  useAnalytics('gallery');

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('🚀 Starting fully automated Google Drive fetch...');
      const images = await fullyAutomatedGoogleDriveService.fetchImages();
      
      console.log(`✅ Fetched ${images.length} images automatically`);
      
      // Check if we got real Google Drive images or fallback images
      const hasRealGoogleDriveImages = images.some(img => 
        img.url.includes('drive.google.com') && !img.id.startsWith('fallback')
      );
      setIsGoogleDriveConnected(hasRealGoogleDriveImages);
      
      // Randomize the order of images
      const shuffledImages = [...images].sort(() => Math.random() - 0.5);
      setGalleryImages(shuffledImages);
      setLastRefresh(new Date());
      
    } catch (error) {
      console.error('❌ Error fetching images:', error);
      setError('Failed to load images. Using fallback images.');
      setIsGoogleDriveConnected(false);
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
            Fully Automated - Your Google Drive images sync automatically
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
                  {isGoogleDriveConnected ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-green-400 font-medium">Connected to Google Drive</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-5 h-5 text-yellow-500" />
                      <span className="text-yellow-400 font-medium">Using fallback images</span>
                    </>
                  )}
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
                <span>{loading ? 'Syncing...' : 'Auto-Sync'}</span>
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
                <div className="mt-2">
                  <p>First image: {galleryImages[0].name}</p>
                  <p>URL: {galleryImages[0].url}</p>
                  <p>File ID: {galleryImages[0].id}</p>
                </div>
              )}
              {isGoogleDriveConnected && (
                <span className="text-green-600 font-medium"> ✅ Google Drive connected!</span>
              )}
            </p>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-center">
                <LoadingSpinner />
                <p className="mt-4 text-gray-300">Automatically syncing from Google Drive...</p>
              </div>
            </div>
          ) : (
            <>
              {/* Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {galleryImages.map((image, index) => (
                  <div
                    key={image.id}
                    className="group cursor-pointer"
                    onClick={() => setSelectedImage(index)}
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                      <img
                        src={fullyAutomatedGoogleDriveService.getThumbnailUrl(image)}
                        alt={image.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        onError={(e) => {
                          console.error('Image failed to load:', image.url);
                          const target = e.target as HTMLImageElement;
                          
                          // Try multiple fallback URLs automatically for Google Drive images
                          const fallbackUrls = [
                            `https://drive.google.com/uc?export=view&id=${image.id}`,
                            `https://drive.google.com/uc?export=download&id=${image.id}`,
                            `https://drive.google.com/thumbnail?id=${image.id}&sz=w400`,
                            `https://drive.google.com/thumbnail?id=${image.id}`,
                            fullyAutomatedGoogleDriveService.getImageUrl(image)
                          ];
                          
                          let currentIndex = 0;
                          const tryNextUrl = () => {
                            if (currentIndex < fallbackUrls.length) {
                              console.log(`Trying fallback URL ${currentIndex + 1}:`, fallbackUrls[currentIndex]);
                              target.src = fallbackUrls[currentIndex];
                              currentIndex++;
                            } else {
                              console.error('All image URLs failed for:', image.name);
                              // Show a placeholder if all URLs fail
                              target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+';
                            }
                          };
                          
                          target.onerror = tryNextUrl;
                          tryNextUrl();
                        }}
                        onLoad={() => {
                          console.log('Image loaded successfully:', image.name);
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
                    <div className="mt-2 text-center">
                      <p className="text-white font-medium">{image.title}</p>
                      <p className="text-gray-400 text-sm">{image.name}</p>
                    </div>
                  </div>
                ))}
              </div>

              {galleryImages.length === 0 && !loading && (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">No images found. Try refreshing to sync from Google Drive.</p>
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
              src={fullyAutomatedGoogleDriveService.getImageUrl(galleryImages[selectedImage])}
              alt={galleryImages[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg"
              onError={(e) => {
                console.error('Lightbox image failed to load:', galleryImages[selectedImage].url);
                const target = e.target as HTMLImageElement;
                
                // Try multiple fallback URLs for lightbox
                const fallbackUrls = [
                  `https://drive.google.com/uc?export=view&id=${galleryImages[selectedImage].id}`,
                  `https://drive.google.com/uc?export=download&id=${galleryImages[selectedImage].id}`,
                  `https://drive.google.com/thumbnail?id=${galleryImages[selectedImage].id}&sz=w1000`,
                  `https://drive.google.com/thumbnail?id=${galleryImages[selectedImage].id}`
                ];
                
                let currentIndex = 0;
                const tryNextUrl = () => {
                  if (currentIndex < fallbackUrls.length) {
                    console.log(`Trying lightbox fallback URL ${currentIndex + 1}:`, fallbackUrls[currentIndex]);
                    target.src = fallbackUrls[currentIndex];
                    currentIndex++;
                  } else {
                    console.error('All lightbox URLs failed for:', galleryImages[selectedImage].name);
                  }
                };
                
                target.onerror = tryNextUrl;
                tryNextUrl();
              }}
            />
          </div>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
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

export default FullyAutomatedGallery;
