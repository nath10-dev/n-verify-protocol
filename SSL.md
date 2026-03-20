# N-Verify Protocol - SSL Setup

## Using Let's Encrypt (Free)

### Certbot

```bash
# Install
sudo apt-get install certbot python3-certbot-nginx

# Generate cert
sudo certbot --nginx -d api.nverify.io

# Auto-renew
sudo certbot renew --dry-run
```

## Using Cloudflare (Recommended)

1. Add site to Cloudflare
2. Update DNS
3. Enable SSL/TLS (Full)
4. Always use HTTPS (On)

## Nginx Config

```nginx
server {
    listen 443 ssl http2;
    server_name api.nverify.io;
    
    ssl_certificate /etc/letsencrypt/live/api.nverify.io/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.nverify.io/privkey.pem;
    
    location / {
        proxy_pass http://localhost:4000;
    }
}
```
