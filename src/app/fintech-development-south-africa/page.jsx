import Image from 'next/image'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'

export const metadata = {
  title: 'FinTech Development South Africa 2025 | Banking App Development | Professional Solutions',
  description: 'Professional FinTech development in South Africa. Build banking apps, payment systems, digital wallets with SARB compliance. Expert financial software development. PayFast, Ozow integration.',
  keywords: 'fintech development south africa, banking app development, payment system development, digital wallet app, SARB compliance, financial software development, mobile banking app, payment gateway integration, crypto wallet development, investment app development',
  openGraph: {
    title: 'FinTech Development South Africa 2025 | Banking App Development',
    description: 'Professional FinTech development in South Africa. Expert financial software development with SARB compliance.',
    images: [
      {
        url: '/images/fintech-development-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'FinTech Development South Africa',
      },
    ],
  },
}

function FinTechOverview() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="Professional FinTech Development in South Africa"
          className="mt-24"
        >
          <p>
            We deliver professional financial technology solutions for South African banks, 
            payment processors, and fintech startups. Our expertise spans from traditional banking 
            apps to cutting-edge crypto wallets and investment platforms.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🏦 Traditional Banking Solutions</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Core banking system modernization</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Mobile banking applications</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Internet banking platforms</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>ATM network integration</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>SARB compliance systems</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">💳 Payment & Digital Wallets</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>PayFast & Ozow integration</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Digital wallet applications</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>P2P payment systems</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Cryptocurrency wallets</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>QR code payment solutions</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why South African Banks Choose Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
                <div className="text-gray-600">FinTech Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime Achievement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">6-12</div>
                <div className="text-gray-600">Months Development</div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

function ComplianceAndSecurity() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="🔒 SARB Compliance & Bank-Grade Security"
          className="mt-24"
        >
          <p>
            Financial applications require the highest security standards. We implement 
            SARB-compliant solutions with enterprise-grade security that meets all 
            South African financial regulations.
          </p>
        </SectionIntro>

        <div className="mt-16 space-y-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-3">🛡️</span>Security & Compliance Standards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Security Implementations</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• End-to-end encryption (AES-256)</li>
                  <li>• Multi-factor authentication (MFA)</li>
                  <li>• Biometric security integration</li>
                  <li>• PCI DSS Level 1 compliance</li>
                  <li>• Real-time fraud detection</li>
                  <li>• Secure API development</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">SARB Compliance</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Position Paper 1/2022 compliance</li>
                  <li>• FICA verification systems</li>
                  <li>• AML/CFT implementations</li>
                  <li>• Know Your Customer (KYC)</li>
                  <li>• Transaction monitoring</li>
                  <li>• Regulatory reporting automation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
            <h3 className="text-xl font-bold text-red-900 mb-4">⚠️ Common FinTech Development Mistakes in SA</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-900 mb-3">What Others Get Wrong:</h4>
                <ul className="space-y-2 text-red-700">
                  <li>❌ Ignoring SARB regulations until launch</li>
                  <li>❌ Poor PayFast/Ozow integration</li>
                  <li>❌ Inadequate security testing</li>
                  <li>❌ No scalability planning</li>
                  <li>❌ Generic overseas solutions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Our Approach:</h4>
                <ul className="space-y-2 text-green-700">
                  <li>✅ SARB compliance from day one</li>
                  <li>✅ Native SA payment integration</li>
                  <li>✅ Comprehensive security audits</li>
                  <li>✅ Built for African scale</li>
                  <li>✅ Local market expertise</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

