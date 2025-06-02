import Link from 'next/link'
import { Check, X, Crown, Zap, Star } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: 0,
    description: 'Perfect for casual car shoppers',
    features: [
      { name: 'Access to 2-3 sample deals daily', included: true },
      { name: 'Basic car information', included: true },
      { name: 'Community access', included: true },
      { name: 'Email notifications', included: false },
      { name: 'Full deal database access', included: false },
      { name: 'Advanced filters', included: false },
      { name: 'VIN history reports', included: false },
      { name: 'Deal score analytics', included: false },
      { name: 'Premium deal alerts', included: false },
      { name: 'Priority support', included: false }
    ],
    cta: 'Get Started',
    ctaLink: '/deals',
    popular: false
  },
  {
    name: 'Premium',
    price: 29.99,
    description: 'For serious car hunters and dealers',
    features: [
      { name: 'Access to ALL deals (100+ daily)', included: true },
      { name: 'Detailed deal analysis', included: true },
      { name: 'Real-time notifications', included: true },
      { name: 'Advanced search filters', included: true },
      { name: 'VIN history reports', included: true },
      { name: 'Deal score analytics', included: true },
      { name: 'Custom alert preferences', included: true },
      { name: 'Export deal data', included: true },
      { name: 'Priority customer support', included: true },
      { name: 'Early access to new features', included: true }
    ],
    cta: 'Start Free Trial',
    ctaLink: '/signup?plan=premium',
    popular: true
  }
]

const testimonials = [
  {
    name: 'Mike Chen',
    role: 'Car Flipper',
    content: 'Found a $15K profit margin deal in my first week. This platform paid for itself 500x over.',
    rating: 5
  },
  {
    name: 'Sarah Johnson',
    role: 'Car Enthusiast',
    content: 'Finally found my dream 911 GT3 at $20K below market value. The deal scores are incredibly accurate.',
    rating: 5
  },
  {
    name: 'David Rodriguez',
    role: 'Independent Dealer',
    content: 'My inventory turnover has doubled since using CarDeals. The quality of leads is unmatched.',
    rating: 5
  }
]

const faqs = [
  {
    question: 'What exactly do I get with Premium?',
    answer: 'Premium gives you access to our full database of car deals (100+ daily), advanced filters, VIN reports, deal analytics, and priority support. You\'ll see deals that free users can\'t access.'
  },
  {
    question: 'How accurate are your deal scores?',
    answer: 'Our deal scores are based on real market data, comparable sales, and expert analysis. We track accuracy and maintain a 92% correlation with actual market performance.'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your Premium subscription at any time. No long-term commitments or cancellation fees.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 14-day money-back guarantee. If you\'re not satisfied within the first 14 days, we\'ll refund your payment.'
  },
  {
    question: 'How do you find these deals?',
    answer: 'We use proprietary algorithms to scan thousands of listings across multiple platforms daily, analyzing market data to identify undervalued vehicles.'
  }
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Start free and upgrade when you're ready. Join thousands of car enthusiasts 
            who never miss a great deal.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden relative ${
                  plan.popular ? 'ring-2 ring-blue-600' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Crown className="h-4 w-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      ${plan.price}
                      {plan.price > 0 && <span className="text-lg text-gray-500">/month</span>}
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-gray-900' : 'text-gray-400'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.ctaLink}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-center transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why our members love Premium
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real car enthusiasts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">$12,000</h3>
              <p className="text-gray-600">Average savings per member</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">4.8/5</h3>
              <p className="text-gray-600">Member satisfaction rating</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">92%</h3>
              <p className="text-gray-600">Deal accuracy rate</p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about CarDeals
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to find your next great deal?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of car enthusiasts who never miss an opportunity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/deals"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start with Free
            </Link>
            <Link
              href="/signup?plan=premium"
              className="bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-900 transition-colors flex items-center justify-center space-x-2"
            >
              <Crown className="h-5 w-5" />
              <span>Try Premium Free</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 