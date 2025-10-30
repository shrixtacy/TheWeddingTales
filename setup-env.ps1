Write-Host "Creating .env.local file with your Supabase credentials..." -ForegroundColor Green

$envContent = @"
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://wafyntuaohdxgnrypnvr.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhZnludHVhb2hkeGducnlwbnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5OTY3MjcsImV4cCI6MjA3NDU3MjcyN30.iCbb617friVk_OKZ9-WCvuMFQqlQKzWhrA0Nr-02pZk

# Admin Panel
NEXT_PUBLIC_ADMIN_PASSWORD=admin123
"@

$envContent | Out-File -FilePath ".env.local" -Encoding UTF8

Write-Host ""
Write-Host "✅ .env.local file created successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Run the SQL commands in SUPABASE_SETUP.md to create the database tables" -ForegroundColor White
Write-Host "2. Run: npm run dev" -ForegroundColor White
Write-Host "3. Go to /admin and test the Analytics dashboard" -ForegroundColor White
Write-Host ""
Read-Host "Press Enter to continue"