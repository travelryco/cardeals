'use client'

import { useState } from 'react'
import { Search, Filter, Car, Settings, ChevronDown, X } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

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

interface FilterComponentProps {
  deals: Deal[]
}

export default function FilterComponent({ deals }: FilterComponentProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // Local state for filters - ensure strings, not undefined
  const [bodyType, setBodyType] = useState(searchParams.get('bodyType') || '')
  const [transmission, setTransmission] = useState(searchParams.get('transmission') || '')
  const [maxMileage, setMaxMileage] = useState(searchParams.get('maxMileage') || '')
  const [maxAccidents, setMaxAccidents] = useState(searchParams.get('maxAccidents') || '')

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    router.push(`/deals?${params.toString()}`)
  }

  // Get unique values for filters
  const uniqueMakes = [...new Set(deals.map(deal => deal.make))].sort()
  const uniqueModels = [...new Set(deals.map(deal => deal.model))].sort()
  const uniqueBodyTypes = [...new Set(deals.map(deal => deal.body_type).filter(Boolean))].sort()
  const uniqueDrivetrains = [...new Set(deals.map(deal => deal.drivetrain).filter(Boolean))].sort()

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-4">
      {/* Filter Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/10 rounded-lg">
              <Filter className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-lg font-semibold text-white">Filters</h2>
          </div>
          <button className="text-white/70 hover:text-white transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="p-6">
        <form method="GET" className="space-y-8">
          {/* Premium Search */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Search Vehicles
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="search"
                defaultValue={searchParams.get('search') || ''}
                placeholder="Search by make, model, or keyword..."
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 text-gray-900 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Vehicle Selection */}
          <div className="bg-gray-50 rounded-xl p-5">
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-5 w-5 text-blue-600" />
              <h3 className="text-sm font-semibold text-gray-900">Vehicle Type</h3>
            </div>
            
            <div className="space-y-4">
              {/* Make */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Make</label>
                <div className="relative">
                  <select
                    name="make"
                    defaultValue={searchParams.get('make') || ''}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-gray-900"
                  >
                    <option value="">All Makes</option>
                    {uniqueMakes.map((makeName) => (
                      <option key={makeName} value={makeName}>
                        {makeName}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Model */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Model</label>
                <div className="relative">
                  <select
                    name="model"
                    defaultValue={searchParams.get('model') || ''}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-gray-900"
                  >
                    <option value="">All Models</option>
                    {uniqueModels.map((modelName) => (
                      <option key={modelName} value={modelName}>
                        {modelName}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Body Type Pills */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-3">Body Type</label>
                <div className="flex flex-wrap gap-2">
                  {uniqueBodyTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        const newBodyType = bodyType === type ? '' : (type || '')
                        setBodyType(newBodyType)
                        updateFilter('bodyType', newBodyType)
                      }}
                      className={`px-3 py-2 text-xs font-medium rounded-full border transition-all duration-200 ${
                        bodyType === type
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:text-blue-600'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="bodyType" value={bodyType} />
              </div>
            </div>
          </div>

          {/* Price Range */}
          <div className="bg-blue-50 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Price Range</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Min Price</label>
                <input
                  type="number"
                  name="minPrice"
                  defaultValue={searchParams.get('minPrice') || ''}
                  placeholder="$0"
                  className="w-full px-3 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Max Price</label>
                <input
                  type="number"
                  name="maxPrice"
                  defaultValue={searchParams.get('maxPrice') || ''}
                  placeholder="Any"
                  className="w-full px-3 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                />
              </div>
            </div>
          </div>

          {/* Year Range */}
          <div className="bg-green-50 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Year Range</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">From</label>
                <input
                  type="number"
                  name="minYear"
                  defaultValue={searchParams.get('minYear') || ''}
                  placeholder="1990"
                  min="1900"
                  max={new Date().getFullYear() + 1}
                  className="w-full px-3 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">To</label>
                <input
                  type="number"
                  name="maxYear"
                  defaultValue={searchParams.get('maxYear') || ''}
                  placeholder={new Date().getFullYear().toString()}
                  min="1900"
                  max={new Date().getFullYear() + 1}
                  className="w-full px-3 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
                />
              </div>
            </div>
          </div>

          {/* Mileage */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">Max Mileage</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: '25000', label: '25K' },
                { value: '50000', label: '50K' },
                { value: '75000', label: '75K' },
                { value: '100000', label: '100K' },
                { value: '150000', label: '150K' },
                { value: '', label: 'Any' }
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    setMaxMileage(option.value)
                    updateFilter('maxMileage', option.value)
                  }}
                  className={`px-3 py-2 text-xs font-medium rounded-lg border transition-all duration-200 ${
                    maxMileage === option.value
                      ? 'bg-purple-600 text-white border-purple-600'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-purple-300 hover:text-purple-600'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <input type="hidden" name="maxMileage" value={maxMileage} />
          </div>

          {/* Technical Specs */}
          <div className="bg-slate-50 rounded-xl p-5">
            <div className="flex items-center space-x-2 mb-4">
              <Settings className="h-5 w-5 text-slate-600" />
              <h3 className="text-sm font-semibold text-gray-900">Technical</h3>
            </div>
            
            <div className="space-y-4">
              {/* Transmission Toggle */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-3">Transmission</label>
                <div className="flex rounded-lg border border-gray-200 bg-white p-1">
                  <button
                    type="button"
                    onClick={() => {
                      setTransmission('')
                      updateFilter('transmission', '')
                    }}
                    className={`flex-1 px-3 py-2 text-xs font-medium rounded-md transition-all duration-200 ${
                      transmission === '' || !transmission
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    Any
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTransmission('manual')
                      updateFilter('transmission', 'manual')
                    }}
                    className={`flex-1 px-3 py-2 text-xs font-medium rounded-md transition-all duration-200 ${
                      transmission === 'manual'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    Manual
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTransmission('automatic')
                      updateFilter('transmission', 'automatic')
                    }}
                    className={`flex-1 px-3 py-2 text-xs font-medium rounded-md transition-all duration-200 ${
                      transmission === 'automatic'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    Auto
                  </button>
                </div>
                <input type="hidden" name="transmission" value={transmission} />
              </div>

              {/* Drivetrain */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Drivetrain</label>
                <div className="relative">
                  <select
                    name="drivetrain"
                    defaultValue={searchParams.get('drivetrain') || ''}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-gray-900"
                  >
                    <option value="">All Drivetrains</option>
                    {uniqueDrivetrains.map((drive) => (
                      <option key={drive} value={drive}>
                        {drive}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* History & Condition */}
          <div className="bg-amber-50 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Vehicle History</h3>
            
            <div className="space-y-4">
              {/* Accident History Pills */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-3">Accident History</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: '', label: 'Any' },
                    { value: '0', label: 'No Accidents' },
                    { value: '1', label: '1 or Fewer' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        setMaxAccidents(option.value)
                        updateFilter('maxAccidents', option.value)
                      }}
                      className={`px-3 py-2 text-xs font-medium rounded-full border transition-all duration-200 ${
                        maxAccidents === option.value
                          ? 'bg-amber-600 text-white border-amber-600'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-amber-300 hover:text-amber-600'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="maxAccidents" value={maxAccidents} />
              </div>

              {/* Previous Owners */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Max Previous Owners</label>
                <div className="relative">
                  <select
                    name="maxOwners"
                    defaultValue={searchParams.get('maxOwners') || ''}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none text-gray-900"
                  >
                    <option value="">Any Number</option>
                    <option value="1">1 Owner</option>
                    <option value="2">2 or Fewer</option>
                    <option value="3">3 or Fewer</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Apply Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Apply Filters
          </button>
        </form>
      </div>
    </div>
  )
} 