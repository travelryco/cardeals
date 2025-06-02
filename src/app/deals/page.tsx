import { Suspense } from 'react'
import { Search, Filter, Car, MapPin, Calendar, Gauge } from 'lucide-react'
import Image from 'next/image'

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
}

// Mock data for now - will connect to Supabase later
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
    original_post_url: 'https://example.com'
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
    original_post_url: 'https://example.com'
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
    original_post_url: 'https://example.com'
  }
]

export default async function DealsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams
  
  // Get filter parameters
  const make = params.make as string
  const minPrice = params.minPrice ? parseInt(params.minPrice as string) : undefined
  const maxPrice = params.maxPrice ? parseInt(params.maxPrice as string) : undefined
  const year = params.year ? parseInt(params.year as string) : undefined
  const search = params.search as string

  // Filter deals based on search params
  let filteredDeals = mockDeals

  if (make) {
    filteredDeals = filteredDeals.filter(deal => deal.make.toLowerCase() === make.toLowerCase())
  }
  if (minPrice) {
    filteredDeals = filteredDeals.filter(deal => deal.price >= minPrice * 100)
  }
  if (maxPrice) {
    filteredDeals = filteredDeals.filter(deal => deal.price <= maxPrice * 100)
  }
  if (year) {
    filteredDeals = filteredDeals.filter(deal => deal.year === year)
  }
  if (search) {
    const searchLower = search.toLowerCase()
    filteredDeals = filteredDeals.filter(deal => 
      deal.title.toLowerCase().includes(searchLower) ||
      deal.description.toLowerCase().includes(searchLower) ||
      deal.make.toLowerCase().includes(searchLower) ||
      deal.model.toLowerCase().includes(searchLower)
    )
  }

  const uniqueMakes = [...new Set(mockDeals.map(deal => deal.make))]

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
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </h2>
              
              <form method="GET" className="space-y-4">
                {/* Search */}
                <div>
                  <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      id="search"
                      name="search"
                      defaultValue={search || ''}
                      placeholder="Search deals..."
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Make */}
                <div>
                  <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-1">
                    Make
                  </label>
                  <select
                    id="make"
                    name="make"
                    defaultValue={make || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">All Makes</option>
                    {uniqueMakes.map((makeName) => (
                      <option key={makeName} value={makeName}>
                        {makeName}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price Range
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      name="minPrice"
                      defaultValue={minPrice || ''}
                      placeholder="Min"
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="number"
                      name="maxPrice"
                      defaultValue={maxPrice || ''}
                      placeholder="Max"
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Year */}
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                    Year
                  </label>
                  <input
                    type="number"
                    id="year"
                    name="year"
                    defaultValue={year || ''}
                    placeholder="e.g. 2020"
                    min="1990"
                    max={new Date().getFullYear() + 1}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  Apply Filters
                </button>
              </form>
            </div>
          </div>

          {/* Deals Grid */}
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-600">
                {filteredDeals.length} deals found
              </p>
            </div>

            <Suspense fallback={<div>Loading deals...</div>}>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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

function DealCard({ deal }: { deal: Deal }) {
  const formatPrice = (cents: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(cents / 100)
  }

  const savings = deal.original_price ? deal.original_price - deal.price : 0

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
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
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
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

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{deal.year}</span>
            </div>
            <span className="font-medium">{deal.make} {deal.model}</span>
          </div>
          
          {deal.mileage && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Gauge className="h-4 w-4 mr-1" />
                <span>{deal.mileage.toLocaleString()} miles</span>
              </div>
            </div>
          )}
          
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{deal.location}</span>
          </div>
        </div>

        {deal.notes && (
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">{deal.notes}</p>
          </div>
        )}

        <div className="mt-4">
          <a
            href={deal.original_post_url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-blue-600 text-white py-2 rounded-lg text-center font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            View Listing
          </a>
        </div>
      </div>
    </div>
  )
} 