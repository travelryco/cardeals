import { Suspense } from 'react'
import { Car, MapPin, Calendar, Gauge, Settings, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import FilterComponent from '@/components/FilterComponent'

type Deal = {
  id: string
  title: string
  description: string
  price: number
  original_price?: number
  deal_score?: number
  make: string
  model: string
  year: number
  mileage?: number
  location: string
  vin?: string
  image_url?: string
  original_post_url?: string
  is_premium: boolean
  is_manual: boolean
  tags?: string[]
  notes?: string
  created_at: string
  updated_at: string
  
  // Enhanced filtering fields
  body_type?: string
  fuel_type?: string
  drivetrain?: string
  exterior_color?: string
  doors?: number
  accidents?: number
  owners?: number
}

// Enhanced mock data with more filtering options
const mockDeals: Deal[] = [
  {
    id: '1',
    title: '2018 Honda Civic Type R - Track Ready Beast',
    description: 'Pristine FK8 Type R with only 28k miles. Championship White with red accents.',
    price: 3850000, // in cents
    original_price: 4200000,
    deal_score: 9.2,
    make: 'Honda',
    model: 'Civic Type R',
    year: 2018,
    mileage: 28000,
    location: 'Los Angeles, CA',
    image_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop',
    is_premium: false,
    is_manual: true,
    tags: ['track-ready', 'rare-spec', 'low-miles'],
    notes: 'Undervalued by $3,500 vs comparable listings. Rare Championship White color.',
    created_at: '2024-01-15T00:00:00Z',
    updated_at: '2024-01-15T00:00:00Z',
    original_post_url: 'https://example.com',
    body_type: 'Hatchback',
    fuel_type: 'Gasoline',
    drivetrain: 'FWD',
    exterior_color: 'White',
    doors: 4,
    accidents: 0,
    owners: 2
  },
  {
    id: '2',
    title: '2020 BMW M2 Competition - Daily Track Car',
    description: 'Perfect blend of daily usability and track performance. S55 twin-turbo engine.',
    price: 5200000,
    original_price: 5800000,
    deal_score: 7.5,
    make: 'BMW',
    model: 'M2 Competition',
    year: 2020,
    mileage: 22000,
    location: 'Seattle, WA',
    image_url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop',
    is_premium: false,
    is_manual: true,
    tags: ['daily-track', 'twin-turbo'],
    notes: 'Market trending up. Good entry point for M2 ownership.',
    created_at: '2024-01-14T00:00:00Z',
    updated_at: '2024-01-14T00:00:00Z',
    original_post_url: 'https://example.com',
    body_type: 'Coupe',
    fuel_type: 'Gasoline',
    drivetrain: 'RWD',
    exterior_color: 'White',
    doors: 2,
    accidents: 0,
    owners: 1
  },
  {
    id: '3',
    title: '1997 Toyota Supra Turbo 6-Speed - JDM Legend',
    description: 'The holy grail of 90s JDM. Original twin-turbo 2JZ engine, 6-speed manual.',
    price: 8500000,
    original_price: 9200000,
    deal_score: 8.8,
    make: 'Toyota',
    model: 'Supra',
    year: 1997,
    mileage: 89000,
    location: 'Miami, FL',
    image_url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=400&fit=crop',
    is_premium: false,
    is_manual: true,
    tags: ['jdm-legend', 'appreciating'],
    notes: 'Prices have increased 20% in last 6 months. This one is priced under market.',
    created_at: '2024-01-13T00:00:00Z',
    updated_at: '2024-01-13T00:00:00Z',
    original_post_url: 'https://example.com',
    body_type: 'Coupe',
    fuel_type: 'Gasoline',
    drivetrain: 'RWD',
    exterior_color: 'Silver',
    doors: 2,
    accidents: 0,
    owners: 3
  }
]

function DealsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Get filter parameters
  const make = searchParams.make as string
  const model = searchParams.model as string
  const bodyType = searchParams.bodyType as string
  const fuelType = searchParams.fuelType as string
  const drivetrain = searchParams.drivetrain as string
  const color = searchParams.color as string
  const transmission = searchParams.transmission as string
  const doors = searchParams.doors ? parseInt(searchParams.doors as string) : undefined
  const maxAccidents = searchParams.maxAccidents ? parseInt(searchParams.maxAccidents as string) : undefined
  const maxOwners = searchParams.maxOwners ? parseInt(searchParams.maxOwners as string) : undefined
  const minPrice = searchParams.minPrice ? parseInt(searchParams.minPrice as string) : undefined
  const maxPrice = searchParams.maxPrice ? parseInt(searchParams.maxPrice as string) : undefined
  const minYear = searchParams.minYear ? parseInt(searchParams.minYear as string) : undefined
  const maxYear = searchParams.maxYear ? parseInt(searchParams.maxYear as string) : undefined
  const maxMileage = searchParams.maxMileage ? parseInt(searchParams.maxMileage as string) : undefined
  const search = searchParams.search as string

  // Filter deals based on search params
  let filteredDeals = mockDeals

  if (make) {
    filteredDeals = filteredDeals.filter(deal => deal.make.toLowerCase() === make.toLowerCase())
  }
  if (model) {
    filteredDeals = filteredDeals.filter(deal => deal.model.toLowerCase().includes(model.toLowerCase()))
  }
  if (bodyType) {
    filteredDeals = filteredDeals.filter(deal => deal.body_type?.toLowerCase() === bodyType.toLowerCase())
  }
  if (fuelType) {
    filteredDeals = filteredDeals.filter(deal => deal.fuel_type?.toLowerCase() === fuelType.toLowerCase())
  }
  if (drivetrain) {
    filteredDeals = filteredDeals.filter(deal => deal.drivetrain?.toLowerCase() === drivetrain.toLowerCase())
  }
  if (color) {
    filteredDeals = filteredDeals.filter(deal => deal.exterior_color?.toLowerCase() === color.toLowerCase())
  }
  if (transmission) {
    const isManual = transmission === 'manual'
    filteredDeals = filteredDeals.filter(deal => deal.is_manual === isManual)
  }
  if (doors) {
    filteredDeals = filteredDeals.filter(deal => deal.doors === doors)
  }
  if (maxAccidents !== undefined) {
    filteredDeals = filteredDeals.filter(deal => (deal.accidents || 0) <= maxAccidents)
  }
  if (maxOwners) {
    filteredDeals = filteredDeals.filter(deal => (deal.owners || 1) <= maxOwners)
  }
  if (minPrice) {
    filteredDeals = filteredDeals.filter(deal => deal.price >= minPrice * 100)
  }
  if (maxPrice) {
    filteredDeals = filteredDeals.filter(deal => deal.price <= maxPrice * 100)
  }
  if (minYear) {
    filteredDeals = filteredDeals.filter(deal => deal.year >= minYear)
  }
  if (maxYear) {
    filteredDeals = filteredDeals.filter(deal => deal.year <= maxYear)
  }
  if (maxMileage) {
    filteredDeals = filteredDeals.filter(deal => (deal.mileage || 0) <= maxMileage)
  }
  if (search) {
    const searchLower = search.toLowerCase()
    filteredDeals = filteredDeals.filter(deal => 
      deal.title.toLowerCase().includes(searchLower) ||
      deal.description.toLowerCase().includes(searchLower) ||
      deal.make.toLowerCase().includes(searchLower) ||
      deal.model.toLowerCase().includes(searchLower) ||
      deal.tags?.some(tag => tag.toLowerCase().includes(searchLower))
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Car Deals</h1>
          <p className="text-gray-600">
            Discover amazing car deals curated by our experts
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Premium Filter Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <Suspense fallback={<div>Loading filters...</div>}>
              <FilterComponent deals={mockDeals} />
            </Suspense>
          </div>

          {/* Deals Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600 font-medium">
                {filteredDeals.length} deals found
              </p>
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium text-gray-700">Sort by:</span>
                <div className="relative">
                  <select className="bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                    <option>Best Deals</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Year: Newest</option>
                    <option>Year: Oldest</option>
                    <option>Mileage: Lowest</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <Suspense fallback={<div>Loading deals...</div>}>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredDeals.map((deal) => (
                  <DealCard key={deal.id} deal={deal} />
                ))}
              </div>
            </Suspense>

            {!filteredDeals.length && (
              <div className="text-center py-12">
                <Car className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No deals found</h3>
                <p className="text-gray-600">Try adjusting your filters to see more results.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Server component wrapper to handle async searchParams
export default async function DealsPageWrapper({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams
  return <DealsPage searchParams={params} />
}

function DealCard({ deal }: { deal: Deal }) {
  const formatPrice = (cents: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(cents / 100)
  }

  const savings = deal.original_price ? deal.original_price - deal.price : 0

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative">
        {deal.image_url && (
          <Image
            src={deal.image_url}
            alt={deal.title}
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
        )}
        {deal.deal_score && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {deal.deal_score}/10
          </div>
        )}
        {deal.accidents === 0 && (
          <div className="absolute top-4 left-4 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
            No Accidents
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight">
          {deal.title}
        </h3>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              {formatPrice(deal.price)}
            </span>
            {deal.original_price && (
              <span className="text-sm text-gray-500 line-through ml-2">
                {formatPrice(deal.original_price)}
              </span>
            )}
          </div>
          {savings > 0 && (
            <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
              Save {formatPrice(savings)}
            </div>
          )}
        </div>

        <div className="space-y-3 text-sm text-gray-600 mb-4 flex-grow">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-gray-400" />
              <span>{deal.year}</span>
            </div>
            <span className="font-medium text-gray-900">{deal.make} {deal.model}</span>
          </div>
          
          {deal.mileage && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Gauge className="h-4 w-4 mr-2 text-gray-400" />
                <span>{deal.mileage.toLocaleString()} miles</span>
              </div>
              <div className="flex items-center">
                <Settings className="h-4 w-4 mr-1 text-gray-400" />
                <span>{deal.is_manual ? 'Manual' : 'Auto'}</span>
              </div>
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-gray-400" />
              <span>{deal.location}</span>
            </div>
            {deal.owners && (
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                {deal.owners} owner{deal.owners !== 1 ? 's' : ''}
              </span>
            )}
          </div>
        </div>

        {deal.notes && (
          <div className="mb-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800 leading-relaxed">{deal.notes}</p>
          </div>
        )}

        <div className="mt-auto">
          <Link
            href={`/deals/${deal.id}`}
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            View Listing
          </Link>
        </div>
      </div>
    </div>
  )
} 