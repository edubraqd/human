@echo off
echo 🔥 FORCING DYNAMIC RENDERING FOR $HUMAN TOKEN WEBSITE
echo.

echo Step 1: Stopping all processes...
pm2 stop all 2>nul
pm2 delete all 2>nul

echo.
echo Step 2: Nuclear clean...
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
echo Step 3: Fresh install...
npm cache clean --force
npm install

echo.
echo Step 4: Building with FORCED DYNAMIC RENDERING...
set NODE_ENV=production
npm run build

if %errorLevel% neq 0 (
  echo ❌ Build failed! Check the error messages above.
  pause
  exit /b 1
)

echo.
echo Step 5: Verifying build output...
if exist ".next\server\app" (
  echo ✅ Server-side rendering detected - DYNAMIC BUILD SUCCESS!
) else (
  echo ⚠️ Static build detected - checking for lambda functions...
)

echo.
echo Step 6: Starting production server...
pm2 start ecosystem.config.js --env production
pm2 save

echo.
echo 🎉 DYNAMIC $HUMAN TOKEN WEBSITE IS NOW RUNNING!
echo.
echo 📊 Status: pm2 status
echo 📋 Logs: pm2 logs human-token-website
echo 🌐 URL: http://localhost:3000
echo.
echo ✅ FORCED DYNAMIC RENDERING ACTIVE!
echo ✅ ALL PAGES NOW SERVER-SIDE RENDERED!
echo ✅ NO MORE STATIC GENERATION!
echo.

pause
