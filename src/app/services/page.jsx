import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import Link from 'next/link'

export const metadata = {
  title: 'Web Development & Software Services South Africa | Custom Solutions',
  description: 'Comprehensive web development, custom software, and digital solutions for South African businesses. Your trusted technology partner across South Africa.',
  keywords: 'web development South Africa, custom software development, digital solutions SA, enterprise software, mobile app development, e-commerce solutions',
  openGraph: {
    title: 'Web Development & Software Services South Africa | Custom Solutions',
    description: 'Comprehensive web development, custom software, and digital solutions for South African businesses. Your trusted technology partner across South Africa.',
    url: 'https://www.superstack.co.za/services',
    type: 'website',
    locale: 'en_ZA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development & Software Services South Africa | Custom Solutions',
    description: 'Comprehensive web development, custom software, and digital solutions for South African businesses.',
  },
  alternates: {
    canonical: 'https://www.superstack.co.za/services',
  },
}

function CoreServices() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <SectionIntro
          title="Comprehensive Technology Solutions"
          className="mt-24 sm:mt-32 lg:mt-40"
        >
          <p>
            From concept to deployment, we provide end-to-end technology solutions 
            that help South African businesses grow, compete, and succeed in the 
            digital economy.
          </p>
        </SectionIntro>
      </FadeIn>

      <Container className="mt-16">
        <FadeIn>
          <GridList>
            <GridListItem title="Custom Web Development">
              Modern, responsive websites built with the latest technologies. 
              From corporate sites to complex web applications, we create digital 
              experiences that engage users and drive business results.
            </GridListItem>
            
            <GridListItem title="Enterprise Software Solutions">
              Custom software that streamlines operations, improves efficiency, 
              and scales with your business. ERP systems, CRM platforms, and 
              workflow automation tailored to your specific needs.
            </GridListItem>
            
            <GridListItem title="E-commerce Development">
              Complete online stores that convert visitors into customers. 
              Shopping cart systems, payment integration, inventory management, 
              and mobile-optimized experiences.
            </GridListItem>
            
            <GridListItem title="Mobile App Development">
              Native and cross-platform mobile applications for iOS and Android. 
              From consumer apps to enterprise mobile solutions that keep your 
              team connected and productive.
            </GridListItem>
            
            <GridListItem title="API Development & Integration">
              Connect your systems with third-party services, create internal 
              APIs, and build microservices architectures that enable seamless 
              data flow and system integration.
            </GridListItem>
            
            <GridListItem title="AI & Machine Learning Solutions">
              Intelligent automation, predictive analytics, and AI-powered features 
              that give your business a competitive edge in data-driven decision making.
            </GridListItem>
          </GridList>
        </FadeIn>
      </Container>
    </Container>
  )
}

function IndustryExpertise() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="Industry-Specific Solutions"
          className="mt-24"
        >
          <p>
            We understand the unique challenges facing different industries in 
            South Africa. Our solutions are tailored to meet specific regulatory, 
            operational, and market requirements.
          </p>
        </SectionIntro>

        <div className="mt-16 space-y-12">
          <div className="border-l-4 border-neutral-200 pl-6">
            <h3 className="font-display text-xl font-semibold text-neutral-950">
              <Link href="/mining-software-solutions" className="hover:text-neutral-700">
                Mining & Resources
              </Link>
            </h3>
            <p className="mt-2 text-neutral-600">
              Safety management systems, asset tracking, compliance reporting, 
              and production optimization for South Africa's mining sector.
            </p>
          </div>

          <div className="border-l-4 border-neutral-200 pl-6">
            <h3 className="font-display text-xl font-semibold text-neutral-950">
              Financial Services
            </h3>
            <p className="mt-2 text-neutral-600">
              Secure banking applications, fintech solutions, payment systems, 
              and regulatory compliance tools for SA's financial sector.
            </p>
          </div>

          <div className="border-l-4 border-neutral-200 pl-6">
            <h3 className="font-display text-xl font-semibold text-neutral-950">
              Healthcare & Medical
            </h3>
            <p className="mt-2 text-neutral-600">
              Patient management systems, telemedicine platforms, medical records 
              management, and healthcare compliance solutions.
            </p>
          </div>

          <div className="border-l-4 border-neutral-200 pl-6">
            <h3 className="font-display text-xl font-semibold text-neutral-950">
              Government & Public Sector
            </h3>
            <p className="mt-2 text-neutral-600">
              Citizen services portals, document management, procurement systems, 
              and public-facing applications with enterprise security.
            </p>
          </div>

          <div className="border-l-4 border-neutral-200 pl-6">
            <h3 className="font-display text-xl font-semibold text-neutral-950">
              Agriculture & Wine
            </h3>
            <p className="mt-2 text-neutral-600">
              Farm management systems, supply chain tracking, wine estate management, 
              and agricultural e-commerce platforms.
            </p>
          </div>

          <div className="border-l-4 border-neutral-200 pl-6">
            <h3 className="font-display text-xl font-semibold text-neutral-950">
              Tourism & Hospitality
            </h3>
            <p className="mt-2 text-neutral-600">
              Booking systems, tour management platforms, guest management, 
              and marketing automation for SA's tourism industry.
            </p>
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
          title="Modern Technology Stack"
          className="mt-24"
        >
          <p>
            We use cutting-edge technologies and proven frameworks to build 
            solutions that are fast, secure, scalable, and maintainable.
          </p>
        </SectionIntro>

        <div className="mt-16">
          <GridList>
            <GridListItem title="Frontend Development" invert>
              React, Next.js, Vue.js, TypeScript for modern, responsive user 
              interfaces that work seamlessly across all devices and browsers.
            </GridListItem>
            
            <GridListItem title="Backend Development" invert>
              Node.js, Python, .NET, PHP for robust server-side applications 
              with RESTful APIs and microservices architectures.
            </GridListItem>
            
            <GridListItem title="Database Technologies" invert>
              PostgreSQL, MySQL, MongoDB, Redis for reliable data storage, 
              caching, and high-performance database optimization.
            </GridListItem>
            
            <GridListItem title="Cloud & DevOps" invert>
              AWS, Azure, Google Cloud with CI/CD pipelines, automated testing, 
              and deployment strategies for scalable, reliable hosting.
            </GridListItem>
            
            <GridListItem title="Mobile Development" invert>
              React Native, Flutter, native iOS/Android development for 
              cross-platform and platform-specific mobile applications.
            </GridListItem>
            
            <GridListItem title="AI & Data Science" invert>
              TensorFlow, PyTorch, scikit-learn for machine learning models, 
              predictive analytics, and intelligent automation features.
            </GridListItem>
          </GridList>
        </div>
      </FadeIn>
    </Container>
  )
}

