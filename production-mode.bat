@echo off
echo 🏭 Starting $HUMAN Token Website in Production Mode
echo.

echo Step 1: Building the application...
npm run build

if %errorLevel% neq 0 (
  echo ❌ Build failed! Please fix the errors and try again.
  pause
  exit /b 1
)

echo.
echo Step 2: Starting production server...
pm2 stop human-token-website 2>nul
pm2 start ecosystem.config.js --env production
pm2 save

echo.
echo ✅ Production server started!
echo.
echo 📊 Check status: pm2 status
echo 📋 View logs: pm2 logs human-token-website
echo 🌐 Website: http://localhost:3000
echo.

pause
