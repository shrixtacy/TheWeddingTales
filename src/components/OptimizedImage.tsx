'use client'

import React, { useState, useRef, useEffect, memo } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
  priority?: boolean
  quality?: number
}

const OptimizedImage = memo(({ 
  src, 
  alt, 
  className = '', 
  style = {}, 
  priority = false,
  quality = 65 // Reduced quality for better performance
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (priority) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '50px' }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [priority])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
  }

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      {!hasError && isInView && (
        <div 
          className={`w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            backgroundImage: `url(${src})`,
            willChange: 'opacity'
          }}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
      
      {hasError && (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Failed to load image</span>
        </div>
      )}
      
      {!isLoaded && !hasError && isInView && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  )
})

OptimizedImage.displayName = 'OptimizedImage'

export default OptimizedImage
