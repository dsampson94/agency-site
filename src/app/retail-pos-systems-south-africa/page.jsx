import Image from 'next/image'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'

export const metadata = {
  title: 'Retail POS Systems South Africa 2025 | Professional Retail Software Solutions',
  description: 'Professional retail POS system development in SA. Inventory management, loyalty programs, multi-store operations. Expert retail software development. PayFast, Ozow, Snapscan integration.',
  keywords: 'retail pos system south africa, point of sale software, inventory management system, retail software south africa, restaurant pos system, retail management software, multi-store pos system, loyalty program software',
  openGraph: {
    title: 'Retail POS Systems South Africa 2025 | Professional Solutions',
    description: 'Professional retail POS system development in SA. Expert retail software development for independent stores and chains.',
    images: [
      {
        url: '/images/retail-pos-systems-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Retail POS Systems South Africa',
      },
    ],
  },
}

function RetailPOSOverview() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="🛒 Professional Retail POS Solutions"
          className="mt-24"
        >
          <p>
            We develop professional retail POS systems for South African businesses, from 
            independent stores to retail chains. Our solutions integrate seamlessly 
            with South African payment systems and provide real-time insights that drive 
            business growth.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🏪 Independent & Chain Stores</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Single & multi-location POS systems</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Real-time inventory management</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Customer loyalty programs</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Staff management & scheduling</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Financial reporting & analytics</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🍴 Restaurants & Hospitality</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Table management & ordering</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Kitchen display systems (KDS)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Menu engineering & pricing</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Delivery & takeaway integration</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Staff tip management</li>
            </ul>
          </div>
        </div>


      </FadeIn>
    </Container>
  )
}

function PosFeatures() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="⚡ Complete Retail POS Solutions"
          className="mt-24"
        >
          <p>
            Our POS systems go beyond simple transactions. We build comprehensive retail 
            management platforms that handle everything from inventory to customer 
            relationships, all optimized for the South African retail environment.
          </p>
        </SectionIntro>

        <div className="mt-16 space-y-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">💳</span>Payment Processing & Integration
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">South African Payment Gateways</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• PayFast credit/debit card processing</li>
                  <li>• Ozow instant EFT payments</li>
                  <li>• Snapscan QR code payments</li>
                  <li>• Zapper mobile payments</li>
                  <li>• Traditional cash handling</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Advanced Payment Features</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Split payments & partial refunds</li>
                  <li>• Loyalty point redemption</li>
                  <li>• Gift card & voucher processing</li>
                  <li>• Layaway & installment plans</li>
                  <li>• Corporate account billing</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">📦</span>Inventory & Stock Management
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-3">Real-Time Tracking</h4>
                <ul className="space-y-2 text-blue-700 text-sm">
                  <li>• Live inventory levels</li>
                  <li>• Automatic reorder points</li>
                  <li>• Barcode scanning</li>
                  <li>• Supplier integration</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-semibold text-green-900 mb-3">Multi-Location Support</h4>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• Cross-store transfers</li>
                  <li>• Centralized purchasing</li>
                  <li>• Store-specific pricing</li>
                  <li>• Regional reporting</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-3">Advanced Analytics</h4>
                <ul className="space-y-2 text-purple-700 text-sm">
                  <li>• Sales trend analysis</li>
                  <li>• Profitability reports</li>
                  <li>• Dead stock identification</li>
                  <li>• Seasonal planning</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
            <h3 className="text-xl font-bold text-yellow-900 mb-4">🏆 Why Retailers Choose Our POS Over Competitors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-900 mb-3">What Others Can't Do:</h4>
                <ul className="space-y-2 text-yellow-700">
                  <li>❌ Poor South African payment integration</li>
                  <li>❌ Expensive monthly fees (R2,500+/month)</li>
                  <li>❌ No offline functionality</li>
                  <li>❌ Limited customization options</li>
                  <li>❌ Weak multi-store management</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Our Advantage:</h4>
                <ul className="space-y-2 text-green-700">
                  <li>✅ Native SA payment gateway integration</li>
                  <li>✅ Low-cost ownership model</li>
                  <li>✅ Works offline with sync capability</li>
                  <li>✅ Fully customizable to your business</li>
                  <li>✅ Advanced multi-location features</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

