@echo off
echo 🔧 Choose nginx Configuration for $HUMAN Token Website
echo.

set NGINX_DIR=C:\Users\Administrator\nginx-1.29.0

echo Choose your nginx configuration:
echo.
echo 1. SIMPLE - Just proxy everything to Next.js (recommended for testing)
echo 2. OPTIMIZED - Serve static files from nginx (better performance)
echo.

set /p choice="Enter your choice (1-2): "

if "%choice%"=="1" (
    echo.
    echo 📋 Using SIMPLE configuration...
    copy "nginx-simple.conf" "%NGINX_DIR%\conf\nginx.conf"
    echo ✅ Simple config copied to %NGINX_DIR%\conf\nginx.conf
    echo.
    echo 📝 This configuration:
    echo   - Proxies ALL requests to Next.js on port 3000
    echo   - Let Next.js handle all static files
    echo   - Simpler setup, no file copying needed
    echo   - Good for development and testing
    echo.
) else if "%choice%"=="2" (
    echo.
    echo 📋 Using OPTIMIZED configuration...
    copy "nginx-optimized.conf" "%NGINX_DIR%\conf\nginx.conf"
    echo ✅ Optimized config copied to %NGINX_DIR%\conf\nginx.conf
    echo.
    echo 📝 This configuration:
    echo   - Serves static files directly from nginx
    echo   - Better performance for images, CSS, JS
    echo   - Requires copying website files to nginx directory
    echo   - Recommended for production
    echo.
    echo ⚠️ IMPORTANT: You need to copy your website files to:
    echo   %NGINX_DIR%\html\human-token-website\
    echo.
) else (
    echo Invalid choice
    pause
    exit /b 1
)

echo.
echo 🧪 Testing nginx configuration...
cd /d "%NGINX_DIR%"
nginx.exe -t

if %errorLevel% equ 0 (
    echo ✅ nginx configuration is valid
    echo.
    echo 🚀 Ready to start! Run: start-nginx.bat
) else (
    echo ❌ nginx configuration test failed!
)

echo.
pause
