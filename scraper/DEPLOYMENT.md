# Car Scraper Deployment Guide

## Quick Deploy Options

### Option 1: Railway (Recommended - Easiest)

1. **Sign up at [railway.app](https://railway.app)**
2. **Connect your GitHub repo**
3. **Deploy the scraper folder**:
   ```bash
   # From the scraper directory
   railway login
   railway init
   railway up
   ```
4. **Get your deployment URL** (something like `https://cardeals-scraper-production.up.railway.app`)
5. **Update your `.env.local`**:
   ```
   SCRAPER_URL=https://your-railway-url.up.railway.app
   ```

### Option 2: Render

1. **Sign up at [render.com](https://render.com)**
2. **Create new Web Service**
3. **Connect your GitHub repo**
4. **Set build command**: `pip install -r requirements.txt && playwright install --with-deps chromium`
5. **Set start command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
6. **Update your `.env.local`** with the Render URL

### Option 3: Heroku

1. **Install Heroku CLI**
2. **Create Procfile**:
   ```
   web: uvicorn main:app --host 0.0.0.0 --port $PORT
   ```
3. **Add buildpacks**:
   ```bash
   heroku buildpacks:add --index 1 https://github.com/heroku/heroku-buildpack-chromedriver
   heroku buildpacks:add --index 2 https://github.com/heroku/heroku-buildpack-google-chrome
   heroku buildpacks:add --index 3 heroku/python
   ```
4. **Deploy**:
   ```bash
   git add .
   git commit -m "Deploy scraper"
   git push heroku main
   ```

### Option 4: Docker Deployment

You can deploy the Docker container to any cloud provider:

```bash
# Build the image
docker build -t cardeals-scraper .

# Run locally to test
docker run -p 8001:8001 cardeals-scraper

# Deploy to your preferred container service
```

## Environment Variables

Make sure to set these environment variables in your deployment:

- `PORT`: The port to run on (usually set automatically)
- `PYTHONUNBUFFERED=1`: For proper logging

## Health Check

All deployments should use the health check endpoint:
- **URL**: `/health`
- **Expected Response**: `{"status": "healthy", "timestamp": "..."}`

## Updating Your Next.js App

After deploying, update your `.env.local` file:

```bash
# Replace with your actual deployment URL
SCRAPER_URL=https://your-scraper-deployment-url.com
```

For production deployment of your Next.js app (Vercel), add this as an environment variable in your Vercel dashboard.

## Testing the Deployment

Test your deployed scraper:

```bash
curl https://your-deployment-url.com/health
curl -X POST "https://your-deployment-url.com/scrape" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://www.carfax.com/vehicle/1G1YY2D78J5105901"}'
```

## Cost Estimates

- **Railway**: Free tier includes 512MB RAM, $5/month for more
- **Render**: Free tier with limitations, $7/month for paid
- **Heroku**: ~$7/month (no free tier anymore)

## Troubleshooting

### Common Issues:

1. **Playwright installation fails**: Make sure your deployment platform supports the required dependencies
2. **Memory issues**: Playwright can be memory-intensive, consider upgrading your plan
3. **Timeout issues**: Increase timeout limits in your deployment platform

### Logs:

Check your deployment platform's logs for debugging:
- Railway: `railway logs`
- Render: Check logs in dashboard
- Heroku: `heroku logs --tail` 