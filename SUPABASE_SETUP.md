# Supabase Setup Guide

## 🚀 Quick Setup

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Sign up/Login and create a new project
3. Choose your organization and region
4. Wait for the project to be ready

### 2. Get Your Credentials
1. Go to your project dashboard
2. Click on "Settings" → "API"
3. Copy your:
   - **Project URL** (looks like: `https://your-project.supabase.co`)
   - **Anon Key** (public key)

### 3. Database Tables
Your Supabase project already has the required tables:
- ✅ `website_visits` - For tracking page visits
- ✅ `gallery_views` - For tracking gallery interactions  
- ✅ `gallery_images` - For counting total images

If you need to create the `website_visits` table, run this SQL in your Supabase SQL Editor:

```sql
-- Create website_visits table (if it doesn't exist)
CREATE TABLE IF NOT EXISTS website_visits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page TEXT NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  user_agent TEXT,
  ip_address TEXT
);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_website_visits_timestamp ON website_visits(timestamp);
CREATE INDEX IF NOT EXISTS idx_website_visits_page ON website_visits(page);
```

### 4. Environment Variables
Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://wafyntuaohdxgnrypnvr.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhZnludHVhb2hkeGducnlwbnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5OTY3MjcsImV4cCI6MjA3NDU3MjcyN30.iCbb617friVk_OKZ9-WCvuMFQqlQKzWhrA0Nr-02pZk
NEXT_PUBLIC_ADMIN_PASSWORD=admin123
```

### 5. Test the Setup
1. Run `npm run dev`
2. Go to `/admin` and login with password: `admin123`
3. Check the Analytics dashboard to see if data is being tracked

## 📊 Analytics Features

- **Total Visits**: Count of all page visits
- **Unique Visitors**: Count of unique IP addresses
- **Page Views**: Breakdown by page
- **Recent Visits**: Latest 10 visits with details

## 🔧 Troubleshooting

- Make sure your Supabase URL and keys are correct
- Check that the `website_visits` table exists
- Verify RLS (Row Level Security) policies if needed
- Check browser console for any errors
