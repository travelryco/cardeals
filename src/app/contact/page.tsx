export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                We&apos;d love to hear from you! Get in touch with any questions or feedback.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-blue-600">support@cardeals.com</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">(555) 123-CARS</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9am - 6pm EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 