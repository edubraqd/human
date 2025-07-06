@echo off
echo 📚 nginx Setup Explanation for $HUMAN Token Website
echo.

echo 🤔 WHY NGINX + NEXT.JS?
echo.
echo nginx acts as a reverse proxy in front of your Next.js app:
echo.
echo Internet → nginx (Port 80) → Next.js (Port 3000)
echo.
echo 📊 BENEFITS:
echo ✅ Better performance for static files
echo ✅ SSL termination
echo ✅ Rate limiting and security
echo ✅ Load balancing (if needed)
echo ✅ Caching
echo.

echo 🔧 TWO CONFIGURATION OPTIONS:
echo.
echo 1. SIMPLE PROXY:
echo    - nginx forwards ALL requests to Next.js
echo    - Next.js handles static files
echo    - Easier setup, no file copying
echo    - Good for development/testing
echo.
echo 2. OPTIMIZED STATIC SERVING:
echo    - nginx serves static files directly
echo    - Only dynamic requests go to Next.js
echo    - Better performance
echo    - Requires copying built files to nginx
echo.

echo 📁 STATIC FILES IN NEXT.JS:
echo.
echo /_next/static/    - Built CSS, JS, images from Next.js
echo /images/         - Your public images
echo /videos/         - Your public videos  
echo /favicon.ico     - Site icon
echo /robots.txt      - SEO file
echo.

echo 🚀 RECOMMENDED APPROACH:
echo.
echo For Development:
echo 1. Use nginx-simple.conf
echo 2. Run: choose-nginx-config.bat (choose option 1)
echo 3. Run: start-nginx.bat
echo.
echo For Production:
echo 1. Use nginx-optimized.conf  
echo 2. Run: copy-website-files.bat
echo 3. Run: choose-nginx-config.bat (choose option 2)
echo 4. Run: start-nginx.bat
echo.

echo 🔍 CURRENT STATUS:
echo nginx Directory: C:\Users\Administrator\nginx-1.29.0\
echo.

if exist "C:\Users\Administrator\nginx-1.29.0\conf\nginx.conf" (
    echo ✅ nginx config exists
) else (
    echo ❌ nginx config missing
)

if exist "C:\Users\Administrator\nginx-1.29.0\html\human-token-website" (
    echo ✅ Website files copied to nginx
) else (
    echo ⚠️ Website files not copied to nginx (only needed for optimized config)
)

echo.
pause
