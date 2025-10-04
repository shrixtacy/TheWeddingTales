'use client'

import React, { useState, useEffect, useRef } from 'react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    console.log('Loading animation mounted');

    const handleVideoEnd = () => {
      console.log('Video ended - completing loading');
      setIsVisible(false);
      onComplete();
    };

    const handleVideoError = (e: Event) => {
      console.error('Video error:', e);
      setVideoError(true);
      // Fallback: complete loading after 3 seconds if video fails
      setTimeout(() => {
        console.log('Video error fallback - completing loading');
        setIsVisible(false);
        onComplete();
      }, 3000);
    };

    const handleVideoCanPlay = () => {
      console.log('Video can play - attempting to play');
      video.play().catch((error) => {
        console.error('Video play failed:', error);
        setVideoError(true);
        setTimeout(() => {
          console.log('Video play failed fallback - completing loading');
          setIsVisible(false);
          onComplete();
        }, 3000);
      });
    };

    // Mobile-specific optimizations
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Shorter timeout for mobile to prevent long loading
      const mobileTimeout = setTimeout(() => {
        console.log('Mobile timeout reached - completing loading');
        setIsVisible(false);
        onComplete();
      }, 4000);
      
      video.addEventListener('ended', handleVideoEnd);
      video.addEventListener('error', handleVideoError);
      video.addEventListener('canplay', handleVideoCanPlay);

      return () => {
        video.removeEventListener('ended', handleVideoEnd);
        video.removeEventListener('error', handleVideoError);
        video.removeEventListener('canplay', handleVideoCanPlay);
        clearTimeout(mobileTimeout);
      };
    } else {
      // Desktop timeout
      video.addEventListener('ended', handleVideoEnd);
      video.addEventListener('error', handleVideoError);
      video.addEventListener('canplay', handleVideoCanPlay);

      const maxTimeout = setTimeout(() => {
        console.log('Max timeout reached - completing loading');
        setIsVisible(false);
        onComplete();
      }, 6000);

      return () => {
        video.removeEventListener('ended', handleVideoEnd);
        video.removeEventListener('error', handleVideoError);
        video.removeEventListener('canplay', handleVideoCanPlay);
        clearTimeout(maxTimeout);
      };
    }
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
      style={{
        width: '100vw',
        height: '100vh',
        minHeight: '100vh',
        minWidth: '100vw'
      }}
    >
      {videoError ? (
        <div className="text-white text-center px-4 max-w-sm mx-auto">
          <div className="animate-pulse">
            <h1 
              className="font-semibold mb-2 sm:mb-4 leading-tight"
              style={{
                fontSize: 'clamp(1.5rem, 8vw, 4rem)',
                lineHeight: '1.1'
              }}
            >
              The Wedding Tales
            </h1>
            <p 
              className="font-light tracking-wider"
              style={{
                fontSize: 'clamp(0.875rem, 4vw, 1.5rem)',
                lineHeight: '1.2'
              }}
            >
              PHOTOGRAPHY & FILMS.
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <video
            ref={videoRef}
            className="w-[90%] h-auto max-w-[400px] max-h-[70vh] object-contain sm:w-full sm:h-full sm:max-w-none sm:max-h-none sm:object-cover"
            autoPlay
            muted
            playsInline
            preload="auto"
            loop={false}
            controls={false}
            onLoadStart={() => console.log('Video load started')}
            onCanPlay={() => console.log('Video can play')}
            onPlay={() => console.log('Video playing')}
            onError={(e) => console.error('Video error event:', e)}
          >
            <source src="/images/TwtLoadinganimation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default LoadingAnimation;
