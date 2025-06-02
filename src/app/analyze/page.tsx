'use client'

import { useState } from 'react'
import { 
  Search, 
  Link as LinkIcon, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle,
  DollarSign,
  Calendar,
  Gauge,
  MapPin,
  Car,
  BarChart3,
  Info,
  Clock,
  Shield,
  Award,
  Zap
} from 'lucide-react'
import Link from 'next/link'

interface AnalysisResult {
  listing: {
    title: string
    price: number
    year: number
    make: string
    model: string
    mileage: number
    location: string
    description: string
    images: string[]
    source: string
  }
  marketAnalysis: {
    recommendedPrice: number
    priceRange: { min: number; max: number }
    marketPosition: 'Below Market' | 'At Market' | 'Above Market'
    confidence: number
    comparableCount: number
  }
  insights: {
    priceAdvantage: number
    marketTrend: 'Rising' | 'Stable' | 'Declining'
    negotiationRoom: number
    timeOnMarket: number
  }
  risks: string[]
  recommendations: string[]
}

export default function AnalyzePage() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState('')

  const handleAnalyze = async () => {
    if (!url.trim()) {
      setError('Please enter a valid URL')
      return
    }

    setLoading(true)
    setError('')
    setResult(null)

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url.trim() }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to analyze listing')
      }

      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to analyze the listing. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Car Listing Analyzer
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Get instant market analysis and pricing recommendations for any car listing. 
              Just paste the URL and let our AI do the research.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* URL Input Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Analyze Any Car Listing</h2>
            <p className="text-gray-600">
              Supported sites: CarGurus, CarMax, AutoTrader, Cars.com, dealer websites, and more
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <LinkIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://www.cargurus.com/Cars/inventorylisting/..."
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none text-lg"
                disabled={loading}
              />
            </div>

            {error && (
              <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                <AlertCircle className="h-5 w-5" />
                <span>{error}</span>
              </div>
            )}

            <button
              onClick={handleAnalyze}
              disabled={loading || !url.trim()}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <Search className="h-5 w-5" />
                  <span>Analyze Listing</span>
                </>
              )}
            </button>
          </div>

          {/* Supported Sites */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-3">Supported platforms:</p>
            <div className="flex flex-wrap gap-3">
              {['CarGurus', 'AutoTrader', 'Cars.com', 'CarMax', 'Vroom', 'Carvana', 'Dealer Sites'].map((site) => (
                <span key={site} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {site}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Loading State with Skeleton */}
        {loading && (
          <div className="space-y-8">
            {/* Skeleton Listing Info */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="h-8 bg-gray-200 rounded-lg w-3/4 mb-4 animate-pulse"></div>
                  <div className="flex items-center space-x-4">
                    <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="h-10 bg-gray-200 rounded-lg w-32 mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Skeleton Market Analysis */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <div className="h-6 w-6 bg-gray-200 rounded mr-2 animate-pulse"></div>
                <div className="h-8 bg-gray-200 rounded-lg w-48 animate-pulse"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                      <div className="h-5 w-5 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="h-8 bg-gray-200 rounded-lg w-32 mb-2 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-28 animate-pulse"></div>
                  </div>
                ))}
              </div>

              {/* Skeleton Additional Insights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="h-5 w-5 bg-gray-200 rounded mr-2 animate-pulse"></div>
                    <div className="h-6 bg-gray-200 rounded w-24 animate-pulse"></div>
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex justify-between">
                        <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="h-5 w-5 bg-gray-200 rounded mr-2 animate-pulse"></div>
                    <div className="h-6 bg-gray-200 rounded w-24 animate-pulse"></div>
                  </div>
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-gray-200 rounded-full mt-2 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded flex-1 animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Skeleton Recommendations */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <div className="h-6 w-6 bg-gray-200 rounded mr-2 animate-pulse"></div>
                <div className="h-8 bg-gray-200 rounded-lg w-48 animate-pulse"></div>
              </div>
              
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-start space-x-3 p-4 bg-purple-50 rounded-xl">
                    <div className="h-5 w-5 bg-gray-200 rounded animate-pulse mt-0.5"></div>
                    <div className="h-4 bg-gray-200 rounded flex-1 animate-pulse"></div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl">
                <div className="h-6 bg-white/20 rounded w-24 mb-2 animate-pulse"></div>
                <div className="h-4 bg-white/20 rounded w-full animate-pulse"></div>
              </div>
            </div>

            {/* Loading Message */}
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analyzing Your Listing</h3>
              <p className="text-gray-600">
                Scraping vehicle data and comparing with market trends...
              </p>
            </div>
          </div>
        )}

        {/* Results Section */}
        {result && (
          <div className="space-y-8">
            {/* Listing Info */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{result.listing.title}</h3>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{result.listing.year}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Gauge className="h-4 w-4" />
                      <span>{result.listing.mileage.toLocaleString()} miles</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{result.listing.location}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900">{formatPrice(result.listing.price)}</div>
                  <div className="text-sm text-gray-500">Listed Price</div>
                </div>
              </div>
            </div>

            {/* Market Analysis */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BarChart3 className="h-6 w-6 mr-2 text-purple-600" />
                Market Analysis
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-green-700">Recommended Price</span>
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-green-900">{formatPrice(result.marketAnalysis.recommendedPrice)}</div>
                  <div className="text-sm text-green-600">Based on {result.marketAnalysis.comparableCount} comparables</div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-700">Market Range</span>
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="text-lg font-bold text-blue-900">
                    {formatPrice(result.marketAnalysis.priceRange.min)} - {formatPrice(result.marketAnalysis.priceRange.max)}
                  </div>
                  <div className="text-sm text-blue-600">{result.marketAnalysis.confidence}% confidence</div>
                </div>

                <div className={`p-6 rounded-xl ${
                  result.marketAnalysis.marketPosition === 'Above Market' 
                    ? 'bg-gradient-to-r from-red-50 to-rose-50' 
                    : result.marketAnalysis.marketPosition === 'Below Market'
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50'
                    : 'bg-gradient-to-r from-yellow-50 to-amber-50'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm font-medium ${
                      result.marketAnalysis.marketPosition === 'Above Market' 
                        ? 'text-red-700' 
                        : result.marketAnalysis.marketPosition === 'Below Market'
                        ? 'text-green-700'
                        : 'text-yellow-700'
                    }`}>Market Position</span>
                    {result.marketAnalysis.marketPosition === 'Above Market' ? (
                      <AlertCircle className="h-5 w-5 text-red-600" />
                    ) : result.marketAnalysis.marketPosition === 'Below Market' ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <Info className="h-5 w-5 text-yellow-600" />
                    )}
                  </div>
                  <div className={`text-lg font-bold ${
                    result.marketAnalysis.marketPosition === 'Above Market' 
                      ? 'text-red-900' 
                      : result.marketAnalysis.marketPosition === 'Below Market'
                      ? 'text-green-900'
                      : 'text-yellow-900'
                  }`}>
                    {result.marketAnalysis.marketPosition}
                  </div>
                  <div className={`text-sm ${
                    result.marketAnalysis.marketPosition === 'Above Market' 
                      ? 'text-red-600' 
                      : result.marketAnalysis.marketPosition === 'Below Market'
                      ? 'text-green-600'
                      : 'text-yellow-600'
                  }`}>
                    {result.insights.priceAdvantage > 0 ? '+' : ''}{formatPrice(result.insights.priceAdvantage)} vs market
                  </div>
                </div>
              </div>

              {/* Additional Insights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-purple-600" />
                    Key Insights
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Market Trend</span>
                      <span className={`font-medium ${
                        result.insights.marketTrend === 'Rising' ? 'text-green-600' :
                        result.insights.marketTrend === 'Declining' ? 'text-red-600' : 'text-yellow-600'
                      }`}>
                        {result.insights.marketTrend}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Negotiation Room</span>
                      <span className="font-medium text-green-600">{formatPrice(result.insights.negotiationRoom)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time on Market</span>
                      <span className="font-medium">{result.insights.timeOnMarket} days</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2 text-orange-600" />
                    Risk Factors
                  </h4>
                  <div className="space-y-2">
                    {result.risks.map((risk, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{risk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="h-6 w-6 mr-2 text-purple-600" />
                Our Recommendations
              </h3>
              
              <div className="space-y-4">
                {result.recommendations.map((recommendation, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-purple-50 rounded-xl">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{recommendation}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl text-white">
                <h4 className="text-lg font-semibold mb-2">💡 Pro Tip</h4>
                <p className="text-purple-100">
                  Always get a pre-purchase inspection and factor in additional costs like taxes, 
                  registration, and potential repairs when calculating your total investment.
                </p>
              </div>
            </div>

            {/* CTA for Services */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Protect Your Purchase</h3>
              <p className="text-slate-200 mb-6">
                Consider our protection services to safeguard your investment
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View Protection Services
                </Link>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors">
                  Get Financing
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 