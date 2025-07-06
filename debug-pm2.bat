@echo off
echo 🐛 Debug PM2 Issues for $HUMAN Token Website
echo.

echo Current PM2 status:
pm2 status

echo.
echo Checking if Next.js build exists:
if exist ".next" (
  echo ✅ .next directory exists
) else (
  echo ❌ .next directory missing - need to build first
)

echo.
echo Checking package.json scripts:
type package.json | findstr "scripts" -A 5

echo.
echo Testing npm start command:
echo This will test if npm start works...
timeout /t 3 /nobreak > nul

echo.
echo If you see errors, the issue is with the build, not PM2.
echo Try running: npm run build
echo Then: npm start
echo.

pause
