@echo off
echo 🔍 Verifying Dynamic Build Status
echo.

echo Step 1: Checking build output...
if exist ".next\BUILD_ID" (
  echo ✅ Build ID found:
  type ".next\BUILD_ID"
) else (
  echo ❌ No BUILD_ID found
)

echo.
echo Step 2: Checking for static files...
if exist ".next\server\pages" (
  echo 📁 Server pages directory exists
  dir ".next\server\pages" /b
) else (
  echo ❌ No server pages directory
)

echo.
echo Step 3: Checking prerender manifest...
if exist ".next\prerender-manifest.json" (
  echo ⚠️ PRERENDER MANIFEST EXISTS - This indicates static generation!
  echo Content:
  type ".next\prerender-manifest.json"
  echo.
  echo 🔥 This means some pages are being statically generated!
) else (
  echo ✅ No prerender manifest - GOOD! (Fully dynamic)
)

echo.
echo Step 4: Checking routes manifest...
if exist ".next\routes-manifest.json" (
  echo 📄 Routes manifest:
  type ".next\routes-manifest.json"
)

echo.
echo Step 5: Testing dynamic response...
echo Making request to check if responses are dynamic...
powershell -Command "try { $r1 = Invoke-WebRequest -Uri 'http://localhost:3000/api/force-dynamic' -TimeoutSec 5; $r2 = Invoke-WebRequest -Uri 'http://localhost:3000/api/force-dynamic' -TimeoutSec 5; $j1 = $r1.Content | ConvertFrom-Json; $j2 = $r2.Content | ConvertFrom-Json; if($j1.timestamp -ne $j2.timestamp) { Write-Host '✅ DYNAMIC - Timestamps are different' } else { Write-Host '❌ STATIC - Timestamps are the same' } } catch { Write-Host '❌ Could not test - make sure server is running' }"

echo.
pause
