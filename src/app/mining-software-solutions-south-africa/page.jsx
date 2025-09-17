import Image from 'next/image'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'

export const metadata = {
  title: 'Mining Software Solutions South Africa 2025 | Digital Mining Systems',
  description: 'Professional mining software development in SA. Fleet management, safety systems, production optimization. Specializing in mining technology solutions.',
  keywords: 'mining software south africa, mining management system, fleet management software, mine safety software, production optimization, mining ERP, geological software, mine planning software, equipment tracking, safety compliance software',
  openGraph: {
    title: 'Mining Software Solutions South Africa 2025 | Digital Mining Systems',
    description: 'Professional mining software development in SA. Specializing in fleet management, safety systems, and production optimization.',
    images: [
      {
        url: '/images/mining-software-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Mining Software Solutions South Africa',
      },
    ],
  },
}

function MiningOverview() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="🏔️ Mining Software Solutions for South Africa"
          className="mt-24"
        >
          <p>
            We specialize in developing comprehensive mining software solutions across South Africa. 
            Our systems help mining operations increase efficiency, improve safety protocols, 
            and reduce operational costs through modern technology.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">⛏️ Mine Operations Management</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>Production planning & optimization</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>Equipment fleet management</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>Real-time production monitoring</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>Shift management systems</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>Maintenance scheduling</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border border-red-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🚨 Safety & Compliance Systems</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Real-time safety monitoring</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Environmental compliance tracking</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Incident reporting systems</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Worker location tracking</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>DMR compliance automation</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Simple Web-Based Mining Tools</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in creating straightforward web applications for mining operations using 
              modern technologies like Next.js, React, and Python. Our focus is on practical, 
              easy-to-use solutions that solve real problems without unnecessary complexity.
            </p>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

function MiningSolutions() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="🔧 Complete Mining Software Solutions"
          className="mt-24"
        >
          <p>
            From underground gold mines to open-pit platinum operations, we build 
            comprehensive software ecosystems that integrate all aspects of mining 
            operations into unified, intelligent platforms.
          </p>
        </SectionIntro>

        <div className="mt-16 space-y-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🚛</span>Fleet & Equipment Management
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Real-Time Tracking</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• GPS tracking for all mining vehicles</li>
                  <li>• Equipment utilization analytics</li>
                  <li>• Fuel consumption monitoring</li>
                  <li>• Predictive maintenance alerts</li>
                  <li>• Driver behavior analysis</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Operational Insights</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Production efficiency metrics</li>
                  <li>• Cost per ton calculations</li>
                  <li>• Equipment downtime analysis</li>
                  <li>• Route optimization</li>
                  <li>• Performance benchmarking</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">⚡</span>Production Optimization Systems
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-3">Mine Planning</h4>
                <ul className="space-y-2 text-blue-700 text-sm">
                  <li>• 3D geological modeling</li>
                  <li>• Production scheduling</li>
                  <li>• Resource estimation</li>
                  <li>• Blast design optimization</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-semibold text-green-900 mb-3">Real-Time Operations</h4>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• Live production dashboards</li>
                  <li>• Quality control monitoring</li>
                  <li>• Throughput optimization</li>
                  <li>• Process automation</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-3">Analytics & Reporting</h4>
                <ul className="space-y-2 text-purple-700 text-sm">
                  <li>• Performance KPI tracking</li>
                  <li>• Financial reporting</li>
                  <li>• Compliance documentation</li>
                  <li>• Predictive analytics</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
            <h3 className="text-xl font-bold text-red-900 mb-4">🚨 Critical Mining Safety Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-900 mb-3">Worker Safety Systems:</h4>
                <ul className="space-y-2 text-red-700">
                  <li>🟢 Real-time worker location tracking</li>
                  <li>🟢 Emergency evacuation systems</li>
                  <li>🟢 Gas detection and monitoring</li>
                  <li>🟢 Collision avoidance systems</li>
                  <li>🟢 Fatigue monitoring for operators</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-900 mb-3">Compliance & Reporting:</h4>
                <ul className="space-y-2 text-red-700">
                  <li>🟢 DMR compliance automation</li>
                  <li>🟢 Environmental impact monitoring</li>
                  <li>🟢 Incident management workflows</li>
                  <li>🟢 Safety training tracking</li>
                  <li>🟢 Audit trail documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

