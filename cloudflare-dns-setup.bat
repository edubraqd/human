@echo off
echo 🌐 Cloudflare DNS Setup for $HUMAN Token Website
echo.

echo 📋 STEP-BY-STEP CLOUDFLARE DNS CONFIGURATION:
echo.

echo 1. 🔑 LOGIN TO CLOUDFLARE:
echo    Go to: https://dash.cloudflare.com/
echo    Login to your account
echo.

echo 2. 📝 ADD YOUR DOMAIN:
echo    - Click "Add a Site"
echo    - Enter your domain name (e.g., humantoken.com)
echo    - Choose Free plan
echo    - Click "Add Site"
echo.

echo 3. 🔧 DNS RECORDS SETUP:
echo    In Cloudflare DNS settings, add these records:
echo.
echo    TYPE    NAME    CONTENT                 PROXY STATUS
echo    ----    ----    -------                 ------------
echo    A       @       YOUR_SERVER_IP          Proxied (Orange Cloud)
echo    A       www     YOUR_SERVER_IP          Proxied (Orange Cloud)
echo.

set /p server_ip="Enter your server IP address: "

echo.
echo 📊 YOUR DNS RECORDS SHOULD BE:
echo    A       @       %server_ip%          Proxied
echo    A       www     %server_ip%          Proxied
echo.

echo 4. 🏷️ UPDATE NAMESERVERS:
echo    Cloudflare will show you nameservers like:
echo    - xxx.ns.cloudflare.com
echo    - yyy.ns.cloudflare.com
echo.
echo    Go to your domain registrar and update nameservers to these.
echo.

echo 5. ⏰ WAIT FOR PROPAGATION:
echo    DNS changes can take 24-48 hours to fully propagate.
echo.

echo 6. 🔒 SSL/TLS SETTINGS:
echo    In Cloudflare SSL/TLS tab:
echo    - Set to "Full" or "Full (strict)"
echo    - Enable "Always Use HTTPS"
echo.

echo 🧪 TESTING COMMANDS:
echo.

pause