function RetailCapabilities() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="🎯 Retail POS Capabilities"
          className="mt-24"
        >
          <p>
            Our POS solutions are designed to handle the diverse needs of South African retailers, 
            from small family businesses to growing retail chains across all sectors.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-xl mx-auto flex items-center justify-center mb-4">
                <span className="text-2xl">🛍️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Fashion & Apparel</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="text-sm font-semibold text-blue-700">Size & Color Variants</div>
                <div className="text-blue-600 text-xs">Complete inventory tracking by size, color, and style</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-sm font-semibold text-green-700">Multi-Store Management</div>
                <div className="text-green-600 text-xs">Real-time stock transfers between locations</div>
              </div>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Barcode scanning for quick processing</li>
                <li>• Customer loyalty program integration</li>
                <li>• Seasonal discount management</li>
                <li>• Staff commission tracking</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-600 rounded-xl mx-auto flex items-center justify-center mb-4">
                <span className="text-2xl">🍕</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Food & Restaurants</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-sm font-semibold text-green-700">Kitchen Display System</div>
                <div className="text-green-600 text-xs">Digital order management for kitchen staff</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <div className="text-sm font-semibold text-purple-700">Table Management</div>
                <div className="text-purple-600 text-xs">Track orders by table and split bills easily</div>
              </div>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Menu modification handling</li>
                <li>• Split payment processing</li>
                <li>• Ingredient inventory tracking</li>
                <li>• Delivery integration ready</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-orange-600 rounded-xl mx-auto flex items-center justify-center mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Grocery & Convenience</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                <div className="text-sm font-semibold text-orange-700">Fast Checkout Process</div>
                <div className="text-orange-600 text-xs">Optimized for high-volume transactions</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="text-sm font-semibold text-blue-700">Loyalty Programs</div>
                <div className="text-blue-600 text-xs">Points, discounts, and member management</div>
              </div>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Age verification for restricted items</li> 
                <li>• EFT and card payment support</li>
                <li>• Promotions and special offers</li>
                <li>• Real-time stock level alerts</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">🏅 Retail Sector Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="font-bold text-gray-900">Grocery Stores</div>
              <div className="text-sm text-gray-600">POS & Inventory Systems</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="font-bold text-gray-900">Convenience Stores</div>
              <div className="text-sm text-gray-600">Multi-location Management</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="font-bold text-gray-900">Fashion Retail</div>
              <div className="text-sm text-gray-600">Size & Color Variants</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="font-bold text-gray-900">Pharmacy Systems</div>
              <div className="text-sm text-gray-600">Prescription Management</div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

function POSTechStack() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="🔧 Enterprise Retail Technology Stack"
          className="mt-24"
        >
          <p>
            Our POS systems are built with enterprise-grade technology that can handle 
            high-volume transactions, multiple locations, and complex retail operations 
            while maintaining speed and reliability.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">💻</span>Frontend & UX
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• React Native for mobile POS</li>
              <li>• Progressive Web App (PWA)</li>
              <li>• Touch-optimized interfaces</li>
              <li>• Offline-first architecture</li>
              <li>• Barcode scanner integration</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">⚡</span>Backend & Database
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Node.js real-time processing</li>
              <li>• PostgreSQL with replication</li>
              <li>• Redis for session management</li>
              <li>• Real-time websocket updates</li>
              <li>• Automated backup systems</li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">🔌</span>Payment Integration
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• PayFast secure tokenization</li>
              <li>• Ozow instant EFT API</li>
              <li>• Snapscan merchant API</li>
              <li>• Card reader hardware integration</li>
              <li>• PCI DSS compliance</li>
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">☁️</span>Cloud & Infrastructure
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Multi-region cloud deployment</li>
              <li>• Load balancing for peak times</li>
              <li>• Auto-scaling infrastructure</li>
              <li>• 99.9% uptime guarantee</li>
              <li>• Disaster recovery systems</li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">📊</span>Analytics & Reporting
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Real-time sales dashboards</li>
              <li>• Inventory analytics</li>
              <li>• Customer behavior insights</li>
              <li>• Financial reporting automation</li>
              <li>• Machine learning recommendations</li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-xl p-6 border border-red-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">🔒</span>Security & Compliance
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• End-to-end encryption</li>
              <li>• Role-based access control</li>
              <li>• Audit trails for all transactions</li>
              <li>• POPI Act compliance</li>
              <li>• Regular security audits</li>
            </ul>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

export default function RetailPOSPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Retail POS Systems South Africa",
    "description": "Leading retail POS system development in SA. Inventory management, loyalty programs, multi-store operations. 156+ successful retail implementations.",
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
      "price": "370000",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156",
      "bestRating": "5"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      <PageIntro 
        eyebrow="Retail POS Systems South Africa" 
        title="Point of Sale Solutions | R3.7M Average ROI"
      >
        <p>
          Transform your retail operations with cutting-edge POS systems built for South African 
          businesses. From single stores to multi-location chains, our solutions integrate 
          seamlessly with local payment gateways and drive measurable business growth.
        </p>
      </PageIntro>

      <RetailPOSOverview />
      <PosFeatures />
      <RetailCapabilities />
      <POSTechStack />

      <ContactSection />
    </>
  )
}
