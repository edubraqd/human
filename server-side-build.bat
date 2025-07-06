@echo off
echo 🚀 BUILDING SERVER-SIDE RENDERED $HUMAN TOKEN WEBSITE
echo.

echo Step 1: Clean everything...
pm2 stop all 2>nul
pm2 delete all 2>nul

if exist ".next" rmdir /s /q ".next"
if exist "node_modules" rmdir /s /q "node_modules"
if exist "package-lock.json" del "package-lock.json"

echo.
echo Step 2: Fresh install...
npm cache clean --force
npm install

echo.
echo Step 3: Building with SERVER-SIDE RENDERING...
npm run build

if %errorLevel% neq 0 (
  echo ❌ Build failed!
  pause
  exit /b 1
)

echo.
echo Step 4: Starting production server...
pm2 start ecosystem.config.js --env production
pm2 save

echo.
echo 🎉 SERVER-SIDE RENDERED $HUMAN WEBSITE IS LIVE!
echo.
echo ✅ MAXIMUM SERVER-SIDE RENDERING
echo ✅ MINIMAL CLIENT-SIDE JAVASCRIPT  
echo ✅ FASTER INITIAL LOAD
echo ✅ BETTER SEO
echo ✅ REDUCED BUNDLE SIZE
echo.
echo 📊 Status: pm2 status
echo 🌐 URL: http://localhost:3000
echo.

pause
