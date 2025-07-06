@echo off
echo 🔧 Fixing PM2 Issues for $HUMAN Token Website
echo.

echo Step 1: Stopping all PM2 processes...
pm2 stop all
pm2 delete all

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

if exist "logs" (
  echo Cleaning logs directory...
  rmdir /s /q "logs"
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

if %errorLevel% neq 0 (
  echo ❌ Build failed! Check the error messages above.
  pause
  exit /b 1
)

echo.
echo Step 6: Testing the start command...
echo Testing if 'npm start' works...
timeout /t 3 /nobreak > nul
start /b npm start
timeout /t 10 /nobreak > nul

echo.
echo Step 7: Stopping test and starting with PM2...
taskkill /f /im node.exe 2>nul

echo Creating logs directory...
mkdir logs 2>nul

echo Starting with PM2...
pm2 start ecosystem.config.js --env production
pm2 save

echo.
echo ✅ PM2 setup complete!
echo.
echo 📊 Check status: pm2 status
echo 📋 View logs: pm2 logs human-token-website
echo 🌐 Website: http://localhost:3000
echo.

pause
