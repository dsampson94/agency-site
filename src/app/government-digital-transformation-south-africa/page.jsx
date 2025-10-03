import Image from 'next/image'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'

export const metadata = {
  title: 'Government Digital Transformation South Africa 2025 | Professional Government Solutions',
  description: 'Professional government digitization services in SA. Municipal systems, citizen services, eGovernment platforms. Expert government software development. POPI Act compliant.',
  keywords: 'government digital transformation south africa, egovernment development, municipal software systems, citizen services platform, government app development, digital government solutions, POPI act compliance, SITA approved software',
  openGraph: {
    title: 'Government Digital Transformation South Africa 2025 | Professional Solutions',
    description: 'Professional government digitization services in SA. Municipal systems, citizen services platforms, expert government software development.',
    images: [
      {
        url: '/images/government-digital-transformation.jpg',
        width: 1200,
        height: 630,
        alt: 'Government Digital Transformation South Africa',
      },
    ],
  },
}

function GovernmentOverview() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="🏛️ Professional Government Digital Solutions"
          className="mt-24"
        >
          <p>
            We deliver professional digital transformation solutions for South African 
            government entities. From municipal service delivery to citizen platforms, 
            our solutions improve efficiency and citizen satisfaction across all levels of government.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🏢 Municipal & Local Government</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Municipal billing & revenue systems</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Service delivery platforms</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Property valuation systems</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Traffic fine management</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Permit & licensing systems</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🌍 Provincial & National Systems</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Citizen service portals</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Healthcare management systems</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Education administration platforms</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Social grant distribution systems</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Tax & revenue collection platforms</li>
            </ul>
          </div>
        </div>


      </FadeIn>
    </Container>
  )
}

function DigitalGovernmentSolutions() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="🚀 Complete eGovernment Solutions"
          className="mt-24"
        >
          <p>
            From citizen-facing portals to internal government systems, we build 
            comprehensive digital government ecosystems that streamline operations, 
            improve transparency, and enhance citizen satisfaction.
          </p>
        </SectionIntro>

        <div className="mt-16 space-y-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">👥</span>Citizen Service Platforms
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Online Service Delivery</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Birth & death certificate applications</li>
                  <li>• Business license applications</li>
                  <li>• Property rate payments</li>
                  <li>• Municipal service requests</li>
                  <li>• Document uploads & verification</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Citizen Engagement</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Public participation platforms</li>
                  <li>• Community feedback systems</li>
                  <li>• Service delivery monitoring</li>
                  <li>• Multi-language support</li>
                  <li>• SMS & email notifications</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🏛️</span>Internal Government Systems
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-3">Financial Management</h4>
                <ul className="space-y-2 text-blue-700 text-sm">
                  <li>• Municipal billing systems</li>
                  <li>• Budget planning & tracking</li>
                  <li>• Revenue collection platforms</li>
                  <li>• Financial reporting dashboards</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-semibold text-green-900 mb-3">Human Resources</h4>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• Employee management systems</li>
                  <li>• Payroll automation</li>
                  <li>• Performance management</li>
                  <li>• Training & development tracking</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-3">Asset Management</h4>
                <ul className="space-y-2 text-purple-700 text-sm">
                  <li>• Asset tracking & maintenance</li>
                  <li>• Vehicle fleet management</li>
                  <li>• Property & facilities management</li>
                  <li>• Procurement systems</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
            <h3 className="text-xl font-bold text-green-900 mb-4">✅ POPI Act & Government Compliance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Data Protection & Privacy:</h4>
                <ul className="space-y-2 text-green-700">
                  <li>🟢 POPI Act full compliance implementation</li>
                  <li>🟢 Citizen data encryption & protection</li>
                  <li>🟢 Audit trails for all data access</li>
                  <li>🟢 Consent management systems</li>
                  <li>🟢 Data breach notification systems</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Government Standards:</h4>
                <ul className="space-y-2 text-green-700">
                  <li>🟢 SITA guidelines compliance</li>
                  <li>🟢 National Treasury SCM compliance</li>
                  <li>🟢 Government security standards</li>
                  <li>🟢 Accessibility standards (WCAG 2.1)</li>
                  <li>🟢 Official language support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

