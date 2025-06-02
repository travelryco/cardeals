import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowLeft, 
  Calendar, 
  Gauge, 
  MapPin, 
  Settings,
  Shield,
  Star,
  ExternalLink,
  Heart,
  Share2,
  Phone,
  Mail,
  AlertCircle
} from 'lucide-react'

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
  
  // Additional detailed fields
  body_type?: string
  engine?: string
  transmission?: string
  drivetrain?: string
  fuel_type?: string
  exterior_color?: string
  interior_color?: string
  accidents?: number
  owners?: number
  service_records?: boolean
  title_status?: string
  dealer_name?: string
  dealer_rating?: number
  contact_phone?: string
  contact_email?: string
  features?: string[]
  condition_notes?: string[]
  inspection_date?: string
  market_analysis?: string
}

// Mock detailed data
const mockDetailedDeals: Deal[] = [
  {
    id: '1',
    title: '2018 Honda Civic Type R - Track Ready Beast',
    description: 'Pristine FK8 Type R with only 28k miles. Championship White with red accents. This is an exceptional example of Honda\'s pinnacle hot hatch, featuring the legendary K20C1 turbocharged engine producing 306 horsepower.',
    price: 3850000,
    original_price: 4200000,
    deal_score: 9.2,
    make: 'Honda',
    model: 'Civic Type R',
    year: 2018,
    mileage: 28000,
    location: 'Los Angeles, CA',
    image_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&h=800&fit=crop',
    original_post_url: 'https://example.com',
    is_premium: false,
    is_manual: true,
    tags: ['track-ready', 'rare-spec', 'low-miles'],
    notes: 'Undervalued by $3,500 vs comparable listings. Rare Championship White color.',
    created_at: '2024-01-15T00:00:00Z',
    updated_at: '2024-01-15T00:00:00Z',
    
    // Detailed fields
    body_type: 'Hatchback',
    engine: '2.0L Turbo I4 (K20C1)',
    transmission: '6-Speed Manual',
    drivetrain: 'FWD',
    fuel_type: 'Premium Gasoline',
    exterior_color: 'Championship White',
    interior_color: 'Black with Red Accents',
    accidents: 0,
    owners: 2,
    service_records: true,
    title_status: 'Clean',
    dealer_name: 'Premium Auto Gallery',
    dealer_rating: 4.8,
    contact_phone: '(555) 123-4567',
    contact_email: 'sales@premiumauto.com',
    features: [
      'Brembo Brakes',
      'Adaptive Damper System',
      'Limited Slip Differential',
      'Red Interior Accents',
      'Aluminum Shift Knob',
      'Honda Sensing Suite',
      'Apple CarPlay/Android Auto',
      'Dual Zone Climate Control'
    ],
    condition_notes: [
      'Excellent condition with no visible wear',
      'All original paint and panels',
      'Interior shows minimal signs of use',
      'Recent comprehensive service completed',
      'New Michelin Pilot Sport 4S tires'
    ],
    inspection_date: '2024-01-10',
    market_analysis: 'Type R values have stabilized after initial depreciation. Championship White is the most desirable color commanding a premium. This example\'s low mileage and clean history make it particularly attractive.'
  },
  {
    id: '2',
    title: '2020 BMW M2 Competition - Daily Track Car',
    description: 'Perfect blend of daily usability and track performance. S55 twin-turbo engine delivers incredible power and torque in a compact, manageable package.',
    price: 5200000,
    original_price: 5800000,
    deal_score: 7.5,
    make: 'BMW',
    model: 'M2 Competition',
    year: 2020,
    mileage: 22000,
    location: 'Seattle, WA',
    image_url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop',
    original_post_url: 'https://example.com',
    is_premium: false,
    is_manual: true,
    tags: ['daily-track', 'twin-turbo'],
    notes: 'Market trending up. Good entry point for M2 ownership.',
    created_at: '2024-01-14T00:00:00Z',
    updated_at: '2024-01-14T00:00:00Z',
    
    // Detailed fields
    body_type: 'Coupe',
    engine: '3.0L Twin-Turbo I6 (S55)',
    transmission: '6-Speed Manual',
    drivetrain: 'RWD',
    fuel_type: 'Premium Gasoline',
    exterior_color: 'Alpine White',
    interior_color: 'Black Dakota Leather',
    accidents: 0,
    owners: 1,
    service_records: true,
    title_status: 'Clean',
    dealer_name: 'Seattle BMW Performance',
    dealer_rating: 4.6,
    contact_phone: '(555) 987-6543',
    contact_email: 'info@seattlebmwperf.com',
    features: [
      'M Adaptive Suspension',
      'M Performance Exhaust',
      'Carbon Fiber Roof',
      'Harman Kardon Audio',
      'BMW Live Cockpit Plus',
      'Wireless Charging',
      'Heated Seats',
      'M Performance Steering Wheel'
    ],
    condition_notes: [
      'Excellent mechanical condition',
      'Minor stone chips on front bumper',
      'Recent M Performance brake service',
      'All services performed at BMW dealership',
      'Continental ExtremeContact Sport tires with 70% tread'
    ],
    inspection_date: '2024-01-12',
    market_analysis: 'M2 Competition values are holding strong with increased demand. Manual transmission adds significant value. This example represents good value in current market.'
  },
  {
    id: '3',
    title: '1997 Toyota Supra Turbo 6-Speed - JDM Legend',
    description: 'The holy grail of 90s JDM. Original twin-turbo 2JZ-GTE engine with 6-speed Getrag manual transmission. A true icon of automotive engineering.',
    price: 8500000,
    original_price: 9200000,
    deal_score: 8.8,
    make: 'Toyota',
    model: 'Supra',
    year: 1997,
    mileage: 89000,
    location: 'Miami, FL',
    image_url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&h=800&fit=crop',
    original_post_url: 'https://example.com',
    is_premium: false,
    is_manual: true,
    tags: ['jdm-legend', 'appreciating'],
    notes: 'Prices have increased 20% in last 6 months. This one is priced under market.',
    created_at: '2024-01-13T00:00:00Z',
    updated_at: '2024-01-13T00:00:00Z',
    
    // Detailed fields
    body_type: 'Coupe',
    engine: '3.0L Twin-Turbo I6 (2JZ-GTE)',
    transmission: '6-Speed Manual (Getrag)',
    drivetrain: 'RWD',
    fuel_type: 'Premium Gasoline',
    exterior_color: 'Twin Turbo Silver',
    interior_color: 'Black Leather',
    accidents: 0,
    owners: 3,
    service_records: true,
    title_status: 'Clean',
    dealer_name: 'JDM Legends Miami',
    dealer_rating: 4.9,
    contact_phone: '(555) 456-7890',
    contact_email: 'legends@jdmmiami.com',
    features: [
      'Sequential Twin Turbochargers',
      'Targa Top',
      'Limited Slip Differential',
      'Recaro Seats',
      'Alpine Sound System',
      'Air Conditioning',
      'Power Windows',
      'Cruise Control'
    ],
    condition_notes: [
      'Exceptional original condition',
      'All original components intact',
      'No modifications or tuning',
      'Complete maintenance records available',
      'Recent timing belt and water pump service'
    ],
    inspection_date: '2024-01-11',
    market_analysis: 'Mk4 Supra values continue to appreciate strongly. Unmodified examples are increasingly rare. This car represents excellent investment potential with strong collector appeal.'
  }
]

