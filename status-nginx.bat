@echo off
echo 📊 $HUMAN Token Website Status
echo.

set NGINX_DIR=C:\Users\Administrator\nginx-1.29.0

echo nginx Status:
tasklist /FI "IMAGENAME eq nginx.exe" 2>NUL | find /I /N "nginx.exe">NUL
if "%ERRORLEVEL%"=="0" (
    echo ✅ nginx is running
    tasklist /FI "IMAGENAME eq nginx.exe"
) else (
    echo ❌ nginx is not running
)

echo.
echo PM2 Status:
pm2 status

echo.
echo Recent nginx Access Logs:
if exist "%NGINX_DIR%\logs\access.log" (
    powershell "Get-Content '%NGINX_DIR%\logs\access.log' -Tail 10"
) else (
    echo No access log found at %NGINX_DIR%\logs\access.log
)

echo.
echo Recent nginx Error Logs:
if exist "%NGINX_DIR%\logs\error.log" (
    powershell "Get-Content '%NGINX_DIR%\logs\error.log' -Tail 10"
) else (
    echo No error log found at %NGINX_DIR%\logs\error.log
)

echo.
echo 📁 nginx Directory: %NGINX_DIR%
echo 📁 Website Directory: %NGINX_DIR%\html\human-token-website
echo.

pause
