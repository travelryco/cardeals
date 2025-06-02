export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What sites can CarDeals analyze?</h3>
              <p className="text-gray-600">
                CarDeals works with major automotive platforms including CarGurus, CarMax, AutoTrader, Cars.com, 
                Vroom, Carvana, and most dealer websites.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How accurate is the market analysis?</h3>
              <p className="text-gray-600">
                Our analysis is based on real-time market data and VIN-specific information when available. 
                We provide confidence scores with each analysis to help you understand the reliability of our insights.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Is CarDeals free to use?</h3>
              <p className="text-gray-600">
                Yes! Our basic car listing analysis is completely free. We also offer optional protection services 
                like VSC and GAP insurance for your peace of mind.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How does VIN verification work?</h3>
              <p className="text-gray-600">
                When we can extract a VIN from the listing, we cross-reference it with vehicle databases to provide 
                more accurate specifications and higher confidence in our analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 