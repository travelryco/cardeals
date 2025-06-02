import Link from 'next/link'
import Image from 'next/image'
import { 
  Search, Filter, Star, Crown, ArrowRight, 
  Calendar, MapPin, Gauge, Settings 
} from 'lucide-react'
import { formatPrice, getDealScoreColor, getDealScoreLabel } from '@/lib/utils'

// Mock deals data - in real app this would come from Supabase
const mockDeals = [
  {
    id: '1',
    title: '2018 Honda Civic Type R - Track Ready Beast',
    description: 'Pristine FK8 Type R with only 28k miles. Championship White with red accents.',
    price: 3850000, // in cents
    originalPrice: 4200000,
    dealScore: 9.2,
    make: 'Honda',
    model: 'Civic Type R',
    year: 2018,
    mileage: 28000,
    location: 'Los Angeles, CA',
    imageUrl: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop',
    isPremium: false,
    isManual: true,
    tags: ['track-ready', 'rare-spec', 'low-miles'],
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    title: '2020 BMW M2 Competition - Daily Track Car',
    description: 'Perfect blend of daily usability and track performance. S55 twin-turbo engine.',
    price: 5200000,
    originalPrice: 5800000,
    dealScore: 7.5,
    make: 'BMW',
    model: 'M2 Competition',
    year: 2020,
    mileage: 22000,
    location: 'Seattle, WA',
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop',
    isPremium: false,
    isManual: true,
    tags: ['daily-track', 'twin-turbo'],
    createdAt: new Date('2024-01-14')
  },
  {
    id: '3',
    title: '1997 Toyota Supra Turbo 6-Speed - JDM Legend',
    description: 'The holy grail of 90s JDM. Original twin-turbo 2JZ engine, 6-speed manual.',
    price: 8500000,
    originalPrice: 9200000,
    dealScore: 8.8,
    make: 'Toyota',
    model: 'Supra',
    year: 1997,
    mileage: 89000,
    location: 'Miami, FL',
    imageUrl: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=400&fit=crop',
    isPremium: true,
    isManual: true,
    tags: ['jdm-legend', 'appreciating'],
    createdAt: new Date('2024-01-13')
  },
  {
    id: '4',
    title: '2015 Porsche 911 GT3 - Track Weapon',
    description: 'GT3 with PDK transmission and Sport Chrono package. Fresh from PCA inspection.',
    price: 13500000,
    originalPrice: 14800000,
    dealScore: 9.5,
    make: 'Porsche',
    model: '911 GT3',
    year: 2015,
    mileage: 15000,
    location: 'Austin, TX',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop',
    isPremium: true,
    isManual: false,
    tags: ['track-weapon', 'pdk'],
    createdAt: new Date('2024-01-12')
  }
]

export default function DealsPage() {
  // Filter free deals for non-premium users
  const freeDeals = mockDeals.filter(deal => !deal.isPremium)
  const premiumDeals = mockDeals.filter(deal => deal.isPremium)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Car Deals</h1>
              <p className="text-gray-600 mt-2">
                Discover undervalued cars and hidden gems
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                href="/pricing"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center space-x-2"
              >
                <Crown className="h-5 w-5" />
                <span>Upgrade for Full Access</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Filter className="h-5 w-5 text-gray-600" />
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by make, model..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Make */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Make
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">All Makes</option>
                  <option value="honda">Honda</option>
                  <option value="bmw">BMW</option>
                  <option value="toyota">Toyota</option>
                  <option value="porsche">Porsche</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Year Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Year Range
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    placeholder="From"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="number"
                    placeholder="To"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Manual Only */}
              <div className="mb-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Manual transmission only</span>
                </label>
              </div>

              {/* Premium Notice */}
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Crown className="h-5 w-5 text-yellow-600" />
                  <span className="text-sm font-semibold text-yellow-800">Premium Filters</span>
                </div>
                <p className="text-xs text-yellow-700 mb-3">
                  Location radius, deal score range, and advanced filters require Premium.
                </p>
                <Link
                  href="/pricing"
                  className="text-xs text-yellow-800 font-medium hover:text-yellow-900"
                >
                  Upgrade Now →
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Free Deals Section */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Free Deals</h2>
                <span className="text-sm text-gray-600">
                  {freeDeals.length} deals available
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {freeDeals.map((deal) => (
                  <DealCard key={deal.id} deal={deal} />
                ))}
              </div>
            </div>

            {/* Premium Deals Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <Crown className="h-6 w-6 text-yellow-500" />
                  <h2 className="text-2xl font-bold text-gray-900">Premium Deals</h2>
                </div>
                <span className="text-sm text-gray-600">
                  {premiumDeals.length} premium deals
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {premiumDeals.map((deal) => (
                  <PremiumDealCard key={deal.id} deal={deal} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DealCard({ deal }: { deal: any }) {
  const savings = deal.originalPrice ? deal.originalPrice - deal.price : 0

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <Image
          src={deal.imageUrl}
          alt={deal.title}
          width={600}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-black bg-opacity-80 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
          <Star className="h-4 w-4 fill-current text-yellow-400" />
          <span>{deal.dealScore}</span>
        </div>
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold ${getDealScoreColor(deal.dealScore)}`}>
          {getDealScoreLabel(deal.dealScore)}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {deal.title}
        </h3>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              {formatPrice(deal.price / 100)}
            </span>
            {deal.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">
                {formatPrice(deal.originalPrice / 100)}
              </span>
            )}
          </div>
          {savings > 0 && (
            <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
              Save {formatPrice(savings / 100)}
            </div>
          )}
        </div>

        <div className="space-y-2 text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>{deal.year} • {deal.mileage.toLocaleString()} miles</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>{deal.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Settings className="h-4 w-4" />
            <span>{deal.isManual ? 'Manual' : 'Automatic'}</span>
          </div>
        </div>

        <Link
          href={`/deals/${deal.id}`}
          className="w-full bg-blue-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
        >
          <span>View Details</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

function PremiumDealCard({ deal }: { deal: any }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden relative">
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
        <div className="text-center text-white">
          <Crown className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
          <h3 className="text-xl font-bold mb-2">Premium Deal</h3>
          <p className="text-sm mb-4 opacity-90">
            Upgrade to access this exclusive deal
          </p>
          <Link
            href="/pricing"
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200"
          >
            Upgrade Now
          </Link>
        </div>
      </div>
      
      <div className="blur-sm">
        <Image
          src={deal.imageUrl}
          alt={deal.title}
          width={600}
          height={300}
          className="w-full h-48 object-cover"
        />
        
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {deal.title}
          </h3>
          <div className="text-2xl font-bold text-gray-900 mb-4">
            {formatPrice(deal.price / 100)}
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <div>{deal.year} • {deal.mileage.toLocaleString()} miles</div>
            <div>{deal.location}</div>
          </div>
        </div>
      </div>
    </div>
  )
} 