function ClientSuccess() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="⭐ Mining Software Solutions"
          className="mt-24"
        >
          <p>
            Our mining software solutions focus on improving operational efficiency, 
            enhancing safety protocols, and ensuring regulatory compliance across 
            various types of mining operations.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-yellow-600 rounded-xl mx-auto flex items-center justify-center mb-4">
                <span className="text-2xl">🥇</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Gold Mining Solutions</h3>
              <div className="text-sm text-gray-600 mt-2">Operations Management</div>
            </div>
            <div className="space-y-4">
              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                <div className="text-2xl font-bold text-yellow-600">Fleet</div>
                <div className="text-yellow-700">Management Systems</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-2xl font-bold text-green-600">Safety</div>
                <div className="text-green-700">Monitoring Systems</div>
              </div>
              <p className="text-gray-600 text-sm">
                Comprehensive fleet management and production optimization systems 
                designed to improve operational efficiency and reduce costs.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gray-400 rounded-xl mx-auto flex items-center justify-center mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Platinum Mining Solutions</h3>
              <div className="text-sm text-gray-600 mt-2">Safety & Compliance</div>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">Real-time</div>
                <div className="text-blue-700">Safety Monitoring</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <div className="text-2xl font-bold text-purple-600">Equipment</div>
                <div className="text-purple-700">Maintenance Systems</div>
              </div>
              <p className="text-gray-600 text-sm">
                Advanced safety monitoring systems with predictive maintenance 
                capabilities to ensure operational continuity and worker safety.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-black rounded-xl mx-auto flex items-center justify-center mb-4">
                <span className="text-2xl text-white">⚫</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Coal Mining Solutions</h3>
              <div className="text-sm text-gray-600 mt-2">Environmental Compliance</div>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-2xl font-bold text-green-600">Automated</div>
                <div className="text-green-700">Compliance Reporting</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                <div className="text-2xl font-bold text-orange-600">Production</div>
                <div className="text-orange-700">Optimization</div>
              </div>
              <p className="text-gray-600 text-sm">
                Environmental compliance automation and production efficiency 
                systems designed for sustainable mining operations.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">�️ Mining Industry Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="font-bold text-gray-900">Gold Mining</div>
              <div className="text-sm text-gray-600">Operations Management</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="font-bold text-gray-900">Platinum Mining</div>
              <div className="text-sm text-gray-600">Safety Systems</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="font-bold text-gray-900">Coal Mining</div>
              <div className="text-sm text-gray-600">Environmental Compliance</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="font-bold text-gray-900">Diamond Mining</div>
              <div className="text-sm text-gray-600">Fleet Management</div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

function TechStack() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="🔧 Mining-Grade Technology Stack"
          className="mt-24"
        >
          <p>
            Our technology stack is built to handle the harsh conditions and demanding 
            requirements of mining operations. From underground connectivity to real-time 
            analytics, every component is enterprise-grade and mining-proven.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">📡</span>Connectivity & IoT
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Underground mesh networks</li>
              <li>• Satellite connectivity backup</li>
              <li>• Industrial IoT sensors</li>
              <li>• RFID tracking systems</li>
              <li>• Edge computing nodes</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">🏗️</span>Industrial Software
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• SCADA system integration</li>
              <li>• PLC communication protocols</li>
              <li>• Mining-specific ERP modules</li>
              <li>• CAD/CAM integration</li>
              <li>• Geological modeling APIs</li>
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">📊</span>Analytics & AI
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Machine learning for predictions</li>
              <li>• Computer vision for safety</li>
              <li>• Time series analysis</li>
              <li>• Anomaly detection algorithms</li>
              <li>• Optimization algorithms</li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-xl p-6 border border-red-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">🔒</span>Security & Compliance
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Industrial cybersecurity</li>
              <li>• DMR compliance modules</li>
              <li>• ISO 27001 implementation</li>
              <li>• Encrypted data transmission</li>
              <li>• Access control systems</li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">☁️</span>Cloud & Infrastructure
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Hybrid cloud architecture</li>
              <li>• Redundant data centers</li>
              <li>• Real-time data pipelines</li>
              <li>• Disaster recovery systems</li>
              <li>• Load balancing</li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">📱</span>Mobile & Rugged
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Rugged tablet applications</li>
              <li>• Offline-first architecture</li>
              <li>• Barcode/QR scanning</li>
              <li>• Voice-to-text for reporting</li>
              <li>• Wearable device integration</li>
            </ul>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

