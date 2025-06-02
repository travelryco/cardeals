#!/bin/bash

# Create separate repository for scraper deployment
echo "🔧 Setting up separate scraper repository..."

# Create a new directory for the scraper repo
SCRAPER_REPO_DIR="../cardeals-scraper"

if [ -d "$SCRAPER_REPO_DIR" ]; then
    echo "❌ Directory $SCRAPER_REPO_DIR already exists"
    exit 1
fi

# Create new directory and copy scraper files
mkdir "$SCRAPER_REPO_DIR"
cp -r . "$SCRAPER_REPO_DIR/"

cd "$SCRAPER_REPO_DIR"

# Remove unnecessary files
rm -rf venv __pycache__ *.sh

# Initialize git repo
git init
git add .
git commit -m "Initial scraper deployment setup"

echo "✅ Scraper repository created at $SCRAPER_REPO_DIR"
echo "📝 Next steps:"
echo "   1. Create a new GitHub repository called 'cardeals-scraper'"
echo "   2. cd $SCRAPER_REPO_DIR"
echo "   3. git remote add origin https://github.com/yourusername/cardeals-scraper.git"
echo "   4. git push -u origin main"
echo "   5. Deploy this separate repo to Railway/Render" 