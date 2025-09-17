import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'

import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'

export const metadata = {
  title: 'React Developer Cape Town | Hire Expert React JS Developers South Africa',
  description: 'Hire expert React developers in Cape Town. Top-rated React JS development services with 20+ years experience. Custom React applications, migration services, and full-stack development for South African businesses.',
  keywords: 'react developer cape town, hire react developer south africa, react js developer cape town, react development services, react native developer, react consultant cape town, full stack react developer',
  openGraph: {
    title: 'React Developer Cape Town | Hire Expert React JS Developers South Africa',
    description: 'Hire expert React developers in Cape Town. Top-rated React JS development services with 20+ years experience. Custom React applications, migration services, and full-stack development.',
    url: 'https://www.superstack.co.za/react-developer-cape-town',
    type: 'website',
    locale: 'en_ZA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'React Developer Cape Town | Hire Expert React JS Developers South Africa',
    description: 'Hire expert React developers in Cape Town. Top-rated React JS development services with 20+ years experience.',
  },
  alternates: {
    canonical: 'https://www.superstack.co.za/react-developer-cape-town',
  },
}

function PricingSection() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="React Developer Rates Cape Town"
          className="mt-24"
        >
          <p>
            Transparent pricing for React development services in Cape Town. 
            No hidden costs, just expert React developers at competitive South African rates.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="rounded-3xl p-8 ring-1 ring-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">React Consultation</h3>
            <p className="mt-4 text-sm text-gray-600">Perfect for React project planning and architecture review</p>
            <p className="mt-6">
              <span className="text-4xl font-bold tracking-tight text-gray-900">R1,500</span>
              <span className="text-sm font-medium text-gray-600">/hour</span>
            </p>
            <ul className="mt-8 space-y-3 text-sm text-gray-600">
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                React architecture planning
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Technology stack recommendations
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Performance optimization review
              </li>
            </ul>
          </div>

          <div className="rounded-3xl p-8 ring-2 ring-indigo-600 bg-gray-50">
            <h3 className="text-lg font-semibold text-indigo-600">React Development</h3>
            <p className="mt-4 text-sm text-gray-600">Full React application development and custom components</p>
            <p className="mt-6">
              <span className="text-4xl font-bold tracking-tight text-gray-900">R25,000</span>
              <span className="text-sm font-medium text-gray-600">/month</span>
            </p>
            <ul className="mt-8 space-y-3 text-sm text-gray-600">
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Custom React applications
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Next.js development
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                API integration
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Testing & deployment
              </li>
            </ul>
          </div>

          <div className="rounded-3xl p-8 ring-1 ring-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Enterprise React</h3>
            <p className="mt-4 text-sm text-gray-600">Large-scale React applications for enterprise clients</p>
            <p className="mt-6">
              <span className="text-4xl font-bold tracking-tight text-gray-900">R75,000</span>
              <span className="text-sm font-medium text-gray-600">/project</span>
            </p>
            <ul className="mt-8 space-y-3 text-sm text-gray-600">
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Enterprise architecture
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Microservices integration
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Performance monitoring
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                24/7 support
              </li>
            </ul>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

function WhyChooseUs() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="Why Hire Our React Developers in Cape Town?"
          className="mt-24"
        >
          <p>
            With over 20 years of combined experience, our React development team 
            delivers world-class applications for South African businesses at 
            competitive local rates.
          </p>
        </SectionIntro>

        <div className="mt-16">
          <GridList>
            <GridListItem title="Cape Town Based Team" invert>
              Local React developers who understand South African business needs, 
              time zones, and market requirements. Available for in-person meetings.
            </GridListItem>
            
            <GridListItem title="20+ Years Experience" invert>
              Senior React developers with extensive experience in modern JavaScript, 
              TypeScript, Next.js, and full-stack development.
            </GridListItem>
            
            <GridListItem title="Proven React Expertise" invert>
              Built 50+ React applications for startups to enterprise clients. 
              Specialists in performance optimization and scalable architecture.
            </GridListItem>
            
            <GridListItem title="Competitive Rates" invert>
              Premium React development at South African rates. Better value than 
              international developers with local market understanding.
            </GridListItem>
          </GridList>
        </div>
      </FadeIn>
    </Container>
  )
}

