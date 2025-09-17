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
    url: 'https://yoursite.com/react-developer-cape-town',
    type: 'website',
    locale: 'en_ZA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'React Developer Cape Town | Hire Expert React JS Developers South Africa',
    description: 'Hire expert React developers in Cape Town. Top-rated React JS development services with 20+ years experience.',
  },
  alternates: {
    canonical: 'https://yoursite.com/react-developer-cape-town',
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
      <ContactSection />
    </>
  )
}