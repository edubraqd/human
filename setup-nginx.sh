#!/bin/bash

echo "🚀 Setting up nginx for $HUMAN Token Website"
echo

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo "❌ Please run as root (use sudo)"
    exit 1
fi

# Update system
echo "📦 Updating system packages..."
apt update

# Install nginx
echo "📦 Installing nginx..."
apt install -y nginx

# Create website directory
echo "📁 Creating website directory..."
mkdir -p /var/www/human-token-website
chown -R www-data:www-data /var/www/human-token-website

# Copy your website files to /var/www/human-token-website
echo "📋 Please copy your website files to /var/www/human-token-website"
echo "   Example: cp -r /path/to/your/project/* /var/www/human-token-website/"

# Backup original nginx config
echo "💾 Backing up original nginx configuration..."
cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.backup

# Copy nginx configurations
echo "⚙️ Setting up nginx configuration..."
cp nginx.conf /etc/nginx/nginx.conf
cp sites-available/human-token.conf /etc/nginx/sites-available/human-token

# Enable the site
echo "🔗 Enabling $HUMAN website..."
ln -sf /etc/nginx/sites-available/human-token /etc/nginx/sites-enabled/human-token

# Remove default nginx site
echo "🗑️ Removing default nginx site..."
rm -f /etc/nginx/sites-enabled/default

# Test nginx configuration
echo "🧪 Testing nginx configuration..."
nginx -t

if [ $? -eq 0 ]; then
    echo "✅ nginx configuration is valid"
    
    # Start and enable nginx
    echo "🚀 Starting nginx..."
    systemctl enable nginx
    systemctl restart nginx
    
    echo
    echo "🎉 nginx setup complete!"
    echo
    echo "📊 Status: systemctl status nginx"
    echo "🔄 Reload: systemctl reload nginx"
    echo "🌐 Your $HUMAN website should be available at: http://your-domain.com"
    echo
    echo "⚠️ Don't forget to:"
    echo "   1. Update 'your-domain.com' in the nginx config with your actual domain"
    echo "   2. Copy your website files to /var/www/human-token-website/"
    echo "   3. Make sure your Next.js app is running on port 3000 with PM2"
    echo "   4. Configure SSL certificates for HTTPS (recommended)"
    echo
else
    echo "❌ nginx configuration test failed!"
    echo "Please check the configuration files and try again."
    exit 1
fi
