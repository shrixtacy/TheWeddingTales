# Public Images Folder

This folder contains static images that can be used throughout the website.

## Folder Structure

```
public/
├── images/
│   ├── hero/           # Hero section images
│   ├── gallery/        # Gallery images
│   ├── about/          # About section images
│   ├── services/       # Services section images
│   └── testimonials/   # Testimonial images
```

## How to Use

### 1. Adding Images
- Place your images in the appropriate subfolder
- Use descriptive filenames (e.g., `hero-wedding-couple.jpg`)
- Recommended formats: JPG, PNG, WebP
- Recommended sizes:
  - Hero images: 1920x1080px or larger
  - Gallery images: 1200x800px or larger
  - About/Services images: 800x600px or larger

### 2. Referencing Images in Code
```jsx
// Example usage in components
<img src="/images/hero/wedding-couple.jpg" alt="Wedding couple" />
<img src="/images/gallery/ceremony-1.jpg" alt="Wedding ceremony" />
```

### 3. Image Optimization
- Use WebP format when possible for better performance
- Compress images before adding them
- Consider using Next.js Image component for automatic optimization

## Current Images
- Add your images to the appropriate folders
- Update this README when adding new images















