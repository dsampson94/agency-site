import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'

export const metadata = {
  title: 'SuperStack vs Competitors | Web Development Company Comparison South Africa',
  description: 'Compare SuperStack with other web development companies in South Africa. See why we deliver better results, faster timelines, and superior value for Cape Town and Johannesburg businesses.',
  keywords: 'web development company comparison south africa, best web developer cape town, react developer vs competitors, software development company reviews',
  openGraph: {
    title: 'SuperStack vs Competitors | Web Development Company Comparison South Africa',
    description: 'Compare SuperStack with other web development companies in South Africa. See why we deliver better results, faster timelines, and superior value.',
    url: 'https://www.superstack.co.za/superstack-vs-competitors',
    type: 'website',
    locale: 'en_ZA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SuperStack vs Competitors | Web Development Company Comparison South Africa',
    description: 'Compare SuperStack with other web development companies in South Africa. See why we deliver better results, faster timelines, and superior value.',
  },
  alternates: {
    canonical: 'https://www.superstack.co.za/superstack-vs-competitors',
  },
}

function ComparisonTable() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="How SuperStack Compares to Other SA Development Companies"
          className="mt-24"
        >
          <p>
            Choosing the right development partner is crucial for your business success. 
            Here's an honest comparison of what sets SuperStack apart from other 
            web development companies in South Africa.
          </p>
        </SectionIntro>

        <div className="mt-16 overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 p-4 text-left font-semibold text-gray-900">Feature</th>
                <th className="border border-gray-200 p-4 text-center font-semibold text-indigo-600 bg-indigo-50">SuperStack</th>
                <th className="border border-gray-200 p-4 text-center font-semibold text-gray-600">Typical SA Agency</th>
                <th className="border border-gray-200 p-4 text-center font-semibold text-gray-600">Freelancers</th>
                <th className="border border-gray-200 p-4 text-center font-semibold text-gray-600">Offshore Companies</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-4 font-medium text-gray-900">Years of Experience</td>
                <td className="border border-gray-200 p-4 text-center bg-green-50">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    20+ Years Combined
                  </span>
                </td>
                <td className="border border-gray-200 p-4 text-center text-gray-600">5-10 Years</td>
                <td className="border border-gray-200 p-4 text-center text-gray-600">2-5 Years</td>
                <td className="border border-gray-200 p-4 text-center text-gray-600">Variable</td>
              </tr>
              
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-4 font-medium text-gray-900">Local Market Understanding</td>
                <td className="border border-gray-200 p-4 text-center bg-green-50">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Deep SA Expertise
                  </span>
                </td>
                <td className="border border-gray-200 p-4 text-center text-gray-600">Good</td>
                <td className="border border-gray-200 p-4 text-center text-gray-600">Limited</td>
                <td className="border border-gray-200 p-4 text-center text-gray-600">None</td>
              </tr>
              
              <tr>
                <td className="border border-gray-200 p-4 font-medium text-gray-900">Response Time</td>
                <td className="border border-gray-200 p-4 text-center bg-green-50">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Same Day
                  </span>
                </td>
                <td className="border border-gray-200 p-4 text-center text-gray-600">1-2 Days</td>
                <td className="border border-gray-200 p-4 text-center text-gray-600">Variable</td>
                <td className="border border-gray-200 p-4 text-center text-gray-600">12+ Hours</td>
              </tr>
              
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-4 font-medium text-gray-900">Technology Stack</td>
                <td className="border border-gray-200 p-4 text-center bg-green-50">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Cutting Edge + AI
                  </span>
                </td>
                <td className="border border-gray-200 p-4 text-center text-gray-600">Standard</td>
                <td className="border border-gray-200 p-4 text-center text-gray-600">Basic</td>
                <td className="border border-gray-200 p-4 text-center text-gray-600">Outdated</td>
              </tr>
              
              <tr>
                <td className="border border-gray-200 p-4 font-medium text-gray-900">Project Timeline</td>
                <td className="border border-gray-200 p-4 text-center bg-green-50">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    2-4 Weeks
                  </span>
                </td>
                <td className="border border-gray-200 p-4 text-center text-gray-600">6-12 Weeks</td>
                <td className="border border-gray-200 p-4 text-center text-gray-600">4-8 Weeks</td>
                <td className="border border-gray-200 p-4 text-center text-gray-600">8-16 Weeks</td>
              </tr>
              
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-4 font-medium text-gray-900">AI Integration</td>
                <td className="border border-gray-200 p-4 text-center bg-green-50">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Advanced AI Tools
                  </span>
                </td>
                <td className="border border-gray-200 p-4 text-center text-gray-600">Basic</td>
                <td className="border border-gray-200 p-4 text-center text-gray-600">None</td>
                <td className="border border-gray-200 p-4 text-center text-gray-600">Limited</td>
              </tr>
              
              <tr>
                <td className="border border-gray-200 p-4 font-medium text-gray-900">Ongoing Support</td>
                <td className="border border-gray-200 p-4 text-center bg-green-50">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    24/7 Available
                  </span>
                </td>
                <td className="border border-gray-200 p-4 text-center text-gray-600">Business Hours</td>
                <td className="border border-gray-200 p-4 text-center text-gray-600">Limited</td>
                <td className="border border-gray-200 p-4 text-center text-gray-600">Time Zone Issues</td>
              </tr>
              
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-4 font-medium text-gray-900">Pricing Transparency</td>
                <td className="border border-gray-200 p-4 text-center bg-green-50">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Fixed Price Quotes
                  </span>
                </td>
                <td className="border border-gray-200 p-4 text-center text-gray-600">Estimates</td>
                <td className="border border-gray-200 p-4 text-center text-gray-600">Hourly Variable</td>
                <td className="border border-gray-200 p-4 text-center text-gray-600">Hidden Costs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </FadeIn>
    </Container>
  )
}

