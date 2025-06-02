import Image from 'next/image'
import Link from 'next/link'
import { 
  Shield, 
  Car, 
  CheckCircle, 
  Phone, 
  Mail, 
  ArrowRight,
  Wrench,
  CreditCard,
  Clock,
  Users,
  Star,
  Award
} from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Vehicle Protection Services
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Protect your investment with comprehensive coverage solutions designed for today's vehicle owners
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Quote Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* VSC Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-green-500 p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Vehicle Service Contracts</h2>
                  <p className="text-green-100">Extended Warranty Protection</p>
                </div>
              </div>
              <p className="text-white/90 text-lg">
                Comprehensive coverage beyond your manufacturer's warranty, protecting you from unexpected repair costs.
              </p>
            </div>

            <div className="p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Engine & Transmission Coverage</h3>
                    <p className="text-gray-600">Complete protection for your vehicle's most expensive components</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Nationwide Service Network</h3>
                    <p className="text-gray-600">Over 25,000 certified repair facilities across the country</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">24/7 Roadside Assistance</h3>
                    <p className="text-gray-600">Emergency towing, jump starts, lockout service, and more</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Transferable Coverage</h3>
                    <p className="text-gray-600">Increase your vehicle's resale value with transferable protection</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-green-50 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-gray-900">Coverage Options</span>
                  <span className="text-green-600 font-bold">Starting at $29/month</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600">3-7</div>
                    <div className="text-sm text-gray-600">Year Terms</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">100K+</div>
                    <div className="text-sm text-gray-600">Mile Coverage</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">$0</div>
                    <div className="text-sm text-gray-600">Deductible Options</div>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
                Get VSC Quote
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>

          {/* GAP Insurance Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">GAP Insurance</h2>
                  <p className="text-blue-100">Guaranteed Asset Protection</p>
                </div>
              </div>
              <p className="text-white/90 text-lg">
                Bridge the gap between what you owe and what your vehicle is worth in case of total loss.
              </p>
            </div>

            <div className="p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Total Loss Protection</h3>
                    <p className="text-gray-600">Covers the difference between insurance payout and loan balance</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Instant Approval</h3>
                    <p className="text-gray-600">Quick and easy application process with immediate coverage</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">New & Used Vehicles</h3>
                    <p className="text-gray-600">Coverage available for both new and pre-owned vehicles</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Lease & Finance Protection</h3>
                    <p className="text-gray-600">Essential coverage for leased and financed vehicles</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-gray-900">Protection Details</span>
                  <span className="text-blue-600 font-bold">Up to 150% LTV</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Maximum Coverage</span>
                    <span className="font-semibold">$50,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Coverage Period</span>
                    <span className="font-semibold">Up to 84 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Deductible</span>
                    <span className="font-semibold">$0 - $1,000</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                Get GAP Quote
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Protection Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage solutions to protect every aspect of your vehicle ownership experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tire & Wheel Protection</h3>
              <p className="text-gray-600 text-sm mb-4">Coverage for tire and wheel damage from road hazards</p>
              <button className="text-purple-600 font-semibold hover:text-purple-700">Learn More</button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment Protection</h3>
              <p className="text-gray-600 text-sm mb-4">Helps cover payments during involuntary unemployment</p>
              <button className="text-orange-600 font-semibold hover:text-orange-700">Learn More</button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Maintenance Plans</h3>
              <p className="text-gray-600 text-sm mb-4">Prepaid maintenance coverage for scheduled services</p>
              <button className="text-red-600 font-semibold hover:text-red-700">Learn More</button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Identity Protection</h3>
              <p className="text-gray-600 text-sm mb-4">Comprehensive identity theft monitoring and recovery</p>
              <button className="text-indigo-600 font-semibold hover:text-indigo-700">Learn More</button>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Protection Services?</h2>
            <p className="text-xl text-gray-600">Trusted by thousands of vehicle owners nationwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Support</h3>
              <p className="text-gray-600">Dedicated customer service team with automotive insurance expertise</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">A+ Rated</h3>
              <p className="text-gray-600">Top-rated financial strength and customer satisfaction scores</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure & Reliable</h3>
              <p className="text-gray-600">Backed by industry-leading insurance carriers and underwriters</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Protect Your Investment?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Get personalized quotes for VSC and GAP coverage in minutes. Our experts are standing by to help you choose the right protection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              Call (555) 123-CARS
            </button>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2" />
              Get Email Quote
            </button>
          </div>

          <p className="text-slate-300 text-sm">
            Licensed in all 50 states • Fast approval • No credit check required
          </p>
        </div>
      </div>
    </div>
  )
} 