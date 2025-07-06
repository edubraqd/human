@echo off
echo 🔍 DIAGNOSING $HUMAN WEBSITE SERVER ISSUES
echo.

echo Step 1: Checking current directory and files...
echo Current directory: %CD%
echo.
echo Checking for key files:
if exist "package.json" (
  echo ✅ package.json found
) else (
  echo ❌ package.json NOT found - you might be in wrong directory
)

if exist "app\page.tsx" (
  echo ✅ app\page.tsx found
) else (
  echo ❌ app\page.tsx NOT found - missing main page
)

if exist "next.config.mjs" (
  echo ✅ next.config.mjs found
) else (
  echo ❌ next.config.mjs NOT found
)

echo.
echo Step 2: Stopping all processes...
pm2 stop all 2>nul
pm2 delete all 2>nul
taskkill /f /im node.exe 2>nul

echo.
echo Step 3: Complete clean and rebuild...
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
echo Step 4: Fresh install and build...
npm cache clean --force
npm install

echo.
echo Step 5: Building the application...
npm run build

if %errorLevel% neq 0 (
  echo ❌ Build failed! Check the errors above.
  echo.
  echo Common fixes:
  echo 1. Make sure you're in the correct project directory
  echo 2. Check if all files are present
  echo 3. Verify package.json has correct scripts
  pause
  exit /b 1
)

echo.
echo Step 6: Testing the build...
if exist ".next\server\app\page.js" (
  echo ✅ Build successful - page.js found
) else (
  echo ❌ Build issue - page.js not generated
)

echo.
echo Step 7: Starting development server for testing...
echo.
echo 🌐 Opening http://localhost:3000
echo 🔍 Check if you see the $HUMAN website now
echo 🛑 Press Ctrl+C to stop and continue with production setup
echo.

start http://localhost:3000
npm run dev
