# Next.js Deployment Guide

Simple deployment guide for Next.js applications to Linode servers or Vercel.

## Linode Server Deployment

### Prerequisites
- Ubuntu server with Node.js 18+
- Nginx installed
- Domain pointing to your server

### Step 1: Server Setup

```bash
# Install Node.js and PM2
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g pm2

# Create app directory
sudo mkdir -p /var/www/your-app
sudo chown $USER:$USER /var/www/your-app
```

### Step 2: Deploy Your Code

```bash
cd /var/www/your-app

# Clone your repository
git clone https://github.com/username/your-repo.git .

# Create environment file
nano .env.production
```

**Environment file template:**
```env
NODE_ENV=production
PORT=3001
NEXT_PUBLIC_APP_URL=https://your-domain.com

# Database (choose one)
DATABASE_URL=mysql://user:password@localhost:3306/database
# OR
DATABASE_URL=postgresql://user:password@db.project.supabase.co:5432/postgres

# Optional
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-secret-key
```

**⚠️ Important: Choose an unused port (3001, 3002, 3003, etc.) since multiple services run on different ports.**

### Step 3: Create Deployment Script

```bash
nano deploy.sh
```

```bash
#!/bin/bash

APP_NAME="your-app"
APP_PORT=3001  # Change to your chosen port

echo "🚀 Deploying $APP_NAME..."

# Pull latest code
git pull

# Install and build
npm ci
npm run build

# Restart with PM2
pm2 delete $APP_NAME 2>/dev/null || true
pm2 start npm --name "$APP_NAME" -- start
pm2 save

echo "✅ Deployed on port $APP_PORT"
```

```bash
chmod +x deploy.sh
./deploy.sh
```

### Step 4: Configure Nginx

```bash
sudo nano /etc/nginx/sites-available/your-app
```

```nginx
server {
    listen 80;
    server_name your-domain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your-domain.com;
    
    location / {
        proxy_pass http://127.0.0.1:3001;  # Use your chosen port
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/your-app /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Get SSL certificate
sudo certbot --nginx -d your-domain.com
```

### Step 5: Check Deployment

```bash
# Check if app is running
pm2 status

# View logs
pm2 logs your-app

# Test locally
curl http://localhost:3001
```

**For future deployments, just run:** `./deploy.sh`

---

## Vercel Deployment

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Configure Environment Variables

Create `vercel.json` in your project root:

```json
{
  "env": {
    "DATABASE_URL": "@database-url",
    "NEXTAUTH_SECRET": "@nextauth-secret"
  }
}
```

### Step 3: Set Environment Variables

```bash
# Login to Vercel
vercel login

# Add environment variables
vercel env add DATABASE_URL
vercel env add NEXTAUTH_SECRET
vercel env add NEXTAUTH_URL
```

### Step 4: Deploy

```bash
# First deployment
vercel

# Production deployment
vercel --prod
```

### Step 5: Set Custom Domain (Optional)

```bash
# Add your domain
vercel domains add your-domain.com

# Link to project
vercel alias your-app-name.vercel.app your-domain.com
```

**For future deployments:** Just push to your main branch (auto-deploy) or run `vercel --prod`

---

## Database Options

### Supabase (Recommended for Vercel)
1. Create project at [supabase.com](https://supabase.com)
2. Get connection string from Settings > Database
3. Use as `DATABASE_URL`

### MySQL (For Linode)
```bash
# Create database
mysql -u root -p
CREATE DATABASE your_app;
CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL ON your_app.* TO 'app_user'@'localhost';
```

---

## Quick Troubleshooting

### Linode Issues
```bash
# Check what's running on ports
netstat -tulpn | grep :300

# Check PM2 logs
pm2 logs your-app

# Restart app
pm2 restart your-app
```

### Vercel Issues
```bash
# Check deployment logs
vercel logs

# Check environment variables
vercel env ls
```

---

## Port Management for Linode

**Common port assignments:**
- 3000: Main app
- 3001: Docs site  
- 3002: Admin panel
- 3003: API service
- 3004: Monitoring app

**Check available ports:**
```bash
# See what ports are in use
sudo netstat -tulpn | grep :300

# Choose an unused port for your app
```

**Update these files with your chosen port:**
- `.env.production` → `PORT=3001`
- `deploy.sh` → `APP_PORT=3001`
- Nginx config → `proxy_pass http://127.0.0.1:3001`

---

🎉 **Your Next.js application should now be live!**

For ongoing deployments, simply run `./deploy.sh` after pushing new code changes. Hi test.
