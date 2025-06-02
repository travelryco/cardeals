# 🚀 CarDeals Setup Guide

## Prerequisites

- Node.js 18+ installed
- A Supabase account
- A Vercel account
- Git repository (recommended)

## 🗄️ Supabase Setup

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project"
3. Fill in project details:
   - **Name**: `cardeals`
   - **Database Password**: Generate a strong password (save it!)
   - **Region**: Choose closest to your users
4. Click "Create new project"

### 2. Set Up Database Schema

1. Go to **SQL Editor** in your Supabase dashboard
2. Create a new query
3. Copy and paste the content from `supabase/migrations/001_initial_schema.sql`
4. Click "Run" to execute
5. Create another new query
6. Copy and paste the content from `supabase/migrations/002_sample_data.sql`
7. Click "Run" to execute

### 3. Get API Keys

1. Go to **Settings** → **API** in your Supabase dashboard
2. Copy these values (you'll need them for environment variables):
   - **Project URL** (e.g., `https://abcdefgh.supabase.co`)
   - **anon public key** (starts with `eyJ...`)
   - **service_role key** (starts with `eyJ...`) - Keep this secret!

## 🌐 Vercel Setup

### 1. Deploy to Vercel

If you haven't already:

```bash
npm install -g vercel
vercel login
vercel
```

### 2. Set Environment Variables in Vercel

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Find your `cardeals` project and click on it
3. Go to **Settings** → **Environment Variables**
4. Add these variables (click "Add New" for each):

#### Required Variables:

| Variable Name | Value | Environments |
|---------------|-------|--------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase Project URL | Production, Preview, Development |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key | Production, Preview, Development |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase service role key | Production, Preview, Development |
| `NEXT_PUBLIC_APP_URL` | `https://your-domain.vercel.app` | Production |
| `NEXT_PUBLIC_APP_URL` | `http://localhost:3000` | Development |

### 3. Redeploy

After adding environment variables:

```bash
vercel --prod
```

## 💻 Local Development Setup

### 1. Create Local Environment File

Create a `.env.local` file in your project root:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Stripe (Optional - for later)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
```

### 2. Install Dependencies & Run

```bash
npm install
npm run dev
```

Your app should now be running at `http://localhost:3000`

## 🎯 Testing Your Setup

### 1. Check Database Connection

- Visit your local app at `http://localhost:3000`
- Go to `/deals` page
- You should see sample car deals loaded from Supabase

### 2. Check Production Deployment

- Visit your Vercel URL
- Verify all pages load correctly
- Check that images display properly

## 🔧 Optional: Stripe Setup (for Payments)

### 1. Create Stripe Account

1. Go to [stripe.com](https://stripe.com) and sign up
2. Complete account verification

### 2. Get API Keys

1. Go to **Developers** → **API keys**
2. Copy your **Publishable key** and **Secret key**
3. Add these to your environment variables (both local and Vercel)

### 3. Set Up Webhooks (for production)

1. Go to **Developers** → **Webhooks**
2. Add endpoint: `https://your-domain.vercel.app/api/webhooks/stripe`
3. Select events: `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`
4. Copy the webhook secret and add to environment variables

## 🚨 Troubleshooting

### Build Errors

- Make sure all environment variables are set in Vercel
- Check that your Supabase project is active
- Verify your API keys are correct

### Database Issues

- Ensure you've run both migration files in the correct order
- Check that Row Level Security policies are properly set up
- Verify your service role key has the correct permissions

### Image Loading Issues

- Make sure `next.config.ts` includes the image domains
- Check that Unsplash URLs are accessible

## 🎉 You're Ready!

Your CarDeals platform should now be:
- ✅ Connected to Supabase database
- ✅ Deployed on Vercel
- ✅ Ready for local development
- ✅ Displaying sample car deals

Next steps:
1. Customize the design and branding
2. Set up Stripe for payments
3. Add authentication flows
4. Create admin panel for managing deals
5. Set up email notifications 