function SuccessStories() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="🏆 FinTech Development Capabilities"
          className="mt-24"
        >
          <p>
            Professional financial technology solutions designed for South African 
            banking institutions, payment processors, and fintech startups. 
            Our expertise covers the full spectrum of financial software development.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-xl mx-auto flex items-center justify-center mb-4">
                <span className="text-2xl">🏦</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Banking App Development</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-lg font-bold text-green-600">Mobile Banking</div>
                <div className="text-green-700">iOS & Android native apps</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="text-lg font-bold text-blue-600">SARB Compliant</div>
                <div className="text-blue-700">Regulatory compliance built-in</div>
              </div>
              <p className="text-gray-600 text-sm">
                We develop comprehensive mobile banking applications with full 
                SARB compliance, biometric authentication, and real-time transaction processing.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-600 rounded-xl mx-auto flex items-center justify-center mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Payment Gateway Solutions</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-lg font-bold text-green-600">PayFast Integration</div>
                <div className="text-green-700">Native SA payment processing</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="text-lg font-bold text-blue-600">Ozow Support</div>
                <div className="text-blue-700">Instant bank transfers</div>
              </div>
              <p className="text-gray-600 text-sm">
                Professional payment gateway integration with PayFast, Ozow, and other 
                South African payment providers for secure, fast transactions.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-600 rounded-xl mx-auto flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Digital Wallet Development</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-lg font-bold text-green-600">Crypto Support</div>
                <div className="text-green-700">Bitcoin & altcoin wallets</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="text-lg font-bold text-blue-600">Multi-Currency</div>
                <div className="text-blue-700">ZAR, USD, EUR support</div>
              </div>
              <p className="text-gray-600 text-sm">
                Custom digital wallet applications with multi-currency support, 
                crypto integration, and enterprise-grade security features.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

function TechnologyStack() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="⚙️ Enterprise FinTech Technology Stack"
          className="mt-24"
        >
          <p>
            We use proven, enterprise-grade technologies specifically chosen for 
            financial applications. Every component is selected for security, 
            scalability, and regulatory compliance.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">🔐</span>Security & Compliance
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• HashiCorp Vault for secrets</li>
              <li>• Auth0 for identity management</li>
              <li>• AWS WAF for protection</li>
              <li>• Cloudflare for DDoS defense</li>
              <li>• SonarQube for code security</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">☁️</span>Cloud Infrastructure
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• AWS/Azure multi-region</li>
              <li>• Kubernetes orchestration</li>
              <li>• Redis for caching</li>
              <li>• PostgreSQL clustering</li>
              <li>• Elasticsearch logging</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">💻</span>Application Development
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• React Native for mobile</li>
              <li>• Node.js microservices</li>
              <li>• GraphQL APIs</li>
              <li>• TypeScript throughout</li>
              <li>• Jest & Cypress testing</li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">🔌</span>Payment Integration
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• PayFast merchant API</li>
              <li>• Ozow instant payments</li>
              <li>• Peach Payments gateway</li>
              <li>• SWIFT messaging</li>
              <li>• Crypto wallet APIs</li>
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">📊</span>Analytics & Monitoring
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Real-time fraud detection</li>
              <li>• Prometheus monitoring</li>
              <li>• Grafana dashboards</li>
              <li>• Machine learning alerts</li>
              <li>• Compliance reporting</li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">🔄</span>DevOps & Deployment
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• GitLab CI/CD pipelines</li>
              <li>• Docker containerization</li>
              <li>• Terraform infrastructure</li>
              <li>• Automated testing</li>
              <li>• Blue-green deployments</li>
            </ul>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

function PricingAndTimeline() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="💰 FinTech Development Investment & Timeline"
          className="mt-24"
        >
          <p>
            Transparent pricing for different scales of FinTech projects. Every project 
            includes SARB compliance, security audits, and 12 months of support.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Wallet MVP</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">R850K - R1.2M</div>
              <div className="text-gray-600">4-6 months development</div>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Mobile app (iOS & Android)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Basic P2P transfers</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>PayFast integration</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>KYC verification</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>SARB compliance</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Admin dashboard</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-lg border-2 border-purple-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">MOST POPULAR</span>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Banking Platform</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">R2.1M - R3.8M</div>
              <div className="text-gray-600">8-12 months development</div>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Full mobile & web platform</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Core banking features</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Multi-payment gateway</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Investment products</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Advanced analytics</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>24/7 support system</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Solution</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">R5M+</div>
              <div className="text-gray-600">12+ months development</div>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Multi-tenant architecture</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>White-label solutions</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>API marketplace</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>AI fraud detection</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Regulatory reporting</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Dedicated support team</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">🚀 What's Included in Every FinTech Project</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl mb-2">🔒</div>
              <h4 className="font-semibold text-gray-900 mb-2">Security First</h4>
              <p className="text-gray-600 text-sm">Bank-grade security, penetration testing, SARB compliance validation</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📱</div>
              <h4 className="font-semibold text-gray-900 mb-2">Native Mobile Apps</h4>
              <p className="text-gray-600 text-sm">iOS and Android apps with biometric authentication and offline capabilities</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🛠️</div>
              <h4 className="font-semibold text-gray-900 mb-2">12 Months Support</h4>
              <p className="text-gray-600 text-sm">Free bug fixes, security updates, and technical support for one year</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

