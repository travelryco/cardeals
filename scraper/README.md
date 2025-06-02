# Car Listing Scraper Service

A high-performance web scraping service for car listings that supports multiple platforms including CarGurus, AutoTrader, Cars.com, and dealer websites.

## Features

- **Multi-Platform Support**: CarGurus, AutoTrader, Cars.com, CarMax, Vroom, Carvana, Facebook Marketplace, Bring a Trailer, Craigslist, and dealer websites
- **Intelligent Site Detection**: Automatically detects the listing platform and uses appropriate scraping strategies
- **Robust Scraping**: Uses Playwright for JavaScript-heavy sites and BeautifulSoup for simpler sites
- **Market Analysis**: Compares scraped listings with market data to provide pricing insights
- **Database Integration**: Stores all data in Supabase with comprehensive schemas
- **Queue System**: Supports background job processing with Redis/Celery
- **API-First**: FastAPI-based REST API for easy integration

## Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Next.js App   │───▶│  Scraper API    │───▶│   Supabase DB   │
│   (Frontend)    │    │   (FastAPI)     │    │   (PostgreSQL)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                              │
                              ▼
                       ┌─────────────────┐
                       │  Redis Queue    │
                       │   (Celery)      │
                       └─────────────────┘
```

## Supported Platforms

### Tier 1 (Full Support)
- **CarGurus**: Complete listing extraction with images, features, dealer info
- **AutoTrader**: Vehicle details, pricing, location data
- **Cars.com**: Comprehensive listing data

### Tier 2 (Basic Support)
- **CarMax**: Price, basic vehicle info
- **Vroom**: Online marketplace data
- **Carvana**: Digital car buying platform

### Tier 3 (Specialized)
- **Facebook Marketplace**: Requires advanced anti-bot measures
- **Bring a Trailer**: Auction-specific data extraction
- **Craigslist**: Regional listing support

### Tier 4 (Generic)
- **Dealer Websites**: Pattern-based extraction for unknown sites

## Installation

### Local Development

1. **Clone and setup Python environment:**
```bash
cd scraper
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

2. **Install Playwright browsers:**
```bash
playwright install chromium
```

3. **Set environment variables:**
```bash
export SUPABASE_URL="your-supabase-url"
export SUPABASE_KEY="your-supabase-key"
export REDIS_URL="redis://localhost:6379"  # Optional
```

4. **Run the service:**
```bash
uvicorn main:app --reload --port 8001
```

### Docker Deployment

1. **Build the image:**
```bash
docker build -t car-scraper .
```

2. **Run the container:**
```bash
docker run -p 8001:8001 \
  -e SUPABASE_URL="your-supabase-url" \
  -e SUPABASE_KEY="your-supabase-key" \
  car-scraper
```

### Production with Docker Compose

```yaml
version: '3.8'
services:
  scraper:
    build: ./scraper
    ports:
      - "8001:8001"
    environment:
      - SUPABASE_URL=${SUPABASE_URL}
      - SUPABASE_KEY=${SUPABASE_KEY}
      - REDIS_URL=redis://redis:6379
    depends_on:
      - redis
  
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
  
  worker:
    build: ./scraper
    command: celery -A tasks worker --loglevel=info
    environment:
      - SUPABASE_URL=${SUPABASE_URL}
      - SUPABASE_KEY=${SUPABASE_KEY}
      - REDIS_URL=redis://redis:6379
    depends_on:
      - redis
```

## API Usage

### Scrape a Single Listing

```bash
curl -X POST "http://localhost:8001/scrape" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://www.cargurus.com/Cars/inventorylisting/..."}'
```

### Response Format

```json
{
  "title": "2021 Honda Civic EX",
  "price": 24995.0,
  "year": 2021,
  "make": "Honda",
  "model": "Civic",
  "mileage": 32000,
  "location": "Denver, CO",
  "description": "Clean vehicle with excellent service history...",
  "images": ["https://example.com/image1.jpg"],
  "source": "CarGurus",
  "vin": "2HGFC2F58MH123456",
  "features": ["Backup Camera", "Bluetooth", "Apple CarPlay"]
}
```

## Integration with Next.js App

The scraper service integrates with your Next.js application through the `/api/analyze` route:

```typescript
// In src/app/api/analyze/route.ts
const scrapingResponse = await fetch(`${process.env.SCRAPER_URL}/scrape`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ url })
});
```

## Database Schema

The service uses the following main tables in Supabase:

- **`scraped_listings`**: Stores all scraped vehicle data
- **`market_analyses`**: Market analysis results and recommendations
- **`comparable_vehicles`**: Similar vehicles used for market comparison
- **`scraping_jobs`**: Queue management for background scraping
- **`market_trends`**: Historical pricing and market trend data

## Anti-Bot Measures

### Implemented Protections
- **Rotating User Agents**: Multiple realistic browser signatures
- **Request Delays**: Random delays between requests
- **Proxy Support**: Configurable proxy rotation
- **Session Management**: Maintains browser sessions
- **JavaScript Execution**: Full browser rendering for SPA sites

### Compliance
- **Robots.txt Respect**: Honors site scraping policies
- **Rate Limiting**: Respectful request frequency
- **Legal Compliance**: Follows fair use guidelines

## Queue System (Optional)

For high-volume scraping, implement background processing:

```python
# tasks.py
from celery import Celery

app = Celery('scraper')
app.config_from_object('celeryconfig')

@app.task
def scrape_listing_async(url):
    return scraping_service.scrape_listing(url)
```

## Monitoring and Logging

- **Health Checks**: `/health` endpoint for monitoring
- **Structured Logging**: JSON-formatted logs for analysis
- **Metrics**: Request count, success rate, response time
- **Error Tracking**: Detailed error logging and alerting

## Scaling Considerations

### Horizontal Scaling
- **Multiple Workers**: Deploy multiple scraper instances
- **Load Balancing**: Distribute requests across workers
- **Database Pooling**: Optimize database connections

### Performance Optimization
- **Caching**: Cache frequently accessed data
- **Batch Processing**: Group similar scraping jobs
- **Resource Limits**: Configure memory and CPU limits

## Legal and Ethical Guidelines

1. **Respect robots.txt**: Always check and honor robots.txt files
2. **Rate Limiting**: Implement reasonable delays between requests
3. **Fair Use**: Only scrape data for legitimate business purposes
4. **Data Privacy**: Handle personal information responsibly
5. **Terms of Service**: Review and comply with site terms

## Troubleshooting

### Common Issues

**Playwright Browser Not Found:**
```bash
playwright install chromium
```

**Memory Issues:**
```bash
# Increase Docker memory limits
docker run -m 2g car-scraper
```

**Anti-Bot Detection:**
- Reduce scraping frequency
- Rotate user agents and proxies
- Use residential proxies for challenging sites

### Debugging

Enable debug logging:
```bash
export LOG_LEVEL=DEBUG
uvicorn main:app --log-level debug
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add tests for new scrapers
4. Submit a pull request

## License

MIT License - see LICENSE file for details. 