export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6">
                By using CarDeals, you agree to these terms of service and our privacy policy. 
                These terms may be updated periodically.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Description</h2>
              <p className="text-gray-600 mb-6">
                CarDeals provides car listing analysis and market insights for informational purposes only. 
                We do not guarantee the accuracy of all analysis and recommend independent verification.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptable Use</h2>
              <p className="text-gray-600 mb-6">
                Users may not abuse our service, attempt to circumvent rate limiting, or use our platform 
                for illegal activities. We reserve the right to limit access if needed.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                CarDeals provides analysis for informational purposes. We are not responsible for purchase 
                decisions made based on our analysis. Always conduct independent research.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
              <p className="text-gray-600">
                Questions about these terms? Contact us at legal@cardeals.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 