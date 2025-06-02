import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Shield, Car, Phone, DollarSign, Clock, Users, Award } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Protect Your Investment
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Comprehensive protection plans for your vehicle purchase
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Get VSC Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Learn About GAP
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Services */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* VSC Card */}
          <Card className="relative overflow-hidden border-0 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600" />
            <CardHeader className="relative text-white">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8" />
                <Badge className="bg-white/20 text-white">Extended Warranty</Badge>
              </div>
              <CardTitle className="text-2xl mb-2">Vehicle Service Contract (VSC)</CardTitle>
              <p className="text-emerald-100">Protect your engine, transmission, and major components beyond the manufacturer&apos;s warranty</p>
            </CardHeader>
            <CardContent className="relative bg-white">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Starting at</span>
                  <span className="text-2xl font-bold text-emerald-600">$29/month</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">Engine & Transmission Coverage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">24/7 Roadside Assistance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">Nationwide Network of Certified Shops</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">Rental Car Reimbursement</span>
                  </div>
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Get VSC Quote
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* GAP Card */}
          <Card className="relative overflow-hidden border-0 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600" />
            <CardHeader className="relative text-white">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="h-8 w-8" />
                <Badge className="bg-white/20 text-white">Loan Protection</Badge>
              </div>
              <CardTitle className="text-2xl mb-2">GAP Insurance</CardTitle>
              <p className="text-blue-100">Guaranteed Asset Protection covers the &quot;gap&quot; between what you owe and your car&apos;s value</p>
            </CardHeader>
            <CardContent className="relative bg-white">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Coverage up to</span>
                  <span className="text-2xl font-bold text-blue-600">150% LTV</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Up to $50,000 Maximum Coverage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Total Loss & Theft Protection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Deductible Assistance Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Primary Insurance Supplement</span>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Get GAP Quote
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Protection Options</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Car className="h-12 w-12 mx-auto mb-4 text-purple-600" />
              <h3 className="font-semibold mb-2">Tire & Wheel Protection</h3>
              <p className="text-sm text-gray-600 mb-4">Coverage for tire and wheel damage from road hazards</p>
              <Button variant="outline" size="sm">Learn More</Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Clock className="h-12 w-12 mx-auto mb-4 text-orange-600" />
              <h3 className="font-semibold mb-2">Payment Protection</h3>
              <p className="text-sm text-gray-600 mb-4">Temporary payment assistance during unexpected hardship</p>
              <Button variant="outline" size="sm">Learn More</Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <h3 className="font-semibold mb-2">Maintenance Plans</h3>
              <p className="text-sm text-gray-600 mb-4">Scheduled maintenance coverage to keep your car running smoothly</p>
              <Button variant="outline" size="sm">Learn More</Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Award className="h-12 w-12 mx-auto mb-4 text-red-600" />
              <h3 className="font-semibold mb-2">Identity Protection</h3>
              <p className="text-sm text-gray-600 mb-4">Comprehensive identity theft monitoring and recovery services</p>
              <Button variant="outline" size="sm">Learn More</Button>
            </Card>
          </div>
        </div>

        {/* Contact Section */}
        <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <CardContent className="p-8 text-center">
            <Phone className="h-12 w-12 mx-auto mb-4 text-blue-400" />
            <h2 className="text-2xl font-bold mb-4">Ready to Protect Your Investment?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Speak with one of our protection specialists to find the right coverage for your vehicle and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Call (555) 123-4567
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                Request Callback
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 