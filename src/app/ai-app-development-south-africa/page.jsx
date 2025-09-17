import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'

export const metadata = {
  title: 'Custom AI App Development South Africa | ChatGPT Alternative Development',
  description: 'Build your own AI application like ChatGPT with custom AI app development in South Africa. Enterprise AI solutions, chatbots, and machine learning applications from R25,000.',
  keywords: 'ai app development south africa, chatgpt alternative development, custom ai applications, ai chatbot development, machine learning apps, ai software development',
  openGraph: {
    title: 'Custom AI App Development South Africa | ChatGPT Alternative Development',
    description: 'Build your own AI application like ChatGPT with custom AI app development in South Africa. Enterprise AI solutions from R25,000.',
    url: 'https://yoursite.com/ai-app-development-south-africa',
    type: 'website',
    locale: 'en_ZA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom AI App Development South Africa | ChatGPT Alternative Development',
    description: 'Build your own AI application like ChatGPT with custom AI app development in South Africa. Enterprise AI solutions from R25,000.',
  },
  alternates: {
    canonical: 'https://yoursite.com/ai-app-development-south-africa',
  },
}

function AIAppTypes() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="AI Applications We Build for South African Businesses"
          className="mt-24"
        >
          <p>
            From ChatGPT-style conversational AI to specialized business intelligence tools, 
            we create custom AI applications that give your business a competitive edge in the 
            South African market.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Conversational AI Chatbots</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Build your own ChatGPT-style application for customer service, sales, or internal operations. 
                Custom training on your business data with enterprise-grade security.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Starting from R45,000</strong> • 4-6 week delivery
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Business Intelligence AI</h3>
              </div>
              <p className="text-gray-700 mb-4">
                AI-powered analytics that automatically generates insights from your business data. 
                Predictive analytics, automated reporting, and intelligent recommendations.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Starting from R65,000</strong> • 6-8 week delivery
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-8 border border-purple-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Automated Workflow AI</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Intelligent automation that learns your business processes and optimizes them. 
                Document processing, email automation, and intelligent task routing.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Starting from R35,000</strong> • 3-5 week delivery
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Computer Vision AI</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Image recognition, object detection, and visual AI for quality control, 
                security systems, or inventory management. Custom trained on your specific needs.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Starting from R55,000</strong> • 5-7 week delivery
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">NLP & Content AI</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Natural language processing for content generation, sentiment analysis, 
                document summarization, and automated content creation for your business.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Starting from R40,000</strong> • 4-6 week delivery
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8 border border-pink-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Predictive Analytics AI</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Machine learning models that predict customer behavior, sales forecasting, 
                risk assessment, and market trends specifically for South African businesses.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Starting from R75,000</strong> • 8-10 week delivery
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

