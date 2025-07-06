@echo off
echo 🚀 Simple Start for $HUMAN Token Website
echo.

echo Stopping PM2 processes...
pm2 stop all 2>nul
pm2 delete all 2>nul

echo.
echo Building the application...
npm run build

if %errorLevel% neq 0 (
  echo ❌ Build failed!
  pause
  exit /b 1
)

echo.
echo Starting the application directly...
echo.
echo 🌐 Your website will be available at: http://localhost:3000
echo 🛑 Press Ctrl+C to stop the server
echo.

npm start
