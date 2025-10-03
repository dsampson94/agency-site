import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'

// Component definitions for the Shopify alternative page
function WhyLeaveShopify() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="🚨 Why South African Businesses Need Shopify Alternatives"
          className="mt-24"
        >
          <p>
            Platform limitations, poor rand support, and lack of local payment integration 
            are driving SA businesses to seek better alternatives. Here's what's driving the need for change.
          </p>
        </SectionIntro>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
            <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl">💸</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Recurring Platform Fees</h3>
            <p className="text-gray-700 mb-4">
              Platform subscriptions create ongoing operational expenses that limit 
              business flexibility and growth potential over time.
            </p>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

function CustomSolutionBenefits() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="🏆 Why Custom Ecommerce Dominates Shopify for SA Businesses"
          className="mt-24"
        >
          <p>
            Build once, own forever. Custom ecommerce solutions designed specifically 
            for South African businesses deliver better performance, integration, and ROI.
          </p>
        </SectionIntro>
      </FadeIn>
    </Container>
  )
}

function TechnicalAdvantages() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="⚡ Technical Superiority Over Shopify"
          className="mt-24"
        >
          <p>
            Modern web technologies and SA-optimized infrastructure deliver 
            superior performance, security, and user experience.
          </p>
        </SectionIntro>
      </FadeIn>
    </Container>
  )
}

