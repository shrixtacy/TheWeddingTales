@echo off
echo Creating .env.local file with your Supabase credentials...

echo # Supabase Configuration > .env.local
echo NEXT_PUBLIC_SUPABASE_URL=https://wafyntuaohdxgnrypnvr.supabase.co >> .env.local
echo NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhZnludHVhb2hkeGducnlwbnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5OTY3MjcsImV4cCI6MjA3NDU3MjcyN30.iCbb617friVk_OKZ9-WCvuMFQqlQKzWhrA0Nr-02pZk >> .env.local
echo. >> .env.local
echo # Admin Panel >> .env.local
echo NEXT_PUBLIC_ADMIN_PASSWORD=admin123 >> .env.local

echo.
echo ✅ .env.local file created successfully!
echo.
echo Next steps:
echo 1. Run the SQL commands in SUPABASE_SETUP.md to create the database tables
echo 2. Run: npm run dev
echo 3. Go to /admin and test the Analytics dashboard
echo.
pause