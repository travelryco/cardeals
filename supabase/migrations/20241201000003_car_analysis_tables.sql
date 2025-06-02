-- Car Analysis Tables for Scraping and Market Data

-- Table for storing scraped listings
CREATE TABLE scraped_listings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    url TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    price DECIMAL(12,2) NOT NULL,
    year INTEGER NOT NULL,
    make TEXT NOT NULL,
    model TEXT NOT NULL,
    trim TEXT,
    mileage INTEGER NOT NULL,
    location TEXT,
    description TEXT,
    images JSONB DEFAULT '[]'::jsonb,
    source TEXT NOT NULL,
    vin TEXT,
    features JSONB DEFAULT '[]'::jsonb,
    dealer_name TEXT,
    dealer_phone TEXT,
    stock_number TEXT,
    body_type TEXT,
    transmission TEXT,
    fuel_type TEXT,
    exterior_color TEXT,
    interior_color TEXT,
    drivetrain TEXT,
    engine TEXT,
    listing_date DATE,
    days_on_market INTEGER,
    status TEXT DEFAULT 'active',
    raw_data JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table for storing market analysis results
CREATE TABLE market_analyses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    scraped_listing_id UUID REFERENCES scraped_listings(id) ON DELETE CASCADE,
    url TEXT NOT NULL,
    recommended_price DECIMAL(12,2) NOT NULL,
    price_range_min DECIMAL(12,2) NOT NULL,
    price_range_max DECIMAL(12,2) NOT NULL,
    market_position TEXT NOT NULL CHECK (market_position IN ('Below Market', 'At Market', 'Above Market')),
    confidence_score INTEGER NOT NULL CHECK (confidence_score BETWEEN 0 AND 100),
    comparable_count INTEGER NOT NULL,
    price_advantage DECIMAL(12,2) NOT NULL,
    market_trend TEXT NOT NULL CHECK (market_trend IN ('Rising', 'Stable', 'Declining')),
    negotiation_room DECIMAL(12,2) NOT NULL,
    time_on_market INTEGER,
    risks JSONB DEFAULT '[]'::jsonb,
    recommendations JSONB DEFAULT '[]'::jsonb,
    market_data JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table for storing comparable vehicles (used for market analysis)
CREATE TABLE comparable_vehicles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    make TEXT NOT NULL,
    model TEXT NOT NULL,
    year INTEGER NOT NULL,
    mileage INTEGER NOT NULL,
    price DECIMAL(12,2) NOT NULL,
    location TEXT,
    source TEXT NOT NULL,
    url TEXT,
    trim TEXT,
    body_type TEXT,
    transmission TEXT,
    fuel_type TEXT,
    condition_score INTEGER CHECK (condition_score BETWEEN 1 AND 10),
    days_on_market INTEGER,
    sold_date DATE,
    listing_date DATE,
    is_sold BOOLEAN DEFAULT FALSE,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table for tracking scraping jobs/queue
CREATE TABLE scraping_jobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    url TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'failed')),
    priority INTEGER DEFAULT 5 CHECK (priority BETWEEN 1 AND 10),
    site_type TEXT NOT NULL,
    retry_count INTEGER DEFAULT 0,
    error_message TEXT,
    started_at TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE,
    result_data JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table for market trend tracking
CREATE TABLE market_trends (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    make TEXT NOT NULL,
    model TEXT NOT NULL,
    year INTEGER NOT NULL,
    body_type TEXT,
    avg_price DECIMAL(12,2) NOT NULL,
    median_price DECIMAL(12,2) NOT NULL,
    price_trend DECIMAL(5,2), -- Percentage change
    listing_count INTEGER NOT NULL,
    avg_days_on_market DECIMAL(5,1),
    region TEXT,
    data_date DATE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_scraped_listings_make_model_year ON scraped_listings(make, model, year);
CREATE INDEX idx_scraped_listings_price ON scraped_listings(price);
CREATE INDEX idx_scraped_listings_mileage ON scraped_listings(mileage);
CREATE INDEX idx_scraped_listings_source ON scraped_listings(source);
CREATE INDEX idx_scraped_listings_created_at ON scraped_listings(created_at);
CREATE INDEX idx_scraped_listings_url_hash ON scraped_listings USING hash(url);

CREATE INDEX idx_comparable_vehicles_make_model_year ON comparable_vehicles(make, model, year);
CREATE INDEX idx_comparable_vehicles_price ON comparable_vehicles(price);
CREATE INDEX idx_comparable_vehicles_mileage ON comparable_vehicles(mileage);
CREATE INDEX idx_comparable_vehicles_is_sold ON comparable_vehicles(is_sold);
CREATE INDEX idx_comparable_vehicles_created_at ON comparable_vehicles(created_at);

CREATE INDEX idx_market_analyses_scraped_listing_id ON market_analyses(scraped_listing_id);
CREATE INDEX idx_market_analyses_created_at ON market_analyses(created_at);

CREATE INDEX idx_scraping_jobs_status ON scraping_jobs(status);
CREATE INDEX idx_scraping_jobs_priority ON scraping_jobs(priority DESC);
CREATE INDEX idx_scraping_jobs_created_at ON scraping_jobs(created_at);

CREATE INDEX idx_market_trends_make_model_year ON market_trends(make, model, year);
CREATE INDEX idx_market_trends_data_date ON market_trends(data_date);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update the updated_at column
CREATE TRIGGER update_scraped_listings_updated_at BEFORE UPDATE ON scraped_listings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_comparable_vehicles_updated_at BEFORE UPDATE ON comparable_vehicles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_scraping_jobs_updated_at BEFORE UPDATE ON scraping_jobs
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE scraped_listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE market_analyses ENABLE ROW LEVEL SECURITY;
ALTER TABLE comparable_vehicles ENABLE ROW LEVEL SECURITY;
ALTER TABLE scraping_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE market_trends ENABLE ROW LEVEL SECURITY;

-- Create policies (allow read for authenticated users, write for service)
-- Note: You'll want to create more specific policies based on your authentication setup

-- For public read access to scraped listings and market data
CREATE POLICY "Allow public read access to scraped_listings" ON scraped_listings
    FOR SELECT USING (true);

CREATE POLICY "Allow public read access to market_analyses" ON market_analyses
    FOR SELECT USING (true);

CREATE POLICY "Allow public read access to comparable_vehicles" ON comparable_vehicles
    FOR SELECT USING (true);

CREATE POLICY "Allow public read access to market_trends" ON market_trends
    FOR SELECT USING (true);

-- For service/admin write access (you'd replace this with proper auth)
CREATE POLICY "Allow service write access to scraped_listings" ON scraped_listings
    FOR ALL USING (true);

CREATE POLICY "Allow service write access to market_analyses" ON market_analyses
    FOR ALL USING (true);

CREATE POLICY "Allow service write access to comparable_vehicles" ON comparable_vehicles
    FOR ALL USING (true);

CREATE POLICY "Allow service write access to scraping_jobs" ON scraping_jobs
    FOR ALL USING (true);

CREATE POLICY "Allow service write access to market_trends" ON market_trends
    FOR ALL USING (true); 