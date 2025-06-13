# Configuration Documentation

This section contains system configurations, environment setups, and infrastructure documentation for all Gray Bay Solutions systems and services.

## Overview

Proper configuration management ensures:
- **Consistent Environments** - All systems work the same way
- **Reproducible Deployments** - Easy to set up new environments
- **Security Compliance** - Proper security configurations
- **Scalability** - Systems that can grow with the business
- **Maintainability** - Easy to update and maintain systems

## Environment Configurations

### 🌍 Environment Types

#### Development Environment
- **Purpose**: Local development and testing
- **Configuration**: Relaxed security, verbose logging, hot reload
- **Database**: Local SQLite or PostgreSQL
- **External Services**: Sandbox/test APIs

#### Staging Environment
- **Purpose**: Pre-production testing and client previews
- **Configuration**: Production-like settings with test data
- **Database**: Separate staging database
- **External Services**: Test/staging APIs

#### Production Environment
- **Purpose**: Live client-facing systems
- **Configuration**: Optimized for performance and security
- **Database**: Production database with backups
- **External Services**: Live APIs and services

### 🔐 Environment Variables

#### Required Variables
```bash
# Application
NODE_ENV=production
PORT=3000
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/dbname

# Authentication
JWT_SECRET=your-jwt-secret-key
BCRYPT_ROUNDS=12

# External Services
SENDGRID_API_KEY=your-sendgrid-api-key
STRIPE_SECRET_KEY=your-stripe-secret-key
GOOGLE_ANALYTICS_ID=your-ga-id

# Social Media
FACEBOOK_APP_ID=your-facebook-app-id
TWITTER_API_KEY=your-twitter-api-key
```

#### Optional Variables
```bash
# Development
DEBUG=true
LOG_LEVEL=debug

# Features
ENABLE_ANALYTICS=true
ENABLE_CHAT=true
MAINTENANCE_MODE=false

# Performance
CACHE_TTL=3600
MAX_UPLOAD_SIZE=10485760
```

## Server Configuration

### 🖥️ Server Requirements

#### Minimum Requirements
- **CPU**: 2 vCPUs
- **RAM**: 4GB
- **Storage**: 20GB SSD
- **Network**: 1Gbps connection
- **OS**: Ubuntu 20.04 LTS or CentOS 8

#### Recommended Requirements
- **CPU**: 4 vCPUs
- **RAM**: 8GB
- **Storage**: 50GB SSD
- **Network**: 1Gbps connection
- **OS**: Ubuntu 22.04 LTS

### 🐳 Docker Configuration

#### Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Build application
RUN npm run build

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
```

#### Docker Compose
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://postgres:password@db:5432/app
    depends_on:
      - db
    volumes:
      - ./uploads:/app/uploads

  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=app
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### 🌐 Nginx Configuration

#### Basic Configuration
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### SSL Configuration
```nginx
server {
    listen 443 ssl http2;
    server_name your-domain.com;

    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    location / {
        proxy_pass http://localhost:3000;
        # ... proxy settings
    }
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name your-domain.com;
    return 301 https://$server_name$request_uri;
}
```

## Database Configuration

### 🗄️ PostgreSQL Setup

#### Installation
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install postgresql postgresql-contrib

# CentOS/RHEL
sudo yum install postgresql-server postgresql-contrib
sudo postgresql-setup initdb
```

#### Configuration
```sql
-- Create database
CREATE DATABASE app_production;

-- Create user
CREATE USER app_user WITH PASSWORD 'secure_password';

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE app_production TO app_user;

-- Enable extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
```

#### Performance Tuning
```postgresql
# postgresql.conf
shared_buffers = 256MB
effective_cache_size = 1GB
work_mem = 4MB
maintenance_work_mem = 64MB
checkpoint_completion_target = 0.9
wal_buffers = 16MB
default_statistics_target = 100
```

### 🔄 Backup Configuration

#### Automated Backups
```bash
#!/bin/bash
# backup-db.sh

DB_NAME="app_production"
DB_USER="app_user"
BACKUP_DIR="/backups"
DATE=$(date +%Y%m%d_%H%M%S)

# Create backup
pg_dump -U $DB_USER -h localhost $DB_NAME > $BACKUP_DIR/backup_$DATE.sql

# Compress backup
gzip $BACKUP_DIR/backup_$DATE.sql

# Remove old backups (keep 7 days)
find $BACKUP_DIR -name "backup_*.sql.gz" -mtime +7 -delete
```

#### Cron Job
```bash
# Add to crontab
0 2 * * * /path/to/backup-db.sh
```

## Security Configuration

### 🔒 Firewall Setup

