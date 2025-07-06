@echo off
echo 🔧 Setting up $HUMAN Website as Windows Service
echo.

set NGINX_DIR=C:\Users\Administrator\nginx-1.29.0

echo nginx Directory: %NGINX_DIR%
echo.

echo This will help you run nginx and your website as Windows services
echo.

echo Step 1: Download NSSM (Non-Sucking Service Manager)
echo Go to: https://nssm.cc/download
echo Download nssm and extract to C:\nssm\
echo.

echo Step 2: Install nginx as a service
echo Run as Administrator:
echo C:\nssm\nssm.exe install nginx-human "%NGINX_DIR%\nginx.exe"
echo C:\nssm\nssm.exe set nginx-human AppDirectory "%NGINX_DIR%"
echo C:\nssm\nssm.exe set nginx-human DisplayName "nginx - $HUMAN Token Website"
echo C:\nssm\nssm.exe set nginx-human Description "nginx reverse proxy for $HUMAN token website"
echo.

echo Step 3: Start the service
echo net start nginx-human
echo.

echo Step 4: Set to start automatically
echo sc config nginx-human start= auto
echo.

echo 📋 Service Management Commands:
echo Start:   net start nginx-human
echo Stop:    net stop nginx-human
echo Status:  sc query nginx-human
echo Remove:  C:\nssm\nssm.exe remove nginx-human confirm
echo.

echo ⚠️ Remember to also set up PM2 to start automatically:
echo pm2 startup
echo pm2 save
echo.

echo 📁 nginx Directory: %NGINX_DIR%
echo.

pause
