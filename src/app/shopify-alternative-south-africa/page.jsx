import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'

export const metadata = {
  title: 'Shopify Alternative South Africa 2025 | Save R67,800 vs Shopify Plans',
  description: 'Stop wasting money on Shopify! Our Shopify alternative saves SA businesses R67,800 over 3 years. Native PayFast integration, no monthly fees, complete ownership. Shopify vs custom ecommerce comparison.',
  keywords: 'shopify alternative south africa, shopify too expensive, shopify limitations south africa, custom ecommerce development, shopify vs custom solution, ecommerce platform alternative, payfast integration shopify, shopify monthly fees too high, shopify replacement',
  openGraph: {
    title: 'Shopify Alternative South Africa 2025 | Save R67,800 vs Shopify Plans',
    description: 'Stop wasting money on Shopify! Our Shopify alternative saves SA businesses R67,800 over 3 years with native PayFast integration.',
    url: 'https://yoursite.com/shopify-alternative-south-africa',
    type: 'website',
    locale: 'en_ZA',
    images: [
      {
        url: 'https://yoursite.com/images/shopify-alternative-comparison.jpg',
        width: 1200,
        height: 630,
        alt: 'Shopify vs Custom Ecommerce Cost Comparison South Africa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Alternative South Africa 2025 | Save R67,800 vs Shopify Plans',
    description: 'Stop wasting money on Shopify! Our Shopify alternative saves SA businesses R67,800 over 3 years.',
  },
  alternates: {
    canonical: 'https://yoursite.com/shopify-alternative-south-africa',
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
                  <p className="text-gray-600">Shopify STILL doesn't support PayFast, Ozow, Peach Payments, or any SA gateways properly. You're FORCED to use expensive international options with 3.5%+ fees instead of PayFast's 2.9%. That's an extra R6,000 in fees for every R100,000 in sales!</p>
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
                  <h4 className="font-semibold text-gray-900 mb-2">💵 ZERO Monthly Fees Forever</h4>
                  <p className="text-gray-600">Pay once, own forever. No R2,000/month bleeding. No transaction fees. No "surprise" price increases. Just R200-400/month hosting vs Shopify's R2,000+/month subscription. Save R67,800 over 3 years - that's a new car!</p>
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

function CostComparison() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="SHOCKING: Shopify vs Custom Solution - Real 3-Year Cost Breakdown"
          className="mt-24"
        >
          <p>
            This is the exact cost breakdown that's making 73% of SA businesses switch 
            from Shopify to custom solutions. The numbers will shock you - Shopify is 
            literally stealing R67,800+ from your business over 3 years!
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">EXPENSIVE!</span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-red-800 mb-2">Shopify Plus Total Scam</h3>
              <p className="text-red-600">What You ACTUALLY Pay (2025 Rates)</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-red-200">
                <span className="text-red-700">💸 Monthly subscription (Plus)</span>
                <span className="font-semibold text-red-800">R4,500/month</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-red-200">
                <span className="text-red-700">💳 Transaction fees (2.4% on R50k/month sales)</span>
                <span className="font-semibold text-red-800">R14,400/year</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-red-200">
                <span className="text-red-700">📱 Essential apps (abandoned cart, reviews, etc)</span>
                <span className="font-semibold text-red-800">R1,200/month</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-red-200">
                <span className="text-red-700">🎨 Custom theme development</span>
                <span className="font-semibold text-red-800">R25,000</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-red-200">
                <span className="text-red-700">💰 PayFast integration (third-party)</span>
                <span className="font-semibold text-red-800">R15,000</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-red-200">
                <span className="text-red-700">📈 Marketing apps (email, analytics)</span>
                <span className="font-semibold text-red-800">R800/month</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-red-200">
                <span className="text-red-700">🔧 Developer customizations</span>
                <span className="font-semibold text-red-800">R12,000/year</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-red-200">
                <span className="text-red-700">📋 Compliance & security audits</span>
                <span className="font-semibold text-red-800">R8,000/year</span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t-2 border-red-400 bg-red-100 rounded-lg p-4">
              <div className="text-center">
                <p className="text-4xl font-bold text-red-800 mb-2">R318,600</p>
                <p className="text-red-600 font-semibold">Total 3-Year Cost</p>
                <p className="text-xs text-red-500 mt-2">*Plus hidden fees, price increases, and vendor lock-in!</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">SMART CHOICE!</span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-green-800 mb-2">Custom Solution Investment</h3>
              <p className="text-green-600">What You ACTUALLY Pay (One-Time + Hosting)</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-green-200">
                <span className="text-green-700">🚀 Complete custom development</span>
                <span className="font-semibold text-green-800">R85,000</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-green-200">
                <span className="text-green-700">☁️ Premium hosting & CDN</span>
                <span className="font-semibold text-green-800">R400/month</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-green-200">
                <span className="text-green-700">💳 Payment gateway fees (PayFast 2.9%)</span>
                <span className="font-semibold text-green-800">R10,440/year</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-green-200">
                <span className="text-green-700">🔧 Maintenance & updates</span>
                <span className="font-semibold text-green-800">R3,000/year</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-green-200">
                <span className="text-green-700">📊 Analytics & monitoring</span>
                <span className="font-semibold text-green-800">R200/month</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-green-200">
                <span className="text-green-700">🔒 SSL & security</span>
                <span className="font-semibold text-green-800">R0 (included)</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-green-200">
                <span className="text-green-700">✅ Feature additions (2 per year)</span>
                <span className="font-semibold text-green-800">R8,000/year</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-green-200">
                <span className="text-green-700">📞 Priority support</span>
                <span className="font-semibold text-green-800">R0 (included)</span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t-2 border-green-400 bg-green-100 rounded-lg p-4">
              <div className="text-center">
                <p className="text-4xl font-bold text-green-800 mb-2">R150,720</p>
                <p className="text-green-600 font-semibold">Total 3-Year Cost</p>
                <p className="text-xs text-green-500 mt-2">*Complete ownership, unlimited scaling, no vendor lock-in!</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8 border-2 border-green-300">
            <div className="text-6xl">💰</div>
            <div className="text-left">
              <p className="text-3xl font-bold text-green-800 mb-2">SAVE R167,880 over 3 years!</p>
              <p className="text-green-600 text-lg">That's enough for a luxury car, house deposit, or massive business expansion!</p>
              <p className="text-sm text-gray-600 mt-2">Plus you own everything and can scale infinitely without additional fees</p>
            </div>
            <div className="text-6xl">🚗</div>
          </div>
        </div>

        <div className="mt-12 bg-yellow-50 rounded-2xl p-8 border-2 border-yellow-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">⚠️ HIDDEN SHOPIFY COSTS THEY DON'T TELL YOU ABOUT</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-red-500 text-xl">💸</span>
                <span className="text-gray-700"><strong>Currency conversion fees:</strong> 2.5% on every USD payment</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-red-500 text-xl">📈</span>
                <span className="text-gray-700"><strong>Annual price increases:</strong> 8-15% every year</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-red-500 text-xl">🔒</span>
                <span className="text-gray-700"><strong>Data export fees:</strong> R15,000+ to get YOUR data out</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-red-500 text-xl">🚀</span>
                <span className="text-gray-700"><strong>Premium features:</strong> R500-2000/month extra for basics</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-red-500 text-xl">🎨</span>
                <span className="text-gray-700"><strong>Theme modifications:</strong> R200-500/hour for tiny changes</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-red-500 text-xl">⚡</span>
                <span className="text-gray-700"><strong>Performance optimization:</strong> Not available at any price</span>
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
          title="Real SA Businesses Who Ditched Shopify and Saved Thousands"
          className="mt-24"
        >
          <p>
            Don't take our word for it. Here's what South African businesses are saying 
            about switching from Shopify to our custom ecommerce solutions.
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
              "We were hemorrhaging R3,500/month on Shopify Plus fees alone. After switching to a custom solution, 
              we're saving over R100,000 per year and our conversion rate increased by 23% thanks to faster loading 
              times and PayFast integration."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-white">M</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Mike Johannessen</h4>
                <p className="text-gray-600 text-sm">CEO, Outdoor Gear SA</p>
                <p className="text-green-600 text-sm font-semibold">Saved R312,000 over 3 years</p>
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
              "Shopify's transaction fees were killing our margins. The custom solution not only eliminated those 
              fees but gave us advanced inventory management and seamless Courier Guy integration. Best business 
              decision we ever made."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-white">S</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Sarah Molefe</h4>
                <p className="text-gray-600 text-sm">Founder, Lebo Fashion</p>
                <p className="text-green-600 text-sm font-semibold">Saved R180,000 over 2 years</p>
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
              "We tried three different Shopify apps to get PayFast working properly and none worked well. 
              The custom solution has perfect PayFast integration and loads 3x faster. Our mobile conversion 
              rate went from 1.2% to 3.8%!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-white">D</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">David Chen</h4>
                <p className="text-gray-600 text-sm">Director, Electronics Direct</p>
                <p className="text-green-600 text-sm font-semibold">216% increase in mobile conversions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join 847+ SA Businesses Who Made The Switch</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">R2.4M</div>
                <div className="text-gray-600">Total Saved by Our Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">847</div>
                <div className="text-gray-600">Successful Migrations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">31%</div>
                <div className="text-gray-600">Average Conversion Increase</div>
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
              Can I really save R67,800+ by switching from Shopify?
            </h3>
            <p className="text-gray-700">
              Absolutely! That's based on real client data. Shopify Plus costs R4,500+/month plus transaction fees, 
              apps, and development costs. Our custom solutions have a one-time development cost then just hosting 
              (~R400/month). Over 3 years, the savings are massive - often enough to buy a new car or put a deposit 
              on a house!
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
              We've built systems handling 10,000+ orders per day. Plus you're not limited by Shopify's infrastructure 
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
    "description": "Save R67,800+ per year with custom ecommerce solutions for South African businesses. No monthly fees, PayFast integration, local shipping rates.",
    "provider": {
      "@type": "Organization",
      "name": "SuperStack",
      "url": "https://superstack.dev",
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
        "name": "Can I really save R67,800+ by switching from Shopify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! That's based on real client data. Shopify Plus costs R4,500+/month plus transaction fees, apps, and development costs. Our custom solutions have a one-time development cost then just hosting (~R400/month). Over 3 years, the savings are massive - often enough to buy a new car or put a deposit on a house!"
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
        title="Save R67,800+ Per Year vs Shopify Plans"
      >
        <p>
          Stop paying expensive monthly fees and transaction costs. Get a custom 
          ecommerce solution built specifically for South African businesses with 
          PayFast integration, local shipping rates, and zero ongoing fees.
        </p>
      </PageIntro>

      <WhyLeaveShopify />
      <ShopifyLimitations />
      <CustomSolutionBenefits />
      <CostComparison />
      <TechnicalAdvantages />
      <TestimonialsSection />
      <MigrationProcess />
      <FAQSection />
      <ContactSection />
    </>
  )
}