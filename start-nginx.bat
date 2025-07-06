@echo off
echo 🚀 Starting nginx and $HUMAN Token Website
echo.

set NGINX_DIR=C:\Users\Administrator\nginx-1.29.0

echo Step 1: Checking if nginx is already running...
tasklist /FI "IMAGENAME eq nginx.exe" 2>NUL | find /I /N "nginx.exe">NUL
if "%ERRORLEVEL%"=="0" (
    echo ⚠️ nginx is already running. Stopping it first...
    call stop-nginx.bat
    timeout /t 2 /nobreak >nul
)

echo.
echo Step 2: Starting PM2 for Next.js app...
pm2 stop human-token-website 2>nul
pm2 start ecosystem.config.js --env production
pm2 save

echo.
echo Step 3: Testing nginx configuration...
cd /d "%NGINX_DIR%"
nginx.exe -t

if %errorLevel% neq 0 (
    echo ❌ nginx configuration test failed!
    echo Please check your nginx.conf file at: %NGINX_DIR%\conf\nginx.conf
    pause
    exit /b 1
)

echo.
echo Step 4: Starting nginx...
cd /d "%NGINX_DIR%"
start /B nginx.exe

echo.
echo Step 5: Waiting for services to start...
timeout /t 3 /nobreak >nul

echo.
echo Step 6: Checking if services are running...
tasklist /FI "IMAGENAME eq nginx.exe" 2>NUL | find /I /N "nginx.exe">NUL
if "%ERRORLEVEL%"=="0" (
    echo ✅ nginx is running
) else (
    echo ❌ nginx failed to start
)

pm2 status

echo.
echo 🎉 $HUMAN TOKEN WEBSITE IS NOW RUNNING!
echo.
echo 🌐 Website: http://localhost
echo 📊 PM2 Status: pm2 status
echo 📋 nginx Logs: %NGINX_DIR%\logs\access.log
echo 📋 nginx Errors: %NGINX_DIR%\logs\error.log
echo 📁 nginx Directory: %NGINX_DIR%
echo.
echo 🔧 Management Commands:
echo   stop-nginx.bat    - Stop nginx
echo   restart-nginx.bat - Restart nginx
echo   reload-nginx.bat  - Reload nginx config
echo   status-nginx.bat  - Check status
echo.

pause
