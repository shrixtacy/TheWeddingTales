'use client'

import React, { useState, useEffect, useRef } from 'react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if device is mobile
    const mobileCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    setIsMobile(mobileCheck);

    if (mobileCheck) {
      // For mobile: Skip video animation and complete loading quickly
      console.log('Mobile device detected - skipping video animation');
      const mobileTimeout = setTimeout(() => {
        console.log('Mobile quick loading complete');
        setIsVisible(false);
        onComplete();
      }, 1500); // Very short delay for mobile

      return () => clearTimeout(mobileTimeout);
    }

    // Desktop video animation logic
    const video = videoRef.current;
    if (!video) return;

    console.log('Desktop loading animation mounted');

    const handleVideoEnd = () => {
      console.log('Video ended - completing loading');
      setIsVisible(false);
      onComplete();
    };

    const handleVideoError = (e: Event) => {
      console.error('Video error:', e);
      setVideoError(true);
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
      {isMobile ? (
        // Simple loading screen for mobile
        <div className="text-white text-center px-4 max-w-sm mx-auto">
          <div className="animate-pulse">
            <h1 
              className="font-semibold mb-4 leading-tight text-2xl"
            >
              The Wedding Tales
            </h1>
            <p 
              className="font-light tracking-wider text-sm opacity-80"
            >
              Experience the Art of Luxury Wedding Photography
            </p>
          </div>
        </div>
      ) : videoError ? (
        // Fallback for desktop video error
        <div className="text-white text-center px-4 max-w-sm mx-auto">
          <div className="animate-pulse">
            <h1 
              className="font-semibold mb-2 sm:mb-4 leading-tight"
              style={{
                fontSize: 'clamp(1.1rem, 5vw, 2.2rem)',
                lineHeight: '1.1'
              }}
            >
              The Wedding Tales
            </h1>
            <p 
              className="font-light tracking-wider"
              style={{
                fontSize: 'clamp(0.7rem, 2.5vw, 1rem)',
                lineHeight: '1.2'
              }}
            >
              Experience the Art of Luxury Wedding Photography
            </p>
          </div>
        </div>
      ) : (
        // Video animation for desktop
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
            <source src="/images/twtlol.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default LoadingAnimation;
