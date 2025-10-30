'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, RefreshCw, AlertCircle, CheckCircle } from 'lucide-react';
import { googleDriveProxyService, GoogleDriveImage } from '@/lib/googleDriveProxy';
import { useAnalytics } from '@/hooks/useAnalytics';
import LoadingSpinner from './LoadingSpinner';

const ProxyGoogleDriveGallery: React.FC = () => {
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
      
      console.log('🚀 Starting proxy Google Drive fetch...');
      const images = await googleDriveProxyService.fetchImages();
      
      console.log(`✅ Fetched ${images.length} images using proxy`);
      
      // Check if we got real Google Drive images or fallback images
      const hasRealGoogleDriveImages = images.some(img => 
        img.url.includes('/api/google-drive-proxy') && !img.id.startsWith('fallback')
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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wider">
            Our Gallery
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Capturing life's most precious moments through our lens
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
           {/* Status Bar */}
           <div className="mb-8 p-4 sm:p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
               {/* Status Info */}
               <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                 <div className="flex items-center space-x-2">
                   {isGoogleDriveConnected ? (
                     <>
                       <CheckCircle className="w-5 h-5 text-emerald-400" />
                       <span className="text-emerald-300 font-medium tracking-wide">Gallery Connected</span>
                     </>
                   ) : (
                     <>
                       <AlertCircle className="w-5 h-5 text-amber-400" />
                       <span className="text-amber-300 font-medium tracking-wide">Using Local Images</span>
                     </>
                   )}
                 </div>
                 <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></div>
                 <span className="text-gray-300 font-light">{galleryImages.length} images loaded</span>
               </div>
               
               {/* Refresh Button */}
               <button
                 onClick={fetchImages}
                 disabled={loading}
                 className="group flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 disabled:from-gray-800 disabled:to-gray-900 text-white rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:opacity-50 shadow-lg hover:shadow-xl border border-gray-600/50"
               >
                 <RefreshCw className={`w-4 h-4 transition-transform duration-300 ${loading ? 'animate-spin' : 'group-hover:rotate-180'}`} />
                 <span className="font-medium tracking-wide">
                   {loading ? 'Refreshing...' : 'Refresh Gallery'}
                 </span>
               </button>
             </div>
             
             {/* Last Refresh Time */}
             {lastRefresh && (
               <div className="mt-3 pt-3 border-t border-gray-700/50">
                 <p className="text-xs text-gray-400 font-light">
                   Last updated: {lastRefresh.toLocaleTimeString()}
                 </p>
               </div>
             )}
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

          {/* Debug section removed - proxy is working! */}

          {/* Loading State */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-center">
                <LoadingSpinner />
                <p className="mt-4 text-gray-300">Loading images through proxy...</p>
              </div>
            </div>
          ) : (
            <>
              {/* Grid Layout */}
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {galleryImages.map((image, index) => (
                  <div
                    key={image.id}
                    className="group cursor-pointer"
                    onClick={() => setSelectedImage(index)}
                  >
                     <div className="relative overflow-hidden rounded-lg transition-all duration-500 transform hover:-translate-y-2">
                       <img
                         src={googleDriveProxyService.getThumbnailUrl(image)}
                         alt={image.title}
                         className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-700"
                         loading="lazy"
                        onError={(e) => {
                          console.error('Proxy image failed to load:', image.url);
                          // Show a placeholder if proxy fails
                          const target = e.target as HTMLImageElement;
                          target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+';
                        }}
                        onLoad={() => {
                          console.log('Proxy image loaded successfully:', image.name);
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

           <div className="w-full h-full flex items-center justify-center p-4">
             <img
               src={googleDriveProxyService.getImageUrl(galleryImages[selectedImage])}
               alt={galleryImages[selectedImage].title}
               className="object-contain rounded-lg"
               style={{ 
                 maxHeight: 'calc(100vh - 120px)', 
                 maxWidth: 'calc(100vw - 120px)',
                 width: 'auto',
                 height: 'auto'
               }}
              onError={(e) => {
                console.error('Lightbox proxy image failed to load:', galleryImages[selectedImage].url);
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+';
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

export default ProxyGoogleDriveGallery;
