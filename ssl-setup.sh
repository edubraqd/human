#!/bin/bash

echo "🔒 Setting up SSL for $HUMAN Token Website"
echo

# Variables
DOMAIN="your-domain.com"
EMAIL="your-email@example.com"

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo "❌ Please run as root (use sudo)"
    exit 1
fi

echo "📦 Installing Certbot..."
apt update
apt install -y certbot python3-certbot-nginx

echo
echo "🔒 Obtaining SSL certificate..."
certbot --nginx -d $DOMAIN -d www.$DOMAIN --email $EMAIL --agree-tos --non-interactive

if [ $? -eq 0 ]; then
    echo "✅ SSL certificate obtained successfully!"
    
    echo
    echo "⚙️ Setting up auto-renewal..."
    crontab -l | { cat; echo "0 12 * * * /usr/bin/certbot renew --quiet"; } | crontab -
    
    echo
    echo "🧪 Testing nginx configuration..."
    nginx -t && systemctl reload nginx
    
    echo
    echo "🎉 SSL SETUP COMPLETE!"
    echo
    echo "🌐 Your $HUMAN website is now available at: https://$DOMAIN"
    echo "🔒 SSL Grade: Check at https://www.ssllabs.com/ssltest/"
    echo "🔄 Auto-renewal: Certificates will auto-renew"
    echo
else
    echo "❌ SSL certificate setup failed!"
    echo "Please check your domain DNS settings and try again."
fi
