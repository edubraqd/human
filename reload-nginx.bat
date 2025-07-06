@echo off
echo 🔄 Reloading nginx configuration
echo.

set NGINX_DIR=C:\Users\Administrator\nginx-1.29.0

echo Step 1: Testing nginx configuration...
cd /d "%NGINX_DIR%"
nginx.exe -t

if %errorLevel% neq 0 (
    echo ❌ nginx configuration test failed!
    echo Please fix your nginx.conf file at: %NGINX_DIR%\conf\nginx.conf
    pause
    exit /b 1
)

echo.
echo Step 2: Reloading nginx...
nginx.exe -s reload

if %errorLevel% equ 0 (
    echo ✅ nginx configuration reloaded successfully
) else (
    echo ❌ Failed to reload nginx configuration
)

echo.
echo 📁 Config file: %NGINX_DIR%\conf\nginx.conf
echo.

pause
