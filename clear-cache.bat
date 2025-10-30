@echo off
echo Clearing Next.js cache and node_modules...
rmdir /s /q .next 2>nul
rmdir /s /q node_modules 2>nul
echo Cache cleared! Now run: npm install
pause
