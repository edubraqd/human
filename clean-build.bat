@echo off
echo 🧹 Clean Build for $HUMAN Token Website
echo.

echo Step 1: Stopping any running processes...
pm2 stop human-token-website 2>nul

echo.
echo Step 2: Cleaning build artifacts...
if exist ".next" (
  echo Removing .next directory...
  rmdir /s /q ".next"
)

if exist "node_modules" (
  echo Removing node_modules directory...
  rmdir /s /q "node_modules"
)

if exist "package-lock.json" (
  echo Removing package-lock.json...
  del "package-lock.json"
)

echo.
echo Step 3: Clearing npm cache...
npm cache clean --force

echo.
echo Step 4: Installing fresh dependencies...
npm install

echo.
echo Step 5: Building the application...
npm run build

if %errorLevel% equ 0 (
  echo.
  echo ✅ Build successful!
  echo.
  echo Step 6: Starting with PM2...
  pm2 start ecosystem.config.js --env production
  pm2 save
  
  echo.
  echo 🎉 $HUMAN Token Website is now running!
  echo.
  echo 📊 Status: pm2 status
  echo 📋 Logs: pm2 logs human-token-website
  echo 🌐 URL: http://localhost:3000
  echo.
) else (
  echo.
  echo ❌ Build failed! Check the error messages above.
  echo.
)

pause