function LocationServices() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="Serving Businesses Across South Africa"
          className="mt-24"
        >
          <p>
            Across South Africa's diverse business landscape, we're your local 
            technology partner with deep understanding of South African business 
            needs and regional opportunities.
          </p>
        </SectionIntro>

        <div className="mt-16">
          <GridList>
            <GridListItem title="Cape Town & Western Cape" invert>
              <Link href="/web-development-cape-town" className="text-white hover:text-neutral-200">
                Serving the Mother City's diverse business landscape from 
                tourism and wine to tech startups and creative industries.
              </Link>
            </GridListItem>
            
            <GridListItem title="Johannesburg & Gauteng" invert>
              <Link href="/software-development-johannesburg" className="text-white hover:text-neutral-200">
                Supporting Johannesburg's financial services, mining companies, 
                and major corporate headquarters with enterprise solutions.
              </Link>
            </GridListItem>
            
            <GridListItem title="Durban & KwaZulu-Natal" invert>
              <Link href="/web-development-durban" className="text-white hover:text-neutral-200">
                Empowering Durban's port operations, manufacturing sector, 
                and growing technology ecosystem.
              </Link>
            </GridListItem>
            
            <GridListItem title="Pretoria & Tshwane" invert>
              <Link href="/software-development-pretoria" className="text-white hover:text-neutral-200">
                Providing enterprise-grade solutions for government departments, 
                universities, and corporate headquarters.
              </Link>
            </GridListItem>
          </GridList>
        </div>
      </FadeIn>
    </Container>
  )
}

function ProcessOverview() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <SectionIntro
          title="Our Development Process"
          className="mt-24"
        >
          <p>
            A proven methodology that ensures projects are delivered on time, 
            within budget, and exceed expectations. Clear communication and 
            collaboration every step of the way.
          </p>
        </SectionIntro>

        <div className="mt-16 space-y-12">
          <div className="flex gap-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white font-semibold">
              1
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-neutral-950">
                Discovery & Planning
              </h3>
              <p className="mt-2 text-neutral-600">
                Understanding your business goals, user needs, and technical requirements. 
                We create detailed project plans with clear timelines and milestones.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white font-semibold">
              2
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-neutral-950">
                Design & Architecture
              </h3>
              <p className="mt-2 text-neutral-600">
                Creating user experiences and system architectures that solve real 
                problems. Wireframes, prototypes, and technical specifications.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white font-semibold">
              3
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-neutral-950">
                Development & Testing
              </h3>
              <p className="mt-2 text-neutral-600">
                Building your solution with regular check-ins and feedback cycles. 
                Comprehensive testing ensures reliability and performance.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white font-semibold">
              4
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-neutral-950">
                Launch & Support
              </h3>
              <p className="mt-2 text-neutral-600">
                Smooth deployment and ongoing support to ensure your solution 
                continues performing as your business grows and evolves.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

export default function ServicesPage() {
  return (
    <>
      <PageIntro 
        eyebrow="Our Services" 
        title="Technology Solutions for South African Businesses"
      >
        <p>
          Comprehensive web development, custom software, and digital transformation 
          services. We're your trusted technology partner for growth and innovation 
          across South Africa.
        </p>
      </PageIntro>

      <CoreServices />
      <IndustryExpertise />
      <TechnologyStack />
      <LocationServices />
      <ProcessOverview />
      <ContactSection />
    </>
  )
}
