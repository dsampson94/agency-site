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

// Industries and their transformation stories
const industries = [
  { 
    name: 'Agricultural Technology', 
    story: 'Building modern dashboards and tools for agricultural businesses to better manage their operations'
  },
  { 
    name: 'Financial Services', 
    story: 'Creating secure fintech applications and payment processing solutions'
  },
  { 
    name: 'Security Solutions', 
    story: 'Developing digital platforms for security companies to showcase their services and manage operations'
  },
  { 
    name: 'Logistics & Transportation', 
    story: 'Building workforce management systems to help transportation companies organize their operations'
  },
  { 
    name: 'Retail & E-commerce', 
    story: 'Creating custom shopping platforms and e-commerce solutions for retail businesses'
  },
  { 
    name: 'Data & Analytics', 
    story: 'Building survey platforms and data visualization tools to help companies understand their data'
  },
  { 
    name: 'Education Technology', 
    story: 'Developing learning platforms and educational tools with modern web technologies'
  },
  { 
    name: 'Enterprise Software', 
    story: 'Building custom business management solutions and enterprise applications'
  },
]

const featuredProjects = [
  {
    id: 'agricultural-platform-demo',
    title: 'Agricultural Dashboard Concept',
    client: 'Agricultural Technology',
    description: 'We designed and built a frontend concept for agricultural irrigation management. The dashboard shows soil moisture data and irrigation scheduling in a clean, modern interface that farmers can actually use.',
    impact: 'Modern web interface for agricultural data visualization',
    outcome: 'Responsive dashboard with real-time monitoring capabilities',
    image: '/images/work/irricheck-preview.jpg',
    category: 'Agricultural Technology'
  },
  {
    id: 'lms-demo-project',
    title: 'Learning Management Platform',
    client: 'Education Technology',
    description: 'We built a learning management system concept using React and Python. The platform handles course management, user progress tracking, and has a clean interface that makes online learning more engaging.',
    impact: 'Modern learning platform with intuitive user experience',
    outcome: 'Full-stack LMS with course management and progress tracking',
    image: '/images/work/absa-preview.jpg',
    category: 'Education Technology'
  },
  {
    id: 'corporate-platform-demo',
    title: 'Corporate Website Platform',
    client: 'Security Solutions',
    description: 'We built a modern corporate website for a security solutions company. The site features a clean design, dynamic product catalog, and integrated customer support chat to help visitors learn about their services.',
    impact: 'Professional digital presence with modern web technologies',
    outcome: 'Responsive website with integrated support and product showcase',
    image: '/images/work/zkteco-preview.jpg',
    category: 'Digital Transformation'
  },
  {
    id: 'workforce-management-demo',
    title: 'Workforce Management System',
    client: 'Logistics & Transportation',
    description: 'We designed and prototyped a workforce management system for transportation companies. The system helps with employee scheduling, route assignment, and compliance tracking through a web and mobile interface.',
    impact: 'Streamlined workforce operations with digital tools',
    outcome: 'Multi-platform system for employee and route management',
    image: '/images/work/labourteq-preview.jpg',
    category: 'Logistics & Transportation'
  },
  {
    id: 'ai-education-demo',
    title: 'Educational Matching Platform',
    client: 'Education Technology',
    description: 'We built a tutoring platform that connects students with tutors based on their learning needs. The system includes smart matching, scheduling tools, and progress tracking to make online tutoring more organized and effective.',
    impact: 'Modern platform connecting students with the right tutors',
    outcome: 'AI-powered matching system with scheduling and progress tracking',
    image: '/images/work/123tutors-preview.jpg',
    category: 'Education Technology'
  },
  {
    id: 'mediacom-survey',
    title: 'Survey & Analytics Platform',
    client: 'Mediacom Data & Tech',
    description: 'We worked with Mediacom to build a comprehensive survey and data visualization platform. The system handles complex surveys, processes responses, and presents the data through interactive dashboards and real-time analytics.',
    impact: 'Robust platform for survey management and data analysis',
    outcome: 'Real-time survey processing with modern analytics dashboard',
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



function IndustryShowcase() {
  return (
    <div className="mt-24 sm:mt-32">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950 text-center mb-16">
          Industries We've Transformed
        </h2>
      </FadeIn>
      <FadeInStagger>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry) => (
            <FadeIn key={industry.name} className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <h3 className="text-neutral-900 font-semibold text-lg">{industry.name}</h3>
                </div>
                <p className="text-sm text-neutral-600">{industry.story}</p>
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
              <h4 className="text-sm font-semibold text-neutral-950 mb-2">Impact</h4>
              <p className="text-sm text-neutral-600">{project.impact}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-neutral-950 mb-2">Results</h4>
              <p className="text-sm text-neutral-600">{project.outcome}</p>
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
              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <h3 className="font-semibold text-neutral-950 mb-4">{category}</h3>
                <div className="space-y-2">
                  {techs.map((tech) => (
                    <div key={tech} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-neutral-950 rounded-full"></div>
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
      <PageIntro eyebrow="Portfolio" title="Stories of Transformation">
        <p>
          Every business has challenges. Here are the stories of how we've helped companies 
          across different industries overcome theirs and achieve remarkable results.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32">
        <IndustryShowcase />
        
        <div className="mt-24 sm:mt-32">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-16">
              Success Stories
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
                Ready to Start Your Transformation?
              </h2>
              <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
                Every success story starts with a conversation. Let&apos;s discuss how we can 
                help write your company&apos;s next chapter of growth and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="https://calendly.com/davesampson15/30min"
                  className="bg-indigo-600 hover:bg-indigo-700"
                >
                  Book Free Consultation
                </Button>
                <Button href="/services" variant="outline">
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
