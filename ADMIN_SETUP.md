# Admin Panel Setup Guide

This guide will help you set up the admin panel for your wedding photography website.

## Prerequisites

1. **Cloudinary Account**: You need a Cloudinary account with the provided API credentials
2. **Supabase Project**: Your Supabase project is already configured

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=818655334438853
CLOUDINARY_API_SECRET=aujR_RRbN3FKJvUg8_NAlxrp-jM

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://skwmmkszwaiqqjrcnigj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrd21ta3N6d2FpcXFqcmNuaWdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5NTQyNTQsImV4cCI6MjA3NDUzMDI1NH0.6az22SMRF2kbWxNprVkRQwvX9K6wEHWc6I7zjZqG_EM
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrd21ta3N6d2FpcXFqcmNuaWdqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODk1NDI1NCwiZXhwIjoyMDc0NTMwMjU0fQ.c2gT2wB4ZxXjVP7fdMfyctmtJfkitpv-zhmq99zTC0E

# Admin Panel
NEXT_PUBLIC_ADMIN_PASSWORD=admin123
```

## Database Setup

1. Go to your Supabase dashboard
2. Navigate to the SQL Editor
3. Run the SQL script from `database-setup.sql` to create the necessary tables

## Cloudinary Setup

1. Log in to your Cloudinary dashboard
2. Go to Settings > Upload
3. Create a new upload preset named "wedding_tales" with the following settings:
   - Signing Mode: Unsigned
   - Folder: wedding-gallery
   - Allowed formats: jpg, jpeg, png, webp
   - Max file size: 10MB

## Features

### Admin Panel (`/admin`)

The admin panel includes three main sections:

1. **Upload Images**
   - Upload multiple images at once
   - Add titles and descriptions
   - Categorize images (wedding, engagement, portrait, event)
   - Automatic Cloudinary optimization

2. **Manage Gallery**
   - View all uploaded images
   - Edit image details
   - Delete images (removes from both Cloudinary and database)
   - Filter by category

3. **Analytics**
   - Total website visits
   - Unique visitors
   - Page views breakdown
   - Gallery views
   - Recent visitor activity

### Gallery Page

The gallery page now:
- Fetches images from Supabase
- Displays dynamic categories
- Shows loading states
- Tracks page views for analytics

## Usage

1. **Access Admin Panel**: Navigate to `/admin` and use password `admin123`
2. **Upload Images**: Go to the "Upload Images" tab, select files, add details, and upload
3. **Manage Gallery**: Use the "Manage Gallery" tab to edit or delete images
4. **View Analytics**: Check the "Analytics" tab for website statistics

## Security Notes

- Change the admin password in production
- Consider implementing proper authentication
- The current setup uses localStorage for admin session (not recommended for production)

## Troubleshooting

1. **Upload Issues**: Check Cloudinary configuration and upload preset
2. **Database Errors**: Verify Supabase connection and table creation
3. **Analytics Not Working**: Ensure the tracking API routes are accessible

## Next Steps

1. Set up proper authentication for the admin panel
2. Add image optimization settings in Cloudinary
3. Implement user roles and permissions
4. Add more detailed analytics and reporting
