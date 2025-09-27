@echo off
echo Setting up environment for The Wedding Tales website...

REM Create .env.local file if it doesn't exist
if not exist .env.local (
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
    echo .env.local file created successfully!
) else (
    echo .env.local file already exists.
)

echo.
echo Performance optimizations applied:
echo - Next.js configuration optimized
echo - Analytics made non-blocking
echo - Supabase client optimized
echo - Error boundaries added
echo - Loading states improved
echo.
echo To start the development server, run:
echo npm run dev
echo.
echo To build for production, run:
echo npm run build
echo npm start
echo.
pause

