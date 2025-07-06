@echo off
echo 🧪 Testing DNS Propagation for $HUMAN Token Website
echo.

set /p domain="Enter your domain (e.g., humantoken.com): "

echo.
echo 🔍 Testing DNS resolution for %domain%...
echo.

echo 1. 📡 Local DNS lookup:
nslookup %domain%

echo.
echo 2. 📡 Google DNS lookup:
nslookup %domain% 8.8.8.8

echo.
echo 3. 📡 Cloudflare DNS lookup:
nslookup %domain% 1.1.1.1

echo.
echo 4. 🌐 Testing HTTP connection:
powershell -Command "try { $response = Invoke-WebRequest -Uri 'http://%domain%' -TimeoutSec 10; Write-Host '✅ HTTP connection successful (Status:' $response.StatusCode ')' } catch { Write-Host '❌ HTTP connection failed:' $_.Exception.Message }"

echo.
echo 5. 🔒 Testing HTTPS connection:
powershell -Command "try { $response = Invoke-WebRequest -Uri 'https://%domain%' -TimeoutSec 10; Write-Host '✅ HTTPS connection successful (Status:' $response.StatusCode ')' } catch { Write-Host '❌ HTTPS connection failed:' $_.Exception.Message }"

echo.
echo 6. 📊 Online DNS propagation check:
echo    Visit: https://dnschecker.org/#A/%domain%
echo    This will show DNS propagation worldwide
echo.

pause