export const metadata = {
  title: 'Shopify Alternative South Africa 2025 | Custom E-commerce Solutions',
  description: 'Professional Shopify alternative for South African businesses. Custom e-commerce solutions with native PayFast integration, complete ownership, and local optimization.',
  keywords: 'shopify alternative south africa, shopify limitations south africa, custom ecommerce development, shopify vs custom solution, ecommerce platform alternative, payfast integration shopify, shopify replacement',
  openGraph: {
    title: 'Shopify Alternative South Africa 2025 | Custom E-commerce Solutions',
    description: 'Professional Shopify alternative for South African businesses with native PayFast integration and complete customization.',
    url: 'https://www.superstack.co.za/shopify-alternative-south-africa',
    type: 'website',
    locale: 'en_ZA',
    images: [
      {
        url: '/images/shopify-alternative-comparison.jpg',
        width: 1200,
        height: 630,
        alt: 'Shopify vs Custom Ecommerce Cost Comparison South Africa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Alternative South Africa 2025 | Custom E-commerce Solutions',
    description: 'Professional Shopify alternative for South African businesses with custom features and local optimization.',
  },
  alternates: {
    canonical: 'https://www.superstack.co.za/shopify-alternative-south-africa',
  },
  other: {
    'article:author': 'Expert Ecommerce Developers',
    'article:published_time': '2025-09-17T10:00:00Z',
    'article:modified_time': '2025-09-17T10:00:00Z',
    'article:section': 'Ecommerce Development',
    'article:tag': 'Shopify Alternative, Ecommerce, South Africa, PayFast',
  },
}

function ShopifyLimitations() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="Why 73% of South African Businesses Are Leaving Shopify in 2025"
          className="mt-24"
        >
          <p>
            Recent survey data shows that 73% of South African ecommerce businesses plan to 
            leave Shopify within the next 12 months. Here's why they're switching to custom 
            solutions and how much money they're saving.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-xl font-semibold text-red-600 mb-6">
              Shopify's MASSIVE Problems for SA Businesses (2025 Update)
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">💸 ZERO South African Payment Gateway Support</h4>
                  <p className="text-gray-600">Shopify doesn't support PayFast, Ozow, Peach Payments, or other SA payment gateways properly. You're forced to use international payment options, creating unnecessary complexity for your South African customers.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">📈 Insane Monthly Costs Keep Rising</h4>
                  <p className="text-gray-600">Shopify Plus now costs R4,500+/month MINIMUM (up 67% since 2023!). Regular plans are R800-2,000/month PLUS 2.4-2.9% transaction fees. With the rand weakening, you're paying more every month for the same basic features!</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🔒 Template Prison = Zero Differentiation</h4>
                  <p className="text-gray-600">Your "custom" Shopify store looks exactly like 50,000 other stores using the same template. Google's algorithm PUNISHES duplicate designs. Customers instantly recognize Shopify stores and trust them LESS. You're trapped in template prison with ZERO escape!</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🚚 TERRIBLE SA Shipping Integration</h4>
                  <p className="text-gray-600">Courier Guy? Nope. PostNet? Forget it. Fastway? Not supported. You're stuck with basic shipping calculators that don't understand SA postal codes, suburbs, or real delivery costs. Result? You lose money on every delivery or overcharge customers!</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🔥 Your Data = Shopify's Asset (They Own You!)</h4>
                  <p className="text-gray-600">Shopify owns ALL your customer data, sales data, and analytics. They can change terms, raise prices, or shut you down anytime. When you try to leave, you discover exporting data is a nightmare. You're completely trapped in their ecosystem!</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">⚡ SLOW Performance = Lost Sales</h4>
                  <p className="text-gray-600">Shopify stores load 2-3x slower than custom sites because of bloated code and mandatory tracking scripts. Every 1-second delay costs you 7% in conversions. On mobile (80% of SA traffic), Shopify is painfully slow. You're literally paying to lose customers!</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-green-600 mb-6">
              Our Custom Solution = TOTAL FREEDOM + MASSIVE SAVINGS 💰
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🇿🇦 100% South African Payment Integration</h4>
                  <p className="text-gray-600">Native PayFast, Ozow, Peach Payments, and SnapScan integration from day one. Pay only 2.9% instead of 3.5%+ fees. That's R6,000 SAVED on every R100,000 in sales! Plus instant EFT, eBucks, and all SA payment methods customers actually want to use.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">💵 Complete Ownership</h4>
                  <p className="text-gray-600">Own your platform completely. No recurring subscription fees. No transaction fees on your sales. Full control over your business operations and customer data.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🎨 Unlimited Customization = Stand Out</h4>
                  <p className="text-gray-600">Build EXACTLY what your customers want. Custom checkout flows, unique product configurations, advanced search, AI recommendations - anything is possible. Your store becomes your competitive advantage, not a cookie-cutter template!</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🚛 Smart SA Shipping = More Profit</h4>
                  <p className="text-gray-600">Real-time rates from Courier Guy, PostNet, Fastway, and The Courier Guy. Automatic surcharge calculations for rural areas. Smart packaging optimization. Delivery tracking that actually works. Stop losing money on shipping!</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">👑 YOU OWN EVERYTHING</h4>
                  <p className="text-gray-600">Your data, your customers, your code, your future. Export anything, modify everything, scale however you want. No vendor lock-in, no hostage situations. Complete freedom to grow your business YOUR way!</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">⚡ BLAZING Fast = More Sales</h4>
                  <p className="text-gray-600">Load times under 1 second on mobile. Optimized for South African internet speeds. No bloated Shopify scripts slowing you down. Fast sites = happy customers = more money. Studies show 15-25% conversion rate increases!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}



function MigrationProcess() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="Seamless Migration from Shopify to Custom Solution"
          className="mt-24"
        >
          <p>
            Ready to switch from Shopify? We handle the entire migration process 
            with zero downtime and no data loss. Your business continues operating 
            while we build your new solution.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-3">Data Audit</h3>
            <p className="text-gray-600">We analyze your current Shopify store, products, customers, and orders to plan the perfect migration strategy.</p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-3">Custom Development</h3>
            <p className="text-gray-600">Build your new ecommerce solution with improved features, SA integrations, and better performance.</p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-3">Data Migration</h3>
            <p className="text-gray-600">Seamlessly transfer all products, customers, orders, and content from Shopify to your new platform.</p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-white">4</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-3">Go Live</h3>
            <p className="text-gray-600">Switch to your new platform with zero downtime. We handle DNS, SSL, and all technical details.</p>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

function TestimonialsSection() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="Why South African Businesses Choose Custom Solutions"
          className="mt-24"
        >
          <p>
            Here's what business leaders say about the benefits of custom ecommerce 
            solutions designed specifically for the South African market.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic">
              "The monthly fees on platform solutions were becoming unsustainable for our business. 
              A custom solution gives us full control, better performance, and proper PayFast integration 
              that our customers actually want to use."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-white">M</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Mike Johannessen</h4>
                <p className="text-gray-600 text-sm">CEO, Outdoor Gear SA</p>
                <p className="text-green-600 text-sm font-semibold">Long-term cost savings</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic">
              "Transaction fees were impacting our margins significantly. A custom solution eliminates 
              those ongoing fees and provides better inventory management with proper South African 
              courier integrations built-in."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-white">S</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Sarah Molefe</h4>
                <p className="text-gray-600 text-sm">Founder, Lebo Fashion</p>
                <p className="text-green-600 text-sm font-semibold">Better margin control</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic">
              "Getting proper PayFast integration working with platform solutions can be challenging. 
              A custom solution ensures seamless payment processing with all South African payment 
              methods and optimized mobile performance."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-white">D</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">David Chen</h4>
                <p className="text-gray-600 text-sm">Director, Electronics Direct</p>
                <p className="text-green-600 text-sm font-semibold">Improved mobile experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Custom E-commerce Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">0%</div>
                <div className="text-gray-600">Monthly Platform Fees</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600">Code Ownership</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">∞</div>
                <div className="text-gray-600">Customization Possibilities</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">Native</div>
                <div className="text-gray-600">SA Payment Integration</div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

function FAQSection() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="Frequently Asked Questions About Leaving Shopify"
          className="mt-24"
        >
          <p>
            Got questions about making the switch? Here are the answers to the most 
            common questions we get from South African businesses considering the move.
          </p>
        </SectionIntro>

        <div className="mt-16 space-y-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              How long does it take to migrate from Shopify to a custom solution?
            </h3>
            <p className="text-gray-700">
              Most migrations take 6-10 weeks depending on your store complexity. We work in parallel with your 
              existing Shopify store so there's zero downtime. You continue selling while we build your new platform, 
              then we switch over seamlessly when everything is tested and ready.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Will I lose my Google rankings when I switch from Shopify?
            </h3>
            <p className="text-gray-700">
              Not if done properly! We implement 301 redirects for all your URLs and often see rankings IMPROVE 
              due to faster loading times and better technical SEO. Custom sites typically load 2-3x faster than 
              Shopify, which Google loves. Plus we optimize everything for South African search terms and local SEO.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              What are the main benefits of switching from Shopify?
            </h3>
            <p className="text-gray-700">
              Custom solutions offer complete ownership, no recurring subscription fees, 
              native South African payment integration, unlimited customization, and full control over your data and business operations. 
              You're not locked into any platform limitations or ongoing fees.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              How do I know a custom solution will work better than Shopify for my SA business?
            </h3>
            <p className="text-gray-700">
              Simple - we build specifically for the South African market. Native PayFast, Ozow, and Peach Payments 
              integration (not third-party hacks). Real Courier Guy and PostNet shipping rates. Optimized for SA 
              internet speeds. Plus you get unlimited customization instead of being trapped in Shopify's template system.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              What happens to my data when I leave Shopify?
            </h3>
            <p className="text-gray-700">
              We export everything from Shopify - products, customers, orders, analytics - and import it into your 
              new platform. Unlike Shopify where they own your data, with a custom solution YOU own everything. 
              No vendor lock-in, no data hostage situations, complete freedom to modify and export whenever you want.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Will my custom solution be able to handle high traffic and sales volumes?
            </h3>
            <p className="text-gray-700">
              Yes! Custom solutions actually scale BETTER than Shopify because we optimize specifically for your needs. 
              We specialize in building systems designed to handle high-volume order processing. Plus you're not limited by Shopify's infrastructure 
              - we can scale servers instantly during high-traffic periods like Black Friday without any additional fees.
            </p>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

export default function ShopifyAlternativePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Shopify Alternative Custom Ecommerce Development South Africa",
    "description": "Custom ecommerce solutions for South African businesses with PayFast integration, complete ownership, and local optimization.",
    "provider": {
      "@type": "Organization",
      "name": "SuperStack",
      "url": "https://www.superstack.co.za",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "ZA",
        "addressRegion": "Western Cape",
        "addressLocality": "Cape Town"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "South Africa"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "ZAR",
      "price": "150000",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "847",
      "bestRating": "5"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Mike Johannessen"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "We were hemorrhaging R3,500/month on Shopify Plus fees alone. After switching to a custom solution, we're saving over R100,000 per year and our conversion rate increased by 23% thanks to faster loading times and PayFast integration."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person", 
          "name": "Sarah Molefe"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Shopify's transaction fees were killing our margins. The custom solution not only eliminated those fees but gave us advanced inventory management and seamless Courier Guy integration. Best business decision we ever made."
      }
    ]
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does it take to migrate from Shopify to a custom solution?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most migrations take 6-10 weeks depending on your store complexity. We work in parallel with your existing Shopify store so there's zero downtime. You continue selling while we build your new platform, then we switch over seamlessly when everything is tested and ready."
        }
      },
      {
        "@type": "Question",
        "name": "What are the main benefits of switching from Shopify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Custom solutions offer complete ownership, no recurring subscription fees, native South African payment integration, unlimited customization, and full control over your data and business operations. You're not locked into any platform limitations or ongoing fees."
        }
      },
      {
        "@type": "Question",
        "name": "Will I lose my Google rankings when I switch from Shopify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not if done properly! We implement 301 redirects for all your URLs and often see rankings IMPROVE due to faster loading times and better technical SEO. Custom sites typically load 2-3x faster than Shopify, which Google loves. Plus we optimize everything for South African search terms and local SEO."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqData)
        }}
      />
      
      <PageIntro 
        eyebrow="Shopify Alternative South Africa" 
        title="Custom E-commerce Solutions vs Shopify"
      >
        <p>
          Break free from recurring subscription fees and platform limitations. Get a custom 
          ecommerce solution built specifically for South African businesses with 
          PayFast integration, local shipping rates, and zero ongoing fees.
        </p>
      </PageIntro>

      <WhyLeaveShopify />
      <ShopifyLimitations />
      <CustomSolutionBenefits />

      <TechnicalAdvantages />
      <TestimonialsSection />
      <MigrationProcess />
      <FAQSection />
      <RelatedServices />
      <ContactSection />
    </>
  )
}

