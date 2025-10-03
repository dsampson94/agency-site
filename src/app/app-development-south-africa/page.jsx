import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'

export const metadata = {
  title: 'App Development South Africa | iOS Android App Developers',
  description: 'Professional mobile app development in South Africa. iOS and Android apps, React Native development, app store optimization. From R35,000 with guaranteed app store approval.',
  keywords: 'app development south africa, mobile app developers, ios app development, android app development, react native developers south africa',
  openGraph: {
    title: 'App Development South Africa | iOS Android App Developers',
    description: 'Professional mobile app development in South Africa. iOS and Android apps from R35,000 with guaranteed app store approval.',
    url: 'https://www.superstack.co.za/app-development-south-africa',
    type: 'website',
    locale: 'en_ZA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App Development South Africa | iOS Android App Developers',
    description: 'Professional mobile app development in South Africa. iOS and Android apps from R35,000 with guaranteed app store approval.',
  },
  alternates: {
    canonical: 'https://www.superstack.co.za/app-development-south-africa',
  },
}

function AppTypes() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="Mobile Apps That Drive Business Results in South Africa"
          className="mt-24"
        >
          <p>
            From startup MVPs to enterprise solutions, we build mobile apps that South African 
            users love and businesses profit from. Native iOS, Android, and cross-platform 
            development with guaranteed app store approval.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Business & Productivity Apps</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Custom business apps for inventory management, field services, employee tracking, 
                CRM systems, and workflow automation. Boost productivity and streamline operations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Real-time data synchronization</li>
                <li>• Offline functionality with sync</li>
                <li>• Custom reporting and analytics</li>
                <li>• Integration with existing systems</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">E-commerce & Retail Apps</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Shopping apps with South African payment integration (PayFast, Ozow), delivery 
                tracking, loyalty programs, and push notifications for increased sales.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• PayFast and Ozow integration</li>
                <li>• Inventory management system</li>
                <li>• Push notifications for promotions</li>
                <li>• Customer loyalty programs</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-8 border border-purple-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Social & Community Apps</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Dating apps, social networks, community platforms, messaging apps, and content 
                sharing platforms built for the South African market and culture.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Real-time messaging and chat</li>
                <li>• User profiles and matching</li>
                <li>• Content sharing and feeds</li>
                <li>• Community moderation tools</li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Fintech & Payment Apps</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Banking apps, payment solutions, investment platforms, cryptocurrency wallets, 
                and financial management tools with South African banking integration.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Secure payment processing</li>
                <li>• Banking API integrations</li>
                <li>• Biometric authentication</li>
                <li>• Transaction history and analytics</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Health & Wellness Apps</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Telemedicine apps, fitness trackers, mental health platforms, medical record 
                management, and wellness apps compliant with South African health regulations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• POPI Act compliance for health data</li>
                <li>• Appointment scheduling system</li>
                <li>• Secure patient record management</li>
                <li>• Telemedicine video consultations</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8 border border-pink-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Media & Entertainment Apps</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Streaming apps, podcast platforms, music apps, video sharing, gaming apps, 
                and content delivery platforms for South African media companies.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Video streaming and playback</li>
                <li>• Content management system</li>
                <li>• User subscriptions and payments</li>
                <li>• Multi-device synchronization</li>
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

function DevelopmentProcess() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="Our App Development Process: From Idea to App Store"
          className="mt-24"
        >
          <p>
            We follow a proven process that gets your app from concept to published in the 
            App Store and Google Play within 8-16 weeks, with guaranteed approval and 
            ongoing support for updates and growth.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Discovery & Strategy</h3>
                <p className="text-gray-600">
                  Deep dive into your business goals, target users, and app requirements. 
                  Market research, competitor analysis, and technical feasibility assessment.
                </p>
                <div className="mt-3 text-sm text-gray-500">Duration: 1-2 weeks</div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">UI/UX Design</h3>
                <p className="text-gray-600">
                  Create wireframes, user flows, and beautiful app designs that follow 
                  iOS and Android guidelines. Interactive prototypes for user testing.
                </p>
                <div className="mt-3 text-sm text-gray-500">Duration: 2-3 weeks</div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">MVP Development</h3>
                <p className="text-gray-600">
                  Build core features first to validate your app concept. Native iOS/Android 
                  or React Native development with focus on performance and user experience.
                </p>
                <div className="mt-3 text-sm text-gray-500">Duration: 4-8 weeks</div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">4</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Testing & QA</h3>
                <p className="text-gray-600">
                  Comprehensive testing on real devices, performance optimization, 
                  security testing, and user acceptance testing with your target audience.
                </p>
                <div className="mt-3 text-sm text-gray-500">Duration: 1-2 weeks</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">5</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">App Store Submission</h3>
                <p className="text-gray-600">
                  Handle all App Store and Google Play submission requirements. App Store 
                  Optimization (ASO), screenshots, descriptions, and approval process management.
                </p>
                <div className="mt-3 text-sm text-gray-500">Duration: 1-2 weeks</div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">6</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Launch & Marketing</h3>
                <p className="text-gray-600">
                  Coordinate app launch, press releases, social media campaigns, and user 
                  acquisition strategies to maximize downloads and engagement.
                </p>
                <div className="mt-3 text-sm text-gray-500">Duration: 1 week</div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">7</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Analytics & Optimization</h3>
                <p className="text-gray-600">
                  Implement analytics tracking, monitor user behavior, A/B test features, 
                  and optimize conversion rates based on real usage data.
                </p>
                <div className="mt-3 text-sm text-gray-500">Duration: Ongoing</div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">8</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Growth & Updates</h3>
                <p className="text-gray-600">
                  Regular updates with new features, performance improvements, and platform 
                  compatibility. Scale infrastructure as your user base grows.
                </p>
                <div className="mt-3 text-sm text-gray-500">Duration: Ongoing</div>
              </div>
            </div>
          </div>
        </div>


      </FadeIn>
    </Container>
  )
}

export default function AppDevelopmentPage() {
  return (
    <>
      <PageIntro 
        eyebrow="Mobile App Development South Africa" 
        title="Professional iOS & Android App Development"
      >
        <p>
          Turn your app idea into a successful business with professional mobile app development 
          for iOS and Android. From concept to App Store approval, we build high-quality apps 
          that South African users love and businesses profit from. Custom development that 
          outperforms template solutions at competitive prices.
        </p>
      </PageIntro>

      <AppTypes />

      <DevelopmentProcess />
      <ContactSection />
    </>
  )
}
