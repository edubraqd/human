@echo off
echo 🏥 $HUMAN Token Website Health Check
echo.

set NGINX_DIR=C:\Users\Administrator\nginx-1.29.0

echo nginx Directory: %NGINX_DIR%
echo.

echo Step 1: Checking nginx process...
tasklist /FI "IMAGENAME eq nginx.exe" 2>NUL | find /I /N "nginx.exe">NUL
if "%ERRORLEVEL%"=="0" (
    echo ✅ nginx process is running
) else (
    echo ❌ nginx process is not running
    echo.
    echo 🔧 Try running: start-nginx.bat
    pause
    exit /b 1
)

echo.
echo Step 2: Checking nginx executable...
if exist "%NGINX_DIR%\nginx.exe" (
    echo ✅ nginx executable found at %NGINX_DIR%\nginx.exe
) else (
    echo ❌ nginx executable not found at %NGINX_DIR%\nginx.exe
)

echo.
echo Step 3: Checking nginx configuration...
if exist "%NGINX_DIR%\conf\nginx.conf" (
    echo ✅ nginx config found at %NGINX_DIR%\conf\nginx.conf
    cd /d "%NGINX_DIR%"
    nginx.exe -t
) else (
    echo ❌ nginx config not found at %NGINX_DIR%\conf\nginx.conf
)

echo.
echo Step 4: Checking PM2 status...
pm2 status | findstr "human-token-website"
if %errorLevel% equ 0 (
    echo ✅ PM2 process found
) else (
    echo ❌ PM2 process not found
    echo.
    echo 🔧 Try running: pm2 start ecosystem.config.js --env production
)

echo.
echo Step 5: Testing website response...
powershell -Command "try { $response = Invoke-WebRequest -Uri 'http://localhost' -TimeoutSec 10; Write-Host '✅ Website is responding (Status:' $response.StatusCode ')' } catch { Write-Host '❌ Website is not responding:' $_.Exception.Message }"

echo.
echo Step 6: Testing Next.js app directly...
powershell -Command "try { $response = Invoke-WebRequest -Uri 'http://localhost:3000' -TimeoutSec 10; Write-Host '✅ Next.js app is responding (Status:' $response.StatusCode ')' } catch { Write-Host '❌ Next.js app is not responding:' $_.Exception.Message }"

echo.
echo Step 7: Checking ports...
netstat -an | findstr ":80 "
if %errorLevel% equ 0 (
    echo ✅ Port 80 is listening
) else (
    echo ❌ Port 80 is not listening
)

netstat -an | findstr ":3000 "
if %errorLevel% equ 0 (
    echo ✅ Port 3000 is listening
) else (
    echo ❌ Port 3000 is not listening
)

echo.
echo 📊 Health Check Complete
echo 📁 nginx Directory: %NGINX_DIR%
echo.

pause
