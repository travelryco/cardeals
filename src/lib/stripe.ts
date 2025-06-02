import Stripe from 'stripe'
import { loadStripe } from '@stripe/stripe-js'

// Server-side Stripe instance
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
  typescript: true,
})

// Client-side Stripe instance
export const getStripe = () => {
  return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
}

// Subscription plans
export const SUBSCRIPTION_PLANS = {
  premium: {
    name: 'Premium',
    description: 'Access to all premium car deals and filters',
    price: 2999, // $29.99 in cents
    interval: 'month' as const,
    features: [
      'Access to all premium deals',
      'Advanced filters and search',
      'Daily deal alerts',
      'VIN history reports',
      'Deal score analytics',
      'Priority customer support'
    ]
  }
} as const

export type SubscriptionPlan = keyof typeof SUBSCRIPTION_PLANS 