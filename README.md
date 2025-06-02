# CarDeals Platform

A modern car deals platform built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🚗 Showcase free + premium car deals
- 💳 Subscription-based premium content
- 🔍 Browse/search with filters (brand, price, location, etc.)
- 🔒 Premium listings locked behind paywall
- 📧 Custom alerts and notifications
- 🛡️ Admin panel for deal management
- Browse car deals
- User authentication
- Responsive design
- Fast and modern UI

## Tech Stack

- **Frontend**: Next.js 15 + TypeScript + Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Payments**: Stripe
- **Hosting**: Vercel
- **Search**: Built-in filtering + optional Pinecone integration

## Setup

1. Clone and install dependencies:
```bash
npm install
```

2. Set up environment variables by creating `.env.local`:
```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
STRIPE_SECRET_KEY=your_stripe_secret_key_here
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret_here

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

3. Set up Supabase:
   - Create a new project at [supabase.com](https://supabase.com)
   - Run the SQL migrations in `supabase/migrations/`
   - Update your environment variables

4. Set up Stripe:
   - Create account at [stripe.com](https://stripe.com)
   - Get your API keys
   - Set up webhook endpoints

5. Run the development server:
```bash
npm run dev
```

## Database Schema

The app uses the following main tables:
- `profiles` - User profiles and subscription status
- `deals` - Car deal listings
- `subscriptions` - Stripe subscription tracking

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/cardeals)

Make sure to set all environment variables in your Vercel dashboard.

## Deployment Status
- Latest deployment: Working on fixing 404 issues
