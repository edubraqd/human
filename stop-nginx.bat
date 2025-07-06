@echo off
echo 🛑 Stopping nginx and $HUMAN Token Website
echo.

set NGINX_DIR=C:\Users\Administrator\nginx-1.29.0

echo Step 1: Stopping nginx...
tasklist /FI "IMAGENAME eq nginx.exe" 2>NUL | find /I /N "nginx.exe">NUL
if "%ERRORLEVEL%"=="0" (
    echo Stopping nginx processes...
    taskkill /F /IM nginx.exe >nul 2>&1
    echo ✅ nginx stopped
) else (
    echo ⚠️ nginx was not running
)

echo.
echo Step 2: Stopping PM2...
pm2 stop human-token-website

echo.
echo ✅ All services stopped
echo nginx Directory: %NGINX_DIR%
echo.

pause
