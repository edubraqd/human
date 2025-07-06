@echo off
echo 🔄 Restarting nginx and $HUMAN Token Website
echo.

set NGINX_DIR=C:\Users\Administrator\nginx-1.29.0

echo Step 1: Stopping services...
call stop-nginx.bat

echo.
echo Step 2: Waiting...
timeout /t 2 /nobreak >nul

echo.
echo Step 3: Starting services...
call start-nginx.bat
