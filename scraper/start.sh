#!/bin/bash
set -e

echo "Installing Playwright browsers..."
playwright install --with-deps chromium

echo "Starting the application..."
python main.py 