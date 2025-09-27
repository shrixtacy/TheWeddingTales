@echo off
echo Creating .env.local file...

(
echo # Cloudinary Configuration
echo NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
echo CLOUDINARY_API_KEY=818655334438853
echo CLOUDINARY_API_SECRET=aujR_RRbN3FKJvUg8_NAlxrp-jM
echo.
echo # Supabase Configuration
echo NEXT_PUBLIC_SUPABASE_URL=https://skwmmkszwaiqqjrcnigj.supabase.co
echo NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrd21ta3N6d2FpcXFqcmNuaWdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5NTQyNTQsImV4cCI6MjA3NDUzMDI1NH0.6az22SMRF2kbWxNprVkRQwvX9K6wEHWc6I7zjZqG_EM
echo SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrd21ta3N6d2FpcXFqcmNuaWdqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODk1NDI1NCwiZXhwIjoyMDc0NTMwMjU0fQ.c2gT2wB4ZxXjVP7fdMfyctmtJfkitpv-zhmq99zTC0E
echo.
echo # Admin Panel
echo NEXT_PUBLIC_ADMIN_PASSWORD=admin123
) > .env.local

echo.
echo .env.local file created successfully!
echo.
echo IMPORTANT: You need to update the Cloudinary cloud name:
echo 1. Go to your Cloudinary dashboard
echo 2. Find your Cloud Name
echo 3. Replace "your_cloud_name_here" with your actual cloud name
echo.
echo Then run: npm run dev
pause
