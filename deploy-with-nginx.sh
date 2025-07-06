#!/bin/bash

echo "🚀 Deploying $HUMAN Token Website with nginx"
echo

# Variables (update these)
DOMAIN="your-domain.com"
PROJECT_DIR="/var/www/human-token-website"
CURRENT_DIR=$(pwd)

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo "❌ Please run as root (use sudo)"
    exit 1
fi

echo "Step 1: Stopping services..."
systemctl stop nginx
pm2 stop all

echo
echo "Step 2: Creating project directory..."
mkdir -p $PROJECT_DIR
cd $PROJECT_DIR

echo
echo "Step 3: Copying project files..."
cp -r $CURRENT_DIR/* $PROJECT_DIR/
chown -R www-data:www-data $PROJECT_DIR

echo
echo "Step 4: Installing dependencies..."
npm install

echo
echo "Step 5: Building the application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo
echo "Step 6: Starting PM2..."
pm2 start ecosystem.config.js --env production
pm2 save
pm2 startup

echo
echo "Step 7: Updating nginx configuration..."
sed -i "s/your-domain.com/$DOMAIN/g" /etc/nginx/sites-available/human-token
sed -i "s|/var/www/human-token-website|$PROJECT_DIR|g" /etc/nginx/sites-available/human-token

echo
echo "Step 8: Testing nginx configuration..."
nginx -t

if [ $? -eq 0 ]; then
    echo "✅ nginx configuration is valid"
    
    echo
    echo "Step 9: Starting nginx..."
    systemctl start nginx
    systemctl enable nginx
    
    echo
    echo "🎉 DEPLOYMENT COMPLETE!"
    echo
    echo "🌐 Your $HUMAN website is now live at: http://$DOMAIN"
    echo "📊 nginx status: systemctl status nginx"
    echo "📊 PM2 status: pm2 status"
    echo "📋 nginx logs: tail -f /var/log/nginx/access.log"
    echo "📋 PM2 logs: pm2 logs human-token-website"
    echo
else
    echo "❌ nginx configuration test failed!"
    exit 1
fi