export default async function DealDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const deal = mockDetailedDeals.find(d => d.id === id)

  if (!deal) {
    notFound()
  }

  const formatPrice = (cents: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(cents / 100)
  }

  const savings = deal.original_price ? deal.original_price - deal.price : 0

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/deals"
              className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Deals
            </Link>
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
                <Heart className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="relative">
                {deal.image_url && (
                  <Image
                    src={deal.image_url}
                    alt={deal.title}
                    width={1200}
                    height={600}
                    className="w-full h-96 object-cover"
                    priority
                  />
                )}
                {deal.deal_score && (
                  <div className="absolute top-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    {deal.deal_score}/10
                  </div>
                )}
              </div>
            </div>

            {/* Deal Info */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{deal.title}</h1>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{deal.location}</span>
                  <span className="mx-2">•</span>
                  <Calendar className="h-5 w-5 mr-1" />
                  <span>Listed {new Date(deal.created_at).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{deal.year}</div>
                  <div className="text-sm text-gray-600">Year</div>
                </div>
                {deal.mileage && (
                  <div className="text-center">
                    <Gauge className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">
                      {deal.mileage.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Miles</div>
                  </div>
                )}
                <div className="text-center">
                  <Settings className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900">
                    {deal.is_manual ? 'Manual' : 'Automatic'}
                  </div>
                  <div className="text-sm text-gray-600">Transmission</div>
                </div>
                {deal.accidents !== undefined && (
                  <div className="text-center">
                    <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{deal.accidents}</div>
                    <div className="text-sm text-gray-600">Accidents</div>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Description</h2>
                <p className="text-gray-700 leading-relaxed">{deal.description}</p>
              </div>

              {deal.market_analysis && (
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    Market Analysis
                  </h3>
                  <p className="text-blue-800">{deal.market_analysis}</p>
                </div>
              )}
            </div>

            {/* Vehicle Details */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Vehicle Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Make</span>
                    <span className="font-medium">{deal.make}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Model</span>
                    <span className="font-medium">{deal.model}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Year</span>
                    <span className="font-medium">{deal.year}</span>
                  </div>
                  {deal.body_type && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Body Type</span>
                      <span className="font-medium">{deal.body_type}</span>
                    </div>
                  )}
                  {deal.engine && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Engine</span>
                      <span className="font-medium">{deal.engine}</span>
                    </div>
                  )}
                  {deal.transmission && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Transmission</span>
                      <span className="font-medium">{deal.transmission}</span>
                    </div>
                  )}
                </div>
                
                <div className="space-y-4">
                  {deal.drivetrain && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Drivetrain</span>
                      <span className="font-medium">{deal.drivetrain}</span>
                    </div>
                  )}
                  {deal.fuel_type && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fuel Type</span>
                      <span className="font-medium">{deal.fuel_type}</span>
                    </div>
                  )}
                  {deal.exterior_color && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Exterior Color</span>
                      <span className="font-medium">{deal.exterior_color}</span>
                    </div>
                  )}
                  {deal.interior_color && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Interior Color</span>
                      <span className="font-medium">{deal.interior_color}</span>
                    </div>
                  )}
                  {deal.owners && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Previous Owners</span>
                      <span className="font-medium">{deal.owners}</span>
                    </div>
                  )}
                  {deal.title_status && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Title Status</span>
                      <span className="font-medium text-green-600">{deal.title_status}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Features */}
            {deal.features && deal.features.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Features & Equipment</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {deal.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Condition Notes */}
            {deal.condition_notes && deal.condition_notes.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Condition Notes</h2>
                <div className="space-y-3">
                  {deal.condition_notes.map((note, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2" />
                      <span className="text-gray-700">{note}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 mt-8 lg:mt-0">
            {/* Pricing Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {formatPrice(deal.price)}
                </div>
                {deal.original_price && (
                  <div className="flex items-center justify-center text-sm">
                    <span className="text-gray-500 line-through mr-2">
                      {formatPrice(deal.original_price)}
                    </span>
                    {savings > 0 && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-medium">
                        Save {formatPrice(savings)}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Contact Info */}
              {deal.dealer_name && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">{deal.dealer_name}</h3>
                  {deal.dealer_rating && (
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(deal.dealer_rating!)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        {deal.dealer_rating}/5.0
                      </span>
                    </div>
                  )}
                  
                  <div className="space-y-3">
                    {deal.contact_phone && (
                      <a
                        href={`tel:${deal.contact_phone}`}
                        className="flex items-center text-blue-600 hover:text-blue-700"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        {deal.contact_phone}
                      </a>
                    )}
                    {deal.contact_email && (
                      <a
                        href={`mailto:${deal.contact_email}`}
                        className="flex items-center text-blue-600 hover:text-blue-700"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        {deal.contact_email}
                      </a>
                    )}
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Contact Dealer
                </button>
                
                {deal.original_post_url && (
                  <a
                    href={deal.original_post_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gray-100 text-gray-900 py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Original Listing
                  </a>
                )}
                
                <button className="w-full border-2 border-blue-600 text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Schedule Test Drive
                </button>
              </div>

              {deal.inspection_date && (
                <div className="mt-6 pt-6 border-t">
                  <div className="text-sm text-gray-600">
                    <strong>Last Inspected:</strong> {new Date(deal.inspection_date).toLocaleDateString()}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 