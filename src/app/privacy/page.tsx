export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-6">
                We only collect the car listing URLs you provide for analysis. We do not store personal information, 
                track browsing behavior, or require user accounts for basic functionality.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Information</h2>
              <p className="text-gray-600 mb-6">
                The URLs you provide are used solely to analyze car listings and provide market insights. 
                Analysis data may be temporarily cached to improve performance.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement industry-standard security measures to protect any data processed through our service. 
                We do not sell, share, or distribute user data to third parties.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
              <p className="text-gray-600">
                If you have questions about this privacy policy, please contact us at privacy@cardeals.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 