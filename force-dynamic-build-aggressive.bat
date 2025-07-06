@echo off
echo 🔥 AGGRESSIVELY FORCING DYNAMIC RENDERING
echo.

echo Step 1: Nuclear clean...
pm2 stop all 2>nul
pm2 delete all 2>nul

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
echo Step 2: Fresh install...
npm cache clean --force
npm install

echo.
echo Step 3: Setting environment variables for dynamic build...
set NODE_ENV=production
set NEXT_FORCE_DYNAMIC=true
set NEXT_PRIVATE_STANDALONE=false

echo.
echo Step 4: Building with MAXIMUM DYNAMIC FORCING...
npm run build

if %errorLevel% neq 0 (
  echo ❌ Build failed! Check the error messages above.
  pause
  exit /b 1
)

echo.
echo Step 5: Verifying build type...
if exist ".next\server\pages-manifest.json" (
  echo 📄 Checking pages manifest...
  type ".next\server\pages-manifest.json"
)

if exist ".next\prerender-manifest.json" (
  echo 📄 Checking prerender manifest...
  type ".next\prerender-manifest.json"
) else (
  echo ✅ No prerender manifest found - GOOD! (Dynamic build)
)

echo.
echo Step 6: Starting with explicit dynamic mode...
pm2 start ecosystem.config.js --env production
pm2 save

echo.
echo 🎉 MAXIMUM DYNAMIC RENDERING APPLIED!
echo.
echo 📊 Status: pm2 status
echo 🌐 URL: http://localhost:3000
echo.

pause
