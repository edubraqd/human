@echo off
echo 📋 $HUMAN Token Website Logs
echo.

set NGINX_DIR=C:\Users\Administrator\nginx-1.29.0

echo Choose log type:
echo 1. Access Logs (visitor activity)
echo 2. Error Logs (nginx errors)
echo 3. PM2 Logs (Next.js app logs)
echo 4. Live Access Logs (real-time)
echo 5. Live Error Logs (real-time)
echo.

set /p choice="Enter your choice (1-5): "

if "%choice%"=="1" (
    echo.
    echo 📊 Recent Access Logs:
    if exist "%NGINX_DIR%\logs\access.log" (
        powershell "Get-Content '%NGINX_DIR%\logs\access.log' -Tail 50"
    ) else (
        echo No access log found at %NGINX_DIR%\logs\access.log
    )
) else if "%choice%"=="2" (
    echo.
    echo ❌ Recent Error Logs:
    if exist "%NGINX_DIR%\logs\error.log" (
        powershell "Get-Content '%NGINX_DIR%\logs\error.log' -Tail 50"
    ) else (
        echo No error log found at %NGINX_DIR%\logs\error.log
    )
) else if "%choice%"=="3" (
    echo.
    echo 📋 PM2 Logs:
    pm2 logs human-token-website --lines 50
) else if "%choice%"=="4" (
    echo.
    echo 📊 Live Access Logs (Press Ctrl+C to stop):
    if exist "%NGINX_DIR%\logs\access.log" (
        powershell "Get-Content '%NGINX_DIR%\logs\access.log' -Wait -Tail 10"
    ) else (
        echo No access log found at %NGINX_DIR%\logs\access.log
    )
) else if "%choice%"=="5" (
    echo.
    echo ❌ Live Error Logs (Press Ctrl+C to stop):
    if exist "%NGINX_DIR%\logs\error.log" (
        powershell "Get-Content '%NGINX_DIR%\logs\error.log' -Wait -Tail 10"
    ) else (
        echo No error log found at %NGINX_DIR%\logs\error.log
    )
) else (
    echo Invalid choice
)

echo.
echo 📁 Log Directory: %NGINX_DIR%\logs\
echo.

pause
