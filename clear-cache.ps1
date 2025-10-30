Write-Host "Clearing Next.js cache and node_modules..." -ForegroundColor Yellow
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Write-Host "Cache cleared! Now run: npm install" -ForegroundColor Green
Read-Host "Press Enter to continue"
