@echo off
echo 🚀 FIXING $HUMAN WEBSITE SERVER ROUTING
echo.

echo Step 1: Verify you're in the correct directory...
echo Current directory: %CD%
echo.
dir /b | findstr /i "package.json" >nul
if %errorLevel% neq 0 (
  echo ❌ ERROR: package.json not found!
  echo You might be in the wrong directory.
  echo.
  echo Please navigate to your $HUMAN project folder first:
  echo cd C:\path\to\your\human-token-website
  echo.
  pause
  exit /b 1
)

echo ✅ Found package.json - you're in the right directory
echo.

echo Step 2: Clean everything...
pm2 stop all 2>nul
pm2 delete all 2>nul
if exist ".next" rmdir /s /q ".next"
if exist "node_modules" rmdir /s /q "node_modules"
if exist "package-lock.json" del "package-lock.json"

echo.
echo Step 3: Fresh install...
npm cache clean --force
npm install

echo.
echo Step 4: Build with explicit configuration...
set NODE_ENV=production
npm run build

if %errorLevel% neq 0 (
  echo ❌ Build failed!
  pause
  exit /b 1
)

echo.
echo Step 5: Start with explicit port and host...
echo Starting $HUMAN website on http://localhost:3000
echo.

mkdir logs 2>nul
pm2 start ecosystem.config.js --env production
pm2 save

echo.
echo ✅ $HUMAN WEBSITE SHOULD NOW BE RUNNING!
echo.
echo 🌐 Open: http://localhost:3000
echo 📊 Status: pm2 status
echo 📋 Logs: pm2 logs human-token-website
echo.
echo If you still see v0.dev interface, check the logs above for errors.
echo.

pause