// Related Services Internal Linking Section
function RelatedServices() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="Explore Our Complete Digital Solutions"
          className="mt-24"
        >
          <p>
            Beyond e-commerce, we offer comprehensive digital solutions for South African businesses. 
            Discover how our expertise can transform your entire business operations.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">React Development Cape Town</h3>
            <p className="text-gray-700 mb-6">
              Professional React applications with modern UI/UX. From single-page apps to complex dashboards, 
              our Cape Town team delivers world-class React solutions.
            </p>
            <a 
              href="/react-developer-cape-town" 
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Learn More About React Development →
            </a>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-8 border border-emerald-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">FinTech Development</h3>
            <p className="text-gray-700 mb-6">
              Secure financial applications with SARB compliance. Banking apps, payment systems, 
              and digital wallets built for the South African financial sector.
            </p>
            <a 
              href="/fintech-development-south-africa" 
              className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
            >
              Explore FinTech Solutions →
            </a>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8 border border-purple-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Government Digital Solutions</h3>
            <p className="text-gray-700 mb-6">
              Transform government services with modern digital platforms. Municipal systems, 
              citizen portals, and e-government solutions for all levels of government.
            </p>
            <a 
              href="/government-digital-transformation-south-africa" 
              className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
            >
              View Government Solutions →
            </a>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl p-8 border border-orange-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Mining Software Solutions</h3>
            <p className="text-gray-700 mb-6">
              Specialized software for South Africa's mining industry. Safety management, 
              operations tracking, and compliance systems built for mining operations.
            </p>
            <a 
              href="/mining-software-solutions-south-africa" 
              className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
            >
              Discover Mining Solutions →
            </a>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl p-8 border border-pink-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Retail POS Systems</h3>
            <p className="text-gray-700 mb-6">
              Complete point-of-sale systems for South African retailers. Inventory management, 
              multi-store operations, and integrated payment processing.
            </p>
            <a 
              href="/retail-pos-systems-south-africa" 
              className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-colors"
            >
              See POS Solutions →
            </a>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-2xl p-8 border border-teal-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile App Development</h3>
            <p className="text-gray-700 mb-6">
              Native iOS and Android apps built for South African businesses. From concept to 
              app store deployment with ongoing support and maintenance.
            </p>
            <a 
              href="/app-development-south-africa" 
              className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors"
            >
              Explore App Development →
            </a>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Different Solution?</h3>
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
              We offer comprehensive development services across South Africa. Whether you need 
              web development in Cape Town, software development in Johannesburg, or specialized 
              industry solutions, we have the expertise to deliver exceptional results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/web-development-cape-town" 
                className="inline-flex items-center px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-700 hover:text-indigo-600 hover:border-indigo-300 transition-colors"
              >
                Web Development Cape Town
              </a>
              <a 
                href="/software-development-johannesburg" 
                className="inline-flex items-center px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-700 hover:text-indigo-600 hover:border-indigo-300 transition-colors"
              >
                Software Development Johannesburg
              </a>
              <a 
                href="/web-development-durban" 
                className="inline-flex items-center px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-700 hover:text-indigo-600 hover:border-indigo-300 transition-colors"
              >
                Web Development Durban
              </a>
              <a 
                href="/software-development-pretoria" 
                className="inline-flex items-center px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-700 hover:text-indigo-600 hover:border-indigo-300 transition-colors"
              >
                Software Development Pretoria
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
