-- Insert sample car deals
INSERT INTO deals (title, description, price, original_price, deal_score, make, model, year, mileage, location, vin, image_url, is_premium, is_manual, tags, notes) VALUES
  (
    '2018 Honda Civic Type R - Track Ready Beast',
    'Pristine FK8 Type R with only 28k miles. Championship White with red accents. This is the legendary hot hatch that dominated tracks worldwide. No accidents, clean title, all service records available.',
    3850000, -- $38,500
    4200000, -- $42,000
    9.2,
    'Honda',
    'Civic Type R',
    2018,
    28000,
    'Los Angeles, CA',
    'SHHFK8G60JU123456',
    'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
    false,
    true,
    ARRAY['track-ready', 'rare-spec', 'low-miles'],
    'Undervalued by $3,500 vs comparable listings. Rare Championship White color.'
  ),
  (
    '1997 Toyota Supra Turbo 6-Speed - JDM Legend',
    'The holy grail of 90s JDM. Original twin-turbo 2JZ engine, 6-speed manual transmission. Recently serviced with all new gaskets and timing belt. This is appreciating faster than stocks.',
    8500000, -- $85,000
    9200000, -- $92,000
    8.8,
    'Toyota',
    'Supra',
    1997,
    89000,
    'Miami, FL',
    'JT2JA82J0V0123789',
    'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800',
    true,
    true,
    ARRAY['jdm-legend', 'appreciating', 'original-turbo'],
    'Prices have increased 20% in last 6 months. This one is priced under market.'
  ),
  (
    '2015 Porsche 911 GT3 - Track Weapon',
    'GT3 with PDK transmission and Sport Chrono package. Aerokit Cup, carbon fiber interior package, and roll cage. Fresh from PCA inspection. Ready for your next track day.',
    13500000, -- $135,000
    14800000, -- $148,000
    9.5,
    'Porsche',
    '911 GT3',
    2015,
    15000,
    'Austin, TX',
    'WP0AC2A95FS123456',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
    true,
    false,
    ARRAY['track-weapon', 'pdk', 'low-miles'],
    'Dealer asking $148k for similar spec. This private party sale is a steal.'
  ),
  (
    '2020 BMW M2 Competition - Daily Track Car',
    'Perfect blend of daily usability and track performance. S55 twin-turbo engine, limited-slip differential, and Michelin Pilot Sport 4S tires. Maintained by BMW specialist.',
    5200000, -- $52,000
    5800000, -- $58,000
    7.5,
    'BMW',
    'M2 Competition',
    2020,
    22000,
    'Seattle, WA',
    'WBS2F9C55LCX12345',
    'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
    false,
    true,
    ARRAY['daily-track', 'twin-turbo', 'specialist-maintained'],
    'Market trending up. Good entry point for M2 ownership.'
  ),
  (
    '1993 Mazda RX-7 FD - Rotary Perfection',
    'Pristine FD RX-7 with rebuilt 13B rotary engine. Sequential twin-turbo system fully functional. No rust, garage kept, and meticulously maintained. The unicorn of rotary cars.',
    4500000, -- $45,000
    5100000, -- $51,000
    8.7,
    'Mazda',
    'RX-7',
    1993,
    67000,
    'Phoenix, AZ',
    'JM1FD3310P0123456',
    'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',
    true,
    true,
    ARRAY['rotary-perfection', 'rebuilt-engine', 'no-rust'],
    'Clean FD RX-7s are becoming extremely rare. This is museum quality.'
  ),
  (
    '2019 Chevrolet Corvette Z06 - American Muscle',
    'Supercharged LT4 V8 producing 650hp. Z07 performance package with carbon ceramic brakes and Michelin Cup 2 tires. Track-focused but street legal beast.',
    7800000, -- $78,000
    8500000, -- $85,000
    8.1,
    'Chevrolet',
    'Corvette Z06',
    2019,
    8500,
    'Dallas, TX',
    '1G1YY2D75K5123456',
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
    true,
    true,
    ARRAY['supercharged', 'z07-package', 'low-miles'],
    'Z06 values holding strong. This low-mileage example is priced right.'
  );

-- Insert some free deals that everyone can see
UPDATE deals SET is_premium = false WHERE make IN ('Honda', 'BMW');

-- Insert some premium deals that require subscription
UPDATE deals SET is_premium = true WHERE make IN ('Toyota', 'Porsche', 'Mazda', 'Chevrolet'); 