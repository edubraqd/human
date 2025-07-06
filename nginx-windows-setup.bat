@echo off
echo 🚀 nginx Setup for Windows - $HUMAN Token Website
echo.

echo This script will help you set up nginx on Windows
echo.

echo Step 1: Download nginx for Windows
echo Go to: http://nginx.org/en/download.html
echo Download the Windows version and extract to C:\nginx
echo.

echo Step 2: Create nginx configuration
echo Copy the nginx.conf and sites-available/human-token.conf files
echo to your nginx configuration directory
echo.

echo Step 3: Update configuration
echo Edit the configuration files and update:
echo - Replace "your-domain.com" with your actual domain or "localhost"
echo - Update file paths to Windows format (C:\path\to\files)
echo - Make sure your Next.js app is running on port 3000
echo.

echo Step 4: Start nginx
echo Open Command Prompt as Administrator and run:
echo cd C:\nginx
echo nginx.exe
echo.

echo Step 5: Test your setup
echo Open browser and go to: http://localhost
echo You should see your $HUMAN website
echo.

echo 📋 nginx Commands for Windows:
echo Start:    nginx.exe
echo Stop:     nginx.exe -s quit
echo Reload:   nginx.exe -s reload
echo Test:     nginx.exe -t
echo.

pause
