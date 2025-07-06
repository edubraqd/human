@echo off
echo 🔧 Fixing Build Issues for $HUMAN Token Website
echo.

echo Step 1: Cleaning previous build...
if exist ".next" rmdir /s /q ".next"
if exist "node_modules" rmdir /s /q "node_modules"

echo.
echo Step 2: Installing dependencies...
npm install

echo.
echo Step 3: Building the application...
npm run build

if %errorLevel% neq 0 (
  echo.
  echo ❌ Build failed! Trying alternative approach...
  echo.
  echo Clearing npm cache...
  npm cache clean --force
  
  echo.
  echo Reinstalling dependencies...
  npm install
  
  echo.
  echo Trying build again...
  npm run build
)

if %errorLevel% equ 0 (
  echo.
  echo ✅ Build successful!
  echo.
  echo Starting the application...
  npm start
) else (
  echo.
  echo ❌ Build still failing. Please check the error messages above.
  echo.
  echo Common solutions:
  echo 1. Make sure you're using Node.js 18 or higher
  echo 2. Delete node_modules and package-lock.json, then run npm install
  echo 3. Check for any TypeScript errors in your code
  echo.
)

pause
