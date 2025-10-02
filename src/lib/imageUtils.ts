// Utility functions for image management and randomization

// Images used in hero section that should be excluded from other galleries
export const HERO_IMAGES = [
  '/images/6S8A9924.jpg',
  '/images/6S8A7477.jpg', 
  '/images/6S8A0861.jpg',
  '/images/3a334794a8235f5788ed5ecf9595bea3.jpg'
];

// All available images in the public/images folder
export const ALL_IMAGES = [
  '/images/0F6A9741.jpg',
  '/images/21dfedc596225da3e7c0d7167b65aab6.jpg',
  '/images/3a334794a8235f5788ed5ecf9595bea3.jpg',
  '/images/4a41f4753c333868e42cbb9b4a4799e9.jpg',
  '/images/6S7A8566.jpg',
  '/images/6S7A8837.jpg',
  '/images/6S8A0060.jpg',
  '/images/6S8A0849.jpg',
  '/images/6S8A0861.jpg',
  '/images/6S8A3066.jpg',
  '/images/6S8A6703 (1).jpg',
  '/images/6S8A7477.jpg',
  '/images/6S8A7479.jpg',
  '/images/6S8A7749.jpg',
  '/images/6S8A7953.jpg',
  '/images/6S8A9608.jpg',
  '/images/6S8A9924.jpg'
];

/**
 * Get images excluding hero images
 */
export function getNonHeroImages(): string[] {
  return ALL_IMAGES.filter(image => !HERO_IMAGES.includes(image));
}

/**
 * Shuffle array using Fisher-Yates algorithm
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Get randomized images excluding hero images
 */
export function getRandomizedNonHeroImages(): string[] {
  return shuffleArray(getNonHeroImages());
}

/**
 * Get randomized images with a specific count, excluding hero images
 */
export function getRandomizedImages(count: number, excludeHero: boolean = true): string[] {
  const availableImages = excludeHero ? getNonHeroImages() : ALL_IMAGES;
  const shuffled = shuffleArray(availableImages);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * Check if an image is used in hero section
 */
export function isHeroImage(imagePath: string): boolean {
  return HERO_IMAGES.includes(imagePath);
}

/**
 * Get random images ensuring no duplicates within the selection
 */
export function getUniqueRandomImages(count: number, excludeHero: boolean = true): string[] {
  const availableImages = excludeHero ? getNonHeroImages() : ALL_IMAGES;
  
  if (count >= availableImages.length) {
    return shuffleArray(availableImages);
  }
  
  const shuffled = shuffleArray(availableImages);
  return shuffled.slice(0, count);
}
