@echo off
echo 📁 Copying $HUMAN Website Files to nginx Directory
echo.

set NGINX_DIR=C:\Users\Administrator\nginx-1.29.0
set WEBSITE_DIR=%NGINX_DIR%\html\human-token-website
set CURRENT_DIR=%CD%

echo Source: %CURRENT_DIR%
echo Destination: %WEBSITE_DIR%
echo.

echo Step 1: Creating website directory...
if not exist "%WEBSITE_DIR%" mkdir "%WEBSITE_DIR%"

echo.
echo Step 2: Copying all files...
echo This will copy your entire project to the nginx directory
echo.

set /p confirm="Continue? (y/n): "
if /i not "%confirm%"=="y" (
    echo Cancelled.
    pause
    exit /b 0
)

echo.
echo Copying files...
xcopy "%CURRENT_DIR%\*" "%WEBSITE_DIR%\" /E /H /C /I /Y /EXCLUDE:exclude.txt

echo.
echo Step 3: Installing dependencies in nginx directory...
cd /d "%WEBSITE_DIR%"
npm install

echo.
echo Step 4: Building the application...
npm run build

if %errorLevel% neq 0 (
    echo ❌ Build failed!
    pause
    exit /b 1
)

echo.
echo ✅ Website files copied and built successfully!
echo.
echo 📁 Website location: %WEBSITE_DIR%
echo 📁 Static files: %WEBSITE_DIR%\.next\static\
echo 📁 Public files: %WEBSITE_DIR%\public\
echo.
echo 🚀 Now you can start nginx with optimized static file serving!
echo Run: start-nginx.bat
echo.

pause
