#!/bin/bash

# Railway deployment script for scraper subdirectory
echo "🚀 Deploying scraper to Railway..."

# Make sure we're in the scraper directory
if [ ! -f "main.py" ]; then
    echo "❌ Error: Run this script from the scraper directory"
    exit 1
fi

# Install Railway CLI if not present
if ! command -v railway &> /dev/null; then
    echo "📦 Installing Railway CLI..."
    npm install -g @railway/cli
fi

# Login to Railway
echo "🔐 Logging into Railway..."
railway login

# Initialize project
echo "🎯 Initializing Railway project..."
railway init --name cardeals-scraper

# Deploy
echo "🚀 Deploying..."
railway up --detach

echo "✅ Deployment initiated! Check your Railway dashboard for the URL." 