function WhyChooseSuperStack() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="Why South African Businesses Choose SuperStack"
          className="mt-24"
        >
          <p>
            We're not just another web development company. We're three founding 
            engineers with specialized experience who understand what 
            it takes to build successful businesses in South Africa.
          </p>
        </SectionIntro>

        <div className="mt-16">
          <GridList>
            <GridListItem title="Proven Expertise" invert>
              Specialized in building modern applications for South African businesses 
              from startups to enterprise clients. Real expertise, not just promises.
            </GridListItem>
            
            <GridListItem title="Local Market Expertise" invert>
              Deep understanding of South African business culture, payment gateways, 
              shipping providers, and regulatory requirements.
            </GridListItem>
            
            <GridListItem title="Cutting-Edge Technology" invert>
              We use the latest technologies including React, Next.js, AI integration, 
              and automation tools to give you a competitive advantage.
            </GridListItem>
            
            <GridListItem title="Transparent Communication" invert>
              Regular updates, clear timelines, and honest feedback. No surprises, 
              no scope creep, no hidden costs in your project.
            </GridListItem>
            
            <GridListItem title="Fast Delivery" invert>
              Our AI-enhanced development process means we deliver projects 
              2-3x faster than traditional agencies without compromising quality.
            </GridListItem>
            
            <GridListItem title="Ongoing Partnership" invert>
              We don't disappear after launch. Ongoing support, maintenance, 
              and growth strategies to ensure your long-term success.
            </GridListItem>
          </GridList>
        </div>
      </FadeIn>
    </Container>
  )
}

function ClientTestimonials() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="What Our Clients Say About SuperStack"
          className="mt-24"
        >
          <p>
            Don't just take our word for it. Here's what South African businesses 
            say about working with SuperStack compared to other development companies.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 mb-6">
              "SuperStack's technical expertise and understanding of modern development 
              practices impressed us from day one. Their approach to React development 
              and clear communication made them stand out from other companies."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">M</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Michael van der Merwe</p>
                <p className="text-sm text-gray-600">CEO, FinTech Startup Cape Town</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 mb-6">
              "SuperStack's approach to understanding South African business needs 
              and their technical expertise in modern development makes them an 
              ideal partner for serious software projects."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">S</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Sarah Nkomo</p>
                <p className="text-sm text-gray-600">Operations Director, Manufacturing Company</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 mb-6">
              "We wasted 6 months with an overseas company that didn't understand 
              our market. SuperStack rebuilt everything in 4 weeks and added AI 
              features we never thought possible. Game changer!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">D</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">David Patel</p>
                <p className="text-sm text-gray-600">Founder, E-commerce Platform</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 mb-6">
              "SuperStack's expertise in AI and automation is unmatched in South Africa. 
              They built us tools that save 20 hours per week and our competitors 
              can't figure out how we're so efficient."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">A</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Amanda Botha</p>
                <p className="text-sm text-gray-600">Marketing Director, Digital Agency</p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

export default function SuperStackVsCompetitorsPage() {
  return (
    <>
      <PageIntro 
        eyebrow="SuperStack vs Competitors" 
        title="Why SuperStack Outperforms Other SA Development Companies"
      >
        <p>
          Choosing the right development partner can make or break your project. 
          See why South African businesses consistently choose SuperStack over 
          other agencies, freelancers, and offshore companies for their most 
          important projects.
        </p>
      </PageIntro>

      <ComparisonTable />
      <WhyChooseSuperStack />
      <ClientTestimonials />
      <ContactSection />
    </>
  )
}
