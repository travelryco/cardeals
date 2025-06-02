# Setting up Environment Variables in Vercel

## 🔧 Vercel Environment Variables Setup

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Find your `cardeals` project and click on it
3. Go to **Settings** → **Environment Variables**
4. Add the following environment variables:

### Required Environment Variables

| Variable Name | Value | Environment |
|---------------|-------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://your-project-id.supabase.co` | Production, Preview, Development |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `your_anon_key_here` | Production, Preview, Development |
| `SUPABASE_SERVICE_ROLE_KEY` | `your_service_role_key_here` | Production, Preview, Development |
| `NEXT_PUBLIC_APP_URL` | `https://your-vercel-domain.vercel.app` | Production |
| `NEXT_PUBLIC_APP_URL` | `https://your-preview-domain.vercel.app` | Preview |
| `NEXT_PUBLIC_APP_URL` | `http://localhost:3000` | Development |

### Optional (for later Stripe setup)

| Variable Name | Value | Environment |
|---------------|-------|-------------|
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `pk_test_...` | Production, Preview, Development |
| `STRIPE_SECRET_KEY` | `sk_test_...` | Production, Preview, Development |
| `STRIPE_WEBHOOK_SECRET` | `whsec_...` | Production, Preview, Development |

## 📝 Steps to Add Variables

1. Click **Add New** for each variable
2. Enter the **Name** (exactly as shown above)
3. Enter the **Value** (your actual keys from Supabase)
4. Select the appropriate **Environments** (Production, Preview, Development)
5. Click **Save**

## 🔄 After Adding Variables

Once you've added all the environment variables:

1. Go back to your terminal
2. Run `vercel --prod` to redeploy with the new environment variables

## 🗄️ Get Your Supabase Keys

If you haven't already, get your Supabase keys from:

1. Go to your Supabase project dashboard
2. **Settings** → **API**
3. Copy:
   - **Project URL**
   - **anon public key**
   - **service_role key** (keep this secret!)

## ✅ Test Your Setup

After deployment, your site should be live at:
- **Production**: https://cardeals-74hl7mrnm-travelrycos-projects.vercel.app
- **Custom Domain**: You can add a custom domain in Vercel settings 