function GovernmentCapabilities() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="🏆 Government Digital Capabilities"
          className="mt-24"
        >
          <p>
            We specialize in government digital transformation across all levels of South African 
            government. Our solutions are designed to improve service delivery, reduce operational 
            costs, and increase citizen satisfaction.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-xl mx-auto flex items-center justify-center mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Municipal Systems</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="text-sm font-semibold text-blue-700">Citizen Service Portals</div>
                <div className="text-blue-600 text-xs">Online applications, payments, and service requests</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-sm font-semibold text-green-700">Municipal Billing Systems</div>
                <div className="text-green-600 text-xs">Rates, utilities, and revenue management</div>
              </div>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Property management and valuations</li>
                <li>• Prepaid utility token systems</li>
                <li>• Service request management</li>
                <li>• Municipal asset tracking</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-600 rounded-xl mx-auto flex items-center justify-center mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Provincial Health Systems</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-sm font-semibold text-green-700">Patient Management</div>
                <div className="text-green-600 text-xs">Electronic health records and patient tracking</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <div className="text-sm font-semibold text-purple-700">Hospital Information Systems</div>
                <div className="text-purple-600 text-xs">Integrated healthcare facility management</div>
              </div>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Medical appointment scheduling</li>
                <li>• Pharmaceutical inventory management</li>
                <li>• Medical equipment tracking</li>
                <li>• Health data analytics</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-orange-600 rounded-xl mx-auto flex items-center justify-center mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Education Management</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                <div className="text-sm font-semibold text-orange-700">Student Information Systems</div>
                <div className="text-orange-600 text-xs">Enrollment, grades, and academic records</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="text-sm font-semibold text-blue-700">Learning Management</div>
                <div className="text-blue-600 text-xs">Digital classrooms and online assessments</div>
              </div>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Teacher resource management</li>
                <li>• Parent-teacher communication portals</li>
                <li>• School administration systems</li>
                <li>• Educational analytics and reporting</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">🌟 Government Sector Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="font-bold text-gray-900">Municipal Services</div>
              <div className="text-sm text-gray-600">Billing & Revenue Systems</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="font-bold text-gray-900">Provincial Government</div>
              <div className="text-sm text-gray-600">Health & Education</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="font-bold text-gray-900">Revenue Services</div>
              <div className="text-sm text-gray-600">Tax Administration</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="font-bold text-gray-900">National Departments</div>
              <div className="text-sm text-gray-600">Citizen Services</div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

function GovTechStack() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="🔧 Government-Grade Technology Stack"
          className="mt-24"
        >
          <p>
            Our technology stack meets the stringent security, compliance, and scalability 
            requirements of government systems. Every component is chosen for reliability, 
            security, and long-term maintainability.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-red-50 rounded-xl p-6 border border-red-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">🔒</span>Security & Compliance
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• POPI Act compliance framework</li>
              <li>• Multi-factor authentication</li>
              <li>• End-to-end encryption</li>
              <li>• Role-based access control</li>
              <li>• Audit logging & monitoring</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">☁️</span>Cloud Infrastructure
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Government cloud (GovCloud)</li>
              <li>• On-premises hybrid options</li>
              <li>• Disaster recovery systems</li>
              <li>• Load balancing & scaling</li>
              <li>• Data sovereignty compliance</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">🌐</span>Citizen Interfaces
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Progressive web applications</li>
              <li>• Mobile-first responsive design</li>
              <li>• Accessibility compliance (WCAG)</li>
              <li>• Multi-language support</li>
              <li>• Offline capability</li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">🔌</span>Integration Layer
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Government system APIs</li>
              <li>• SARS eFiling integration</li>
              <li>• Home Affairs verification</li>
              <li>• Banking & payment gateways</li>
              <li>• Third-party service connectors</li>
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">📊</span>Analytics & Reporting
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Government KPI dashboards</li>
              <li>• Citizen service analytics</li>
              <li>• Performance monitoring</li>
              <li>• Compliance reporting automation</li>
              <li>• Real-time service metrics</li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">⚙️</span>Workflow & Automation
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Business process automation</li>
              <li>• Document workflow systems</li>
              <li>• Approval routing engines</li>
              <li>• Notification systems</li>
              <li>• Task scheduling & management</li>
            </ul>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

export default function GovernmentDigitalPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Government Digital Transformation South Africa",
    "description": "Leading government digitization specialists in SA. Municipal systems, citizen services, eGovernment platforms. Expert solutions for digital transformation. POPI Act compliant.",
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
      "price": "47000000",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "34",
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
        eyebrow="Government Digital Transformation South Africa" 
        title="Simple eGovernment Web Solutions"
      >
        <p>
          We create straightforward web-based solutions for government departments using 
          modern technologies like Next.js, React, and Python. Our focus is on practical, 
          user-friendly applications that improve citizen services without unnecessary complexity.
        </p>
      </PageIntro>

      <GovernmentOverview />
      <DigitalGovernmentSolutions />
      <GovernmentCapabilities />
      <GovTechStack />

      <ContactSection />
    </>
  )
}
