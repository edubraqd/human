@echo off
echo 🔒 Fixing Cloudflare SSL Issues
echo.

echo 📋 CLOUDFLARE SSL CONFIGURATION:
echo.

echo 1. 🌐 Go to Cloudflare Dashboard:
echo    https://dash.cloudflare.com/
echo.

echo 2. 🔧 SSL/TLS Settings:
echo    - Click on your domain
echo    - Go to SSL/TLS tab
echo    - Set encryption mode to "Full" (not Flexible)
echo.

echo 3. 🔄 Edge Certificates:
echo    - Enable "Always Use HTTPS"
echo    - Enable "HTTP Strict Transport Security (HSTS)"
echo    - Set "Minimum TLS Version" to 1.2
echo.

echo 4. 🚀 Page Rules (Optional):
echo    Create a page rule for your domain:
echo    - Pattern: *yourdomain.com/*
echo    - Settings: Always Use HTTPS = On
echo.

echo 5. 🔧 nginx Configuration Update:
echo    Your nginx should listen on port 80 (HTTP only)
echo    Cloudflare will handle HTTPS termination
echo.

echo 📝 CURRENT nginx CONFIG CHECK:
if exist "C:\Users\Administrator\nginx-1.29.0\conf\nginx.conf" (
    echo ✅ nginx config found
    echo.
    echo Checking if listening on port 80...
    findstr "listen.*80" "C:\Users\Administrator\nginx-1.29.0\conf\nginx.conf"
    if %errorLevel% equ 0 (
        echo ✅ nginx is configured for port 80
    ) else (
        echo ❌ nginx might not be listening on port 80
    )
) else (
    echo ❌ nginx config not found
)

echo.
echo 🧪 TESTING CLOUDFLARE:
set /p domain="Enter your domain to test: "

echo.
echo Testing Cloudflare headers...
powershell -Command "try { $response = Invoke-WebRequest -Uri 'https://%domain%' -TimeoutSec 10; if($response.Headers['CF-RAY']) { Write-Host '✅ Cloudflare is active (CF-RAY header found)' } else { Write-Host '❌ Cloudflare not detected' }; Write-Host 'Status:' $response.StatusCode } catch { Write-Host '❌ Connection failed:' $_.Exception.Message }"

echo.
pause
