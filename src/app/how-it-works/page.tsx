export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            How CarDeals Works
          </h1>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Analyze Any Listing</h2>
              <p className="text-gray-600">
                Simply paste any car listing URL from CarGurus, CarMax, AutoTrader, or other major platforms. 
                Our advanced AI instantly analyzes the listing and extracts key vehicle information.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Get Market Insights</h2>
              <p className="text-gray-600">
                Our system compares the listing against thousands of similar vehicles to provide you with 
                accurate market pricing, deal scores, and negotiation insights.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Make Informed Decisions</h2>
              <p className="text-gray-600">
                Receive comprehensive recommendations, risk assessments, and protection service options 
                to help you make the best purchase decision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 