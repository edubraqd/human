# Cloudflare Setup Checklist for $HUMAN Token Website

## 🔧 DNS Configuration
- [ ] Domain added to Cloudflare
- [ ] A record: @ → YOUR_SERVER_IP (Proxied)
- [ ] A record: www → YOUR_SERVER_IP (Proxied)
- [ ] Nameservers updated at domain registrar
- [ ] DNS propagation complete (24-48 hours)

## 🔒 SSL/TLS Settings
- [ ] Encryption mode: Full (not Flexible)
- [ ] Always Use HTTPS: Enabled
- [ ] HSTS: Enabled
- [ ] Minimum TLS Version: 1.2

## 🚀 Performance Settings
- [ ] Auto Minify: HTML, CSS, JS enabled
- [ ] Brotli compression: Enabled
- [ ] Caching level: Standard

## 🛡️ Security Settings
- [ ] Security level: Medium
- [ ] Bot Fight Mode: Enabled
- [ ] Rate Limiting: Configured if needed

## 🌐 Page Rules (Optional)
- [ ] Always Use HTTPS rule created
- [ ] Cache Everything rule for static assets

## 🧪 Testing
- [ ] HTTP redirects to HTTPS
- [ ] Website loads correctly
- [ ] CF-RAY header present (Cloudflare active)
- [ ] SSL certificate valid

## 📊 Monitoring
- [ ] Analytics enabled
- [ ] Security events monitored
