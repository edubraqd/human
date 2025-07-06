@echo off
echo 🚀 Deploying $HUMAN Token Website with nginx on Windows
echo.

set NGINX_DIR=C:\Users\Administrator\nginx-1.29.0
set PROJECT_DIR=%NGINX_DIR%\html\human-token-website
set CURRENT_DIR=%CD%

echo nginx Directory: %NGINX_DIR%
echo Website Directory: %PROJECT_DIR%
echo Current Directory: %CURRENT_DIR%
echo.

echo Step 1: Stopping existing services...
call stop-nginx.bat

echo.
echo Step 2: Creating project directory...
if not exist "%PROJECT_DIR%" mkdir "%PROJECT_DIR%"

echo.
echo Step 3: Copying project files...
echo Copying from %CURRENT_DIR% to %PROJECT_DIR%
xcopy "%CURRENT_DIR%\*" "%PROJECT_DIR%\" /E /H /C /I /Y /EXCLUDE:exclude.txt

echo.
echo Step 4: Installing dependencies...
cd /d "%PROJECT_DIR%"
npm install

echo.
echo Step 5: Building the application...
npm run build

if %errorLevel% neq 0 (
    echo ❌ Build failed!
    pause
    exit /b 1
)

echo.
echo Step 6: Copying nginx configuration...
copy "%CURRENT_DIR%\nginx.conf" "%NGINX_DIR%\conf\nginx.conf"

echo.
echo Step 7: Starting services...
call start-nginx.bat

echo.
echo 🎉 DEPLOYMENT COMPLETE!
echo.
echo 🌐 Your $HUMAN website is now live at: http://localhost
echo 📁 nginx Directory: %NGINX_DIR%
echo 📁 Website files: %PROJECT_DIR%
echo 📁 Config file: %NGINX_DIR%\conf\nginx.conf
echo 📊 Check status: status-nginx.bat
echo 🔧 Manage: start-nginx.bat, stop-nginx.bat, restart-nginx.bat
echo.

pause
