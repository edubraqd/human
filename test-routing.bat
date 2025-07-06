@echo off
echo 🧪 Testing $HUMAN Token Website Routing
echo.

echo Step 1: Clean build...
if exist ".next" rmdir /s /q ".next"

echo.
echo Step 2: Building application...
npm run build

if %errorLevel% neq 0 (
  echo ❌ Build failed! Check the errors above.
  pause
  exit /b 1
)

echo.
echo Step 3: Starting development server to test routing...
echo.
echo 🌐 Testing these routes:
echo   - http://localhost:3000/ (Home)
echo   - http://localhost:3000/buy (Buy page)
echo   - http://localhost:3000/nft (NFT page)
echo   - http://localhost:3000/manifest (Manifest page)
echo.
echo Press Ctrl+C to stop testing
echo.

npm run dev
