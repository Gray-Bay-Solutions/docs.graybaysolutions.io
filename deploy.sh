#!/bin/bash

# Graybay Documentation Deployment Script
# This script helps deploy the Next.js app to production

echo "🚀 Starting deployment process..."
git pull

# 1. Install dependencies
echo "📦 Installing dependencies..."
npm ci --production=false

# 2. Build the application
echo "🏗️ Building application..."
npm run build

# 3. Start with PM2 (if installed)
if command -v pm2 &> /dev/null; then
    echo "🔄 Managing with PM2..."
    pm2 delete graybay-docs 2>/dev/null || true
    pm2 start ecosystem.config.js
else
    echo "⚠️ PM2 not found. Starting with npm..."
    npm start
fi

echo "✅ Deployment completed!"
echo "🌐 Application should be running on port 4001" 