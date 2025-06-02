import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, Target, Zap, Shield, Check } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Find the best car deals
              <span className="text-blue-600"> before anyone else</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Access rare finds, clean titles, and flip-worthy gems. Our experts analyze thousands of listings daily to bring you the most undervalued cars on the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/deals"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Browse Deals</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/signup"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Deals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Deals</h2>
            <p className="text-xl text-gray-600">Here&apos;s a taste of what our members discover daily</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "2018 Honda Civic Type R - Track Ready Beast",
                price: "$38,500",
                originalPrice: "$42,000",
                dealScore: 9.2,
                year: 2018,
                mileage: "28,000",
                location: "Los Angeles, CA",
                imageUrl: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop",
                savings: "$3,500"
              },
              {
                id: 2,
                title: "2020 BMW M2 Competition - Daily Track Car",
                price: "$52,000",
                originalPrice: "$58,000",
                dealScore: 7.5,
                year: 2020,
                mileage: "22,000",
                location: "Seattle, WA",
                imageUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop",
                savings: "$6,000"
              },
              {
                id: 3,
                title: "1997 Toyota Supra Turbo - JDM Legend",
                price: "$85,000",
                originalPrice: "$92,000",
                dealScore: 8.8,
                year: 1997,
                mileage: "89,000",
                location: "Miami, FL",
                imageUrl: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=400&fit=crop",
                savings: "$7,000"
              }
            ].map((deal) => (
              <div key={deal.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="relative">
                  <Image
                    src={deal.imageUrl}
                    alt={deal.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-black bg-opacity-80 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current text-yellow-400" />
                    <span>{deal.dealScore}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {deal.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">
                        {deal.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through ml-2">
                        {deal.originalPrice}
                      </span>
                    </div>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                      Save {deal.savings}
                    </div>
                  </div>

                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex justify-between">
                      <span>Year:</span>
                      <span>{deal.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Miles:</span>
                      <span>{deal.mileage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Location:</span>
                      <span>{deal.location}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Link
                      href={`/deals/${deal.id}`}
                      className="w-full bg-blue-600 text-white py-2 rounded-lg text-center font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-1"
                    >
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose CarDeals?</h2>
            <p className="text-xl text-gray-600">We do the heavy lifting so you can focus on finding your next ride</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Curated Deals",
                description: "Hand-picked deals with detailed analysis and deal scores"
              },
              {
                icon: Zap,
                title: "Real-time Alerts",
                description: "Get notified instantly when new deals match your criteria"
              },
              {
                icon: Shield,
                title: "Verified Listings",
                description: "All deals verified for authenticity and accuracy"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to find your next deal?</h2>
          <p className="text-xl text-gray-600 mb-12">Join thousands of car enthusiasts who never miss a great deal</p>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Start Finding Great Deals Today</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-8">
              {[
                "Access to all car deals",
                "Advanced filters and search",
                "Daily deal alerts",
                "Deal score analytics",
                "Detailed vehicle history",
                "Community of car enthusiasts"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-300" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <Link
              href="/signup"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Get Started Free</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
