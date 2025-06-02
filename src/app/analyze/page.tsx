'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { 
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Search,
  Calendar,
  Gauge,
  MapPin,
  BarChart3,
  AlertCircle,
  Info,
  Zap,
  Award
} from 'lucide-react'
import Link from 'next/link'

interface AnalysisResult {
  listingInfo: {
    title: string
    price: number
    year: number
    make: string
    model: string
    mileage: number
    dealer: string
    location: string
    vin?: string
    confidence?: number
  }
  marketAnalysis: {
    averagePrice: number
    priceRange: { min: number; max: number }
    marketPosition: string
    confidence: number
    comparableCount: number
    daysOnMarket?: number
  }
  recommendations: {
    dealScore: number
    priceRecommendation: string
    negotiationInsights: string[]
    risks: string[]
    strengths: string[]
  }
  error?: string
}

// Skeleton Loading Component
const AnalysisSkeleton = () => (
  <div className="space-y-6 animate-pulse">
    {/* Listing Info Skeleton */}
    <Card>
      <CardHeader>
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-6 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>

    {/* Market Analysis Skeleton */}
    <Card>
      <CardHeader>
        <div className="h-6 bg-gray-200 rounded w-1/2"></div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-20 bg-gray-200 rounded w-full"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-16 bg-gray-200 rounded"></div>
            <div className="h-16 bg-gray-200 rounded"></div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Recommendations Skeleton */}
    <Card>
      <CardHeader>
        <div className="h-6 bg-gray-200 rounded w-1/2"></div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
)

export default function AnalyzePage() {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)

  const handleAnalyze = async () => {
    if (!url.trim()) return

    setIsLoading(true)
    setResult(null)

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url.trim() }),
      })

      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error('Analysis failed:', error)
      setResult({
        listingInfo: {
          title: 'Error',
          price: 0,
          year: 0,
          make: '',
          model: '',
          mileage: 0,
          dealer: '',
          location: ''
        },
        marketAnalysis: {
          averagePrice: 0,
          priceRange: { min: 0, max: 0 },
          marketPosition: '',
          confidence: 0,
          comparableCount: 0
        },
        recommendations: {
          dealScore: 0,
          priceRecommendation: '',
          negotiationInsights: [],
          risks: [],
          strengths: []
        },
        error: 'Failed to analyze listing. Please try again.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const getDealScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-600 bg-green-100'
    if (score >= 6) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }

  const getDealScoreLabel = (score: number) => {
    if (score >= 8) return 'Excellent Deal'
    if (score >= 6) return 'Good Deal'
    return 'Fair Deal'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Car Listing Analyzer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get instant market analysis and pricing insights for any car listing from CarGurus, CarMax, AutoTrader, and more
          </p>
        </div>

        {/* Input Section */}
        <Card className="mb-8 border-0 shadow-xl">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="url"
                  placeholder="Paste car listing URL here (e.g., from CarGurus, CarMax, AutoTrader...)"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="text-lg h-12"
                />
              </div>
              <Button 
                onClick={handleAnalyze}
                disabled={!url.trim() || isLoading}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Search className="h-5 w-5 mr-2" />
                {isLoading ? 'Analyzing...' : 'Analyze'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Loading State */}
        {isLoading && <AnalysisSkeleton />}

        {/* Results */}
        {result && !isLoading && (
          <div className="space-y-6">
            {/* Error State */}
            {result.error && (
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 text-red-700">
                    <AlertCircle className="h-6 w-6" />
                    <span className="font-semibold">{result.error}</span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Listing Information */}
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3">
                  <ExternalLink className="h-6 w-6" />
                  Vehicle Information
                  {result.listingInfo?.vin && (
                    <Badge className="bg-blue-600 text-white">
                      VIN Verified ({result.listingInfo?.confidence || 0}% confidence)
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{result.listingInfo?.title || 'Unknown Vehicle'}</h2>
                  <p className="text-3xl font-bold text-blue-600 mt-2">
                    ${(result.listingInfo?.price || 0).toLocaleString()}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Year</p>
                      <p className="font-semibold">{result.listingInfo?.year || 'N/A'}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gauge className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Mileage</p>
                      <p className="font-semibold">{(result.listingInfo?.mileage || 0).toLocaleString()} mi</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-semibold">{result.listingInfo?.location || 'N/A'}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Dealer</p>
                      <p className="font-semibold">{result.listingInfo?.dealer || 'N/A'}</p>
                    </div>
                  </div>
                </div>

                {result.listingInfo?.vin && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2 text-blue-700">
                      <CheckCircle className="h-5 w-5" />
                      <span className="font-semibold">VIN: {result.listingInfo.vin}</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Market Analysis */}
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3">
                  <BarChart3 className="h-6 w-6" />
                  Market Analysis
                  <Badge className="bg-white/20 text-white">
                    {result.marketAnalysis?.confidence || 0}% confidence
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Price Comparison
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Listing Price:</span>
                        <span className="font-bold text-blue-600">${(result.listingInfo?.price || 0).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Market Average:</span>
                        <span className="font-bold">${(result.marketAnalysis?.averagePrice || 0).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Price Range:</span>
                        <span className="font-semibold text-gray-700">
                          ${(result.marketAnalysis?.priceRange?.min || 0).toLocaleString()} - ${(result.marketAnalysis?.priceRange?.max || 0).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3">Market Position</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="font-semibold text-gray-900">{result.marketAnalysis?.marketPosition || 'Unknown'}</p>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Comparable Vehicles:</span>
                        <span className="font-semibold">{result.marketAnalysis?.comparableCount || 0}</span>
                      </div>
                      {result.marketAnalysis?.daysOnMarket && (
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Days on Market:</span>
                          <span className="font-semibold">{result.marketAnalysis.daysOnMarket}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3">
                  <Zap className="h-6 w-6" />
                  Deal Analysis & Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`px-4 py-2 rounded-full font-bold text-lg ${getDealScoreColor(result.recommendations?.dealScore || 0)}`}>
                      {result.recommendations?.dealScore || 0}/10
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{getDealScoreLabel(result.recommendations?.dealScore || 0)}</h3>
                      <p className="text-gray-600">{result.recommendations?.priceRecommendation || 'No recommendation available'}</p>
                    </div>
                  </div>
                  <Progress value={(result.recommendations?.dealScore || 0) * 10} className="h-3" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-700">
                      <CheckCircle className="h-5 w-5" />
                      Strengths
                    </h4>
                    <ul className="space-y-2">
                      {(result.recommendations?.strengths || []).map((strength, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2 text-red-700">
                      <AlertCircle className="h-5 w-5" />
                      Potential Concerns
                    </h4>
                    <ul className="space-y-2">
                      {(result.recommendations?.risks || []).map((risk, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Separator className="my-6" />

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    Negotiation Insights
                  </h4>
                  <ul className="space-y-2">
                    {(result.recommendations?.negotiationInsights || []).map((insight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Services CTA */}
            <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Protect Your Purchase</h3>
                <p className="text-blue-100 mb-4">
                  Get comprehensive protection with our VSC and GAP insurance options
                </p>
                <Link href="/services">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50">
                    View Protection Services
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
} 