#### UFW (Ubuntu)
```bash
# Enable firewall
sudo ufw enable

# Allow SSH
sudo ufw allow ssh

# Allow HTTP and HTTPS
sudo ufw allow 80
sudo ufw allow 443

# Allow specific application port
sudo ufw allow 3000

# Check status
sudo ufw status
```

#### Fail2Ban
```bash
# Install fail2ban
sudo apt install fail2ban

# Configure
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local

# Enable services
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

### 🛡️ SSL/TLS Configuration

#### Let's Encrypt Setup
```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d your-domain.com

# Auto-renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

## Monitoring Configuration

### 📊 Application Monitoring

#### PM2 Configuration
```javascript
// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'app',
    script: 'npm',
    args: 'start',
    instances: 'max',
    exec_mode: 'cluster',
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
}
```

#### Log Rotation
```bash
# /etc/logrotate.d/app
/var/log/app/*.log {
    daily
    missingok
    rotate 30
    compress
    delaycompress
    notifempty
    create 0644 app app
    postrotate
        pm2 reload app
    endscript
}
```

### 🔍 System Monitoring

#### Basic Monitoring Script
```bash
#!/bin/bash
# system-monitor.sh

# Check disk usage
df -h | awk '$5 > 80 {print "Disk usage warning: " $0}'

# Check memory usage
free -m | awk 'NR==2{printf "Memory usage: %s/%s (%.2f%%)\n", $3,$2,$3*100/$2 }'

# Check CPU load
uptime | grep -ohe 'load average[s:][: ].*' | awk '{ print "CPU Load: " $3 $4 $5 }'

# Check service status
systemctl is-active --quiet nginx && echo "Nginx: OK" || echo "Nginx: FAILED"
systemctl is-active --quiet postgresql && echo "PostgreSQL: OK" || echo "PostgreSQL: FAILED"
```

## Deployment Configuration

### 🚀 Deployment Scripts

#### Basic Deployment
```bash
#!/bin/bash
# deploy.sh

set -e

echo "Starting deployment..."

# Pull latest code
git pull origin main

# Install dependencies
npm ci

# Build application
npm run build

# Restart application
pm2 restart app

# Run database migrations
npm run migrate

echo "Deployment completed successfully!"
```

#### Zero-Downtime Deployment
```bash
#!/bin/bash
# zero-downtime-deploy.sh

set -e

# Build new version
npm ci
npm run build

# Start new instance
pm2 start ecosystem.config.js --name app-new

# Wait for new instance to be ready
sleep 10

# Switch traffic
pm2 delete app
pm2 restart app-new --name app

echo "Zero-downtime deployment completed!"
```

## API Configurations

### 🔌 External Service Configurations

#### SendGrid Email
```javascript
// config/sendgrid.js
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const emailConfig = {
  from: process.env.FROM_EMAIL,
  replyTo: process.env.REPLY_TO_EMAIL,
  templates: {
    welcome: process.env.WELCOME_TEMPLATE_ID,
    passwordReset: process.env.PASSWORD_RESET_TEMPLATE_ID
  }
}

module.exports = { sgMail, emailConfig }
```

#### Stripe Payment Processing
```javascript
// config/stripe.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const stripeConfig = {
  currency: 'usd',
  successUrl: process.env.STRIPE_SUCCESS_URL,
  cancelUrl: process.env.STRIPE_CANCEL_URL,
  webhookSecret: process.env.STRIPE_WEBHOOK_SECRET
}

module.exports = { stripe, stripeConfig }
```

## Common Configuration Issues

### 🚨 Troubleshooting

#### Port Already in Use
```bash
# Find process using port
sudo lsof -i :3000

# Kill process
sudo kill -9 <PID>
```

#### Database Connection Issues
```bash
# Check PostgreSQL status
sudo systemctl status postgresql

# Check connections
sudo -u postgres psql -c "SELECT * FROM pg_stat_activity;"

# Reset connections
sudo -u postgres psql -c "SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = 'app_production';"
```

#### SSL Certificate Issues
```bash
# Check certificate status
sudo certbot certificates

# Renew certificate
sudo certbot renew --dry-run

# Test SSL configuration
openssl s_client -connect your-domain.com:443
```

## Best Practices

### ✅ Configuration Management
- **Version Control**: Store configurations in Git
- **Environment Separation**: Use different configs for different environments
- **Secret Management**: Never commit secrets to version control
- **Documentation**: Document all configuration changes
- **Automation**: Use scripts for consistent deployments

### 🔧 Regular Maintenance
- **Security Updates**: Apply security patches regularly
- **Performance Monitoring**: Track system performance metrics
- **Backup Verification**: Regularly test backup and restore procedures
- **Log Analysis**: Review logs for errors and optimization opportunities

---

*Keep configurations updated and document all changes for team visibility.* 