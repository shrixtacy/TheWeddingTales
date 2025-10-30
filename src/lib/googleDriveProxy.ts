// Google Drive Proxy Service
// This creates a proxy to fetch Google Drive images and serve them directly

interface GoogleDriveImage {
  id: string;
  name: string;
  url: string;
  thumbnailUrl: string;
  title: string;
  description: string;
  category: string;
  mimeType: string;
  size: string;
  createdTime: string;
}

class GoogleDriveProxyService {
  private folderId: string = '1_kcpCcDAUXUAgFgiXlWGXk4GetVJEsFg';
  private apiKey: string = 'AIzaSyBesb0Wo8gID_8QIhox4zmv7xQar2YXKlw';
  private baseUrl: string = 'https://www.googleapis.com/drive/v3';

  /**
   * Fetch images and create proxy URLs
   */
  async fetchImages(): Promise<GoogleDriveImage[]> {
    try {
      console.log('🔄 Fetching images with proxy approach...');
      
      const query = `'${this.folderId}' in parents and mimeType contains 'image/'`;
      const url = `${this.baseUrl}/files?q=${encodeURIComponent(query)}&fields=files(id,name,mimeType,size,createdTime,webViewLink,webContentLink)&key=${this.apiKey}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Google Drive API error: ${response.status}`);
      }
      
      const data = await response.json();
      console.log(`✅ Found ${data.files?.length || 0} images in Google Drive`);
      
      if (!data.files || data.files.length === 0) {
        console.warn('⚠️ No images found in Google Drive folder');
        return this.getFallbackImages();
      }
      
      // Create proxy URLs for each image
      const images: GoogleDriveImage[] = data.files.map((file: any) => ({
        id: file.id,
        name: file.name,
        url: `/api/google-drive-proxy?id=${file.id}`,
        thumbnailUrl: `/api/google-drive-proxy?id=${file.id}&thumbnail=true`,
        title: this.extractTitleFromFilename(file.name),
        description: this.extractDescriptionFromFilename(file.name),
        category: this.extractCategoryFromFilename(file.name),
        mimeType: file.mimeType,
        size: this.formatFileSize(file.size),
        createdTime: file.createdTime
      }));
      
      console.log('🎉 Successfully processed images with proxy URLs:', images.length);
      return images;
      
    } catch (error) {
      console.error('❌ Error fetching images from Google Drive:', error);
      return this.getFallbackImages();
    }
  }

  /**
   * Get fallback images if API fails
   */
  private getFallbackImages(): GoogleDriveImage[] {
    console.log('🔄 Using fallback images...');
    return [
      {
        id: 'fallback1',
        name: 'Wedding Moment',
        url: '/images/6S8A9924.jpg',
        thumbnailUrl: '/images/6S8A9924.jpg',
        title: 'Wedding Moment',
        description: 'Beautiful wedding ceremony',
        category: 'Wedding',
        mimeType: 'image/jpeg',
        size: '2.1 MB',
        createdTime: new Date().toISOString()
      },
      {
        id: 'fallback2',
        name: 'Couple Portrait',
        url: '/images/6S8A7477.jpg',
        thumbnailUrl: '/images/6S8A7477.jpg',
        title: 'Couple Portrait',
        description: 'Romantic couple portrait',
        category: 'Portrait',
        mimeType: 'image/jpeg',
        size: '1.8 MB',
        createdTime: new Date().toISOString()
      },
      {
        id: 'fallback3',
        name: 'Ceremony',
        url: '/images/6S8A0861.jpg',
        thumbnailUrl: '/images/6S8A0861.jpg',
        title: 'Ceremony',
        description: 'Wedding ceremony moments',
        category: 'Wedding',
        mimeType: 'image/jpeg',
        size: '2.3 MB',
        createdTime: new Date().toISOString()
      }
    ];
  }

  /**
   * Extract title from filename
   */
  private extractTitleFromFilename(filename: string): string {
    return 'Shot By The Wedding Tale';
  }

  /**
   * Extract description from filename
   */
  private extractDescriptionFromFilename(filename: string): string {
    const nameWithoutExt = filename.replace(/\.[^/.]+$/, '');
    return '';
  }

  /**
   * Extract category from filename
   */
  private extractCategoryFromFilename(filename: string): string {
    const lowerFilename = filename.toLowerCase();
    
    if (lowerFilename.includes('wedding') || lowerFilename.includes('ceremony')) {
      return 'Wedding';
    } else if (lowerFilename.includes('portrait') || lowerFilename.includes('couple')) {
      return 'Portrait';
    } else if (lowerFilename.includes('engagement')) {
      return 'Engagement';
    } else if (lowerFilename.includes('event')) {
      return 'Event';
    } else {
      return 'Wedding';
    }
  }

  /**
   * Format file size
   */
  private formatFileSize(bytes: string): string {
    if (!bytes) return 'Unknown size';
    const size = parseInt(bytes);
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  }

  /**
   * Get image URL for display
   */
  getImageUrl(image: GoogleDriveImage): string {
    return image.url;
  }

  /**
   * Get thumbnail URL
   */
  getThumbnailUrl(image: GoogleDriveImage): string {
    return image.thumbnailUrl;
  }
}

export const googleDriveProxyService = new GoogleDriveProxyService();
export type { GoogleDriveImage };
