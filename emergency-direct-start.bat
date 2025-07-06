@echo off
echo 🆘 EMERGENCY DIRECT START - BYPASSING PM2
echo.

echo Stopping all processes...
pm2 stop all 2>nul
pm2 delete all 2>nul
taskkill /f /im node.exe 2>nul

echo.
echo Building fresh...
if exist ".next" rmdir /s /q ".next"
npm run build

if %errorLevel% neq 0 (
  echo ❌ Build failed!
  pause
  exit /b 1
)

echo.
echo Starting directly with Next.js (no PM2)...
echo.
echo 🌐 Your $HUMAN website will be at: http://localhost:3000
echo 🛑 Press Ctrl+C to stop
echo.

npm start
