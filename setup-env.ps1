Write-Host "Creating .env.local file..." -ForegroundColor Green

$envContent = @"
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
"@

$envContent | Out-File -FilePath ".env.local" -Encoding UTF8

Write-Host ""
Write-Host ".env.local file created successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "IMPORTANT: You need to update the Cloudinary cloud name:" -ForegroundColor Yellow
Write-Host "1. Go to your Cloudinary dashboard" -ForegroundColor White
Write-Host "2. Find your Cloud Name" -ForegroundColor White
Write-Host "3. Replace 'your_cloud_name_here' with your actual cloud name" -ForegroundColor White
Write-Host ""
Write-Host "Then run: npm run dev" -ForegroundColor Cyan
