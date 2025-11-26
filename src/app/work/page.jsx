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

// Technology sectors we specialize in
const sectors = [
  { name: 'Agricultural Technology', focus: 'IoT Dashboards & Data Visualization' },
  { name: 'Financial Services', focus: 'Secure Fintech Applications' },
  { name: 'Security Solutions', focus: 'Corporate Digital Platforms' },
  { name: 'Logistics & Transportation', focus: 'Workforce Management Systems' },
  { name: 'Retail & E-commerce', focus: 'Custom Shopping Platforms' },
  { name: 'Data & Analytics', focus: 'Survey & Visualization Tools' },
  { name: 'Education Technology', focus: 'AI-Powered Learning Platforms' },
  { name: 'Enterprise Software', focus: 'Business Management Solutions' },
]

const featuredProjects = [
  {
    id: 'agricultural-platform-demo',
    title: 'Agricultural Irrigation Platform',
    client: 'Demo Project',
    description: 'Frontend development concept for agricultural irrigation scheduling platforms. Designed responsive dashboards for real-time soil moisture monitoring and forecasted irrigation recommendations using modern data visualization.',
    services: ['Frontend Development', 'Dashboard Design', 'Data Visualization', 'Responsive Web Design'],
    technologies: ['React.js', 'Chart.js', 'Responsive CSS', 'REST APIs'],
    results: ['Intuitive dashboard design', 'Real-time data visualization', 'Mobile-responsive layout', 'Modern user experience'],
    image: '/images/work/irricheck-preview.jpg',
    category: 'Agricultural Technology'
  },
  {
    id: 'lms-demo-project',
    title: 'Learning Management System',
    client: 'Demo Project',
    description: 'Learning Management System concept for employee training using React and Python backend architecture.',
    services: ['React Development', 'Python Backend', 'Database Design'],
    technologies: ['React.js', 'Python', 'PostgreSQL'],
    results: ['Modern training interface', 'User-friendly design', 'Scalable architecture'],
    image: '/images/work/absa-preview.jpg',
    category: 'Web Applications'
  },
  {
    id: 'corporate-platform-demo',
    title: 'Corporate Digital Platform',
    client: 'Demo Project',
    description: 'Modern corporate website concept with dynamic product catalog and AI-powered customer support integration.',
    services: ['Web Development', 'AI Integration', 'CMS Setup'],
    technologies: ['WordPress', 'API Integration', 'AI Tools'],
    results: ['Automated support concept', 'Dynamic product display', 'Enhanced user experience'],
    image: '/images/work/zkteco-preview.jpg',
    category: 'Web Development'
  },
  {
    id: 'workforce-management-demo',
    title: 'Workforce Management System',
    client: 'Demo Project',
    description: 'Enterprise workforce management system concept designed for complex employee operations and multi-company environments.',
    services: ['System Architecture', 'Mobile Development', 'Integration Planning'],
    technologies: ['React.js', 'React Native', 'Django', 'AWS'],
    results: ['Scalable architecture', 'Multi-platform support', 'Enterprise-ready design'],
    image: '/images/work/labourteq-preview.jpg',
    category: 'Enterprise Solutions'
  },
  {
    id: 'ai-education-demo',
    title: 'AI Education Platform Concept',
    client: 'Demo Project',
    description: 'AI-powered educational platform concept featuring intelligent matching algorithms, automated scheduling, and progress tracking for personalized learning.',
    services: ['AI Development', 'Platform Architecture', 'System Design'],
    technologies: ['Machine Learning', 'React.js', 'API Design'],
    results: ['Smart matching algorithms', 'Automated scheduling system', 'Learning analytics dashboard'],
    image: '/images/work/123tutors-preview.jpg',
    category: 'AI & Education'
  },
  {
    id: 'mediacom-survey',
    title: 'Mediacom Survey Platform',
    client: 'Mediacom Data & Tech',
    description: 'Complex survey and data visualization platform designed with modern React architecture and real-time analytics capabilities.',
    services: ['Project Rescue', 'System Architecture', 'Data Analytics'],
    technologies: ['React.js', 'GraphQL', 'AWS', 'Node.js'],
    results: ['Scalable architecture', 'Modern development', 'Real-time capabilities'],
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



function SectorShowcase() {
  return (
    <div className="mt-24 sm:mt-32">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950 text-center mb-16">
          Industries We Specialize In
        </h2>
      </FadeIn>
      <FadeInStagger>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sectors.map((sector) => (
            <FadeIn key={sector.name} className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <h3 className="text-neutral-900 font-semibold text-lg">{sector.name}</h3>
                </div>
                <p className="text-sm text-neutral-600">{sector.focus}</p>
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
            <span className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
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
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></div>
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
          Some of Our Favorite Tech Choices
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
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
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
          We specialize in building cutting-edge solutions designed to drive real results. 
          From AI automation to enterprise platforms, our expertise covers the full spectrum.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32">
        <SectorShowcase />
        
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
                  className="bg-indigo-600 hover:bg-indigo-700"
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
