'use client'

import React, { useState, useEffect } from 'react';
import LoadingAnimation from './LoadingAnimation';

interface LoadingWrapperProps {
  children: React.ReactNode;
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('LoadingWrapper mounted, isLoading:', isLoading);
  }, [isLoading]);

  const handleLoadingComplete = () => {
    console.log('Loading complete - hiding loading animation');
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingAnimation onComplete={handleLoadingComplete} />}
      {!isLoading && children}
    </>
  );
};

export default LoadingWrapper;
