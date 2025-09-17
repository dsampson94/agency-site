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
      <ContactSection />
    </>
  )
}