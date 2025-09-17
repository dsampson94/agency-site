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
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>• Simple business app</span>
                  <span className="font-semibold">R35,000 - R65,000</span>
                </div>
                <div className="flex justify-between">
                  <span>• Advanced enterprise app</span>
                  <span className="font-semibold">R85,000 - R150,000</span>
                </div>
              </div>
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
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>• Basic shopping app</span>
                  <span className="font-semibold">R45,000 - R75,000</span>
                </div>
                <div className="flex justify-between">
                  <span>• Full marketplace app</span>
                  <span className="font-semibold">R95,000 - R180,000</span>
                </div>
              </div>
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
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>• Basic social app</span>
                  <span className="font-semibold">R55,000 - R85,000</span>
                </div>
                <div className="flex justify-between">
                  <span>• Advanced platform</span>
                  <span className="font-semibold">R120,000 - R250,000</span>
                </div>
              </div>
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
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>• Simple payment app</span>
                  <span className="font-semibold">R65,000 - R95,000</span>
                </div>
                <div className="flex justify-between">
                  <span>• Full banking platform</span>
                  <span className="font-semibold">R150,000 - R350,000</span>
                </div>
              </div>
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
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>• Basic health app</span>
                  <span className="font-semibold">R45,000 - R75,000</span>
                </div>
                <div className="flex justify-between">
                  <span>• Medical platform</span>
                  <span className="font-semibold">R95,000 - R200,000</span>
                </div>
              </div>
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
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>• Content app</span>
                  <span className="font-semibold">R50,000 - R85,000</span>
                </div>
                <div className="flex justify-between">
                  <span>• Streaming platform</span>
                  <span className="font-semibold">R120,000 - R280,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

function WhyNotTemplates() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="Custom Apps vs Template Solutions: Why It Matters"
          className="mt-24"
        >
          <p>
            While template-based app builders seem cheaper initially, custom development 
            provides better performance, unique features, and long-term business value 
            that template solutions simply cannot match.
          </p>
        </SectionIntro>

        <div className="mt-16 overflow-x-auto">
          <table className="w-full bg-white rounded-2xl shadow-lg border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Factor</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-red-600">Template Apps</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-orange-600">App Builders</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-green-600">Custom Development</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">Initial Cost</td>
                <td className="px-6 py-4 text-center text-red-600">R5,000-R15,000</td>
                <td className="px-6 py-4 text-center text-orange-600">R15,000-R35,000</td>
                <td className="px-6 py-4 text-center text-green-600">R35,000-R150,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Monthly Costs</td>
                <td className="px-6 py-4 text-center text-red-600">R800-R2,000/month</td>
                <td className="px-6 py-4 text-center text-orange-600">R1,500-R3,500/month</td>
                <td className="px-6 py-4 text-center text-green-600">R200-R500/month</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">Performance</td>
                <td className="px-6 py-4 text-center text-red-600">❌ Slow, bloated</td>
                <td className="px-6 py-4 text-center text-orange-600">⚠️ Limited optimization</td>
                <td className="px-6 py-4 text-center text-green-600">✅ Optimized & fast</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Customization</td>
                <td className="px-6 py-4 text-center text-red-600">❌ Very limited</td>
                <td className="px-6 py-4 text-center text-orange-600">⚠️ Template constraints</td>
                <td className="px-6 py-4 text-center text-green-600">✅ Unlimited</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">Scalability</td>
                <td className="px-6 py-4 text-center text-red-600">❌ Breaks with growth</td>
                <td className="px-6 py-4 text-center text-orange-600">⚠️ Platform dependent</td>
                <td className="px-6 py-4 text-center text-green-600">✅ Scales infinitely</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">App Store Success</td>
                <td className="px-6 py-4 text-center text-red-600">❌ Often rejected</td>
                <td className="px-6 py-4 text-center text-orange-600">⚠️ Generic experience</td>
                <td className="px-6 py-4 text-center text-green-600">✅ Premium quality</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">Ownership</td>
                <td className="px-6 py-4 text-center text-red-600">❌ Platform owns app</td>
                <td className="px-6 py-4 text-center text-orange-600">⚠️ Limited ownership</td>
                <td className="px-6 py-4 text-center text-green-600">✅ You own everything</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">3-Year Total Cost</td>
                <td className="px-6 py-4 text-center text-red-600">R43,800-R87,000</td>
                <td className="px-6 py-4 text-center text-orange-600">R69,000-R161,000</td>
                <td className="px-6 py-4 text-center text-green-600">R42,200-R168,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
            <h3 className="text-lg font-bold text-red-800 mb-4">Template App Horror Stories</h3>
            <div className="space-y-4 text-red-700">
              <div className="flex gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span>"Our app was removed from the App Store because it looked exactly like 50 other template apps"</span>
              </div>
              <div className="flex gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span>"We hit user limits and monthly costs jumped to R8,000 overnight"</span>
              </div>
              <div className="flex gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span>"App crashed constantly, lost 80% of users in first month"</span>
              </div>
              <div className="flex gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span>"Couldn't add the features we needed, had to rebuild from scratch anyway"</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
            <h3 className="text-lg font-bold text-green-800 mb-4">Custom App Success Stories</h3>
            <div className="space-y-4 text-green-700">
              <div className="flex gap-3">
                <span className="text-green-500 mt-1">•</span>
                <span>"Featured by Apple as 'App of the Day' - unique design stood out"</span>
              </div>
              <div className="flex gap-3">
                <span className="text-green-500 mt-1">•</span>
                <span>"Handles 50,000+ users with same hosting costs as day one"</span>
              </div>
              <div className="flex gap-3">
                <span className="text-green-500 mt-1">•</span>
                <span>"4.8 star rating - users love the smooth, fast experience"</span>
              </div>
              <div className="flex gap-3">
                <span className="text-green-500 mt-1">•</span>
                <span>"Added AI features and payments easily - complete flexibility"</span>
              </div>
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

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our App Store Guarantee</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We guarantee your app will be approved by both Apple App Store and Google Play Store. 
              If not approved, we'll fix all issues at no extra cost until acceptance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">App Store Approval Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">12 Weeks</div>
              <div className="text-gray-600">Average Development Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4.7★</div>
              <div className="text-gray-600">Average App Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">6 Months</div>
              <div className="text-gray-600">Free Bug Fixes & Support</div>
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
      <WhyNotTemplates />
      <DevelopmentProcess />
      <ContactSection />
    </>
  )
}
