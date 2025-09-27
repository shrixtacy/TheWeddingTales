# Complete Setup Guide - Cloudinary, Supabase & Environment Variables

## Step 1: Cloudinary Setup

### 1.1 Create Cloudinary Account
1. Go to [https://cloudinary.com/](https://cloudinary.com/)
2. Click "Sign Up For Free"
3. Fill in your details and create account
4. Verify your email address

### 1.2 Get Your Cloudinary Credentials
1. After logging in, you'll see your **Dashboard**
2. Note down these values from your dashboard:
   - **Cloud Name** (e.g., `dxy8example`)
   - **API Key** (already provided: `818655334438853`)
   - **API Secret** (already provided: `aujR_RRbN3FKJvUg8_NAlxrp-jM`)

### 1.3 Create Upload Preset
1. In your Cloudinary dashboard, go to **Settings** → **Upload**
2. Scroll down to **Upload presets** section
3. Click **Add upload preset**
4. Configure the preset:
   - **Preset name**: `wedding_tales`
   - **Signing Mode**: Select **Unsigned**
   - **Folder**: `wedding-gallery`
   - **Allowed formats**: `jpg, jpeg, png, webp`
   - **Max file size**: `10MB`
   - **Image transformations**: 
     - Quality: `auto:good`
     - Format: `auto`
5. Click **Save**

## Step 2: Supabase Setup

### 2.1 Access Your Supabase Project
1. Go to [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. You should see your project: `skwmmkszwaiqqjrcnigj`
3. Click on your project to open it

### 2.2 Create Database Tables
1. In your Supabase dashboard, go to **SQL Editor** (left sidebar)
2. Click **New query**
3. Copy and paste the entire content from `database-setup.sql` file
4. Click **Run** to execute the SQL script
5. You should see "Success. No rows returned" message

### 2.3 Verify Tables Created
1. Go to **Table Editor** (left sidebar)
2. You should see these tables:
   - `gallery_images`
   - `website_visits`
   - `gallery_views`

### 2.4 Get Supabase Credentials
1. Go to **Settings** → **API** (left sidebar)
2. Note down these values:
   - **Project URL**: `https://skwmmkszwaiqqjrcnigj.supabase.co`
   - **anon public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrd21ta3N6d2FpcXFqcmNuaWdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5NTQyNTQsImV4cCI6MjA3NDUzMDI1NH0.6az22SMRF2kbWxNprVkRQwvX9K6wEHWc6I7zjZqG_EM`
   - **service_role secret**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrd21ta3N6d2FpcXFqcmNuaWdqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODk1NDI1NCwiZXhwIjoyMDc0NTMwMjU0fQ.c2gT2wB4ZxXjVP7fdMfyctmtJfkitpv-zhmq99zTC0E`

## Step 3: Environment Variables Setup

### 3.1 Create .env.local File
1. In your project root directory (`D:\The Wedding Tales\work\TheWeddingTales`)
2. Create a new file named `.env.local`
3. Copy and paste the following content:

```env
# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
CLOUDINARY_API_KEY=818655334438853
CLOUDINARY_API_SECRET=aujR_RRbN3FKJvUg8_NAlxrp-jM

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://skwmmkszwaiqqjrcnigj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrd21ta3N6d2FpcXFqcmNuaWdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5NTQyNTQsImV4cCI6MjA3NDUzMDI1NH0.6az22SMRF2kbWxNprVkRQwvX9K6wEHWc6I7zjZqG_EM
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrd21ta3N6d2FpcXFqcmNuaWdqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODk1NDI1NCwiZXhwIjoyMDc0NTMwMjU0fQ.c2gT2wB4ZxXjVP7fdMfyctmtJfkitpv-zhmq99zTC0E

# Admin Panel
NEXT_PUBLIC_ADMIN_PASSWORD=admin123
```

### 3.2 Update Cloudinary Cloud Name
1. Replace `your_cloud_name_here` with your actual Cloudinary cloud name
2. You can find this in your Cloudinary dashboard
3. It should look something like `dxy8example` (without the quotes)

### 3.3 Verify Environment Variables
1. Make sure there are no spaces around the `=` signs
2. Make sure there are no quotes around the values
3. Save the file

## Step 4: Test the Setup

### 4.1 Start the Development Server
```bash
npm run dev
```

### 4.2 Test Admin Panel
1. Open your browser and go to `http://localhost:3000/admin`
2. Use password: `admin123`
3. You should see the admin dashboard

### 4.3 Test Image Upload
1. Go to the "Upload Images" tab
2. Select some test images
3. Add a title and description
4. Click "Upload Images"
5. Check if images appear in the "Manage Gallery" tab

### 4.4 Test Gallery Page
1. Go to `http://localhost:3000/gallery`
2. You should see your uploaded images
3. Test the category filters

## Step 5: Troubleshooting

### Common Issues:

#### 5.1 Cloudinary Upload Fails
- **Check**: Cloudinary cloud name is correct
- **Check**: Upload preset "wedding_tales" exists
- **Check**: API credentials are correct

#### 5.2 Supabase Connection Issues
- **Check**: Database tables are created
- **Check**: RLS policies are set up
- **Check**: API keys are correct

#### 5.3 Environment Variables Not Loading
- **Check**: File is named `.env.local` (not `.env`)
- **Check**: File is in the project root directory
- **Check**: No syntax errors in the file
- **Restart**: Development server after changes

### 5.4 Database Permission Issues
If you get permission errors:
1. Go to Supabase → Authentication → Policies
2. Make sure the policies are enabled
3. Check if RLS is properly configured

## Step 6: Production Considerations

### 6.1 Security
- Change the admin password in production
- Consider implementing proper authentication
- Use environment-specific configurations

### 6.2 Cloudinary Optimization
- Set up automatic image transformations
- Configure CDN settings
- Set up backup strategies

### 6.3 Supabase Security
- Review and update RLS policies
- Set up proper user authentication
- Configure backup strategies

## Quick Verification Checklist

- [ ] Cloudinary account created and configured
- [ ] Upload preset "wedding_tales" created
- [ ] Supabase database tables created
- [ ] Environment variables file created
- [ ] Admin panel accessible at `/admin`
- [ ] Image upload working
- [ ] Gallery page showing images
- [ ] Analytics tracking working

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Check the terminal for server errors
3. Verify all credentials are correct
4. Ensure all steps were completed in order
