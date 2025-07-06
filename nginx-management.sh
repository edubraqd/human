#!/bin/bash

echo "🔧 nginx Management for $HUMAN Token Website"
echo

case "$1" in
    start)
        echo "🚀 Starting nginx..."
        systemctl start nginx
        systemctl status nginx
        ;;
    stop)
        echo "🛑 Stopping nginx..."
        systemctl stop nginx
        ;;
    restart)
        echo "🔄 Restarting nginx..."
        systemctl restart nginx
        systemctl status nginx
        ;;
    reload)
        echo "🔄 Reloading nginx configuration..."
        nginx -t && systemctl reload nginx
        ;;
    status)
        echo "📊 nginx Status:"
        systemctl status nginx
        echo
        echo "📊 PM2 Status:"
        pm2 status
        ;;
    logs)
        echo "📋 nginx Access Logs:"
        tail -f /var/log/nginx/access.log
        ;;
    errors)
        echo "📋 nginx Error Logs:"
        tail -f /var/log/nginx/error.log
        ;;
    test)
        echo "🧪 Testing nginx configuration..."
        nginx -t
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|reload|status|logs|errors|test}"
        echo
        echo "Commands:"
        echo "  start   - Start nginx"
        echo "  stop    - Stop nginx"
        echo "  restart - Restart nginx"
        echo "  reload  - Reload nginx config"
        echo "  status  - Show nginx and PM2 status"
        echo "  logs    - Show access logs"
        echo "  errors  - Show error logs"
        echo "  test    - Test nginx configuration"
        exit 1
        ;;
esac