function Investment() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="💰 Mining Software Investment & ROI"
          className="mt-24"
        >
          <p>
            Mining software investments typically pay for themselves within 18-24 months 
            through efficiency gains, safety improvements, and cost reductions. Our solutions 
            are designed to deliver measurable ROI from day one.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Operations Dashboard</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">R1.8M - R3.2M</div>
              <div className="text-gray-600">6-9 months development</div>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Real-time production monitoring</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Equipment tracking system</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Safety compliance dashboard</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Mobile field applications</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Basic analytics & reporting</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg border-2 border-yellow-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-bold">MOST ROI</span>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Integrated Mine System</h3>
              <div className="text-3xl font-bold text-yellow-600 mb-2">R4.5M - R8.7M</div>
              <div className="text-gray-600">12-18 months development</div>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Complete fleet management</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Predictive maintenance system</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Advanced safety monitoring</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Production optimization AI</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>ERP system integration</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Mining Platform</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">R12M+</div>
              <div className="text-gray-600">18+ months development</div>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Multi-site management</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Advanced geological modeling</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Machine learning analytics</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Environmental monitoring</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Compliance automation</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl p-8 border border-green-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">📈 Typical ROI Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">3-6 Months</div>
              <div className="text-gray-600">Safety improvements visible</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">6-12 Months</div>
              <div className="text-gray-600">Efficiency gains realized</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">12-18 Months</div>
              <div className="text-gray-600">Full ROI achievement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">18+ Months</div>
              <div className="text-gray-600">Continued value creation</div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

export default function MiningSoftwarePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mining Software Solutions South Africa",
    "description": "Professional mining software development in SA. Fleet management, safety systems, production optimization solutions.",
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
      "availability": "https://schema.org/InStock"
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
        eyebrow="Mining Software Solutions South Africa" 
        title="Professional Mining Software Development"
      >
        <p>
          Develop comprehensive mining software solutions tailored for South African operations. 
          From fleet management to safety systems, we build technology that enhances 
          operational efficiency, safety, and compliance.
        </p>
      </PageIntro>

      <MiningOverview />
      <MiningSolutions />
      <ClientSuccess />
      <TechStack />
      <Investment />
      <RelatedIndustrySolutions />
      <ContactSection />
    </>
  )
}

// Related Industry Solutions Internal Linking Section
function RelatedIndustrySolutions() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="Specialized Solutions Across South African Industries"
          className="mt-24"
        >
          <p>
            Beyond mining, we deliver industry-specific software solutions across South Africa's key economic sectors. 
            Our expertise spans multiple industries, providing tailored technology solutions that drive business success.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-8 border border-emerald-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">FinTech Development</h3>
            <p className="text-gray-700 mb-6">
              Secure financial applications with SARB compliance. Banking platforms, payment systems, 
              and digital wallets built specifically for South African financial institutions.
            </p>
            <a 
              href="/fintech-development-south-africa" 
              className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
            >
              Explore FinTech Solutions →
            </a>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Government Digital Solutions</h3>
            <p className="text-gray-700 mb-6">
              Transform government services with modern digital platforms. Municipal systems, 
              citizen portals, and e-government solutions that improve service delivery.
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
              payment processing, and multi-store operations with local integration.
            </p>
            <a 
              href="/retail-pos-systems-south-africa" 
              className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-colors"
            >
              Discover Retail Solutions →
            </a>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl p-8 border border-orange-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">E-commerce Platforms</h3>
            <p className="text-gray-700 mb-6">
              Custom e-commerce solutions that outperform Shopify. Built for South African businesses 
              with PayFast integration, local shipping, and no monthly fees.
            </p>
            <a 
              href="/shopify-alternative-south-africa" 
              className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
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
              Professional React applications with modern UI/UX design. Enterprise dashboards, 
              web applications, and complex user interfaces built with cutting-edge technology.
            </p>
            <a 
              href="/react-developer-cape-town" 
              className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors"
            >
              Learn About React Development →
            </a>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-8 border border-slate-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Regional Development Services</h3>
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
              We provide specialized software development services across South Africa's major business centers. 
              Our regional expertise ensures solutions tailored to local business needs and market conditions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/web-development-cape-town" 
                className="inline-flex items-center px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-700 hover:text-slate-600 hover:border-slate-300 transition-colors"
              >
                Web Development Cape Town
              </a>
              <a 
                href="/software-development-johannesburg" 
                className="inline-flex items-center px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-700 hover:text-slate-600 hover:border-slate-300 transition-colors"
              >
                Software Development Johannesburg
              </a>
              <a 
                href="/web-development-durban" 
                className="inline-flex items-center px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-700 hover:text-slate-600 hover:border-slate-300 transition-colors"
              >
                Web Development Durban
              </a>
              <a 
                href="/software-development-pretoria" 
                className="inline-flex items-center px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-700 hover:text-slate-600 hover:border-slate-300 transition-colors"
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
