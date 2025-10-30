// Simple Google Drive integration using direct sharing links
// This approach doesn't require API calls and works more reliably

interface SimpleGoogleDriveImage {
  id: string;
  name: string;
  url: string;
  thumbnailUrl: string;
  title: string;
  description: string;
  category: string;
}

// Your Google Drive images - Add your actual images here
const googleDriveImages: SimpleGoogleDriveImage[] = [
  // Add your Google Drive images here
  // To add an image:
  // 1. Right-click on image in Google Drive → Get link → Copy link
  // 2. Convert the link from: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  // 3. To: https://drive.google.com/uc?export=view&id=FILE_ID
  // 4. Add it below with your details
  
  // Example format (replace with your actual images):
  {
    id: 'wedding1',
    name: 'Wedding Ceremony',
    url: 'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_HERE',
    thumbnailUrl: 'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_HERE',
    title: 'Beautiful Wedding Ceremony',
    description: 'Captured during the ceremony',
    category: 'Wedding'
  },
  
  // Keep these fallback images until you add your Google Drive images
  {
    id: 'fallback1',
    name: 'Wedding Moment',
    url: '/images/6S8A9924.jpg',
    thumbnailUrl: '/images/6S8A9924.jpg',
    title: 'Wedding Moment',
    description: 'Beautiful wedding ceremony',
    category: 'Wedding'
  },
  {
    id: 'fallback2',
    name: 'Couple Portrait',
    url: '/images/6S8A7477.jpg',
    thumbnailUrl: '/images/6S8A7477.jpg',
    title: 'Couple Portrait',
    description: 'Romantic couple portrait',
    category: 'Portrait'
  },
  {
    id: 'fallback3',
    name: 'Ceremony',
    url: '/images/6S8A0861.jpg',
    thumbnailUrl: '/images/6S8A0861.jpg',
    title: 'Ceremony',
    description: 'Wedding ceremony moments',
    category: 'Wedding'
  }
];

class SimpleGoogleDriveService {
  /**
   * Get all images from the manual list
   */
  async fetchImages(): Promise<SimpleGoogleDriveImage[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    console.log('Fetching images from simple Google Drive service:', googleDriveImages.length);
    return googleDriveImages;
  }

  /**
   * Get image URL for display
   */
  getImageUrl(image: SimpleGoogleDriveImage): string {
    return image.url;
  }

  /**
   * Get thumbnail URL
   */
  getThumbnailUrl(image: SimpleGoogleDriveImage): string {
    return image.thumbnailUrl;
  }

  /**
   * Add a new image to the list (for manual management)
   */
  addImage(image: SimpleGoogleDriveImage): void {
    googleDriveImages.push(image);
  }
}

export const simpleGoogleDriveService = new SimpleGoogleDriveService();
export type { SimpleGoogleDriveImage };