function AIVsCompetitors() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="Why Build Custom AI Instead of Using Existing Solutions?"
          className="mt-24"
        >
          <p>
            While ChatGPT and other AI tools are powerful, custom AI applications give you 
            complete control, data privacy, and the ability to train models specifically 
            for your business needs.
          </p>
        </SectionIntro>

        <div className="mt-16 overflow-x-auto">
          <table className="w-full bg-white rounded-2xl shadow-lg border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-red-600">ChatGPT/OpenAI</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Google Bard</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-green-600">Custom AI App</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">Data Privacy</td>
                <td className="px-6 py-4 text-center text-red-600">❌ Data sent to OpenAI</td>
                <td className="px-6 py-4 text-center text-red-600">❌ Data sent to Google</td>
                <td className="px-6 py-4 text-center text-green-600">✅ Your data stays private</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Custom Training</td>
                <td className="px-6 py-4 text-center text-red-600">❌ Limited fine-tuning</td>
                <td className="px-6 py-4 text-center text-red-600">❌ No custom training</td>
                <td className="px-6 py-4 text-center text-green-600">✅ Trained on your data</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">Monthly Costs</td>
                <td className="px-6 py-4 text-center text-red-600">R400+ per user</td>
                <td className="px-6 py-4 text-center text-red-600">R300+ per user</td>
                <td className="px-6 py-4 text-center text-green-600">Fixed hosting cost</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Integration Control</td>
                <td className="px-6 py-4 text-center text-red-600">❌ API limitations</td>
                <td className="px-6 py-4 text-center text-red-600">❌ Limited integrations</td>
                <td className="px-6 py-4 text-center text-green-600">✅ Full system integration</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">Branding</td>
                <td className="px-6 py-4 text-center text-red-600">❌ OpenAI branding</td>
                <td className="px-6 py-4 text-center text-red-600">❌ Google branding</td>
                <td className="px-6 py-4 text-center text-green-600">✅ Your company branding</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Customization</td>
                <td className="px-6 py-4 text-center text-red-600">❌ Limited UI changes</td>
                <td className="px-6 py-4 text-center text-red-600">❌ No customization</td>
                <td className="px-6 py-4 text-center text-green-600">✅ Complete customization</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">Data Ownership</td>
                <td className="px-6 py-4 text-center text-red-600">❌ OpenAI owns data</td>
                <td className="px-6 py-4 text-center text-red-600">❌ Google owns data</td>
                <td className="px-6 py-4 text-center text-green-600">✅ You own everything</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
          <div className="flex items-center gap-4 mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-bold text-gray-900">ROI Calculation: Custom AI vs Subscription Services</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">ChatGPT Enterprise (10 users, 3 years)</h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Monthly subscription</span>
                  <span>R6,000/month</span>
                </div>
                <div className="flex justify-between">
                  <span>API usage costs</span>
                  <span>R2,000/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Integration development</span>
                  <span>R25,000</span>
                </div>
                <div className="flex justify-between font-bold text-red-600 pt-2 border-t">
                  <span>Total 3-year cost</span>
                  <span>R313,000</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Custom AI Application (unlimited users)</h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Development cost</span>
                  <span>R85,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Hosting & maintenance</span>
                  <span>R800/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Updates & support</span>
                  <span>R3,000/year</span>
                </div>
                <div className="flex justify-between font-bold text-green-600 pt-2 border-t">
                  <span>Total 3-year cost</span>
                  <span>R122,800</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-lg font-bold text-green-800">
              Save R190,200 over 3 years + own your AI completely
            </p>
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
          title="Our AI Development Process"
          className="mt-24"
        >
          <p>
            From concept to deployment, we follow a proven process to build AI applications 
            that deliver real business value. Every project includes comprehensive testing, 
            training, and ongoing optimization.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Strategy & Planning</h3>
                <p className="text-gray-600">
                  We analyze your business needs, identify AI opportunities, and create a detailed 
                  development roadmap. Define success metrics and technical requirements.
                </p>
                <div className="mt-3 text-sm text-gray-500">Duration: 1-2 weeks</div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Preparation</h3>
                <p className="text-gray-600">
                  Collect, clean, and prepare your business data for AI training. Create datasets 
                  and establish data pipelines for continuous learning and improvement.
                </p>
                <div className="mt-3 text-sm text-gray-500">Duration: 1-3 weeks</div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Model Development</h3>
                <p className="text-gray-600">
                  Build and train custom AI models using the latest techniques. Fine-tune 
                  performance and accuracy specifically for your business requirements.
                </p>
                <div className="mt-3 text-sm text-gray-500">Duration: 2-4 weeks</div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">4</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Application Development</h3>
                <p className="text-gray-600">
                  Create the user interface and backend systems that bring your AI to life. 
                  Build intuitive interfaces that make AI accessible to your team.
                </p>
                <div className="mt-3 text-sm text-gray-500">Duration: 2-3 weeks</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">5</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Testing & Validation</h3>
                <p className="text-gray-600">
                  Comprehensive testing of AI accuracy, performance, and security. Validate 
                  results with real business scenarios and edge cases.
                </p>
                <div className="mt-3 text-sm text-gray-500">Duration: 1-2 weeks</div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">6</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Deployment & Integration</h3>
                <p className="text-gray-600">
                  Deploy your AI application to production servers and integrate with existing 
                  business systems. Ensure smooth data flow and user access.
                </p>
                <div className="mt-3 text-sm text-gray-500">Duration: 1 week</div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">7</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Training & Support</h3>
                <p className="text-gray-600">
                  Train your team to use the new AI tools effectively. Provide documentation, 
                  user guides, and ongoing technical support for optimal results.
                </p>
                <div className="mt-3 text-sm text-gray-500">Duration: Ongoing</div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">8</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Optimization & Growth</h3>
                <p className="text-gray-600">
                  Continuously monitor performance and optimize AI models based on real usage data. 
                  Add new features and expand capabilities as your business grows.
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

export default function AIAppDevelopmentPage() {
  return (
    <>
      <PageIntro 
        eyebrow="AI App Development South Africa" 
        title="Build Your Own AI Application Like ChatGPT"
      >
        <p>
          Stop paying monthly fees for AI tools that limit your control. Build custom AI 
          applications trained specifically on your business data with complete privacy, 
          unlimited users, and full customization. From conversational AI to predictive 
          analytics, we create AI solutions that give South African businesses a competitive edge.
        </p>
      </PageIntro>

      <AIAppTypes />
      <AIVsCompetitors />
      <DevelopmentProcess />
      <ContactSection />
    </>
  )
}