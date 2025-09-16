import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

export const metadata = {
  title: 'Our Work',
  description: 'Discover our portfolio of successful projects across AI development, web applications, and enterprise solutions.',
}

// Client logos (you'll need to add these to your public/images/clients folder)
const clients = [
  { name: 'MultiChoice', logo: '/images/clients/multichoice-logo.svg', sector: 'Media & Entertainment' },
  { name: 'ABSA', logo: '/images/clients/absa-logo.svg', sector: 'Financial Services' },
  { name: 'ZKTeco', logo: '/images/clients/zkteco-logo.svg', sector: 'Security Solutions' },
  { name: 'AVIS', logo: '/images/clients/avis-logo.svg', sector: 'Car Rental' },
  { name: 'Italtile', logo: '/images/clients/italtile-logo.svg', sector: 'Retail' },
  { name: 'Mediacom', logo: '/images/clients/mediacom-logo.svg', sector: 'Technology' },
  { name: '123Tutors', logo: '/images/clients/123tutors-logo.svg', sector: 'Education' },
  { name: 'ConvoFreaks', logo: '/images/clients/convofreaks-logo.svg', sector: 'Education SaaS' },
]

const featuredProjects = [
  {
    id: 'multichoice-ai',
    title: 'MultiChoice AI Automation',
    client: 'MultiChoice',
    description: 'AI-powered subtitle automation system delivering real-time content processing and multi-language subtitle generation for South Africa\'s largest media company.',
    services: ['AI Development', 'Process Automation', 'API Integration'],
    technologies: ['Python', 'Machine Learning', 'Real-time APIs'],
    results: ['Automated subtitle workflow', 'Multi-language support', 'Reduced processing time'],
    image: '/images/work/multichoice-preview.jpg',
    category: 'AI & Automation'
  },
  {
    id: 'absa-lms',
    title: 'ABSA ReadyToWork LMS',
    client: 'ABSA',
    description: 'Enterprise Learning Management System enabling skills development and training for thousands of employees across mobile and web platforms.',
    services: ['Full-Stack Development', 'Mobile App', 'Cloud Infrastructure'],
    technologies: ['React.js', 'Django', 'AWS', 'React Native'],
    results: ['10,000+ active users', 'Cross-platform access', 'Scalable architecture'],
    image: '/images/work/absa-preview.jpg',
    category: 'Enterprise Solutions'
  },
  {
    id: 'zkteco-platform',
    title: 'ZKTeco Digital Platform',
    client: 'ZKTeco',
    description: 'Modern corporate website with dynamic product catalog and AI-powered WhatsApp support bot for enhanced customer experience.',
    services: ['Web Development', 'AI Chatbot', 'CMS Integration'],
    technologies: ['WordPress', 'WhatsApp API', 'AI Integration'],
    results: ['24/7 automated support', 'Dynamic product showcase', 'Improved user engagement'],
    image: '/images/work/zkteco-preview.jpg',
    category: 'Web Development'
  },
  {
    id: 'labourteq-system',
    title: 'LabourTeq Workforce Management',
    client: 'AVIS & Partners',
    description: 'Enterprise workforce management system handling complex employee operations for major South African companies including AVIS car rentals.',
    services: ['System Development', 'Mobile App', 'Integration'],
    technologies: ['React.js', 'React Native', 'Django', 'AWS'],
    results: ['Enterprise deployment', 'Multi-company support', 'High system availability'],
    image: '/images/work/labourteq-preview.jpg',
    category: 'Enterprise Solutions'
  },
  {
    id: '123tutors-platform',
    title: '123Tutors AI Platform',
    client: '123Tutors',
    description: 'AI-powered educational platform with intelligent tutor matching, automated scheduling, and progress tracking for personalized learning experiences.',
    services: ['AI Development', 'Platform Build', 'Payment Systems'],
    technologies: ['Machine Learning', 'React.js', 'Payment APIs'],
    results: ['Smart tutor matching', 'Automated scheduling', 'Learning analytics'],
    image: '/images/work/123tutors-preview.jpg',
    category: 'AI & Education'
  },
  {
    id: 'mediacom-survey',
    title: 'Mediacom Survey Platform',
    client: 'Mediacom Data & Tech',
    description: 'Complex survey and data visualization platform delivered on tight deadline using modern React architecture and real-time analytics.',
    services: ['Project Rescue', 'System Architecture', 'Data Analytics'],
    technologies: ['React.js', 'GraphQL', 'AWS', 'Node.js'],
    results: ['On-time delivery', 'Modern architecture', 'Real-time analytics'],
    image: '/images/work/mediacom-preview.jpg',
    category: 'Data & Analytics'
  }
]

const technologies = [
  { name: 'React.js', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Python', category: 'Backend' },
  { name: 'Django', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'AI/ML', category: 'AI' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'PostgreSQL', category: 'Database' }
]



function ClientShowcase() {
  return (
    <div className="mt-24 sm:mt-32">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950 text-center mb-16">
          Trusted by Leading Companies
        </h2>
      </FadeIn>
      <FadeInStagger>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client) => (
            <FadeIn key={client.name} className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                <div className="h-12 flex items-center justify-center mb-4">
                  <span className="text-neutral-600 font-semibold">{client.name}</span>
                </div>
                <p className="text-xs text-neutral-500">{client.sector}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeInStagger>
    </div>
  )
}



function ProjectCard({ project }) {
  return (
    <FadeIn>
      <article className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="aspect-video bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center justify-center">
          <div className="text-neutral-400 text-center p-8">
            <h3 className="font-semibold text-neutral-900 mb-2">{project.title}</h3>
            <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display text-xl font-semibold text-neutral-950">
              {project.title}
            </h3>
            <span className="text-sm text-neutral-500">{project.client}</span>
          </div>
          
          <p className="text-neutral-600 mb-6">
            {project.description}
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-neutral-950 mb-2">Services</h4>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span key={service} className="text-xs bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full">
                    {service}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-neutral-950 mb-2">Key Results</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </FadeIn>
  )
}

function TechStack() {
  const groupedTech = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = []
    }
    acc[tech.category].push(tech.name)
    return acc
  }, {})

  return (
    <div className="mt-24 sm:mt-32">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950 text-center mb-16">
          Our Technology Stack
        </h2>
      </FadeIn>
      <FadeInStagger>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedTech).map(([category, techs]) => (
            <FadeIn key={category}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
                <h3 className="font-semibold text-neutral-950 mb-4">{category}</h3>
                <div className="space-y-2">
                  {techs.map((tech) => (
                    <div key={tech} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-neutral-600">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeInStagger>
    </div>
  )
}

export default function Work() {
  return (
    <>
      <PageIntro eyebrow="Portfolio" title="Our Work">
        <p>
          We partner with industry leaders to deliver cutting-edge solutions that drive real results. 
          From AI automation to enterprise platforms, our track record speaks for itself.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32">
        <ClientShowcase />
        
        <div className="mt-24 sm:mt-32">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-16">
              Featured Projects
            </h2>
          </FadeIn>
          <FadeInStagger>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </FadeInStagger>
        </div>

        <TechStack />

        <div className="mt-24 mb-24 sm:mt-32">
          <FadeIn>
            <div className="bg-gray-50 rounded-3xl p-12 text-center">
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
                From startups to enterprise clients, we deliver exceptional results. 
                Let&apos;s discuss how we can help transform your business with modern technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="https://calendly.com/davesampson15/30min"
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Book Free Consultation
                </Button>
                <Button href="/work" variant="outline">
                  View All Services
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* <ContactSection /> */}
    </>
  )
}
