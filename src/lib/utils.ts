import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num)
}

export function calculateSavings(originalPrice: number | null, currentPrice: number): number {
  if (!originalPrice || originalPrice <= currentPrice) return 0
  return originalPrice - currentPrice
}

export function calculateSavingsPercentage(originalPrice: number | null, currentPrice: number): number {
  if (!originalPrice || originalPrice <= currentPrice) return 0
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
}

export function getDealScoreColor(score: number): string {
  if (score >= 8) return 'text-green-600 bg-green-100'
  if (score >= 6) return 'text-yellow-600 bg-yellow-100'
  return 'text-red-600 bg-red-100'
}

export function getDealScoreLabel(score: number): string {
  if (score >= 8) return 'Excellent Deal'
  if (score >= 6) return 'Good Deal'
  return 'Fair Deal'
}

export function formatMileage(mileage: number | null): string {
  if (!mileage) return 'Unknown'
  return `${formatNumber(mileage)} miles`
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
} 