function ReactServices() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="React Development Services Cape Town"
          className="mt-24"
        >
          <p>
            Comprehensive React development services from planning to deployment. 
            We handle everything so you can focus on growing your business.
          </p>
        </SectionIntro>

        <div className="mt-16 space-y-16">
          <div>
            <h3 className="font-display text-xl font-semibold text-neutral-950">
              Custom React Application Development
            </h3>
            <p className="mt-4 text-neutral-600">
              Build powerful, scalable React applications tailored to your business needs. 
              From simple dashboards to complex enterprise applications, we deliver 
              solutions that drive results.
            </p>
            <List className="mt-6">
              <ListItem>Single Page Applications (SPAs)</ListItem>
              <ListItem>Progressive Web Apps (PWAs)</ListItem>
              <ListItem>Dashboard and admin panels</ListItem>
              <ListItem>E-commerce React applications</ListItem>
              <ListItem>Real-time applications with WebSockets</ListItem>
            </List>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-neutral-950">
              React Migration Services
            </h3>
            <p className="mt-4 text-neutral-600">
              Migrate your existing applications to React for better performance, 
              maintainability, and user experience. We handle the entire migration 
              process with zero downtime.
            </p>
            <List className="mt-6">
              <ListItem>Legacy JavaScript to React migration</ListItem>
              <ListItem>jQuery to React conversion</ListItem>
              <ListItem>Angular/Vue to React migration</ListItem>
              <ListItem>PHP/WordPress to React frontend</ListItem>
              <ListItem>Class components to React Hooks</ListItem>
            </List>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-neutral-950">
              React Performance Optimization
            </h3>
            <p className="mt-4 text-neutral-600">
              Optimize your React applications for speed, SEO, and user experience. 
              Our performance optimization services can improve load times by 50-70%.
            </p>
            <List className="mt-6">
              <ListItem>Bundle size optimization</ListItem>
              <ListItem>Code splitting and lazy loading</ListItem>
              <ListItem>Server-side rendering (SSR)</ListItem>
              <ListItem>Image optimization and CDN setup</ListItem>
              <ListItem>React DevTools performance profiling</ListItem>
            </List>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

export default function ReactDeveloperCapeTownPage() {
  return (
    <>
      <PageIntro 
        eyebrow="React Developer Cape Town" 
        title="Hire Expert React Developers in Cape Town"
      >
        <p>
          Looking for experienced React developers in Cape Town? Our team of senior 
          React specialists delivers world-class applications for South African businesses. 
          20+ years combined experience, competitive rates, local support.
        </p>
      </PageIntro>

      <WhyChooseUs />
      <ReactServices />
      <PricingSection />
      <TechExpertiseShowcase />
      <ContactSection />
    </>
  )
}

// Technology Expertise Showcase with Internal Linking
function TechExpertiseShowcase() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="Beyond React: Complete Technology Solutions"
          className="mt-24"
        >
          <p>
            While React is our specialty, we offer comprehensive technology solutions for South African businesses. 
            From specialized industry applications to complete digital transformations, our expertise spans the entire technology landscape.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-8 border border-emerald-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">FinTech React Applications</h3>
            <p className="text-gray-700 mb-6">
              Secure financial applications built with React. SARB-compliant banking interfaces, 
              payment dashboards, and investment platforms for South African financial institutions.
            </p>
            <a 
              href="/fintech-development-south-africa" 
              className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
            >
              Explore FinTech Development →
            </a>
          </div>

          <div className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-2xl p-8 border border-violet-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Custom E-commerce Solutions</h3>
            <p className="text-gray-700 mb-6">
              React-powered e-commerce platforms that outperform Shopify. Built for South African businesses 
              with PayFast integration, local shipping, and no monthly fees.
            </p>
            <a 
              href="/shopify-alternative-south-africa" 
              className="inline-flex items-center text-violet-600 font-semibold hover:text-violet-700 transition-colors"
            >
              See E-commerce Solutions →
            </a>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl p-8 border border-amber-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Mining Industry Dashboards</h3>
            <p className="text-gray-700 mb-6">
              React-based dashboards for South Africa's mining industry. Real-time monitoring, 
              safety management interfaces, and operations tracking systems.
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
            <h3 className="text-xl font-bold text-gray-900 mb-4">Government Portal Interfaces</h3>
            <p className="text-gray-700 mb-6">
              Modern React interfaces for government services. Citizen portals, municipal dashboards, 
              and e-government platforms that improve service delivery.
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
            <h3 className="text-xl font-bold text-gray-900 mb-4">Retail POS Interfaces</h3>
            <p className="text-gray-700 mb-6">
              React-powered retail management interfaces. Point-of-sale systems, inventory dashboards, 
              and multi-store management platforms for South African retailers.
            </p>
            <a 
              href="/retail-pos-systems-south-africa" 
              className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-colors"
            >
              Discover Retail Solutions →
            </a>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-2xl p-8 border border-teal-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile App Development</h3>
            <p className="text-gray-700 mb-6">
              React Native applications for South African businesses. Cross-platform mobile apps 
              that share code with your React web applications for maximum efficiency.
            </p>
            <a 
              href="/app-development-south-africa" 
              className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors"
            >
              Explore App Development →
            </a>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-8 border border-slate-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">React Development Across South Africa</h3>
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
              Our React expertise extends across all major South African cities. Whether you're in Cape Town, 
              Johannesburg, Durban, or Pretoria, we provide world-class React development services with local support.
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
