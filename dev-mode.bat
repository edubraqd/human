@echo off
echo 🚀 Starting $HUMAN Token Website in Development Mode
echo.

echo Stopping any PM2 processes...
pm2 stop human-token-website 2>nul

echo.
echo Starting development server...
echo.
echo 🌐 Your website will be available at: http://localhost:3000
echo 🔄 Hot reload is enabled - changes will update automatically
echo 🛑 Press Ctrl+C to stop the server
echo.

npm run dev
