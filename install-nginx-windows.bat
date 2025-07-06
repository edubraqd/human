@echo off
echo 🚀 Setting up nginx for Windows - $HUMAN Token Website
echo Path: C:\Users\Administrator\nginx-1.29.0\
echo.

set NGINX_DIR=C:\Users\Administrator\nginx-1.29.0
set WEBSITE_DIR=%NGINX_DIR%\html\human-token-website

echo Step 1: Checking nginx installation...
if exist "%NGINX_DIR%\nginx.exe" (
    echo ✅ nginx found at %NGINX_DIR%
) else (
    echo ❌ nginx not found at %NGINX_DIR%
    echo Please make sure nginx is installed in this directory
    pause
    exit /b 1
)

echo.
echo Step 2: Creating website directory...
if not exist "%WEBSITE_DIR%" mkdir "%WEBSITE_DIR%"

echo.
echo Step 3: Backing up original nginx.conf...
if exist "%NGINX_DIR%\conf\nginx.conf" (
    copy "%NGINX_DIR%\conf\nginx.conf" "%NGINX_DIR%\conf\nginx.conf.backup"
    echo ✅ Original config backed up
)

echo.
echo Step 4: Setting up configuration...
echo Copy your nginx.conf to: %NGINX_DIR%\conf\nginx.conf
echo.

echo Step 5: Copy your $HUMAN website files...
echo Copy all your project files to: %WEBSITE_DIR%\
echo.

echo 📋 Next Steps:
echo 1. Copy nginx.conf to %NGINX_DIR%\conf\nginx.conf
echo 2. Copy your website files to %WEBSITE_DIR%\
echo 3. Run start-nginx.bat to start the server
echo.

echo 📁 Directory Structure:
echo %NGINX_DIR%\
echo ├── nginx.exe
echo ├── conf\nginx.conf
echo ├── logs\
echo └── html\human-token-website\
echo.

pause
