# How to Add Images to Your Website

## 📁 Folder Structure Created

```
public/
├── images/
│   ├── hero/           # Hero section images
│   ├── gallery/        # Gallery images  
│   ├── about/          # About section images
│   ├── services/       # Services section images
│   └── testimonials/   # Testimonial images
```

## 🖼️ How to Add Your Images

### 1. **Hero Section Images**
- **Location**: `public/images/hero/`
- **Files to add**: 
  - `hero-1.jpg` (main hero image)
  - `hero-2.jpg` (second hero image)
  - `hero-3.jpg` (third hero image)
- **Recommended size**: 1920x1080px or larger
- **Format**: JPG, PNG, or WebP

### 2. **Gallery Images**
- **Location**: `public/images/gallery/`
- **Add your wedding photos here**
- **Recommended size**: 1200x800px or larger
- **Use descriptive names**: `ceremony-1.jpg`, `reception-1.jpg`, etc.

### 3. **About Section Images**
- **Location**: `public/images/about/`
- **Add photographer photos, studio shots, etc.**

### 4. **Services Images**
- **Location**: `public/images/services/`
- **Add service-related images**

## 🚀 Quick Start

1. **Add your hero images**:
   - Copy your best wedding photos to `public/images/hero/`
   - Rename them to `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`

2. **Add gallery images**:
   - Copy your wedding photos to `public/images/gallery/`
   - Use descriptive names like `ceremony-1.jpg`, `reception-1.jpg`

3. **Test the website**:
   - Run `npm run dev`
   - Check `http://localhost:3001` to see your images

## 💡 Tips

- **Optimize images** before adding them (compress them)
- **Use WebP format** for better performance
- **Keep file sizes under 2MB** for faster loading
- **Use descriptive filenames** for easy management

## 🔧 Using Images in Code

```jsx
// Example: Using images in components
<img src="/images/hero/hero-1.jpg" alt="Wedding couple" />
<img src="/images/gallery/ceremony-1.jpg" alt="Wedding ceremony" />
```

## 📝 Current Status

- ✅ Public folder structure created
- ✅ Hero component updated to use local images
- ⏳ **Next**: Add your actual images to the folders
- ⏳ **Next**: Test the website with your images

## 🎯 What to Do Now

1. **Add 3 hero images** to `public/images/hero/` (name them hero-1.jpg, hero-2.jpg, hero-3.jpg)
2. **Add gallery images** to `public/images/gallery/`
3. **Test the website** to see your images in action