export default function FinTechDevelopmentPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "FinTech Development South Africa",
    "description": "Leading FinTech development in South Africa. Build banking apps, payment systems, digital wallets with SARB compliance. 127+ successful financial apps delivered.",
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
      "price": "2400000",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
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
        eyebrow="FinTech Development South Africa" 
        title="Banking & Payment App Development | SARB Compliant"
      >
        <p>
          Build secure, scalable financial technology solutions for the South African market. 
          From digital wallets to full banking platforms, we deliver SARB-compliant FinTech 
          applications that drive business growth and customer satisfaction.
        </p>
      </PageIntro>

      <FinTechOverview />
      <ComplianceAndSecurity />
      <SuccessStories />
      <TechnologyStack />
      <PricingAndTimeline />
      <RelatedTechSolutions />
      <ContactSection />
    </>
  )
}

// Related Technology Solutions Internal Linking Section
function RelatedTechSolutions() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="Comprehensive Technology Solutions for South African Businesses"
          className="mt-24"
        >
          <p>
            Beyond FinTech, we deliver cutting-edge technology solutions across all major industries in South Africa. 
            Discover how our expertise can transform your business operations and drive growth.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl p-8 border border-amber-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Mining Software Solutions</h3>
            <p className="text-gray-700 mb-6">
              Specialized software for South Africa's mining industry. Safety management systems, 
              operations tracking, and compliance platforms built for mining operations.
            </p>
            <a 
              href="/mining-software-solutions-south-africa" 
              className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors"
            >
              Explore Mining Solutions →
            </a>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Government Digital Transformation</h3>
            <p className="text-gray-700 mb-6">
              Modern digital platforms for government services. Municipal systems, citizen portals, 
              and e-government solutions that improve service delivery across South Africa.
            </p>
            <a 
              href="/government-digital-transformation-south-africa" 
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View Government Solutions →
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
              Complete point-of-sale solutions for South African retailers. Inventory management, 
              payment processing, and multi-store operations with PayFast integration.
            </p>
            <a 
              href="/retail-pos-systems-south-africa" 
              className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-colors"
            >
              Discover POS Solutions →
            </a>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 border border-green-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">E-commerce Development</h3>
            <p className="text-gray-700 mb-6">
              Custom e-commerce platforms that outperform Shopify. Built for South African businesses 
              with local payment integration and no monthly fees.
            </p>
            <a 
              href="/shopify-alternative-south-africa" 
              className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
            >
              See E-commerce Solutions →
            </a>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8 border border-purple-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile App Development</h3>
            <p className="text-gray-700 mb-6">
              Native iOS and Android applications for South African businesses. From concept to 
              app store deployment with ongoing support and maintenance.
            </p>
            <a 
              href="/app-development-south-africa" 
              className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
            >
              Explore App Development →
            </a>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-2xl p-8 border border-teal-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">React Development Cape Town</h3>
            <p className="text-gray-700 mb-6">
              Professional React applications with modern UI/UX design. From single-page applications 
              to complex enterprise dashboards built with the latest React technologies.
            </p>
            <a 
              href="/react-developer-cape-town" 
              className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors"
            >
              Learn About React Development →
            </a>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Looking for Development Services in Your City?</h3>
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
              We provide comprehensive development services across all major South African cities. 
              Our local expertise ensures solutions that understand the unique needs of South African businesses.
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